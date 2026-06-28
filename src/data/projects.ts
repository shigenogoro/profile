import type { Project } from './types'
import puckaiImg from '../assets/photo/PuckAI_thumbnail_similar.png'

export const projects: Project[] = [
  {
    name: 'PuckAI',
    tagline: 'Live full-stack NHL analytics platform with AI scouting reports',
    description:
      'A live platform that tiers, profiles, and projects 6,000+ NHL skaters across five decades (1968–present). A 7-stage ETL pipeline ingests NHL.com and EliteProspects data into PostgreSQL + pgvector; the serving layer adds era-adjusted tiering, an XGBoost prospect classifier, vector similarity search, and a sub-millisecond in-memory prefix-trie autocomplete.',
    highlights: [
      'AI scouting reports powered by Claude Opus 4.8 + Voyage AI RAG',
      'Era-adjusted tiering that ranks cross-era legends consistently (6,184 skaters)',
      'XGBoost projection of prospect outcomes from limited early-career data',
      'pgvector nearest-neighbor comparables on an 8-dimension career aspect vector',
    ],
    tech: [
      'Next.js',
      'FastAPI',
      'PostgreSQL + pgvector',
      'Supabase',
      'XGBoost',
      'Claude Opus 4.8',
      'Voyage AI',
      'Vercel',
    ],
    links: [
      { label: 'Live Demo', href: 'https://nhl-prospect-predictor.vercel.app/' },
    ],
    image: puckaiImg,
    featured: true,
  },
  {
    name: 'Multi-Agent RAG Filtering Pipeline',
    tagline: 'Alternative judge strategies for noise-robust retrieval',
    description:
      'A Predictor–Judge–Generator RAG pipeline (extending MAIN-RAG) that explores lightweight, rule-based and classifier judges in place of an LLM judge. Filters noisy retrieved context across QA benchmarks while preserving recall, cutting cost and latency versus an LLM-based judge.',
    highlights: [
      'Trims LLM context by 40–60% with no loss in recall (HotpotQA, FEVER)',
      'Adaptive thresholds: mean+std, Otsu, and quantile cutoffs on judge scores',
      'Evaluated with EM / F1 / ROUGE-L against vanilla and score-cutoff RAG baselines',
    ],
    tech: ['Python', 'RAG', 'BM25 / DPR / Contriever', 'Hugging Face'],
    links: [],
  },
  {
    name: 'Hindsight — Git Intelligence Layer',
    tagline: 'Repo-level Graph-RAG for code understanding',
    description:
      'A Git intelligence layer that enhances retrieval-augmented generation with a knowledge-graph representation of repository structure. Combines BM25 lexical retrieval with graph-based context expansion over function-level call graphs to surface cross-file dependencies keyword search cannot reach.',
    highlights: [
      'AST-based call graphs, RepoGraph, DKB, and CGM graph-construction strategies',
      'Evaluated on DeepCodeBench and LocBench with FactRecall@k and Acc@k',
      'Grew out of repo-level Graph-RAG research at Honda Research Institute',
    ],
    tech: ['Python', 'Graph-RAG', 'BM25', 'Knowledge Graphs', 'AST Indexing'],
    links: [],
  },
  {
    name: 'Temporal Summarization System',
    tagline: 'Fine-tuned long-document summarization',
    description:
      'A summarization system using fine-tuned BART / LongT5 with temporal alignment, producing significantly more faithful long-document summaries than the pretrained baselines.',
    highlights: ['Lifted ROUGE-L by 80% via fine-tuning + temporal alignment'],
    tech: ['Python', 'PyTorch', 'BART', 'LongT5', 'Hugging Face'],
    links: [],
  },
]
