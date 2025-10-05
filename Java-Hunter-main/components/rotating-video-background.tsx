"use client"

import { useEffect, useState } from "react"

// Local video files placed under public/images/
// Example filenames: "SLA video1.mp4" ... "SLA video7.mp4"
// They will be served at "/images/SLA%20video1.mp4" etc.
const SOLO_LEVELING_VIDEOS = [
  "/images/SLA%20video1.mp4",
  "/images/SLA%20video2.mp4",
  "/images/SLA%20video3.mp4",
  "/images/SLA%20video4.mp4",
  "/images/SLA%20video5.mp4",
  "/images/SLA%20video6.mp4",
  "/images/SLA%20video7.mp4",
]

export function RotatingVideoBackground() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % SOLO_LEVELING_VIDEOS.length)
    }, 5000) // Change video every 5 seconds

    return () => clearInterval(interval)
  }, [])

  // Ensure active video is playing and others are paused when index changes
  useEffect(() => {
    const vids = Array.from(document.querySelectorAll<HTMLVideoElement>("video[data-rotating-bg]"))
    vids.forEach((v) => {
      const isActive = v.dataset.active === "1"
      try {
        if (isActive) {
          v.muted = true
          v.defaultMuted = true
          const p = v.play()
          if (p && typeof (p as any).catch === "function") {
            ;(p as Promise<void>).catch(() => {})
          }
        } else {
          v.pause()
        }
      } catch {}
    })

    // Watchdog: if active video isn't ready soon, skip to the next one
    const timer = setTimeout(() => {
      const active = document.querySelector<HTMLVideoElement>('video[data-rotating-bg][data-active="1"]')
      if (!active) return
      const ready = active.readyState >= 2 // HAVE_CURRENT_DATA
      if (!ready) {
        // Try to load and play; if still not ready after another short delay, advance
        try {
          active.load()
          const p = active.play()
          if (p && typeof (p as any).catch === 'function') {
            ;(p as Promise<void>).catch(() => {})
          }
        } catch {}
        setTimeout(() => {
          const stillNotReady = !active || active.readyState < 2
          if (stillNotReady) {
            setCurrentVideoIndex((prev) => (prev + 1) % SOLO_LEVELING_VIDEOS.length)
          }
        }, 800)
      }
    }, 700)

    return () => clearTimeout(timer)
  }, [currentVideoIndex])

  // Pause videos when tab is hidden to reduce CPU usage
  useEffect(() => {
    const handleVisibility = () => {
      const vids = document.querySelectorAll<HTMLVideoElement>("video[data-rotating-bg]")
      vids.forEach((v) => {
        if (document.hidden) {
          v.pause()
        } else {
          if (v.dataset.active === "1") {
            const p = v.play()
            if (p && typeof (p as any).catch === "function") {
              ;(p as Promise<void>).catch(() => {})
            }
          }
        }
      })
    }
    document.addEventListener("visibilitychange", handleVisibility)
    return () => document.removeEventListener("visibilitychange", handleVisibility)
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {(() => {
        const current = currentVideoIndex
        const next = (currentVideoIndex + 1) % SOLO_LEVELING_VIDEOS.length
        const indices = [current, next]
        return indices.map((videoIndex) => {
          const src = SOLO_LEVELING_VIDEOS[videoIndex]
          const isActive = videoIndex === currentVideoIndex
          return (
            <video
              key={`${src}-${videoIndex}`}
              autoPlay={isActive}
              loop={isActive}
              muted
              playsInline
              disableRemotePlayback
              preload={isActive ? "auto" : "metadata"}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-20" : "opacity-0"
              }`}
              style={{
                transform: "scale(1.2)",
              }}
              data-rotating-bg
              data-active={isActive ? "1" : "0"}
              onLoadedData={(e) => {
                // Ensure active video is playing in case browser paused it
                if (isActive) {
                  const v = e.currentTarget
                  const p = v.play()
                  if (p && typeof (p as any).catch === "function") {
                    ;(p as Promise<void>).catch(() => {})
                  }
                }
              }}
              onCanPlay={(e) => {
                if (isActive) {
                  const v = e.currentTarget
                  const p = v.play()
                  if (p && typeof (p as any).catch === 'function') {
                    ;(p as Promise<void>).catch(() => {})
                  }
                }
              }}
              onError={() => {
                if (isActive) {
                  // Skip broken video
                  setCurrentVideoIndex((prev) => (prev + 1) % SOLO_LEVELING_VIDEOS.length)
                }
              }}
            >
              <source src={src} type="video/mp4" />
            </video>
          )
        })
      })()}
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/60" />
    </div>
  )
}

