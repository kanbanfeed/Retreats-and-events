'use client'

import { motion } from 'framer-motion'

const speakers = [
  { id: 1, name: 'Sarah Johnson', role: 'Wellness Expert', image: '👩‍⚕️' },
  { id: 2, name: 'Michael Chen', role: 'Leadership Coach', image: '👨‍💼' },
  { id: 3, name: 'Emma Williams', role: 'Creative Director', image: '👩‍🎨' },
  { id: 4, name: 'David Kumar', role: 'Tech Innovator', image: '👨‍💻' },
  { id: 5, name: 'Lisa Anderson', role: 'Mindfulness Guide', image: '🧘‍♀️' },
  { id: 6, name: 'James Wilson', role: 'Business Strategist', image: '👨‍🔬' },
  { id: 7, name: 'Maria Garcia', role: 'Life Coach', image: '👩‍🏫' },
  { id: 8, name: 'Robert Lee', role: 'Innovation Expert', image: '👨‍🚀' },
]

// Duplicate for seamless loop
const duplicatedSpeakers = [...speakers, ...speakers]

export default function SpeakerMarquee() {
  return (
    <section className="py-16 md:py-24 bg-stone-50 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-stone-900">
          Featured Speakers
        </h2>
        <p className="text-stone-600 text-lg md:text-xl">
          Learn from industry leaders and experts
        </p>
      </motion.div>

      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-stone-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-stone-50 to-transparent z-10 pointer-events-none" />

        {/* Scrolling container */}
        <div className="flex animate-scroll gap-8 md:gap-12">
          {duplicatedSpeakers.map((speaker, index) => (
            <motion.div
              key={`${speaker.id}-${index}`}
              className="flex-shrink-0 flex flex-col items-center bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-stone-200 min-w-[200px] md:min-w-[250px] hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-6xl md:text-7xl mb-4">{speaker.image}</div>
              <h3 className="text-xl md:text-2xl font-bold text-stone-900 mb-1 text-center">
                {speaker.name}
              </h3>
              <p className="text-orange-500 font-semibold text-sm md:text-base text-center">
                {speaker.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

