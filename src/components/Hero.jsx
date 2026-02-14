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
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-transparent to-electric-lime/10"
        animate={{
          background: [
            'linear-gradient(to bottom right, rgba(176, 38, 255, 0.1), transparent, rgba(204, 255, 0, 0.1))',
            'linear-gradient(to bottom right, rgba(204, 255, 0, 0.1), transparent, rgba(176, 38, 255, 0.1))',
            'linear-gradient(to bottom right, rgba(176, 38, 255, 0.1), transparent, rgba(204, 255, 0, 0.1))',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0],
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
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 bg-electric-lime/10 border border-electric-lime/30 rounded-full text-electric-lime font-bold text-sm md:text-base tracking-widest uppercase">
            ✦ Deekshith D (Doni Edits) ✦
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.9] tracking-tight"
        >
          <span className="block mb-2">
            <span className="bg-gradient-to-r from-electric-lime via-white to-electric-lime bg-clip-text text-transparent animate-gradient">
              FREELANCE
            </span>
          </span>
          <span className="block text-white mb-2 drop-shadow-2xl">VIDEO EDITOR</span>
          <span className="block">
            <span className="text-white">&</span>
            <span className="ml-4 bg-gradient-to-r from-neon-purple via-pink-500 to-neon-purple bg-clip-text text-transparent animate-gradient">
              DESIGNER
            </span>
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-gray-300 text-xl md:text-2xl mb-14 max-w-4xl mx-auto leading-relaxed font-light"
        >
          Crafting <span className="text-electric-lime font-semibold">high-quality, engaging videos</span> for creators, brands, and businesses.
          <br className="hidden md:block" />
          Specializing in <span className="text-white font-medium">YouTube</span>, <span className="text-white font-medium">Instagram Reels</span>, <span className="text-white font-medium">Shorts</span> & more.
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-6 justify-center flex-wrap">
          <a
            href="#portfolio"
            className="group relative px-8 py-4 bg-electric-lime text-dark-bg font-bold rounded-full overflow-hidden transition-all hover:scale-105"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-neon-purple transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            <span className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 text-white font-bold transition-opacity">
              View My Work
            </span>
          </a>
          <a
            href="#services"
            className="px-8 py-4 border-2 border-electric-lime text-electric-lime font-bold rounded-full hover:bg-electric-lime hover:text-dark-bg transition-all hover:scale-105"
          >
            View Services
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-neon-purple text-neon-purple font-bold rounded-full hover:bg-neon-purple hover:text-white transition-all hover:scale-105"
          >
            Contact Me
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
