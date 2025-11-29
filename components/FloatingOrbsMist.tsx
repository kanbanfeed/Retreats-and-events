'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Orb {
  id: number
  size: number
  x: number
  y: number
  duration: number
  delay: number
}

export default function FloatingOrbsMist() {
  const [orbs, setOrbs] = useState<Orb[]>([])

  useEffect(() => {
    // Generate floating orbs
    const newOrbs: Orb[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      size: Math.random() * 200 + 150, // 150-350px
      x: Math.random() * 100, // 0-100%
      y: Math.random() * 100, // 0-100%
      duration: Math.random() * 20 + 25, // 25-45s
      delay: Math.random() * 5, // 0-5s
    }))
    setOrbs(newOrbs)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating Soft Orbs */}
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full bg-gradient-to-br from-purple-200/40 via-purple-300/30 to-blue-200/40 blur-3xl"
          style={{
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
          }}
          animate={{
            x: [
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
            ],
            y: [
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
            ],
            scale: [1, 1.2, 0.9, 1.1, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Mist Waves */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-100/20 via-transparent to-blue-100/20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            backgroundSize: '200% 200%',
          }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-tl from-blue-100/20 via-transparent to-purple-100/20"
          animate={{
            backgroundPosition: ['100% 100%', '0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            backgroundSize: '200% 200%',
          }}
        />
        {/* Wave layers */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-purple-50/30 via-purple-100/20 to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scaleY: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-blue-50/30 via-blue-100/20 to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scaleY: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>
    </div>
  )
}


