"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/shared/section-wrapper"

const testimonials = [
  {
    company: "BookUMKM",
    icon: "📚",
    name: "Sarah Johnson",
    role: "Product Manager",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "We didn't realize how much our old site was holding us back. After the redesign, our message finally clicked with users. Signups went up and the team felt proud to share the site again.",
  },
  {
    company: "TechCorp",
    icon: "💻",
    name: "Michael Chen",
    role: "CEO",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "Working with Afif was a game-changer for our product. He brought both technical expertise and creative problem-solving to every challenge we faced.",
  },
  {
    company: "StartupLab",
    icon: "🚀",
    name: "Emily Rodriguez",
    role: "Design Lead",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    content: "Afif has an exceptional eye for design and user experience. He consistently delivers pixel-perfect implementations that exceed expectations.",
  },
  {
    company: "Digital Inc",
    icon: "⚡",
    name: "David Kim",
    role: "Founder",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    content: "The new homepage made a huge difference. It's clear, focused, and actually shows how our product works. Demo requests doubled in just two weeks.",
  },
  {
    company: "CloudTech",
    icon: "☁️",
    name: "Lisa Wang",
    role: "CTO",
    avatar: "https://randomuser.me/api/portraits/women/90.jpg",
    content: "We struggled to explain what our product does. This new site fixed that. It feels modern, makes sense instantly, and got us early signups from real teams.",
  },
]

// Double the array for infinite scroll effect
const duplicatedTestimonials = [...testimonials, ...testimonials]

export function Testimonials() {
  return (
    <SectionWrapper id="testimonials">
      <div className="space-y-12">
        {/* Section Header */}
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <div className="flex justify-center">
            <div className="relative inline-flex items-center gap-2 px-3 py-1 bg-muted/50 backdrop-blur-sm rounded-full shadow-sm overflow-hidden">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 p-[1px]">
                <div className="w-full h-full rounded-full bg-background" />
              </div>
              <span className="relative text-sm font-medium text-foreground">Testimonial</span>
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-heading">
            Feedback that speaks<br />for itself
          </h2>
        </motion.div>

        {/* Infinite Slider */}
        <div className="relative overflow-hidden">
          {/* Left Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          {/* Right Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Sliding Track */}
          <motion.div
            className="flex gap-6"
            animate={{ x: [0, -50 * testimonials.length + "%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="flex-shrink-0 w-[320px] md:w-[380px]"
              >
                {/* Card */}
                <div className="h-full rounded-2xl border border-border/50 bg-background p-6 hover:border-border hover:shadow-lg transition-all duration-300">
                  {/* Company */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl">{testimonial.icon}</span>
                    <span className="font-semibold text-foreground">{testimonial.company}</span>
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {testimonial.content}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-medium text-foreground text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}

