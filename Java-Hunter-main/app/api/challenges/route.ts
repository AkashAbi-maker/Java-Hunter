import { NextResponse } from "next/server"

// Mock data - In production, this would connect to MongoDB
const challenges = [
  {
    _id: "1",
    rank: "E",
    title: "Hello World Gate",
    description: "Your first step into the world of Java programming",
    objective: "Write a Java program that prints 'Hello, World!' to the console.",
    difficulty: "Beginner",
    xpReward: 100,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // Your code here
        
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
    hint: "Use System.out.println() to print text to the console.",
    testCases: [
      {
        input: "",
        expectedOutput: "Hello, World!",
        description: "Should print 'Hello, World!'",
      },
    ],
    prerequisites: [],
  },
  {
    _id: "2",
    rank: "D",
    title: "The Loop Dungeon",
    description: "Master the art of iteration",
    objective: "Write a Java program that prints all even numbers from 1 to 20 using a for loop.",
    difficulty: "Medium",
    xpReward: 250,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // Your code here
        
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        for (int i = 2; i <= 20; i += 2) {
            System.out.println(i);
        }
    }
}`,
    hint: "Use a for loop that starts at 2 and increments by 2 each time, or use the modulo operator (%) to check if a number is even.",
    testCases: [
      {
        input: "",
        expectedOutput: "2\n4\n6\n8\n10\n12\n14\n16\n18\n20",
        description: "Should print all even numbers from 2 to 20",
      },
    ],
    prerequisites: ["1"],
  },
]

export async function GET() {
  // In production: const challenges = await db.collection('challenges').find().toArray()
  return NextResponse.json({ challenges })
}
