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

interface Event {
  id: number
  name: string
  description: string
  location: string
  date: string
  image: string
}

const events: Event[] = [
  {
    id: 1,
    name: 'Goa Wellness Reset',
    description: 'A 5-day transformative wellness retreat combining yoga, meditation, and mindfulness practices in the serene beaches of Goa.',
    location: 'Goa, India',
    date: '15-20 March 2025',
    image: '/placeholder-goa.jpg',
  },
  {
    id: 2,
    name: 'Bangalore Impact Leadership Meetup',
    description: 'Connect with fellow founders and leaders in an intensive 2-day leadership workshop focused on scaling impact.',
    location: 'Bangalore, India',
    date: '28-29 March 2025',
    image: '/placeholder-bangalore.jpg',
  },
  {
    id: 3,
    name: 'Crowbar Founders Circle Weekend',
    description: 'An exclusive weekend gathering for Crowbar founders to share experiences, challenges, and celebrate wins together.',
    location: 'Mumbai, India',
    date: '5-7 April 2025',
    image: '/placeholder-mumbai.jpg',
  },
  {
    id: 4,
    name: 'Himalayan Mindfulness Retreat',
    description: 'Escape to the mountains for a week of mindfulness, nature walks, and deep reflection sessions.',
    location: 'Himachal Pradesh, India',
    date: '12-18 April 2025',
    image: '/placeholder-himalaya.jpg',
  },
  {
    id: 5,
    name: 'Tech Innovation Bootcamp',
    description: 'A 3-day intensive bootcamp on emerging technologies, product innovation, and startup scaling strategies.',
    location: 'Pune, India',
    date: '25-27 April 2025',
    image: '/placeholder-pune.jpg',
  },
  {
    id: 6,
    name: 'Coastal Networking Summit',
    description: 'Join us for a weekend of networking, workshops, and community building by the beautiful coastline.',
    location: 'Kerala, India',
    date: '3-5 May 2025',
    image: '/placeholder-kerala.jpg',
  },
]

export default function UpcomingRetreats() {
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
      {/* Background */}
      <FloatingOrbsMist />

      {/* Navigation - LIGHT MODE / PROFESSIONAL */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            {/* Default Color (Dark) */}
            <Logo />
          </Link>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex items-center space-x-8"
          >
            <Link 
              href="/"
              className="text-slate-600 hover:text-blue-600 transition-colors font-medium text-sm tracking-wide"
            >
                Home
            </Link>
            <Link 
              href="/upcoming-retreats"
              className="text-blue-600 font-semibold text-sm tracking-wide"
            >
              Upcoming Retreats
            </Link>
            <Link 
              href="/#benefits"
              className="text-slate-600 hover:text-blue-600 transition-colors font-medium text-sm tracking-wide"
            >
                Benefits
            </Link>
            <Link 
              href="/#testimonials"
              className="text-slate-600 hover:text-blue-600 transition-colors font-medium text-sm tracking-wide"
            >
                Testimonials
            </Link>
            <LoginButton />
          </motion.div>
          <MobileMenu />
        </div>
      </nav>

      {/* Page Header */}
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

      {/* Category Filters */}
      <div className="relative z-10 mb-12">
        <CategoryFilters />
      </div>

      {/* Upcoming Retreats Grid */}
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
                onViewDetails={() => handleViewDetails(event)}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Event Details Modal */}
      <EventDetailsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        event={selectedEvent}
      />
    </main>
  )
}