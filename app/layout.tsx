import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Afif Ramadhan | Full Stack Developer",
  description: "Full Stack Developer specializing in modern web applications with strong UI/UX sense. Building digital experiences that matter.",
  keywords: ["Full Stack Developer", "UI/UX Design", "Web Development", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Afif Ramadhan" }],
  openGraph: {
    title: "Afif Ramadhan | Full Stack Developer",
    description: "Building digital experiences that matter.",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={`${inter.variable} ${jakarta.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >

          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
