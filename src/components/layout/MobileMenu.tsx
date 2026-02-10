import { useEffect } from 'react';
import styles from './MobileMenu.module.css';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  onNavigate: (id: string) => void;
}

export default function MobileMenu({ isOpen, onClose, activeSection, onNavigate }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClick = (id: string) => {
    onNavigate(id);
    onClose();
  };

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.menu}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close menu">✕</button>
        <nav className={styles.nav}>
          {NAV_ITEMS.map(({ id, label }, i) => (
            <button
              key={id}
              className={`${styles.link} ${activeSection === id ? styles.active : ''}`}
              onClick={() => handleClick(id)}
              style={{ animationDelay: `${i * 60 + 100}ms` }}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}