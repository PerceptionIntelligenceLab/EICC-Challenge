import React from 'react'

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <h1 className="hero-title">
          Endoscopic Instrument Classification Challenge (EICC 2025)
        </h1>
        <p className="hero-description">
          Modern gastrointestinal (GI) endoscopy increasingly relies on artificial intelligence to assist clinicians during screening, diagnosis, and therapeutic interventions. While tremendous progress has been made in polyp detection and segmentation, instrument classification remains an underexplored yet crucial task—especially for workflow optimization, scene understanding, automated reporting, and robotic assistance.
        </p>
      </div>
    </section>
  )
}

export default Hero