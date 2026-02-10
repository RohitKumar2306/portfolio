import { useState, useMemo } from 'react';
import Container from '../components/layout/Container';
import HeroSection from '../components/content/HeroSection';
import SectionHeader from '../components/content/SectionHeader';
import ExperienceCard from '../components/content/ExperienceCard';
import EducationCard from '../components/content/EducationCard';
import SkillGroup from '../components/content/SkillGroup';
import ProjectGrid from '../components/content/ProjectGrid';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Chip from '../components/ui/Chip';
import Input from '../components/ui/Input';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import { useToast } from '../app/providers/ToastProvider';
import { useCopyToClipboard } from '../hooks/useCopyToClipboard';
import {
  experiences,
  education,
  certifications,
  projects,
  skillCategories,
} from '../data/profile';
import { EMAIL, PHONE, GITHUB_URL, LINKEDIN_URL } from '../utils/constants';
import styles from './SinglePage.module.css';

const projectCategories = ['All', 'Full Stack', 'Backend', 'Frontend', 'AI'];

const WORKFLOW_STEPS = [
  { icon: '💡', label: 'Idea' },
  { icon: '🎨', label: 'Design' },
  { icon: '📋', label: 'Plan' },
  { icon: '🤖', label: 'AI Help' },
  { icon: '💻', label: 'Code' },
  { icon: '🧪', label: 'Test' },
  { icon: '🚀', label: 'Deploy' },
  { icon: '🔧', label: 'Maintain' },
];

