'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative z-10 bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left Side - Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Crowbar Retreats & Events</h3>
            <p className="text-gray-400 text-sm md:text-base">
              Smart retreat experiences, transparent pricing.
            </p>
          </div>

          {/* Right Side - Network Info */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm mb-1">
              Part of the{' '}
              <span className="text-yellow-400 font-semibold">Crowbar Connected Network</span>
            </p>
            <p className="text-gray-500 text-xs mt-2">
              © 2025 Crowbar Retreats & Events. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}


