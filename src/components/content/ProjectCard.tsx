import Card from '../ui/Card';
import Chip from '../ui/Chip';
import styles from './ProjectCard.module.css';
import { Project } from '../../data/profile';

interface ProjectCardProps { project: Project; }

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card hoverable className={styles.card}>
      <div className={styles.colorBar} style={{ background: project.color }} />
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.subtitle}>{project.subtitle}</p>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.technologies}>
          {project.technologies.slice(0, 4).map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
          {project.technologies.length > 4 && (
            <Chip>+{project.technologies.length - 4}</Chip>
          )}
        </div>
        {project.links.github && (
          <a href={project.links.github} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
            View Project →
          </a>
        )}
      </div>
    </Card>
  );
}