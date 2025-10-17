import React, { useState } from 'react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Leaderboards', href: '#leaderboards' },
    { name: 'Statistics', href: '#participants' },
    { name: 'Important Dates', href: '#dates' },
    { name: 'Hosts', href: '#hosts' },
    { name: 'Code of Conduct', href: '#conduct' },
    { name: 'Contact', href: '#contact' }
  ]

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="header">
      <div className="header-container">
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <button
          className="menu-toggle"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>
    </header>
  )
}

export default Header