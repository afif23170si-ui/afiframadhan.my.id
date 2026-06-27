import Link from "next/link"
import { Github, Linkedin, Mail, Instagram } from "lucide-react"

const socialLinks = [
  { href: "https://www.instagram.com/aafif.r/", label: "Instagram" },
  { href: "https://github.com/afif23170si-ui", label: "GitHub" },
  { href: "https://www.linkedin.com/in/afifrmdhn/", label: "LinkedIn" },
]

const navLinks = [
  { name: "Home",     href: "/" },
  { name: "About",    href: "#about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact",  href: "/contact" },
]

export function Footer() {
  return (
    <footer className="bg-zinc-950 pt-12 pb-6 md:pt-16 md:pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-6 pb-12">
          
          {/* Left Block (Info) */}
          <div className="space-y-3">
            <div className="flex gap-2 text-[15px] md:text-base text-zinc-300">
              <span className="text-zinc-500 w-24">Email:</span>
              <a href="mailto:afifr5092@gmail.com" className="hover:text-white transition-colors">afifr5092@gmail.com</a>
            </div>
            <div className="flex gap-2 text-[15px] md:text-base text-zinc-300">
              <span className="text-zinc-500 w-24">Based in:</span>
              <span>Jakarta, WIB</span>
            </div>
            <div className="flex gap-2 text-[15px] md:text-base text-zinc-300">
              <span className="text-zinc-500 w-24 flex-shrink-0">Available for:</span>
              <span>Freelance Projects & Full-Time</span>
            </div>
          </div>

          {/* Right Block (Links) */}
          <div className="flex flex-row lg:justify-end gap-16 md:gap-24">
            
            {/* Pages */}
            <div className="space-y-4">
              <p className="text-sm font-medium text-zinc-500">Pages</p>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[15px] md:text-base text-zinc-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div className="space-y-4">
              <p className="text-sm font-medium text-zinc-500">Socials</p>
              <ul className="space-y-2">
                {socialLinks.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[15px] md:text-base text-zinc-300 hover:text-white transition-colors duration-200"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: "#18181b" }}>
          <p className="text-sm text-zinc-400">
            © {new Date().getFullYear()} Afif Ramadhan. All rights reserved
          </p>
          <div className="flex items-center gap-4">
            <p className="text-sm text-zinc-400">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
