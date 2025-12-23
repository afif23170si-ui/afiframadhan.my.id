"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { projects } from "@/lib/projects"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

export function Projects() {
  return (
    <SectionWrapper id="projects" className="pt-0 pb-16 md:pt-0 md:pb-32">
      <div className="space-y-16 md:space-y-24">
        {/* Header */}
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl space-y-6">
            <div className="relative inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full shadow-sm overflow-hidden">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 p-[1px]">
                <div className="w-full h-full rounded-full bg-black/80" />
              </div>
              <span className="relative text-sm font-medium text-white">Selected Projects</span>
            </div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold font-heading text-foreground tracking-tight"
            >
              A curated collection of <br className="hidden md:block" />
              websites designed with care.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link 
              href="/projects" 
              className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.12] backdrop-blur-sm transition-all duration-300 text-sm font-medium text-zinc-200 group"
            >
              View Archive
              <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
            </Link>
          </motion.div>
        </div>

        {/* Projects Grid - Vertical Cards */}
        {/* Projects Stack - Vertical Sticky Scrolling */}
        <div className="flex flex-col gap-4 md:gap-8 relative pb-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="sticky top-24 md:top-32 self-start w-full"
              style={{ minHeight: '600px' }} // Ensure height for scrolling
            >
              <div className="group relative w-full bg-[#0e0e10]/95 backdrop-blur-xl border border-white/[0.08] rounded-[40px] overflow-hidden shadow-2xl transition-all duration-500 hover:border-white/[0.15]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 p-8 md:p-12 lg:p-16 h-full items-center">
                  
                  <div className="flex flex-col justify-center space-y-8 order-2 lg:order-1">
                    <div className="space-y-4">
                      <h3 className="text-xl md:text-2xl font-bold font-heading text-white leading-tight">
                        {project.subtitle} {/* Using subtitle as main headline per reference */}
                      </h3>
                      <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-md">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-col gap-8">
                       {/* Stats Row */}
                      {project.stats && (
                        <div className="flex items-center gap-12 border-t border-white/5 pt-8">
                          {project.stats.map((stat, i) => (
                            <div key={i} className="space-y-2">
                              <p className="text-sm text-zinc-500 font-medium uppercase tracking-wider">{stat.label}</p>
                              <p className="text-4xl md:text-5xl font-medium text-white tracking-tight">{stat.value}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      <div>
                        <Link 
                          href={`/projects/${project.id}`}
                          className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-white/10 bg-white/5 text-white font-medium text-sm transition-all duration-300 hover:bg-white text-zinc-300 hover:text-black hover:border-transparent group/btn"
                        >
                          View case study
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Right: Image */}
                  <div className="relative order-1 lg:order-2">
                    <div className="relative aspect-[4/3] w-full rounded-[24px] overflow-hidden bg-black/50 border border-white/5 group-hover:border-white/10 transition-colors">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Inner Highlight */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                    </div>
                  </div>
                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="md:hidden flex justify-center">
           <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-muted/50 hover:bg-muted transition-colors text-sm font-medium"
          >
            All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </SectionWrapper>
  )
}

