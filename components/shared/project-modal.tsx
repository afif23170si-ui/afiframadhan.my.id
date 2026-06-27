"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ExternalLink, ArrowUpRight } from "lucide-react"
import type { Project } from "@/lib/projects"

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onClose])

  // Lock body scroll when open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden"
      document.body.setAttribute("data-modal-open", "true")
    } else {
      document.body.style.overflow = ""
      document.body.removeAttribute("data-modal-open")
    }
    return () => {
      document.body.style.overflow = ""
      document.body.removeAttribute("data-modal-open")
    }
  }, [project])

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[9998] bg-black/75 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />

          {/* Modal — bottom sheet on mobile, centered on desktop */}
          <motion.div
            className="fixed inset-x-0 bottom-0 sm:inset-0 z-[9999] flex items-end sm:items-center justify-center sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full sm:max-w-2xl md:max-w-3xl bg-white border border-zinc-950/[0.08] rounded-t-2xl sm:rounded-2xl shadow-2xl shadow-black/70 flex flex-col overflow-hidden"
              style={{ maxHeight: "92dvh" }}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >

              {/* Drag handle — mobile only */}
              <div className="sm:hidden flex justify-center pt-3 pb-1 flex-shrink-0">
                <div className="w-10 h-1 rounded-full bg-zinc-950/20" />
              </div>

              {/* Sticky header */}
              <div className="flex items-start justify-between gap-4 px-5 sm:px-7 pt-4 sm:pt-6 pb-4 flex-shrink-0 border-b border-zinc-950/[0.06]">
                <div className="flex-1 min-w-0">
                  {/* Meta */}
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8ba888]">
                      {project.year}
                    </span>
                    {project.client && (
                      <>
                        <span className="text-zinc-700">·</span>
                        <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-zinc-600">
                          {project.client}
                        </span>
                      </>
                    )}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-zinc-950 leading-tight truncate">
                    {project.title}
                  </h2>
                  <p className="text-[15px] text-zinc-500 mt-0.5 truncate">{project.subtitle}</p>
                </div>

                {/* Close */}
                <button
                  onClick={onClose}
                  className="flex-shrink-0 w-9 h-9 rounded-full bg-zinc-950/[0.06] border border-zinc-950/[0.08] flex items-center justify-center text-zinc-500 hover:text-zinc-950 hover:bg-zinc-950/[0.12] transition-all duration-200"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Scrollable body */}
              <div className="overflow-y-auto flex-1 overscroll-contain">

                {/* Hero image */}
                {project.image && (
                  <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] flex-shrink-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top"
                      quality={90}
                      sizes="(max-width: 768px) 100vw, 768px"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white to-transparent" />
                  </div>
                )}

                {/* Content */}
                <div className="px-5 sm:px-7 pb-6 sm:pb-8 space-y-6">

                  {/* Stats row */}
                  {project.stats && project.stats.length > 0 && (
                    <div className="grid grid-cols-2 gap-px bg-zinc-950/[0.05] rounded-xl overflow-hidden border border-zinc-950/[0.06]">
                      {project.stats.map((stat) => (
                        <div key={stat.label} className="flex flex-col items-center justify-center py-4 px-3 bg-white">
                          <span
                            className="text-2xl font-bold font-heading"
                            style={{
                              background: "linear-gradient(135deg, #09090b 0%, #8ba888 100%)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                            }}
                          >
                            {stat.value}
                          </span>
                          <span className="text-xs text-zinc-600 mt-0.5 uppercase tracking-[0.1em]">
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-[15px] md:text-base text-zinc-700 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-600 mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-full text-[13px] font-medium text-[#8ba888]/80 bg-[#44624a]/10 border border-[#44624a]/25"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  {project.features && project.features.length > 0 && (
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-600 mb-3">
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.map((f) => (
                          <div key={f} className="flex items-center gap-2.5 text-[15px] text-zinc-500">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#8ba888] flex-shrink-0" />
                            {f}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>

              {/* Sticky footer CTA */}
              <div className="flex-shrink-0 px-5 sm:px-7 py-4 sm:py-5 border-t border-zinc-950/[0.06] bg-white flex items-center gap-3">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 h-11 rounded-full bg-[#44624a] hover:bg-[#8ba888] text-white text-[15px] font-medium transition-all duration-200 shadow-none"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Demo
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <div className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 h-11 rounded-full bg-zinc-950/[0.04] border border-zinc-950/[0.06] text-zinc-600 text-[15px] font-medium cursor-not-allowed select-none">
                    <ExternalLink className="w-3.5 h-3.5" />
                    No Live Demo
                  </div>
                )}

                <button
                  onClick={onClose}
                  className="sm:hidden ml-auto w-11 h-11 rounded-full bg-zinc-950/[0.06] border border-zinc-950/[0.08] flex items-center justify-center text-zinc-500 hover:text-zinc-950 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
