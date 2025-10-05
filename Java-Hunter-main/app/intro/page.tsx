"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { BladeStrikeTransition } from "@/components/blade-strike-transition"

export default function IntroPage() {
  const router = useRouter()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  // Unmute and play background video after first user interaction
  useEffect(() => {
    // If the user interacted on the landing page, we can auto-enable audio now
    try {
      if (typeof window !== 'undefined' && sessionStorage.getItem('hasUserInteracted') === '1') {
        const v = videoRef.current
        if (v) {
          v.muted = false
          v.volume = 1
          const p = v.play()
          if (p && typeof (p as any).catch === 'function') {
            ;(p as Promise<void>).catch(() => { /* ignore */ })
          }
        }
      }
    } catch {}

    const enableAudio = () => {
      const v = videoRef.current
      if (!v) return
      v.muted = false
      v.volume = 1
      const p = v.play()
      if (p && typeof (p as any).catch === "function") {
        ;(p as Promise<void>).catch(() => { /* ignore autoplay errors */ })
      }
      window.removeEventListener("pointerdown", enableAudio)
      window.removeEventListener("keydown", enableAudio)
      window.removeEventListener("touchstart", enableAudio)
    }
    window.addEventListener("pointerdown", enableAudio)
    window.addEventListener("keydown", enableAudio)
    window.addEventListener("touchstart", enableAudio)
    return () => {
      window.removeEventListener("pointerdown", enableAudio)
      window.removeEventListener("keydown", enableAudio)
      window.removeEventListener("touchstart", enableAudio)
    }
  }, [])

  const handleArise = () => {
    const v = videoRef.current
    if (v) {
      v.muted = false
      v.volume = 1
      const p = v.play()
      if (p && typeof (p as any).catch === "function") {
        ;(p as Promise<void>).catch(() => { /* ignore autoplay errors */ })
      }
    }
    setIsTransitioning(true)
  }

  const handleTransitionComplete = () => {
    router.push("/auth")
  }

  return (
    <>
      <div className="relative min-h-screen w-full overflow-hidden bg-black">
        {/* Local Video Background - Full screen, no UI */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            ref={videoRef}
            className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 object-cover"
          >
            <source src="/images/SLA%20video.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for better button visibility */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Centered Neon Button */}
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <button
            onClick={handleArise}
            className="group relative px-16 py-6 text-3xl font-bold transition-all duration-300 hover:scale-110"
          >
            {/* Outer glow halo */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 blur-3xl opacity-60 group-hover:opacity-100 animate-pulse-glow" />

            {/* Middle glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 blur-xl opacity-75 group-hover:opacity-100 animate-pulse" />

            {/* Button background */}
            <div className="absolute inset-0 rounded-2xl bg-black/80 backdrop-blur-sm" />

            {/* Electric outline */}
            <div className="absolute inset-0 rounded-2xl border-4 border-cyan-400 group-hover:border-cyan-300 animate-flicker shadow-[0_0_20px_rgba(34,211,238,0.8)]" />

            {/* Inner glow */}
            <div className="absolute inset-2 rounded-xl bg-gradient-to-b from-cyan-500/20 to-transparent" />

            {/* Button text with neon glow */}
            <span className="relative z-10 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,1)] animate-flicker font-mono tracking-wider">
              TAP TO ARISE
            </span>

            {/* Shimmer effect */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>

            {/* Floating particles around button */}
            <div className="absolute inset-0 overflow-visible pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-float-particle shadow-[0_0_10px_rgba(34,211,238,1)]"
                  style={{
                    left: `${50 + Math.cos((i * Math.PI * 2) / 8) * 60}%`,
                    top: `${50 + Math.sin((i * Math.PI * 2) / 8) * 60}%`,
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: `${2 + Math.random()}s`,
                  }}
                />
              ))}
            </div>
          </button>
        </div>
      </div>

      {/* Blade Strike Transition */}
      {isTransitioning && <BladeStrikeTransition onComplete={handleTransitionComplete} />}

      <style jsx>{`
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
          75% { opacity: 0.95; }
        }

        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) scale(1.5);
            opacity: 1;
          }
        }

        .animate-flicker {
          animation: flicker 2s ease-in-out infinite;
        }

        .animate-float-particle {
          animation: float-particle 3s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}
