"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"
import { Shield, FileText, Scale, Lock } from "lucide-react"

export default function TermsPage() {
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
              Terms of Service
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
              {[Shield, FileText, Scale, Lock].map((Icon, index) => (
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
                    1. Acceptance of Terms
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Welcome to GetDropGo. By accessing or using our platform, you agree to be bound by these Terms of
                    Service ("Terms"). If you do not agree to these Terms, please do not use our services.
                  </p>
                </motion.div>

                <Separator className="my-8" />

                <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                  <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                    <span className="h-8 w-1 bg-primary rounded-full" />
                    2. Description of Service
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    GetDropGo is a marketplace platform that connects customers who need furniture delivery services
                    with independent delivery drivers. We facilitate the connection between parties but are not directly
                    responsible for the delivery services provided by drivers.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">Our platform provides:</p>
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Job posting and bidding system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Secure payment processing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Real-time tracking capabilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Rating and review system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Customer support services</span>
                    </li>
                  </ul>
                </motion.div>

                <Separator className="my-8" />

                <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
                  <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                    <span className="h-8 w-1 bg-primary rounded-full" />
                    3. User Accounts
                  </h2>
                  <h3 className="text-xl font-semibold mb-3">3.1 Account Creation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To use GetDropGo, you must create an account and provide accurate, complete information. You are
                    responsible for maintaining the confidentiality of your account credentials and for all activities
                    that occur under your account.
                  </p>

                  <h3 className="text-xl font-semibold mb-3 mt-6">3.2 Account Requirements</h3>
                  <p className="text-muted-foreground leading-relaxed">You must:</p>
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Be at least 18 years old</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Provide accurate and truthful information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Maintain the security of your account</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Notify us immediately of any unauthorized access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Comply with all applicable laws and regulations</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Continue with remaining sections using similar animation pattern */}
                <Separator className="my-8" />

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-muted/30 p-6 rounded-lg border-l-4 border-primary"
                >
                  <h2 className="text-xl font-bold mb-3">Important Notice</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    By using GetDropGo, you acknowledge that you have read, understood, and agree to be bound by these
                    Terms of Service. For questions, contact us at legal@getdropgo.com
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
