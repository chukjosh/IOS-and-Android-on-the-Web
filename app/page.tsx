"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Smartphone, TabletSmartphone } from "lucide-react"
import { motion } from "framer-motion"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto"
      >
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent"
        >
          Mobile Interface Showcase
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12"
        >
          Experience interactive iOS and Android interfaces built with modern web technologies
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/ios">
              <Button
                size="lg"
                className="w-full h-36 flex flex-col gap-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Smartphone className="h-10 w-10" />
                <div>
                  <div className="text-xl font-semibold">iOS Interface</div>
                  <div className="text-sm opacity-90">iPhone-style experience</div>
                </div>
              </Button>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/android">
              <Button
                size="lg"
                className="w-full h-36 flex flex-col gap-3 bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:via-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <TabletSmartphone className="h-10 w-10" />
                <div>
                  <div className="text-xl font-semibold">Android Interface</div>
                  <div className="text-sm opacity-90">Material Design experience</div>
                </div>
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-sm text-gray-500 dark:text-gray-400"
        >
          Built with Next.js, Tailwind CSS, and Framer Motion
        </motion.div>
      </motion.div>
    </div>
  )
}
