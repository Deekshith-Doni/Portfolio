import React from 'react'
import Hero from './components/Hero'
import SkillsMarquee from './components/SkillsMarquee'
import VideoGallery from './components/VideoGallery'
import GraphicsSection from './components/GraphicsSection'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Grain overlay */}
      <div className="grain-overlay"></div>
      
      {/* Main content */}
      <div className="relative z-10">
        <Hero />
        <SkillsMarquee />
        <VideoGallery />
        <GraphicsSection />
        <Contact />
      </div>
    </div>
  )
}

export default App
