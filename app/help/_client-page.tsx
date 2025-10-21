"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import {
  Search,
  MessageCircle,
  Mail,
  Phone,
  BookOpen,
  HelpCircle,
  Package,
  DollarSign,
  Shield,
  Truck,
  CreditCard,
  Users,
} from "lucide-react"

export default function ClientHelpPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">How Can We Help You?</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Search our knowledge base or contact our support team
            </p>
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input placeholder="Search for help articles..." className="pl-12 h-14 text-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Help Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCategories.map((category, index) => (
              <Link key={index} href={category.link}>
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer group h-full">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{category.description}</p>
                  <span className="text-primary hover:underline text-sm font-medium">Learn More →</span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">FAQ</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground">Find quick answers to the most common questions</p>
            </div>

            <Card className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left hover:text-primary">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Contact Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-lg text-muted-foreground">Our support team is here to assist you</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <method.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{method.description}</p>
                <Button variant="outline" asChild className="w-full bg-transparent">
                  <Link href={method.link}>{method.action}</Link>
                </Button>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <Card className="max-w-2xl mx-auto p-8">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help?" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea id="message" placeholder="Describe your issue or question..." rows={6} />
              </div>
              <Button type="submit" className="w-full gradient-primary text-white">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Helpful Resources</h2>
            <p className="text-lg text-muted-foreground">
              Guides and articles to help you get the most out of GetDropGo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <Link key={index} href={resource.link}>
                <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <resource.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                  <span className="text-primary hover:underline text-sm font-medium">View Guide →</span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 md:p-12 text-center gradient-primary">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-white/90 mb-6 leading-relaxed">
                Join thousands of satisfied customers and experience hassle-free furniture delivery
              </p>
              <Button size="lg" variant="secondary" asChild className="mx-auto">
                <Link href="/signup">Create Free Account</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

const helpCategories = [
  {
    icon: Package,
    title: "Getting Started",
    description: "Learn how to post your first delivery job and get started with GetDropGo",
    link: "/help/getting-started",
  },
  {
    icon: DollarSign,
    title: "Pricing & Payments",
    description: "Understand our pricing structure and how payments work",
    link: "/help/pricing",
  },
  {
    icon: Truck,
    title: "Delivery Process",
    description: "Track your delivery and understand the delivery workflow",
    link: "/help/delivery",
  },
  {
    icon: Shield,
    title: "Safety & Insurance",
    description: "Learn about our safety measures and insurance coverage",
    link: "/help/safety",
  },
  {
    icon: Users,
    title: "Driver Information",
    description: "Information for drivers looking to join our platform",
    link: "/help/drivers",
  },
  {
    icon: HelpCircle,
    title: "Account & Settings",
    description: "Manage your account, profile, and notification preferences",
    link: "/help/account",
  },
]

const faqs = [
  {
    question: "How does GetDropGo work?",
    answer:
      "GetDropGo connects you with verified delivery drivers. Simply post your delivery job with details and photos, receive competitive bids from drivers, choose the best option, and track your delivery in real-time. Payment is held securely until delivery is complete.",
  },
  {
    question: "How much does delivery cost?",
    answer:
      "Delivery costs vary based on distance, item size, and complexity. You'll receive multiple bids from drivers, allowing you to choose the best price for your needs. Most local deliveries range from $75-$300.",
  },
  {
    question: "Are drivers insured and verified?",
    answer:
      "Yes! All drivers on GetDropGo undergo background checks and must provide proof of insurance. We verify their credentials before they can accept jobs on our platform.",
  },
  {
    question: "What if my furniture gets damaged?",
    answer:
      "All deliveries are covered by our protection plan. If damage occurs during delivery, document it immediately with photos and contact our support team. We'll work with you and the driver to resolve the issue.",
  },
  {
    question: "Can I schedule a delivery for a specific time?",
    answer:
      "Yes! When posting your job, you can specify your preferred delivery date and time window. Drivers will bid based on your schedule requirements.",
  },
  {
    question: "How do I track my delivery?",
    answer:
      "Once your delivery is in progress, you'll have access to real-time GPS tracking through your account dashboard. You'll also receive notifications at key milestones.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, debit cards, and digital payment methods. Payment is processed securely through our platform and held until delivery is confirmed.",
  },
  {
    question: "Can I cancel or reschedule a delivery?",
    answer:
      "Yes, you can cancel or reschedule before the driver begins the pickup. Cancellation policies vary based on timing - check our terms for specific details.",
  },
  {
    question: "What items can I deliver through GetDropGo?",
    answer:
      "We specialize in furniture and large items including sofas, beds, tables, appliances, and more. Items must fit within standard vehicle dimensions. Hazardous materials are not permitted.",
  },
  {
    question: "How do I become a driver?",
    answer:
      "Visit our driver signup page to apply. You'll need a valid driver's license, insurance, a suitable vehicle, and to pass our background check. Once approved, you can start accepting delivery jobs.",
  },
]

const contactMethods = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our support team in real-time",
    action: "Start Chat",
    link: "/chat",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Get a response within 24 hours",
    action: "Send Email",
    link: "mailto:support@getdropgo.com",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Mon-Fri, 9am-6pm EST",
    action: "Call Now",
    link: "tel:+15551234567",
  },
]

const resources = [
  {
    icon: BookOpen,
    title: "User Guide",
    description: "Complete guide to using GetDropGo",
    link: "/help/user-guide",
  },
  {
    icon: Truck,
    title: "Driver Handbook",
    description: "Everything drivers need to know",
    link: "/help/driver-handbook",
  },
  {
    icon: Shield,
    title: "Safety Guidelines",
    description: "Best practices for safe delivery",
    link: "/help/safety-guidelines",
  },
  {
    icon: CreditCard,
    title: "Payment Guide",
    description: "Understanding payments and fees",
    link: "/help/payment-guide",
  },
]
