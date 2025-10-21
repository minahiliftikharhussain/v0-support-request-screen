import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Shield } from "lucide-react"

export const metadata = {
  title: "Safety Guidelines - GetDropGo Help",
  description: "Best practices for safe delivery",
}

export default function SafetyGuidelinesPage() {
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
            <Badge className="mb-4">Safety Guidelines</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Safety Guidelines</h1>
            <p className="text-lg text-muted-foreground">Best practices for safe and secure deliveries</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Safety Best Practices</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Verify Driver Identity</h3>
                    <p className="text-muted-foreground text-sm">
                      Always check the driver's profile and vehicle details before allowing access.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Document Everything</h3>
                    <p className="text-muted-foreground text-sm">
                      Take photos of items before and after delivery for your records.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Communicate Clearly</h3>
                    <p className="text-muted-foreground text-sm">
                      Use the in-app messaging system for all communications.
                    </p>
                  </div>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
