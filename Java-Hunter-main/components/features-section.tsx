import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function FeaturesSection() {
  const features = [
    {
      rank: "E-RANK",
      title: "Java Fundamentals",
      description: "Variables, data types, operators, and basic syntax",
      challenges: 15,
      xp: 500,
      color: "bg-slate-600",
      glowColor: "hover:shadow-[0_0_30px_rgba(148,163,184,0.5)]",
      link: "/dungeons?rank=e",
    },
    {
      rank: "D-RANK",
      title: "Control Flow & Loops",
      description: "If statements, switch cases, for/while loops",
      challenges: 20,
      xp: 1000,
      color: "bg-green-600",
      glowColor: "hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]",
      link: "/dungeons?rank=d",
    },
    {
      rank: "C-RANK",
      title: "Object-Oriented Programming",
      description: "Classes, objects, inheritance, polymorphism",
      challenges: 25,
      xp: 2000,
      color: "bg-blue-600",
      glowColor: "hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]",
      link: "/dungeons?rank=c",
    },
    {
      rank: "B-RANK",
      title: "Data Structures",
      description: "Arrays, lists, maps, sets, and algorithms",
      challenges: 30,
      xp: 3500,
      color: "bg-purple-600",
      glowColor: "hover:shadow-[0_0_30px_rgba(147,51,234,0.5)]",
      link: "/dungeons?rank=b",
    },
    {
      rank: "A-RANK",
      title: "Advanced Concepts",
      description: "Multithreading, streams, lambda expressions",
      challenges: 35,
      xp: 5000,
      color: "bg-orange-600",
      glowColor: "hover:shadow-[0_0_30px_rgba(234,88,12,0.5)]",
      link: "/dungeons?rank=a",
    },
    {
      rank: "S-RANK",
      title: "Master Challenges",
      description: "Design patterns, system design, optimization",
      challenges: 40,
      xp: 10000,
      color: "bg-red-600",
      glowColor: "hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]",
      link: "/dungeons?rank=s",
    },
  ]

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <Badge className="bg-primary/20 text-primary border-2 border-primary/50 px-4 py-2 text-sm font-mono neon-border animate-pulse-glow">
              <span className="glow-purple">DUNGEON SYSTEM</span>
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Rank Up Through <span className="glow-cyan animate-pulse-glow">Dungeons</span>
          </h2>
          <div className="max-w-2xl mx-auto bg-card/20 backdrop-blur-md border border-cyan-500/30 rounded-lg p-4 neon-border-cyan">
            <p className="text-xl text-foreground">
              Each rank unlocks new challenges. Clear dungeons to gain XP and level up your Java skills.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Link key={index} href={feature.link}>
              <Card
                className={`bg-card/30 backdrop-blur-md border-2 border-border hover:border-primary/70 transition-all duration-300 p-6 group hover:box-glow-purple cursor-pointer h-full ${feature.glowColor}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <Badge className={`${feature.color} text-white border-0 font-bold px-3 py-1 shadow-lg`}>
                    {feature.rank}
                  </Badge>
                  <div className="text-right bg-primary/10 backdrop-blur-sm border border-primary/30 rounded px-3 py-1">
                    <p className="text-xs text-muted-foreground">XP Reward</p>
                    <p className="text-lg font-bold text-primary glow-purple">+{feature.xp.toLocaleString()}</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary group-hover:glow-purple transition-all">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{feature.description}</p>

                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="text-sm text-muted-foreground">{feature.challenges} Challenges</span>
                  <span className="text-sm font-semibold text-secondary group-hover:text-primary group-hover:glow-cyan transition-all">
                    Enter Dungeon →
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
