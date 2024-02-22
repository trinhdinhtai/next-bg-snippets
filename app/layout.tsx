import { TailwindIndicator } from "@/components/tailwind-indicator"

import "./globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ready to use background snippets for web developers.",
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
        {children}
        <TailwindIndicator />
      </body>
    </html>
  )
}
