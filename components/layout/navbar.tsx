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
            className="absolute top-0 left-0 right-0 z-50 border-b border-black/[0.01] dark:border-white/[0.01] bg-transparent py-2"
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
                    src="/logo-a.png"
                    alt="Afif Logo"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </motion.a>

                {/* Center: Navigation */}
                <div className="hidden md:flex items-center justify-center flex-1">
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
                <div className="hidden md:flex items-center justify-end gap-4 w-[140px]">
                  <ThemeToggle />
                  
                  <Button 
                    size="sm" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => scrollToSection("#contact")}
                  >
                    Contact
                  </Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden items-center gap-2">
                  <ThemeToggle />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative h-10 w-10"
                  >
                    {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                  </Button>
                </div>
              </div>
              
              {/* Mobile Navigation */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    className="md:hidden glass-strong mt-2 rounded-2xl p-4 shadow-2xl border-none"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col gap-2">
                      {centerNavItems.map((item) => (
                        <motion.a
                          key={item.name}
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault()
                            scrollToSection(item.href)
                          }}
                          className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-3 px-4 rounded-lg hover:bg-muted/50 min-h-[48px] flex items-center"
                          whileHover={{ x: 10 }}
                        >
                          {item.name}
                        </motion.a>
                      ))}
                      <div className="h-px bg-border/50 my-2" />
                      <div className="flex items-center justify-between px-4 py-2">
                        <span className="text-sm font-medium text-muted-foreground">Follow me</span>
                        <a 
                          href="https://github.com" 
                          target="_blank" 
                          rel="noreferrer"
                          className="text-foreground/70 hover:text-foreground transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                          </svg>
                        </a>
                      </div>
                      <Button className="w-full mt-2">Contact Me</Button>
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
