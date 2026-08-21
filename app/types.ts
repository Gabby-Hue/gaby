export interface TechItem {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'tool' | 'language';
  description: string;
  icon: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  tags: string[];
  techIcons: { name: string; icon: string }[];
  category: 'All' | 'Web App' | 'Full Stack' | 'UI/UX';
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

export type ThemeMode = 'dark' | 'light';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
