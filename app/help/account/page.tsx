import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Account & Settings - GetDropGo Help",
  description: "Manage your account, profile, and notification preferences",
}

export default function AccountPage() {
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
            <Badge className="mb-4">Account & Settings</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Account & Settings</h1>
            <p className="text-lg text-muted-foreground">Manage your GetDropGo account and preferences</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">Profile Settings</h2>
              <p className="text-muted-foreground leading-relaxed">
                Update your personal information, contact details, and profile photo from your account dashboard. Keep
                your information current to ensure smooth deliveries.
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">Notification Preferences</h2>
              <p className="text-muted-foreground leading-relaxed">
                Customize how you receive updates about your deliveries. Choose between email, SMS, or push
                notifications for different types of alerts.
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-4">Payment Methods</h2>
              <p className="text-muted-foreground leading-relaxed">
                Add, remove, or update your payment methods. All payment information is encrypted and stored securely.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
