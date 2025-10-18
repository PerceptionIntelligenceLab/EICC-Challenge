import React from 'react'

const Hosts: React.FC = () => {
  const hosts = [
    {
      name: "Debesh Jha",
      title: "Assistant Professor (Tenure Track) @USD",
      description: "Assistant Professor (Tenure Track) @USD | Former Sr. Res. Associate @Northwestern | EB1A (Extraordinary Ability) recipient | Top 2% Scientist | AI & Medical Imaging Expert | Senior IEEE Member | Open Science Advocate",
      image: "/debesh.png",
      links: [
        { name: "Website", url: "https://debeshjha.com/" },
        { name: "GitHub", url: "https://github.com/DebeshJha" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/debesh-jha-ph-d-071462aa/" }
      ]
    },
    {
      name: "Harshith Reddy Nalla",
      title: "Undergraduate Research Assistant",
      description: "Undergraduate Research Assistant at the University of South Dakota, mentored by Professor Debesh Jha. Works on AI-powered medical imaging and intelligent web applications integrating deep learning and scalable backend systems.",
      image: "/harshith.png",
      links: [
        { name: "GitHub", url: "https://github.com/HarshithReddy01" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/harshith-reddy-nalla-6005012ab/" },
        { name: "Website", url: "https://harshithreddy01.github.io/My-Web/" }
      ]
    },
    {
      name: "Sai Sankar Swarna",
      title: "Graduate Assistant",
      description: "Graduate Assistant at the University of South Dakota specializing in Computer Science. Experienced in Spring Boot, Java, Python, and DevOps tools, contributing to scalable backend systems and academic instruction.",
      image: "/sai sankar.jpeg",
      links: [
        { name: "GitHub", url: "https://github.com/Swarna7414" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/swanra-sai-sankar-000797191/" }
      ]
    }
  ]

  return (
    <section id="hosts" className="hosts-section">
      <div className="hosts-container">
        <h2 className="hosts-title">Challenge Hosts</h2>
        <div className="hosts-grid">
          {hosts.map((host, index) => (
            <div key={index} className="host-card">
              <div className="host-image">
                <img src={host.image} alt={host.name} />
              </div>
              <div className="host-content">
                <h3 className="host-name">{host.name}</h3>
                <p className="host-title">{host.title}</p>
                <p className="host-description">{host.description}</p>
                <div className="host-links">
                  {host.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="host-link"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hosts
