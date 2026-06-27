"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, ArrowUpRight, Search, ChevronDown, Check } from "lucide-react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ProjectModal } from "@/components/shared/project-modal"
import { SectionBadge } from "@/components/shared/section-badge"
import { projects } from "@/lib/projects"
import type { Project } from "@/lib/projects"

// Define categories in the exact order requested
const allCategories = [
  "All",
  "Landing Page",
  "Web Development",
  "Fullstack Development",
  "App",
  "AI Automation",
  "Odoo"
]

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
          className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-zinc-50 ring-1 ring-[#44624a]/30 group-hover:ring-[#8ba888]/60 transition-all duration-500"
          style={{ boxShadow: "0 0 0 1px rgba(68,98,74,0.2)" }}
        >
          {/* Hover glow ring */}
          <div
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
            style={{ boxShadow: "inset 0 0 0 1px rgba(139,168,136,0.5), 0 0 24px 4px rgba(68,98,74,0.35)" }}
          />

          {/* Image */}
          {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                  className="-translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-[90px] h-[90px] rounded-full text-white text-[13px] font-semibold tracking-wide shadow-2xl backdrop-blur-sm leading-tight bg-zinc-950/90"
                >
                  <span>View</span>
                  <span>project</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Title & subtitle — outside card */}
        <div className="pt-3 px-1 flex items-center gap-2.5">
          {/* Logo */}
          <div className="flex-shrink-0 w-8 h-8 rounded-full overflow-hidden border border-zinc-950/[0.08] bg-zinc-950/[0.05]">
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
            <h3 className="text-[15px] md:text-base font-semibold font-heading text-zinc-950 group-hover:text-[#8ba888] transition-colors duration-300 leading-snug truncate">
              {project.title}
            </h3>
            <p className="text-xs md:text-sm text-zinc-700 mt-0.5 truncate">{project.subtitle}</p>
          </div>
        </div>
      </button>
    </motion.div>
  )
}

export default function ProjectsPage() {
  const [selected, setSelected] = useState<Project | null>(null)
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [visibleCount, setVisibleCount] = useState(4)

  useEffect(() => {
    setVisibleCount(4)
  }, [activeCategory, searchQuery])

  const filtered = projects.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category?.toLowerCase() === activeCategory.toLowerCase()
    const searchLower = searchQuery.toLowerCase()
    const matchesSearch = p.title.toLowerCase().includes(searchLower) || p.subtitle.toLowerCase().includes(searchLower)
    
    return matchesCategory && matchesSearch
  })

  const visibleProjects = filtered.slice(0, visibleCount)

  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />

      <main className="pt-24 md:pt-32 pb-20">
        <div className="container-custom">

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6 md:mb-10"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-3 py-2 -ml-3 rounded-lg text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-colors duration-200 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              Back to home
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            className="flex flex-col items-center text-center space-y-3 md:space-y-4 mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <SectionBadge>All Projects</SectionBadge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight text-zinc-950">
              Everything I&apos;ve built.
            </h1>
            <p className="text-base sm:text-lg text-zinc-700 max-w-lg mx-auto leading-relaxed">
              A full collection of my work - from POS systems to booking platforms and beyond.
            </p>
          </motion.div>

          {/* Search & Filter */}
          <motion.div
            className="flex flex-row items-center justify-between gap-3 mb-8 md:mb-12"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {/* Search */}
            <div className="relative flex-1 min-w-0 sm:max-w-xs">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="w-4 h-4 text-zinc-400" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-full text-[13px] sm:text-[14px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#44624a]/20 focus:border-[#44624a] transition-all"
              />
            </div>

            {/* Dropdown */}
            <div className="relative flex-shrink-0">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between gap-2 px-4 py-2.5 bg-white border border-zinc-200 rounded-full text-[13px] sm:text-[14px] font-medium text-zinc-700 hover:bg-zinc-50 transition-colors w-[120px] sm:w-auto"
              >
                <span className="truncate text-left flex-1">{activeCategory}</span>
                <ChevronDown className={`w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 text-zinc-500 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <>
                    {/* Invisible overlay to detect outside clicks */}
                    <div 
                      className="fixed inset-0 z-20" 
                      onClick={() => setIsDropdownOpen(false)}
                    />
                    
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="absolute z-30 top-full mt-2 right-0 w-full sm:w-56 bg-white border border-zinc-100 rounded-2xl shadow-xl overflow-hidden py-1.5"
                    >
                      {allCategories.map((category) => (
                        <button
                          key={category}
                          onClick={() => {
                            setActiveCategory(category)
                            setIsDropdownOpen(false)
                          }}
                          className="w-full flex items-center justify-between px-4 py-2.5 text-left text-[14px] hover:bg-zinc-50 transition-colors"
                        >
                          <span className={`${activeCategory === category ? "text-[#44624a] font-semibold" : "text-zinc-600"}`}>
                            {category}
                          </span>
                          {activeCategory === category && <Check className="w-4 h-4 text-[#44624a]" />}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, index) => (
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
              className="text-center py-16 sm:py-24 text-zinc-600"
            >
              <p className="text-sm">No projects found matching your criteria.</p>
            </motion.div>
          )}

          {/* Load More Button */}
          {filtered.length > visibleCount && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-12 md:mt-16 flex justify-center"
            >
              <button
                onClick={() => setVisibleCount((prev) => prev + 4)}
                className="inline-flex items-center justify-center px-6 h-11 rounded-full bg-white border border-zinc-200 text-[14px] font-medium text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 transition-colors shadow-sm"
              >
                Load More
              </button>
            </motion.div>
          )}

        </div>
      </main>

      <Footer />
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </div>
  )
}
