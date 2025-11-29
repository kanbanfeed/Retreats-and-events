'use client'

import { motion } from 'framer-motion'
// Icons as SVG components
const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

const SparklesIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

interface MembershipCardProps {
  name: string
  price: number
  originalPrice: number
  credits: number
  features: string[]
  isPopular?: boolean
  isElite?: boolean
  buttonText: string
}

export default function MembershipCard({
  name,
  price,
  originalPrice,
  credits,
  features,
  isPopular = false,
  isElite = false,
  buttonText,
}: MembershipCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative ${
        isPopular ? 'md:scale-110 z-10' : ''
      } ${isElite ? 'border-2 border-accent-500' : ''}`}
    >
      {isPopular && (
        <motion.div
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
            MOST POPULAR
          </span>
        </motion.div>
      )}
      
      <motion.div
        className={`glass-effect rounded-2xl p-6 md:p-8 h-full flex flex-col card-hover ${
          isElite ? 'bg-gradient-to-br from-accent-900/30 to-primary-900/30' : ''
        }`}
        whileHover={{ y: -10 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {isElite && (
          <motion.div
            className="absolute top-4 right-4"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <SparklesIcon className="w-6 h-6 text-accent-400" />
          </motion.div>
        )}

        <div className="mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-gradient mb-2">
            {name}
          </h3>
          <div className="flex items-baseline space-x-2">
            <span className="text-4xl md:text-5xl font-bold text-white">
              ${price}
            </span>
            <span className="text-xl text-gray-400 line-through">
              ${originalPrice}
            </span>
          </div>
        </div>

        <div className="mb-6 flex-1">
          <div className="space-y-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckIcon className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.button
          className={`w-full py-4 rounded-xl font-bold text-lg button-glow ${
            isElite
              ? 'bg-gradient-to-r from-accent-500 to-primary-500 text-white'
              : isPopular
              ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
              : 'bg-primary-600 text-white'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>{buttonText}</span>
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

