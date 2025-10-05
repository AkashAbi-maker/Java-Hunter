"use client"

import { useEffect, useRef } from "react"

export function useButtonAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/solo_leveling_menu_pop-vuITVUbhJyLBeOJ4zrqwms04ddJzsm.mp3")
    audioRef.current.volume = 0.5

    // Add click listener to all buttons
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "BUTTON" || target.closest("button") || target.closest("a")) {
        if (audioRef.current) {
          audioRef.current.currentTime = 0
          audioRef.current.play().catch(() => {
            // Ignore autoplay errors
          })
        }
      }
    }

    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [])

  return null
}
