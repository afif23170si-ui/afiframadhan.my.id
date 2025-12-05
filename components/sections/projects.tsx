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
    <SectionWrapper id="projects" className="py-16 md:py-24">
      <div className="space-y-12">
        {/* Projects Grid - 2 Column Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
            >
              <Link href={`/projects/${project.id}`} className="group block">
                {/* Card Container */}
                <div className="rounded-2xl border border-border/50 hover:border-border transition-all duration-300 overflow-hidden">
                  {/* Inner Card */}
                  <div className="bg-background overflow-hidden">
                    {/* Preview Area */}
                    <div className="relative aspect-[16/10] bg-muted/30 p-6 md:p-8 flex items-center justify-center overflow-hidden">
                      {/* Mock Browser/App Frame */}
                      <div className="relative w-full max-w-[90%] rounded-lg overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    
                    {/* Project Info */}
                    <div className="p-5 md:p-6 flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:via-cyan-400 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {project.subtitle}
                        </p>
                      </div>
                      {/* Hover Arrow Button */}
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                        <ArrowRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

