'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Logo from '@/components/Logo'
import LoginButton from '@/components/LoginButton'
import MobileMenu from '@/components/MobileMenu'
import Footer from '@/components/Footer'

export default function Experience() {
  const stats = [
    { label: "Founders Connected", value: "2,500+" },
    { label: "Retreats Hosted", value: "45+" },
    { label: "Funding Raised", value: "$120M" },
  ]

  const gallery = [
    { 
      // Morning Yoga (Bali)
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80", 
      size: "h-96", 
      title: "Morning Yoga in Bali", 
      description: "Finding balance before a day of deep work." 
    },
    { 
      // Keynote
      image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&q=80", 
      size: "h-64", 
      title: "Keynote: Scaling to $10M", 
      description: "Lessons from a unicorn founder." 
    },
    { 
      // Dinner
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80", 
      size: "h-80", 
      title: "Networking Dinner", 
      description: "Connecting with peers over local cuisine." 
    },
    { 
      // Hiking
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80", 
      size: "h-72", 
      title: "Hiking the Alps", 
      description: "Building bonds on the trail." 
    },
    { 
      // Fireside Chat (UPDATED: Warm group discussion)
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80", 
      size: "h-96", 
      title: "Fireside Chat", 
      description: "Honest conversations about failure and success." 
    },
    { 
      // Deep Work
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80", 
      size: "h-64", 
      title: "Deep Work Session", 
      description: "Focused execution in a flow state environment." 
    },
    { 
      // Boat (UPDATED: Sunset water view)
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80", 
      size: "h-80", 
      title: "Sunset Boat Cruise", 
      description: "Celebrating wins on the open water." 
    },
    { 
      // Product Strategy
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80", 
      size: "h-72", 
      title: "Product Strategy", 
      description: "Refining roadmaps with expert feedback." 
    },
    { 
      // Meditation
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80", 
      size: "h-96", 
      title: "Meditation", 
      description: "Recharging the mind for peak performance." 
    },
  ]

  return (
    <main className="min-h-screen relative bg-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/"><Logo /></Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/upcoming-retreats" className="text-slate-700 hover:text-blue-600 font-bold text-sm tracking-wide">Retreats</Link>
            <Link href="/experience" className="text-blue-600 font-bold text-sm tracking-wide">Experience</Link>
            <Link href="/host" className="text-slate-700 hover:text-blue-600 font-bold text-sm tracking-wide">Partner / Host</Link>
            <LoginButton />
          </div>
          <MobileMenu />
        </div>
      </nav>

      <section className="pt-32 pb-16 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 tracking-tight">
            More Than Just <br/> <span className="text-blue-600">A Getaway.</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-3xl mx-auto mb-12">
            See what happens when ambitious minds disconnect from the noise and reconnect with their purpose.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-b border-slate-100 py-8">
            {stats.map((stat, i) => (
                <div key={i}>
                    <div className="text-4xl font-black text-slate-900">{stat.value}</div>
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                </div>
            ))}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-24">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {gallery.map((item, i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`relative w-full ${item.size} bg-slate-100 rounded-3xl overflow-hidden group cursor-pointer shadow-lg`}
                >
                    {/* Image */}
                    <img 
                        src={item.image} 
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Shadow Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                        <span className="inline-block bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold mb-3 border border-white/10">
                            {item.title}
                        </span>
                        <p className="text-white/90 text-lg font-medium leading-snug">
                          {item.description}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}