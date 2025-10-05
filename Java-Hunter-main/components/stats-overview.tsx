import { Code, Trophy, Target, Zap } from "lucide-react"
import Link from "next/link"

export function StatsOverview() {
  const stats = [
    {
      icon: Code,
      title: "Learn by Doing",
      description: "Write real Java code in interactive challenges",
      color: "text-primary",
      link: "/challenge",
    },
    {
      icon: Trophy,
      title: "Level Up System",
      description: "Progress from E-Rank to S-Rank developer",
      color: "text-secondary",
      link: "/challenge",
    },
    {
      icon: Target,
      title: "Quest-Based Learning",
      description: "Complete missions styled as dungeon raids",
      color: "text-accent",
      link: "/dungeons",
    },
    {
      icon: Zap,
      title: "Instant Feedback",
      description: "Get hints and solutions when you need them",
      color: "text-primary",
      link: "/challenge",
    },
  ]

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Your Path to <span className="glow-purple">Mastery</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            An immersive learning experience inspired by Solo Leveling
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Link key={index} href={stat.link}>
              <div className="group bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:box-glow-purple cursor-pointer h-full">
                <div className={`${stat.color} mb-4`}>
                  <stat.icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-2">{stat.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{stat.description}</p>
                <div className="mt-4 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to explore →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
