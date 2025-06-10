"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Smartphone, TabletSmartphone } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900 dark:via-indigo-950 dark:to-purple-900 flex items-center justify-center p-4">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Mobile Interface Showcase
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12">
          Experience interactive iOS and Android interfaces built with modern web technologies
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <Link href="/ios">
            <Button
              size="lg"
              className="w-full h-32 flex flex-col gap-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
            >
              <Smartphone className="h-8 w-8" />
              <div>
                <div className="text-lg font-semibold">iOS Interface</div>
                <div className="text-sm opacity-90">iPhone-style experience</div>
              </div>
            </Button>
          </Link>

          <Link href="/android">
            <Button
              size="lg"
              className="w-full h-32 flex flex-col gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
            >
              <TabletSmartphone className="h-8 w-8" />
              <div>
                <div className="text-lg font-semibold">Android Interface</div>
                <div className="text-sm opacity-90">Material Design experience</div>
              </div>
            </Button>
          </Link>
        </div>

        <div className="mt-12 text-sm text-gray-500 dark:text-gray-400">
          Built with Next.js, Tailwind CSS, and Framer Motion
        </div>
      </div>
    </div>
  )
}
