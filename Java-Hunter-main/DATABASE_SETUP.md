# Solo Leveling Java Learning Platform - Database Setup

## MongoDB Collections

### 1. users
Stores user account information and progression data.

\`\`\`javascript
{
  _id: ObjectId,
  username: String,
  email: String,
  password: String, // bcrypt hashed
  rank: String, // "E", "D", "C", "B", "A", "S"
  level: Number,
  xp: Number, // Current XP in current level
  totalXp: Number, // Total XP earned
  createdAt: Date,
  updatedAt: Date
}
\`\`\`

### 2. challenges
Stores all coding challenges/dungeons.

\`\`\`javascript
{
  _id: ObjectId,
  rank: String, // "E", "D", "C", "B", "A", "S"
  title: String,
  description: String,
  objective: String,
  difficulty: String, // "Beginner", "Medium", "Hard", "Expert", "Master"
  xpReward: Number,
  starterCode: String,
  solution: String,
  hint: String,
  testCases: [
    {
      input: String,
      expectedOutput: String,
      description: String
    }
  ],
  prerequisites: [ObjectId], // Challenge IDs that must be completed first
  createdAt: Date
}
\`\`\`

### 3. user_progress
Tracks user progress on each challenge.

\`\`\`javascript
{
  _id: ObjectId,
  userId: ObjectId,
  challengeId: ObjectId,
  status: String, // "not_started", "in_progress", "completed"
  attempts: Number,
  lastAttemptCode: String,
  completedAt: Date,
  xpEarned: Number,
  createdAt: Date,
  updatedAt: Date
}
\`\`\`

### 4. achievements
Stores user achievements.

\`\`\`javascript
{
  _id: ObjectId,
  userId: ObjectId,
  title: String,
  description: String,
  icon: String,
  unlockedAt: Date
}
\`\`\`

## Indexes

\`\`\`javascript
// users collection
db.users.createIndex({ email: 1 }, { unique: true })
db.users.createIndex({ username: 1 }, { unique: true })

// user_progress collection
db.user_progress.createIndex({ userId: 1, challengeId: 1 }, { unique: true })
db.user_progress.createIndex({ userId: 1, status: 1 })

// challenges collection
db.challenges.createIndex({ rank: 1 })
db.challenges.createIndex({ difficulty: 1 })
\`\`\`

## Connection Setup

To connect to MongoDB, install the MongoDB driver:

\`\`\`bash
npm install mongodb
\`\`\`

Create a connection utility at `lib/mongodb.ts`:

\`\`\`typescript
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017'
const options = {}

let client: MongoClient
let clientPromise: Promise<MongoClient>

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local')
}

if (process.env.NODE_ENV === 'development') {
  if (!(global as any)._mongoClientPromise) {
    client = new MongoClient(uri, options)
    ;(global as any)._mongoClientPromise = client.connect()
  }
  clientPromise = (global as any)._mongoClientPromise
} else {
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export default clientPromise
\`\`\`

## Environment Variables

Add to your `.env.local`:

\`\`\`
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/solo-leveling-java?retryWrites=true&w=majority
