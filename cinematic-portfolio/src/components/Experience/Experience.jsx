import { useState } from 'react'
import styles from './Experience.module.css'

const experienceData = [
  {
    role: 'Investment Client Services Intern',
    company: 'Sagicor Group Jamaica Limited',
    year: '2025',
  },
  {
    role: 'Web Developer Intern',
    company: 'Zion Care International',
    year: '2025',
  },
  {
    role: 'Research Assistant',
    company: 'University of the West Indies Mona',
    year: '2024-2025',
  },
  {
    role: 'Adjunct Lab Assistant',
    company: 'University of the West Indies Mona',
    year: '2023-2025',
  },
  {
    role: 'Data Science Trainee',
    company: 'StarApple AI',
    year: '2023-2024',
  }
]

export default function Experience() {
  const [index, setIndex] = useState(0)

  const next = () =>
    setIndex((i) => (i + 1) % experienceData.length)

  const prev = () =>
    setIndex((i) => (i - 1 + experienceData.length) % experienceData.length)

  const item = experienceData[index]

  return (
    <section id="experience" className={styles.section}>
      <h2 className={`cursor-target ${styles.heading}`}>Case Timeline</h2>

      <div className={styles.card}>
        <span className={styles.year}>{item.year}</span>
        <h3>{item.role}</h3>
        <p className={styles.org}>{item.company}</p>
        <p className={styles.summary}>{item.summary}</p>
      </div>

      <div className={styles.controls}>
        <button onClick={prev}>‹</button>
        <button onClick={next}>›</button>
      </div>
    </section>
  )
}