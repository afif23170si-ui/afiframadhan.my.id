"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/shared/section-wrapper"

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Freelance",
    duration: "2023 - Present",
    description: "Building modern web applications for various clients using the latest technologies.",
    technologies: ["Next.js", "Laravel", "TypeScript", "MySQL"],
  },
  {
    role: "Junior Web Developer",
    company: "PT. Tech Indonesia",
    duration: "2023 - 2024",
    description: "Developed and maintained company websites and internal applications.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
  },
]

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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function Experience() {
  return (
    <SectionWrapper id="experience" className="pt-20 md:pt-28 lg:pt-36">
      <div className="space-y-12">
        {/* Section Header */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center">
            <div className="relative inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full shadow-sm overflow-hidden">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 p-[1px]">
                <div className="w-full h-full rounded-full bg-black/80" />
              </div>
              <span className="relative text-sm font-medium text-white">Work Experience</span>
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-heading">
            My professional journey<br />and key accomplishments
          </h2>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          className="max-w-3xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="relative pl-8 pb-12 last:pb-0 group"
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] top-6 bottom-0 w-[2px] bg-border group-hover:bg-gradient-to-b group-hover:from-blue-500 group-hover:to-cyan-400 transition-all duration-500" />
              )}
              
              {/* Timeline Dot */}
              <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 border-border bg-background flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-muted-foreground group-hover:bg-blue-500 transition-colors duration-300" />
              </div>

              {/* Content Card */}
              <div className="rounded-xl border border-white/5 bg-zinc-900/20 backdrop-blur-md p-5 md:p-6 hover:bg-zinc-900/30 hover:border-white/10 hover:shadow-lg transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-blue-500 transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <p className="text-muted-foreground font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground bg-white/5 border border-white/5 px-3 py-1 rounded-full whitespace-nowrap">
                    {exp.duration}
                  </span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-zinc-400 border border-white/5 hover:border-blue-500/30 hover:bg-blue-500/5 hover:text-blue-500 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

