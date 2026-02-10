import { useState, useCallback } from 'react';
import { useTheme } from '../../app/providers/ThemeProvider';
import { useActiveSection } from '../../hooks/useActiveSection';
import Container from './Container';
import IconButton from '../ui/IconButton';
import MobileMenu from './MobileMenu';
import styles from './Navbar.module.css';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navbarHeight = 64;
      const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <nav className={styles.navbar}>
        <Container>
          <div className={styles.content}>
            <button className={styles.logo} onClick={() => scrollTo('home')}>
              <span className={styles.firstName}>Rohit</span>{' '}
              <span className={styles.lastName}>Kumar</span>
              <span className={styles.cursor}>_</span>
            </button>

            <div className={styles.desktopNav}>
              {NAV_ITEMS.map(({ id, label }) => (
                <button
                  key={id}
                  className={`${styles.link} ${activeSection === id ? styles.active : ''}`}
                  onClick={() => scrollTo(id)}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className={styles.actions}>
              <IconButton
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className={styles.themeToggle}
              >
                <span className={styles.themeIcon}>
                  {theme === 'light' ? '🌙' : '☀️'}
                </span>
              </IconButton>

              <IconButton
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
                className={styles.menuButton}
              >
                ☰
              </IconButton>
            </div>
          </div>
        </Container>
      </nav>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeSection={activeSection}
        onNavigate={scrollTo}
      />
    </>
  );
}