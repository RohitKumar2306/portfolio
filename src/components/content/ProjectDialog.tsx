import { useEffect } from 'react';
import styles from './ProjectDialog.module.css';
import { Project } from '../../data/profile';

interface ProjectDialogProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.dialog} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        {/* Color bar */}
        <div className={styles.colorBar} style={{ background: project.color }} />

        {/* Close button */}
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close dialog">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Scrollable content */}
        <div className={styles.content}>
          <h2 className={styles.title}>{project.title}</h2>
          <p className={styles.subtitle}>{project.subtitle}</p>

          {/* Overview */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Overview</h3>
            <p className={styles.overview}>{project.overview}</p>
          </div>

          {/* Technologies */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Technologies</h3>
            <div className={styles.technologies}>
              {project.technologies.map((tech) => (
                <span key={tech} className={styles.techChip}>{tech}</span>
              ))}
            </div>
          </div>

          {/* Key Highlights */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Key Highlights</h3>
            <ul className={styles.highlights}>
              {project.highlights.map((highlight, i) => (
                <li key={i} className={styles.highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Links footer */}
        {(project.links.github || project.links.live) && (
          <div className={styles.links}>
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className={styles.githubBtn}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View on GitHub
              </a>
            )}
            {project.links.live && (
              <a href={project.links.live} target="_blank" rel="noopener noreferrer" className={styles.liveBtn}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
