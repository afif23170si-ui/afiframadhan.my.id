import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { motion } from "framer-motion"

const socialLinks = [
  { icon: Github, href: "https://github.com/afif23170si-ui", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/afifrmdhn/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:afifr5092@gmail.com.com", label: "Email" },
]

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container-custom">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            © 2025 Afif Ramadhan. Built with{" "}
            <Heart className="h-4 w-4 fill-red-500 text-red-500" /> and
            Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}
