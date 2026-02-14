import React from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyChooseMe from './components/WhyChooseMe'
import SkillsMarquee from './components/SkillsMarquee'
import VideoGallery from './components/VideoGallery'
import GraphicsSection from './components/GraphicsSection'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Grain overlay */}
      <div className="grain-overlay"></div>
      
      {/* Animated background gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-radial from-neon-purple/5 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-radial from-electric-lime/5 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <VideoGallery />
        <GraphicsSection />
        <SkillsMarquee />
        <Services />
        <WhyChooseMe />
        <Contact />
      </div>
    </div>
  )
}

export default App
