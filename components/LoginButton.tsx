'use client'

import { motion } from 'framer-motion'
import { useAuth } from './AuthProvider'

export default function LoginButton() {
  const { user, login, logout, loading } = useAuth()

  if (loading) return null // Don't show anything while checking

  // --- LOGGED IN STATE (Profile Pill) ---
  if (user) {
    const initials = user.email ? user.email.substring(0, 2).toUpperCase() : 'ME'
    
    return (
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-white/50 px-2 py-1.5 rounded-full border border-slate-200 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-md">
                {initials}
            </div>
            <span className="text-sm font-bold text-slate-700 pr-2 hidden lg:block">
                {user.email.split('@')[0]}
            </span>
        </div>
        <button 
            onClick={logout}
            className="text-xs font-bold text-red-500 hover:text-red-600 uppercase tracking-wider"
        >
            Logout
        </button>
      </div>
    )
  }

  // --- LOGGED OUT STATE (Standard Button) ---
  return (
    <motion.button
      onClick={login}
      className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/30 flex items-center gap-2"
      whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(249, 115, 22, 0.4)' }}
      whileTap={{ scale: 0.95 }}
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
      </svg>
      <span>Login with Crowbar</span>
    </motion.button>
  )
}