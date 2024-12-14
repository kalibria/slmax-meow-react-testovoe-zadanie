'use client';
import styles from './button.module.css';
import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export default function Button({ title, ...props }: Props) {
  return (
    <button className={styles.button} {...props}>
      {title}
    </button>
  );
}
