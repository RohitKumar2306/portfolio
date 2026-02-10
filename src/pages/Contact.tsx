import React from 'react';
import Container from '../components/layout/Container';
import Button from '../components/ui/Button';
import RevealOnScroll from '../components/ui/RevealOnScroll';
import { useToast } from '../app/providers/ToastProvider';
import { useCopyToClipboard } from '../hooks/useCopyToClipboard';
import { EMAIL, PHONE, GITHUB_URL, LINKEDIN_URL } from '../utils/constants';
import styles from './Contact.module.css';

// 1. Define the interface for your cards
interface ContactCard {
  icon: React.ReactNode;
  title: string;
  text: string;
  action?: React.ReactNode | null;
  onClick?: () => Promise<void> | void; // Allow both async and sync functions
}

export default function Contact() {
  const { showToast } = useToast();
  const [_copied, copyToClipboard] = useCopyToClipboard();

  const handleCopyEmail = async () => {
    await copyToClipboard(EMAIL);
    showToast('Email copied to clipboard!', 'success');
  };

  // 2. Fix the event type for the form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    showToast('Message sent successfully!', 'success');
  };

  // 3. Type the array explicitly
  const contactCards: ContactCard[] = [
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" /></svg>,
      title: 'Email',
      text: EMAIL,
      action: null,
      onClick: handleCopyEmail
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" /></svg>,
      title: 'Phone',
      text: PHONE,
      action: null,
      // No onClick here, which matches the optional type in the interface
    }
  ];

  return (
    <div className={`${styles.page} page-enter`}>
      <Container>
        <div className={styles.splitLayout}>

          {/* Left Column: Contact Info */}
          <div className={styles.leftColumn}>
            <RevealOnScroll animation="fade-right">
              <h1 className={styles.mainTitle}>Let’s Connect</h1>
              <p className={styles.description}>
                Prefer email? Reach me directly at <br />
                <span className={styles.highlightEmail}>{EMAIL}</span>
              </p>

              <div className={styles.cardList}>
                {contactCards.map((card) => (
                  <div
                    key={card.title}
                    className={styles.contactRow}
                    // 4. Handle the optional click safely
                    onClick={card.onClick ? () => card.onClick!() : undefined}
                    role={card.onClick ? "button" : undefined}
                    style={{ cursor: card.onClick ? 'pointer' : 'default' }}
                  >
                    <div className={styles.iconBox}>{card.icon}</div>
                    <div className={styles.cardContent}>
                      <span className={styles.cardTitle}>{card.title}</span>
                      <span className={styles.cardText}>{card.text}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.socials}>
                <p className={styles.socialsTitle}>Follow me on social media</p>
                <div className={styles.socialLinks}>
                  <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                  </a>
                  <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Contact Form */}
          <div className={styles.rightColumn}>
            <RevealOnScroll animation="fade-left" delay={200}>
              <div className={styles.formContainer}>
                <h2 className={styles.formTitle}>Contact Form</h2>
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.inputGroup}>
                    <div className={styles.inputWrapper}>
                      <input type="text" id="firstName" placeholder=" " required className={styles.input} />
                      <label htmlFor="firstName" className={styles.label}>First Name *</label>
                    </div>
                    <div className={styles.inputWrapper}>
                      <input type="text" id="lastName" placeholder=" " required className={styles.input} />
                      <label htmlFor="lastName" className={styles.label}>Last Name *</label>
                    </div>
                  </div>

                  <div className={styles.inputWrapper}>
                    <input type="email" id="email" placeholder=" " required className={styles.input} />
                    <label htmlFor="email" className={styles.label}>Email *</label>
                  </div>

                  <div className={styles.inputWrapper}>
                    <input type="tel" id="phone" placeholder=" " className={styles.input} />
                    <label htmlFor="phone" className={styles.label}>Phone</label>
                  </div>

                  <div className={styles.inputWrapper}>
                    <textarea id="message" rows={4} placeholder=" " required className={styles.textarea}></textarea>
                    <label htmlFor="message" className={styles.label}>Message *</label>
                  </div>

                  <Button type="submit" size="md" className={styles.submitBtn}>
                    SEND
                  </Button>
                </form>
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </Container>
    </div>
  );
}