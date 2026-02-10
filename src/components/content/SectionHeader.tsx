import RevealOnScroll from '../ui/RevealOnScroll';
import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({ title, subtitle, align = 'center' }: SectionHeaderProps) {
  return (
    <div className={`${styles.header} ${styles[align]}`}>
      <RevealOnScroll animation="blur-in">
        <h2 className={styles.title}>{title}</h2>
      </RevealOnScroll>
      {subtitle && (
        <RevealOnScroll animation="fade-up" delay={200}>
          <p className={styles.subtitle}>{subtitle}</p>
        </RevealOnScroll>
      )}
    </div>
  );
}
