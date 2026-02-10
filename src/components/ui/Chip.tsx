import React from 'react';
import styles from './Chip.module.css';

interface ChipProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  variant?: 'default' | 'primary' | 'accent';
}

export default function Chip({ children, active = false, onClick, variant = 'default' }: ChipProps) {
  return (
    <span
      className={`${styles.chip} ${active ? styles.active : ''} ${styles[variant]} ${onClick ? styles.clickable : ''}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </span>
  );
}
