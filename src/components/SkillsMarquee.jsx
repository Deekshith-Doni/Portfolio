import React from 'react'
import { motion } from 'framer-motion'

const SkillsMarquee = () => {
  const skills = [
    'Premiere Pro',
    'After Effects',
    'Photoshop',
    'Illustrator',
    'DaVinci Resolve',
    'Blender'
  ]

  // Duplicate the array for seamless infinite scroll
  const duplicatedSkills = [...skills, ...skills]

  return (
    <section className="py-16 overflow-hidden border-y border-electric-lime/20">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 px-6"
      >
        <h2 className="text-3xl md:text-4xl font-black mb-3">
          <span className="bg-gradient-to-r from-electric-lime to-neon-purple bg-clip-text text-transparent">
            TOOLS & EXPERTISE
          </span>
        </h2>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
          Professional software stack I use to bring creative visions to life
        </p>
      </motion.div>

      {/* Marquee */}
      <div className="relative">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {duplicatedSkills.map((skill, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-neon-purple/10 to-electric-lime/10 border border-electric-lime/30 rounded-full"
            >
              <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-electric-lime to-neon-purple bg-clip-text text-transparent">
                {skill}
              </span>
              <div className="w-2 h-2 bg-electric-lime rounded-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsMarquee
