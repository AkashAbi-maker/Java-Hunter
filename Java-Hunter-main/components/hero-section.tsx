import { Button } from "@/components/ui/button"
import { Swords, Zap } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-12 sm:py-0">
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(0.25_0.15_285_/_0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,oklch(0.25_0.15_220_/_0.2),transparent_40%)]" />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-pulse-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Solo Leveling manga panel background */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="/solo-leveling-sung-jinwoo-standing-in-dark-gate-po.jpg"
          alt="Solo Leveling Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-6 sm:space-y-8">
        {/* System notification style header with enhanced neon glow */}
        <div className="inline-block mb-4">
          <div className="px-4 sm:px-6 py-2 bg-card/30 backdrop-blur-md border-2 border-primary/50 rounded-lg neon-border animate-pulse-glow">
            <p className="text-xs sm:text-sm text-primary font-mono glow-purple">⚡ SYSTEM NOTIFICATION</p>
          </div>
        </div>

        {/* Main title with enhanced glow effect */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight text-balance px-4">
          <span className="glow-purple animate-pulse-glow">ARISE</span>
          <br />
          <span className="text-foreground">AS A JAVA</span>
          <br />
          <span className="glow-cyan animate-pulse-glow">DEVELOPER</span>
        </h1>

        {/* Subtitle with neon frame */}
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-card/20 backdrop-blur-md border border-cyan-500/30 rounded-lg p-6 neon-border-cyan">
            <p className="text-base sm:text-xl md:text-2xl text-foreground leading-relaxed">
              Enter the dungeon of code. Complete quests. Level up your skills. Transform from an E-Rank beginner to an
              S-Rank Java Master.
            </p>
          </div>
        </div>

        {/* CTA Buttons with enhanced glow */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 sm:pt-8 px-4">
          <Link href="/home">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold box-glow-purple group border-2 border-primary/50 hover:border-primary transition-all"
            >
              <Swords className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              <span className="glow-purple">Enter the Gate</span>
            </Button>
          </Link>
          <Link href="/dungeons">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-secondary/50 text-secondary hover:bg-secondary/10 hover:border-secondary px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold bg-transparent backdrop-blur-sm transition-all"
            >
              <Zap className="mr-2 h-5 w-5" />
              <span className="glow-cyan">View Dungeons</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
