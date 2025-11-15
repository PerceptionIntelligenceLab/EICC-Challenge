import React, { useState } from 'react'

const DataSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0)

  const dataInfo = [
    {
      title: "Dataset Overview",
      content: (
        <div>
          <p>The dataset consists of high-quality endoscopic images collected from routine GI procedures. Each image is manually verified by expert annotators. The dataset exhibits real-world variability, including:</p>
          <ul style={{ marginTop: '1rem', marginLeft: '2rem' }}>
            <li style={{ color: '#dc2626' }}>Different lighting conditions</li>
            <li style={{ color: '#dc2626' }}>Varying degrees of motion blur</li>
            <li style={{ color: '#dc2626' }}>Occlusions by folds, bubbles, or fluids</li>
            <li style={{ color: '#dc2626' }}>Instruments at multiple scales and angles</li>
            <li style={{ color: '#dc2626' }}>Complex backgrounds and low-contrast scenes</li>
          </ul>
          <p style={{ marginTop: '1rem' }}>The images are split into separate folders corresponding to instrument classes:</p>
          <ul style={{ marginTop: '1rem', marginLeft: '2rem' }}>
            <li style={{ color: '#dc2626' }}>Biopsy_forceps</li>
            <li style={{ color: '#dc2626' }}>Clip_applier</li>
            <li style={{ color: '#dc2626' }}>Injection_needle</li>
            <li style={{ color: '#dc2626' }}>No_instrument</li>
            <li style={{ color: '#dc2626' }}>Other</li>
            <li style={{ color: '#dc2626' }}>Snare</li>
            <li style={{ color: '#dc2626' }}>Spray_catheter</li>
          </ul>
          <p style={{ marginTop: '1rem' }}>Participants can train classification models directly on these folders or build custom pipelines for data augmentation, feature extraction, or multi-task learning.</p>
        </div>
      )
    },
    {
      title: "Download Links",
      content: (
        <div>
          <h4 style={{ marginTop: '1rem', marginBottom: '0.5rem', color: '#28a745' }}>Training Dataset</h4>
          <p style={{ marginBottom: '1rem' }}>
            <a 
              href="https://www.kaggle.com/datasets/debeshjha1/surgical-instrument-classification" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#dc2626', textDecoration: 'underline', fontWeight: 'bold' }}
            >
              ★ Download Training Dataset (Kaggle) ★
            </a>
          </p>
          <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: '#28a745' }}>Testing Dataset</h4>
          <p style={{ marginBottom: '1rem' }}>The testing dataset will be announced soon. Please check back for updates.</p>
        </div>
      )
    }
  ]

  return (
    <section id="data" className="section data-section">
      <div className="section-container">
        <h2 className="section-title">Dataset Information</h2>
        
        <div className="data-tabs">
          {dataInfo.map((info, index) => (
            <button
              key={index}
              className={`data-tab ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {info.title}
            </button>
          ))}
        </div>

        <div className="task-content">
          <h3>{dataInfo[activeTab].title}</h3>
          {dataInfo[activeTab].content}
        </div>
      </div>
    </section>
  )
}

export default DataSection