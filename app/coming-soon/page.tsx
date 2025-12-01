'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Logo from '@/components/Logo'
import Footer from '@/components/Footer'
import BubblesBackground from '@/components/BubblesBackground'

export default function ComingSoon() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-slate-50 flex flex-col">
      {/* Background Animation */}
      <BubblesBackground />

      {/* Simple Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4">
          <Link href="/"><Logo /></Link>
        </div>
      </nav>

      {/* Main Content */}
      <section className="flex-grow flex items-center justify-center relative z-10 px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl w-full bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-12 border border-white shadow-2xl text-center"
        >
          <div className="inline-block p-4 rounded-full bg-blue-50 mb-6">
            <span className="text-4xl">🚀</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            We're Building <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Something Amazing.</span>
          </h1>
          
          <p className="text-xl text-slate-500 mb-10 leading-relaxed">
            This feature is currently in the works. We are crafting a premium experience just for you. Stay tuned!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="px-8 py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Back to Home
            </Link>
            <Link 
              href="/upcoming-retreats"
              className="px-8 py-4 rounded-xl bg-white text-slate-700 font-bold border border-slate-200 hover:bg-slate-50 transition-all hover:-translate-y-1"
            >
              Browse Retreats
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}