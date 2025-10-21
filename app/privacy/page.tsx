import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export const metadata = {
  title: "Privacy Policy - GetDropGo",
  description: "Learn how GetDropGo collects, uses, and protects your personal information.",
}

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4">Legal</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground">Last updated: October 22, 2025</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h2>1. Introduction</h2>
              <p>
                At GetDropGo, we take your privacy seriously. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you use our platform. Please read this policy carefully.
              </p>

              <Separator className="my-8" />

              <h2>2. Information We Collect</h2>
              <h3>2.1 Information You Provide</h3>
              <p>We collect information that you voluntarily provide to us, including:</p>
              <ul>
                <li>Account information (name, email, phone number, password)</li>
                <li>Profile information (photo, bio, preferences)</li>
                <li>Payment information (credit card details, billing address)</li>
                <li>Delivery details (pickup and drop-off addresses, item descriptions)</li>
                <li>Communications with us and other users</li>
                <li>Reviews and ratings</li>
              </ul>

              <h3>2.2 Information Collected Automatically</h3>
              <p>When you use GetDropGo, we automatically collect:</p>
              <ul>
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage data (pages viewed, features used, time spent)</li>
                <li>Location data (GPS coordinates during active deliveries)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h3>2.3 Information from Third Parties</h3>
              <p>We may receive information from:</p>
              <ul>
                <li>Payment processors</li>
                <li>Background check providers (for drivers)</li>
                <li>Social media platforms (if you connect your account)</li>
                <li>Analytics providers</li>
              </ul>

              <Separator className="my-8" />

              <h2>3. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul>
                <li>Provide and improve our services</li>
                <li>Process transactions and payments</li>
                <li>Facilitate communication between customers and drivers</li>
                <li>Verify driver credentials and conduct background checks</li>
                <li>Provide customer support</li>
                <li>Send notifications about your deliveries</li>
                <li>Detect and prevent fraud and abuse</li>
                <li>Comply with legal obligations</li>
                <li>Analyze usage patterns and improve user experience</li>
                <li>Send marketing communications (with your consent)</li>
              </ul>

              <Separator className="my-8" />

              <h2>4. How We Share Your Information</h2>
              <h3>4.1 With Other Users</h3>
              <p>
                We share necessary information between customers and drivers to facilitate deliveries, including names,
                phone numbers, and delivery addresses.
              </p>

              <h3>4.2 With Service Providers</h3>
              <p>We share information with third-party service providers who help us operate our platform:</p>
              <ul>
                <li>Payment processors</li>
                <li>Cloud hosting providers</li>
                <li>Analytics services</li>
                <li>Customer support tools</li>
                <li>Background check services</li>
              </ul>

              <h3>4.3 For Legal Reasons</h3>
              <p>We may disclose information when required by law or to:</p>
              <ul>
                <li>Comply with legal processes</li>
                <li>Enforce our Terms of Service</li>
                <li>Protect our rights and property</li>
                <li>Prevent fraud or illegal activities</li>
                <li>Protect the safety of users</li>
              </ul>

              <h3>4.4 Business Transfers</h3>
              <p>
                If GetDropGo is involved in a merger, acquisition, or sale of assets, your information may be
                transferred as part of that transaction.
              </p>

              <Separator className="my-8" />

              <h2>5. Data Security</h2>
              <p>We implement appropriate security measures to protect your information, including:</p>
              <ul>
                <li>Encryption of data in transit and at rest</li>
                <li>Secure payment processing</li>
                <li>Regular security audits</li>
                <li>Access controls and authentication</li>
                <li>Employee training on data protection</li>
              </ul>
              <p>
                However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute
                security of your information.
              </p>

              <Separator className="my-8" />

              <h2>6. Your Privacy Rights</h2>
              <h3>6.1 Access and Correction</h3>
              <p>You have the right to access and update your personal information through your account settings.</p>

              <h3>6.2 Data Deletion</h3>
              <p>
                You can request deletion of your account and personal information by contacting us. Some information may
                be retained for legal or legitimate business purposes.
              </p>

              <h3>6.3 Marketing Communications</h3>
              <p>You can opt out of marketing emails by clicking the unsubscribe link or updating your preferences.</p>

              <h3>6.4 Location Data</h3>
              <p>You can control location permissions through your device settings.</p>

              <h3>6.5 California Privacy Rights</h3>
              <p>California residents have additional rights under the CCPA, including:</p>
              <ul>
                <li>Right to know what personal information is collected</li>
                <li>Right to delete personal information</li>
                <li>Right to opt-out of sale of personal information</li>
                <li>Right to non-discrimination for exercising privacy rights</li>
              </ul>

              <Separator className="my-8" />

              <h2>7. Cookies and Tracking</h2>
              <p>We use cookies and similar technologies to:</p>
              <ul>
                <li>Remember your preferences</li>
                <li>Authenticate your account</li>
                <li>Analyze site usage</li>
                <li>Provide personalized content</li>
              </ul>
              <p>You can control cookies through your browser settings, but this may affect platform functionality.</p>

              <Separator className="my-8" />

              <h2>8. Children's Privacy</h2>
              <p>
                GetDropGo is not intended for users under 18 years of age. We do not knowingly collect information from
                children. If we discover we have collected information from a child, we will delete it promptly.
              </p>

              <Separator className="my-8" />

              <h2>9. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your own. We ensure
                appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
              </p>

              <Separator className="my-8" />

              <h2>10. Data Retention</h2>
              <p>
                We retain your information for as long as necessary to provide our services and comply with legal
                obligations. When information is no longer needed, we securely delete or anonymize it.
              </p>

              <Separator className="my-8" />

              <h2>11. Third-Party Links</h2>
              <p>
                Our platform may contain links to third-party websites. We are not responsible for the privacy practices
                of these sites. We encourage you to review their privacy policies.
              </p>

              <Separator className="my-8" />

              <h2>12. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of significant changes via email
                or platform notification. The "Last Updated" date at the top indicates when the policy was last revised.
              </p>

              <Separator className="my-8" />

              <h2>13. Contact Us</h2>
              <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
              <ul>
                <li>Email: privacy@getdropgo.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>Address: 123 Delivery Lane, San Francisco, CA 94102</li>
              </ul>

              <Separator className="my-8" />

              <p className="text-sm text-muted-foreground">
                By using GetDropGo, you acknowledge that you have read and understood this Privacy Policy and agree to
                the collection, use, and disclosure of your information as described herein.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
