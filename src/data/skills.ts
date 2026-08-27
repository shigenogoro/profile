import type { SkillGroup } from './types'

export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Java', 'C/C++'],
  },
  {
    category: 'Machine Learning',
    skills: [
      'XGBoost',
      'PyTorch',
      'Feature Engineering',
      'Offline Evaluation',
      'Z-Score Normalization',
      'Cohort Design',
      'Label-Leakage Debugging',
    ],
  },
  {
    category: 'Generative AI & LLMs',
    skills: [
      'RAG',
      'Prompt Engineering',
      'Grounded Generation',
      'Deterministic Validation',
      'Claude / GPT-4o / Gemini',
      'Fine-tuning (BART / LongT5)',
      'AI Agents',
      'LLM-as-Judge',
    ],
  },
  {
    category: 'Retrieval & Search',
    skills: [
      'pgvector / HNSW',
      'FAISS',
      'Voyage AI Embeddings',
      'Cross-Encoder Reranking',
      'Hybrid Dense + Lexical',
      'Reciprocal Rank Fusion',
      'BM25',
      'Graph-RAG',
      'NDCG / MRR / Recall@K',
    ],
  },
  {
    category: 'Data Engineering',
    skills: [
      'Multi-Stage ETL',
      'Selenium',
      'REST APIs',
      'Pandas',
      'NumPy',
      'Schema Design',
      'Identity Resolution',
      'Idempotent Upserts',
    ],
  },
  {
    category: 'Backend & Frontend',
    skills: [
      'FastAPI',
      'Node.js',
      'Express',
      'React',
      'Next.js (App Router)',
      'SQLAlchemy',
      'Pydantic',
      'Tailwind CSS',
      'JWT / OAuth',
    ],
  },
  {
    category: 'Databases',
    skills: [
      'PostgreSQL',
      'pgvector',
      'Supabase',
      'SQLite',
      'Full-Text Search',
      'Query Optimization',
    ],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      'AWS (Lambda, S3)',
      'Vercel',
      'Cloudflare',
      'Docker',
      'CI/CD',
      'Git',
      'Linux',
      'pytest',
    ],
  },
]
