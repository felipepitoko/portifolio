/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Skill } from '@/types';
import { cn } from '@/utils/cn';

interface SkillTagProps {
  skill: Skill;
  className?: string;
}

export function SkillTag({ skill, className }: SkillTagProps) {
  const isIndigo = skill.color.includes('brand-indigo');
  const isEmerald = skill.color.includes('brand-emerald');
  const isOrange = skill.color.includes('orange');

  return (
    <span
      className={cn(
        'rounded px-3 py-1 text-[10px] font-bold uppercase tracking-wider border transition-colors',
        isIndigo && 'bg-brand-indigo/10 border-brand-indigo/20 text-brand-indigo',
        isEmerald && 'bg-brand-emerald/10 border-brand-emerald/20 text-brand-emerald',
        isOrange && 'bg-orange-400/10 border-orange-400/20 text-orange-400',
        className
      )}
    >
      {skill.name}
    </span>
  );
}
