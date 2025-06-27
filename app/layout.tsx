import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Edu_NSW_ACT_Foundation } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

const eduHand = Edu_NSW_ACT_Foundation({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-edu-hand", // ✅ Injects as CSS variable
})

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My professional portfolio",
  keywords: [
    "portfolio",
    "web developer",
    "developer showcase",
    "Yenghoua Vue",
  ],
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={eduHand.variable} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
