import styles from './ResumeSection.module.css'
import Reveal from '../Reveal/Reveal'

export default function ResumeSection({ id }) {
  return (
    <section id={id} className={styles.resumeSection}>
      <Reveal>
        <div className={styles.inner}>
          <span className={styles.kicker}>Professional File</span>

          <h2 className={styles.title}>Resumé</h2>

          <p className={styles.description}>
            A concise record of my experience, skills, and selected work —
            designed for clarity, impact, and technical depth.
          </p>

          <a
            href="/Vedang_Kevlani_Resume.pdf"
            download
            className={styles.downloadButton}
          >
            Download Resumé
          </a>
        </div>
      </Reveal>
    </section>
  )
}
