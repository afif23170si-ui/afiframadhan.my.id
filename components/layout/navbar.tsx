"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/shared/theme-toggle"
import { Button } from "@/components/ui/button"
import Image from "next/image"



export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activePath, setActivePath] = useState("#hero")
  const [hoveredPath, setHoveredPath] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll Spy - Detect which section is currently in view
  useEffect(() => {
    const sectionIds = ["hero", "projects", "about", "experience"]
    
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // Trigger when section is in the middle of viewport
      threshold: 0
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActivePath(`#${entry.target.id}`)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  // Updated nav items as requested
  const centerNavItems = [
    { name: "Home", href: "#hero" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#experience" },
  ]

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
            <div className="container-custom">
              <div className="flex items-center justify-between gap-4">
                {/* Left: Logo */}
                <motion.a
                  href="#hero"
                  className="flex-shrink-0 w-[140px] flex items-center"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection("#hero")
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src="/logo-a.webp"
                    alt="Afif Logo"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </motion.a>

                {/* Center: Navigation */}
                <div className="hidden md:flex items-center justify-center flex-1">
                  <div className="flex items-center gap-2 lg:gap-4 p-1.5 border border-black/5 dark:border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
                    {centerNavItems.map((item) => {
                      const isActive = activePath === item.href
                      return (
                        <motion.a
                          key={item.name}
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault()
                            scrollToSection(item.href)
                            setActivePath(item.href)
                          }}
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
                              className="absolute inset-0 bg-secondary/80 border border-black/5 dark:border-white/10 rounded-full -z-10"
                              transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30
                              }}
                            />
                          ) : isActive && hoveredPath === null ? (
                            <motion.span
                              layoutId="navbar-indicator-top"
                              className="absolute inset-0 bg-secondary/80 border border-black/5 dark:border-white/10 rounded-full -z-10"
                              transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30
                              }}
                            />
                          ) : null}
                          
                          <span className="relative z-10">{item.name}</span>
                        </motion.a>
                      )
                    })}
                  </div>
                </div>

                {/* Right: Actions */}
                <div className="hidden md:flex items-center justify-end gap-4 min-w-fit">
                  <ThemeToggle />
                  
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full px-6 h-12 shadow-lg shadow-blue-500/25 transition-all duration-300"
                    onClick={() => scrollToSection("#contact")}
                  >
                    Get In Touch
                  </Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden items-center gap-2 relative z-50">
                  <ThemeToggle />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative h-10 w-10 border border-black/5 dark:border-white/10 rounded-full bg-white/5 backdrop-blur-sm"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                  >
                    {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                  </Button>
                </div>
              </div>
              
                {/* Mobile Navigation Overlay */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className="fixed inset-0 z-40 md:hidden bg-background/60 backdrop-blur-xl flex flex-col items-center justify-center"
                      initial={{ opacity: 0, y: "100%" }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: "100%" }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className="flex flex-col items-center gap-8 relative z-50">
                        {centerNavItems.map((item, index) => (
                          <motion.a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => {
                              e.preventDefault()
                              scrollToSection(item.href)
                            }}
                            className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors tracking-wide"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + index * 0.1, duration: 0.3 }}
                          >
                            {item.name}
                          </motion.a>
                        ))}
                        
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5, duration: 0.4 }}
                          className="mt-8"
                        >
                          <Button 
                            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full px-8 h-12 text-base shadow-lg shadow-blue-500/25"
                            onClick={() => {
                              scrollToSection("#contact")
                            }}
                          >
                            Get In Touch
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
            </div>
          </motion.nav>
        ) : (
          <motion.nav
            key="sticky-pill"
            className="fixed top-4 left-0 right-0 mx-auto z-50 w-fit rounded-full bg-[var(--sticky-nav-bg)] backdrop-blur-md shadow-lg border border-[var(--sticky-nav-border)] px-1 py-1"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-2 lg:gap-4 p-1.5">
                {centerNavItems.map((item) => {
                  const isActive = activePath === item.href
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection(item.href)
                        setActivePath(item.href)
                      }}
                      onMouseEnter={() => setHoveredPath(item.href)}
                      onMouseLeave={() => setHoveredPath(null)}
                      className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                        isActive ? "text-foreground" : "text-foreground/70 hover:text-foreground"
                      }`}
                    >
                      {/* Background Indicator */}
                      {hoveredPath === item.href ? (
                        <motion.span
                          layoutId="navbar-indicator-pill"
                          className="absolute inset-0 bg-secondary/80 border border-black/5 dark:border-white/10 rounded-full -z-10"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30
                          }}
                        />
                      ) : isActive && hoveredPath === null ? (
                        <motion.span
                          layoutId="navbar-indicator-pill"
                          className="absolute inset-0 bg-secondary/80 border border-black/5 dark:border-white/10 rounded-full -z-10"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30
                          }}
                        />
                      ) : null}
                      
                      <span className="relative z-10">{item.name}</span>
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
