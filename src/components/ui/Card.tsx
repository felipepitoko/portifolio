/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createContext, useContext, type ReactNode } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/utils/cn';

interface CardContextProps {
  isHovered: boolean;
}

const CardContext = createContext<CardContextProps | undefined>(undefined);

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-2xl border border-brand-outline/30 bg-brand-surface/40 transition-all duration-500 hover:border-brand-indigo/50',
        className
      )}
    >
      {children}
    </motion.div>
  );
}

function CardImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div className={cn('absolute inset-0 z-0 overflow-hidden', className)}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/60 to-transparent" />
    </div>
  );
}

function CardContent({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('relative z-10 p-8 h-full flex flex-col justify-end', className)}>{children}</div>;
}

function CardHeader({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('mb-4', className)}>{children}</div>;
}

function CardFooter({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('mt-6', className)}>{children}</div>;
}

// Compound Pattern
Card.Image = CardImage;
Card.Content = CardContent;
Card.Header = CardHeader;
Card.Footer = CardFooter;
