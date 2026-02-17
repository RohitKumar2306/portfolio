import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectDialog from './ProjectDialog';
import RevealOnScroll from '../ui/RevealOnScroll';
import styles from './ProjectGrid.module.css';
import { Project } from '../../data/profile';

interface ProjectGridProps { projects: Project[]; }

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (projects.length === 0) {
    return (
      <div className={styles.empty}>
        <p>No projects found matching your criteria.</p>
      </div>
    );
  }

  return (
    <>
      <div className={styles.grid}>
        {projects.map((project, i) => (
          <RevealOnScroll key={project.id} animation="card-build" staggerIndex={i}>
            <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
          </RevealOnScroll>
        ))}
      </div>

      {selectedProject && (
        <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
}
