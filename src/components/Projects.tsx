import { useState } from "react";
import { Database, Headphones, Music, Wand2, LucideIcon } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  color: "primary" | "accent";
}

const projects: Project[] = [
  {
    title: "Smart Music Royalties Insights",
    category: "Data Engineering",
    description:
      "Full-stack analytics pipeline to ingest and normalize semi-structured data from disparate sources. Features automated schema inference, profile-driven mappings via YAML, and a Plotly/Streamlit visualization engine for revenue reporting.",
    tags: ["Python", "Pandas", "Plotly", "Streamlit"],
    icon: Database,
    color: "primary",
  },
  {
    title: "Adaptive Deesser VST3",
    category: "Audio Software",
    description:
      "JUCE-based application for sibilance detection and suppression. Implemented DSP algorithms for spectral suppression and adaptive detection using spectral centroid analysis.",
    tags: ["C++", "JUCE", "DSP"],
    icon: Headphones,
    color: "accent",
  },
  {
    title: "Canonkey - Real-time Key/BPM Detector",
    category: "Audio Software",
    description:
      "C++/JUCE application for real-time audio analysis, implementing DSP algorithms for loopback audio capture, BPM estimation, and musical Key detection.",
    tags: ["C++", "JUCE", "DSP", "Audio Analysis"],
    icon: Music,
    color: "accent",
  },
  {
    title: "LLM Inference Endpoints",
    category: "Machine Learning",
    description:
      "Built and deployed RESTful inference endpoints to serve AI models for a Horizon Europe research project. Engineered robust data transmission layer for consistent I/O operations.",
    tags: ["Python", "REST API", "Docker", "LLMs"],
    icon: Wand2,
    color: "primary",
  },
  {
    title: "ML-Power Control System",
    category: "Machine Learning",
    description:
      "Real-time gesture recognition system using Max for Live to control Ableton Live parameters via camera input. Bridges machine learning with creative music production.",
    tags: ["Python", "Max/MSP", "Ableton", "Computer Vision"],
    icon: Wand2,
    color: "primary",
  },
  {
    title: "Computational Tension Model",
    category: "Audio Research",
    description:
      "Developed a model to estimate perceived tension in Electronic Dance Music build-ups using Python. Combines signal processing with psychoacoustic analysis.",
    tags: ["Python", "Signal Processing", "Research"],
    icon: Headphones,
    color: "accent",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <ScrollReveal>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.1}>
              <article
                className="glass-card p-6 hover-lift group h-full cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`p-3 rounded-lg ${
                      project.color === "primary"
                        ? "bg-primary/10 text-primary"
                        : "bg-accent/10 text-accent"
                    }`}
                  >
                    <project.icon size={24} />
                  </div>
                  <span
                    className={`text-xs font-medium ${
                      project.color === "primary" ? "tag-primary" : "tag-accent"
                    } tag`}
                  >
                    {project.category}
                  </span>
                </div>

                <h3 className="font-mono font-bold text-foreground text-lg mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div
                    className={`p-3 rounded-lg ${
                      selectedProject.color === "primary"
                        ? "bg-primary/10 text-primary"
                        : "bg-accent/10 text-accent"
                    }`}
                  >
                    <selectedProject.icon size={28} />
                  </div>
                  <div>
                    <DialogTitle className="text-xl font-mono">
                      {selectedProject.title}
                    </DialogTitle>
                    <span
                      className={`text-xs font-medium ${
                        selectedProject.color === "primary" ? "tag-primary" : "tag-accent"
                      } tag mt-1 inline-block`}
                    >
                      {selectedProject.category}
                    </span>
                  </div>
                </div>
              </DialogHeader>
              <DialogDescription className="text-muted-foreground text-base leading-relaxed">
                {selectedProject.description}
              </DialogDescription>
              <div className="flex flex-wrap gap-2 mt-4">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="tag text-sm px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
