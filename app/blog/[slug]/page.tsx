import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import { notFound } from "next/navigation"

// This would typically come from a CMS or database
const blogPosts: Record<string, BlogPost> = {
  "complete-guide-furniture-delivery": {
    title: "The Complete Guide to Furniture Delivery: Everything You Need to Know",
    excerpt:
      "Moving furniture can be stressful, but it doesn't have to be. Learn the insider tips and best practices that will save you time, money, and headaches.",
    category: "Delivery Tips",
    date: "Oct 15, 2025",
    readTime: "8 min read",
    author: "Sarah Mitchell",
    authorRole: "Delivery Expert",
    image: "/professional-furniture-delivery.jpg",
    content: `
      <p>Moving furniture is one of those tasks that seems simple until you actually have to do it. Whether you're relocating to a new home, delivering a purchase, or rearranging your space, furniture delivery requires careful planning and execution.</p>

      <h2>Why Professional Delivery Matters</h2>
      <p>While it might be tempting to handle furniture delivery yourself, professional services offer significant advantages. They have the right equipment, insurance coverage, and expertise to handle even the most challenging deliveries safely.</p>

      <h2>Planning Your Delivery</h2>
      <p>Successful furniture delivery starts with proper planning. Here are the key steps:</p>
      <ul>
        <li><strong>Measure everything:</strong> Doorways, hallways, staircases, and the furniture itself</li>
        <li><strong>Clear the path:</strong> Remove obstacles and protect floors and walls</li>
        <li><strong>Disassemble when possible:</strong> Many pieces are easier to move in parts</li>
        <li><strong>Protect your items:</strong> Use blankets, plastic wrap, and proper padding</li>
      </ul>

      <h2>Choosing the Right Delivery Service</h2>
      <p>Not all delivery services are created equal. Look for providers that offer:</p>
      <ul>
        <li>Insurance coverage for your items</li>
        <li>Verified and background-checked drivers</li>
        <li>Real-time tracking capabilities</li>
        <li>Transparent pricing with no hidden fees</li>
        <li>Customer reviews and ratings</li>
      </ul>

      <h2>Cost Considerations</h2>
      <p>Furniture delivery costs vary based on several factors including distance, item size, stairs, and timing. On average, local deliveries range from $75 to $300, while long-distance moves can cost significantly more.</p>

      <h2>Day-of-Delivery Tips</h2>
      <p>When delivery day arrives, be prepared:</p>
      <ul>
        <li>Be available and responsive to driver communication</li>
        <li>Have payment ready if not prepaid</li>
        <li>Inspect items before signing off</li>
        <li>Take photos of any damage immediately</li>
        <li>Provide clear access and parking instructions</li>
      </ul>

      <h2>Common Mistakes to Avoid</h2>
      <p>Learn from others' mistakes. Avoid these common pitfalls:</p>
      <ul>
        <li>Not measuring doorways and furniture dimensions</li>
        <li>Choosing the cheapest option without checking reviews</li>
        <li>Failing to get insurance for valuable items</li>
        <li>Not preparing the delivery location in advance</li>
        <li>Forgetting to communicate special requirements</li>
      </ul>

      <h2>Conclusion</h2>
      <p>With proper planning and the right delivery service, moving furniture can be a smooth, stress-free experience. Take the time to prepare, choose a reputable provider, and communicate clearly throughout the process.</p>
    `,
  },
  "how-to-prepare-furniture-for-delivery": {
    title: "How to Prepare Your Furniture for Delivery",
    excerpt:
      "Learn the essential steps to prepare your furniture before the movers arrive. Proper preparation ensures a smooth delivery.",
    category: "Delivery Tips",
    date: "Oct 12, 2025",
    readTime: "5 min read",
    author: "Michael Chen",
    authorRole: "Moving Specialist",
    image: "/furniture-preparation-for-moving.jpg",
    content: `
      <p>Proper preparation is the key to a successful furniture delivery. Taking the time to prepare your items correctly can prevent damage, speed up the process, and ensure everything arrives in perfect condition.</p>

      <h2>Clean Your Furniture</h2>
      <p>Start by thoroughly cleaning all furniture pieces. This not only protects your items during transport but also makes it easier to spot any existing damage before the move.</p>

      <h2>Disassemble What You Can</h2>
      <p>Many furniture pieces are designed to be disassembled for easier transport. Remove legs from tables, take apart bed frames, and separate sectional sofas. Keep all hardware in labeled bags.</p>

      <h2>Protect Surfaces</h2>
      <p>Wrap furniture in moving blankets or bubble wrap. Pay special attention to corners, glass surfaces, and delicate finishes. Use plastic wrap to keep drawers and doors closed during transport.</p>

      <h2>Document Everything</h2>
      <p>Take photos of your furniture from multiple angles before the move. This documentation is invaluable if you need to file an insurance claim for any damage.</p>
    `,
  },
}

type BlogPost = {
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  author: string
  authorRole: string
  image: string
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
    description: post.excerpt,
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
        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Article Content */}
      <article className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="flex items-center justify-between py-6 border-y border-border">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold">{post.author}</p>
                <p className="text-sm text-muted-foreground">{post.authorRole}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button size="icon" variant="ghost">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div
          className="prose prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
          style={{
            lineHeight: "1.8",
          }}
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
              <p className="text-sm text-muted-foreground mb-2">{post.authorRole}</p>
              <p className="text-muted-foreground leading-relaxed">
                {post.author} is a delivery expert with over 10 years of experience in the furniture moving industry.
                They specialize in helping customers navigate the complexities of furniture delivery and logistics.
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
                      src={relatedPost.image || "/placeholder.svg"}
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
                    <p className="text-muted-foreground text-sm mb-4">{relatedPost.excerpt}</p>
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
            <Link href="/signup">Get Started Free</Link>
          </Button>
        </Card>
      </article>
    </div>
  )
}
