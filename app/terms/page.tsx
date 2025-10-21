import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export const metadata = {
  title: "Terms of Service - GetDropGo",
  description: "Read our terms of service and understand the rules and guidelines for using GetDropGo.",
}

export default function TermsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4">Legal</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-lg text-muted-foreground">Last updated: October 22, 2025</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h2>1. Acceptance of Terms</h2>
              <p>
                Welcome to GetDropGo. By accessing or using our platform, you agree to be bound by these Terms of
                Service ("Terms"). If you do not agree to these Terms, please do not use our services.
              </p>

              <Separator className="my-8" />

              <h2>2. Description of Service</h2>
              <p>
                GetDropGo is a marketplace platform that connects customers who need furniture delivery services with
                independent delivery drivers. We facilitate the connection between parties but are not directly
                responsible for the delivery services provided by drivers.
              </p>
              <p>Our platform provides:</p>
              <ul>
                <li>Job posting and bidding system</li>
                <li>Secure payment processing</li>
                <li>Real-time tracking capabilities</li>
                <li>Rating and review system</li>
                <li>Customer support services</li>
              </ul>

              <Separator className="my-8" />

              <h2>3. User Accounts</h2>
              <h3>3.1 Account Creation</h3>
              <p>
                To use GetDropGo, you must create an account and provide accurate, complete information. You are
                responsible for maintaining the confidentiality of your account credentials and for all activities that
                occur under your account.
              </p>

              <h3>3.2 Account Requirements</h3>
              <p>You must:</p>
              <ul>
                <li>Be at least 18 years old</li>
                <li>Provide accurate and truthful information</li>
                <li>Maintain the security of your account</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>

              <Separator className="my-8" />

              <h2>4. User Responsibilities</h2>
              <h3>4.1 For Customers</h3>
              <p>As a customer, you agree to:</p>
              <ul>
                <li>Provide accurate descriptions and photos of items to be delivered</li>
                <li>Ensure items are ready for pickup at the scheduled time</li>
                <li>Provide clear access to pickup and delivery locations</li>
                <li>Pay agreed-upon fees in a timely manner</li>
                <li>Treat drivers with respect and professionalism</li>
              </ul>

              <h3>4.2 For Drivers</h3>
              <p>As a driver, you agree to:</p>
              <ul>
                <li>Maintain valid insurance and licensing</li>
                <li>Provide safe and professional delivery services</li>
                <li>Handle items with care and follow customer instructions</li>
                <li>Communicate clearly with customers throughout the delivery</li>
                <li>Complete deliveries as agreed upon</li>
              </ul>

              <Separator className="my-8" />

              <h2>5. Payments and Fees</h2>
              <h3>5.1 Service Fees</h3>
              <p>
                GetDropGo charges a service fee for facilitating connections between customers and drivers. This fee is
                clearly disclosed before any transaction is completed.
              </p>

              <h3>5.2 Payment Processing</h3>
              <p>
                All payments are processed securely through our platform. Funds are held in escrow until delivery is
                confirmed complete. Customers must release payment within 24 hours of successful delivery.
              </p>

              <h3>5.3 Refunds and Disputes</h3>
              <p>
                Refund requests must be submitted within 48 hours of delivery completion. We will review all disputes
                fairly and make determinations based on evidence provided by both parties.
              </p>

              <Separator className="my-8" />

              <h2>6. Insurance and Liability</h2>
              <h3>6.1 Driver Insurance</h3>
              <p>
                All drivers must maintain appropriate insurance coverage. GetDropGo verifies insurance documentation but
                is not responsible for gaps in coverage.
              </p>

              <h3>6.2 Platform Liability</h3>
              <p>
                GetDropGo acts as a marketplace platform and is not liable for damages, losses, or injuries that occur
                during delivery. Drivers are independent contractors responsible for their own actions.
              </p>

              <h3>6.3 Protection Plan</h3>
              <p>
                We offer an optional protection plan that provides additional coverage for items during delivery. Terms
                and coverage limits are specified in the protection plan documentation.
              </p>

              <Separator className="my-8" />

              <h2>7. Prohibited Activities</h2>
              <p>Users may not:</p>
              <ul>
                <li>Use the platform for illegal activities</li>
                <li>Provide false or misleading information</li>
                <li>Harass, threaten, or abuse other users</li>
                <li>Attempt to circumvent platform fees</li>
                <li>Use automated systems to access the platform</li>
                <li>Violate intellectual property rights</li>
                <li>Post prohibited items (hazardous materials, illegal goods, etc.)</li>
              </ul>

              <Separator className="my-8" />

              <h2>8. Intellectual Property</h2>
              <p>
                All content on GetDropGo, including logos, text, graphics, and software, is owned by GetDropGo or its
                licensors and protected by copyright and trademark laws. You may not use our intellectual property
                without written permission.
              </p>

              <Separator className="my-8" />

              <h2>9. Privacy and Data</h2>
              <p>
                Your use of GetDropGo is also governed by our Privacy Policy. We collect, use, and protect your personal
                information as described in that policy.
              </p>

              <Separator className="my-8" />

              <h2>10. Termination</h2>
              <p>
                We reserve the right to suspend or terminate accounts that violate these Terms or engage in fraudulent,
                abusive, or illegal activities. You may also terminate your account at any time through your account
                settings.
              </p>

              <Separator className="my-8" />

              <h2>11. Disclaimers</h2>
              <p>
                GetDropGo is provided "as is" without warranties of any kind. We do not guarantee uninterrupted service,
                error-free operation, or that the platform will meet your specific requirements.
              </p>

              <Separator className="my-8" />

              <h2>12. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, GetDropGo shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages arising from your use of the platform.
              </p>

              <Separator className="my-8" />

              <h2>13. Dispute Resolution</h2>
              <h3>13.1 Informal Resolution</h3>
              <p>
                We encourage users to resolve disputes informally by contacting our support team. We will work with both
                parties to find a fair resolution.
              </p>

              <h3>13.2 Arbitration</h3>
              <p>
                Any disputes that cannot be resolved informally shall be settled through binding arbitration in
                accordance with the rules of the American Arbitration Association.
              </p>

              <Separator className="my-8" />

              <h2>14. Changes to Terms</h2>
              <p>
                We may update these Terms from time to time. We will notify users of significant changes via email or
                platform notification. Continued use of GetDropGo after changes constitutes acceptance of the new Terms.
              </p>

              <Separator className="my-8" />

              <h2>15. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the State of California, without regard to conflict of law
                principles.
              </p>

              <Separator className="my-8" />

              <h2>16. Contact Information</h2>
              <p>For questions about these Terms, please contact us:</p>
              <ul>
                <li>Email: legal@getdropgo.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>Address: 123 Delivery Lane, San Francisco, CA 94102</li>
              </ul>

              <Separator className="my-8" />

              <p className="text-sm text-muted-foreground">
                By using GetDropGo, you acknowledge that you have read, understood, and agree to be bound by these Terms
                of Service.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
