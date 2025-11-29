'use client'

import { motion } from 'framer-motion'

interface Event {
  id: number
  date: string
  title: string
  location: string
  description: string
  side: 'left' | 'right'
}

const events: Event[] = [
  {
    id: 1,
    date: '12 OCT',
    title: 'Wellness Retreat',
    location: 'Bali, Indonesia',
    description: 'Transformative 7-day wellness experience',
    side: 'left',
  },
  {
    id: 2,
    date: '25 OCT',
    title: 'Leadership Summit',
    location: 'New York, USA',
    description: 'Executive leadership and networking event',
    side: 'right',
  },
  {
    id: 3,
    date: '05 NOV',
    title: 'Creative Workshop',
    location: 'Barcelona, Spain',
    description: 'Unlock your creative potential',
    side: 'left',
  },
  {
    id: 4,
    date: '18 NOV',
    title: 'Tech Innovation',
    location: 'San Francisco, USA',
    description: 'Future of technology and innovation',
    side: 'right',
  },
  {
    id: 5,
    date: '02 DEC',
    title: 'Mindfulness Retreat',
    location: 'Kyoto, Japan',
    description: 'Deep meditation and mindfulness practice',
    side: 'left',
  },
]

export default function EventTimeline() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-stone-900">
          Upcoming Events
        </h2>
        <p className="text-stone-600 text-lg md:text-xl">
          Join us on these transformative journeys
        </p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 via-orange-400 to-orange-500 hidden md:block" />

        {/* Events */}
        <div className="space-y-12 md:space-y-16">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: event.side === 'left' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex items-center gap-6 md:gap-8 ${
                event.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-col md:flex-row`}
            >
              {/* Date Badge */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
                  <span className="text-white font-bold text-sm md:text-base text-center px-2">
                    {event.date}
                  </span>
                </div>
              </div>

              {/* Event Card */}
              <div
                className={`flex-1 ${
                  event.side === 'left' ? 'md:text-right' : 'md:text-left'
                } text-center md:text-left`}
              >
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-stone-200 hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl md:text-3xl font-bold text-stone-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-orange-500 font-semibold mb-2">{event.location}</p>
                  <p className="text-stone-600">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


