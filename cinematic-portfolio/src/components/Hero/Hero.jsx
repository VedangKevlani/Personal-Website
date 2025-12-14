import styles from './Hero.module.css'

export default function Hero({ id }) {
  return (
    <section id={id} className={styles.hero}>
       <h1 className="text-accent tracking-widest">CASE 2025: VEDANG KEVLANI</h1>
       <p className="text-text-muted mt-2">Prime Suspect: Lead Data Investigator & Full Stack Operative</p>
    </section>
  )
}
