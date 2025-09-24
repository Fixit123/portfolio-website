import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "AHMED OLAYINKA - Full-Stack Web Developer",
  description:
    "Professional portfolio of a full-stack web developer with 3+ years experience in React, Next.js, Supabase, and modern web technologies.",
  generator: "v0.app",
  keywords: ["web developer", "full-stack", "React", "Next.js", "Supabase", "TypeScript"],
  authors: [{ name: "AHMED OLAYINKA" }],
  openGraph: {
    title: "AHMED OLAYINKA - Full-Stack Web Developer",
    description: "Professional portfolio showcasing modern web development projects and expertise.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
