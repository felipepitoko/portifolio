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
  const colorName = skill.singleColor || 'indigo';

  // Mapping of common colors to their Tag styles
  const colorMap: Record<string, string> = {
    'blue': 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    'yellow': 'bg-yellow-400/10 border-yellow-400/20 text-yellow-400',
    'purple': 'bg-purple-500/10 border-purple-500/20 text-purple-400',
    'cyan': 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
    'rose': 'bg-rose-500/10 border-rose-500/20 text-rose-400',
    'emerald': 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
    'slate': 'bg-slate-500/10 border-slate-500/20 text-slate-400',
    'red': 'bg-red-500/10 border-red-500/20 text-red-400',
    'indigo': 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400',
    'brand-indigo': 'bg-brand-indigo/10 border-brand-indigo/20 text-brand-indigo',
    'brand-emerald': 'bg-brand-emerald/10 border-brand-emerald/20 text-brand-emerald',
    'orange': 'bg-orange-500/10 border-orange-500/20 text-orange-400',
  };

  const tagClasses = colorMap[colorName] || colorMap['indigo'];

  return (
    <span
      className={cn(
        'rounded px-3 py-1 text-[10px] font-bold uppercase tracking-wider border transition-colors',
        tagClasses,
        className
      )}
    >
      {skill.name}
    </span>
  );
}
