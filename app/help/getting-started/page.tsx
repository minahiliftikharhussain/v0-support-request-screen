import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Getting Started - GetDropGo Help",
  description: "Learn how to post your first delivery job and get started with GetDropGo",
}

export default function GettingStartedPage() {
  return (
    <div className="pt-20">
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" asChild className="mb-6">
              <Link href="/help">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Help Center
              </Link>
            </Button>
            <Badge className="mb-4">Getting Started</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Getting Started with GetDropGo</h1>
            <p className="text-lg text-muted-foreground">
              Learn how to post your first delivery job and start using our platform
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Step-by-Step Guide</h2>

              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t">
                <Button className="gradient-primary text-white" asChild>
                  <Link href="/signup">Create Your Account</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

const steps = [
  {
    title: "Create Your Account",
    description:
      "Sign up with your email and create a secure password. Verify your email address to activate your account.",
  },
  {
    title: "Complete Your Profile",
    description: "Add your contact information, delivery addresses, and payment method for faster checkout.",
  },
  {
    title: "Post Your First Job",
    description: "Describe your furniture delivery needs, add photos, and specify pickup and drop-off locations.",
  },
  {
    title: "Review Bids",
    description: "Receive competitive bids from verified drivers. Compare prices, ratings, and reviews.",
  },
  {
    title: "Choose Your Driver",
    description: "Select the best driver for your needs and confirm the delivery details.",
  },
  {
    title: "Track Your Delivery",
    description: "Monitor your delivery in real-time with GPS tracking and receive notifications.",
  },
]
