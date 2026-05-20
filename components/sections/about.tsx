"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SectionBadge } from "@/components/shared/section-badge"
import { Instagram, Linkedin, Github } from "lucide-react"

const skills = [
  { name: "Next.js",      category: "Frontend" },
  { name: "React",        category: "Frontend" },
  { name: "TypeScript",   category: "Language" },
  { name: "JavaScript",   category: "Language" },
  { name: "PHP",          category: "Language" },
  { name: "Laravel",      category: "Backend"  },
  { name: "Tailwind",     category: "Styling"  },
  { name: "Bootstrap",    category: "Styling"  },
  { name: "HTML",         category: "Markup"   },
  { name: "CSS",          category: "Styling"  },
  { name: "MySQL",        category: "Database" },
  { name: "PostgreSQL",   category: "Database" },
  { name: "Node.js",      category: "Backend"  },
  { name: "Figma",        category: "Design"   },
  { name: "REST API",     category: "Backend"  },
  { name: "Git",          category: "DevOps"   },
  { name: "AI / ML",      category: "AI"       },
]

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/aafif.r/",          label: "Instagram" },
  { icon: Linkedin,  href: "https://www.linkedin.com/in/afifrmdhn/",       label: "LinkedIn"  },
  { icon: Github,    href: "http://github.com/afif23170si-ui",             label: "GitHub"    },
]

export function About() {
  return (
    <section id="about" className="relative bg-zinc-950 py-16 md:py-28 lg:py-36 overflow-hidden">

      {/* Ambient matcha glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#44624a]/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-[#8ba888]/[0.06] blur-[100px]" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Section badge */}
          <motion.div
            className="flex justify-center mb-12 md:mb-20"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <SectionBadge>About Me</SectionBadge>
          </motion.div>

          {/* ── Asymmetric 2-column: content (wider) | photo ── */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_240px] lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_360px] gap-10 md:gap-12 lg:gap-20 items-start">

            {/* ── LEFT: Content ── */}
            <motion.div
              className="order-2 md:order-1 flex flex-col gap-10 items-center text-center md:items-start md:text-left"
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
                <div className="flex items-center justify-center md:justify-start gap-2.5">
                  {socialLinks.map((s) => {
                    const Icon = s.icon
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-500 hover:bg-[#44624a]/20 hover:text-[#8ba888] hover:border-[#44624a]/50 hover:shadow-[0_0_14px_rgba(68,98,74,0.35)] transition-all duration-200"
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </a>
                    )
                  })}
                </div>
              </div>

              {/* Bio */}
              <p className="text-zinc-400 leading-relaxed text-[15px]">
                I&apos;m a Full Stack Developer from Indonesia who loves turning complex problems into clean, fast web experiences. From{" "}
                <span className="font-semibold" style={{ color: "#8ba888" }}>
                  POS systems
                </span>{" "}
                to{" "}
                <span className="font-semibold" style={{ color: "#8ba888" }}>
                  booking platforms,
                </span>{" "}
                I build products end-to-end - from database schema to pixel-perfect UI.
              </p>

              {/* Matcha gradient divider */}
              <div
                className="h-px w-full"
                style={{ background: "linear-gradient(to right, rgba(139,168,136,0.4), rgba(68,98,74,0.2), transparent)" }}
              />

              {/* Skills */}
              <div className="space-y-4 w-full">
                <h3
                  className="text-[10px] font-bold font-heading uppercase tracking-[0.2em]"
                  style={{
                    background: "linear-gradient(135deg, #8ba888, #c0cfb2)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Tools &amp; Technologies
                </h3>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.22, delay: 0.3 + i * 0.03 }}
                    >
                      <div className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.07] bg-white/[0.03] hover:bg-[#44624a]/15 hover:border-[#44624a]/40 transition-all duration-200 cursor-default">
                        <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[10px] text-zinc-600 group-hover:text-[#8ba888]/70 transition-colors">
                          · {skill.category}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ── RIGHT: Photo ── */}
            <motion.div
              className="order-1 md:order-2 lg:sticky lg:top-28"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Mobile — bulat kecil centered */}
              <div className="flex justify-center md:hidden mb-2">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-[#44624a]/50 shadow-xl shadow-black/40 ring-4 ring-[#44624a]/10">
                  <Image
                    src="/images/profil1.webp"
                    alt="Afif Ramadhan - Full Stack Developer"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={90}
                    sizes="128px"
                  />
                </div>
              </div>

              {/* Tablet/Desktop — portrait penuh */}
              <div className="relative aspect-[3/4] w-full max-w-full mx-auto hidden md:block">
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#44624a]/40 shadow-2xl shadow-black/50">
                  <Image
                    src="/images/profil1.webp"
                    alt="Afif Ramadhan - Full Stack Developer"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={90}
                    sizes="(max-width: 1024px) 240px, 360px"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-[#8ba888]/10 rounded-2xl pointer-events-none" />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
