import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Challenge</h3>
            <p>Machine Mind Marathon</p>
            <p>MediaEval 2020</p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <p><a href="#home">Home</a></p>
            <p><a href="#leaderboards">Leaderboards</a></p>
            <p><a href="#dates">Important Dates</a></p>
            <p><a href="#hosts">Hosts</a></p>
          </div>
          
          <div className="footer-section">
            <h3>Resources</h3>
            <p><a href="https://datasets.simula.no/kvasir-seg/" target="_blank" rel="noopener noreferrer">Training Dataset</a></p>
            <p><a href="https://drive.google.com/file/d/1uP2W2g0iCCS3T6Cf7TPmNdSX4gayOrv2/view?usp=sharing" target="_blank" rel="noopener noreferrer">Test Dataset</a></p>
            <p><a href="https://github.com/DebeshJha" target="_blank" rel="noopener noreferrer">GitHub Repository</a></p>
          </div>
          
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: debesh@simula.no</p>
            <p>Discord: Available upon request</p>
            <p>MediaEval 2020 Workshop</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2020 Machine Mind Marathon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer