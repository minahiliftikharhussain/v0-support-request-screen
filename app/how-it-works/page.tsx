import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Package, MessageSquare, Truck, CreditCard, CheckCircle2, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How It Works | GetDropGo",
  description: "Learn how GetDropGo makes furniture delivery simple, secure, and stress-free in four easy steps.",
}

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4">Simple Process</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6">
              How <span className="gradient-text">GetDropGo</span> Works
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Get your furniture delivered in four easy steps. Fast, reliable, and secure.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full gradient-primary text-white flex items-center justify-center text-xl font-bold">
                      {index + 1}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">{step.title}</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Card className={`p-8 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="h-64 rounded-lg bg-muted flex items-center justify-center">
                    <step.icon className="h-24 w-24 text-primary" />
                  </div>
                </Card>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers and experience hassle-free furniture delivery today.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/signup">
                  Create Your First Job
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}

const steps = [
  {
    icon: Package,
    title: "Post Your Delivery Job",
    description:
      "Create a detailed delivery request with photos, dimensions, and pickup/drop-off locations. The more details you provide, the more accurate bids you'll receive.",
    features: [
      "Upload photos of your furniture",
      "Specify exact dimensions and weight",
      "Set pickup and delivery addresses",
      "Choose your preferred delivery time",
    ],
  },
  {
    icon: MessageSquare,
    title: "Receive Competitive Bids",
    description:
      "Verified drivers in your area will review your job and submit their bids. Compare prices, ratings, and reviews to choose the best driver for your needs.",
    features: [
      "Get multiple bids within minutes",
      "View driver ratings and reviews",
      "Compare prices and availability",
      "Chat with drivers before booking",
    ],
  },
  {
    icon: Truck,
    title: "Track Your Delivery",
    description:
      "Once you accept a bid, track your delivery in real-time. Know exactly where your furniture is and when it will arrive with live GPS tracking.",
    features: [
      "Real-time GPS tracking",
      "Estimated arrival time updates",
      "Direct communication with driver",
      "Photo confirmation at pickup and delivery",
    ],
  },
  {
    icon: CreditCard,
    title: "Pay Securely",
    description:
      "Payment is held securely until delivery is complete. Once your furniture arrives safely, rate your driver and release the payment.",
    features: [
      "Secure escrow payment system",
      "Multiple payment methods accepted",
      "Rate and review your driver",
      "Get delivery confirmation receipt",
    ],
  },
]
