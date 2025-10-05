"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Code,
  Lightbulb,
  Eye,
  EyeOff,
  Play,
  Send,
  Home,
  Trophy,
  Zap,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"
import { getChallengesByRank } from "@/lib/challenges-data"
import type { challengesData } from "@/lib/challenges-data"

export function ChallengeInterface({
  challenge,
  rank,
  challengeId,
}: {
  challenge: (typeof challengesData)[0]
  rank: string
  challengeId: number
}) {
  const [showHint, setShowHint] = useState(false)
  const [showSolution, setShowSolution] = useState(false)
  const [code, setCode] = useState(challenge.starterCode)
  const [output, setOutput] = useState("")
  const [isRunning, setIsRunning] = useState(false)
  const [progress, setProgress] = useState(0)

  const rankChallenges = getChallengesByRank(rank)
  const hasPrevious = challengeId > 0
  const hasNext = challengeId < rankChallenges.length - 1

  const handleRunCode = async () => {
    setIsRunning(true)
    setOutput("Compiling and running your code...\n")

    setTimeout(() => {
      if (code.trim() !== challenge.starterCode.trim() && code.length > challenge.starterCode.length) {
        setOutput(
          "✓ Code compiled successfully!\n\nOutput:\n[Your code output would appear here]\n\n[Process completed - exit code 0]",
        )
        setProgress(50)
      } else {
        setOutput("⚠ Your code compiled but you haven't written any solution yet.\nTry implementing the objective!")
      }
      setIsRunning(false)
    }, 1500)
  }

  const handleSubmit = async () => {
    setOutput("Validating your solution...\n")

    setTimeout(() => {
      if (code.trim().length > challenge.starterCode.length + 20) {
        setOutput(
          `🎉 QUEST COMPLETED!\n\n✓ All test cases passed\n✓ +${challenge.xpReward} XP earned\n✓ ${challenge.rank}-Rank Quest cleared\n\nYou've leveled up your Java skills!`,
        )
        setProgress(100)
      } else {
        setOutput(`❌ Solution incomplete. Check the objective and try again.\nHint: ${challenge.hint}`)
      }
    }, 1000)
  }

  const getRankColor = (rank: string) => {
    const colors: Record<string, string> = {
      e: "bg-gray-600",
      d: "bg-green-600",
      c: "bg-blue-600",
      b: "bg-purple-600",
      a: "bg-orange-600",
      s: "bg-red-600",
    }
    return colors[rank.toLowerCase()] || "bg-gray-600"
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-[oklch(0.10_0.03_270)] to-background">
      {/* Top Navigation Bar */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link href="/dungeons">
                <Button variant="ghost" size="sm">
                  <Home className="h-4 w-4 mr-2" />
                  Exit Dungeon
                </Button>
              </Link>
              <div className="hidden md:block">
                <Badge className={`${getRankColor(rank)} text-white border-0`}>{challenge.rank}-RANK QUEST</Badge>
              </div>
            </div>

            {/* Player Stats */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                <span className="font-mono text-sm">3/3</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <span className="font-mono text-sm">2,450 XP</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-secondary" />
                <span className="font-mono text-sm">Level 5</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="fixed top-20 left-0 w-64 h-64 opacity-10 pointer-events-none hidden xl:block">
        <img
          src="/solo-leveling-sung-jinwoo-shadow-monarch-aura.jpg"
          alt="Shadow Monarch"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="fixed bottom-20 right-0 w-64 h-64 opacity-10 pointer-events-none hidden xl:block">
        <img
          src="/solo-leveling-system-notification-level-up-window.jpg"
          alt="Level Up"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <Link href={hasPrevious ? `/challenge/${rank}/${challengeId - 1}` : "#"}>
            <Button variant="outline" disabled={!hasPrevious} className="gap-2 bg-transparent">
              <ChevronLeft className="h-4 w-4" />
              Previous Quest
            </Button>
          </Link>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Quest {challengeId + 1} of {rankChallenges.length}
            </p>
          </div>

          <Link href={hasNext ? `/challenge/${rank}/${challengeId + 1}` : "#"}>
            <Button variant="outline" disabled={!hasNext} className="gap-2 bg-transparent">
              Next Quest
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Panel - Quest Info */}
          <div className="space-y-6">
            {/* Quest Header */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/30 box-glow-purple p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <Badge className={`${getRankColor(rank)} text-white border-0 mb-3`}>
                    {challenge.rank}-RANK QUEST
                  </Badge>
                  <h1 className="text-3xl font-bold mb-2 text-balance">{challenge.title}</h1>
                  <p className="text-muted-foreground leading-relaxed">{challenge.description}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Reward</p>
                  <p className="text-2xl font-bold text-primary">+{challenge.xpReward} XP</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Quest Progress</span>
                  <span className="text-foreground font-semibold">{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            </Card>

            {/* Quest Objective */}
            <Card className="bg-card/50 backdrop-blur-sm border-border p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">📜</span>
                Quest Objective
              </h2>
              <div className="space-y-4">
                <p className="text-foreground leading-relaxed">{challenge.objective}</p>

                {challenge.testCases.length > 0 && (
                  <div className="bg-muted/30 rounded-lg p-4 border border-border">
                    <p className="text-sm font-semibold mb-2 text-primary">Expected Output:</p>
                    <pre className="text-sm font-mono text-foreground">{challenge.testCases[0].expectedOutput}</pre>
                  </div>
                )}
              </div>
            </Card>

            {/* Hint Card */}
            <Card className="bg-card/50 backdrop-blur-sm border-border p-6">
              <Button
                variant="outline"
                className="w-full justify-start border-accent/50 text-accent hover:bg-accent/10 mb-4 bg-transparent"
                onClick={() => setShowHint(!showHint)}
              >
                <Lightbulb className="mr-2 h-5 w-5" />
                <span className="flex-1 text-left">{showHint ? "Hide Hint" : "Need a Hint?"}</span>
                {showHint ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </Button>

              {showHint && (
                <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 animate-in slide-in-from-top-2">
                  <p className="text-sm font-semibold mb-2 text-accent">💡 System Hint:</p>
                  <p className="text-sm text-foreground leading-relaxed">{challenge.hint}</p>
                </div>
              )}
            </Card>

            {/* Solution Card */}
            <Card className="bg-card/50 backdrop-blur-sm border-border p-6">
              <Button
                variant="outline"
                className="w-full justify-start border-primary/50 text-primary hover:bg-primary/10 mb-4 bg-transparent"
                onClick={() => setShowSolution(!showSolution)}
              >
                <Code className="mr-2 h-5 w-5" />
                <span className="flex-1 text-left">{showSolution ? "Hide Solution" : "View Solution"}</span>
                {showSolution ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </Button>

              {showSolution && (
                <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 animate-in slide-in-from-top-2">
                  <p className="text-sm font-semibold mb-3 text-primary">⚔️ Master's Solution:</p>
                  <pre className="bg-[oklch(0.08_0.02_270)] rounded-lg p-4 text-sm font-mono overflow-x-auto">
                    <code className="text-foreground font-semibold">{challenge.solution}</code>
                  </pre>
                  <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                    Study this solution carefully to understand the best approach.
                  </p>
                </div>
              )}
            </Card>
          </div>

          {/* Right Panel - Code Editor */}
          <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <Card className="bg-card/50 backdrop-blur-sm border-border overflow-hidden">
              {/* Editor Header */}
              <div className="bg-muted/30 px-4 py-3 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Code className="h-5 w-5 text-primary" />
                  <span className="font-mono text-sm">Main.java</span>
                </div>
                <Badge variant="outline" className="text-xs font-mono">
                  {challenge.rank}-Rank Hunter
                </Badge>
              </div>

              {/* Code Editor */}
              <div className="p-4">
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-[400px] bg-[oklch(0.12_0.02_270)] rounded-lg p-4 font-mono text-sm text-foreground font-semibold resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                  spellCheck={false}
                  style={{ color: "oklch(0.95 0.02 270)" }}
                />
              </div>

              {/* Action Buttons */}
              <div className="p-4 border-t border-border space-y-3">
                <Button
                  onClick={handleRunCode}
                  disabled={isRunning}
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                >
                  <Play className="mr-2 h-4 w-4" />
                  {isRunning ? "Running..." : "Run Code"}
                </Button>
                <Button
                  onClick={handleSubmit}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground box-glow-purple"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Submit Solution
                </Button>
              </div>
            </Card>

            {/* Output Console */}
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <div className="bg-muted/30 px-4 py-3 border-b border-border">
                <span className="font-mono text-sm text-muted-foreground">Console Output</span>
              </div>
              <div className="p-4">
                <div className="bg-[oklch(0.12_0.02_270)] rounded-lg p-4 min-h-[120px] font-mono text-sm">
                  <pre
                    className="text-foreground font-semibold whitespace-pre-wrap"
                    style={{ color: "oklch(0.90 0.02 270)" }}
                  >
                    {output || "Run your code to see the output..."}
                  </pre>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
