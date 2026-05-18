"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Home",       href: "/" },
  { name: "About",      href: "/#about" },
  { name: "Projects",   href: "/#projects" },
  { name: "Experience", href: "/#experience" },
  { name: "Contact",    href: "/#contact" },
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
    const sectionIds = ["about", "projects", "experience", "contact"]
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
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.04] backdrop-blur-md hover:bg-white/[0.08] transition-colors"
                >
                  <Image src="/android-chrome-192x192.png" alt="Afif" width={28} height={28} className="rounded-full" />
                  <span className="text-sm font-semibold tracking-tight text-white">Afif Ramadhan</span>
                </Link>

                {/* Center Nav — truly centered via absolute */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 p-1 rounded-full border border-white/[0.06] bg-white/[0.04] backdrop-blur-md">
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
                    className="hidden md:inline-flex bg-[#44624a] hover:bg-[#8ba888] text-white rounded-full px-5 h-9 font-medium transition-all duration-200 hover:shadow-lg hover:shadow-[#44624a]/25"
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
                    className="md:hidden h-9 w-9 flex items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.04] text-zinc-400 hover:text-white transition-colors"
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
            className="fixed top-4 inset-x-4 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-fit z-50 rounded-full bg-zinc-900/80 backdrop-blur-2xl border border-white/[0.1] shadow-2xl shadow-black/50"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between w-full gap-2 px-3 py-2">
              {/* Logo — short name to save space */}
              <Link href="/" className="flex items-center gap-2 flex-shrink-0">
                <Image src="/android-chrome-192x192.png" alt="Afif" width={26} height={26} className="rounded-full" />
                <span className="text-sm font-semibold text-white whitespace-nowrap">Afif</span>
              </Link>

              {/* Separator */}
              <div className="hidden md:block w-px h-4 bg-white/10" />

              {/* Nav Links (Desktop) */}
              <div className="hidden md:flex items-center gap-0.5">
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
                className="hidden md:inline-flex ml-1 bg-[#44624a] hover:bg-[#8ba888] text-white rounded-full px-4 h-8 text-sm font-medium transition-all duration-200"
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
                className="md:hidden h-8 w-8 flex items-center justify-center rounded-full text-zinc-400 hover:text-white transition-colors"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* ── Mobile Fullscreen Menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[60] md:hidden bg-zinc-950/95 backdrop-blur-xl flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 h-10 w-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <nav className="flex flex-col items-center gap-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.07, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-semibold tracking-tight transition-colors ${
                      isActive(item.href) ? "text-white" : "text-zinc-500 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="mt-4"
              >
                <a
                  href="https://wa.me/6285121597870"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-2 bg-[#44624a] hover:bg-[#8ba888] text-white rounded-full px-8 h-12 text-base font-medium transition-all duration-200"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Let&apos;s chat
                </a>
              </motion.div>
            </nav>

            {/* Decorative glows */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-[#44624a]/15 rounded-full blur-[100px]" />
              <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#8ba888]/10 rounded-full blur-[120px]" />
            </div>
          </motion.div>
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
      className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
        isActive ? "text-white" : "text-zinc-400 hover:text-white"
      }`}
    >
      {showIndicator && (
        <motion.span
          layoutId={layoutId}
          className="absolute inset-0 bg-zinc-800 rounded-full -z-10"
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
