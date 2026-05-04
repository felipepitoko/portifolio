/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { PROJECTS, SKILLS } from '@/constants/data';
import { Project, Skill } from '@/types';

export function usePortfolioData() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula um delay de rede para testar futuros estados de loading
    const timer = setTimeout(() => {
      setProjects(PROJECTS);
      setSkills(SKILLS);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return { projects, skills, isLoading };
}
