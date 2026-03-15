import React, { useState } from 'react'

const BASE_URL = import.meta.env.BASE_URL

const imageClasses = [
  { name: 'Chain', folder: 'snare', images: [1, 2, 3, 4] },
  { name: 'Clip', folder: 'clip_applier', images: [1, 2, 3, 4] },
  { name: 'Doubt', folder: 'other', images: [1, 2, 3, 4] },
  { name: 'Hold', folder: 'biopsy_forceps', images: [1, 2, 3, 4] },
  { name: 'Hook', folder: 'injection_needle', images: [1, 2, 3, 4] },
  { name: 'No Instrument', folder: 'no_instrument', images: [1, 2, 3, 4] },
  { name: 'White Tube', folder: 'spray_catheter', images: [1, 2, 3, 4] }
]

const DataSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0)

  const dataInfo = [
    {
      title: "Dataset Overview",
      content: (
        <div>
          <p>The dataset consists of frames extracted from surgical videos. Each frame contains visual information about the presence or absence of specific instruments used during a procedure. The frames are split into separate folders corresponding to instrument categories:</p>
          <ul style={{ marginTop: '1rem', marginLeft: '2rem' }}>
            <li style={{ color: '#dc2626' }}>Chain</li>
            <li style={{ color: '#dc2626' }}>Clip</li>
            <li style={{ color: '#dc2626' }}>Doubt</li>
            <li style={{ color: '#dc2626' }}>Hold</li>
            <li style={{ color: '#dc2626' }}>Hook</li>
            <li style={{ color: '#dc2626' }}>No Instrument</li>
            <li style={{ color: '#dc2626' }}>White Tube</li>
          </ul>
          <p style={{ marginTop: '1rem' }}>Every frame belongs to exactly one of these seven classes. These frames will be used to train and evaluate the classification model. Participants can train classification models directly on these folders or build custom pipelines for data augmentation, feature extraction, or multi-task learning.</p>

          <h4 style={{
            marginTop: '2rem',
            marginBottom: '1rem',
            color: '#dc2626',
            fontSize: '2rem',
            fontWeight: '700',
            textAlign: 'center'
          }}>
            Sample Images from the Dataset
          </h4>
          <p style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Below are sample images from the surgical instrument dataset:</p>

          {imageClasses.map((imageClass, classIndex) => (
            <div key={classIndex} style={{ marginBottom: '3rem' }}>
              <h5 style={{
                color: '#dc2626',
                fontSize: '1.5rem',
                marginBottom: '1rem',
                fontWeight: '700',
                textAlign: 'center'
              }}>
                {imageClass.name}
              </h5>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
                marginBottom: '1rem'
              }}>
                {imageClass.images.map((imgNum) => (
                  <div key={imgNum} style={{
                    border: '2px solid #e9ecef',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                    flex: '0 0 auto'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)'
                    e.currentTarget.style.borderColor = '#dc2626'
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(220, 38, 38, 0.4)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)'
                    e.currentTarget.style.borderColor = '#e9ecef'
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)'
                  }}>
                    <img
                      src={`${BASE_URL}dataset-images/${imageClass.folder}_${imgNum}.jpg`}
                      alt={`${imageClass.name} sample ${imgNum}`}
                      style={{
                        width: '200px',
                        height: '200px',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
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