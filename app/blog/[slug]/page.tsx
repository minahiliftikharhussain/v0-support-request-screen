import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import Image from "next/image"
import { Calendar, ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import "./blog-post.css"

const blogPosts: Record<string, BlogPost> = {
  "choose-right-delivery-service": {
    id: 1,
    title: "How to Choose the Right Delivery Service for Your Furniture",
    slug: "choose-right-delivery-service",
    description:
      "Learn the key factors to consider when selecting a delivery service for your furniture and household items.",
    thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
    category: "Tips & Guides",
    author: "Admin",
    publishedAt: "2024-10-15",
    status: "published",
    content: `
      <h2>Introduction</h2>
      <p>Choosing the right delivery service is crucial for ensuring your furniture arrives safely and on time. Here are the key factors to consider...</p>
      
      <h3>1. Service Reliability</h3>
      <p>Look for companies with proven track records and positive customer reviews. Check their ratings and read testimonials from previous customers to gauge their reliability.</p>
      
      <h3>2. Insurance Coverage</h3>
      <p>Ensure the delivery service offers comprehensive insurance coverage for your furniture. This protects you against damage or loss during transit.</p>
      
      <h3>3. Pricing Transparency</h3>
      <p>Choose services that provide clear, upfront pricing with no hidden fees. Compare quotes from multiple providers to get the best value.</p>
      
      <h3>4. Tracking Capabilities</h3>
      <p>Real-time tracking allows you to monitor your delivery's progress and plan accordingly. This feature is essential for peace of mind.</p>
      
      <h3>5. Customer Support</h3>
      <p>Responsive customer support is vital when issues arise. Look for services that offer multiple contact channels and quick response times.</p>
      
      <h2>Conclusion</h2>
      <p>By considering these factors, you can select a delivery service that meets your needs and ensures your furniture arrives safely and on schedule.</p>
    `,
  },
  "prepare-furniture-delivery": {
    id: 2,
    title: "How to Prepare Your Furniture for Delivery",
    slug: "prepare-furniture-delivery",
    description:
      "Learn the essential steps to prepare your furniture before the movers arrive. Proper preparation ensures a smooth delivery.",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    category: "Delivery Tips",
    author: "Admin",
    publishedAt: "2024-10-12",
    status: "published",
    content: `
      <h2>Preparing Your Furniture</h2>
      <p>Proper preparation is key to a successful furniture delivery. Follow these steps to ensure everything goes smoothly.</p>
      
      <h3>1. Measure Everything</h3>
      <p>Measure your furniture and doorways to ensure everything will fit. This prevents surprises on delivery day.</p>
      
      <h3>2. Disassemble When Possible</h3>
      <p>Take apart furniture that can be disassembled. This makes moving easier and reduces the risk of damage.</p>
      
      <h3>3. Protect Surfaces</h3>
      <p>Wrap furniture in blankets or bubble wrap to protect surfaces from scratches and dents during transport.</p>
      
      <h3>4. Clear Pathways</h3>
      <p>Remove obstacles from hallways and doorways to create clear paths for movers.</p>
      
      <h2>Final Checklist</h2>
      <p>Before the movers arrive, double-check that everything is ready. This ensures a smooth and efficient delivery process.</p>
    `,
  },
  "cost-saving-tips": {
    id: 3,
    title: "10 Cost-Saving Tips for Furniture Moving",
    slug: "cost-saving-tips",
    description:
      "Moving furniture doesn't have to break the bank. Here are proven strategies to reduce your delivery costs significantly.",
    thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
    category: "Money Saving",
    author: "Admin",
    publishedAt: "2024-10-08",
    status: "published",
    content: `
      <h2>Save Money on Your Move</h2>
      <p>Follow these tips to reduce your furniture delivery costs without compromising on quality.</p>
      
      <h3>1. Compare Multiple Quotes</h3>
      <p>Get quotes from several providers and compare their rates and services.</p>
      
      <h3>2. Choose Off-Peak Times</h3>
      <p>Schedule deliveries during weekdays or off-peak seasons for better rates.</p>
      
      <h3>3. Do Some Work Yourself</h3>
      <p>Disassemble and pack items yourself to reduce labor costs.</p>
      
      <h3>4. Bundle Services</h3>
      <p>Combine multiple deliveries into one trip to save on transportation costs.</p>
      
      <h3>5. Use a Marketplace Platform</h3>
      <p>Platforms like GetDropGo allow drivers to bid on your job, creating competitive pricing.</p>
    `,
  },
  "delivery-insurance-guide": {
    id: 4,
    title: "Understanding Delivery Insurance: What's Covered?",
    slug: "delivery-insurance-guide",
    description:
      "Protect your valuable furniture with the right insurance. Learn what's typically covered and what you need to know.",
    thumbnail: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800",
    category: "Insurance",
    author: "Admin",
    publishedAt: "2024-10-05",
    status: "published",
    content: `
      <h2>Insurance Basics</h2>
      <p>Understanding delivery insurance helps you protect your valuable furniture during transport.</p>
      
      <h3>Types of Coverage</h3>
      <p>Learn about basic liability coverage versus full-value protection and which is right for you.</p>
      
      <h3>What's Typically Covered</h3>
      <p>Most policies cover damage during loading, transport, and unloading, but exclusions apply.</p>
      
      <h3>Filing Claims</h3>
      <p>Know the process for filing insurance claims and what documentation you'll need.</p>
    `,
  },
  "seasonal-moving-guide": {
    id: 5,
    title: "Seasonal Moving Guide: Best Times to Schedule Delivery",
    slug: "seasonal-moving-guide",
    description:
      "Timing matters when it comes to furniture delivery. Find out the best and worst times to schedule your move.",
    thumbnail: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800",
    category: "Planning",
    author: "Admin",
    publishedAt: "2024-10-03",
    status: "published",
    content: `
      <h2>Timing Your Move</h2>
      <p>The time of year you choose for your furniture delivery can significantly impact cost and availability.</p>
      
      <h3>Peak Season (Summer)</h3>
      <p>Summer is the busiest time for moves. Expect higher prices and less availability.</p>
      
      <h3>Off-Peak Season (Winter)</h3>
      <p>Winter offers lower rates and more flexible scheduling, but weather can be a factor.</p>
      
      <h3>Best Days of the Week</h3>
      <p>Mid-week deliveries often cost less than weekend moves.</p>
    `,
  },
  "eco-friendly-delivery": {
    id: 6,
    title: "Eco-Friendly Furniture Delivery: Sustainable Practices",
    slug: "eco-friendly-delivery",
    description:
      "Reduce your carbon footprint while moving furniture. Discover sustainable delivery options and green moving practices.",
    thumbnail: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800",
    category: "Sustainability",
    author: "Admin",
    publishedAt: "2024-10-01",
    status: "published",
    content: `
      <h2>Green Moving Solutions</h2>
      <p>Make your furniture delivery more environmentally friendly with these sustainable practices.</p>
      
      <h3>Choose Eco-Friendly Providers</h3>
      <p>Look for delivery services that use fuel-efficient vehicles and sustainable packing materials.</p>
      
      <h3>Reusable Packing Materials</h3>
      <p>Use blankets and reusable containers instead of single-use plastics and cardboard.</p>
      
      <h3>Optimize Routes</h3>
      <p>Efficient route planning reduces fuel consumption and emissions.</p>
    `,
  },
}

type BlogPost = {
  id: number
  title: string
  slug: string
  description: string
  thumbnail: string
  category: string
  author: string
  publishedAt: string
  status: string
  content: string
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | GetDropGo Blog`,
    description: post.description,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]

  if (!post) {
    notFound()
  }

  return (
    <div className="pt-20">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Button variant="ghost" asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>
      </div>

      {/* Hero Image */}
      <div className="relative h-[400px] md:h-[500px] mb-12">
        <Image src={post.thumbnail || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Article Content */}
      <article className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Badge className="mb-4 text-sm uppercase">{post.category}</Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <span className="text-sm">By {post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">{post.publishedAt}</span>
            </div>
          </div>
        </div>

        <div
          className="blog-content prose prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <Separator className="my-12" />

        {/* Author Bio */}
        <Card className="p-6 mb-12">
          <div className="flex items-start gap-4">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary text-xl flex-shrink-0">
              {post.author.charAt(0)}
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">About {post.author}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {post.author} is a delivery expert with years of experience in the furniture moving industry. They
                specialize in helping customers navigate the complexities of furniture delivery and logistics.
              </p>
            </div>
          </div>
        </Card>

        {/* Related Posts */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(blogPosts)
              .filter(([slug]) => slug !== params.slug)
              .slice(0, 2)
              .map(([slug, relatedPost]) => (
                <Card key={slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={relatedPost.thumbnail || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-3">
                      {relatedPost.category}
                    </Badge>
                    <h3 className="text-xl font-semibold mb-2">
                      <Link href={`/blog/${slug}`} className="hover:text-primary transition-colors">
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{relatedPost.description}</p>
                    <Link
                      href={`/blog/${slug}`}
                      className="text-primary hover:underline text-sm font-medium flex items-center gap-1"
                    >
                      Read More
                      <ArrowLeft className="h-3 w-3 rotate-180" />
                    </Link>
                  </div>
                </Card>
              ))}
          </div>
        </div>

        {/* CTA */}
        <Card className="p-8 text-center gradient-primary mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/90 mb-6 leading-relaxed">
            Post your furniture delivery job today and connect with verified drivers in your area
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="https://play.google.com/store">Get Started Free</Link>
          </Button>
        </Card>
      </article>
    </div>
  )
}
