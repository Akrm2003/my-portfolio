import { Skill } from '../types';

interface SkillBadgeProps {
  skill: Skill;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  const baseClasses = "px-4 py-2 rounded-full text-sm font-medium transition-colors";
  const typeClasses = skill.type === 'soft' 
    ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
    : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";

  return (
    <span className={`${baseClasses} ${typeClasses}`}>
      {skill.name}
    </span>
  );
}