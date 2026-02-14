import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, Zap, Eye, Palette, Heart } from 'lucide-react'

const WhyChooseMe = () => {
  const reasons = [
    {
      icon: Trophy,
      title: 'High-Quality Editing',
      description: 'Professional-grade edits that stand out from the competition',
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising on quality',
    },
    {
      icon: Eye,
      title: 'Attention to Detail',
      description: 'Every frame is carefully crafted to perfection',
    },
    {
      icon: Palette,
      title: 'Creative Storytelling',
      description: 'Transform your raw footage into compelling visual narratives',
    },
    {
      icon: Heart,
      title: 'Client Satisfaction',
      description: 'Unlimited revisions until you\'re 100% happy with the result',
    },
  ]

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-black mb-4">
          <span className="bg-gradient-to-r from-neon-purple to-electric-lime bg-clip-text text-transparent">
            WHY CHOOSE ME
          </span>
        </h2>
        <p className="text-gray-400 text-lg">
          Here's what sets my work apart from the rest
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-neon-purple/20 rounded-2xl p-6 text-center hover:border-neon-purple transition-all hover:scale-105"
          >
            <div className="mb-4 flex justify-center">
              <div className="p-3 bg-neon-purple/10 rounded-full">
                <reason.icon className="w-8 h-8 text-neon-purple" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default WhyChooseMe
