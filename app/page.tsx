'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Logo from '@/components/Logo'
import LoginButton from '@/components/LoginButton'
import WhyAttend from '@/components/WhyAttend'
import TestimonialsSlider from '@/components/TestimonialsSlider'
import MobileMenu from '@/components/MobileMenu'
import Footer from '@/components/Footer'
import EventCard from '@/components/EventCard'
import BubblesBackground from '@/components/BubblesBackground'
import { useState } from 'react'
import EventDetailsModal from '@/components/EventDetailsModal'
import { getFeaturedEvents, Event } from '@/data/events'

export default function Home() {
  const highlightedEvents = getFeaturedEvents();
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleViewDetails = (event: Event) => {
    setSelectedEvent(event)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedEvent(null)
  }

  return (
    <main className="min-h-screen relative overflow-hidden bg-slate-50">
      
      {/* Navigation - LIGHT MODE */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Logo />
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden md:flex items-center space-x-8"
            >
              <Link href="/upcoming-retreats" className="text-slate-700 hover:text-blue-600 transition-colors font-bold text-sm tracking-wide">
                  Retreats
              </Link>
              <Link href="/experience" className="text-slate-700 hover:text-blue-600 transition-colors font-bold text-sm tracking-wide">
                  Experience
              </Link>
              <Link href="/host" className="text-slate-700 hover:text-blue-600 transition-colors font-bold text-sm tracking-wide">
                  Partner / Host
              </Link>
              <LoginButton />
            </motion.div>
            <MobileMenu />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <BubblesBackground />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-8 leading-tight tracking-tight"
            >
              Crowbar Retreats
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500">
                & Events
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-600 mb-12 font-medium max-w-2xl mx-auto leading-relaxed"
            >
              Learn, connect, reset, and grow with the exclusive Crowbar founder community.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-5 justify-center items-center"
            >
            <Link 
              href="/upcoming-retreats"
              className="px-10 py-4 rounded-full bg-slate-900 text-white font-bold text-lg hover:bg-blue-600 transition-all hover:scale-105 shadow-xl hover:shadow-2xl shadow-blue-900/20"
            >
                Explore Events
            </Link>
            <Link
                href="/experience"
                className="px-10 py-4 rounded-full bg-white text-slate-800 font-bold text-lg border border-slate-200 hover:border-blue-200 hover:bg-blue-50 transition-all hover:scale-105"
            >
                View Experience
            </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="relative z-10 py-20 md:py-32 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900">
              Featured Events
            </h2>
            <p className="text-slate-500 text-lg font-medium">
              Discover our most popular retreats and experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlightedEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <EventCard
                  id={event.id}
                  name={event.name}
                  description={event.description}
                  location={event.location}
                  date={event.date}
                  image={event.image}
                  isElite={event.isElite}
                  onViewDetails={() => handleViewDetails(event)}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mt-16"
          >
            <Link
              href="/upcoming-retreats"
              className="group flex items-center gap-3 px-8 py-4 bg-white border border-slate-200 rounded-full text-slate-700 font-bold hover:border-blue-500 hover:text-blue-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              View All Retreats
              <svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Attend Section */}
      <div id="benefits" className="relative z-10 bg-slate-900 py-12">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-blue-500/10 blur-[100px] pointer-events-none" />
        <WhyAttend />
      </div>

      {/* Testimonials Slider */}
      <div id="testimonials" className="relative z-10 bg-gradient-to-b from-indigo-50 to-white">
        <TestimonialsSlider />
      </div>

      <Footer />

      <EventDetailsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        event={selectedEvent}
      />
    </main>
  )
}