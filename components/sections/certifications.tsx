"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { SectionBadge } from "@/components/shared/section-badge"
import { BadgeCheck, ArrowUpRight } from "lucide-react"

const certifications = [
  {
    title: "Junior Web Developer",
    subtitle: "Pengembang Web Pratama",
    issuer: "BNSP - Lembaga Sertifikasi Profesi Teknologi Digital",
    field: "Pengembangan Website / Web Development",
    certNumber: "62090 2513 3 0165903 2026",
    regNumber: "TIK 1565 50592 2026",
    issuedDate: "12 Januari 2026",
    validFor: "3 Tahun",
    logoInitial: "BNSP",
    logoColor: "#1e40af",
    viewUrl: "https://drive.google.com/file/d/1MMlRFxW0trBLLmyKBIML4EvnpgvUGQKq/view?usp=sharing",
  },
]

export function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <div className="space-y-12 md:space-y-16">

        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center space-y-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionBadge>Certifications</SectionBadge>
          <h2 className="heading-lg text-white">
            Professional credentials<br />and qualifications.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col gap-4 md:gap-5">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group relative rounded-2xl border border-white/[0.07] bg-zinc-900/40 p-5 md:p-6 hover:bg-zinc-900/60 hover:border-white/[0.11] transition-all duration-300 overflow-hidden">

                {/* Matcha top accent */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#44624a]/60 to-transparent" />

                <div className="flex gap-4">

                  {/* Logo */}
                  <div className="flex-shrink-0 w-11 h-11 rounded-full overflow-hidden border border-white/[0.08] bg-white">
                    <Image
                      src="/images/logo-bnsp.png"
                      alt="BNSP"
                      width={44}
                      height={44}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">

                    {/* Top row */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <h3 className="text-base font-semibold font-heading text-white leading-snug">
                            {cert.title}
                          </h3>
                          <BadgeCheck className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        </div>
                        <p className="text-sm text-zinc-500 font-medium">{cert.issuer}</p>
                      </div>

                      {/* Badges */}
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-600 bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 rounded-full">
                          Valid {cert.validFor}
                        </span>
                        <span className="text-xs text-zinc-500 bg-white/[0.04] border border-white/[0.06] px-3 py-1 rounded-full whitespace-nowrap">
                          {cert.issuedDate}
                        </span>
                      </div>
                    </div>

                    {/* Field */}
                    <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                      Telah kompeten pada bidang <span className="text-zinc-300 font-medium">{cert.field}</span> dengan kualifikasi <span className="text-zinc-300 font-medium">{cert.subtitle}</span>.
                    </p>

                    {/* Cert details */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mt-4">
                      <div className="flex flex-wrap gap-x-6 gap-y-1.5">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] uppercase tracking-widest text-zinc-600">No. Sertifikat</span>
                          <span className="text-[11px] font-mono text-zinc-400">{cert.certNumber}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] uppercase tracking-widest text-zinc-600">No. Reg.</span>
                          <span className="text-[11px] font-mono text-zinc-400">{cert.regNumber}</span>
                        </div>
                      </div>
                      {cert.viewUrl && (
                        <a
                          href={cert.viewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium bg-[#44624a] hover:bg-[#8ba888] text-white transition-all duration-200"
                        >
                          View Certificate
                          <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      )}
                    </div>

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
