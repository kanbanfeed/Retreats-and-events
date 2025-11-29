'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Logo from '@/components/Logo'
import LoginButton from '@/components/LoginButton'
import CategoryFilters from '@/components/CategoryFilters'
import EventCard from '@/components/EventCard'
import EventDetailsModal from '@/components/EventDetailsModal'
import MobileMenu from '@/components/MobileMenu'
import FloatingOrbsMist from '@/components/FloatingOrbsMist'
import Footer from '@/components/Footer'
import { allEvents, Event } from '@/data/events' 

export default function UpcomingRetreats() {
  const events = allEvents;
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
      <FloatingOrbsMist />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/"><Logo /></Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/upcoming-retreats" className="text-blue-600 font-bold text-sm tracking-wide">Retreats</Link>
            <Link href="/experience" className="text-slate-700 hover:text-blue-600 font-bold text-sm tracking-wide">Experience</Link>
            <Link href="/host" className="text-slate-700 hover:text-blue-600 font-bold text-sm tracking-wide">Partner / Host</Link>
            <LoginButton />
          </div>
          <MobileMenu />
        </div>
      </nav>

      {/* ... (Rest of the file remains the same, just keeping navigation updated) ... */}
      <section className="relative z-10 container mx-auto px-4 pt-32 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-slate-900 tracking-tight">
            Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Retreats</span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Discover transformative experiences designed for growth, connection, and personal development
          </p>
        </motion.div>
      </section>

      <div className="relative z-10 mb-12"><CategoryFilters /></div>

      <section className="relative z-10 container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
      </section>

      <Footer />
      <EventDetailsModal isOpen={isModalOpen} onClose={handleCloseModal} event={selectedEvent} />
    </main>
  )
}