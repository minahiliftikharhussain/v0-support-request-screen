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
  Smartphone,
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

      {/* Video Demo Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">See It In Action</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How GetDropGo Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch this quick demo to see how easy it is to get your furniture delivered
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="relative aspect-video bg-muted">
                <video controls className="w-full h-full" poster="/furniture-delivery-app-demo.jpg">
                  <source
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Simple Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Four Easy Steps</h2>
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
      <section className="py-20">
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
      <section className="py-20 bg-muted/30">
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

      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">It's easier in the apps</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Download GetDropGo on your phone for the best experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-2 hover:border-primary/20">
              <div className="p-8 md:p-10">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="h-36 w-36 bg-white p-3 rounded-2xl shadow-md group-hover:shadow-lg transition-shadow">
                      <Image
                        src="/qr-code-for-getdropgo-customer-app.jpg"
                        alt="Download Customer App QR Code"
                        width={144}
                        height={144}
                        className="w-full h-full rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex items-center gap-2 justify-center sm:justify-start mb-2">
                      <Smartphone className="h-5 w-5 text-primary" />
                      <Badge variant="secondary" className="text-xs">
                        For Customers
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Download the Customer app</h3>
                    <p className="text-muted-foreground mb-4">Scan to download</p>
                    <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                      <span>Get the app</span>
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-2 hover:border-primary/20">
              <div className="p-8 md:p-10">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="h-36 w-36 bg-white p-3 rounded-2xl shadow-md group-hover:shadow-lg transition-shadow">
                      <Image
                        src="/qr-code-for-getdropgo-driver-app.jpg"
                        alt="Download Driver App QR Code"
                        width={144}
                        height={144}
                        className="w-full h-full rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex items-center gap-2 justify-center sm:justify-start mb-2">
                      <Truck className="h-5 w-5 text-primary" />
                      <Badge variant="secondary" className="text-xs">
                        For Drivers
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Download the Driver app</h3>
                    <p className="text-muted-foreground mb-4">Scan to download</p>
                    <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                      <span>Get the app</span>
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-6">Available on both Play Store and App Store</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <div className="h-14 px-6 rounded-xl bg-foreground text-background flex items-center gap-3 hover:bg-foreground/90 transition-colors">
                  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg font-semibold -mt-1">App Store</div>
                  </div>
                </div>
              </a>
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <div className="h-14 px-6 rounded-xl bg-foreground text-background flex items-center gap-3 hover:bg-foreground/90 transition-colors">
                  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-lg font-semibold -mt-1">Google Play</div>
                  </div>
                </div>
              </a>
            </div>
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
