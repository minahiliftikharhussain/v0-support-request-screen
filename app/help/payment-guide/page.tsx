import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Payment Guide - GetDropGo Help",
  description: "Understanding payments and fees",
}

export default function PaymentGuidePage() {
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
            <Badge className="mb-4">Payment Guide</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Payment Guide</h1>
            <p className="text-lg text-muted-foreground">Understanding how payments and fees work on GetDropGo</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">Payment Methods</h2>
              <p className="text-muted-foreground leading-relaxed">
                We accept all major credit cards, debit cards, and digital payment methods. Your payment information is
                encrypted and stored securely.
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">Service Fees</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                GetDropGo charges a small service fee to facilitate connections between customers and drivers:
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span className="text-muted-foreground">Customer service fee: 5% of delivery cost</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span className="text-muted-foreground">Driver commission: 15% of delivery cost</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">Refund Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you're not satisfied with your delivery, contact our support team within 48 hours. We'll review your
                case and process refunds for eligible claims.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
