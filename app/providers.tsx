"use client"

import type React from "react"

import { ThemeProvider } from "@/components/theme-provider"
import { AppStateProvider } from "@/lib/app-state"
import { AndroidAppStateProvider } from "@/lib/android-app-state"
import { AndroidWallpaperProvider } from "@/lib/android-wallpaper-state"
import { WallpaperProvider } from "@/lib/wallpaper-state"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <WallpaperProvider>
        <AndroidWallpaperProvider>
          <AppStateProvider>
            <AndroidAppStateProvider>{children}</AndroidAppStateProvider>
          </AppStateProvider>
        </AndroidWallpaperProvider>
      </WallpaperProvider>
    </ThemeProvider>
  )
}
