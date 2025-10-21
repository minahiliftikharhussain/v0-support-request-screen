import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowRight, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export const metadata = {
  title: "Blog - Delivery Tips & Industry News",
  description:
    "Stay updated with the latest furniture delivery tips, moving guides, and industry insights from GetDropGo experts.",
}

export default function BlogPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">GetDropGo Blog</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Expert tips, industry insights, and guides to make your furniture delivery experience seamless
            </p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input placeholder="Search articles..." className="pl-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Badge className="mb-4">Featured Article</Badge>
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <Image src="/modern-furniture-delivery-truck.jpg" alt="Featured blog post" fill className="object-cover" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <Badge variant="secondary">Delivery Tips</Badge>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Oct 15, 2025</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>8 min read</span>
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  <Link href="/blog/complete-guide-furniture-delivery" className="hover:text-primary transition-colors">
                    The Complete Guide to Furniture Delivery: Everything You Need to Know
                  </Link>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Moving furniture can be stressful, but it doesn't have to be. Learn the insider tips and best
                  practices that will save you time, money, and headaches on your next furniture delivery.
                </p>
                <Button variant="outline" asChild className="w-fit bg-transparent">
                  <Link href="/blog/complete-guide-furniture-delivery">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-primary hover:underline text-sm font-medium flex items-center gap-1"
                    >
                      Read More
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Get the latest delivery tips, industry news, and exclusive offers delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input placeholder="Enter your email" type="email" className="flex-1" />
              <Button className="gradient-primary text-white">Subscribe</Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}

const blogPosts = [
  {
    slug: "how-to-prepare-furniture-for-delivery",
    title: "How to Prepare Your Furniture for Delivery",
    excerpt:
      "Learn the essential steps to prepare your furniture before the movers arrive. Proper preparation ensures a smooth delivery.",
    category: "Delivery Tips",
    date: "Oct 12, 2025",
    readTime: "5 min read",
    image: "/furniture-preparation-for-moving.jpg",
  },
  {
    slug: "choosing-right-delivery-service",
    title: "Choosing the Right Delivery Service for Your Needs",
    excerpt:
      "Not all delivery services are created equal. Discover what to look for when selecting a furniture delivery provider.",
    category: "Guides",
    date: "Oct 10, 2025",
    readTime: "6 min read",
    image: "/delivery-service-comparison.jpg",
  },
  {
    slug: "cost-saving-tips-furniture-moving",
    title: "10 Cost-Saving Tips for Furniture Moving",
    excerpt:
      "Moving furniture doesn't have to break the bank. Here are proven strategies to reduce your delivery costs significantly.",
    category: "Money Saving",
    date: "Oct 8, 2025",
    readTime: "7 min read",
    image: "/saving-money-on-furniture-delivery.jpg",
  },
  {
    slug: "understanding-delivery-insurance",
    title: "Understanding Delivery Insurance: What's Covered?",
    excerpt:
      "Protect your valuable furniture with the right insurance. Learn what's typically covered and what you need to know.",
    category: "Insurance",
    date: "Oct 5, 2025",
    readTime: "5 min read",
    image: "/furniture-insurance-protection.jpg",
  },
  {
    slug: "seasonal-moving-guide",
    title: "Seasonal Moving Guide: Best Times to Schedule Delivery",
    excerpt:
      "Timing matters when it comes to furniture delivery. Find out the best and worst times to schedule your move.",
    category: "Planning",
    date: "Oct 3, 2025",
    readTime: "6 min read",
    image: "/seasonal-moving-calendar.jpg",
  },
  {
    slug: "eco-friendly-furniture-delivery",
    title: "Eco-Friendly Furniture Delivery: Sustainable Practices",
    excerpt:
      "Reduce your carbon footprint while moving furniture. Discover sustainable delivery options and green moving practices.",
    category: "Sustainability",
    date: "Oct 1, 2025",
    readTime: "5 min read",
    image: "/eco-friendly-green-delivery-truck.jpg",
  },
]
