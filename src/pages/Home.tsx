/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight, Database, Cloud, Terminal, Settings2, Globe } from 'lucide-react';
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
              Disponível para Sistemas Escaláveis
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 font-display text-5xl font-bold leading-[1.1] md:text-7xl"
          >
            Arquitetura Escalável.<br />
            <span className="python-gradient">Elegância Pythonica.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mb-10 max-w-2xl text-lg text-brand-text-dim"
          >
            Arquiteto de software full-stack especializado em backends Python de alta concorrência e frontends modernos em React. Construindo a infraestrutura do amanhã com código de precisão.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button size="lg" className="w-full sm:w-auto">
              Ver Ecossistema <ArrowRight size={18} />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Ler Documentação
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Projetos Section */}
      <section id="projetos" className="mx-auto w-full max-w-7xl px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="mb-2 text-3xl font-bold">Feitos Arquiteturais</h2>
            <p className="text-brand-text-dim">Projetos de engenharia selecionados com foco em performance.</p>
          </div>
          <div className="hidden gap-2 md:flex">
            <button className="rounded-lg border border-brand-outline p-2 hover:bg-brand-surface transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button className="rounded-lg border border-brand-outline p-2 hover:bg-brand-surface transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {projects.length > 0 && (
            <>
              {/* Main Large Project */}
              <Card className="min-h-[500px] md:col-span-8">
                <Card.Image src={projects[0].image} alt={projects[0].title} />
                <Card.Content>
                  <Card.Header>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {projects[0].developerSkills.map(skill => (
                        <SkillTag key={skill.id} skill={skill} />
                      ))}
                    </div>
                    <h3 className="text-3xl font-bold leading-tight">{projects[0].title}</h3>
                  </Card.Header>
                  <p className="max-w-md text-brand-text-dim">{projects[0].description}</p>
                  <Card.Footer>
                    <Button variant="ghost" className="px-0 group-hover:gap-4">
                      Saiba Mais <ArrowRight size={18} />
                    </Button>
                  </Card.Footer>
                </Card.Content>
              </Card>

              {/* Secondary Projects Col */}
              <div className="flex flex-col gap-6 md:col-span-4">
                {projects.slice(1).map((project) => (
                  <Card key={project.id} className="flex-1 min-h-[240px]">
                    <Card.Image src={project.image} alt={project.title} />
                    <Card.Content className="p-6">
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.developerSkills.map(skill => (
                          <SkillTag key={skill.id} skill={skill} className="px-2 py-0.5 text-[8px]" />
                        ))}
                      </div>
                      <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                      <p className="text-xs text-brand-text-dim leading-relaxed">{project.description}</p>
                    </Card.Content>
                  </Card>
                ))}
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
              Conjunto de habilidades proprietário otimizado para o ecossistema Vite/React e backends de alta carga.
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
                <h4 className="mb-4 text-2xl font-bold">Filosofia de Arquitetura</h4>
                <p className="mb-6 italic text-brand-text-dim">
                  "Programas devem ser escritos para pessoas lerem, e apenas incidentalmente para máquinas executarem."
                </p>
                <div className="rounded-lg border border-brand-outline/50 bg-brand-bg/50 p-4 font-display text-sm tracking-wide text-brand-emerald">
                  <span className="text-brand-text-dim">def</span> <span className="text-brand-indigo">otimizar_sistema</span>(complexidade):<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;return simplicidade <span className="text-brand-text-dim">if</span> legivel <span className="text-brand-text-dim">else</span> refatorar()
                </div>
              </div>
              <div className="h-64 w-64 shrink-0 overflow-hidden rounded-2xl border border-brand-outline/30 grayscale transition-all duration-700 hover:grayscale-0">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC06KnzDSNhCUYHkMI5qCGK1eDGmUYR3wNxGWGEFLbSFjRuitgqH-RyM-H5Lo0k5bNm73vaXdwWwYWWLQE7hq2YVj99qYyuPPhPQDJJjWz4yXzoZPNiLYkRLtr62g-4Bc9Sg9iBI07skqdTGNcWJ1Fx1SDt8xLChpPV1it8X1W9TiMaZV5LlQJABrYRhm1sAFVdfp-lGOqXlf1ESwwRBUf6EhbwKwMy_W1Vj5LMZz8Jmn3cO9rln68zFdjyDG6fplcREVTUmSyYDYn5"
                  alt="Retrato do Arquiteto"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-4xl px-8 text-center">
        <h2 className="mb-6 text-4xl font-bold">Pronto para escalar?</h2>
        <p className="mb-10 text-lg text-brand-text-dim">
          Estou aceitando novos projetos para o 3º trimestre de 2024. Vamos conversar sobre seus requisitos arquiteturais.
        </p>
        <div className="inline-flex flex-col gap-2 p-1.5 rounded-2xl bg-brand-surface border border-brand-outline/50 sm:flex-row">
          <input
            type="email"
            placeholder="email@arquitetura.dev"
            className="bg-transparent px-6 py-4 font-sans text-brand-text outline-none w-72"
          />
          <Button size="lg" className="rounded-xl">
            Inicializar
          </Button>
        </div>
      </section>
    </div>
  );
}
