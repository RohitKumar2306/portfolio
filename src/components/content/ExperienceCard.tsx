import Card from '../ui/Card';
import Chip from '../ui/Chip';
import styles from './ExperienceCard.module.css';
import { Experience } from '../../data/profile';

interface ExperienceCardProps {
  experience: Experience;
  isLatest?: boolean;
}

export default function ExperienceCard({ experience, isLatest = false }: ExperienceCardProps) {
  return (
    <Card className={styles.card}>
      {/* Top accent border */}
      <div className={styles.accentBorder} />

      <div className={styles.cardHeader}>
        <div className={styles.icon}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        <div className={styles.headerText}>
          <h3 className={styles.company}>{experience.company}</h3>
          <p className={styles.role}>{experience.role}</p>
        </div>
        {isLatest && <span className={styles.badge}>LATEST</span>}
      </div>

      <div className={styles.metaRow}>
        <span className={styles.metaItem}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
          {experience.startDate} - {experience.endDate}
        </span>
        <span className={styles.metaItem}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
          {experience.location}
        </span>
      </div>

      <p className={styles.description}>{experience.description}</p>

      <div className={styles.technologies}>
        {experience.technologies.map((tech) => (
          <Chip key={tech}>{tech}</Chip>
        ))}
      </div>
    </Card>
  );
}