"use client"

import { useState, useEffect } from "react"
import Lottie from "lottie-react"
import { Home } from "lucide-react"
import workInProgressAnimation from "../../assets/workInProgress.json"

export default function WorkInProgress() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="w-64 h-64 mx-auto mb-8">
          <Lottie animationData={workInProgressAnimation} loop={true} />
        </div>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          We're Still Working On It
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Our team is putting the finishing touches on this page. Check back soon for something amazing!
        </p>
        <a
          href="/"
          className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
        >
          <Home className="mr-2" size={20} />
          Back to Home
        </a>
      </div>
    </div>
  )
}

