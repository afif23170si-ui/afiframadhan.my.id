"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
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
  const [hoveredPath, setHoveredPath] = useState<string | null>(null)
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
      <AnimatePresence mode="wait">
        {!scrolled ? (
          /* ── Top Transparent Navbar ── */
          <motion.nav
            key="top"
            className="absolute top-0 left-0 right-0 z-50 py-5"
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="container-custom">
              <div className="flex items-center justify-between relative">
                {/* Logo */}
                <Link
                  href="/"
                  className="flex items-center gap-2.5 h-11 px-4 rounded-full border border-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] bg-white/5 backdrop-blur-2xl backdrop-saturate-200 hover:bg-white/10 transition-colors"
                >
                  <Image src="/android-chrome-192x192.png" alt="Afif" width={24} height={24} className="rounded-full" />
                  <span className="text-sm font-semibold tracking-tight text-white">Afif Ramadhan</span>
                </Link>

                {/* Center Nav — truly centered via absolute */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 p-1 h-11 rounded-full border border-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] bg-white/5 backdrop-blur-2xl backdrop-saturate-200">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.name}
                      item={item}
                      isActive={isActive(item.href)}
                      layoutId="top-indicator"
                      hoveredPath={hoveredPath}
                      setHoveredPath={setHoveredPath}
                    />
                  ))}
                </div>

                {/* Right CTA (Desktop) + Mobile Toggle */}
                <div className="flex items-center gap-3">
                  <Button
                    asChild
                    size="sm"
                    className="hidden md:inline-flex bg-[#44624a] hover:bg-[#8ba888] text-white rounded-full px-6 h-11 text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-[#44624a]/25"
                  >
                    <a href="https://wa.me/6285121597870" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Let&apos;s chat
                    </a>
                  </Button>

                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden h-11 w-11 flex items-center justify-center rounded-full border border-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] bg-white/5 backdrop-blur-2xl backdrop-saturate-200 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                  >
                    {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            </div>
          </motion.nav>
        ) : (
          /* ── Sticky Pill Navbar ── */
          <motion.nav
            key="pill"
            className="fixed top-4 inset-x-4 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:max-w-4xl md:w-full z-50 rounded-full bg-white/5 backdrop-blur-2xl backdrop-saturate-200 border border-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_8px_32px_rgba(0,0,0,0.4)]"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between w-full gap-2 px-2 h-12">
              {/* Logo — short name to save space */}
              <Link href="/" className="flex items-center gap-2.5 px-3 h-9 flex-shrink-0">
                <Image src="/android-chrome-192x192.png" alt="Afif" width={24} height={24} className="rounded-full" />
                <span className="text-sm font-semibold text-white whitespace-nowrap">Afif</span>
              </Link>

              {/* Separator */}
              <div className="hidden md:block w-px h-4 bg-white/10" />

              {/* Nav Links (Desktop) */}
              <div className="hidden md:flex items-center gap-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    item={item}
                    isActive={isActive(item.href)}
                    layoutId="pill-indicator"
                    hoveredPath={hoveredPath}
                    setHoveredPath={setHoveredPath}
                  />
                ))}
              </div>

              {/* CTA */}
              <Button
                asChild
                size="sm"
                className="hidden md:inline-flex ml-1 bg-[#44624a] hover:bg-[#8ba888] text-white rounded-full px-5 h-9 text-sm font-medium transition-all duration-200"
              >
                <a href="https://wa.me/6285121597870" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Let&apos;s chat
                </a>
              </Button>

              {/* Mobile toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden h-9 w-9 flex items-center justify-center rounded-full text-zinc-400 hover:text-white transition-colors"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* ── Mobile Menu — Bottom Sheet ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[59] md:hidden bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Sheet */}
            <motion.div
              className="fixed inset-x-0 bottom-0 z-[60] md:hidden bg-zinc-950 border-t border-white/[0.08] rounded-t-3xl overflow-hidden"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Ambient glow */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#44624a]/10 rounded-full blur-[80px]" />
              </div>

              {/* Drag handle */}
              <div className="flex justify-center pt-3 pb-1">
                <div className="w-10 h-1 rounded-full bg-white/20" />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between px-6 pt-3 pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-2.5">
                  <Image src="/android-chrome-192x192.png" alt="Afif" width={28} height={28} className="rounded-full" />
                  <span className="text-sm font-semibold text-white">Afif Ramadhan</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/[0.06] border border-white/[0.08] text-zinc-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Nav items */}
              <nav className="px-6 py-2 relative z-10">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.25 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between py-4 border-b border-white/[0.05] group transition-colors duration-200 ${
                        isActive(item.href) ? "text-white" : "text-zinc-500 hover:text-white"
                      }`}
                    >
                      <span className="text-base font-semibold font-heading">{item.name}</span>
                      <div className="flex items-center gap-2">
                        {isActive(item.href) && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8ba888]" />
                        )}
                        <span className="text-[10px] font-medium text-zinc-700 tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Footer — CTA */}
              <motion.div
                className="px-6 pt-4 pb-8 relative z-10"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.3 }}
              >
                <a
                  href="https://wa.me/6285121597870"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-[#44624a] hover:bg-[#8ba888] text-white rounded-full h-12 text-sm font-semibold transition-all duration-200"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Let&apos;s chat
                </a>
              </motion.div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

/* ── Sub-components ── */

function NavLink({
  item,
  isActive,
  layoutId,
  hoveredPath,
  setHoveredPath,
}: {
  item: { name: string; href: string }
  isActive: boolean
  layoutId: string
  hoveredPath: string | null
  setHoveredPath: (v: string | null) => void
}) {
  const showIndicator = hoveredPath === item.href || (isActive && hoveredPath === null)

  return (
    <Link
      href={item.href}
      onMouseEnter={() => setHoveredPath(item.href)}
      onMouseLeave={() => setHoveredPath(null)}
      className={`relative flex items-center justify-center px-4 h-9 rounded-full text-sm font-medium transition-colors duration-200 ${
        isActive ? "text-white" : "text-zinc-400 hover:text-white"
      }`}
    >
      {showIndicator && (
        <motion.span
          layoutId={layoutId}
          className="absolute inset-0 bg-white/10 rounded-full -z-10"
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
        />
      )}
      <span className="relative z-10">{item.name}</span>
    </Link>
  )
}

function VerifiedBadge() {
  return (
    <svg viewBox="0 0 24 24" aria-label="Verified" className="w-4 h-4 text-[#8ba888] fill-current flex-shrink-0">
      <g fillRule="evenodd">
        <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.114-1.335.325C14.686 2.68 13.18 1.5 11.5 1.5c-1.7 0-3.2 1.16-3.937 2.327-.41-.212-.866-.33-1.337-.33-2.097 0-3.8 1.8-3.8 3.997 0 .495.084.965.238 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.58.875 2.95 2.147 3.6-.154.435-.238.9-.238 1.4 0 2.21 1.71 4 3.818 4 .47 0 .92-.114 1.335-.325.737 1.166 2.242 2.33 3.922 2.33 1.7 0 3.18-1.16 3.937-2.327.41.21.866.328 1.337.328 2.097 0 3.8-1.79 3.8-3.997 0-.495-.084-.965-.238-1.4 1.272-.65 2.147-2.018 2.147-3.6z" />
        <path d="M10 16.5l-3.5-3.5 1.414-1.414L10 13.672l6.086-6.086 1.414 1.414z" fill="white" />
      </g>
    </svg>
  )
}
