"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"
import { SectionBadge } from "@/components/shared/section-badge"
import { Instagram, Linkedin, Github } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/aafif.r/",          label: "Instagram" },
  { icon: Linkedin,  href: "https://www.linkedin.com/in/afifrmdhn/",       label: "LinkedIn"  },
  { icon: Github,    href: "http://github.com/afif23170si-ui",             label: "GitHub"    },
]

export function About() {
  return (
    <section id="about" className="relative py-16 md:py-24 lg:py-28 overflow-hidden bg-white">
          
          <AnimatedGridPattern
            numSquares={40}
            maxOpacity={0.15}
            duration={3}
            repeatDelay={1}
            className={cn(
              "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
              "fill-zinc-900/[0.03] stroke-zinc-900/[0.03] text-zinc-900/10"
            )}
          />

          <div className="container-custom relative z-10">

          {/* Section badge */}
          <motion.div
            className="flex justify-start md:justify-center mb-8 md:mb-20"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <SectionBadge>About Me</SectionBadge>
          </motion.div>

          {/* ── Asymmetric 2-column: content (wider) | photo ── */}
          <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] gap-10 md:gap-12 lg:gap-24 items-center">

            {/* ── LEFT: Content ── */}
            <motion.div
              className="flex flex-col gap-10 items-start text-left"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Heading + Social */}
              <div className="space-y-5">
                <h2 className="heading-lg text-zinc-950">
                  Hi, I&apos;m Afif Ramadhan.
                </h2>

                {/* Social icons row */}
                <div className="flex items-center justify-start gap-2.5">
                  {socialLinks.map((s) => {
                    const Icon = s.icon
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="w-9 h-9 rounded-full bg-zinc-50 ring-1 ring-zinc-200 flex items-center justify-center text-zinc-500 hover:bg-[#44624a] hover:text-white hover:ring-[#44624a] hover:shadow-md transition-all duration-200"
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* Bio */}
              <p className="text-zinc-600 leading-relaxed text-base md:text-lg">
                I&apos;m a Full Stack Developer from Indonesia who loves turning complex problems into clean, fast web experiences. From POS systems to booking platforms, I build products end-to-end - from database schema to pixel-perfect UI.
              </p>

              {/* Metrics */}
              <motion.div
                className="grid grid-cols-2 gap-4 md:gap-5 w-full pt-2"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-white ring-1 ring-zinc-200 rounded-lg p-4 md:p-5 flex flex-col justify-center gap-2 md:gap-3 hover:ring-zinc-300 hover:shadow-sm transition-all duration-300 overflow-hidden">
                  <h3 className="text-xl md:text-2xl font-bold font-heading text-zinc-950 tracking-tight leading-none">3+ years</h3>
                  <p className="text-sm md:text-base text-zinc-500 font-medium leading-tight" title="Development experience">Development experience</p>
                </div>
                <div className="bg-white ring-1 ring-zinc-200 rounded-lg p-4 md:p-5 flex flex-col justify-center gap-2 md:gap-3 hover:ring-zinc-300 hover:shadow-sm transition-all duration-300 overflow-hidden">
                  <h3 className="text-xl md:text-2xl font-bold font-heading text-zinc-950 tracking-tight leading-none">5+</h3>
                  <p className="text-sm md:text-base text-zinc-500 font-medium leading-tight" title="Projects delivered">Projects delivered</p>
                </div>
              </motion.div>
            </motion.div>

            {/* ── RIGHT: Photo ── */}
            <motion.div
              className="lg:sticky lg:top-28"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="group relative aspect-square w-full max-w-sm md:max-w-full mx-auto">
                <div className="relative w-full h-full rounded-2xl overflow-hidden ring-1 ring-zinc-200 shadow-xl bg-zinc-100">
                  <Image
                    src="/images/profil.webp"
                    alt="Afif Ramadhan - Full Stack Developer"
                    fill
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
                    priority
                    quality={90}
                    sizes="(max-width: 1024px) 100vw, 360px"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl pointer-events-none" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
    </section>
  )
}
