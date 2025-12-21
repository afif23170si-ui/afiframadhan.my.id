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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl space-y-6">
            <div className="relative inline-flex items-center gap-2 px-3 py-1 bg-muted/50 backdrop-blur-sm rounded-full shadow-sm overflow-hidden">
              {/* Gradient Border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 p-[1px]">
                <div className="w-full h-full rounded-full bg-background" />
              </div>
              <span className="relative text-sm font-medium text-foreground">Projects</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-heading">
              A curated collection of <br className="hidden md:block" />
              websites designed with care
            </h2>
          </div>

          <Link 
            href="/projects" 
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-muted/50 hover:bg-muted transition-colors text-sm font-medium"
          >
            All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Projects List - Single Column Cards */}
        <div className="flex flex-col gap-12 md:gap-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="rounded-[32px]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                  
                  {/* Left Column: Info */}
                  <div className="lg:col-span-4 flex flex-col justify-between p-5 md:p-6 lg:py-8 lg:px-8 space-y-6 order-2 lg:order-1 project-card-bg rounded-[16px] md:rounded-[24px] transition-colors duration-300 lg:h-[500px] overflow-hidden">
                    <div className="space-y-6">
                      {/* Project Icon/Logo Placeholder */}
                      <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center text-white" style={{ boxShadow: '4px 6px 12px rgba(0, 0, 0, 0.1)' }}>
                        {/* Use first letter of title as logo */}
                         <span className="text-xl font-bold font-heading">{project.title.charAt(0)}</span>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-base leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      {/* Metadata */}
                      <div className="space-y-3 pt-4">
                        <div className="flex justify-between items-center text-sm py-2">
                          <span className="text-muted-foreground">Client</span>
                          <span className="font-medium">{project.client || "Personal Project"}</span>
                        </div>
                        <div className="h-px bg-border/50" />
                        <div className="flex justify-between items-center text-sm py-2">
                          <span className="text-muted-foreground">Date</span>
                          <span className="font-medium">{project.date || project.year}</span>
                        </div>
                      </div>
                    </div>

                    {/* Button */}
                    <div className="pt-4">
                      <Link 
                        href={`/projects/${project.id}`}
                        className="inline-flex w-full items-center justify-center bg-foreground text-background hover:bg-foreground/90 transition-colors h-12 rounded-full font-medium text-sm"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Image */}
                  <Link 
                    href={`/projects/${project.id}`}
                    className="lg:col-span-8 order-1 lg:order-2 h-[250px] md:h-[350px] lg:h-[500px] relative rounded-[16px] md:rounded-[24px] overflow-hidden bg-black/5 dark:bg-white/5 group/image cursor-pointer"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-105"
                      loading="lazy"
                    />
                    {/* Hover Overlay with Badge */}
                    <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <span className="px-6 py-3 bg-white text-black rounded-full font-medium text-sm opacity-0 group-hover/image:opacity-100 transform translate-y-4 group-hover/image:translate-y-0 transition-all duration-300">
                        View Project
                      </span>
                    </div>
                  </Link>

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

