/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Skill } from '@/types';

export const SKILLS: Skill[] = [
  // Linguagens
  { id: '1', name: 'Python', iconName: 'Terminal', color: 'hover:border-emerald-400 hover:shadow-[0_0_15px_rgba(52,211,153,0.2)]', singleColor: 'emerald' },
  { id: '2', name: 'JavaScript', iconName: 'Code2', color: 'hover:border-yellow-400 hover:shadow-[0_0_15px_rgba(250,204,21,0.2)]', singleColor: 'yellow' },
  { id: '3', name: 'TypeScript', iconName: 'Code2', color: 'hover:border-blue-600 hover:shadow-[0_0_15px_rgba(37,99,235,0.2)]', singleColor: 'blue' },
  { id: '4', name: 'C#', iconName: 'Hash', color: 'hover:border-purple-600 hover:shadow-[0_0_15px_rgba(147,51,234,0.2)]', singleColor: 'purple' },
  { id: '5', name: 'Golang', iconName: 'Cpu', color: 'hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]', singleColor: 'cyan' },
  { id: '6', name: 'VisualBasic', iconName: 'FileCode', color: 'hover:border-blue-800 hover:shadow-[0_0_15px_rgba(30,64,175,0.2)]', singleColor: 'blue' },

  // Frameworks Web
  { id: '7', name: 'NextJS', iconName: 'Layers', color: 'hover:border-slate-900 hover:shadow-[0_0_15px_rgba(15,23,42,0.2)]', singleColor: 'slate' },
  { id: '8', name: 'React', iconName: 'Atom', color: 'hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]', singleColor: 'cyan' },
  { id: '9', name: 'NestJS', iconName: 'Zap', color: 'hover:border-rose-600 hover:shadow-[0_0_15px_rgba(225,29,72,0.2)]', singleColor: 'rose' },
  { id: '10', name: 'FastAPI', iconName: 'Zap', color: 'hover:border-emerald-400 hover:shadow-[0_0_15px_rgba(52,211,153,0.2)]', singleColor: 'emerald' },
  { id: '11', name: 'Django', iconName: 'Globe', color: 'hover:border-emerald-900 hover:shadow-[0_0_15px_rgba(6,78,59,0.2)]', singleColor: 'emerald' },
  { id: '12', name: 'Angular', iconName: 'Shield', color: 'hover:border-red-600 hover:shadow-[0_0_15px_rgba(220,38,38,0.2)]', singleColor: 'red' },
  { id: '13', name: 'Flask', iconName: 'Wind', color: 'hover:border-slate-500 hover:shadow-[0_0_15px_rgba(100,116,139,0.2)]', singleColor: 'slate' },

  // Bancos de Dados & ORM
  { id: '14', name: 'PostgreSQL', iconName: 'Database', color: 'hover:border-blue-700 hover:shadow-[0_0_15px_rgba(29,78,216,0.2)]', singleColor: 'blue' },
  { id: '15', name: 'MongoDB', iconName: 'Leaf', color: 'hover:border-emerald-600 hover:shadow-[0_0_15px_rgba(5,150,105,0.2)]', singleColor: 'emerald' },
  { id: '16', name: 'SQLAlchemy', iconName: 'Link', color: 'hover:border-red-700 hover:shadow-[0_0_15px_rgba(185,28,28,0.2)]', singleColor: 'red' },
  { id: '17', name: 'Prisma', iconName: 'Triangle', color: 'hover:border-slate-800 hover:shadow-[0_0_15px_rgba(30,41,59,0.2)]', singleColor: 'slate' },

  // IA & Dados
  { id: '18', name: 'LangChain', iconName: 'Bot', color: 'hover:border-emerald-800 hover:shadow-[0_0_15px_rgba(6,78,59,0.2)]', singleColor: 'emerald' },
  { id: '19', name: 'Pandas', iconName: 'BarChart3', color: 'hover:border-indigo-800 hover:shadow-[0_0_15px_rgba(30,58,138,0.2)]', singleColor: 'indigo' },
  { id: '20', name: 'Boto3 (AWS)', iconName: 'Cloud', color: 'hover:border-orange-500 hover:shadow-[0_0_15_rgba(249,115,22,0.2)]', singleColor: 'orange' },

  // Testes & Automação
  { id: '21', name: 'Pytest', iconName: 'CheckCircle2', color: 'hover:border-blue-400 hover:shadow-[0_0_15px_rgba(96,165,250,0.2)]', singleColor: 'blue' },
  { id: '22', name: 'Jest', iconName: 'FlaskConical', color: 'hover:border-rose-800 hover:shadow-[0_0_15px_rgba(159,18,57,0.2)]', singleColor: 'rose' },
  { id: '23', name: 'Node-RED', iconName: 'GitGraph', color: 'hover:border-red-500 hover:shadow-[0_0_15px_rgba(239,68,68,0.2)]', singleColor: 'red' },
  { id: '24', name: 'n8n', iconName: 'Workflow', color: 'hover:border-rose-500 hover:shadow-[0_0_15px_rgba(244,63,94,0.2)]', singleColor: 'rose' },
];

