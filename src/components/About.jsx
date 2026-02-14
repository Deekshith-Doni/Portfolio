import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const About = () => {
  const expertise = [
    'YouTube video editing',
    'Instagram Reels & Shorts editing',
    'Faceless video editing',
    'Motion graphics',
    'Thumbnail design',
  ]

  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-black mb-4">
          <span className="bg-gradient-to-r from-electric-lime to-neon-purple bg-clip-text text-transparent">
            ABOUT ME
          </span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            Hi, I'm <span className="text-electric-lime font-bold">Deekshith D (Doni)</span>, a passionate <span className="text-white font-semibold">Freelance Video Editor and Graphic Designer</span>.
          </p>
          
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            I specialize in creating <span className="text-white font-semibold">engaging, high-quality videos</span> that capture attention and tell compelling stories. I help content creators, brands, and businesses improve their content with professional editing.
          </p>

          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            My goal is to deliver <span className="text-electric-lime font-semibold">clean, professional, and engaging videos</span> that help clients grow their audience and brand. I'm focused on quality, creativity, and fast delivery.
          </p>
        </motion.div>

        {/* Right Content - Expertise */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-zinc-900 border border-electric-lime/20 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-white">My Expertise</h3>
          <div className="space-y-4">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="w-6 h-6 text-electric-lime flex-shrink-0" />
                <span className="text-gray-300 text-lg">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
