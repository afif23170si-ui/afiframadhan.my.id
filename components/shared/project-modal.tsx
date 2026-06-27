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

              {/* Absolute Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 z-50 flex-shrink-0 w-9 h-9 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-md flex items-center justify-center text-white transition-all duration-200"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Scrollable body */}
              <div className="overflow-y-auto flex-1 overscroll-contain bg-white [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                
                {/* Immersive Cover */}
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] flex-shrink-0 bg-zinc-950">
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top opacity-90"
                      quality={90}
                      sizes="(max-width: 768px) 100vw, 768px"
                      priority
                    />
                  )}
                  
                  {/* Gradients */}
                  <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/50 via-black/10 to-transparent pointer-events-none" />
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent pointer-events-none" />

                  {/* Drag handle (over image on mobile) */}
                  <div className="absolute top-3 inset-x-0 sm:hidden flex justify-center z-50 pointer-events-none">
                    <div className="w-10 h-1.5 rounded-full bg-white/30 backdrop-blur-sm" />
                  </div>

                  {/* Floating Content */}
                  <div className="absolute inset-x-0 bottom-0 px-5 sm:px-8 pb-6 sm:pb-8 flex items-end justify-between gap-4 sm:gap-5">
                    
                    {/* Left: Project Logo & Text */}
                    <div className="flex flex-1 min-w-0 items-end gap-4 sm:gap-5">
                      {/* Project Logo */}
                      {project.logo ? (
                        <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0">
                          <Image
                            src={project.logo}
                            alt={`${project.title} logo`}
                            fill
                            className="object-contain rounded-2xl drop-shadow-xl"
                          />
                        </div>
                      ) : (
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-zinc-800 flex items-center justify-center flex-shrink-0 shadow-2xl border border-white/10">
                          <span className="text-xl sm:text-2xl font-bold font-heading text-white">
                            {project.logoInitial || project.title.charAt(0)}
                          </span>
                        </div>
                      )}

                      <div className="flex-1 min-w-0 pt-1">
                        <h2 className="text-2xl sm:text-[28px] font-bold font-heading text-white tracking-tight leading-snug truncate">
                          {project.title}
                        </h2>
                        <p className="text-[14px] sm:text-[15px] text-zinc-300 mt-1 sm:mt-1.5 leading-relaxed truncate">
                          {project.subtitle}
                        </p>
                        
                        {/* Meta Tags */}
                        <div className="flex items-center gap-2 mt-3">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md text-white text-[11px] font-medium tracking-wide">
                            {project.year}
                          </span>
                          {project.client && (
                            <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md text-white text-[11px] font-medium tracking-wide truncate">
                              {project.client}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Right: Desktop CTA */}
                    <div className="hidden sm:block flex-shrink-0 mb-1">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center justify-center gap-2 px-5 h-11 rounded-full bg-white text-zinc-950 hover:bg-zinc-100 text-[14px] font-bold transition-all shadow-xl"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      ) : (
                        <div className="inline-flex items-center justify-center gap-2 px-5 h-11 rounded-full bg-white/10 border border-white/10 text-white/50 text-[14px] font-medium cursor-not-allowed select-none backdrop-blur-md">
                          No Demo
                        </div>
                      )}
                    </div>

                  </div>
                </div>

                {/* Content */}
                <div className="px-5 sm:px-8 py-8 sm:py-10 space-y-6">

                  {/* Stats row */}
                  {project.stats && project.stats.length > 0 && (
                    <div className="grid grid-cols-2 gap-px bg-zinc-950/[0.04] rounded-xl overflow-hidden border border-zinc-950/[0.05]">
                      {project.stats.map((stat) => (
                        <div key={stat.label} className="flex flex-col items-center justify-center py-4 px-3 bg-white">
                          <span
                            className="text-2xl font-bold font-heading text-[#44624a]"
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
                          className="px-3 py-1.5 rounded-full text-[13px] font-medium text-[#44624a] bg-[#44624a]/10 border border-[#44624a]/25"
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

              {/* Sticky footer CTA (Mobile only) */}
              <div className="sm:hidden flex-shrink-0 px-5 py-4 border-t border-zinc-950/[0.06] bg-white flex items-center justify-center">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full inline-flex items-center justify-center gap-2 h-12 rounded-full bg-[#44624a] hover:bg-[#8ba888] text-white text-[15px] font-medium transition-all duration-200 shadow-none"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <div className="w-full inline-flex items-center justify-center gap-2 h-12 rounded-full bg-zinc-950/[0.04] border border-zinc-950/[0.06] text-zinc-600 text-[15px] font-medium cursor-not-allowed select-none">
                    <ExternalLink className="w-4 h-4" />
                    No Live Demo
                  </div>
                )}
              </div>

            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
