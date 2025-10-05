"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, Eye, EyeOff, Lightbulb, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export function DungeonPreview() {
  const [showHint, setShowHint] = useState(false)
  const [showSolution, setShowSolution] = useState(false)

  return (
    <section className="py-24 px-4 relative">
      <div className="absolute top-0 right-0 w-1/3 h-96 opacity-20 hidden lg:block">
        <img
          src="/solo-leveling-sung-jinwoo-system-window-stats-pane.jpg"
          alt="System Window"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-secondary/20 text-secondary border-2 border-secondary/50 px-4 py-2 text-sm font-mono mb-4 neon-border-cyan animate-pulse-glow">
            <span className="glow-cyan">LIVE PREVIEW</span>
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Experience the <span className="glow-purple animate-pulse-glow">Challenge</span>
          </h2>
          <div className="max-w-2xl mx-auto bg-card/20 backdrop-blur-md border border-purple-500/30 rounded-lg p-4 neon-border">
            <p className="text-xl text-foreground">See how our quest-based learning system works</p>
          </div>
        </div>

        <Card className="bg-card/30 backdrop-blur-md border-2 border-primary/50 box-glow-purple overflow-hidden">
          {/* Quest Header */}
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm p-6 border-b-2 border-primary/30">
            <div className="flex items-start justify-between mb-4">
              <div>
                <Badge className="bg-green-600 text-white border-0 mb-2 shadow-[0_0_20px_rgba(34,197,94,0.5)]">
                  D-RANK QUEST
                </Badge>
                <h3 className="text-2xl font-bold mb-2 glow-cyan">The Loop Dungeon</h3>
                <p className="text-muted-foreground">Master the art of iteration to clear this dungeon</p>
              </div>
              <div className="text-right bg-primary/20 backdrop-blur-sm border-2 border-primary/50 rounded-lg p-3 neon-border">
                <p className="text-sm text-muted-foreground">Reward</p>
                <p className="text-2xl font-bold text-primary glow-purple">+250 XP</p>
              </div>
            </div>

            <div className="flex gap-4 text-sm">
              <span className="text-muted-foreground">
                <Code className="inline h-4 w-4 mr-1" />
                Difficulty: Medium
              </span>
              <span className="text-muted-foreground">
                <CheckCircle2 className="inline h-4 w-4 mr-1" />
                Completion: 0%
              </span>
            </div>
          </div>

          {/* Quest Content */}
          <div className="p-6 space-y-6">
            {/* Challenge Description */}
            <div className="bg-muted/20 backdrop-blur-sm rounded-lg p-4 border-2 border-cyan-500/30 neon-border-cyan">
              <h4 className="font-bold mb-2 text-lg glow-cyan">📜 Quest Objective</h4>
              <p className="text-foreground leading-relaxed">
                Write a Java program that prints all even numbers from 1 to 20 using a for loop. Each number should be
                printed on a new line.
              </p>
            </div>

            {/* Code Editor Area */}
            <div className="bg-[oklch(0.08_0.02_270)] rounded-lg p-4 border-2 border-primary/30 font-mono text-sm neon-border">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-border">
                <span className="text-muted-foreground glow-purple">Main.java</span>
                <Badge variant="outline" className="text-xs border-primary/50">
                  E-Rank Hunter
                </Badge>
              </div>
              <pre className="text-foreground">
                <code>{`public class Main {
    public static void main(String[] args) {
        // Your code here
        
        
        
    }
}`}</code>
              </pre>
            </div>

            {/* Hint Section */}
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full justify-start border-2 border-accent/50 text-accent hover:bg-accent/10 hover:border-accent bg-transparent backdrop-blur-sm transition-all"
                onClick={() => setShowHint(!showHint)}
              >
                <Lightbulb className="mr-2 h-4 w-4" />
                <span className="glow-cyan">{showHint ? "Hide Hint" : "Need a Hint?"}</span>
                {showHint ? <EyeOff className="ml-auto h-4 w-4" /> : <Eye className="ml-auto h-4 w-4" />}
              </Button>

              {showHint && (
                <div className="bg-accent/10 backdrop-blur-sm border-2 border-accent/50 rounded-lg p-4 animate-in slide-in-from-top-2 neon-border-cyan">
                  <p className="text-sm text-foreground leading-relaxed">
                    💡 <strong className="glow-cyan">System Hint:</strong> Use a for loop that starts at 2 and
                    increments by 2 each time. Or use the modulo operator (%) to check if a number is even.
                  </p>
                </div>
              )}
            </div>

            {/* Solution Section */}
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full justify-start border-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary bg-transparent backdrop-blur-sm transition-all"
                onClick={() => setShowSolution(!showSolution)}
              >
                <Code className="mr-2 h-4 w-4" />
                <span className="glow-purple">{showSolution ? "Hide Solution" : "View Solution"}</span>
                {showSolution ? <EyeOff className="ml-auto h-4 w-4" /> : <Eye className="ml-auto h-4 w-4" />}
              </Button>

              {showSolution && (
                <div className="bg-primary/10 backdrop-blur-sm border-2 border-primary/50 rounded-lg p-4 animate-in slide-in-from-top-2 neon-border">
                  <p className="text-sm font-semibold mb-2 text-primary glow-purple">⚔️ Master's Solution:</p>
                  <pre className="bg-[oklch(0.08_0.02_270)] rounded p-3 text-xs font-mono overflow-x-auto border border-primary/30">
                    <code className="text-foreground">{`public class Main {
    public static void main(String[] args) {
        for (int i = 2; i <= 20; i += 2) {
            System.out.println(i);
        }
    }
}`}</code>
                  </pre>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button className="flex-1 bg-primary hover:bg-primary/90 box-glow-purple border-2 border-primary/50 hover:border-primary transition-all">
                <span className="glow-purple">Run Code</span>
              </Button>
              <Button className="flex-1 bg-secondary hover:bg-secondary/90 border-2 border-secondary/50 hover:border-secondary transition-all shadow-[0_0_20px_rgba(0,200,255,0.3)]">
                <span className="glow-cyan">Submit Solution</span>
              </Button>
            </div>
          </div>
        </Card>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="max-w-md mx-auto bg-card/20 backdrop-blur-md border border-purple-500/30 rounded-lg p-6 mb-6 neon-border">
            <p className="text-xl text-foreground">Ready to begin your journey?</p>
          </div>
          <Link href="/challenge/e/0">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg font-bold box-glow-purple border-2 border-primary/50 hover:border-primary transition-all"
            >
              <span className="glow-purple">Start Your Quest</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
