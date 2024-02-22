import { TailwindIndicator } from "@/components/tailwind-indicator"

import "./globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Background Snippets - Tailwind CSS, React, and TypeScript Snippets",
  description:
    "Ready to use, simple copy and paste in to your project. All snippets crafted with love and care.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          <TailwindIndicator />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
