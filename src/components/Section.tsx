import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  icon?: ReactNode;
}

export function Section({ id, title, children, icon }: SectionProps) {
  return (
    <section id={id} className="py-20 animate-fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white flex items-center">
          {icon && <span className="mr-3">{icon}</span>}
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}