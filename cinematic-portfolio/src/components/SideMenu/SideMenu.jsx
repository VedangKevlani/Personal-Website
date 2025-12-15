import React, { useState, useEffect } from 'react'
import './SideMenu.css'

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'projects', label: 'Evidence' },
  { id: 'experience', label: 'Timeline' },
  { id: 'awards', label: 'Intel' },
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' }
]

export default function SideMenu() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY
      sections.forEach(section => {
        const el = document.getElementById(section.id)
        if (el) {
          const offsetTop = el.offsetTop
          const offsetBottom = offsetTop + el.offsetHeight
          if (scrollPos >= offsetTop - 100 && scrollPos < offsetBottom - 100) {
            setActive(section.id)
          }
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
<nav className="side-menu">
  <span
    className="side-menu-indicator"
    style={{ transform: `translateY(${sections.findIndex(s => s.id === active) * 2.4}rem)` }}
  />

  {sections.map(section => (
    <a
      key={section.id}
      href={`#${section.id}`}
      className={active === section.id ? 'active' : ''}
      onClick={(e) => {
        e.preventDefault()
        document
          .getElementById(section.id)
          ?.scrollIntoView({ behavior: 'smooth' })
      }}
    >
      {section.label}
    </a>
  ))}
</nav>


  )
}
