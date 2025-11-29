'use client'

import { motion } from 'framer-motion'

export default function LoginButton() {
  return (
    <motion.button
      className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/30 flex items-center gap-2"
      whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(249, 115, 22, 0.4)' }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Crown Icon */}
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
      </svg>
      <span>Login with Crowbar</span>
    </motion.button>
  )
}

