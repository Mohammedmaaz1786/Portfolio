import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "./components/ThemeProvider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Mohammed Maaz - AI/ML & Software Developer Undergraduate",
  description:
    "Aspiring AI & ML Engineer with expertise in deep learning, computer vision, and intelligent automation. Passionate about building innovative technology solutions.",
  keywords:
    "Mohammed Maaz, AI Engineer, ML Engineer, Software Developer, Deep Learning, Computer Vision, Python, TensorFlow",
  authors: [{ name: "Mohammed Maaz" }],
  creator: "Mohammed Maaz",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mohammedmaaz.dev",
    title: "Mohammed Maaz - AI/ML Engineer & Software Developer",
    description:
      "Aspiring AI & ML Engineer with expertise in deep learning, computer vision, and intelligent automation.",
    siteName: "Mohammed Maaz Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Maaz - AI/ML Engineer & Software Developer",
    description:
      "Aspiring AI & ML Engineer with expertise in deep learning, computer vision, and intelligent automation.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-inter antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
