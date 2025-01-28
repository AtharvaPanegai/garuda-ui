import React from "react"
import { X, PartyPopper, ChevronRight } from "lucide-react"
import { Button } from "../ui/button"

export function BetaBanner({ onClose }) {
  return (
    <div className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center flex-1 min-w-0">
            <span className="flex p-2 rounded-lg bg-purple-800">
              <PartyPopper className="h-6 w-6 text-purple-300" aria-hidden="true" />
            </span>
            <div className="ml-3 font-medium">
              <p className="text-lg">
                <span className="md:hidden">We're in public beta! 🎉</span>
                <span className="hidden md:inline">
                  Exciting news! We've launched our public beta. Join the celebration! 🎉
                </span>
              </p>
              <p className="text-sm text-purple-200 mt-1 hidden sm:block">
                Experience cutting-edge API monitoring. Your feedback shapes our future!
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/beta-features"
              className="text-sm font-medium text-purple-100 hover:text-white transition-colors flex items-center"
            >
              Explore Beta Features
              <ChevronRight className="ml-1 h-4 w-4" />
            </a>
            <Button
              onClick={onClose}
              variant="outline"
              size="sm"
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-purple-600 bg-white hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-800 focus:ring-white"
            >
              Dismiss
              <X className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

