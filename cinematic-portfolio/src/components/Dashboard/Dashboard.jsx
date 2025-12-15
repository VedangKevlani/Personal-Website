import styles from './Dashboard.module.css'
import Reveal from '../Reveal/Reveal'
import MetricCard from './MetricCard'
import SkillBar from './SkillBar'

export default function Dashboard({ id }) {
  return (
    <section id={id}>
      <Reveal>
        <h2 className={styles.heading}>Intelligence Panel</h2>
      </Reveal>

      <div className={styles.grid}>
        {/* Metrics */}
        <Reveal>
          <div className={styles.panel}>
            <MetricCard label="Projects Delivered" value="10+" />
            <MetricCard label="Datasets Analyzed" value="12+" />
            <MetricCard label="Models Deployed" value="5+" />
            <MetricCard label="Domains Worked In" value="6" />
          </div>
        </Reveal>

        {/* Skills */}
        <Reveal delay={0.1}>
          <div className={styles.panel}>
            <SkillBar skill="Python" level={90} />
            <SkillBar skill="Machine Learning" level={75} />
            <SkillBar skill="Data Analysis" level={90} />
            <SkillBar skill="React / Frontend" level={70} />
            <SkillBar skill="Databases & APIs" level={90} />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
