import Container from '../components/layout/Container';
import SectionHeader from '../components/content/SectionHeader';
import SkillGroup from '../components/content/SkillGroup';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import { skillCategories } from '../data/profile';
import styles from './About.module.css';

export default function About() {
  return (
    <div className={`${styles.page} page-enter`}>
      <Container>
        <SectionHeader
          title="About Me"
          subtitle="Passionate about building robust, scalable software solutions that solve real-world problems."
        />

        <section className={styles.section}>
          <div className={styles.content}>
            <div className={styles.textContent}>
              <RevealOnScroll animation="fade-right">
                <h3 className={styles.subtitle}>Software Engineering & Development</h3>
              </RevealOnScroll>
              <RevealOnScroll animation="fade-up" delay={100}>
                <p className={styles.paragraph}>
                  I'm a Software Engineer with 4+ years of experience developing full-stack applications using Java, TypeScript, and React. I specialize in designing secure internet/intranet architectures, managing SQL data persistence, and implementing user authentication workflows to support mission-critical operations.
                </p>
              </RevealOnScroll>
              <RevealOnScroll animation="fade-up" delay={200}>
                <p className={styles.paragraph}>
                  Currently pursuing my Master's in Computer Science at Illinois Institute of Technology, I bring hands-on experience from consulting roles at Accenture, Dreams Media Solutions, and Capital Info Solutions. I've built high-throughput backend systems, modern React frontends, and integrated CI/CD pipelines that have measurably improved system performance and reliability.
                </p>
              </RevealOnScroll>
            </div>

            <div className={styles.stats}>
              {[
                { value: '4+', label: 'Years Experience' },
                { value: '7', label: 'Featured Projects' },
                { value: '2', label: 'Certifications' },
              ].map((stat, i) => (
                <RevealOnScroll key={stat.label} animation="scale-up" staggerIndex={i}>
                  <div className={styles.stat}>
                    <div className={styles.statValue}>{stat.value}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <RevealOnScroll animation="blur-in">
            <h2 className={styles.sectionTitle}>Skills & Expertise</h2>
          </RevealOnScroll>
          <div className={styles.skillsGrid}>
            {skillCategories.map((category, i) => (
              <RevealOnScroll key={category.id} animation="card-build" staggerIndex={i}>
                <SkillGroup category={category} />
              </RevealOnScroll>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
