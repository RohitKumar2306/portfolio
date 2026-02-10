import React from 'react';
import { useInView } from '../../hooks/useInView';
import styles from './RevealOnScroll.module.css';

type AnimationType =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'scale-up'
  | 'card-build'
  | 'typewriter'
  | 'blur-in';

interface RevealOnScrollProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  staggerIndex?: number;
  threshold?: number;
}

export default function RevealOnScroll({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  className = '',
  staggerIndex = 0,
  threshold = 0.15,
}: RevealOnScrollProps) {
  const { ref, isInView } = useInView({ threshold });

  const totalDelay = delay + staggerIndex * 120;

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${styles[animation]} ${isInView ? styles.visible : ''} ${className}`}
      style={{
        transitionDelay: `${totalDelay}ms`,
        transitionDuration: `${duration}ms`,
        animationDelay: `${totalDelay}ms`,
        animationDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}
