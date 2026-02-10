import { useEffect, useState } from 'react';

const SECTION_IDS = [
  'home',
  'about',
  'experience',
  'education',
  'skills',
  'projects',
  'contact',
];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visibleSections = new Map<string, number>();

    SECTION_IDS.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            visibleSections.set(id, entry.intersectionRatio);
          } else {
            visibleSections.delete(id);
          }

          let best = '';
          let bestScore = -1;
          visibleSections.forEach((ratio, sectionId) => {
            const el = document.getElementById(sectionId);
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const topProximity = Math.max(
              0,
              1 - Math.abs(rect.top) / window.innerHeight
            );
            const score = ratio * 0.4 + topProximity * 0.6;
            if (score > bestScore) {
              bestScore = score;
              best = sectionId;
            }
          });

          if (best) setActiveSection(best);
        },
        {
          threshold: [0, 0.1, 0.25, 0.5, 0.75],
          rootMargin: '-80px 0px -20% 0px',
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return activeSection;
}

export { SECTION_IDS };