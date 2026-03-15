import React from 'react'

const Organizer: React.FC = () => {
  return (
    <section id="organizer" className="section organizer">
      <div className="section-container">
        <h2 className="section-title">Organizing Team</h2>

        <div className="organizers-grid">
          <div className="organizer-card">
            <h3 className="organizer-name">Dr. Debesh Jha</h3>
            <p className="organizer-title">Challenge Organizer</p>
            <p className="organizer-affiliation">University of South Dakota</p>
            <p className="organizer-email">debesh.jha@usd.edu</p>
          </div>
        </div>

        <div className="section-content" style={{ marginTop: '2rem' }}>
          <h3>Who Should Participate</h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.8' }}>
            The challenge is designed primarily for students interested in artificial intelligence and medical imaging. For the current edition, participation is limited to students.
          </p>
          <p style={{ marginBottom: '0.75rem' }}>Participants may include:</p>
          <ul>
            <li>Undergraduate and graduate students</li>
            <li>Research labs working on medical computer vision</li>
            <li>Students exploring AI applications in healthcare</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Organizer