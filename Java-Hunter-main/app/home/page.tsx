import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { DungeonPreview } from "@/components/dungeon-preview"
import { RotatingVideoBackground } from "@/components/rotating-video-background"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-[oklch(0.10_0.03_270)] to-background relative">
      <RotatingVideoBackground />
      <div className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <DungeonPreview />
      </div>
    </main>
  )
}
