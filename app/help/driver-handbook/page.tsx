import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Driver Handbook - GetDropGo Help",
  description: "Everything drivers need to know",
}

export default function DriverHandbookPage() {
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
            <Badge className="mb-4">Driver Handbook</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Driver Handbook</h1>
            <p className="text-lg text-muted-foreground">Essential information for GetDropGo drivers</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Driver Best Practices</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Communication</h3>
                  <p className="text-muted-foreground">
                    Always communicate clearly with customers. Notify them 30 minutes before arrival and confirm
                    delivery details.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Safety First</h3>
                  <p className="text-muted-foreground">
                    Use proper lifting techniques and equipment. Never rush a delivery at the expense of safety.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Professionalism</h3>
                  <p className="text-muted-foreground">
                    Treat customers and their property with respect. Maintain a professional appearance and attitude.
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
