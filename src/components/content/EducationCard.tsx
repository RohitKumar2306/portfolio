import Card from '../ui/Card';
import styles from './EducationCard.module.css';
import { Education } from '../../data/profile';

interface EducationCardProps {
  education: Education;
  isLatest?: boolean;
}

export default function EducationCard({ education, isLatest = false }: EducationCardProps) {
  return (
    <Card className={styles.card}>
      <div className={styles.accentBorder} />

      <div className={styles.cardHeader}>
        <div className={styles.icon}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 3L2 9l10 6 10-6-10-6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <path d="M2 15l10 6 10-6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          </svg>
        </div>
        <div className={styles.headerText}>
          <h3 className={styles.institution}>{education.institution}</h3>
          <p className={styles.degree}>{education.degree}, {education.field}</p>
        </div>
        {isLatest && <span className={styles.badge}>LATEST</span>}
      </div>

      <div className={styles.metaRow}>
        <span className={styles.metaItem}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
          {education.startDate} - {education.endDate}
        </span>
        <span className={styles.metaItem}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
          {education.location}
        </span>
      </div>

      {education.description && (
        <p className={styles.description}>{education.description}</p>
      )}
    </Card>
  );
}