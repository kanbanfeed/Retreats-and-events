'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Logo from '@/components/Logo'
import LoginButton from '@/components/LoginButton'
import MobileMenu from '@/components/MobileMenu'
import Footer from '@/components/Footer'

export default function Host() {
  return (
    <main className="min-h-screen relative bg-white">
      
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/"><Logo /></Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/upcoming-retreats" className="text-slate-700 hover:text-blue-600 font-bold text-sm tracking-wide">Retreats</Link>
            <Link href="/experience" className="text-slate-700 hover:text-blue-600 font-bold text-sm tracking-wide">Experience</Link>
            <Link href="/host" className="text-blue-600 font-bold text-sm tracking-wide">Partner / Host</Link>
            <LoginButton />
          </div>
          <MobileMenu />
        </div>
      </nav>

      <div className="grid md:grid-cols-2 min-h-screen">
        <div className="pt-32 pb-20 px-8 md:px-20 flex flex-col justify-center bg-slate-50">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <span className="text-blue-600 font-black tracking-widest uppercase text-xs mb-4 block">Crowbar for Partners</span>
                <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                    Host Your Next Retreat with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Crowbar.</span>
                </h1>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-md">
                    Are you a venue owner, yoga instructor, or business coach? Leverage our technology, marketing, and community to fill your events.
                </p>

                <div className="space-y-6 mb-10">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-2xl">📢</div>
                        <div>
                            <h3 className="font-bold text-slate-900">Access our Community</h3>
                            <p className="text-sm text-slate-500">Market directly to 50,000+ founders and tech professionals.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-2xl">💳</div>
                        <div>
                            <h3 className="font-bold text-slate-900">Seamless Payments</h3>
                            <p className="text-sm text-slate-500">We handle ticketing, credits, and refunds. You focus on the experience.</p>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4">
                    <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all">
                        Apply to Host
                    </button>
                    <button className="px-8 py-4 bg-white text-slate-900 border border-slate-200 font-bold rounded-xl hover:bg-slate-100 transition-all">
                        View Case Studies
                    </button>
                </div>
            </motion.div>
        </div>

        <div className="hidden md:block relative bg-slate-900 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-900" />
            <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/10 max-w-sm">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-white" />
                        <div>
                            <div className="h-2 w-24 bg-white/50 rounded mb-2" />
                            <div className="h-2 w-16 bg-white/30 rounded" />
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="h-2 w-full bg-white/20 rounded" />
                        <div className="h-2 w-full bg-white/20 rounded" />
                        <div className="h-2 w-2/3 bg-white/20 rounded" />
                    </div>
                    <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center">
                        <span className="text-white font-bold">Total Revenue</span>
                        <span className="text-green-400 font-mono font-bold">+$12,450</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}