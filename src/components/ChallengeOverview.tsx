import React from 'react'

const ChallengeOverview: React.FC = () => {
  return (
    <section id="challenge" className="section challenge-overview">
      <div className="section-container">
        <h2 className="section-title">Challenge Description</h2>
        
        <div className="section-content">
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Endoscopic Instrument Classification Challenge (EICC 2025)</h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.8' }}>
            Modern gastrointestinal (GI) endoscopy increasingly relies on artificial intelligence to assist clinicians during screening, diagnosis, and therapeutic interventions. While tremendous progress has been made in polyp detection and segmentation, instrument classification remains an underexplored yet crucial task—especially for workflow optimization, scene understanding, automated reporting, and robotic assistance.
          </p>
          <p style={{ marginBottom: '2rem', lineHeight: '1.8', fontWeight: '500' }}>
            <strong>Objective:</strong> The primary goal is to accurately classify the instrument (or lack thereof) present in each endoscopic image into seven clinically relevant classes: Biopsy Forceps, Clip Applier, Injection Needle, Snare, Spray Catheter, No Instrument, and Other Instruments.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔬</div>
            <h3 className="feature-title">7 Instrument Classes</h3>
            <p className="feature-description">Comprehensive classification covering the most frequent tools used in colonoscopy</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3 className="feature-title">Real-Time Focus</h3>
            <p className="feature-description">Track 2 emphasizes fast architectures (&lt;10ms per image) for clinical deployment</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3 className="feature-title">Foundation Models</h3>
            <p className="feature-description">Optional Track 3 allows use of large pretrained models (SAM, DINOv2, CLIP ViT)</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChallengeOverview