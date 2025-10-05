"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"

export default function LandingPage() {
  const router = useRouter()
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    // No auto-redirect timer; we control duration after user starts playback
    return () => {}
  }, [router])

  // Start playback with audio for ~3 seconds on first interaction
  const handleUserInteract = () => {
    const v = videoRef.current
    if (!v || started) return
    setStarted(true)
    try {
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('hasUserInteracted', '1')
      }
    } catch { /* ignore sessionStorage access errors */ }
    v.muted = false
    v.volume = 1
    const p = v.play()
    if (p && typeof (p as any).catch === "function") {
      (p as Promise<void>).catch(() => { /* ignore autoplay errors */ })
    }
    // After ~3 seconds, navigate
    setTimeout(() => {
      router.push("/intro")
    }, 3000)
  }

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden bg-black"
      onPointerDown={handleUserInteract}
      onKeyDown={handleUserInteract}
      role="button"
      tabIndex={0}
      aria-label="Video container"
    >
      {/* SLA Title Video */}
      {/* Do not autoplay; start on first interaction to allow audio */}
      <video
        autoPlay={false}
        playsInline
        preload="auto"
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        onEnded={() => router.push("/intro")}
      >
        <source src="/SLA-title.mp4" type="video/mp4" />
      </video>

      {/* Minimal start overlay prompting a tap/click to enable audio */}
      {!started && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black">
        <div 
          className="demon-btn" 
          onClick={handleUserInteract}
          role="button"
          aria-label="Tap to start"
        >
          <span className="demon-text">TAP TO START</span>
          <div className="lightning"></div>
          <div className="lightning delay"></div>
        </div>
      
        <style jsx>{`
          .demon-btn {
            position: relative;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px 70px;
            border-radius: 12px;
            background: rgba(0, 0, 0, 0.9);
            border: 2px solid #00faff;
            overflow: hidden;
            box-shadow: 0 0 25px #00faff, inset 0 0 15px #00faff;
            transition: 0.3s ease;
          }
      
          /* Demonic glowing text */
          .demon-text {
            font-family: 'Cinzel', serif; /* Gothic/demonic font */
            font-size: 28px;
            font-weight: 900;
            letter-spacing: 6px;
            color: #00faff;
            text-shadow: 
              0 0 10px #00faff,
              0 0 30px #00faff,
              0 0 60px #0077ff,
              0 0 100px #00faff;
            animation: flicker 3s infinite;
            position: relative;
            z-index: 2;
          }
      
          /* Lightning strike lines */
          .lightning {
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: repeating-linear-gradient(
              75deg,
              transparent,
              transparent 20px,
              rgba(0, 250, 255, 0.6) 22px,
              transparent 24px
            );
            opacity: 0.4;
            animation: crackle 1.5s infinite linear;
            pointer-events: none;
            z-index: 1;
          }
      
          .lightning.delay {
            animation-delay: 0.7s;
            opacity: 0.3;
            filter: blur(2px);
          }
      
          /* Flickering text effect */
          @keyframes flicker {
            0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; }
            20%, 24%, 55% { opacity: 0.3; }
          }
      
          /* Lightning crackling */
          @keyframes crackle {
            0% { transform: translate(0,0) rotate(0deg); }
            25% { transform: translate(-10px, 10px) rotate(5deg); }
            50% { transform: translate(10px, -10px) rotate(-5deg); }
            75% { transform: translate(-5px, 5px) rotate(3deg); }
            100% { transform: translate(0,0) rotate(0deg); }
          }
      
          /* Page-level unstable lightning aura */
          body {
            background: #000;
            overflow: hidden;
          }
          body::before {
            content: "";
            position: absolute;
            inset: 0;
            background: radial-gradient(circle, rgba(0, 200, 255, 0.2), transparent 70%);
            animation: aura 5s infinite ease-in-out;
            pointer-events: none;
            z-index: 0;
          }
      
          @keyframes aura {
            0%, 100% { transform: scale(1); opacity: 0.5; }
            50% { transform: scale(1.1); opacity: 0.8; }
          }
        `}</style>
      </div>
      )}
    </div>
  )
}
