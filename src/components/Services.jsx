import React from 'react'
import { motion } from 'framer-motion'
import { Play, Zap, Image, Sparkles, Frame, Share2 } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Play,
      title: 'YouTube Video Editing',
      description: 'Professional editing for long-form content with dynamic cuts, color grading, and sound design',
    },
    {
      icon: Zap,
      title: 'Instagram Reels & Shorts Editing',
      description: 'Fast-paced, attention-grabbing edits optimized for social media algorithms',
    },
    {
      icon: Sparkles,
      title: 'Faceless Video Editing',
      description: 'Create engaging content without showing your face - perfect for educational and storytelling videos',
    },
    {
      icon: Image,
      title: 'Motion Graphics',
      description: 'Eye-catching animations, titles, and transitions that elevate your content',
    },
    {
      icon: Frame,
      title: 'Thumbnail Design',
      description: 'Click-worthy thumbnails designed to maximize views and engagement',
    },
    {
      icon: Share2,
      title: 'Social Media Video Editing',
      description: 'Platform-optimized videos for TikTok, Facebook, LinkedIn, and more',
    },
  ]

  return (
    <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-black mb-4">
          <span className="bg-gradient-to-r from-electric-lime to-neon-purple bg-clip-text text-transparent">
            SERVICES
          </span>
        </h2>
        <p className="text-gray-400 text-lg">
          Professional video editing solutions tailored to your needs
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-zinc-900 border border-electric-lime/20 rounded-2xl p-6 hover:border-electric-lime transition-all hover:scale-105 cursor-pointer"
          >
            <div className="mb-4 p-3 bg-electric-lime/10 rounded-xl inline-block group-hover:bg-electric-lime/20 transition-colors">
              <service.icon className="w-8 h-8 text-electric-lime" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
            <p className="text-gray-400 leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Services
