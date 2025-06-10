"use client"

import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { AndroidLockScreen } from "@/components/android/android-lock-screen"
import { AndroidHomeScreen } from "@/components/android/android-home-screen"
import { AndroidAppView } from "@/components/android/android-app-view"
import { AndroidNotificationPanel } from "@/components/android/android-notification-panel"
import { AndroidWallpaperSwitcher } from "@/components/android/android-wallpaper-switcher"
import { useAndroidAppState } from "@/lib/android-app-state"
import { AndroidFrame } from "@/components/android/android-frame"
import { MoonIcon, SunIcon, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import Link from "next/link"

export default function AndroidInterface() {
  const { currentApp, isLocked } = useAndroidAppState()
  const [time, setTime] = useState(new Date())
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 transition-all duration-500 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950">
      {/* Top Controls */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
        {/* Back to Home Button */}
        <Link href="/">
          <Button variant="outline" size="icon" className="rounded-full">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back to home</span>
          </Button>
        </Link>

        <div className="flex items-center gap-2">
          {/* Wallpaper Switcher */}
          <AndroidWallpaperSwitcher />

          {/* Theme toggle */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full"
          >
            {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>

      {/* Android frame */}
      <AndroidFrame>
        <div className="relative h-full overflow-hidden">
          <AnimatePresence mode="wait">
            {isLocked ? (
              <motion.div
                key="lock-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <AndroidLockScreen time={time} />
              </motion.div>
            ) : currentApp ? (
              <motion.div
                key={`app-${currentApp}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0"
              >
                <AndroidAppView appId={currentApp} time={time} />
              </motion.div>
            ) : (
              <motion.div
                key="home-screen"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <AndroidHomeScreen time={time} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Notification Panel */}
          <AndroidNotificationPanel time={time} />
        </div>
      </AndroidFrame>
    </div>
  )
}
