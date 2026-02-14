import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Maximize2, X } from 'lucide-react'

const GraphicCard = ({ graphic, index, onFullscreen }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-neon-purple/20 aspect-[4/3] cursor-pointer"
      onClick={onFullscreen}
    >
      <img
        src={graphic.image}
        alt={graphic.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6">
        <h3 className="text-2xl md:text-3xl font-black text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 drop-shadow-lg">
          {graphic.title}
        </h3>
        <p className="text-gray-200 text-base md:text-lg mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
          {graphic.category}
        </p>
        <div className="flex items-center gap-2 text-electric-lime font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
          <span>View Full Size</span>
          <Maximize2 className="w-6 h-6" />
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-neon-purple to-transparent opacity-50"></div>
    </motion.div>
  )
}

const GraphicsSection = () => {
  const [fullscreenGraphic, setFullscreenGraphic] = useState(null)

  const graphics = [
    {
      id: 1,
      title: 'YouTube Thumbnail',
      category: 'Thumbnail Design',
      image: 'https://res.cloudinary.com/dah7jv8ts/image/upload/v1770896852/LONG_VID_2_COVER_IMG2_3x_lrjv2e.jpg',
    },
    {
      id: 2,
      title: 'Social Media Cover Design',
      category: 'Cover Design',
      image: 'https://res.cloudinary.com/dah7jv8ts/image/upload/v1770991587/DEC_LLRI_CB02_cover_3x_v4lhnt.jpg',
    },
    {
      id: 3,
      title: 'Gaming Thumbnail',
      category: 'Thumbnail Design',
      image: 'https://res.cloudinary.com/dah7jv8ts/image/upload/v1770978755/gaming_thumbnail_jvdl0r.jpg',
    },
    {
      id: 4,
      title: 'Social Media Post',
      category: 'Social Media',
      image: 'https://res.cloudinary.com/dah7jv8ts/image/upload/v1770981612/112_61_3x_l1sefg.jpg',
    },
    {
      id: 5,
      title: 'Event Poster',
      category: 'Poster Design',
      image: 'https://res.cloudinary.com/dah7jv8ts/image/upload/v1770896708/BLAZE_final4_3x_vhq7vb.jpg',
    },
    {
      id: 6,
      title: 'Logo Designing',
      category: 'Graphic Design',
      image: 'https://res.cloudinary.com/dah7jv8ts/image/upload/v1770896538/LOGO2_kljkyj.jpg',
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
            GRAPHICS & DESIGNS
          </span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl">
          Eye-catching thumbnails and graphics that drive engagement
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {graphics.map((graphic, index) => (
          <GraphicCard 
            key={graphic.id} 
            graphic={graphic} 
            index={index}
            onFullscreen={() => setFullscreenGraphic(graphic)}
          />
        ))}
      </div>

      {/* Fullscreen Modal */}
      {fullscreenGraphic && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setFullscreenGraphic(null)}
        >
          <button
            onClick={() => setFullscreenGraphic(null)}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-electric-lime hover:text-dark-bg rounded-full transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative flex flex-col items-center justify-center max-w-[95vw] max-h-[95vh]" onClick={(e) => e.stopPropagation()}>
            <div className="max-h-[80vh] max-w-full flex items-center justify-center">
              <img
                src={fullscreenGraphic.image}
                alt={fullscreenGraphic.title}
                className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-xl shadow-2xl"
              />
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">{fullscreenGraphic.title}</h3>
              <p className="text-gray-400">{fullscreenGraphic.category}</p>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  )
}

export default GraphicsSection
