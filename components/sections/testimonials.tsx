"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { SectionBadge } from "@/components/shared/section-badge"

const testimonials = [
  {
    company: "BookUMKM",
    name: "Sarah Johnson",
    role: "Product Manager",
    initials: "SJ",
    content:
      "We didn't realize how much our old site was holding us back. After the redesign, our message finally clicked with users. Signups went up and the team felt proud to share the site again.",
  },
  {
    company: "TechCorp",
    name: "Michael Chen",
    role: "CEO",
    initials: "MC",
    content:
      "Working with Afif was a game-changer for our product. He brought both technical expertise and creative problem-solving to every challenge we faced.",
  },
  {
    company: "StartupLab",
    name: "Emily Rodriguez",
    role: "Design Lead",
    initials: "ER",
    content:
      "Afif has an exceptional eye for design and user experience. He consistently delivers pixel-perfect implementations that exceed expectations.",
  },
  {
    company: "Digital Inc.",
    name: "David Kim",
    role: "Founder",
    initials: "DK",
    content:
      "The new homepage made a huge difference. It's clear, focused, and actually shows how our product works. Demo requests doubled in just two weeks.",
  },
  {
    company: "CloudTech",
    name: "Lisa Wang",
    role: "CTO",
    initials: "LW",
    content:
      "We struggled to explain what our product does. This new site fixed that. It feels modern, makes sense instantly, and got us early signups from real teams.",
  },
]

const duplicated = [...testimonials, ...testimonials]

export function Testimonials() {
  return (
    <SectionWrapper id="testimonials">
      <div className="space-y-12 md:space-y-16">

        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center space-y-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionBadge>Testimonials</SectionBadge>
          <h2 className="heading-lg text-white">
            Feedback that speaks<br />for itself.
          </h2>
        </motion.div>

        {/* Infinite scroll slider */}
        <div className="relative overflow-hidden mask-gradient-x">
          <motion.div
            className="flex gap-4 md:gap-5"
            animate={{ x: [`0%`, `-${50}%`] }}
            transition={{
              x: { repeat: Infinity, repeatType: "loop", duration: 32, ease: "linear" },
            }}
          >
            {duplicated.map((t, i) => (
              <div
                key={`${t.name}-${i}`}
                className="flex-shrink-0 w-[300px] sm:w-[340px] md:w-[360px]"
              >
                <div className="h-full rounded-xl border border-white/[0.07] bg-zinc-900/40 p-5 md:p-6 hover:bg-zinc-900/60 hover:border-white/[0.11] transition-all duration-300">
                  {/* Company */}
                  <p className="text-[10px] font-semibold text-zinc-600 uppercase tracking-widest mb-4">
                    {t.company}
                  </p>

                  {/* Quote */}
                  <p className="text-sm text-zinc-300 leading-relaxed mb-6 line-clamp-4">
                    &ldquo;{t.content}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    {/* Initials avatar */}
                    <div className="w-9 h-9 rounded-full bg-[#44624a]/20 border border-[#44624a]/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-[11px] font-bold text-[#8ba888]">{t.initials}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{t.name}</p>
                      <p className="text-xs text-zinc-500">{t.role}</p>
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
