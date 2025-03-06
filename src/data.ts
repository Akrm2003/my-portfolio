import { Project, Skill, Experience, Achievement } from './types';

export const projects: Project[] = [
  {
    title: 'Minishell',
    description: 'A simple shell implementation in C',
    category: '42'
  },
  {
    title: 'Cub3D',
    description: '3D game using raycasting',
    category: '42'
  },
  {
    title: 'Philosopher',
    description: 'Solution to the dining philosophers problem',
    category: '42'
  },
  {
    title: 'So_Long',
    description: '2D game implementation',
    category: '42'
  },
  {
    title: 'Push_Swap',
    description: 'Sorting algorithm implementation',
    category: '42'
  },
  {
    title: 'Talk to Your PDF Chatbot',
    description: 'AI-powered chatbot for PDF interaction',
    category: 'Personal'
  }
];

export const skills: Skill[] = [
  { name: 'Teamwork', type: 'soft' },
  { name: 'Leadership', type: 'soft' },
  { name: 'Time Management', type: 'soft' },
  { name: 'Self-Taught', type: 'soft' },
  { name: 'Problem-Solving', type: 'soft' },
  { name: 'C', type: 'hard' },
  { name: 'C++', type: 'hard' },
  { name: 'Python', type: 'hard' },
  { name: 'Django', type: 'hard' },
  { name: 'FastAPI', type: 'hard' },
  { name: 'Linux Systems', type: 'hard' }
];

export const experiences: Experience[] = [
  {
    title: 'Website Development',
    description: 'Worked in a team of programmers focusing on design aspects of web development.'
  },
  {
    title: 'AI Chatbot Development',
    description: 'Developed Talk to Your PDF, an AI-powered chatbot enabling PDF interaction.'
  }
];

export const achievements: Achievement[] = [
  {
    title: '9th Place - MOD 2nd Coding Competition',
    description: 'Demonstrated strong problem-solving skills in competitive programming.'
  },
  {
    title: '2nd Place - Clash of Code at 42 Abu Dhabi',
    description: 'Excelled in local coding competition among peers.'
  },
  {
    title: '401st Place Globally - Clash of Code',
    description: 'Achieved significant ranking in global programming competition.'
  }
];