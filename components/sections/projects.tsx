"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { SectionBadge } from "@/components/shared/section-badge"
import { ProjectModal } from "@/components/shared/project-modal"
import { projects } from "@/lib/projects"
import type { Project } from "@/lib/projects"

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project
  index: number
  onOpen: (p: Project) => void
}) {
  const [hovered, setHovered] = useState(false)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-6%" }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
    >
      <button
        onClick={() => onOpen(project)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={handleMouseMove}
        data-project-card
        className="group block w-full text-left relative"
        style={{ cursor: "none" }}
      >
        <div
          className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 ring-1 ring-[#44624a]/30 group-hover:ring-[#8ba888]/60 transition-all duration-500"
          style={{ boxShadow: "0 0 0 1px rgba(68,98,74,0.2)" }}
        >
          {/* Hover glow ring */}
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
            style={{ boxShadow: "inset 0 0 0 1px rgba(139,168,136,0.5), 0 0 24px 4px rgba(68,98,74,0.35)" }}
          />

          {/* Full bleed image */}
          {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
              sizes="(max-width: 640px) 100vw, 50vw"
              priority={index < 2}
            />
          )}

          {/* Custom cursor badge */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                className="absolute z-20 pointer-events-none"
                style={{ left: pos.x, top: pos.y }}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              >
                <div
                  className="-translate-x-1/2 -translate-y-1/2 flex items-center gap-2 px-4 py-2 rounded-full text-white text-xs font-semibold whitespace-nowrap shadow-lg"
                  style={{ backgroundColor: "#44624a" }}
                >
                  View Project
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Title & subtitle — outside card */}
        <div className="pt-3 px-1 flex items-center gap-2.5">
          {/* Logo */}
          <div className="flex-shrink-0 w-8 h-8 rounded-full overflow-hidden border border-white/[0.08] bg-white/[0.05]">
            {project.logo ? (
              <Image
                src={project.logo}
                alt={project.title}
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-[#44624a]/20">
                <span className="text-[10px] font-bold text-[#8ba888]">{project.logoInitial}</span>
              </div>
            )}
          </div>
          {/* Text */}
          <div className="min-w-0">
            <h3 className="text-sm font-semibold font-heading text-white group-hover:text-[#8ba888] transition-colors duration-300 leading-snug truncate">
              {project.title}
            </h3>
            <p className="text-xs text-zinc-500 mt-0.5 truncate">{project.subtitle}</p>
          </div>
        </div>
      </button>
    </motion.div>
  )
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="projects" className="relative bg-zinc-950 py-16 md:py-24 lg:py-32">
      <div className="container-custom">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 md:mb-14">
          <div className="space-y-4">
            <SectionBadge>Projects</SectionBadge>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="heading-lg text-white"
            >
              Selected Work
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 h-11 rounded-full bg-[#44624a] hover:bg-[#8ba888] text-white text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-[#44624a]/25 group"
            >
              All Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={setSelected}
            />
          ))}
        </div>

      </div>

      {/* Modal */}
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
