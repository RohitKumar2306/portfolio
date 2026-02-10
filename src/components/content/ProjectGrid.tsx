import ProjectCard from './ProjectCard';
import RevealOnScroll from '../ui/RevealOnScroll';
import styles from './ProjectGrid.module.css';
import { Project } from '../../data/profile';

interface ProjectGridProps { projects: Project[]; }

export default function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className={styles.empty}>
        <p>No projects found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {projects.map((project, i) => (
        <RevealOnScroll key={project.id} animation="card-build" staggerIndex={i}>
          <ProjectCard project={project} />
        </RevealOnScroll>
      ))}
    </div>
  );
}
