import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const SkillsMarquee = () => {
  const skills = [
    {
      name: 'Premiere Pro',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg',
      category: 'Video Editing',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      name: 'After Effects',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg',
      category: 'Motion Graphics',
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      name: 'Photoshop',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg',
      category: 'Photo Editing',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      name: 'Illustrator',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg',
      category: 'Vector Design',
      gradient: 'from-orange-500 to-yellow-500',
    },
    {
      name: 'DaVinci Resolve',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/90/DaVinci_Resolve_17_logo.svg',
      category: 'Color Grading',
      gradient: 'from-red-500 to-orange-500',
    },
    {
      name: 'Blender',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg',
      category: '3D Graphics',
      gradient: 'from-electric-lime to-neon-purple',
    },
  ]

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-zinc-900 to-dark-bg"></div>
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-electric-lime/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <Sparkles className="w-12 h-12 text-electric-lime mx-auto mb-4" />
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-electric-lime via-white to-neon-purple bg-clip-text text-transparent">
              CREATIVE ARSENAL
            </span>
          </h2>
          <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto">
            Industry-leading tools I use to bring your vision to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-800 border border-electric-lime/20 rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:border-electric-lime/60 hover:scale-105 hover:shadow-2xl hover:shadow-electric-lime/20">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Logo */}
                <div className="relative mb-6">
                  <div className="inline-flex p-4 bg-zinc-800/50 backdrop-blur-sm rounded-2xl shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-electric-lime/10 group-hover:border-electric-lime/30">
                    <img 
                      src={skill.logo} 
                      alt={skill.name}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-black text-white mb-2 group-hover:text-electric-lime transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-gray-400 text-sm font-medium tracking-wide">
                    {skill.category}
                  </p>
                </div>

                {/* Shine effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-electric-lime/10 to-neon-purple/10 border border-electric-lime/30 rounded-full">
            <div className="w-2 h-2 bg-electric-lime rounded-full animate-pulse"></div>
            <span className="text-gray-300 font-semibold">Always learning, always evolving</span>
            <div className="w-2 h-2 bg-neon-purple rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsMarquee
