"use client"

import { useEffect, useState } from "react"

export function BladeStrikeTransition({ onComplete }: { onComplete: () => void }) {
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false)
      onComplete()
    }, 800)

    return () => clearTimeout(timer)
  }, [onComplete])

  if (!isAnimating) return null

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      {/* Blade strike effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-purple-500 to-transparent opacity-80"
          style={{
            clipPath: "polygon(0 0, 100% 0, 0 100%)",
            animation: "blade-strike 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
          }}
        />
      </div>

      {/* Flash effect */}
      <div
        className="absolute inset-0 bg-white"
        style={{
          animation: "flash 0.3s ease-out forwards",
        }}
      />

      <style jsx>{`
        @keyframes blade-strike {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(-45deg) scale(1.5);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(-45deg) scale(1.5);
            opacity: 0;
          }
        }

        @keyframes flash {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
