import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

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

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
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
  
  // Icons - untuk memastikan Google dan browser mendeteksi favicon
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  description: "Afif Ramadhan - Full Stack Developer specializing in modern web applications with strong UI/UX sense. Expert in React, Next.js, Laravel, and TypeScript. Building digital experiences that matter.",
  keywords: [
    "Afif Ramadhan",
    "Afif Framadhan",
    "Full Stack Developer",
    "Full Stack Developer Indonesia",
    "Web Developer",
    "UI/UX Designer",
    "React Developer",
    "Next.js Developer",
    "Laravel Developer",
    "TypeScript",
    "JavaScript",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
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
        url: `${siteUrl}/logo-a-original.png`,
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
    images: [`${siteUrl}/logo-a-original.png`],
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
  image: `${siteUrl}/logo-a-original.png`,
  jobTitle: "Full Stack Developer",
  description: "Full Stack Developer specializing in modern web applications with strong UI/UX sense.",
  sameAs: [
    "https://github.com/afif23170si-ui",
    "https://www.linkedin.com/in/afifrmdhn/",
  ],
  knowsAbout: [
    "Web Development",
    "React",
    "Next.js",
    "Laravel",
    "TypeScript",
    "JavaScript",
    "UI/UX Design",
    "Full Stack Development",
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
        className={`${inter.variable} ${jakarta.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
        >

          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
