import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { AudioProvider } from "@/components/audio-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "Java Hunter - Arise as a Java Developer",
  description:
    "Learn Java programming through an immersive Solo Leveling themed RPG experience. Complete quests, level up from E-Rank to S-Rank, and master Java development.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <AudioProvider>
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </AudioProvider>
        <Analytics />
      </body>
    </html>
  )
}
