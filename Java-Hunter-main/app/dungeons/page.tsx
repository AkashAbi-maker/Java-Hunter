import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Lock, Unlock, Zap } from "lucide-react"
import Link from "next/link"
import { RotatingVideoBackground } from "@/components/rotating-video-background"
import { getChallengesByRank, getAllChallenges } from "@/lib/challenges-data"

export default function DungeonsPage({ searchParams }: { searchParams: { rank?: string } }) {
  const rankFilter = searchParams.rank?.toUpperCase()
  const allChallenges = getAllChallenges()
  const filteredChallenges = rankFilter ? getChallengesByRank(rankFilter) : allChallenges

  const challengesByRank = filteredChallenges.reduce(
    (acc, challenge, index) => {
      const rank = challenge.rank
      if (!acc[rank]) {
        acc[rank] = []
      }
      // Store both challenge and its original index
      const originalIndex = allChallenges.findIndex((c) => c.title === challenge.title)
      acc[rank].push({ ...challenge, originalIndex })
      return acc
    },
    {} as Record<string, Array<(typeof allChallenges)[0] & { originalIndex: number }>>,
  )

  const getRankColor = (rank: string) => {
    const colors: Record<string, string> = {
      E: "bg-gray-600",
      D: "bg-green-600",
      C: "bg-blue-600",
      B: "bg-purple-600",
      A: "bg-orange-600",
      S: "bg-red-600",
    }
    return colors[rank] || "bg-gray-600"
  }

  const getRankName = (rank: string) => {
    const names: Record<string, string> = {
      E: "Java Fundamentals",
      D: "Control Flow & Loops",
      C: "Object-Oriented Programming",
      B: "Data Structures",
      A: "Advanced Concepts",
      S: "Master Challenges",
    }
    return names[rank] || "Unknown"
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-[oklch(0.10_0.03_270)] to-background relative">
      <RotatingVideoBackground />

      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                <span className="glow-purple">Dungeon</span> Selection
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base">
                {rankFilter
                  ? `${getRankName(rankFilter)} Challenges`
                  : "Choose your next challenge and level up your skills"}
              </p>
            </div>
            <div className="flex gap-2">
              {rankFilter && (
                <Link href="/dungeons">
                  <Button variant="outline" size="sm">
                    Show All Ranks
                  </Button>
                </Link>
              )}
              <Link href="/home">
                <Button variant="outline">Back to Home</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Solo Leveling manga panel background */}
      <div className="fixed top-1/4 right-0 w-96 h-96 opacity-5 pointer-events-none hidden xl:block z-0">
        <img
          src="/solo-leveling-dungeon-gate-portal-entrance.jpg"
          alt="Gate Portal"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Dungeons Grid - Grouped by Rank */}
      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10 space-y-12">
        {Object.entries(challengesByRank).map(([rank, challenges]) => (
          <div key={rank}>
            <div className="mb-6">
              <Badge className={`${getRankColor(rank)} text-white border-0 text-lg px-4 py-2`}>{rank}-RANK</Badge>
              <h2 className="text-2xl font-bold mt-2">{getRankName(rank)}</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.map((challenge, idx) => {
                const isLocked = ["C", "B", "A", "S"].includes(rank) && idx > 0
                const challengeIndex = getChallengesByRank(rank).findIndex((c) => c.title === challenge.title)

                return (
                  <Card
                    key={challenge.title}
                    className={`bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all ${
                      isLocked ? "opacity-60" : "hover:box-glow-purple"
                    }`}
                  >
                    <div className="p-6 space-y-4">
                      <div className="flex items-start justify-between">
                        <Badge className={`${getRankColor(rank)} text-white border-0`}>{rank}-RANK</Badge>
                        {isLocked ? (
                          <Lock className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          <Unlock className="h-5 w-5 text-primary" />
                        )}
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-2">{challenge.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{challenge.description}</p>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Difficulty: {challenge.difficulty}</span>
                        <span className="flex items-center gap-1 text-primary font-semibold">
                          <Zap className="h-4 w-4" />+{challenge.xpReward} XP
                        </span>
                      </div>

                      <Link
                        href={isLocked ? "#" : `/challenge/${rank.toLowerCase()}/${challengeIndex}`}
                        className="block"
                      >
                        <Button className="w-full" disabled={isLocked} variant={isLocked ? "outline" : "default"}>
                          {isLocked ? "Locked" : "Enter Dungeon"}
                        </Button>
                      </Link>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
