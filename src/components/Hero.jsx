import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-transparent to-electric-lime/10"></div>
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-electric-lime/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-4">
          <span className="text-electric-lime font-bold text-lg md:text-xl tracking-wider uppercase">
            Visual Storyteller
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-white via-electric-lime to-neon-purple bg-clip-text text-transparent">
            VIDEO EDITOR
          </span>
          <br />
          <span className="text-white">& GRAPHIC DESIGNER</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto"
        >
          Transforming ideas into captivating visual experiences. Specializing in video editing, 
          motion graphics, and stunning graphic designs.
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-6 justify-center flex-wrap">
          <a
            href="#videos"
            className="group relative px-8 py-4 bg-electric-lime text-dark-bg font-bold rounded-full overflow-hidden transition-all hover:scale-105"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-neon-purple transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            <span className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 text-white font-bold transition-opacity">
              View My Work
            </span>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-electric-lime text-electric-lime font-bold rounded-full hover:bg-electric-lime hover:text-dark-bg transition-all hover:scale-105"
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <ChevronDown className="text-electric-lime w-8 h-8" />
      </motion.div>
    </section>
  )
}

export default Hero
