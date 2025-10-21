export interface Blog {
  id: number
  title: string
  slug: string
  description: string
  thumbnail: string
  category: string
  author: string
  publishedAt: string
  readTime: string
  content: string
  metaTitle?: string
  metaDescription?: string
  metaKeywords?: string
}

export interface SupportRequest {
  category: string
  email: string
  subject: string
  description: string
}

export interface FAQ {
  question: string
  answer: string
  category?: string
}
