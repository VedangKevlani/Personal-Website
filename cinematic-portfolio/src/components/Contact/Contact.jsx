import styles from './Contact.module.css'
import Reveal from '../Reveal/Reveal'

export default function Contact({ id }) {
  return (
    <section id={id} className={styles.contact}>
      <div className={styles.inner}>
        {/* Left: Closing Statement */}
        <Reveal>
          <div className={styles.text}>
            <span className={styles.kicker}>Final Report</span>

            <h2 className={styles.title}>Case Closed</h2>

            <p className={styles.description}>
              If you’re looking for someone who approaches problems
              methodically — from signal to system — then this is
              where the conversation begins.
            </p>

            <ul className={styles.links}>
              <li>
                <a href="mailto:kevlanivedang28@gmail.com">
                  kevlanivedang28@gmail.com
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/vedang-kevlani/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/VedangKevlani"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </Reveal>

        {/* Right: Identity */}
        <Reveal delay={0.25}>
          <div className={styles.photoWrapper}>
            <img
              src="/profile.jpg"
              alt="Vedang Kevlani – Professional portrait"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
