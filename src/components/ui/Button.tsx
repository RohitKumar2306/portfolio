import React from 'react';
import styles from './Button.module.css';
import { clsx } from '../../utils/clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) {
  return (
    <button className={clsx(styles.button, styles[variant], styles[size], className)} {...props}>
      {children}
    </button>
  );
}
