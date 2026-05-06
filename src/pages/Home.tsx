/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight, Database, Cloud, Terminal, Settings2, Globe, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SkillTag } from '@/components/ui/SkillTag';
import { cn } from '@/utils/cn';
import { usePortfolioData } from '@/hooks/usePortfolioData';

const IconMap: Record<string, any> = {
  Terminal,
  Settings2,
  Database,
  Cloud,
  Globe
};

export default function Home() {
  const { projects, skills, isLoading } = usePortfolioData();
  const [currentSecondaryIndex, setCurrentSecondaryIndex] = useState(0);
  const [contactMessage, setContactMessage] = useState('');

  const handleSendMessage = () => {
    if (!contactMessage.trim()) return;
    const email = 'lip-sousa@hotmail.com';
    const subject = encodeURIComponent('Ideia / Projeto - Felipe Costa Portfolio');
    const body = encodeURIComponent(contactMessage);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const secondaryProjects = projects.slice(1);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(secondaryProjects.length / itemsPerPage);

  const handleNext = () => {
    setCurrentSecondaryIndex((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentSecondaryIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  if (isLoading) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-indigo border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-24 pb-32">
      {/* Hero Section */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-8">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <svg height="100%" width="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 50 Q 25 20 50 50 T 100 50" fill="none" stroke="currentColor" className="text-brand-indigo" strokeWidth="0.1" />
            <path d="M0 60 Q 25 30 50 60 T 100 60" fill="none" stroke="currentColor" className="text-brand-emerald" strokeWidth="0.1" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-outline/50 bg-brand-surface/50 px-4 py-1.5"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand-emerald" />
            <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-brand-emerald">
              Disponível para facilitar a sua vida com tech
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 font-display text-5xl font-bold leading-[1.1] md:text-7xl"
          >
            Soluções reais<br />
            <span className="python-gradient">Com elegância Pythonica.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mb-10 max-w-2xl text-lg text-brand-text-dim"
          >
            Arquiteto de software full-stack com muita história pra contar. Da avenida paulista ao interior da bahia, construindo tech que seja útil na vida dos usuários.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-8"
          >
            <a 
              href="https://github.com/felipepitoko" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-text-dim transition-colors hover:text-brand-indigo"
              title="GitHub"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://linkedin.com/in/felipecostapy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-text-dim transition-colors hover:text-brand-indigo"
              title="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="mailto:lip-sousa@hotmail.com" 
              className="text-brand-text-dim transition-colors hover:text-brand-indigo"
              title="Email"
            >
              <Mail size={28} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Projetos Section */}
      <section id="projetos" className="mx-auto w-full max-w-7xl px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="mb-2 text-3xl font-bold">Minha história em projetos</h2>
            <p className="text-brand-text-dim">Jurídico, medicina, matemática aplicada, tem de tudo ai</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="font-display text-sm font-medium tracking-widest text-brand-text-dim">
              <span className="text-brand-indigo">{(currentSecondaryIndex + 1).toString().padStart(2, '0')}</span>
              <span className="mx-2 opacity-30">/</span>
              {totalPages.toString().padStart(2, '0')}
            </div>
            <div className="hidden gap-2 md:flex">
              <button 
                onClick={handlePrev}
                className="rounded-lg border border-brand-outline p-2 hover:bg-brand-surface transition-colors disabled:opacity-30"
                disabled={totalPages <= 1}
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={handleNext}
                className="rounded-lg border border-brand-outline p-2 hover:bg-brand-surface transition-colors disabled:opacity-30"
                disabled={totalPages <= 1}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 items-start">
          {projects.length > 0 && (
            <>
              {/* Main Large Project */}
              <div className="md:col-span-8">
                <Card className="h-[536px]">
                  <Card.Image src={projects[0].image} alt={projects[0].title} />
                  <Card.Content className="h-full">
                    <Card.Header>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {projects[0].developerSkills.map(skill => (
                          <SkillTag key={skill.id} skill={skill} />
                        ))}
                      </div>
                      <h3 className="text-4xl font-bold leading-tight">{projects[0].title}</h3>
                    </Card.Header>
                    <p className="max-w-xl text-brand-text-dim text-lg">{projects[0].description}</p>
                  </Card.Content>
                </Card>
              </div>

              {/* Secondary Projects Col (Carousel) */}
              <div className="md:col-span-4 h-full">
                <div className="relative h-[536px] overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSecondaryIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-6 h-full"
                    >
                      {secondaryProjects
                        .slice(currentSecondaryIndex * itemsPerPage, (currentSecondaryIndex + 1) * itemsPerPage)
                        .map((project) => (
                          <Card key={project.id} className="flex-1">
                            <Card.Image src={project.image} alt={project.title} />
                            <Card.Content className="p-6 h-full flex flex-col justify-end">
                              <div className="flex flex-wrap gap-1 mb-3">
                                {project.developerSkills.map(skill => (
                                  <SkillTag key={skill.id} skill={skill} className="px-2 py-0.5 text-[8px]" />
                                ))}
                              </div>
                              <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                              <p className="text-xs text-brand-text-dim leading-relaxed line-clamp-2">{project.description}</p>
                            </Card.Content>
                          </Card>
                        ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="habilidades" className="w-full border-y border-brand-outline/20 bg-brand-surface/30 py-24">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold">Stack Tecnológica Principal</h2>
            <p className="mx-auto max-w-xl text-brand-text-dim">
              As linguagens e frameworks que já usei por aí, profissionalmente. Muitas delas aprendi ao longo dos projetos. Nem só de python se vive o homem.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => {
              const Icon = IconMap[skill.iconName] || Terminal;
              return (
                <div
                  key={skill.id}
                  className={cn(
                    'flex items-center gap-3 rounded-xl border border-brand-outline/50 bg-brand-bg px-6 py-4 transition-all duration-300',
                    skill.color
                  )}
                >
                  <Icon className="text-current" size={20} />
                  <span className="font-display font-medium">{skill.name}</span>
                </div>
              );
            })}
          </div>

          <div className="glass-panel mx-auto mt-20 max-w-4xl rounded-2xl p-8">
            <div className="flex flex-col items-center gap-12 md:flex-row">
              <div className="flex-1">
                <h4 className="mb-4 text-2xl font-bold">Programando para pessoas</h4>
                <p className="mb-6 text-xl italic leading-relaxed text-brand-text-dim">
                  "Se alguém não usar e tiver a vida facilitada por ele, o melhor e mais caro sistema não serve pra nada."
                </p>
                <div className="font-display font-medium text-brand-indigo">
                  — Felipe Costa
                </div>
              </div>
              <div className="h-80 w-64 shrink-0 overflow-hidden rounded-2xl border border-brand-outline/30 grayscale transition-all duration-700 hover:grayscale-0">
                <img
                  src="/assets/felipe-jobs.png"
                  alt="Felipe Costa"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="mx-auto max-w-4xl px-8 text-center scroll-mt-24 py-24">
        <h2 className="mb-6 text-4xl font-bold">Precisa de um tech?</h2>
        <p className="mb-10 text-lg text-brand-text-dim">
          Posso te ajudar a resolver qualquer problema da vida real com tecnologia. Me traz sua ideia ou seu problema que eu ajudo a desenrolar.
        </p>
        <div className="inline-flex flex-col gap-2 p-1.5 rounded-2xl bg-brand-surface border border-brand-outline/50 sm:flex-row">
          <input
            type="text"
            value={contactMessage}
            onChange={(e) => setContactMessage(e.target.value)}
            placeholder="Felipe eu tenho uma ideia..."
            className="bg-transparent px-6 py-4 font-sans text-brand-text outline-none w-72"
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <Button size="lg" className="rounded-xl" onClick={handleSendMessage}>
            Fazer acontecer
          </Button>
        </div>
      </section>
    </div>
  );
}
