'use client';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  children?: ReactNode;
  className?: string;
}

export default function Button({
  title,
  children,
  className,
  ...props
}: Props) {
  return (
    <button className={className} {...props}>
      {title}
      {children}
    </button>
  );
}
