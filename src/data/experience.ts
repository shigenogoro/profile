import type { ExperienceItem } from './types'
import puckaiLogo from '../assets/logo/puckai_logo.png'
import hriLogo from '../assets/logo/Honda_99PLabs_logo.png'
import fan2seeLogo from '../assets/logo/fan2see_logo.png'

export const experience: ExperienceItem[] = [
  {
    role: 'Machine Learning Engineer · PuckAI',
    org: 'University of Massachusetts Amherst (CICS · CICStep)',
    location: 'Amherst, MA',
    period: 'May 2025 – Present',
    logo: puckaiLogo,
    summary:
      'Started PuckAI as an independent side project, took it live, and now develop it through the UMass CICS CICStep program — a full-stack NHL analytics platform that tiers, profiles, and projects players across five decades of hockey.',
    points: [
      'Built an end-to-end ML system: multi-source ETL → feature engineering → model training → serving for 6,000+ skaters.',
      'Shipped AI scouting reports with a Claude Opus 4.8 + Voyage AI RAG pipeline and pgvector similarity search.',
      'Deployed serverless on Vercel + Supabase with an in-memory prefix-trie for sub-millisecond autocomplete.',
    ],
    tech: ['Next.js', 'FastAPI', 'PostgreSQL + pgvector', 'XGBoost', 'RAG'],
  },
  {
    role: 'Graduate Research Extern',
    org: 'Honda Research Institute (HRI) & 99P Labs',
    location: 'Amherst, MA',
    period: 'Feb 2026 – May 2026',
    logo: hriLogo,
    summary:
      'Researched repo-level Graph-RAG for code understanding, advised by Prof. Andrew McCallum (UMass).',
    points: [
      'Built knowledge-graph + AST-level indexing to give models the structural context that text similarity misses.',
      'Developed precise code retrieval and localization, benchmarked on LocBench and DeepCodeBench.',
    ],
    tech: ['Graph-RAG', 'Knowledge Graphs', 'AST Indexing', 'Python'],
    links: [
      {
        label: 'Blog: Hindsight on 99P Labs',
        href: 'https://medium.com/99p-labs/hindsight-a-knowledge-graph-layer-for-navigating-large-codebases-6acf331c1766',
      },
    ],
  },
  {
    role: 'Co-Founder & Full-Stack Engineer',
    org: 'Fan2see',
    location: 'Taipei, Taiwan',
    period: 'Apr 2021 – Apr 2022',
    logo: fan2seeLogo,
    summary:
      'Co-founded a personalized video-message platform connecting fans with their favorite stars, built on a PERN + AWS stack.',
    points: [
      'Cut media-processing latency by 25% and drove 30% month-over-month user growth.',
      'Owned full-stack delivery across React, Node, PostgreSQL, and AWS.',
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
  },
]
