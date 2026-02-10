import React from 'react';
import styles from './IconButton.module.css';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function IconButton({ children, className = '', ...props }: IconButtonProps) {
  return <button className={`${styles.iconButton} ${className}`} {...props}>{children}</button>;
}
