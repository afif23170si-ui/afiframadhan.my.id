import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { MatchaCursor } from "@/components/shared/matcha-cursor";
import { ScrollUtils } from "@/components/shared/scroll-utils";
import Image from "next/image";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://afiframadhan.my.id";

export const metadata: Metadata = {
  // Core metadata
  title: {
    default: "Afif Ramadhan | Full Stack Developer",
    template: "%s | Afif Ramadhan",
  },
  
  // Icons — from favicon.io generator
  icons: {
    icon: [
      { url: "/favicon.ico",        sizes: "any" },
      { url: "/favicon-16x16.png",  sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png",  sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
  description: "Afif Ramadhan - Full Stack Developer specializing in modern web applications with strong UI/UX sense. Expert in React, Next.js, Laravel, and TypeScript. Building digital experiences that matter.",
  keywords: [
    "Afif Ramadhan",
    "Afif Framadhan",
    "Full Stack Developer",
    "Full Stack Developer Indonesia",
    "Full Stack Developer Yogyakarta",
    "Web Developer Indonesia",
    "Web Developer Freelance",
    "Jasa Pembuatan Website",
    "Jasa Web Developer",
    "UI/UX Designer Indonesia",
    "React Developer",
    "Next.js Developer",
    "Laravel Developer",
    "TypeScript",
    "JavaScript",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio Developer Indonesia",
    "Programmer Indonesia",
    "AI Automation Developer",
  ],
  authors: [{ name: "Afif Ramadhan", url: siteUrl }],
  creator: "Afif Ramadhan",
  publisher: "Afif Ramadhan",
  
  // Canonical URL
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Afif Ramadhan Portfolio",
    title: "Afif Ramadhan | Full Stack Developer",
    description: "Full Stack Developer specializing in modern web applications. Building digital experiences that matter.",
    images: [
      {
        url: `${siteUrl}/logo-a.png`,
        width: 1200,
        height: 630,
        alt: "Afif Ramadhan - Full Stack Developer",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Afif Ramadhan | Full Stack Developer",
    description: "Full Stack Developer specializing in modern web applications. Building digital experiences that matter.",
    images: [`${siteUrl}/logo-a.png`],
    creator: "@afiframadhan",
  },

  // Category
  category: "technology",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Afif Ramadhan",
  alternateName: ["Afif Framadhan", "Afif"],
  url: siteUrl,
  image: `${siteUrl}/images/profil1.webp`,
  jobTitle: "Full Stack Developer",
  description: "Full Stack Developer from Indonesia specializing in modern web applications with strong UI/UX sense.",
  email: "afifr5092@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "ID",
    addressRegion: "Indonesia",
  },
  sameAs: [
    "https://github.com/afif23170si-ui",
    "https://www.linkedin.com/in/afifrmdhn/",
    "https://www.instagram.com/aafif.r/",
  ],
  knowsAbout: [
    "Web Development",
    "Full Stack Development",
    "React",
    "Next.js",
    "Laravel",
    "TypeScript",
    "JavaScript",
    "PHP",
    "UI/UX Design",
    "AI Automation",
    "n8n",
    "REST API",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jakarta.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <div className="fixed inset-0 z-[-1] w-full h-full pointer-events-none">
            {/* Mobile background — priority karena di atas fold */}
            <Image
              src="/images/background-hero-m.webp"
              alt=""
              fill
              priority
              quality={80}
              className="object-cover object-top opacity-80 md:hidden"
              sizes="100vw"
              aria-hidden="true"
            />
            {/* Desktop background — only visible md+, still priority for LCP */}
            <Image
              src="/images/background-hero-d.webp"
              alt=""
              fill
              priority
              quality={80}
              className="object-cover object-center opacity-80 hidden md:block"
              sizes="100vw"
              aria-hidden="true"
            />
            {/* Fade out background image after hero — only hero benefits from it */}
            <div className="absolute inset-x-0 bottom-0 h-[55vh] bg-gradient-to-t from-zinc-950 via-zinc-950/95 to-transparent" />
          </div>
          {children}
          <MatchaCursor />
          <ScrollUtils />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
