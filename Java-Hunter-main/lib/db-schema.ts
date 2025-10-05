// MongoDB Schema Definitions for Solo Leveling Java Learning Platform

export interface User {
  _id: string
  username: string
  email: string
  password: string // hashed
  rank: "E" | "D" | "C" | "B" | "A" | "S"
  level: number
  xp: number
  totalXp: number
  createdAt: Date
  updatedAt: Date
}

export interface Challenge {
  _id: string
  rank: "E" | "D" | "C" | "B" | "A" | "S"
  title: string
  description: string
  objective: string
  difficulty: "Beginner" | "Medium" | "Hard" | "Expert" | "Master"
  xpReward: number
  starterCode: string
  solution: string
  hint: string
  testCases: TestCase[]
  prerequisites: string[] // Challenge IDs
  createdAt: Date
}

export interface TestCase {
  input: string
  expectedOutput: string
  description: string
}

export interface UserProgress {
  _id: string
  userId: string
  challengeId: string
  status: "not_started" | "in_progress" | "completed"
  attempts: number
  lastAttemptCode: string
  completedAt?: Date
  xpEarned: number
  createdAt: Date
  updatedAt: Date
}

export interface Achievement {
  _id: string
  userId: string
  title: string
  description: string
  icon: string
  unlockedAt: Date
}

// XP thresholds for each rank
export const RANK_THRESHOLDS = {
  E: 0,
  D: 1000,
  C: 3000,
  B: 7000,
  A: 15000,
  S: 30000,
}

// Calculate user rank based on total XP
export function calculateRank(totalXp: number): "E" | "D" | "C" | "B" | "A" | "S" {
  if (totalXp >= RANK_THRESHOLDS.S) return "S"
  if (totalXp >= RANK_THRESHOLDS.A) return "A"
  if (totalXp >= RANK_THRESHOLDS.B) return "B"
  if (totalXp >= RANK_THRESHOLDS.C) return "C"
  if (totalXp >= RANK_THRESHOLDS.D) return "D"
  return "E"
}
