import styles from './Projects.module.css'

export default function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <br></br><h3>{project.title}</h3>

        <p className={styles.modalMeta}>
          {project.year} • {project.role}
        </p>

        <p className={styles.description}>
          {project.description}
        </p>

        {project.videoLink && (
          <div className={styles.videoWrapper}>
            <iframe
              src={project.videoLink}
              title={project.title}
              frameBorder="0"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        )}

        <ul className={styles.outcomes}>
          {project.outcomes.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <button onClick={onClose} className={styles.close}>
          Close File
        </button>
      </div>
    </div>
  )
}
