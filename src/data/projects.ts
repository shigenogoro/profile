import type { Project } from './types'
import puckaiImg from '../assets/photo/PuckAI_thumbnail_similar.png'

export const projects: Project[] = [
  {
    name: 'PuckAI',
    tagline: 'Live full-stack NHL analytics platform with AI scouting reports',
    description:
      'A live platform that tiers, profiles, and projects 6,184 NHL skaters across five decades (1968–present), plus 54,933 scored prospects. A 9-stage ETL pipeline ingests NHL.com, all 63 NCAA Division I programs, and 11 HockeyTech-powered leagues into PostgreSQL + pgvector; the serving layer adds era-adjusted tiering, an XGBoost prospect classifier, vector similarity search, and a sub-millisecond in-memory prefix-trie autocomplete.',
    highlights: [
      'AI scouting reports powered by Claude + Voyage AI RAG — 7,643 generated, 0 quarantined',
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
      'Claude',
      'Voyage AI',
      'Vercel',
    ],
    links: [
      { label: 'Live Demo', href: 'https://www.thepuckai.com/' },
    ],
    image: puckaiImg,
    featured: true,
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
    tech: [
      'Python',
      'Graph-RAG',
      'BM25',
      'CodeRankEmbed',
      'Dense Retrieval',
      'Knowledge Graphs',
      'AST Indexing',
      'LocAgent',
    ],
    links: [
      {
        label: 'Read the blog post',
        href: 'https://medium.com/99p-labs/hindsight-a-knowledge-graph-layer-for-navigating-large-codebases-6acf331c1766',
      },
    ],
  },
  {
    name: 'Multi-Agent RAG Filtering Pipeline',
    tagline: 'Alternative judge strategies for noise-robust retrieval',
    description:
      'A Predictor–Judge–Generator RAG pipeline (reimplementing MAIN-RAG from scratch, since no public implementation existed) that replaces the expensive LLM judge with lightweight rule-based thresholds. Each (query, document, answer) tuple is scored by the logit margin between the \"Yes\" and \"No\" tokens, then filtered to cut noisy context at a fraction of the LLM-judge cost.',
    highlights: [
      'Rule-based thresholds (mean+std, Otsu, quantile) match the original adaptive-threshold results across four benchmark datasets',
      'Benchmarked BM25 / DPR / Contriever under identical generation settings on HotpotQA with EM, F1, and ROUGE-L',
      'Showed an aggressive 0.7 score cutoff hurts BM25 by pruning helpful evidence on small corpora',
      'First author of the 5-person ACM-format report (UMass CS646)',
    ],
    tech: ['Python', 'RAG', 'BM25 / DPR / Contriever', 'Hugging Face'],
    links: [],
  },
  {
    name: 'Timestamp-Aligned Summarization',
    tagline: 'Chaptering ASR transcripts into titled, time-aligned segments',
    description:
      'A modular chaptering pipeline that segments ASR transcripts, generates per-segment titles with a fine-tuned BART, and aligns them back to the timeline with a BERT-based self-retrieval classifier — evaluated on MeetingBank and a 972-video VidChapters-7M subset.',
    highlights: [
      'ROUGE-1 62.97 / ROUGE-2 52.31 / ROUGE-L 59.83 with BERTScore F1 91.44 on MeetingBank',
      '80.43% segment-alignment accuracy; Temporal F1 65.35% at ±15s',
      'Established that stable duration-based segments beat semantic boundary selection under ASR-only input',
    ],
    tech: ['Python', 'PyTorch', 'BART', 'BERT', 'Hugging Face'],
    links: [],
  },
]
