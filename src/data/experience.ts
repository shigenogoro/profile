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
      'Started PuckAI as an independent side project, took it live, and now develop it through the UMass CICS CICStep program: a full-stack NHL analytics platform that tiers, profiles, and projects players across five decades of hockey.',
    points: [
      'Built a 14-stage ETL (nine-stage NHL core plus five-stage prospect extension) fed by 15+ scrapers across NHL.com, 63 NCAA Division I programs, and 11 HockeyTech leagues, with per-(season, position) z-scores that make five decades of scoring comparable.',
      'Trained a three-stage XGBoost hurdle model on 481,000 pre-NHL season lines (reach NHL at ROC-AUC 0.977, durability head, conditional landing tier) to project 54,933 prospects, with cross-league scoring normalized by NHLe factors across 1,295 leagues.',
      'Shipped a production RAG chatbot over 7,643 grounded reports with hybrid pgvector HNSW + Postgres full-text retrieval fused by weighted RRF, Voyage AI embeddings, and cross-encoder reranking, lifting NDCG@10 from 0.488 to 0.682 on a 77-query benchmark.',
      'Took scope-limited query relevance from NDCG@10 0.376/0.307 to 1.000 by routing team/league queries through a deterministic alias index instead of embeddings.',
      'Generated all 7,643 scouting reports with 0 quarantined by constraining the LLM to pipeline-computed numbers behind a deterministic validator each report must pass before it ships.',
      'Served cross-era comparables as a single pgvector nearest-neighbor query over 8-dimension career aspect vectors.',
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
    links: [
      {
        label: 'Engineering write-up',
        href: 'https://github.com/shigenogoro/PuckAI-Engineering',
      },
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
      'Architected Hindsight, fusing BM25 with intent-conditioned graph traversal over AST-built call graphs to surface cross-file dependencies keyword search cannot reach.',
      'Reached file-level Acc@1 0.535 on DeepCodeBench with Qwen3-32B (+8.1 pts vs BM25, +11.2 pts vs adapted LocAgent) and built evaluation infrastructure for Fact Recall, Acc@k, and LLM-judged answer quality.',
    ],
    tech: ['Graph-RAG', 'Knowledge Graphs', 'AST Indexing', 'BM25', 'Python'],
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
