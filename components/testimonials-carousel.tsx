"use client"

import { useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

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
  {
    name: "David Martinez",
    role: "Property Manager",
    content:
      "Managing multiple properties means lots of furniture moves. GetDropGo saves me time and money every single time. The drivers are professional and reliable.",
  },
  {
    name: "Jessica Lee",
    role: "College Student",
    content:
      "Moving into my dorm was stressful until I found GetDropGo. Affordable, fast, and the driver even helped me carry everything upstairs!",
  },
  {
    name: "Robert Thompson",
    role: "Antique Dealer",
    content:
      "I deal with valuable antiques daily. GetDropGo's verified drivers handle my items with care. The insurance coverage gives me peace of mind.",
  },
  {
    name: "Amanda Foster",
    role: "Real Estate Agent",
    content:
      "I recommend GetDropGo to all my clients. It makes staging homes so much easier and the service is always top-notch.",
  },
  {
    name: "James Wilson",
    role: "Restaurant Owner",
    content:
      "When we needed to move furniture for our restaurant renovation, GetDropGo came through. Fast, professional, and reasonably priced.",
  },
  {
    name: "Lisa Anderson",
    role: "Event Planner",
    content:
      "For event setups, timing is everything. GetDropGo's real-time tracking ensures my furniture arrives exactly when needed. Absolutely reliable!",
  },
]

export function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  })

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const autoplay = setInterval(() => {
      scrollNext()
    }, 3000) // Auto-scroll every 3 seconds

    return () => clearInterval(autoplay)
  }, [emblaApi, scrollNext])

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
            <Card className="p-6 h-full hover:shadow-xl transition-shadow duration-300 cursor-grab active:cursor-grabbing">
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
          </div>
        ))}
      </div>
    </div>
  )
}
