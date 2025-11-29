  'use client'

  import { motion } from 'framer-motion'
  import { useState } from 'react'

  interface Category {
    id: string
    name: string
    icon: string
  }

  const categories: Category[] = [
    { id: 'all', name: 'All Events', icon: '🌟' },
    { id: 'wellness', name: 'Wellness Retreat', icon: '🌿' },
    { id: 'business', name: 'Business Growth Sessions', icon: '💼' },
    { id: 'networking', name: 'Networking Meetups', icon: '🤝' },
    { id: 'masterclass', name: 'Masterclasses & Bootcamps', icon: '🧠' },
    { id: 'community', name: 'Community Events', icon: '🎉' },
  ]

  export default function CategoryFilters() {
    const [selectedCategory, setSelectedCategory] = useState('all')

    return (
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex gap-4 md:gap-6 min-w-max">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg shadow-purple-500/30'
                    : 'glass-effect text-slate-700 hover:bg-white/90 hover:shadow-md'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-2xl">{category.icon}</span>
                <span className="text-sm md:text-base">{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>
    )
  }

