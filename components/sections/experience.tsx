"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { SectionBadge } from "@/components/shared/section-badge"

const experiences = [
  {
    role: "AI Automation Developer",
    company: "Nurul Fikri Academy",
    companyUrl: "https://nfacademy.id/",
    logo: "/images/nurulfikri-academy.jpeg",
    duration: "Feb 2026 – Jul 2026",
    type: "Internship",
    isActive: false,
    description:
      "Completed a 4-month SIB Kampus Merdeka program focused on AI for Business. Developed and implemented various business process automation systems (Marketing, Finance, and HR) using n8n. Key project: AI CV Sorter & Auto-Scheduler - an automated pipeline that filters incoming CVs via email, sends rejection notices, and schedules interviews with qualified candidates using Google Calendar API.",
    technologies: ["n8n", "Google Gemini AI", "OpenAI API", "Claude API", "Prompt Engineering", "Google Workspace API", "Telegram API", "REST API", "JavaScript", "JSON"],
  },
  {
    role: "Fullstack Developer Intern",
    company: "PT Cybersama Technology",
    companyUrl: "https://cybersama.com/",
    logo: "/images/cybersama-technology.png",
    duration: "Aug 2025 – May 2026",
    type: "Internship",
    isActive: false,
    description:
      "Self-directed internship covering full-stack development, ERP systems, and server infrastructure. Built KasPOS - a restaurant POS system using Laravel. Developed custom Odoo modules including an LMS. Managed Linux servers via SSH, created KVM virtual machines, configured hosting via CyberPanel, and set up Cloudflare for DNS and security. Handled basic security hardening including malware removal and brute force mitigation. Also studied functional ERP modules: POS, CRM, Finance, Sales, Inventory, and Manufacturing.",
    technologies: ["Laravel", "PHP", "MySQL", "PostgreSQL", "Odoo", "XML", "Linux", "SSH", "KVM", "CyberPanel", "Cloudflare", "Python", "JavaScript", "Tailwind CSS"],
  },
  {
    role: "Fullstack Web Developer",
    company: "Nurul Fikri Academy",
    companyUrl: "https://nfacademy.id/",
    logo: "/images/nurulfikri-academy.jpeg",
    duration: "Sep 2025 – Dec 2025",
    type: "Internship",
    isActive: false,
    certUrl: "https://drive.google.com/file/d/1Oe-cDdM5Z5-klHXeMZLs0DwaD4z9ZcK1/view?usp=sharing",
    description:
      "Completed a 4-month Studi Independen Bersertifikat (SIB) Kampus Merdeka program, building real-world web applications under industry mentorship. Developed the BookUMKM project - a full-stack booking platform for Indonesian UMKM - handling everything from UI/UX design to backend API integration and deployment.",
    technologies: ["HTML", "CSS", "JavaScript", "React JS", "Laravel", "Inertia.js", "Tailwind CSS", "MySQL", "PHP", "Git"],
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

                {/* Main row: logo + content */}
                <div className="flex gap-4">

                  {/* Logo */}
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-11 h-11 rounded-full overflow-hidden border border-white/[0.08] bg-white/[0.05] hover:border-[#44624a]/50 transition-all duration-200"
                    title={exp.company}
                  >
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      width={44}
                      height={44}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </a>

                  {/* Content */}
                  <div className="flex-1 min-w-0">

                    {/* Top row — role + badges */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <div className="space-y-0.5">
                        <h3 className="text-base font-semibold font-heading text-white leading-snug">
                          {exp.role}
                        </h3>
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-zinc-500 font-medium hover:text-[#8ba888] transition-colors duration-200 group/link"
                        >
                          {exp.company}
                          <ArrowUpRight className="w-3 h-3 text-zinc-600 group-hover/link:text-[#8ba888] transition-colors duration-200" />
                        </a>
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

                    {/* View Certificate */}
                    {exp.certUrl && (
                      <div className="mt-4">
                        <a
                          href={exp.certUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium bg-[#44624a] hover:bg-[#8ba888] text-white transition-all duration-200"
                        >
                          View Certificate
                          <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      </div>
                    )}

                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </SectionWrapper>
  )
}
