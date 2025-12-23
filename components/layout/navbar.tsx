"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredPath, setHoveredPath] = useState<string | null>(null)
  
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Updated nav items for multi-page navigation
  const centerNavItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
  ]

  // Helper to check if a link is active
  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      <AnimatePresence>
        {!scrolled ? (
          <motion.nav
            key="top-navbar"
            className="absolute top-0 left-0 right-0 z-50 bg-transparent py-4"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container-custom relative">
              <div className="flex items-center justify-between gap-4">
                {/* Left: Logo */}
                <Link
                  href="/"
                  className="flex-shrink-0 flex items-center gap-2 p-1.5 pr-4 border border-white/[0.03] rounded-full bg-white/5 backdrop-blur-md transition-colors hover:bg-white/10"
                >
                    <Image
                    src="/logo-p.webp"
                    alt="Afif Logo"
                    width={32}
                    height={32}
                    className="object-cover rounded-full"
                  />
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-sm tracking-tight">Afif Ramadhan</span>
                    <svg viewBox="0 0 24 24" aria-label="Verified Account" className="w-4 h-4 text-blue-500 fill-current">
                      <g fillRule="evenodd">
                        <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.114-1.335.325C14.686 2.68 13.18 1.5 11.5 1.5c-1.7 0-3.2 1.16-3.937 2.327-.41-.212-.866-.33-1.337-.33-2.097 0-3.8 1.8-3.8 3.997 0 .495.084.965.238 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.58.875 2.95 2.147 3.6-.154.435-.238.9-.238 1.4 0 2.21 1.71 4 3.818 4 .47 0 .92-.114 1.335-.325.737 1.166 2.242 2.33 3.922 2.33 1.7 0 3.18-1.16 3.937-2.327.41.21.866.328 1.337.328 2.097 0 3.8-1.79 3.8-3.997 0-.495-.084-.965-.238-1.4 1.272-.65 2.147-2.018 2.147-3.6z" />
                        <path d="M10 16.5l-3.5-3.5 1.414-1.414L10 13.672l6.086-6.086 1.414 1.414z" fill="white" />
                      </g>
                    </svg>
                  </div>
                </Link>

                {/* Center: Navigation */}
                <div className="hidden md:flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="flex items-center gap-2 lg:gap-4 p-1.5 border border-white/[0.03] rounded-full bg-white/5 backdrop-blur-md">
                    {centerNavItems.map((item) => {
                      const isActive = isLinkActive(item.href)
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onMouseEnter={() => setHoveredPath(item.href)}
                          onMouseLeave={() => setHoveredPath(null)}
                          className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                            isActive ? "text-foreground" : "text-foreground/70 hover:text-foreground"
                          }`}
                        >
                          {/* Background Indicator */}
                          {hoveredPath === item.href ? (
                            <motion.span
                              layoutId="navbar-indicator-top"
                              className="absolute inset-0 bg-secondary/80 border border-white/[0.03] rounded-full -z-10"
                              transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30
                              }}
                            />
                          ) : isActive && hoveredPath === null ? (
                            <motion.span
                              layoutId="navbar-indicator-top"
                              className="absolute inset-0 bg-secondary/80 border border-white/[0.03] rounded-full -z-10"
                              transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30
                              }}
                            />
                          ) : null}
                          
                          <span className="relative z-10">{item.name}</span>
                        </Link>
                      )
                    })}
                  </div>
                </div>

                {/* Right: Actions */}
                <div className="hidden md:flex items-center justify-end gap-4 min-w-fit">
                  <Button 
                    asChild
                    size="lg" 
                    className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 text-white hover:opacity-90 hover:shadow-lg hover:shadow-blue-500/25 rounded-full px-6 h-12 transition-all duration-300 border-0"
                  >
                    <Link href="/contact">Get In Touch</Link>
                  </Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden items-center gap-2 relative z-50">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative h-10 w-10 border border-white/[0.03] rounded-full bg-white/[0.02] backdrop-blur-md"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                  >
                    {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                  </Button>
                </div>
              </div>
            </div>
          </motion.nav>
        ) : (
          <motion.nav
            key="sticky-pill"
            className="fixed top-4 left-4 right-4 md:left-0 md:right-0 md:mx-auto md:w-fit z-50 rounded-full bg-white/50 backdrop-blur-xl border border-white/20 p-2 shadow-sm ring-1 ring-black/[0.03]"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between md:justify-center gap-4 px-2">
              {/* Sticky Logo */}
              <Link
                href="/"
                className="flex items-center gap-2"
              >
                <Image
                  src="/logo-p.webp"
                  alt="Afif Logo"
                  width={32}
                  height={32}
                  className="object-cover rounded-full"
                />
                <span className="font-semibold text-sm tracking-tight text-foreground">Afif Ramadhan</span>
                <svg viewBox="0 0 24 24" aria-label="Verified Account" className="w-4 h-4 text-blue-500 fill-current">
                  <g fillRule="evenodd">
                    <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.114-1.335.325C14.686 2.68 13.18 1.5 11.5 1.5c-1.7 0-3.2 1.16-3.937 2.327-.41-.212-.866-.33-1.337-.33-2.097 0-3.8 1.8-3.8 3.997 0 .495.084.965.238 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.58.875 2.95 2.147 3.6-.154.435-.238.9-.238 1.4 0 2.21 1.71 4 3.818 4 .47 0 .92-.114 1.335-.325.737 1.166 2.242 2.33 3.922 2.33 1.7 0 3.18-1.16 3.937-2.327.41.21.866.328 1.337.328 2.097 0 3.8-1.79 3.8-3.997 0-.495-.084-.965-.238-1.4 1.272-.65 2.147-2.018 2.147-3.6z" />
                    <path d="M10 16.5l-3.5-3.5 1.414-1.414L10 13.672l6.086-6.086 1.414 1.414z" fill="white" />
                  </g>
                </svg>
              </Link>

              {/* Sticky Nav Items (Desktop) */}
              <div className="hidden md:flex items-center gap-1 bg-black/[0.03] rounded-full p-1 border border-black/[0.03]">
                {centerNavItems.map((item) => {
                  const isActive = isLinkActive(item.href)
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onMouseEnter={() => setHoveredPath(item.href)}
                      onMouseLeave={() => setHoveredPath(null)}
                      className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-300 ${
                        isActive ? "text-foreground" : "text-foreground/70 hover:text-foreground"
                      }`}
                    >
                      {/* Background Indicator */}
                      {hoveredPath === item.href ? (
                        <motion.span
                          layoutId="navbar-indicator-pill"
                          className="absolute inset-0 bg-white border border-black/[0.03] rounded-full shadow-sm -z-10"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30
                          }}
                        />
                      ) : isActive && hoveredPath === null ? (
                        <motion.span
                          layoutId="navbar-indicator-pill"
                          className="absolute inset-0 bg-white border border-black/[0.03] rounded-full shadow-sm -z-10"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30
                          }}
                        />
                      ) : null}
                      
                      <span className="relative z-10">{item.name}</span>
                    </Link>
                  )
                })}
              </div>

              {/* Sticky Actions */}
              <div className="flex items-center gap-2">
                <Button 
                  asChild
                  size="sm" 
                  className="hidden md:inline-flex bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 text-white hover:opacity-90 hover:shadow-lg hover:shadow-blue-500/25 rounded-full px-4 h-9 shadow-md border-0 transition-all duration-300"
                >
                  <Link href="/contact">Get In Touch</Link>
                </Button>
                
                {/* Mobile Menu Toggle */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(!isOpen)}
                  className="md:hidden h-9 w-9 rounded-full bg-black/5 text-foreground"
                >
                  {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile Navigation Overlay - Global */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[60] md:hidden bg-background/60 backdrop-blur-xl flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {/* Close Button at top right */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-foreground hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col items-center gap-8 relative z-50">
              {centerNavItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors tracking-wide"
                >
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1, duration: 0.3 }}
                  >
                    {item.name}
                  </motion.span>
                </Link>
              ))}
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-8"
              >
                <Button 
                  asChild
                  className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 text-white hover:opacity-90 hover:shadow-lg hover:shadow-blue-500/25 rounded-full px-8 h-12 text-base transition-all duration-300 border-0"
                >
                  <Link href="/contact" onClick={() => setIsOpen(false)}>Get In Touch</Link>
                </Button>
              </motion.div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px]" />
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px]" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