export const PROJECTS: Project[] = [
  {
    id: '9',
    title: 'Plataforma de engenharia submarina',
    description: 'Aplicação para gerar simulações e análises de equipamentos em ambiente marítimo - matemática aplicada.',
    // Python, Pandas, Boto3 (AWS) e PostgreSQL
    developerSkills: [SKILLS[0], SKILLS[18], SKILLS[6], SKILLS[13]],
    image: '/eng_naval.png',
    size: 'small'
  },
  {
    id: '2',
    title: 'Agente de enriquecimento e classificação de leads',
    description: 'Um agente de IA que enriquece leads e os classifica, gerando comunicações personalizadas e posicionamento estratégico na esteira comercial.',
    // Python, LangChain, FastAPI e Boto3 (AWS)
    developerSkills: [SKILLS[0], SKILLS[17], SKILLS[9], SKILLS[19]],
    image: '/analitica.png',
    size: 'small'
  },
  {
    id: '8',
    title: 'Plataforma de controle de equipamentos RFID',
    description: 'Aplicação completa para cadastro e acompanhamento de equipamentos via RFID - configuração de antenas, áreas físicas de interesse, alerta e contagem de equipamentos.',
    // Python, Node-RED, PostgreSQL e Django
    developerSkills: [SKILLS[0], SKILLS[22], SKILLS[13], SKILLS[10]],
    image: '/rfid.png',
    size: 'small'
  },
  {
    id: '1',
    title: 'Scraper e Dashboard de Processos Judiciais',
    description: 'Uma plataforma de coleta (scapping) de processos e geração de leads.',
    // Python, SQLAlchemy, PostgreSQL e Pandas
    developerSkills: [SKILLS[0], SKILLS[15], SKILLS[13], SKILLS[18]],
    image: '/juridico.png',
    size: 'small'
  },   
  {
    id: '3',
    title: 'Plataforma de pagamentos digitais para cartório',
    description: 'Um portal para pagamento de dívidas de protesto. Incluiu a comunicação com os devedores e acompanhamento do estado das dívidas.',
    // TypeScript, NestJS, NextJS e PostgreSQL
    developerSkills: [SKILLS[2], SKILLS[8], SKILLS[6], SKILLS[13]],
    image: '/cartorio.png',
    size: 'small'
  },
  {
    id: '4',
    title: 'Plataforma de acompanhamento de certidões',
    description: 'Aplicativo que classifica processos jurídicos, gera e acompanha pedidos de certidões cartorais.',
    // Python, NestJS e PostgreSQL
    developerSkills: [SKILLS[0], SKILLS[8], SKILLS[13]],
    image: '/analitica.png',
    size: 'small'
  },
  {
    id: '5',
    title: 'Aplicativos de saúde',
    description: 'Diversos aplicativos para hospitais e clínicas. Requisição e acompanhamento de exames, consultas e procedimentos.',
    // Python, React, PostgreSQL e Boto3 (AWS)
    developerSkills: [SKILLS[0], SKILLS[7], SKILLS[13], SKILLS[19]],
    image: '/saude.png',
    size: 'small'
  },
  {
    id: '6',
    title: 'Portais públicos',
    description: 'Portais de órgãos da administração pública.',
    // Python, Django, React e Boto3 (AWS)
    developerSkills: [SKILLS[0], SKILLS[10], SKILLS[7], SKILLS[19]],
    image: '/publico.png',
    size: 'small'
  },
  {
    id: '7',
    title: 'Aplicativo de inventário inteligente',
    description: 'Sistema para identificação e inventariado de equipemantos mecânicos - usado em órgão público.',
    // Python, LangChain (IA para imagens), PostgreSQL e Boto3 (AWS)
    developerSkills: [SKILLS[0], SKILLS[17], SKILLS[13], SKILLS[19]],
    image: '/inventario.png',
    size: 'small'
  },
];
