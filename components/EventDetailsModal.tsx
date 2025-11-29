'use client'

import { motion, AnimatePresence } from 'framer-motion'
import LoginButton from './LoginButton'

interface EventDetailsModalProps {
  isOpen: boolean
  onClose: () => void
  event: {
    name: string
    description: string
    location: string
    date: string
    image: string
    isElite?: boolean // Added Prop
  } | null
}

export default function EventDetailsModal({ isOpen, onClose, event }: EventDetailsModalProps) {
  if (!event) return null

  const price = 499; 

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50"
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col md:flex-row max-h-[90vh]"
            >
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 z-20 md:hidden p-2 bg-white/50 backdrop-blur rounded-full"
              >
                ✕
              </button>

              {/* Left Side: Image Area */}
              <div className="w-full md:w-2/5 relative h-56 md:h-auto bg-slate-900">
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900" />
                 
                 {/* COUNTDOWN PLACEHOLDER */}
                 <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                    <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-lg px-3 py-1.5 text-white text-xs font-mono font-bold tracking-widest flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"/>
                        STARTS IN: 04d 12h 30m
                    </div>
                 </div>

                 {/* Image Overlay Info */}
                 <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex gap-2 mb-2">
                        <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold border border-white/20">
                            {event.date}
                        </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-blue-100">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        {event.location}
                    </div>
                 </div>
              </div>

              {/* Right Side: Content Area */}
              <div className="w-full md:w-3/5 p-6 md:p-10 overflow-y-auto bg-white relative flex flex-col">
                <button 
                    onClick={onClose}
                    className="hidden md:block absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                {/* Title + Elite Badge */}
                <div className="pr-8 mb-2">
                    {event.isElite && (
                        <span className="inline-block bg-slate-900 text-amber-400 text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md mb-2">
                            👑 Elite Member Only
                        </span>
                    )}
                    <h2 className="text-3xl font-bold text-slate-900">{event.name}</h2>
                </div>

                <div className="mb-6 flex items-center gap-2">
                   <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wide border border-blue-100">
                     Open for Registration
                   </span>
                </div>
                
                <div className="prose prose-slate max-w-none mb-8">
                    <h3 className="text-lg font-semibold text-blue-600 mb-2">About the Experience</h3>
                    <p className="text-slate-600 leading-relaxed text-lg">{event.description}</p>
                </div>

                {/* Footer / Pricing Section */}
                <div className="mt-auto border-t border-slate-100 pt-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div>
                            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">Standard Price</p>
                            <div className="flex items-center gap-3">
                                <span className="text-3xl font-extrabold text-slate-900 tracking-tight">
                                    ${price.toLocaleString()}
                                </span>
                                <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded-full flex items-center gap-1 border border-amber-200">
                                    <svg className="w-3 h-3 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg>
                                    {price.toLocaleString()} credits
                                </span>
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-2 w-full sm:w-auto">
                            <LoginButton />
                            
                            {/* PRE-BOOK FOR 1 CREDIT - STATIC PLACEHOLDER */}
                            <button className="text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline text-center py-2">
                                Or Pre-book for 1 Credit →
                            </button>
                        </div>
                    </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}