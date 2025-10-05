# Solo Leveling Java - Quest System Documentation

## 🎮 System Overview

The quest system now features a comprehensive database of Java challenges organized by rank (E, D, C, B, A, S) with proper navigation and filtering.

## 📁 Key Files

### 1. **lib/challenges-data.ts**
- Contains all quest data for every rank
- Currently includes:
  - **E-Rank**: 3 challenges (Hello World, Variables, Basic Math)
  - **D-Rank**: 3 challenges (Loops, Conditionals, While Loops)
  - **C-Rank**: 3 challenges (Arrays, Methods, Strings)
  - **B-Rank**: 2 challenges (OOP, ArrayList)
  - **A-Rank**: 2 challenges (Exceptions, Interfaces)
  - **S-Rank**: 1 challenge (Complete System)
- Helper functions:
  - `getChallengesByRank(rank)` - Get all challenges for a specific rank
  - `getChallengeByRankAndIndex(rank, index)` - Get a specific challenge
  - `getAllChallenges()` - Get all challenges

### 2. **app/challenge/[rank]/[id]/page.tsx**
- Dynamic route for individual challenges
- URL format: `/challenge/e/0` (rank/challenge-index)
- Fetches challenge data and passes to ChallengeInterface

### 3. **components/challenge-interface.tsx**
- Main challenge UI component
- Features:
  - Code editor with syntax highlighting
  - Run and Submit buttons
  - Hint system (collapsible)
  - Solution viewer (collapsible)
  - Progress tracking
  - Navigation between challenges (Previous/Next)
  - Console output display

### 4. **app/dungeons/page.tsx**
- Dungeon selection page
- Features:
  - Displays all challenges grouped by rank
  - Supports filtering by rank via URL: `/dungeons?rank=e`
  - Shows locked/unlocked status
  - Links to individual challenges

### 5. **components/features-section.tsx**
- Homepage feature cards
- Each card links to filtered dungeon view by rank
- Shows XP rewards and challenge counts

### 6. **components/hero-section.tsx**
- Homepage hero section
- "Enter the Gate" button → First E-rank challenge
- "View Dungeons" button → Dungeons page

## 🔗 Navigation Flow

\`\`\`
Homepage
├── "Enter the Gate" → /challenge/e/0 (First E-rank quest)
├── "View Dungeons" → /dungeons (All quests)
└── Feature Cards → /dungeons?rank=X (Filtered by rank)

Dungeons Page
├── Filter by rank via URL parameter
├── "Enter Dungeon" → /challenge/[rank]/[id]
└── "Back to Home" → /

Challenge Page
├── "Exit Dungeon" → /dungeons
├── "Previous Quest" → /challenge/[rank]/[id-1]
├── "Next Quest" → /challenge/[rank]/[id+1]
└── Run/Submit buttons (in-page actions)
\`\`\`

## 🎯 How to Add More Challenges

1. Open `lib/challenges-data.ts`
2. Add a new challenge object to the `challengesData` array:

\`\`\`typescript
{
  rank: "E", // E, D, C, B, A, or S
  title: "Your Challenge Title",
  description: "Brief description",
  objective: "What the student needs to do",
  difficulty: "Beginner", // Beginner, Medium, Hard, Expert, Master
  xpReward: 100,
  starterCode: `public class Main {
    public static void main(String[] args) {
        // Your code here
    }
}`,
  solution: `// Complete solution here`,
  hint: "Helpful hint for students",
  testCases: [
    {
      input: "",
      expectedOutput: "Expected output",
      description: "Test case description",
    },
  ],
  prerequisites: [], // Array of challenge IDs if needed
}
\`\`\`

3. The challenge will automatically appear in the dungeons page!

## 🎨 Rank Colors

- **E-Rank**: Gray (`bg-gray-600`)
- **D-Rank**: Green (`bg-green-600`)
- **C-Rank**: Blue (`bg-blue-600`)
- **B-Rank**: Purple (`bg-purple-600`)
- **A-Rank**: Orange (`bg-orange-600`)
- **S-Rank**: Red (`bg-red-600`)

## 🔒 Lock System

Currently, challenges in C, B, A, and S ranks (except the first one in each rank) are locked. This is controlled in `app/dungeons/page.tsx`:

\`\`\`typescript
const isLocked = ["C", "B", "A", "S"].includes(rank) && idx > 0
\`\`\`

To unlock all challenges, remove or modify this logic.

## 🚀 Future Enhancements

- [ ] Connect to MongoDB for persistent user progress
- [ ] Real Java code execution backend
- [ ] User authentication system
- [ ] XP and leveling system
- [ ] Achievement system
- [ ] Leaderboards
- [ ] Code validation against test cases
- [ ] Syntax highlighting in code editor
- [ ] Auto-save code progress
- [ ] Challenge completion tracking
