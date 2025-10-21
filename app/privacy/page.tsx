"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"
import { Shield, Eye, Lock, UserCheck } from "lucide-react"

export default function PrivacyPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-gradient-to-br from-primary/5 via-background to-muted/30 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Legal</Badge>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
            >
              Privacy Policy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-muted-foreground"
            >
              Last updated: October 22, 2025
            </motion.p>

            {/* Icon Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-4 gap-4 mt-8 max-w-md mx-auto"
            >
              {[Shield, Eye, Lock, UserCheck].map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto"
                >
                  <Icon className="h-8 w-8 text-primary" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 shadow-xl border-2 border-primary/10">
              <motion.div variants={itemVariants} className="prose prose-lg max-w-none">
                <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                  <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                    <span className="h-8 w-1 bg-primary rounded-full" />
                    1. Introduction
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    At GetDropGo, we take your privacy seriously. This Privacy Policy explains how we collect, use,
                    disclose, and safeguard your information when you use our platform. Please read this policy
                    carefully.
                  </p>
                </motion.div>

                <Separator className="my-8" />

                <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                  <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                    <span className="h-8 w-1 bg-primary rounded-full" />
                    2. Information We Collect
                  </h2>
                  <h3 className="text-xl font-semibold mb-3">2.1 Information You Provide</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We collect information that you voluntarily provide to us, including:
                  </p>
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Account information (name, email, phone number, password)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Profile information (photo, bio, preferences)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Payment information (credit card details, billing address)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Delivery details (pickup and drop-off addresses, item descriptions)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Communications with us and other users</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Reviews and ratings</span>
                    </li>
                  </ul>
                </motion.div>

                <Separator className="my-8" />

                <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
                  <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                    <span className="h-8 w-1 bg-primary rounded-full" />
                    3. How We Use Your Information
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">We use your information to:</p>
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Provide and improve our services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Process transactions and payments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Facilitate communication between customers and drivers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Verify driver credentials and conduct background checks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Provide customer support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Send notifications about your deliveries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Detect and prevent fraud and abuse</span>
                    </li>
                  </ul>
                </motion.div>

                <Separator className="my-8" />

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg border-l-4 border-primary"
                >
                  <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Shield className="h-6 w-6 text-primary" />
                    Your Privacy Matters
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    By using GetDropGo, you acknowledge that you have read and understood this Privacy Policy and agree
                    to the collection, use, and disclosure of your information as described herein. For questions,
                    contact us at privacy@getdropgo.com
                  </p>
                </motion.div>
              </motion.div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
