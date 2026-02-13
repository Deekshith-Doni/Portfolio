import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Maximize2, X } from 'lucide-react'

const VideoCard = ({ video, index }) => {
  const videoRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.log('Play error:', err))
      setIsPlaying(true)
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
      setIsPlaying(false)
    }
  }

  const handleTouchStart = () => {
    if (!isPlaying) {
      setIsHovered(true)
      if (videoRef.current) {
        videoRef.current.play().catch(err => console.log('Play error:', err))
        setIsPlaying(true)
      }
    } else {
      setIsHovered(false)
      if (videoRef.current) {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
        setIsPlaying(false)
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`relative group overflow-hidden rounded-2xl bg-zinc-900 border border-electric-lime/20 ${video.size}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
    >
      {/* Thumbnail */}
      <img
        src={video.thumbnail}
        alt={video.title}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          isHovered ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Video element */}
      <video
        ref={videoRef}
        src={video.url}
        loop
        muted
        playsInline
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold text-white mb-2">{video.title}</h3>
          <p className="text-gray-300 text-sm">{video.description}</p>
        </div>
      </div>

      {/* Fullscreen button */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          video.onFullscreen()
        }}
        className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-electric-lime hover:text-dark-bg"
      >
        <Maximize2 className="w-5 h-5" />
      </button>
    </motion.div>
  )
}

const VideoGallery = () => {
  const [fullscreenVideo, setFullscreenVideo] = useState(null)

  const videos = [
    {
      id: 1,
      title: 'Motivational Reel/Video Edit',
      description: 'High-energy visuals with impactful messages',
      thumbnail: 'https://res.cloudinary.com/dah7jv8ts/image/upload/v1770984947/Untitled-3_hsnxhn.jpg',
      url: 'https://res.cloudinary.com/dah7jv8ts/video/upload/v1770969968/01_motivational_p4ph5x.mp4',
      size: 'md:col-span-2 md:row-span-2 h-80 md:h-auto',
    },
    {
      id: 2,
      title: 'Logo Animation',
      description: 'Modern logo reveal with dynamic effect and camera work',
      thumbnail: 'https://res.cloudinary.com/dah7jv8ts/image/upload/v1770984947/Logo_Animation_ftnm8l.jpg',
      url: 'https://res.cloudinary.com/dah7jv8ts/video/upload/v1770895034/LOGO_2_tvq6rp.mp4',
      size: 'h-80',
    },
    {
      id: 3,
      title: 'Social Media Reel Edit',
      description: 'High-energy cuts synced to the beat',
      thumbnail: 'https://res.cloudinary.com/dah7jv8ts/image/upload/v1770984947/Social_Media_Reel_Edit_mythg1.jpg',
      url: 'https://res.cloudinary.com/dah7jv8ts/video/upload/v1770900191/01_social_media_um5fxt.mp4',
      size: 'h-80',
    },
    {
      id: 4,
      title: 'Social Media Ad',
      description: 'Attention-grabbing short-form content',
      thumbnail: 'https://res.cloudinary.com/dah7jv8ts/image/upload/v1770984948/Social_Media_Ad_qsi5aw.jpg',
      url: 'https://res.cloudinary.com/dah7jv8ts/video/upload/v1770889690/Final_intro_uo1481.mp4',
      size: 'md:col-span-2 h-80',
    },
    {
      id: 5,
      title: 'Animated Posters',
      description: 'Static designs turned into moving visuals',
      thumbnail: 'https://res.cloudinary.com/dah7jv8ts/image/upload/v1770984947/ANIMATAED_posters_yrid4z.jpg',
      url: 'https://res.cloudinary.com/dah7jv8ts/video/upload/v1770962885/1_28_SEP_tolesg.mp4',
      size: 'h-80',
    },
  ]

  return (
    <>
      <section id="videos" className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-electric-lime to-neon-purple bg-clip-text text-transparent">
              VIDEO PORTFOLIO
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Hover over the cards to preview the magic ✨
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
          {videos.map((video, index) => (
            <VideoCard
              key={video.id}
              video={{
                ...video,
                onFullscreen: () => setFullscreenVideo(video),
              }}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Fullscreen Modal */}
      {fullscreenVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setFullscreenVideo(null)}
        >
          <button
            onClick={() => setFullscreenVideo(null)}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-electric-lime hover:text-dark-bg rounded-full transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative flex flex-col items-center justify-center max-w-[95vw] max-h-[95vh]" onClick={(e) => e.stopPropagation()}>
            <div className="max-h-[80vh] max-w-full flex items-center justify-center">
              <video
                src={fullscreenVideo.url}
                controls
                autoPlay
                className="max-w-full max-h-[80vh] w-auto h-auto rounded-xl shadow-2xl"
              />
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">{fullscreenVideo.title}</h3>
              <p className="text-gray-400">{fullscreenVideo.description}</p>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}

export default VideoGallery
