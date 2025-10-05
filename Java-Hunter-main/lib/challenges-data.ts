// Comprehensive Java challenges database for all ranks
import type { Challenge } from "./db-schema"

export const challengesData: Omit<Challenge, "_id" | "createdAt">[] = [
  // ==================== E-RANK CHALLENGES ====================
  {
    rank: "E",
    title: "Hello World Gate",
    description: "Your first step into the world of Java programming",
    objective: "Write a Java program that prints 'Hello, World!' to the console.",
    difficulty: "Beginner",
    xpReward: 50,
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
    hint: "Use System.out.println() to print text to the console. Don't forget the semicolon!",
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
    rank: "E",
    title: "Variable Dungeon",
    description: "Learn to store and manipulate data",
    objective: "Create variables for your name (String), age (int), and height in meters (double). Print them all.",
    difficulty: "Beginner",
    xpReward: 75,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // Declare your variables here
        
        
        // Print them here
        
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        String name = "Hunter";
        int age = 24;
        double height = 1.75;
        
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Height: " + height + "m");
    }
}`,
    hint: "Use String for text, int for whole numbers, and double for decimal numbers. Use + to concatenate strings.",
    testCases: [
      {
        input: "",
        expectedOutput: "Name: Hunter\nAge: 24\nHeight: 1.75m",
        description: "Should print name, age, and height",
      },
    ],
    prerequisites: [],
  },
  {
    rank: "E",
    title: "Basic Math Arena",
    description: "Master arithmetic operations",
    objective: "Calculate and print the sum, difference, product, and quotient of two numbers: 15 and 3.",
    difficulty: "Beginner",
    xpReward: 100,
    starterCode: `public class Main {
    public static void main(String[] args) {
        int a = 15;
        int b = 3;
        
        // Calculate and print results
        
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int a = 15;
        int b = 3;
        
        System.out.println("Sum: " + (a + b));
        System.out.println("Difference: " + (a - b));
        System.out.println("Product: " + (a * b));
        System.out.println("Quotient: " + (a / b));
    }
}`,
    hint: "Use +, -, *, and / operators for arithmetic. Use parentheses to ensure correct order of operations.",
    testCases: [
      {
        input: "",
        expectedOutput: "Sum: 18\nDifference: 12\nProduct: 45\nQuotient: 5",
        description: "Should perform all four operations",
      },
    ],
    prerequisites: [],
  },

  // ==================== D-RANK CHALLENGES ====================
  {
    rank: "D",
    title: "The Loop Dungeon",
    description: "Master the art of iteration",
    objective: "Write a Java program that prints all even numbers from 1 to 20 using a for loop.",
    difficulty: "Medium",
    xpReward: 150,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // Use a for loop to print even numbers
        
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        for (int i = 2; i <= 20; i += 2) {
            System.out.println(i);
        }
    }
}`,
    hint: "Start your loop at 2 and increment by 2 each time (i += 2). Continue until i <= 20.",
    testCases: [
      {
        input: "",
        expectedOutput: "2\n4\n6\n8\n10\n12\n14\n16\n18\n20",
        description: "Should print all even numbers from 2 to 20",
      },
    ],
    prerequisites: [],
  },
  {
    rank: "D",
    title: "Conditional Labyrinth",
    description: "Navigate through if-else statements",
    objective: "Write a program that checks if a number is positive, negative, or zero. Test with the number -5.",
    difficulty: "Medium",
    xpReward: 175,
    starterCode: `public class Main {
    public static void main(String[] args) {
        int number = -5;
        
        // Check if positive, negative, or zero
        
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int number = -5;
        
        if (number > 0) {
            System.out.println("Positive");
        } else if (number < 0) {
            System.out.println("Negative");
        } else {
            System.out.println("Zero");
        }
    }
}`,
    hint: "Use if-else statements. Check if number > 0, then if number < 0, else it must be 0.",
    testCases: [
      {
        input: "",
        expectedOutput: "Negative",
        description: "Should identify -5 as negative",
      },
    ],
    prerequisites: [],
  },
  {
    rank: "D",
    title: "While Loop Challenge",
    description: "Master while loops and counters",
    objective: "Use a while loop to print numbers from 1 to 10.",
    difficulty: "Medium",
    xpReward: 200,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // Use a while loop
        
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int i = 1;
        while (i <= 10) {
            System.out.println(i);
            i++;
        }
    }
}`,
    hint: "Initialize a counter before the loop. Check the condition in while(). Don't forget to increment inside the loop!",
    testCases: [
      {
        input: "",
        expectedOutput: "1\n2\n3\n4\n5\n6\n7\n8\n9\n10",
        description: "Should print 1 through 10",
      },
    ],
    prerequisites: [],
  },

  // ==================== C-RANK CHALLENGES ====================
  {
    rank: "C",
    title: "Array Arena",
    description: "Battle with collections of data",
    objective: "Create an array of 5 integers, then print each element using a for loop.",
    difficulty: "Hard",
    xpReward: 300,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // Create and populate an array
        
        
        // Print each element
        
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 40, 50};
        
        for (int i = 0; i < numbers.length; i++) {
            System.out.println(numbers[i]);
        }
    }
}`,
    hint: "Declare an array with int[] arrayName = {values}. Use array.length in your loop condition.",
    testCases: [
      {
        input: "",
        expectedOutput: "10\n20\n30\n40\n50",
        description: "Should print all array elements",
      },
    ],
    prerequisites: [],
  },
  {
    rank: "C",
    title: "Method Maze",
    description: "Create reusable code blocks",
    objective:
      "Create a method called 'greet' that takes a name parameter and prints a greeting. Call it with 'Hunter'.",
    difficulty: "Hard",
    xpReward: 350,
    starterCode: `public class Main {
    // Create your method here
    
    
    public static void main(String[] args) {
        // Call your method here
        
    }
}`,
    solution: `public class Main {
    public static void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }
    
    public static void main(String[] args) {
        greet("Hunter");
    }
}`,
    hint: "Methods are defined with: public static returnType methodName(parameters) { }. Call it by writing methodName(arguments);",
    testCases: [
      {
        input: "",
        expectedOutput: "Hello, Hunter!",
        description: "Should greet Hunter",
      },
    ],
    prerequisites: [],
  },
  {
    rank: "C",
    title: "String Manipulation Quest",
    description: "Master text processing",
    objective: "Take the string 'solo leveling' and print it in uppercase, then print its length.",
    difficulty: "Hard",
    xpReward: 400,
    starterCode: `public class Main {
    public static void main(String[] args) {
        String text = "solo leveling";
        
        // Convert to uppercase and print
        
        // Print the length
        
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        String text = "solo leveling";
        
        System.out.println(text.toUpperCase());
        System.out.println(text.length());
    }
}`,
    hint: "Use .toUpperCase() method on strings. Use .length() to get the string length.",
    testCases: [
      {
        input: "",
        expectedOutput: "SOLO LEVELING\n13",
        description: "Should convert to uppercase and show length",
      },
    ],
    prerequisites: [],
  },

  // ==================== B-RANK CHALLENGES ====================
  {
    rank: "B",
    title: "OOP Fortress - Class Creation",
    description: "Master Object-Oriented Programming",
    objective:
      "Create a Hunter class with name and level properties, and a displayInfo method. Create an instance and call the method.",
    difficulty: "Expert",
    xpReward: 500,
    starterCode: `// Create your Hunter class here


public class Main {
    public static void main(String[] args) {
        // Create a Hunter instance and call displayInfo
        
    }
}`,
    solution: `class Hunter {
    String name;
    int level;
    
    public Hunter(String name, int level) {
        this.name = name;
        this.level = level;
    }
    
    public void displayInfo() {
        System.out.println("Hunter: " + name);
        System.out.println("Level: " + level);
    }
}

public class Main {
    public static void main(String[] args) {
        Hunter hunter = new Hunter("Sung Jin-Woo", 100);
        hunter.displayInfo();
    }
}`,
    hint: "Create a class with properties and a constructor. Use 'this' to refer to instance variables. Create objects with 'new ClassName()'.",
    testCases: [
      {
        input: "",
        expectedOutput: "Hunter: Sung Jin-Woo\nLevel: 100",
        description: "Should display hunter information",
      },
    ],
    prerequisites: [],
  },
  {
    rank: "B",
    title: "ArrayList Mastery",
    description: "Work with dynamic collections",
    objective: "Create an ArrayList of strings, add 3 dungeon names, then print each one.",
    difficulty: "Expert",
    xpReward: 600,
    starterCode: `import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        // Create ArrayList and add dungeons
        
        
        // Print each dungeon
        
    }
}`,
    solution: `import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> dungeons = new ArrayList<>();
        dungeons.add("Shadow Dungeon");
        dungeons.add("Ice Fortress");
        dungeons.add("Fire Temple");
        
        for (String dungeon : dungeons) {
            System.out.println(dungeon);
        }
    }
}`,
    hint: "Import ArrayList from java.util. Use .add() to add elements. Use enhanced for loop to iterate.",
    testCases: [
      {
        input: "",
        expectedOutput: "Shadow Dungeon\nIce Fortress\nFire Temple",
        description: "Should print all dungeons",
      },
    ],
    prerequisites: [],
  },

  // ==================== A-RANK CHALLENGES ====================
  {
    rank: "A",
    title: "Exception Tower",
    description: "Handle errors like a pro",
    objective: "Write code that divides 100 by 0 and catches the exception, printing 'Cannot divide by zero'.",
    difficulty: "Expert",
    xpReward: 800,
    starterCode: `public class Main {
    public static void main(String[] args) {
        // Use try-catch to handle division by zero
        
    }
}`,
    solution: `public class Main {
    public static void main(String[] args) {
        try {
            int result = 100 / 0;
            System.out.println(result);
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero");
        }
    }
}`,
    hint: "Use try-catch blocks. Catch ArithmeticException for division by zero.",
    testCases: [
      {
        input: "",
        expectedOutput: "Cannot divide by zero",
        description: "Should catch and handle the exception",
      },
    ],
    prerequisites: [],
  },
  {
    rank: "A",
    title: "Interface Implementation",
    description: "Master abstraction and interfaces",
    objective: "Create a Skill interface with an activate() method. Implement it in a FireballSkill class.",
    difficulty: "Expert",
    xpReward: 1000,
    starterCode: `// Create your interface and class here


public class Main {
    public static void main(String[] args) {
        // Create and use your skill
        
    }
}`,
    solution: `interface Skill {
    void activate();
}

class FireballSkill implements Skill {
    public void activate() {
        System.out.println("Fireball activated!");
    }
}

public class Main {
    public static void main(String[] args) {
        Skill skill = new FireballSkill();
        skill.activate();
    }
}`,
    hint: "Interfaces define method signatures. Classes implement interfaces using 'implements' keyword.",
    testCases: [
      {
        input: "",
        expectedOutput: "Fireball activated!",
        description: "Should activate the skill",
      },
    ],
    prerequisites: [],
  },

  // ==================== S-RANK CHALLENGES ====================
  {
    rank: "S",
    title: "Final Boss: Dungeon Management System",
    description: "Build a complete Java application",
    objective: "Create a complete dungeon management system with Dungeon class, add/remove/list functionality.",
    difficulty: "Master",
    xpReward: 2000,
    starterCode: `import java.util.ArrayList;

// Create your Dungeon class and DungeonManager class here


public class Main {
    public static void main(String[] args) {
        // Implement the dungeon management system
        
    }
}`,
    solution: `import java.util.ArrayList;

class Dungeon {
    String name;
    String rank;
    
    public Dungeon(String name, String rank) {
        this.name = name;
        this.rank = rank;
    }
    
    public String toString() {
        return rank + " - " + name;
    }
}

class DungeonManager {
    ArrayList<Dungeon> dungeons = new ArrayList<>();
    
    public void addDungeon(Dungeon d) {
        dungeons.add(d);
        System.out.println("Added: " + d);
    }
    
    public void listDungeons() {
        System.out.println("All Dungeons:");
        for (Dungeon d : dungeons) {
            System.out.println(d);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        DungeonManager manager = new DungeonManager();
        manager.addDungeon(new Dungeon("Shadow Realm", "S-Rank"));
        manager.addDungeon(new Dungeon("Ice Cave", "A-Rank"));
        manager.listDungeons();
    }
}`,
    hint: "Create classes for Dungeon and DungeonManager. Use ArrayList to store dungeons. Implement add and list methods.",
    testCases: [
      {
        input: "",
        expectedOutput:
          "Added: S-Rank - Shadow Realm\nAdded: A-Rank - Ice Cave\nAll Dungeons:\nS-Rank - Shadow Realm\nA-Rank - Ice Cave",
        description: "Should manage dungeons",
      },
    ],
    prerequisites: [],
  },
]

// Helper function to get challenges by rank
export function getChallengesByRank(rank: string): typeof challengesData {
  return challengesData.filter((c) => c.rank.toLowerCase() === rank.toLowerCase())
}

// Helper function to get challenge by index within a rank
export function getChallengeByRankAndIndex(rank: string, index: number): (typeof challengesData)[0] | null {
  const rankChallenges = getChallengesByRank(rank)
  return rankChallenges[index] || null
}

// Helper function to get all challenges
export function getAllChallenges(): typeof challengesData {
  return challengesData
}
