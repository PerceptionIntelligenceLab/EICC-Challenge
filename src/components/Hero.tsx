import React from 'react'

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <h1 className="hero-title">
          Machine Mind Marathon
        </h1>
        <p className="hero-subtitle">
          MediaEval 2020
        </p>
        <p className="hero-description">
          The "Machine Mind Marathon" aims to develop computer-aided diagnosis systems for automatic polyp segmentation to detect all types of polyps (for example, irregular polyp, smaller or flat polyps) with high efficiency and accuracy. The main goal of the challenge is to benchmark semantic segmentation algorithms on a publicly available dataset, emphasizing robustness, speed, and generalization.
        </p>
      </div>
    </section>
  )
}

export default Hero