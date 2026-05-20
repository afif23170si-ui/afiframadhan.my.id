"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, ArrowUpRight } from "lucide-react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ProjectModal } from "@/components/shared/project-modal"
import { SectionBadge } from "@/components/shared/section-badge"
import { projects } from "@/lib/projects"
import type { Project } from "@/lib/projects"

// Collect all unique tech tags
const allTags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.technologies)))]

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
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12, scale: 0.97 }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
    >
      <button
        onClick={() => onOpen(project)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={handleMouseMove}
        data-project-card
        className="group w-full text-left"
        style={{ cursor: "none" }}
      >
        <div
          className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 ring-1 ring-[#44624a]/30 group-hover:ring-[#8ba888]/60 transition-all duration-500"
          style={{ boxShadow: "0 0 0 1px rgba(68,98,74,0.2)" }}
        >
          {/* Hover glow */}
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
            style={{ boxShadow: "inset 0 0 0 1px rgba(139,168,136,0.5), 0 0 24px 4px rgba(68,98,74,0.35)" }}
          />

          {/* Image */}
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

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
                  className="-translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 px-4 py-2 rounded-full text-white text-xs font-semibold whitespace-nowrap shadow-lg"
                  style={{ backgroundColor: "#44624a" }}
                >
                  View Project
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Title, subtitle & tech — outside card */}
        <div className="pt-3 px-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-sm font-semibold font-heading text-white group-hover:text-[#8ba888] transition-colors duration-300 leading-snug">
              {project.title}
            </h3>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-600 bg-white/[0.04] border border-white/[0.06] px-2 py-0.5 rounded-full">
              {project.year}
            </span>
          </div>
          <p className="text-xs text-zinc-500 mb-2">{project.subtitle}</p>
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-zinc-500"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-zinc-600">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </button>
    </motion.div>
  )
}

export default function ProjectsPage() {
  const [selected, setSelected] = useState<Project | null>(null)
  const [activeTag, setActiveTag] = useState("All")

  const filtered = activeTag === "All"
    ? projects
    : projects.filter((p) => p.technologies.includes(activeTag))

  return (
    <div className="relative min-h-screen bg-zinc-950">
      <Navbar />

      <main className="pt-28 md:pt-36 pb-20">
        <div className="container-custom">

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors duration-200 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              Back to home
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            className="flex flex-col items-center text-center space-y-5 mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <SectionBadge>All Projects</SectionBadge>
            <h1 className="heading-xl text-white">
              Everything I&apos;ve built.
            </h1>
            <p className="subtext max-w-lg mx-auto">
              A full collection of my work - from POS systems to booking platforms and beyond.
            </p>
          </motion.div>

          {/* Filter tags */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-10 md:mb-14"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border ${
                  activeTag === tag
                    ? "bg-[#44624a] border-[#44624a] text-white"
                    : "bg-white/[0.04] border-white/[0.08] text-zinc-500 hover:text-white hover:border-white/20"
                }`}
              >
                {tag}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onOpen={setSelected}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24 text-zinc-600"
            >
              <p className="text-sm">No projects found for &ldquo;{activeTag}&rdquo;</p>
            </motion.div>
          )}

        </div>
      </main>

      <Footer />
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </div>
  )
}
