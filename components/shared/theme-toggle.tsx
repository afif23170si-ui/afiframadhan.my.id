"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="h-10 w-10 rounded-full border border-black/5 dark:border-white/10 bg-white/5 backdrop-blur-sm" />
    )
  }

  const isDark = theme === "dark"

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative h-10 w-10 rounded-full border border-black/5 dark:border-white/10 bg-white/5 backdrop-blur-sm hover:bg-black/5 dark:hover:bg-white/10 overflow-hidden"
    >
      <div className="relative h-5 w-5">
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 0 : 1,
            rotate: isDark ? -90 : 0,
            opacity: isDark ? 0 : 1,
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center text-orange-500"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] fill-current" />
        </motion.div>
        
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 1 : 0,
            rotate: isDark ? 0 : 90,
            opacity: isDark ? 1 : 0,
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center text-blue-400"
        >
          <Moon className="h-[1.2rem] w-[1.2rem] fill-current" />
        </motion.div>
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
