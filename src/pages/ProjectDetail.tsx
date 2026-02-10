import { useParams, Navigate, Link } from 'react-router-dom';
import Container from '../components/layout/Container';
import Button from '../components/ui/Button';
import Chip from '../components/ui/Chip';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import { projects } from '../data/profile';
import styles from './ProjectDetail.module.css';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <div className={`${styles.page} page-enter`}>
      <Container>
        <Link to="/projects" className={styles.backLink}>← Back to Projects</Link>

        <RevealOnScroll animation="fade-up">
          <div className={styles.colorBar} style={{ background: project.color }} />
          <div className={styles.header}>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.subtitle}>{project.subtitle}</p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll animation="fade-up" delay={100}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Overview</h2>
            <p className={styles.overview}>{project.overview}</p>
          </section>
        </RevealOnScroll>

        <RevealOnScroll animation="fade-up" delay={200}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Technologies</h2>
            <div className={styles.technologies}>
              {project.technologies.map((tech) => <Chip key={tech} variant="primary">{tech}</Chip>)}
            </div>
          </section>
        </RevealOnScroll>

        <section className={styles.section}>
          <RevealOnScroll animation="fade-up" delay={300}>
            <h2 className={styles.sectionTitle}>Key Highlights</h2>
          </RevealOnScroll>
          <ul className={styles.highlights}>
            {project.highlights.map((highlight, index) => (
              <RevealOnScroll key={index} animation="fade-left" staggerIndex={index}>
                <li className={styles.highlight}>{highlight}</li>
              </RevealOnScroll>
            ))}
          </ul>
        </section>

        {(project.links.github || project.links.live) && (
          <RevealOnScroll animation="fade-up">
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Links</h2>
              <div className={styles.links}>
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary">View on GitHub</Button>
                  </a>
                )}
                {project.links.live && (
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary">Live Demo</Button>
                  </a>
                )}
              </div>
            </section>
          </RevealOnScroll>
        )}
      </Container>
    </div>
  );
}
