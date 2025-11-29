'use client'

import { motion } from 'framer-motion'

interface EventCardProps {
  id: number
  name: string
  description: string
  location: string
  date: string
  image: string
  onViewDetails: () => void
}

export default function EventCard({
  name,
  description,
  location,
  date,
  image,
  onViewDetails,
}: EventCardProps) {
  // Extract word for watermark
  const categoryWord = name.split(' ')[0]

  return (
    <motion.div
      className="group bg-white rounded-[2rem] border border-slate-100 overflow-hidden hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 h-full flex flex-col cursor-pointer"
      whileHover={{ y: -8 }}
      onClick={onViewDetails}
    >
      {/* HEADER: Soft Light Gradient */}
      <div className="relative h-64 overflow-hidden bg-slate-50 flex flex-col justify-end p-8">
        {/* Soft Pastel Mesh Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 via-indigo-50 to-white opacity-80 transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        {/* Giant Watermark (Subtle) */}
        <div className="absolute -top-6 -right-6 text-9xl font-black text-slate-900/5 select-none pointer-events-none uppercase tracking-tighter">
          {categoryWord}
        </div>

        {/* Date Tag - Clean White */}
        <div className="absolute top-6 left-6">
          <span className="inline-flex items-center justify-center px-4 py-2 bg-white/80 backdrop-blur-md rounded-xl text-xs font-bold text-slate-900 shadow-sm border border-white/50">
            📅 {date}
          </span>
        </div>

        {/* Title Section */}
        <div className="relative z-10">
           <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-widest mb-3">
             <span className="w-2 h-2 rounded-full bg-blue-500"></span>
             {location}
           </div>
           
           <h3 className="text-3xl font-extrabold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors duration-300">
            {name}
          </h3>
        </div>
      </div>

      {/* BODY: Clean White */}
      <div className="p-8 flex flex-col flex-grow bg-white relative">
        <p className="text-slate-500 text-base leading-relaxed mb-6 line-clamp-3 font-medium">
          {description}
        </p>

        {/* Footer Action */}
        <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-auto">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-slate-600 transition-colors">
                Explore Event
            </span>
            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </div>
        </div>
      </div>
    </motion.div>
  )
}