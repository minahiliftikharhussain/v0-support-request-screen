import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Driver Information - GetDropGo Help",
  description: "Information for drivers looking to join our platform",
}

export default function DriversPage() {
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
            <Badge className="mb-4">Driver Information</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Become a GetDropGo Driver</h1>
            <p className="text-lg text-muted-foreground">Join our network of professional delivery drivers</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Requirements</h2>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-muted-foreground">Valid driver's license</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-muted-foreground">Proof of insurance</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-muted-foreground">Suitable vehicle (truck, van, or large SUV)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-muted-foreground">Pass background check</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-muted-foreground">18 years or older</span>
                </li>
              </ul>

              <div className="mt-8">
                <Button className="gradient-primary text-white" asChild>
                  <Link href="/driver-signup">Apply to Become a Driver</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
