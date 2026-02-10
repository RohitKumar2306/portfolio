import { useState, useEffect, useCallback } from 'react';
import styles from './BootScreen.module.css';

const SLOGAN = 'Consistency, discipline, and self-belief turn goals into reality.';

export default function BootScreen({ onComplete }: { onComplete: () => void }) {
  const [displayed, setDisplayed] = useState('');
  const [phase, setPhase] = useState<'typing' | 'pause' | 'exit'>('typing');

  const finishTyping = useCallback(() => {
    setPhase('pause');
    setTimeout(() => {
      setPhase('exit');
      setTimeout(onComplete, 800); // wait for collapse animation
    }, 600); // pause after fully typed
  }, [onComplete]);

  useEffect(() => {
    if (phase !== 'typing') return;

    if (displayed.length < SLOGAN.length) {
      const timeout = setTimeout(() => {
        setDisplayed(SLOGAN.slice(0, displayed.length + 1));
      }, 45);
      return () => clearTimeout(timeout);
    } else {
      finishTyping();
    }
  }, [displayed, phase, finishTyping]);

  return (
    <div className={`${styles.boot} ${phase === 'exit' ? styles.exit : ''}`}>
      {/* Subtle scan lines */}
      <div className={styles.scanlines} />

      {/* Floating particles */}
      <div className={styles.particles}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              left: `${15 + i * 14}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${3 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      <div className={styles.center}>
        {/* Spinner */}
        <div className={styles.spinner}>
          <div className={styles.spinnerRing} />
        </div>

        {/* Typed slogan */}
        <p className={styles.slogan}>
          {displayed}
          <span className={styles.cursor}>|</span>
        </p>

        {/* Subtle attribution */}
        <p className={styles.author}>— Rohit Kumar Chintamani</p>
      </div>
    </div>
  );
}