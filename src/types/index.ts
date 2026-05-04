/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  developerSkills: Skill[];
  image: string;
  size: 'large' | 'small';
}

export interface Skill {
  id: string;
  name: string;
  iconName: string; // Referência para o ícone
  color: string;
}
