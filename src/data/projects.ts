import {
  Database,
  Headphones,
  Music,
  Wand2,
  Brain,
  Code2,
  Layers,
  LucideIcon,
} from "lucide-react";

export type ProjectCategory =
  | "Audio Research"
  | "Audio Software"
  | "Data Engineering"
  | "Machine Learning"
  | "Software Engineering"
  | string;

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  longDescription?: string;
  tags: string[];
  icon: LucideIcon;
  color: "primary" | "accent";
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "smart-music-royalties",
    title: "Smart Music Royalties Insights",
    category: "Data Engineering",
    description:
      "Full-stack analytics pipeline to ingest and normalize semi-structured data from disparate sources. Features automated schema inference, profile-driven mappings via YAML, and a Plotly/Streamlit visualization engine for revenue reporting.",
    tags: ["Python", "Pandas", "Plotly", "Streamlit"],
    icon: Database,
    color: "primary",
    featured: true,
    githubUrl: "https://github.com/stefbil/Music-Royalties-Analyzer-and-Visualizer",
  },
  {
    id: "adaptive-deesser-vst3",
    title: "Adaptive Deesser VST3",
    category: "Audio Software",
    description:
      "JUCE-based application for sibilance detection and suppression. Implemented DSP algorithms for spectral suppression and adaptive detection using spectral centroid analysis.",
    tags: ["C++", "JUCE", "DSP"],
    icon: Headphones,
    color: "accent",
    featured: true,
    githubUrl: "https://github.com/stefbil/Adaptive-Media-Systems-Adaptive-DeEsser",
  },
  {
    id: "canonkey-detector",
    title: "Canonkey - Real-time Key/BPM Detector",
    category: "Audio Software",
    description:
      "C++/JUCE application for real-time audio analysis, implementing DSP algorithms for loopback audio capture, BPM estimation, and musical Key detection.",
    tags: ["C++", "JUCE", "DSP", "Audio Analysis"],
    icon: Music,
    color: "accent",
    featured: true,
    githubUrl: "https://github.com/stefbil/Canonkey",
  },
  {
    id: "llm-inference-endpoints",
    title: "LLM Inference Endpoints",
    category: "Machine Learning",
    description:
      "Built and deployed RESTful inference endpoints to serve AI models for a Horizon Europe research project. Engineered robust data transmission layer for consistent I/O operations.",
    tags: ["Python", "REST API", "Docker", "LLMs"],
    icon: Wand2,
    color: "primary",
    featured: true,
    githubUrl: "https://github.com/stefbil/inference-endpoints-for-llms",
  },
  {
    id: "ml-power-control-system",
    title: "ML-Power Control System",
    category: "Machine Learning",
    description:
      "Real-time gesture recognition system using Max for Live to control Ableton Live parameters via camera input. Bridges machine learning with creative music production.",
    tags: ["Python", "Max/MSP", "Ableton", "Computer Vision"],
    icon: Brain,
    color: "primary",
    featured: false,
  },
  {
    id: "computational-tension-model",
    title: "Computational Tension Model",
    category: "Audio Research",
    description:
      "Developed a model to estimate perceived tension in Electronic Dance Music build-ups using Python. Combines signal processing with psychoacoustic analysis.",
    tags: ["Python", "Signal Processing", "Research"],
    icon: Headphones,
    color: "accent",
    featured: true,
    githubUrl: "https://github.com/stefbil/tensionmodel",
  },
  {
    id: "Distance-Space VST3 plugin",
    title: "Distance-Space VST3 Plugin",
    category: "Audio Research",
    description:
      "Stereo audio effect plugin that simulates source distance and room depth with spectral shaping, HRTF cues, and reverb.",
    tags: ["C++", "Signal Processing", "Research"],
    icon: Headphones,
    color: "accent",
    featured: true,
    githubUrl: "https://github.com/stefbil/distance-space",
  },
  {
    id: "harmonic-percussive-source-separation",
    title: "HPSS - Harmonic/Percussive Source Separation",
    category: "Audio Research",
    description: "Implemented a real-time audio processing algorithm for separating harmonic and percussive components of audio signals using Short-Time Fourier Transform (STFT) and median filtering techniques.",
    tags: ["Python", "Signal Processing", "Research"],
    icon: Layers,
    color: "accent",
    featured: true,
    githubUrl: "https://github.com/stefbil/HPSS-Harmonic-Percussive-Source-Separation",
  },
  {
    id: "jucemcp-for-agents",
    title: "JUCE-MCP for Agents",
    category: "Software Engineering",
    description: "JUCE MCP for agentic coding based on the JUCE documentation.",
    tags: ["python", "JUCE", "Software Engineering"],
    icon: Code2,
    color: "primary",
    featured: true,
    githubUrl: "https://github.com/stefbil/JuceMCP-for-agents",
  },
  {
    id: "dj-library-organizer",
    title: "DJ Library Organizer",
    category: "Data Engineering",
    description: "A Python-based tool for DJs to organize and manage their music libraries based on BPM and key.",
    tags: ["Python", "Data Engineering", "Software Engineering"],
    icon: Database,
    color: "primary",
    featured: true,
    githubUrl: "https://github.com/stefbil/Dj-Library-Organizer",
  },
  {
    id: "post-training-optimization-cli-tool",
    title: "Post-Training Optimization CLI Tool",
    category: "Software Engineering",
    description: "A command-line tool for post-training optimization of machine learning models, including quantization and pruning techniques.",
    tags: ["Python", "Machine Learning", "Software Engineering"],
    icon: Code2,
    color: "primary",
    featured: true,
    githubUrl: "https://github.com/stefbil/post-training-optimization-cli-tool",    
  },
  {
    id: "Audio-Classifier",
    title: "Audio Classifier",
    category: "Machine Learning",
    description: "A machine learning model for classifying audio signals into different categories using deep learning techniques.",
    tags: ["Python", "Machine Learning", "Deep Learning"],
    icon: Brain,
    color: "primary",
    featured: true,
    githubUrl: "https://github.com/stefbil/MLME-Audio-Classifier",
  },
];

/**
 * Get all featured projects to show on the main landing page
 */
export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

/**
 * Get all projects
 */
export const getAllProjects = (): Project[] => {
  return projects;
};

/**
 * Get list of unique categories present in the project collection
 */
export const getCategories = (): string[] => {
  const categorySet = new Set(projects.map((p) => p.category));
  return Array.from(categorySet);
};

/**
 * Get projects grouped by category
 */
export const getProjectsByCategory = (): Record<string, Project[]> => {
  return projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {} as Record<string, Project[]>);
};
