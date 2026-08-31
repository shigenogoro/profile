import type { Profile } from './types'
import resumePdf from '../assets/Kyle_Wen_AIEngineer_Resume.pdf'

export const profile: Profile = {
  name: 'Sheng-Kai (Kyle) Wen',
  shortName: 'Kyle Wen',
  headline: 'AI/ML Engineer · MS Computer Science, UMass Amherst',
  typewriter: [
    'an AI/ML Engineer',
    'building PuckAI',
    'a RAG & LLM systems builder',
    'ex-Honda Research Institute',
  ],
  valueProp:
    'I build retrieval and reasoning systems that make large language models more accurate, grounded, and efficient. I like taking ideas from research prototype all the way to something people can actually use.',
  about: [
    'I earned my MS in Computer Science from UMass Amherst in 2026. As a Graduate Research Extern at Honda Research Institute & 99P Labs, I worked on repo-level Graph-RAG with Prof. Andrew McCallum: knowledge graphs, AST-level indexing, and code retrieval that gives models the structural context text similarity alone misses.',
    'Right now I am building PuckAI, a live full-stack ML platform I started as an independent project and now develop through UMass CICS CICStep. It tiers and projects NHL skaters across five decades (6,184 players, 54,933 scored prospects), ships 7,643 grounded scouting reports behind a deterministic validator, and answers natural-language questions through a hybrid RAG stack I measured end to end. I have also built a multi-agent RAG filtering pipeline that trades an expensive LLM judge for lightweight rule-based thresholds, a timestamp-aligned summarization pipeline on fine-tuned BART and BERT self-retrieval, and Fan2see, a video platform I co-founded on PERN and AWS.',
    'My path is a little unusual: an MS in Physics and a BS in Electrical Engineering before CS.',
  ],
  quickFacts: [
    'Amherst, MA',
    'MS CS, UMass Amherst (2026)',
    'ML/AI Engineer · Data Scientist · SWE',
  ],
  location: 'Amherst, MA',
  email: 'gorowen56@gmail.com',
  phone: '(413) 362-0001',
  resumeUrl: resumePdf,
  socials: [
    { label: 'GitHub', href: 'https://github.com/shigenogoro', icon: 'github' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sheng-kai-wen/',
      icon: 'linkedin',
    },
    { label: 'Email', href: 'mailto:gorowen56@gmail.com', icon: 'envelope' },
  ],
}
