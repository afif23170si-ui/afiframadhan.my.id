"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

interface CursorProps {
  magnetic?: boolean
}

export function Cursor({ magnetic = false }: CursorProps) {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Smooth spring animation for the cursor
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 6)
      mouseY.set(e.clientY - 6)
      
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add event listeners
    window.addEventListener("mousemove", moveCursor)
    
    // Add hover listeners to interactive elements
    if (magnetic) {
      const interactiveElements = document.querySelectorAll("a, button, input, textarea, [role='button']")
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter)
        el.addEventListener("mouseleave", handleMouseLeave)
      })
      
      // Observer for dynamic content
      const observer = new MutationObserver((mutations) => {
        const newInteractiveElements = document.querySelectorAll("a, button, input, textarea, [role='button']")
        newInteractiveElements.forEach((el) => {
          el.removeEventListener("mouseenter", handleMouseEnter)
          el.removeEventListener("mouseleave", handleMouseLeave)
          el.addEventListener("mouseenter", handleMouseEnter)
          el.addEventListener("mouseleave", handleMouseLeave)
        })
      })
      
      observer.observe(document.body, { childList: true, subtree: true })
      
      return () => {
        window.removeEventListener("mousemove", moveCursor)
        interactiveElements.forEach((el) => {
          el.removeEventListener("mouseenter", handleMouseEnter)
          el.removeEventListener("mouseleave", handleMouseLeave)
        })
        observer.disconnect()
      }
    }

    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }
  }, [magnetic, mouseX, mouseY, isVisible])

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Don't render on server or touch devices
  if (!isMounted || (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches)) {
    return null
  }

  return (
    <motion.div
      className="fixed top-0 left-0 w-3 h-3 pointer-events-none z-[9999] mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <motion.div
        className="w-full h-full bg-white rounded-full"
        animate={{
          scale: isHovering ? 2.5 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  )
}
