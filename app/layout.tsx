import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://getdropgo.com"),
  title: {
    default: "GetDropGo - Fast Furniture Delivery Service",
    template: "%s | GetDropGo",
  },
  description:
    "Connect with verified drivers for furniture delivery. Post jobs, get competitive bids, track in real-time, and pay securely. Join thousands of satisfied customers.",
  keywords: [
    "furniture delivery",
    "moving service",
    "delivery platform",
    "furniture movers",
    "track delivery",
    "secure payment",
    "on-demand delivery",
    "furniture transport",
    "delivery app",
    "moving app",
  ],
  authors: [{ name: "GetDropGo Team" }],
  creator: "GetDropGo",
  publisher: "GetDropGo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://getdropgo.com",
    siteName: "GetDropGo",
    title: "GetDropGo - Fast Furniture Delivery Service",
    description: "Post your delivery, get bids, track live, pay securely",
    images: ["/images/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@getdropgo",
    creator: "@getdropgo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
