import Link from "next/link"
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react"

const socialLinks = [
  { icon: Github,   href: "https://github.com/afif23170si-ui",         label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/afifrmdhn/",     label: "LinkedIn" },
  { icon: Mail,     href: "mailto:afifr5092@gmail.com",                 label: "Email" },
]

const navLinks = [
  { name: "Home",     href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Contact",  href: "/contact" },
]

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-zinc-950">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          
          {/* Brand */}
          <div className="space-y-3">
            <p
              className="text-sm font-bold font-heading tracking-tight"
              style={{ background: "linear-gradient(135deg, #8ba888, #c0cfb2)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              Afif Ramadhan
            </p>
            <p className="text-xs text-zinc-500 leading-relaxed max-w-[200px]">
              Full Stack Developer - building fast, clean & elegant web experiences.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">Navigation</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">Connect</p>
            <ul className="space-y-2">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors duration-200 group"
                  >
                    <s.icon className="w-3.5 h-3.5" />
                    {s.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[#44624a]/20 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} <span className="text-[#8ba888]/70">Afif Ramadhan</span>. All rights reserved.
          </p>
          <p className="text-xs text-zinc-600">
            Built with <span className="text-[#8ba888]/60">Next.js</span> & <span className="text-[#8ba888]/60">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
