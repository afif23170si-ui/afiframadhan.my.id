"use client"

import { motion } from "framer-motion"
import { ArrowRight, Check, Plus, Minus, Heart } from "lucide-react"
import Link from "next/link"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { projects } from "@/lib/projects"
import { useState } from "react"

function ProjectCard({ project, index }: { project: any, index: number }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [likes, setLikes] = useState(120 + (index * 12) % 50)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikes(prev => isLiked ? prev - 1 : prev + 1)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="sticky top-24 md:top-32 self-start w-full"
      style={{ minHeight: 'auto' }}
    >
      <div className="group relative w-full bg-[#0e0e10]/95 backdrop-blur-xl border border-white/[0.08] rounded-[20px] md:rounded-[32px] overflow-hidden shadow-2xl transition-all duration-500 hover:border-white/[0.15]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16 p-4 sm:p-6 md:p-8 h-full items-center">
          
          {/* Image Column */}
          <div className="relative order-1 lg:order-2 w-full">
            <div className="relative aspect-[4/3] w-full rounded-[12px] md:rounded-[24px] overflow-hidden bg-black/50 border border-white/5 group-hover:border-white/10 transition-colors">
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Inner Highlight */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />

              {/* Toggle Button (Mobile Only) */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden absolute bottom-3 right-3 z-20 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-black/80 transition-all active:scale-95"
              >
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </button>
            </div>
          </div>
          
          {/* Content Column */}
          <div className="order-2 lg:order-1 w-full flex flex-col justify-center lg:justify-between pt-6 md:pt-0 lg:h-full">
            <motion.div
              initial={false}
              animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="md:!h-auto md:!opacity-100 overflow-hidden"
            >
               {/* Content Wrapper */}
               <div className="space-y-8 pb-8 md:pb-0">
                  <div className="space-y-4">
                    <h3 className="text-xl md:text-2xl font-bold font-heading text-white leading-tight">
                      {project.subtitle}
                    </h3>
                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-md">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  {project.features && project.features.length > 0 && (
                    <div className="border-t border-white/5 pt-6">
                        <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-4">Key Highlights</h4>
                        <div className="flex flex-wrap gap-x-8 gap-y-3">
                          {project.features.map((feature: string, i: number) => (
                            <div key={i} className="flex items-center gap-2">
                              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                                <Check className="w-3 h-3 text-blue-400" />
                              </div>
                              <span className="text-zinc-300 text-sm font-medium">{feature}</span>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}
              </div>
            </motion.div>

            {/* Button - Always Visible */}
            {/* Action Row */}
            <div className="flex items-center justify-between md:justify-start md:gap-6">
              <button 
                onClick={handleLike}
                className="group flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors"
                aria-label="Like project"
              >
                <div className={`p-3 rounded-full border transition-all duration-300 ${isLiked ? 'bg-red-500/10 border-red-500/20 text-red-500' : 'bg-white/5 border-white/10 group-hover:bg-white/10 group-hover:border-white/20'}`}>
                  <Heart className={`w-5 h-5 transition-transform duration-300 ${isLiked ? 'fill-current scale-110' : ''}`} />
                </div>
                <span className={`text-sm font-medium tabular-nums transition-colors ${isLiked ? 'text-red-500' : ''}`}>{likes}</span>
              </button>

              <Link 
                href={`/projects/${project.id}`}
                className="inline-flex items-center justify-center h-12 px-6 md:px-8 rounded-full border border-white/10 bg-white/5 text-white font-medium text-sm transition-all duration-300 hover:bg-white text-zinc-300 hover:text-black hover:border-transparent group/btn"
              >
                View case study
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  return (
    <SectionWrapper id="projects" className="pt-0 pb-16 md:pt-0 md:pb-32">
      <div className="space-y-8 md:space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl space-y-6">
            <div className="relative inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full shadow-sm overflow-hidden">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 p-[1px]">
                <div className="w-full h-full rounded-full bg-black/80" />
              </div>
              <span className="relative text-sm font-medium text-white">Project</span>
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

            {/* Mobile View All Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:hidden pt-2"
            >
               <Link 
                href="/projects" 
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm transition-all text-sm font-medium text-zinc-200"
              >
                All Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
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
        <div className="flex flex-col gap-4 md:gap-8 relative pb-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>


      </div>
    </SectionWrapper>
  )
}

