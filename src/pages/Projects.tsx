import { useState, useMemo } from 'react';
import Container from '../components/layout/Container';
import SectionHeader from '../components/content/SectionHeader';
import ProjectGrid from '../components/content/ProjectGrid';
import Chip from '../components/ui/Chip';
import Input from '../components/ui/Input';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import { projects } from '../data/profile';
import styles from './Projects.module.css';

const categories = ['All', 'Full Stack', 'Backend', 'Frontend', 'AI'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = activeCategory === 'All' || project.tags.includes(activeCategory);
      const matchesSearch = searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className={`${styles.page} page-enter`}>
      <Container>
        <SectionHeader
          title="Featured Projects"
          subtitle="A showcase of my technical work in full-stack development, backend systems, and AI integration."
        />

        <RevealOnScroll animation="fade-up">
          <div className={styles.filters}>
            <div className={styles.categories}>
              {categories.map((category) => (
                <Chip key={category} active={activeCategory === category} onClick={() => setActiveCategory(category)}>
                  {category}
                </Chip>
              ))}
            </div>
            <div className={styles.search}>
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </RevealOnScroll>

        <ProjectGrid projects={filteredProjects} />
      </Container>
    </div>
  );
}
