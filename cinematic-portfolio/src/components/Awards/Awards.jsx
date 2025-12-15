import styles from './Awards.module.css'
const awards = [
  {
    title: 'Intellibus AI Hackathon Top 12: Fixing Broken Experiences',
    issuer: 'Intellibus',
    year: '2025'
  },
  {
    title: 'First Class Honors in BSc Computer Science and Economics',
    issuer: 'University of the West Indies',
    year: '2025'
  },
  {
    title: 'UWI Mona Computing Honors Society Inductee',
    issuer: 'University of the West Indies',
    year: '2025'
  },
    {
    title: 'Venture Finalist - Vincent Hosang Business Model Competition',
    issuer: 'MSBM, University of the West Indies',
    year: '2025'
  },
  {
    title: '1st Place - JAIA Christmas Hackathon: Financial Literacy',
    issuer: 'JAIA',
    year: '2024'
  }
]

export default function Awards() {
  return (
    <section id="awards" className={styles.section}>
      <h2 className={`cursor-target ${styles.heading}`}>Intel Recovered</h2>

      <div className={styles.grid}>
        {awards.map((award, i) => (
          <div key={i} className={styles.card}>
            <span className={styles.year}>{award.year}</span>
            <h3>{award.title}</h3>
            <p>{award.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}