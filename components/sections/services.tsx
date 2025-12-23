"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Globe, Smartphone, LayoutTemplate, Plus, Phone } from "lucide-react"

const services = [
  {
    icon: <Globe className="w-7 h-7" />,
    iconBg: "bg-yellow-500",
    title: "Full Stack Development",
    description: "Building scalable, end-to-end web solutions. I handle the entire stack—from robust backend architecture to dynamic, responsive frontend interfaces.",
    tags: ["React / Next.js", "Laravel", "MySQL", "API Development", "+more"],
    images: [
      "/images/bookumkm.webp?v=3",
      "/images/project.webp",
      "/images/bookumkm.webp?v=3"
    ]
  },
  {
    icon: <LayoutTemplate className="w-7 h-7" />,
    iconBg: "bg-blue-600",
    title: "Modern Web Apps",
    description: "Creating fast, interactive, and SEO-friendly web applications. I focus on performance, accessibility, and writing clean, maintainable code.",
    tags: ["Tailwind CSS", "TypeScript", "Performance", "PWA", "+more"],
    images: [
      "/images/project.webp",
      "/images/bookumkm.webp?v=3",
      "/images/project.webp"
    ]
  },
  {
    icon: <Smartphone className="w-7 h-7" />,
    iconBg: "bg-green-500",
    title: "UI/UX Design",
    description: "Designing intuitive and accessible user interfaces. I turn complex requirements into clean, user-centric designs that look great on any device.",
    tags: ["Figma", "Prototyping", "Design System", "User Flow", "+more"],
    images: [
      "/images/bookumkm.webp?v=3",
      "/images/project.webp",
      "/images/bookumkm.webp?v=3"
    ]
  }
]

import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export function Services() {
  const [activeService, setActiveService] = useState<number | null>(null)

  return (
    <SectionWrapper id="services" className="py-20 md:py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Header */}
          <div className="lg:sticky lg:top-32 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full shadow-sm overflow-hidden mb-6">
                {/* Gradient Border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 p-[1px]">
                  <div className="w-full h-full rounded-full bg-black/80" />
                </div>
                <span className="relative text-sm font-medium text-white">What I Do</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-heading tracking-tight mb-8">
                Design solutions crafted <br />
                to match your vision
              </h2>

              <Button asChild size="lg" className="bg-white text-black hover:bg-zinc-200 rounded-full h-12 px-8 text-base font-medium group">
                <Link href="/contact" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>Let's Talk</span>
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Services List */}
          <div className="space-y-4">
            {services.map((service, index) => {
              const isActive = activeService === index

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative p-6 sm:p-8 rounded-[24px] transition-all duration-300 ${
                    isActive 
                      ? "bg-[#1c1c1c]" 
                      : "bg-[#1c1c1c] md:bg-transparent md:hover:bg-[#1c1c1c]"
                  }`}
                >
                  <div className="flex justify-between items-start mb-6">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.iconBg.replace('bg-', 'bg-').replace('/10', '')} text-white shadow-lg`}>
                      {service.icon}
                    </div>
                    
                    {/* Toggle Button */}
                    <button 
                      onClick={() => setActiveService(isActive ? null : index)}
                      className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-zinc-800 transition-all duration-300"
                    >
                       {isActive ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold font-heading mb-3 text-white">{service.title}</h3>
                      <p className="text-zinc-400 leading-relaxed text-sm max-w-lg">
                        {service.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {service.tags.slice(0, 3).map((tag) => (
                        <span 
                          key={tag} 
                          className="px-3 py-1.5 rounded-full border border-zinc-800 bg-transparent text-[11px] sm:text-xs text-zinc-400 whitespace-nowrap"
                        >
                          {tag}
                        </span>
                      ))}
                      <span className="px-3 py-1.5 rounded-full border border-zinc-800 bg-transparent text-[11px] sm:text-xs text-zinc-400 whitespace-nowrap">
                        +more
                      </span>
                    </div>

                    {/* Expanded Content: 3 Relevant Images */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pt-6 grid grid-cols-3 gap-3">
                            {service.images.map((img, imgIndex) => (
                              <div key={imgIndex} className="aspect-square rounded-lg overflow-hidden bg-zinc-800">
                                <img 
                                  src={img} 
                                  alt={`${service.title} example ${imgIndex + 1}`} 
                                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                />
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>
                </motion.div>
              )
            })}
          </div>

        </div>
      </div>
    </SectionWrapper>
  )
}
