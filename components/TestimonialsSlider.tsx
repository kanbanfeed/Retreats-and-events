'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Founder, TechVentures',
    content: 'The Crowbar Retreat was a game-changer. I connected with amazing founders and came back with fresh perspectives and actionable insights.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Rahul Mehta',
    role: 'CEO, InnovateLab',
    content: 'Best investment in my personal and professional growth. The community and learning opportunities are unmatched.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Anjali Patel',
    role: 'Co-founder, GrowthHub',
    content: 'A perfect blend of learning, networking, and relaxation. The retreat helped me reset and refocus on what truly matters.',
    rating: 5,
  },
]

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-gradient">What Our Community Says</span>
        </h2>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        <div className="overflow-hidden rounded-2xl">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="glass-effect rounded-2xl p-8 md:p-12 text-center"
          >
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <motion.span
                  key={i}
                  className="text-yellow-400 text-xl"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  ★
                </motion.span>
              ))}
            </div>
            <p className="text-lg md:text-xl text-slate-700 mb-6 leading-relaxed font-medium">
              "{testimonials[currentIndex].content}"
            </p>
            <div>
              <p className="font-bold text-slate-900 text-lg">{testimonials[currentIndex].name}</p>
              <p className="text-slate-600 text-sm">{testimonials[currentIndex].role}</p>
            </div>
          </motion.div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-purple-500 w-8' : 'bg-slate-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

