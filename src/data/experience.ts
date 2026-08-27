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
      'Built a 9-stage ETL fed by 15+ scrapers (NHL.com, 63 NCAA Division I programs, 11 HockeyTech leagues) with per-(season, position) z-scores that make five decades of scoring comparable.',
      'Trained per-position XGBoost classifiers on 481,000 pre-NHL season lines across 1,295 leagues and 48 seasons to project 54,933 prospects, and serve cross-era comparables as a single pgvector nearest-neighbor query.',
      'Shipped a production RAG chatbot over 7,643 grounded reports — hybrid pgvector HNSW + Postgres full-text retrieval fused by weighted RRF, with Voyage AI embeddings and cross-encoder reranking.',
      'Took scope-limited query relevance from NDCG@10 0.38/0.31 to 1.00 on a 77-query benchmark by routing team/league queries through a deterministic alias index instead of embeddings.',
      'Generated all 7,643 scouting reports with 0 quarantined by constraining the LLM to pipeline-computed numbers behind a deterministic validator it must pass before a report ships.',
    ],
    tech: [
      'Next.js',
      'FastAPI',
      'PostgreSQL + pgvector',
      'XGBoost',
      'RAG',
      'Voyage AI',
      'Supabase',
    ],
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
