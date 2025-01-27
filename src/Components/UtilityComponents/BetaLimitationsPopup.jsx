import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog"
import { Button } from "../ui/button"

export function BetaLimitationsPopup({ onClose }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenBetaPopup')
    if (!hasSeenPopup) {
      setIsOpen(true)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem('hasSeenBetaPopup', 'true')
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px] bg-gray-900 text-white border border-purple-500">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-purple-400">Welcome to Our Beta!</DialogTitle>
          {/* <Button
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-gray-900 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-800"
            onClick={handleClose}
          > */}
            {/* <X className="h-4 w-4" /> */}
            {/* <span className="sr-only">Close</span> */}
          {/* </Button> */}
        </DialogHeader>
        <DialogDescription className="text-gray-300">
          <p className="mb-4">
            We're excited to have you on board during our beta phase! Please note the following limitations:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>You can create a maximum of 2 projects</li>
            <li>Each project can monitor up to 5 API endpoints</li>
          </ul>
          <p className="mt-4">
            We appreciate your understanding and feedback as we work to improve our service.
          </p>
        </DialogDescription>
        <Button onClick={handleClose} className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white">
          Got it, thanks!
        </Button>
      </DialogContent>
    </Dialog>
  )
}
