import styles from './Projects.module.css'

export default function ProjectCard({ project, onOpen }) {
  return (
    <div className={`${styles.card} cursor-target`} onClick={onOpen}>
      <div className={styles.meta}>
        <span>{project.year}</span>
        <span>{project.role}</span>   
      </div> 
      <img
        src={project.thumbnail}
        alt={project.title}
        className={styles.thumbnail}
        style={{
          width: '100%',           // fill card width
          height: '200px',         // fixed height for uniform cards
          objectFit: 'cover',      // crop/scale image to cover area
          borderRadius: '8px',     // optional, rounded corners
          display: 'block'         // removes extra spacing
        }}
      />
      <h3>{project.title}</h3>
      <p className={styles.tech}>
        {project.tech.join(', ')}
      </p>
    </div>
  )
}
