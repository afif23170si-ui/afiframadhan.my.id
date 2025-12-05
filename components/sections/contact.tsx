"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react"
import { SectionWrapper } from "@/components/shared/section-wrapper"

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:afifr5092@gmail.com",
    label: "afifr5092@gmail.com",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/afif23170si-ui",
    label: "@afifr",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/afifrmdhn/",
    label: "Afif Ramadhan",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/afifr",
    label: "@afifr",
  },
]

export function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="max-w-4xl mx-auto">
        {/* Main Content */}
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <div className="flex justify-center">
            <div className="relative inline-flex items-center gap-2 px-3 py-1 bg-muted/50 backdrop-blur-sm rounded-full shadow-sm overflow-hidden">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 p-[1px]">
                <div className="w-full h-full rounded-full bg-background" />
              </div>
              <span className="relative text-sm font-medium text-foreground">Get In Touch</span>
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading">
              Let's work together
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or just want to chat? I'm always open to discussing new opportunities.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <a
              href="mailto:afifr5092@gmail.com"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 text-white font-medium rounded-full hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Say Hello
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

