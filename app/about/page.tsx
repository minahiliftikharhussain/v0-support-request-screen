import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Target, Users, Shield, TrendingUp, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | GetDropGo",
  description: "Learn about GetDropGo's mission to revolutionize furniture delivery with our innovative platform.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4">About GetDropGo</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6">
              Revolutionizing <span className="gradient-text">Furniture Delivery</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We're on a mission to make furniture delivery simple, affordable, and stress-free for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                GetDropGo was founded with a simple idea: furniture delivery shouldn't be complicated or expensive. We
                connect people who need furniture delivered with verified drivers who have the right equipment and
                expertise.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By leveraging technology and building a trusted community, we're making it easier than ever to move
                furniture safely and affordably.
              </p>
            </div>
            <Card className="p-8">
              <div className="h-64 rounded-lg bg-muted flex items-center justify-center">
                <Target className="h-24 w-24 text-primary" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do at GetDropGo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">GetDropGo by the Numbers</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 gradient-primary opacity-95" />
            <div className="relative z-10 p-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the GetDropGo Community</h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Whether you need furniture delivered or want to earn money as a driver, we'd love to have you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/signup">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  asChild
                >
                  <Link href="/help">Learn More</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}

const values = [
  {
    icon: Shield,
    title: "Trust & Safety",
    description: "All drivers are verified and insured. Your furniture and safety are our top priorities.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "We build lasting relationships with our customers and drivers based on mutual respect.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "We continuously improve our platform with the latest technology and user feedback.",
  },
  {
    icon: Target,
    title: "Transparency",
    description: "Clear pricing, honest communication, and no hidden fees. What you see is what you get.",
  },
]

const stats = [
  { value: "50K+", label: "Deliveries Completed" },
  { value: "10K+", label: "Happy Customers" },
  { value: "2K+", label: "Verified Drivers" },
  { value: "4.9/5", label: "Average Rating" },
]
