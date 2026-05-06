/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Terminal, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-8">
        <div className="font-display text-xl font-bold tracking-tighter text-brand-indigo">
          Dev&Lead
        </div>
        
        <div className="hidden gap-8 font-display text-sm tracking-tight md:flex">
          {['Projetos', 'Habilidades', 'Contato'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-brand-text-dim transition-colors hover:text-brand-indigo"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="text-brand-text-dim transition-colors hover:text-brand-indigo">
            <Terminal size={20} />
          </button>
          <a href="/curriculo_dev_set_2025.pdf" target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="rounded-lg py-2">
              Currículo
            </Button>
          </a>
        </div>
      </nav>
    </header>
  );
}
