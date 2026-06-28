import type { Profile } from './types'
import resumePdf from '../assets/AI_ML_Resume.pdf'

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
    'I build retrieval and reasoning systems that make large language models more accurate, grounded, and efficient — and I take them all the way from research prototype to shipped product.',
  about: [
    'I earned my MS in Computer Science from UMass Amherst in 2026. As a Graduate Research Extern at Honda Research Institute & 99P Labs, I researched repo-level Graph-RAG under Prof. Andrew McCallum — giving models the structural context they usually miss through knowledge graphs, AST-level indexing, and precise code retrieval.',
    'I am now focused on building PuckAI, a live full-stack ML platform, toward a product. A few things I have built: PuckAI (live NHL analytics, 6,000+ skaters, AI scouting reports via Claude Opus 4.8 + Voyage AI RAG); a multi-agent RAG filtering pipeline that trims LLM context by 40–60% with no loss in recall; a summarization system that lifted ROUGE-L by 80% with fine-tuned BART/LongT5; and Fan2see, a video platform I co-founded on a PERN + AWS stack.',
    'My path here is a little unusual — an MS in Physics and a BS in Electrical Engineering before CS — and it is exactly what makes me think rigorously about systems and modeling from first principles.',
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
