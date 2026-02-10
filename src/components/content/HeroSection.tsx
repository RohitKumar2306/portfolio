import { useState, useEffect } from 'react';
import Button from '../ui/Button';
import styles from './HeroSection.module.css';
import { profile } from '../../data/profile';
import { GITHUB_URL, LINKEDIN_URL, EMAIL } from '../../utils/constants';

const roles = ['Software Engineer', 'Full-Stack Developer', 'Backend Engineer', 'DevOps Engineer'];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      const speed = isDeleting ? 40 : 80;
      timeout = setTimeout(() => {
        setDisplayed(
          isDeleting
            ? currentRole.slice(0, displayed.length - 1)
            : currentRole.slice(0, displayed.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.left}>
          <p className={styles.greeting}>
            <span className={styles.greetingLine} />
            HELLO, I'M
          </p>

          <div className={styles.imageWrapper}>
            <img src="/profile.jpeg" alt="Rohit Kumar" className={styles.image} />
            <div className={styles.imageRing} />
          </div>

          <h1 className={styles.name}>
            <span className={styles.homeNameGradient}>{profile.name}</span>
          </h1>

          <p className={styles.role}>
            I'm a{' '}
            <span className={styles.typewriter}>
              {displayed}
              <span className={styles.caret}>|</span>
            </span>
          </p>

          <p className={styles.description}>{profile.summary}</p>

          <div className={styles.actions}>
            <Button variant="primary" size="lg" onClick={() => scrollToSection('contact')}>
              Get in Touch
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection('projects')}>
              View My Work
            </Button>
          </div>

          <div className={styles.socials}>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href={`mailto:${EMAIL}`} className={styles.socialLink} aria-label="Email">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
              </svg>
            </a>
          </div>
        </div>

        {/*<div className={styles.right}>
          <div className={styles.decorativeCircle}>
            <div className={styles.floatingCode} style={{ top: '15%', right: '10%' }}>
              <span className={styles.codeLine}>{'<'}<span style={{ color: 'var(--color-primary)' }}>Component</span>{' />'}</span>
            </div>
            <div className={styles.floatingCode} style={{ bottom: '20%', left: '5%' }}>
              <span className={styles.codeLine}>{'{'}<span style={{ color: 'var(--color-accent)' }}>build</span>{'()'}{' }'}</span>
            </div>
            <div className={styles.floatingDot} style={{ top: '10%', left: '30%', background: 'var(--color-primary)', animationDelay: '0s' }} />
            <div className={styles.floatingDot} style={{ bottom: '30%', right: '20%', background: 'var(--color-accent)', animationDelay: '1s' }} />
            <div className={styles.floatingDot} style={{ top: '50%', left: '10%', background: 'var(--color-success)', animationDelay: '2s' }} />
          </div>
        </div>*/}

        <div className={styles.aboutDecoration} aria-hidden="true">
          <div className={styles.homeDecorCircle}>
            {/* B/W cloud icon in the middle */}
            <svg className={styles.homeCloudIcon} viewBox="0 0 64 64">
              <path d="M20 46h28a10 10 0 0 0 0-20 14 14 0 0 0-27-4A11 11 0 0 0 20 46Z" />
            </svg>

            {/* Keep your existing floating chips as-is, and add these extra ones */}
            <div className={styles.homeFloating} style={{ top: "14%", left: "10%", animationDelay: "0s" }}>
              <span className={styles.homeCodeSnippet}>class {"{}"}</span>
            </div>

            <div className={styles.homeFloating} style={{ top: "22%", right: "8%", animationDelay: "0.4s" }}>
              <span className={styles.homeCodeSnippet}>@Override</span>
            </div>

            <div className={styles.homeFloating} style={{ bottom: "22%", left: "8%", animationDelay: "0.8s" }}>
              <span className={styles.homeCodeSnippet}>{"</div>"}</span>
            </div>

            <div className={styles.homeFloating} style={{ bottom: "14%", right: "10%", animationDelay: "1.2s" }}>
              <span className={styles.homeCodeSnippet}>new Thread()</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bouncing scroll-down arrow */}
      <button className={styles.scrollHint} onClick={() => scrollToSection('about')} aria-label="Scroll down">
        <span className={styles.scrollText}>Scroll Down</span>
        <svg className={styles.scrollArrow} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </button>
    </section>
  );
}