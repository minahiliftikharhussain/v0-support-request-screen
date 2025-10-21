import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Delivery Process - GetDropGo Help",
  description: "Track your delivery and understand the delivery workflow",
}

export default function DeliveryPage() {
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
            <Badge className="mb-4">Delivery Process</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Understanding the Delivery Process</h1>
            <p className="text-lg text-muted-foreground">Learn how deliveries work and how to track your furniture</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Delivery Workflow</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Before Pickup</h3>
                  <p className="text-muted-foreground">
                    Ensure your furniture is ready and accessible. The driver will contact you 30 minutes before
                    arrival.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">During Pickup</h3>
                  <p className="text-muted-foreground">
                    The driver will inspect and photograph the items. You'll receive a notification when pickup is
                    complete.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">In Transit</h3>
                  <p className="text-muted-foreground">
                    Track your delivery in real-time using GPS. Receive updates at key milestones.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">At Delivery</h3>
                  <p className="text-muted-foreground">
                    Inspect items upon arrival. Confirm delivery completion and rate your driver.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
