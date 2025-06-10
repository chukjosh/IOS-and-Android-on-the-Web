import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AppStateProvider } from "@/lib/app-state"
import { AndroidAppStateProvider } from "@/lib/android-app-state"
import { Providers } from "./providers"
import { WallpaperProvider } from "@/lib/wallpaper-state"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mobile Interface Showcase",
  description: "Interactive iOS and Android interfaces built with Next.js and Tailwind CSS",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <WallpaperProvider>
            <AppStateProvider>
              <AndroidAppStateProvider>{children}</AndroidAppStateProvider>
            </AppStateProvider>
          </WallpaperProvider>
        </Providers>
      </body>
    </html>
  )
}
