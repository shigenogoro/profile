import type { SkillGroup } from './types'

export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Java', 'C/C++'],
  },
  {
    category: 'ML / AI',
    skills: [
      'RAG',
      'LLMs (Claude, GPT-4o)',
      'Information Retrieval',
      'PyTorch',
      'XGBoost',
      'BART / LongT5',
      'Voyage AI embeddings',
      'Graph-RAG',
    ],
  },
  {
    category: 'Backend',
    skills: ['FastAPI', 'Node.js', 'SQLAlchemy', 'Pydantic', 'REST APIs'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Vite'],
  },
  {
    category: 'Data / Infra',
    skills: [
      'PostgreSQL + pgvector',
      'Supabase',
      'AWS',
      'Docker',
      'Vercel',
      'Selenium / ETL',
    ],
  },
]