export default function SinglePage() {
  const { showToast } = useToast();
  const [_copied, copyToClipboard] = useCopyToClipboard();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchCat = activeCategory === 'All' || p.tags.includes(activeCategory);
      const matchSearch =
        searchQuery === '' ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleCopyEmail = async () => {
    await copyToClipboard(EMAIL);
    showToast('Email copied to clipboard!', 'success');
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    showToast('Message sent successfully!', 'success');
  };

  const contactCards = [
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" /></svg>,
      title: 'Email',
      text: EMAIL,
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" /></svg>,
      title: 'Phone',
      text: PHONE,
    },
  ];

  return (
    <div className={styles.page}>
      {/* ═══ HOME ═══ */}
      <section id="home">
        <Container>
          <HeroSection />
        </Container>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section id="about" className={styles.section}>
        <Container>
          <SectionHeader
            title="About Me"
            subtitle="Passionate about building robust, scalable software solutions that solve real-world problems."
          />
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <RevealOnScroll animation="fade-right">
                <h3 className={styles.aboutSubtitle}>
                  Software Engineering &amp; Development
                </h3>
              </RevealOnScroll>
              <RevealOnScroll animation="fade-up" delay={100}>
                <p className={styles.aboutParagraph}>
                  I am a Software Engineer with 4+ years of experience developing
                  scalable, full-stack applications. I specialize in designing
                  secure cloud architectures, optimizing deployment pipelines,
                  and implementing robust security protocols to support
                  mission-critical operations.
                </p>
              </RevealOnScroll>
              <RevealOnScroll animation="fade-up" delay={200}>
                <p className={styles.aboutParagraph}>
                  Backed by a recent Master's in Computer Science from
                  the Illinois Institute of Technology, I bring hands-on experience
                  from roles at Accenture, Dreams Media Solutions, and
                  Capital Info Solutions.
                </p>
              </RevealOnScroll>

              <div className={styles.aboutStatsRow}>
                {[
                  { value: '4+', label: 'Years Experience' },
                  { value: '7+', label: 'Featured Projects' },
                  { value: '2', label: 'Certifications' },
                ].map((stat, i) => (
                  <RevealOnScroll
                    key={stat.label}
                    animation="scale-up"
                    staggerIndex={i}
                  >
                    <div className={styles.statCard}>
                      <div className={styles.statValue}>{stat.value}</div>
                      <div className={styles.statLabel}>{stat.label}</div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>

            <div className={styles.aboutDecoration}>
              <RevealOnScroll animation="scale-up">
                <div className={styles.decorCircle}>
                  <div
                    className={styles.aboutFloating}
                    style={{ top: '8%', left: '15%', animationDelay: '0s' }}
                  >
                    <span className={styles.aboutCodeSnippet}>
                      {'{'} React {'}'}
                    </span>
                  </div>
                  <div
                    className={styles.aboutFloating}
                    style={{ top: '25%', right: '5%', animationDelay: '1.2s' }}
                  >
                    <span className={styles.aboutCodeSnippet}>Spring Boot</span>
                  </div>
                  <div
                    className={styles.aboutFloating}
                    style={{
                      bottom: '25%',
                      left: '0%',
                      animationDelay: '0.6s',
                    }}
                  >
                    <span className={styles.aboutCodeSnippet}>TypeScript</span>
                  </div>
                  <div
                    className={styles.aboutFloating}
                    style={{
                      bottom: '8%',
                      right: '12%',
                      animationDelay: '1.8s',
                    }}
                  >
                    <span className={styles.aboutCodeSnippet}>AWS ☁️</span>
                  </div>
                  <div
                    className={styles.aboutDot}
                    style={{
                      top: '5%',
                      right: '30%',
                      background: 'var(--color-primary)',
                    }}
                  />
                  <div
                    className={styles.aboutDot}
                    style={{
                      bottom: '15%',
                      left: '25%',
                      background: 'var(--color-accent)',
                      animationDelay: '1s',
                    }}
                  />
                  <div
                    className={styles.aboutDot}
                    style={{
                      top: '55%',
                      right: '5%',
                      background: 'var(--color-success)',
                      animationDelay: '2s',
                    }}
                  />

                  <div className={styles.aboutCenterIcon}>
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--color-primary)"
                      strokeWidth="1.5"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>

          <RevealOnScroll animation="fade-up" delay={300}>
            <div className={styles.workflowCard}>
              <h4 className={styles.workflowTitle}>My Development Workflow</h4>
              <div className={styles.pipeline}>
                <div className={styles.pipelineLine}>
                  <div className={styles.pipelineGlow} />
                </div>
                {WORKFLOW_STEPS.map((step, i) => (
                  <div
                    key={step.label}
                    className={styles.pipelineStep}
                    style={{ animationDelay: `${i * 0.15}s` }}
                  >
                    <div className={styles.stepDot}>
                      <span className={styles.stepIcon}>{step.icon}</span>
                    </div>
                    <span className={styles.stepLabel}>{step.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      {/* ═══ EXPERIENCE ═══ */}
      <section id="experience" className={styles.section}>
        <Container>
          <SectionHeader
            title="Professional Experience"
            subtitle="A track record of delivering full-stack solutions with measurable impact."
          />
          <div className={styles.experienceGrid}>
            {experiences.map((exp, i) => (
              <RevealOnScroll
                key={exp.id}
                animation="card-build"
                staggerIndex={i}
                duration={800}
              >
                <ExperienceCard experience={exp} isLatest={i === 0} />
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══ EDUCATION ═══ */}
      <section id="education" className={styles.section}>
        <Container>
          <SectionHeader
            title="Education & Achievements"
            subtitle="A strong academic foundation from premier institutions, complemented by professional certifications."
          />
          <div className={styles.educationGrid}>
            {education.map((edu, i) => (
              <RevealOnScroll
                key={edu.id}
                animation="card-build"
                staggerIndex={i}
              >
                <EducationCard education={edu} isLatest={i === 0} />
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll animation="blur-in" delay={200}>
            <h3 className={styles.subSectionTitle}>Certifications</h3>
          </RevealOnScroll>
          <div className={styles.certGrid}>
            {certifications.map((cert, i) => (
              <RevealOnScroll
                key={cert.id}
                animation="scale-up"
                staggerIndex={i}
              >
                <Card className={styles.certCard}>
                  <div className={styles.certIcon}>🏆</div>
                  <h4 className={styles.certName}>{cert.name}</h4>
                  <p className={styles.certIssuer}>{cert.issuer}</p>
                  <p className={styles.certDate}>{cert.date}</p>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══ SKILLS ═══ */}
      <section id="skills" className={styles.section}>
        <Container>
          <SectionHeader
            title="Skills & Expertise"
            subtitle="Technologies and tools I work with on a daily basis."
          />
          <div className={styles.skillsGrid}>
            {skillCategories.map((cat, i) => (
              <RevealOnScroll
                key={cat.id}
                animation="card-build"
                staggerIndex={i}
              >
                <SkillGroup category={cat} />
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══ PROJECTS ═══ */}
      <section id="projects" className={styles.section}>
        <Container>
          <SectionHeader
            title="Featured Projects"
            subtitle="A showcase of my technical work in full-stack development, backend systems, and AI integration."
          />
          <RevealOnScroll animation="fade-up">
            <div className={styles.projectFilters}>
              <div className={styles.projectCategories}>
                {projectCategories.map((cat) => (
                  <Chip
                    key={cat}
                    active={activeCategory === cat}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </Chip>
                ))}
              </div>
              <div className={styles.projectSearch}>
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
      </section>

      {/* ═══ CONTACT ═══ */}
      <section id="contact" className={styles.section}>
        <Container>
          {/* Header added here */}
          <SectionHeader
            title="Get In Touch"
            subtitle="Open to Full-Stack, Frontend, Backend, DevOps, and Cloud Engineering opportunities. If you're building scalable systems, crafting seamless user experiences, or modernizing platforms through automation and cloud-native architecture, I'd welcome the conversation."
          />

          <div className={styles.contactContainer}>
            {/* LEFT COLUMN: INFO */}
            <div className={styles.contactLeft}>
              <RevealOnScroll animation="fade-right">
                <h1 className={styles.contactHeading}>Let's Connect</h1>
                <p className={styles.contactText}>
                  Prefer email? Reach me directly at <br />
                  <a href={`mailto:${EMAIL}`} className={styles.emailLink}>
                    {EMAIL}
                  </a>
                </p>

                <div className={styles.contactStack}>
                  {contactCards.map((card, i) => (
                    <div
                      key={card.title}
                      className={styles.contactRow}
                      onClick={
                        card.title === 'Email' ? handleCopyEmail : undefined
                      }
                      style={{
                        cursor: card.title === 'Email' ? 'pointer' : 'default',
                      }}
                    >
                      <div className={styles.iconBox}>{card.icon}</div>
                      <div>
                        <div className={styles.cardTitle}>{card.title}</div>
                        <div className={styles.cardText}>{card.text}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={styles.socialSection}>
                  <p className={styles.socialTitle}>
                    Follow me on social media
                  </p>
                  <div className={styles.socialLinks}>
                    <a
                      href={GITHUB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                      aria-label="GitHub"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a
                      href={LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                      aria-label="LinkedIn"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            {/* RIGHT COLUMN: FORM */}
            <div className={styles.contactRight}>
              <RevealOnScroll animation="fade-left" delay={200}>
                <div className={styles.formContainer}>
                  <h2 className={styles.formTitle}>Contact Form</h2>
                  <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.inputGroupRow}>
                      <div className={styles.inputWrapper}>
                        <input
                          type="text"
                          id="firstName"
                          placeholder=" "
                          required
                          className={styles.inputField}
                        />
                        <label
                          htmlFor="firstName"
                          className={styles.inputLabel}
                        >
                          First Name *
                        </label>
                      </div>
                      <div className={styles.inputWrapper}>
                        <input
                          type="text"
                          id="lastName"
                          placeholder=" "
                          required
                          className={styles.inputField}
                        />
                        <label htmlFor="lastName" className={styles.inputLabel}>
                          Last Name *
                        </label>
                      </div>
                    </div>

                    <div className={styles.inputWrapper}>
                      <input
                        type="email"
                        id="email"
                        placeholder=" "
                        required
                        className={styles.inputField}
                      />
                      <label htmlFor="email" className={styles.inputLabel}>
                        Email *
                      </label>
                    </div>

                    <div className={styles.inputWrapper}>
                      <input
                        type="tel"
                        id="phone"
                        placeholder=" "
                        className={styles.inputField}
                      />
                      <label htmlFor="phone" className={styles.inputLabel}>
                        Phone
                      </label>
                    </div>

                    <div className={styles.inputWrapper}>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder=" "
                        required
                        className={styles.textAreaField}
                      ></textarea>
                      <label htmlFor="message" className={styles.inputLabel}>
                        Message *
                      </label>
                    </div>

                    <Button
                      type="submit"
                      size="md"
                      className={styles.submitBtn}
                    >
                      SEND
                    </Button>
                  </form>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}