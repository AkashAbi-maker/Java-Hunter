import { ChallengeInterface } from "@/components/challenge-interface"
import { RotatingVideoBackground } from "@/components/rotating-video-background"
import { getChallengeByRankAndIndex } from "@/lib/challenges-data"
import { notFound } from "next/navigation"

export default function ChallengePage({ params }: { params: { rank: string; id: string } }) {
  const challengeIndex = Number.parseInt(params.id)
  const challenge = getChallengeByRankAndIndex(params.rank, challengeIndex)

  if (!challenge) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background relative">
      <RotatingVideoBackground />
      <div className="relative z-10">
        <ChallengeInterface challenge={challenge} rank={params.rank} challengeId={challengeIndex} />
      </div>
    </main>
  )
}
