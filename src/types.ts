export type Theme = 'light' | 'dark';

export interface Project {
  title: string;
  description: string;
  category: '42' | 'Personal';
}

export interface Skill {
  name: string;
  type: 'soft' | 'hard';
}

export interface Experience {
  title: string;
  description: string;
}

export interface Achievement {
  title: string;
  description: string;
}