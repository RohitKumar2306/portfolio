import Card from '../ui/Card';
import styles from './CertificationCard.module.css';
import { Certification } from '../../data/profile';

interface CertificationCardProps {
  certification: Certification;
}

export default function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <Card className={styles.card}>
      <div className={styles.accentBorder} />

      <div className={styles.cardHeader}>
        <div className={styles.icon}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 15l-3.5 2 .67-3.89L6 10.13l3.91-.57L12 6l2.09 3.56 3.91.57-2.83 2.98L15.5 17z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <path d="M8.21 18.39L7 23l5-3 5 3-1.21-4.61" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          </svg>
        </div>
        <div className={styles.headerText}>
          <h3 className={styles.name}>{certification.name}</h3>
          <p className={styles.issuer}>{certification.issuer}</p>
        </div>
        <span className={styles.badge}>VERIFIED</span>
      </div>

      <div className={styles.metaRow}>
        <span className={styles.metaItem}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
          Issued {certification.date}
        </span>
      </div>
    </Card>
  );
}
