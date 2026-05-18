import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Services } from "@/components/sections/services"
import { Projects } from "@/components/sections/projects"
import { Experience } from "@/components/sections/experience"
import { Contact } from "@/components/sections/contact"
import { ImageStrip } from "@/components/sections/image-strip"

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <ImageStrip />
        <About />
        <Services />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

