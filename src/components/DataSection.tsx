import React, { useState } from 'react'

const DataSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0)

  const dataInfo = [
    {
      title: "Dataset Overview",
      content: (
        <div>
          <p>The dataset contains 1,000 polyp images and their corresponding ground truth mask. The datasets were collected from real routine clinical examinations at Vestre Viken Health Trust (VV) in Norway by expert gastroenterologists.</p>
          <p>The VV is the collaboration of the four hospitals that provide healthcare service to 470,000 peoples. The resolution of images varies from 332✕487 to 1920✕1072 pixels. Some of the images contain green thumbnail in the lower-left corner of the images showing the position marking from the ScopeGuide (Olympus).</p>
        </div>
      )
    },
    {
      title: "Download Links",
      content: (
        <div>
          <p><strong>Training Dataset:</strong> <a href="https://datasets.simula.no/kvasir-seg/" target="_blank" rel="noopener noreferrer">https://datasets.simula.no/kvasir-seg/</a></p>
          <p><strong>Test Dataset:</strong> <a href="https://drive.google.com/file/d/1uP2W2g0iCCS3T6Cf7TPmNdSX4gayOrv2/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download Test Dataset</a></p>
        </div>
      )
    }
  ]

  return (
    <section id="data" className="section data-section">
      <div className="section-container">
        <h2 className="section-title">Data</h2>
        
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