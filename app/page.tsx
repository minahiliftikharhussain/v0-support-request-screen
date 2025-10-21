import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import {
  Package,
  DollarSign,
  MapPin,
  Shield,
  Clock,
  Star,
  TrendingUp,
  Users,
  CheckCircle2,
  ArrowRight,
  Truck,
  MessageSquare,
  CreditCard,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Trusted by 10,000+ Customers</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6">
                Fast, Reliable <span className="gradient-text">Furniture Delivery</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Connect with verified drivers instantly. Post your delivery job, receive competitive bids, track in
                real-time, and pay securely—all in one platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gradient-primary text-white" asChild>
                  <Link href="/signup">
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/how-it-works">Learn How It Works</Link>
                </Button>
              </div>
              <div className="flex items-center gap-6 mt-8 pt-8 border-t border-border">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-warning text-warning" />
                  <span className="font-semibold">4.9/5</span>
                  <span className="text-muted-foreground text-sm">Rating</span>
                </div>
                <div className="h-8 w-px bg-border" />
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="font-semibold">50K+</span>
                  <span className="text-muted-foreground text-sm">Deliveries</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/professional-furniture-delivery-truck-with-movers-.jpg"
                  alt="Professional furniture delivery service"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
              {/* Floating Stats Cards */}
              <Card className="absolute -bottom-6 -left-6 p-4 shadow-lg hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-success/10 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <p className="font-semibold">98% Success Rate</p>
                    <p className="text-sm text-muted-foreground">On-time deliveries</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need for Seamless Delivery</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform makes furniture delivery simple, secure, and stress-free
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Simple Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How GetDropGo Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get your furniture delivered in four easy steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full gradient-primary text-white flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">
                    {index + 1}
                  </div>
                  <step.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="gradient-primary text-white" asChild>
              <Link href="/signup">Start Your First Delivery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust GetDropGo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{testimonial.content}</p>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-95" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Your Furniture Delivered?</h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Join thousands of satisfied customers. Post your first delivery job today and experience the GetDropGo
              difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/signup">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                asChild
              >
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    icon: Package,
    title: "Post Your Job",
    description: "Describe your furniture delivery needs with photos, dimensions, and pickup/drop-off locations.",
  },
  {
    icon: DollarSign,
    title: "Competitive Bidding",
    description: "Receive bids from verified drivers within minutes. Choose the best price and rating for your needs.",
  },
  {
    icon: MapPin,
    title: "Real-Time Tracking",
    description: "Track your delivery live on the map. Know exactly where your furniture is at all times.",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "Payment is held securely until delivery is complete. Rate your driver and release funds.",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Get your furniture delivered same-day or schedule for a convenient time that works for you.",
  },
  {
    icon: CheckCircle2,
    title: "Verified Drivers",
    description: "All drivers are background-checked and insured. Read reviews from real customers.",
  },
]

const steps = [
  {
    icon: Package,
    title: "Post Job",
    description: "Create a delivery request with details and photos of your furniture",
  },
  {
    icon: MessageSquare,
    title: "Get Bids",
    description: "Receive competitive bids from verified drivers in your area",
  },
  {
    icon: Truck,
    title: "Track Live",
    description: "Monitor your delivery in real-time with GPS tracking",
  },
  {
    icon: CreditCard,
    title: "Pay Securely",
    description: "Release payment after successful delivery and rate your driver",
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    content:
      "GetDropGo made moving my couch so easy! I got 5 bids within an hour and saved $100 compared to traditional movers. Highly recommend!",
  },
  {
    name: "Michael Chen",
    role: "Small Business Owner",
    content:
      "As a furniture store owner, GetDropGo has been a game-changer. My customers love the convenience and I love the reliable service.",
  },
  {
    name: "Emily Rodriguez",
    role: "Interior Designer",
    content:
      "I use GetDropGo for all my client deliveries. The real-time tracking and professional drivers make my job so much easier.",
  },
]

const stats = [
  { value: "50K+", label: "Successful Deliveries" },
  { value: "10K+", label: "Happy Customers" },
  { value: "2K+", label: "Verified Drivers" },
  { value: "4.9/5", label: "Average Rating" },
]
