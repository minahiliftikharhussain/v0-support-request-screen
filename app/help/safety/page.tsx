import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Safety & Insurance - GetDropGo Help",
  description: "Learn about our safety measures and insurance coverage",
}

export default function SafetyPage() {
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
            <Badge className="mb-4">Safety & Insurance</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Safety & Insurance</h1>
            <p className="text-lg text-muted-foreground">Your safety and protection are our top priorities</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">Driver Verification</h2>
              <p className="text-muted-foreground leading-relaxed">
                All drivers undergo comprehensive background checks and must provide proof of insurance before joining
                our platform. We verify their credentials and monitor their performance through our rating system.
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">Insurance Coverage</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every delivery is protected by our comprehensive insurance plan:
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span className="text-muted-foreground">Up to $5,000 coverage per delivery</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span className="text-muted-foreground">Damage and loss protection</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span className="text-muted-foreground">24/7 claims support</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
