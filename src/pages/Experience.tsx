import Container from '../components/layout/Container';
import SectionHeader from '../components/content/SectionHeader';
import ExperienceCard from '../components/content/ExperienceCard';
import EducationCard from '../components/content/EducationCard';
import Card from '../components/ui/Card';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import { experiences, education, certifications } from '../data/profile';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <div className={`${styles.page} page-enter`}>
      <Container>
        <SectionHeader
          title="Professional Experience"
          subtitle="A track record of delivering full-stack solutions with measurable impact on efficiency, accuracy, and business outcomes."
        />

        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <RevealOnScroll key={exp.id} animation="card-build" staggerIndex={i} duration={800}>
              <ExperienceCard experience={exp} />
            </RevealOnScroll>
          ))}
        </div>

        <section className={styles.educationSection}>
          <RevealOnScroll animation="blur-in">
            <h2 className={styles.sectionTitle}>Education</h2>
          </RevealOnScroll>
          <div className={styles.educationGrid}>
            {education.map((edu, i) => (
              <RevealOnScroll key={edu.id} animation="card-build" staggerIndex={i}>
                <EducationCard education={edu} />
              </RevealOnScroll>
            ))}
          </div>
        </section>

        <section className={styles.certificationsSection}>
          <RevealOnScroll animation="blur-in">
            <h2 className={styles.sectionTitle}>Certifications</h2>
          </RevealOnScroll>
          <div className={styles.certificationsGrid}>
            {certifications.map((cert, i) => (
              <RevealOnScroll key={cert.id} animation="scale-up" staggerIndex={i}>
                <Card className={styles.certCard}>
                  <div className={styles.certIcon}>🏆</div>
                  <h3 className={styles.certName}>{cert.name}</h3>
                  <p className={styles.certIssuer}>{cert.issuer}</p>
                  <p className={styles.certDate}>{cert.date}</p>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
