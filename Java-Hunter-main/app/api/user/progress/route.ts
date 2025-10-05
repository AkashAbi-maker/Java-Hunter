import { NextResponse } from "next/server"

// Mock user progress data
const mockProgress = {
  userId: "user123",
  rank: "E",
  level: 5,
  xp: 450,
  totalXp: 2450,
  completedChallenges: 8,
  achievements: [
    {
      title: "First Steps",
      description: "Complete your first challenge",
      icon: "🎯",
      unlockedAt: new Date("2024-01-15"),
    },
    {
      title: "Loop Master",
      description: "Complete all loop challenges",
      icon: "🔄",
      unlockedAt: new Date("2024-01-20"),
    },
  ],
}

export async function GET() {
  // In production: Fetch from MongoDB based on authenticated user
  return NextResponse.json(mockProgress)
}

export async function POST(request: Request) {
  const body = await request.json()
  const { challengeId, code, status } = body

  // In production: Update user progress in MongoDB
  console.log("[v0] Updating progress:", { challengeId, status })

  return NextResponse.json({
    success: true,
    xpEarned: 250,
    newTotalXp: 2700,
    levelUp: false,
  })
}
