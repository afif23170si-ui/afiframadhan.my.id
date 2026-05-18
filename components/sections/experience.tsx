"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { SectionBadge } from "@/components/shared/section-badge"

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Freelance - Self-employed",
    duration: "2023 – Present",
    type: "Contract",
    isActive: true,
    description:
      "Delivering end-to-end web solutions for clients across F&B, retail, and education sectors. Handle everything from system architecture and API design to UI implementation and cloud deployment. Projects consistently shipped on time with measurable performance improvements.",
    technologies: ["Next.js", "TypeScript", "Laravel", "MySQL", "Tailwind CSS", "Vercel"],
  },
  {
    role: "Junior Web Developer",
    company: "PT. Solusi Digital Nusantara",
    duration: "2022 – 2023",
    type: "Full-time",
    isActive: false,
    description:
      "Built and maintained internal dashboard systems and client-facing web apps within an agile team. Contributed to a 30% reduction in page load time through code splitting and query optimization. Mentored two intern developers during the last quarter.",
    technologies: ["React", "Node.js", "PostgreSQL", "REST API", "Git"],
  },
  {
    role: "UI / UX & Frontend Lead",
    company: "Campus Project - BookUMKM",
    duration: "2024",
    type: "Project",
    isActive: false,
    description:
      "Led a 4-person team to design and build a booking platform connecting Indonesian UMKM businesses with local customers. Owned the full design system in Figma and translated it into a responsive React frontend, shipping the complete product in under 3 months.",
    technologies: ["Figma", "React", "Laravel", "MySQL", "Tailwind CSS"],
  },
]

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="space-y-12 md:space-y-16">

        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center space-y-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionBadge>Experience</SectionBadge>
          <h2 className="heading-lg text-white">
            My professional journey<br />and key accomplishments.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col gap-4 md:gap-5">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group relative rounded-2xl border border-white/[0.07] bg-zinc-900/40 p-5 md:p-6 hover:bg-zinc-900/60 hover:border-white/[0.11] transition-all duration-300 overflow-hidden">

                {/* Active matcha top accent */}
                {exp.isActive && (
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#44624a]/60 to-transparent" />
                )}

                {/* Top row — role + badges */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div className="space-y-0.5">
                    <h3 className="text-base font-semibold font-heading text-white leading-snug">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-zinc-500 font-medium">
                      {exp.company}
                    </p>
                  </div>

                  {/* Meta badges */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-600 bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 rounded-full">
                      {exp.type}
                    </span>
                    <span className="text-xs text-zinc-500 bg-white/[0.04] border border-white/[0.06] px-3 py-1 rounded-full whitespace-nowrap flex items-center gap-1.5">
                      {exp.duration}
                      {exp.isActive && (
                        <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                        </span>
                      )}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] px-2.5 py-1 rounded-lg bg-white/[0.04] text-zinc-500 border border-white/[0.06] hover:border-[#44624a]/40 hover:text-[#8ba888] transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  )
}
