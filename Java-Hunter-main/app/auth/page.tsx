"use client"

import type React from "react"

import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { RotatingVideoBackground } from "@/components/rotating-video-background"
import { BladeStrikeTransition } from "@/components/blade-strike-transition"

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const router = useRouter()

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    const supabase = createClient()
    setIsLoading(true)
    setError(null)

    try {
      if (isSignUp) {
        if (password !== confirmPassword) {
          setError("Passwords do not match")
          setIsLoading(false)
          return
        }

        if (password.length < 6) {
          setError("Password must be at least 6 characters long")
          setIsLoading(false)
          return
        }

        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL || `${window.location.origin}/home`,
          },
        })
        if (error) throw error

        // Show success message
        alert("Sign up successful! Please check your email to confirm your account.")
        setIsSignUp(false)
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        if (error) throw error

        // Trigger blade strike transition
        setIsTransitioning(true)
      }
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  const handleTransitionComplete = () => {
    router.push("/home")
  }

  return (
    <>
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Rotating Video Background */}
        <RotatingVideoBackground />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-12">
          <div className="w-full max-w-md">
            {/* System notification header */}
            <div className="text-center mb-8">
              <div className="inline-block px-6 py-2 bg-card/30 backdrop-blur-md border-2 border-primary/50 rounded-lg neon-border animate-pulse-glow mb-6">
                <p className="text-sm text-primary font-mono glow-purple">⚡ HUNTER REGISTRATION SYSTEM</p>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="glow-purple animate-pulse-glow">ARISE</span>
                <br />
                <span className="text-foreground">AS A JAVA</span>
                <br />
                <span className="glow-cyan animate-pulse-glow">DEVELOPER</span>
              </h1>

              <div className="bg-card/20 backdrop-blur-md border border-cyan-500/30 rounded-lg p-4 neon-border-cyan">
                <p className="text-sm text-foreground/90">
                  Enter the dungeon of code. Complete quests. Level up your skills. Transform from an E-Rank beginner to
                  an S-Rank Java Master.
                </p>
              </div>
            </div>

            {/* Auth Form Card */}
            <div className="bg-card/30 backdrop-blur-xl border-2 border-primary/30 rounded-2xl p-8 neon-border-purple shadow-[0_0_50px_rgba(168,85,247,0.3)]">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-center glow-purple mb-2">
                  {isSignUp ? "CREATE HUNTER PROFILE" : "HUNTER LOGIN"}
                </h2>
                <p className="text-sm text-center text-muted-foreground">
                  {isSignUp ? "Register your hunter credentials" : "Access your hunter profile"}
                </p>
              </div>

              <form onSubmit={handleAuth} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground glow-cyan text-sm font-semibold">
                    EMAIL ADDRESS
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="hunter@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-background/50 border-2 border-cyan-500/30 focus:border-cyan-500 rounded-lg h-12 text-foreground placeholder:text-muted-foreground neon-input"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-foreground glow-cyan text-sm font-semibold">
                    PASSWORD
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-background/50 border-2 border-cyan-500/30 focus:border-cyan-500 rounded-lg h-12 text-foreground neon-input"
                  />
                </div>

                {isSignUp && (
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password" className="text-foreground glow-cyan text-sm font-semibold">
                      CONFIRM PASSWORD
                    </Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="bg-background/50 border-2 border-cyan-500/30 focus:border-cyan-500 rounded-lg h-12 text-foreground neon-input"
                    />
                  </div>
                )}

                {error && (
                  <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3">
                    <p className="text-sm text-red-400">{error}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg box-glow-purple border-2 border-primary/50 hover:border-primary transition-all"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="glow-purple">PROCESSING...</span>
                  ) : (
                    <span className="glow-purple">{isSignUp ? "REGISTER HUNTER" : "ENTER GATE"}</span>
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <button
                  onClick={() => {
                    setIsSignUp(!isSignUp)
                    setError(null)
                  }}
                  className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors glow-cyan"
                >
                  {isSignUp ? "Already a hunter? Login here" : "New hunter? Register here"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blade Strike Transition */}
      {isTransitioning && <BladeStrikeTransition onComplete={handleTransitionComplete} />}
    </>
  )
}
