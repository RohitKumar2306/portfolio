import Container from '../components/layout/Container';
import SectionHeader from '../components/content/SectionHeader';
import ExperienceCard from '../components/content/ExperienceCard';
import EducationCard from '../components/content/EducationCard';
import CertificationCard from '../components/content/CertificationCard';
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
              <RevealOnScroll key={cert.id} animation="card-build" staggerIndex={i}>
                <CertificationCard certification={cert} />
              </RevealOnScroll>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
