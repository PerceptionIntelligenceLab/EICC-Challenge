import React from 'react'

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <h1 className="hero-title">
          2026 Efficient Instrument Classification Challenge (EICC 2026)
        </h1>
        <p className="hero-description">
          Advances in artificial intelligence have enabled machines to interpret complex visual information from images and videos. In medical environments, computer vision systems can assist clinicians by identifying surgical instruments, analyzing procedures, and supporting real-time decision-making. However, building such systems requires not only accurate machine learning models but also efficient computing systems capable of processing visual data quickly and reliably.
        </p>
      </div>
    </section>
  )
}

export default Hero