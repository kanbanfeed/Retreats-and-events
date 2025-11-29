'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import LoginButton from './LoginButton'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <motion.button
        className="p-2 rounded-lg glass-effect"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.95 }}
      >
        <svg
          className="w-6 h-6 text-slate-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 mx-4 glass-effect rounded-xl p-6 z-50"
          >
            <div className="flex flex-col space-y-4">
              <Link 
                href="/"
                className="text-slate-700 hover:text-purple-600 transition-colors py-2 font-medium block"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/upcoming-retreats"
                className="text-slate-700 hover:text-purple-600 transition-colors py-2 font-medium block"
                onClick={() => setIsOpen(false)}
              >
                Upcoming Retreats
              </Link>
              <Link 
                href="/#benefits"
                className="text-slate-700 hover:text-purple-600 transition-colors py-2 font-medium block"
                onClick={() => setIsOpen(false)}
              >
                Benefits
              </Link>
              <Link 
                href="/#testimonials"
                className="text-slate-700 hover:text-purple-600 transition-colors py-2 font-medium block"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </Link>
              <div onClick={() => setIsOpen(false)}>
                <LoginButton />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

