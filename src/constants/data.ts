/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Skill } from '@/types';

export const SKILLS: Skill[] = [
  { id: '1', name: 'Python 3.12', iconName: 'Terminal', color: 'hover:border-brand-indigo hover:shadow-[0_0_15px_rgba(73,75,214,0.2)]' },
  { id: '2', name: 'Vite / React', iconName: 'Settings2', color: 'hover:border-brand-emerald hover:shadow-[0_0_15px_rgba(0,165,114,0.2)]' },
  { id: '3', name: 'PostgreSQL', iconName: 'Database', color: 'hover:border-orange-400/50 hover:shadow-[0_0_15px_rgba(251,146,60,0.2)]' },
  { id: '4', name: 'Docker Swarm', iconName: 'Cloud', color: 'hover:border-brand-indigo hover:shadow-[0_0_15px_rgba(73,75,214,0.2)]' },
  { id: '5', name: 'gRPC / Protobuf', iconName: 'Globe', color: 'hover:border-brand-emerald hover:shadow-[0_0_15px_rgba(0,165,114,0.2)]' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Scraper e Dashboard de Processos Judiciais',
    description: 'Uma plataforma completa para coletar dados de fontes jurídicas e servir informações úteis para advogados.',
    developerSkills: [SKILLS[0], SKILLS[1]], // Exemplo de uso do objeto
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDm8qhR9QmvxbToLpneqbtUjgkqhPWZy44OnJWC0yM3neVxEIc2jCZ7_1wjbpDjtZCtdD4PvdhXSqRo5oVK6HXnLEbjsP9-9qsb8Wkg62KtiRCyoVA7pKu6CKlpyr6eNZ-k9HCYb351h2AMTHCY9cBuPvwIaTXAKDYqVItPSF0hrnoPYx3kkmG9dcN5U3n60nSLk2FKQMOwBRYjrPEtyzN7xYHBPJJPcvw8QoQhIeOOAlJdR6P9KVyMxi3F-rxqyKF3Brlnb1kIBPb1',
    size: 'large'
  },
  {
    id: '2',
    title: 'Auditor de Infraestrutura em Nuvem',
    description: 'Escaneamento automatizado de segurança e conformidade para implantações multi-nuvem.',
    developerSkills: [SKILLS[0], SKILLS[3]],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwwDTpgrXelqYlE2umLpULFzbXsEwgJhLFUte45coHFtoMOyCYXpVH6GhSpOiTvHr-_X_YfkfaquIYi63d8YJiHDHIePJU8Jj-kqjc8iVoSAUws37Pif-EB7GJulTV1zhk-hRSDeLAyqVEmEBxWIknmefkAKFQf9nbh2z-9gTZnGug6wmSwVHjKbhFjvHJNk2nFmKHC3r9HrvpV9Ym-EW5sL-3NNi0rJbPysM1vvxMEA1cp6UAWZQrp3J2orPHguhyR-fV_MewFf5O',
    size: 'small'
  },
  {
    id: '3',
    title: 'Pipeline ETL de Alto Rendimento',
    description: 'Mecanismo de processamento distribuído para análise de documentos jurídicos em escala de petabytes.',
    developerSkills: [SKILLS[2], SKILLS[4]],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7M7YA2qOxR2PHfoxwGL3i7jCvcGaGyMXIK69VA7bWxfJGhKaavkjCobMKlAPiJNymUg1Cu6p6z9H41mPNzEZjp6kVn4S1pWNSUakFfpuuCa8gPy1VGaoTOf4m8fYRKpHPma8BKvZXrS8ZTXQWowp29HiAoMh_QJiP_aKBlRzRwrYjgtclzCMNI5lW_cKsBCeVp8ei5m8qXXqtx0eVxJ6dVTaEq0YPKPxXtl32LJDJH8wd-7oYEHoIAVB8C84s9U6yz1WC9kpDFKxA',
    size: 'small'
  },
];
