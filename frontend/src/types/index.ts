export interface Project {
  id: number;
  title: string;
  description: string;
  category: 'systems' | 'fullstack';
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface SkillGroup {
  category: string;
  skills: { name: string; level: number }[];
}

export interface TimelineItem {
  id: number;
  year: string;
  role: string;
  company: string;
  description: string;
  type: 'work' | 'education';
}
