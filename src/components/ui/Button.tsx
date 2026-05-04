/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { type ReactNode, forwardRef } from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';
import { cn } from '@/utils/cn';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const variants = {
      primary: 'bg-brand-indigo text-white hover:shadow-[0_0_20px_rgba(73,75,214,0.4)]',
      secondary: 'bg-brand-emerald text-white hover:shadow-[0_0_20px_rgba(0,165,114,0.4)]',
      outline: 'border border-brand-outline hover:bg-brand-surface text-brand-text',
      ghost: 'text-brand-text-dim hover:text-white transition-colors',
    };

    const sizes = {
      sm: 'px-4 py-2 text-xs',
      md: 'px-6 py-3 text-sm',
      lg: 'px-8 py-4 text-base',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          'rounded-xl font-display font-medium uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
