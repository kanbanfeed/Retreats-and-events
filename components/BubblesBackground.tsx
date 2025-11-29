'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function BubblesBackground() {
  const [bubbles, setBubbles] = useState<any[]>([])

  useEffect(() => {
    const newBubbles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: Math.random() * 80 + 40, // 40px - 120px
      left: Math.random() * 100, // 0 - 100% width
      // NEGATIVE DELAY: Animation starts "in the past" so bubbles are already visible
      delay: -Math.random() * 20, 
      duration: Math.random() * 10 + 15, // Slow float (15-25s)
    }))
    setBubbles(newBubbles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Soft Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/40 via-white to-white" />
      
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full bg-gradient-to-t from-purple-200/30 to-blue-200/30 backdrop-blur-[1px] border border-white/40"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            bottom: -150, // Start just below screen
          }}
          animate={{
            y: [0, -1000], // Float up
            x: [0, Math.sin(bubble.id) * 30], // Slight wobble
            opacity: [0, 1, 0], // Fade in/out
            rotate: [0, 360],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            delay: bubble.delay, // Negative delay = Instant visibility
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}
