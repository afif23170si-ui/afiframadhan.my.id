"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Home",        href: "/" },
  { name: "Projects",    href: "/#projects" },
  { name: "About",       href: "/#about" },
  { name: "Experience",  href: "/#experience" },
  { name: "Certifications",  href: "/#certifications" },
  { name: "Contact",     href: "/#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("")
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Intersection Observer — track active section
  useEffect(() => {
    if (pathname !== "/") return
    const sectionIds = ["projects", "about", "experience", "certifications", "contact"]
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    // Reset to empty when scrolled to very top
    const onScroll = () => {
      if (window.scrollY < 100) setActiveSection("")
    }
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      observers.forEach((o) => o.disconnect())
      window.removeEventListener("scroll", onScroll)
    }
  }, [pathname])

  useEffect(() => {
    if (isOpen) {
      document.body.setAttribute("data-menu-open", "true")
    } else {
      document.body.removeAttribute("data-menu-open")
    }
    return () => document.body.removeAttribute("data-menu-open")
  }, [isOpen])

  // Close mobile menu on route change
  useEffect(() => { setIsOpen(false) }, [pathname])

  const isActive = (href: string) => {
    if (pathname !== "/") return pathname.startsWith(href) && href !== "/"
    if (href === "/") return activeSection === ""
    if (href.startsWith("/#")) return activeSection === href.slice(2)
    return false
  }

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-zinc-200/50"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Left: Avatar + Name + Subtitle */}
            <Link href="/" className="flex items-center gap-3 group">
              <Image 
                src="/android-chrome-192x192.png" 
                alt="Afif" 
                width={40} 
                height={40} 
                className="rounded-full border border-zinc-950/[0.1] group-hover:border-zinc-950/[0.2] transition-colors" 
              />
              <div className="flex flex-col">
                <span className="text-base font-bold font-heading tracking-tight text-zinc-950 group-hover:text-zinc-800 transition-colors">
                  Afif Ramadhan
                </span>
                <span className="text-xs text-zinc-500 leading-tight mt-0.5">
                  Based in Jakarta · WIB
                </span>
              </div>
            </Link>

            {/* Right: Nav Links + CTA (Desktop) */}
            <div className="hidden md:flex items-center gap-8">
              <nav className="flex items-center gap-6">
                {navItems.map((item) => {
                  // Skip Home and Contact in the desktop inline links to match the clean look in the screenshot
                  if (item.name === "Home" || item.name === "Contact") return null;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-[15px] font-medium transition-colors ${
                        isActive(item.href) ? "text-zinc-950" : "text-zinc-700 hover:text-zinc-950"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )
                })}
              </nav>
              
              <Button
                asChild
                className="bg-zinc-100 hover:bg-zinc-200 text-zinc-900 rounded-full px-5 h-10 text-[15px] font-medium transition-all duration-200 shadow-none"
              >
                <a href="https://wa.me/6285121597870" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Image src="/images/medsos/wa.png" alt="WhatsApp" width={16} height={16} className="w-4 h-4 object-contain" />
                  Let&apos;s chat
                </a>
              </Button>
            </div>

            {/* Right: Hamburger (Mobile) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 -mr-2 text-zinc-500 hover:text-zinc-950 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="9" x2="20" y2="9"></line>
                  <line x1="4" y1="15" x2="20" y2="15"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu — Overlay ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[45] md:hidden bg-white flex flex-col overflow-hidden pt-20"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Ambient glow */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-0 left-0 w-[400px] h-[300px] bg-[#44624a]/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
            </div>

            {/* Nav items & CTA */}
            <nav className="flex-1 px-6 pt-4 pb-6 relative z-10 overflow-y-auto">
              <div className="flex flex-col gap-3">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 py-2 group transition-colors duration-200 ${
                        isActive(item.href) ? "text-zinc-950" : "text-zinc-700 hover:text-zinc-950"
                      }`}
                    >
                      <span className="text-lg font-semibold font-heading tracking-tight">{item.name}</span>
                      {isActive(item.href) && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8ba888]" />
                      )}
                    </Link>
                  </motion.div>
                ))}

                {/* CTA */}
                <motion.div
                  className="pt-6 mt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  <a
                    href="https://wa.me/6285121597870"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center justify-center gap-2 px-6 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 rounded-full h-11 text-[15px] font-medium transition-all duration-200 w-fit shadow-none"
                  >
                    <Image src="/images/medsos/wa.png" alt="WhatsApp" width={16} height={16} className="w-4 h-4 object-contain" />
                    Let&apos;s chat
                  </a>
                </motion.div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
