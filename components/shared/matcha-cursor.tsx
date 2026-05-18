"use client"

import { useEffect, useRef } from "react"

export function MatchaCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only on desktop (pointer: fine)
    if (typeof window === "undefined") return
    if (!window.matchMedia("(pointer: fine)").matches) return

    let raf: number
    let rx = 0, ry = 0   // ring position (lagged)
    let mx = 0, my = 0   // mouse position

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx - 4}px, ${my - 4}px)`
      }
    }

    const loop = () => {
      // Spring easing for ring
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`
      }
      raf = requestAnimationFrame(loop)
    }

    const onEnter = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      const isInteractive = el.closest("a, button, [role='button'], input, textarea, select, label")
      const isProjectCard = el.closest("[data-project-card]")

      if (isProjectCard) {
        // Hide dot + ring while custom badge cursor is active
        if (dotRef.current)  dotRef.current.style.opacity  = "0"
        if (ringRef.current) ringRef.current.style.opacity = "0"
        return
      }

      // Restore visibility
      if (dotRef.current)  dotRef.current.style.opacity  = "1"
      if (ringRef.current) ringRef.current.style.opacity = "1"

      if (ringRef.current) {
        if (isInteractive) {
          ringRef.current.style.transform += " scale(1.6)"
          ringRef.current.style.borderColor = "#8ba888"
          ringRef.current.style.backgroundColor = "rgba(68,98,74,0.15)"
        } else {
          ringRef.current.style.borderColor = "#8ba888"
          ringRef.current.style.backgroundColor = ""
        }
      }
    }

    document.addEventListener("mousemove", onMove, { passive: true })
    document.addEventListener("mouseover", onEnter, { passive: true })
    raf = requestAnimationFrame(loop)

    return () => {
      document.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseover", onEnter)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      {/* Small dot — snappy */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#8ba888] pointer-events-none z-[99999] hidden md:block"
        style={{ willChange: "transform" }}
      />
      {/* Larger ring — lagged */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-[#8ba888]/60 pointer-events-none z-[99998] hidden md:block transition-[border-color,background-color] duration-200"
        style={{ willChange: "transform" }}
      />
    </>
  )
}
