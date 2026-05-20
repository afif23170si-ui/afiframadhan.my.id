"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion"
import { ArrowUp } from "lucide-react"

export function ScrollUtils() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <>
      {/* ── Scroll progress bar ── */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[99997] origin-left"
        style={{
          scaleX,
          background: "linear-gradient(to right, #44624a, #8ba888, #c0cfb2)",
        }}
      />

      {/* ── Back to top button ── */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={scrollToTop}
            className="scroll-to-top fixed bottom-8 right-6 z-[99997] w-11 h-11 rounded-full flex items-center justify-center border border-[#44624a]/40 bg-[#0b0f0b]/80 backdrop-blur-md text-[#8ba888] hover:bg-[#44624a]/20 hover:border-[#8ba888]/60 hover:text-white transition-all duration-200 shadow-lg shadow-black/30"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
