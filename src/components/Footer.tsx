import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Challenge</h3>
            <p>EICC 2026</p>
            <p>Efficient Instrument Classification</p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <p><a href="#home">Home</a></p>
            <p><a href="#leaderboards">Leaderboards</a></p>
            <p><a href="#dates">Important Dates</a></p>
          </div>
          
          <div className="footer-section">
            <h3>Resources</h3>
            <p>Dataset Release: To be announced</p>
            <p><a href="https://www.kaggle.com/datasets/debeshjha1/surgical-instrument-classification" target="_blank" rel="noopener noreferrer">Dataset Download</a></p>
          </div>
          
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: <a href="mailto:debesh.jha@usd.edu">debesh.jha@usd.edu</a></p>
            <p>University of South Dakota</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 University of South Dakota. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer