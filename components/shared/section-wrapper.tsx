"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface SectionWrapperProps {
  children: ReactNode
  id?: string
  className?: string
}

export function SectionWrapper({ children, id, className = "" }: SectionWrapperProps) {
  return (
    // Section element is always fully visible — no opacity animation here.
    // This prevents the background image from bleeding through while the
    // section is in its initial invisible state before the scroll animation fires.
    <section
      id={id}
      className={`section-padding bg-white ${className}`}
    >
      {/* Only the content inside animates — the background stays solid */}
      <motion.div
        className="container-custom"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  )
}
