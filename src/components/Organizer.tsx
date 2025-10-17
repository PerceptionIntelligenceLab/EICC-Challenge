import React from 'react'

const Organizer: React.FC = () => {
  const organizers = [
    {
      name: "Dr. Debesh Jha",
      title: "Lead Organizer",
      affiliation: "SimulaMet",
      email: "debesh@simula.no"
    },
    {
      name: "Harshith Reddy Nall",
      title: "Co-Organizer", 
      affiliation: "SimulaMet",
      email: "harshith@simula.no"
    },
    {
      name: "Sai Sankar Swarna",
      title: "Co-Organizer",
      affiliation: "SimulaMet", 
      email: "sai@simula.no"
    }
  ]

  return (
    <section id="organizer" className="section organizer">
      <div className="section-container">
        <h2 className="section-title">Task Organizers</h2>
        <div className="section-content">
          <p>
            The challenge is organized by leading researchers in medical AI and computer vision, with expertise in endoscopic image analysis and polyp detection.
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