'use client'

import { motion } from 'framer-motion'

const benefits = [
  {
    icon: '🤝',
    title: 'Connect with Founders',
    description: 'Network with like-minded entrepreneurs and build lasting relationships.',
    colorClass: 'bg-amber-100 text-amber-600', 
  },
  {
    icon: '🧘',
    title: 'Recharge Mind & Body',
    description: 'Take a break from daily routines and focus on personal well-being.',
    colorClass: 'bg-purple-100 text-purple-600',
  },
  {
    icon: '👥',
    title: 'Learn from Leaders',
    description: 'Gain insights from experienced professionals and thought leaders.',
    colorClass: 'bg-blue-100 text-blue-600',
  },
  {
    icon: '🔐',
    title: 'Exclusive Access',
    description: 'Join an exclusive community of founders and innovators.',
    colorClass: 'bg-emerald-100 text-emerald-600',
  },
]

export default function WhyAttend() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          {/* Changed text color to White for Dark Background */}
          <span className="text-white">Why Attend a </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
            Crowbar Retreat?
          </span>
        </h2>
        {/* Changed description color to Slate-400 (Light Gray) */}
        <p className="text-slate-400 text-lg md:text-xl">
          Transformative experiences designed for growth and connection
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-[2rem] p-8 border border-white/10 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-300 h-full flex flex-col items-start"
          >
            {/* Icon Container */}
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 ${benefit.colorClass}`}>
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="cursor-pointer"
              >
                {benefit.icon}
              </motion.div>
            </div>

            {/* Content */}
            <h3 className="text-2xl font-extrabold text-slate-900 mb-4 tracking-tight">
              {benefit.title}
            </h3>
            <p className="text-slate-500 text-base leading-relaxed font-medium">
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}