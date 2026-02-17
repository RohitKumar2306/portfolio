import styles from './ProjectCard.module.css';
import { Project } from '../../data/profile';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const MAX_TECH_VISIBLE = 3;

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const visibleTech = project.technologies.slice(0, MAX_TECH_VISIBLE);
  const overflow = project.technologies.length - MAX_TECH_VISIBLE;

  return (
    <div className={styles.card} onClick={onClick} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') onClick(); }}>
      {/* ── Colored Header ── */}
      <div className={styles.header} style={{ background: project.color }}>
        <div className={styles.headerIcon}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </div>
        <h3 className={styles.headerTitle}>{project.title}</h3>
        <p className={styles.headerSubtitle}>{project.subtitle}</p>
      </div>

      {/* ── Body ── */}
      <div className={styles.body}>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.techLabel}>Technologies</div>
        <div className={styles.techList}>
          {visibleTech.map((tech) => (
            <span key={tech} className={styles.techChip}>{tech}</span>
          ))}
          {overflow > 0 && (
            <span className={styles.techOverflow}>+{overflow}</span>
          )}
        </div>
      </div>

      {/* ── Footer ── */}
      <div className={styles.footer}>
        <span className={styles.projectType}>
          {project.tags[0] === 'Full Stack' ? 'Full-Stack Project' : `${project.tags[0]} Project`}
        </span>
        <span className={styles.footerLink}>
          View Details
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </div>
  );
}
