"use client"

import type React from "react"

import { useButtonAudio } from "@/hooks/use-button-audio"

export function AudioProvider({ children }: { children: React.ReactNode }) {
  useButtonAudio()
  return <>{children}</>
}
