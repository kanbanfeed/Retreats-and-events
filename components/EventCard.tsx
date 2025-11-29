'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface EventCardProps {
  id: number
  name: string
  description: string
  location: string
  date: string
  image: string
  isElite?: boolean
  onViewDetails: () => void
}

export default function EventCard({
  name,
  description,
  location,
  date,
  image,
  isElite = false,
  onViewDetails,
}: EventCardProps) {
  const categoryWord = name.split(' ')[0]

  // --- DYNAMIC COUNTDOWN LOGIC ---
  // Setting a fake target date (4 days from now) for demo purposes so it always "ticks"
  const [timeLeft, setTimeLeft] = useState({ days: 4, hours: 12, minutes: 45, seconds: 12 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 }
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        return prev // expired
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Format numbers to always have 2 digits (e.g., 09)
  const f = (n: number) => n.toString().padStart(2, '0')

  return (
    <motion.div
      className="group bg-white rounded-[2rem] border border-slate-100 overflow-hidden hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] transition-all duration-500 h-full flex flex-col cursor-pointer relative"
      whileHover={{ y: -8 }}
      onClick={onViewDetails}
    >
      {/* --- BIGGER ELITE BADGE --- */}
      {isElite && (
        <div className="absolute top-0 right-0 z-40">
          <div className="bg-slate-900 text-amber-400 text-xs font-black uppercase tracking-widest py-3 px-6 rounded-bl-3xl shadow-xl flex items-center gap-2 border-b-2 border-l-2 border-white">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            ELITE ONLY
          </div>
        </div>
      )}

      {/* HEADER */}
      <div className="relative h-80 overflow-hidden bg-slate-50 flex flex-col justify-end p-8">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 via-indigo-50 to-white opacity-90 transition-transform duration-700 group-hover:scale-105" />
        
        {/* Decorative Circle */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        {/* Watermark */}
        <div className="absolute -top-6 -right-6 text-9xl font-black text-slate-900/5 select-none pointer-events-none uppercase tracking-tighter">
          {categoryWord}
        </div>

        {/* Date Tag */}
        <div className="absolute top-6 left-6 z-20">
          <span className="inline-flex items-center justify-center px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl text-xs font-bold text-slate-900 shadow-md border border-white/60">
            📅 {date}
          </span>
        </div>

        {/* --- DYNAMIC COUNTDOWN (High Visibility) --- */}
        <div className="absolute bottom-6 right-6 z-30">
          <div className="flex items-center gap-3 bg-white border border-slate-100 rounded-xl px-4 py-2 shadow-lg hover:scale-105 transition-transform">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <div className="flex flex-col items-start leading-none">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Time Left</span>
                <span className="text-xs font-mono font-bold text-slate-900 tabular-nums tracking-wide">
                {f(timeLeft.days)}d : {f(timeLeft.hours)}h : {f(timeLeft.minutes)}m : {f(timeLeft.seconds)}s
                </span>
            </div>
          </div>
        </div>

        {/* Title Section */}
        <div className="relative z-10 pr-2 max-w-[70%]">
           <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-widest mb-3">
             <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
             {location}
           </div>
           
           <h3 className="text-3xl font-extrabold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors duration-300 drop-shadow-sm">
            {name}
          </h3>
        </div>
      </div>

      {/* BODY */}
      <div className="p-8 flex flex-col flex-grow bg-white relative border-t border-slate-50">
        <p className="text-slate-500 text-base leading-relaxed mb-6 line-clamp-2 font-medium">
          {description}
        </p>

        {/* Footer Action */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
            
            {/* PRE-BOOK OPTION */}
            <div className="flex flex-col group/book">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 group-hover/book:text-slate-600 transition-colors">
                  Reserve Spot
              </span>
              <div className="flex items-center gap-2 text-blue-600">
                 <span className="bg-amber-100 text-amber-700 text-[10px] font-black px-2 py-0.5 rounded border border-amber-200 shadow-sm">
                    ⚡ 1 CREDIT
                 </span>
                 <span className="text-xs font-bold group-hover/book:underline">Pre-book Now</span>
              </div>
            </div>

            {/* Arrow Button */}
            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm border border-slate-100">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </div>
        </div>
      </div>
    </motion.div>
  )
}