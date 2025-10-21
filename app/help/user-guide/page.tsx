import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "User Guide - GetDropGo Help",
  description: "Complete guide to using GetDropGo",
}

export default function UserGuidePage() {
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
            <Badge className="mb-4">User Guide</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Complete User Guide</h1>
            <p className="text-lg text-muted-foreground">Everything you need to know about using GetDropGo</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Comprehensive Guide</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                This guide covers everything from creating your account to completing your first delivery. Follow along
                step-by-step to become a GetDropGo expert.
              </p>
              <div className="space-y-4">
                <Link
                  href="/help/getting-started"
                  className="block p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <h3 className="font-semibold mb-1">Getting Started</h3>
                  <p className="text-sm text-muted-foreground">Create your account and post your first job</p>
                </Link>
                <Link
                  href="/help/pricing"
                  className="block p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <h3 className="font-semibold mb-1">Pricing & Payments</h3>
                  <p className="text-sm text-muted-foreground">Understand how pricing and payments work</p>
                </Link>
                <Link
                  href="/help/delivery"
                  className="block p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <h3 className="font-semibold mb-1">Delivery Process</h3>
                  <p className="text-sm text-muted-foreground">Learn about the delivery workflow</p>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
