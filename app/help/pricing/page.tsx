import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Pricing & Payments - GetDropGo Help",
  description: "Understand our pricing structure and how payments work",
}

export default function PricingPage() {
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
            <Badge className="mb-4">Pricing & Payments</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Pricing & Payments</h1>
            <p className="text-lg text-muted-foreground">
              Learn about our transparent pricing and secure payment process
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">How Pricing Works</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                GetDropGo uses a competitive bidding system. Drivers bid on your delivery job based on distance, item
                size, and complexity. You choose the best price that fits your budget.
              </p>
              <div className="bg-muted/30 p-4 rounded-lg">
                <p className="font-semibold mb-2">Typical Price Range:</p>
                <p className="text-muted-foreground">Local deliveries: $75 - $300</p>
                <p className="text-muted-foreground">Long distance: $300 - $800+</p>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">Payment Process</h2>
              <ol className="space-y-4">
                <li className="flex gap-3">
                  <span className="font-bold text-primary">1.</span>
                  <span className="text-muted-foreground">Payment is authorized when you accept a bid</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">2.</span>
                  <span className="text-muted-foreground">Funds are held securely in escrow during delivery</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">3.</span>
                  <span className="text-muted-foreground">
                    You release payment after confirming successful delivery
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">4.</span>
                  <span className="text-muted-foreground">Driver receives payment minus platform fee</span>
                </li>
              </ol>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
