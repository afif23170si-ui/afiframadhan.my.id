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
    <section id="about" className="relative py-16 md:py-24 lg:py-28 overflow-hidden" style={{ backgroundColor: "#44624a" }}>
          
          <AnimatedGridPattern
            numSquares={40}
            maxOpacity={0.3}
            duration={3}
            repeatDelay={1}
            className={cn(
              "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
              "fill-white/[0.08] stroke-white/[0.08] text-white/20"
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
            <SectionBadge variant="light">About Me</SectionBadge>
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
                <h2 className="heading-lg text-white">
                  Hi, I&apos;m{" "}
                  <span>Afif Ramadhan.</span>
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
                        className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/20 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white hover:ring-white/40 hover:shadow-[0_0_14px_rgba(255,255,255,0.2)] transition-all duration-200"
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* Bio */}
              <p className="text-white/80 leading-relaxed text-base md:text-lg">
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
                <div className="bg-white/[0.06] backdrop-blur-md ring-1 ring-white/[0.12] rounded-lg p-4 md:p-5 flex flex-col justify-center gap-2 md:gap-3 hover:bg-white/[0.1] hover:ring-white/30 transition-all duration-300 overflow-hidden">
                  <h3 className="text-xl md:text-2xl font-bold font-heading text-white tracking-tight leading-none">3+ years</h3>
                  <p className="text-sm md:text-base text-white/70 font-medium truncate" title="Development experience">Development experience</p>
                </div>
                <div className="bg-white/[0.06] backdrop-blur-md ring-1 ring-white/[0.12] rounded-lg p-4 md:p-5 flex flex-col justify-center gap-2 md:gap-3 hover:bg-white/[0.1] hover:ring-white/30 transition-all duration-300 overflow-hidden">
                  <h3 className="text-xl md:text-2xl font-bold font-heading text-white tracking-tight leading-none">5+</h3>
                  <p className="text-sm md:text-base text-white/70 font-medium truncate" title="Projects delivered">Projects delivered</p>
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
              <div className="relative aspect-square w-full max-w-sm md:max-w-full mx-auto">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="/images/profil.webp"
                    alt="Afif Ramadhan - Full Stack Developer"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={90}
                    sizes="(max-width: 1024px) 100vw, 360px"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
    </section>
  )
}
