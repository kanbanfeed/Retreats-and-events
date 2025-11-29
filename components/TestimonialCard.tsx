'use client'

import { motion } from 'framer-motion'

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  content: string
  rating: number
  delay?: number
}

export default function TestimonialCard({
  name,
  role,
  company,
  content,
  rating,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass-effect rounded-2xl p-6 md:p-8 h-full card-hover"
    >
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <motion.svg
            key={i}
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: delay + i * 0.1 }}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </motion.svg>
        ))}
      </div>
      <p className="text-gray-300 mb-6 leading-relaxed italic">"{content}"</p>
      <div>
        <p className="font-bold text-white">{name}</p>
        <p className="text-sm text-gray-400">
          {role} • {company}
        </p>
      </div>
    </motion.div>
  )
}

