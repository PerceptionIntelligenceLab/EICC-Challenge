import React from 'react'

const Organizer: React.FC = () => {
  const organizers = [
    {
      name: "Dr. Debesh Jha",
      title: "Lead Organizer",
      affiliation: "University of South Dakota",
      email: "debesh.jha@usd.edu"
    },
    {
      name: "Harshith Reddy Nalla",
      title: "Co-Organizer", 
      affiliation: "University of South Dakota",
      email: "Contact via debesh.jha@usd.edu"
    }
  ]

  return (
    <section id="organizer" className="section organizer">
      <div className="section-container">
        <h2 className="section-title">Challenge Organizer</h2>
        <div className="section-content">
          <p>
            The challenges are organized by leading researchers in medical AI and computer vision, with expertise in endoscopic image analysis, instrument classification, and polyp detection.
          </p>
        </div>

        <div className="organizers-grid">
          {organizers.map((organizer, index) => (
            <div key={index} className="organizer-card">
              <h3 className="organizer-name">{organizer.name}</h3>
              <p className="organizer-title">{organizer.title}</p>
              <p className="organizer-affiliation">{organizer.affiliation}</p>
              <p className="organizer-email">{organizer.email}</p>
            </div>
          ))}
        </div>

        <div className="section-content">
          <h3>Additional Organizers</h3>
          <ul>
            <li>Steven Hicks, SimulaMet</li>
            <li>Michael Riegler, SimulaMet</li>
            <li>Pål Halvorsen, SimulaMet and OsloMet</li>
            <li>Konstantin Pogorelov, Simula Research Laboratory</li>
            <li>Thomas de Lange, Sahlgrenska University Hospital, Mölndal, Sweden, and Bærum Hospital, Vestre Viken, Norway</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Organizer