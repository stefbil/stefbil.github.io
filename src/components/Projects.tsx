import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { getFeaturedProjects, Project } from "@/data/projects";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const featuredProjects = getFeaturedProjects();

  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="section-title mb-2">
                Featured <span className="gradient-text">Projects</span>
              </h2>
              <p className="text-muted-foreground text-sm max-w-md">
                A selection of highlighted works spanning data engineering, audio software, and machine learning.
              </p>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 hover:border-primary/50 transition-all duration-200 group self-start sm:self-auto"
            >
              <span>All Projects</span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={project.id || project.title} delay={index * 0.1}>
              <article
                className="glass-card p-6 hover-lift group h-full cursor-pointer flex flex-col justify-between"
                onClick={() => setSelectedProject(project)}
              >
                <div>
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

                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs font-medium ${
                          project.color === "primary" ? "tag-primary" : "tag-accent"
                        } tag`}
                      >
                        {project.category}
                      </span>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                          title="View on GitHub"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <Github size={16} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                          title="Open Live Link"
                          aria-label={`Open live link for ${project.title}`}
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="font-mono font-bold text-foreground text-lg mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-border/40">
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

      {/* Project Details Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl bg-card/95 backdrop-blur-2xl border-border/60">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3.5 rounded-xl ${
                        selectedProject.color === "primary"
                          ? "bg-primary/10 text-primary"
                          : "bg-accent/10 text-accent"
                      }`}
                    >
                      <selectedProject.icon size={30} />
                    </div>
                    <div>
                      <DialogTitle className="text-xl font-mono font-bold">
                        {selectedProject.title}
                      </DialogTitle>
                      <span
                        className={`text-xs font-medium ${
                          selectedProject.color === "primary"
                            ? "tag-primary"
                            : "tag-accent"
                        } tag mt-1.5 inline-block`}
                      >
                        {selectedProject.category}
                      </span>
                    </div>
                  </div>
                </div>
              </DialogHeader>

              <DialogDescription className="text-muted-foreground text-base leading-relaxed mt-2">
                {selectedProject.longDescription || selectedProject.description}
              </DialogDescription>

              <div className="mt-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="tag text-sm px-3 py-1 bg-secondary/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {(selectedProject.githubUrl || selectedProject.liveUrl) && (
                <div className="flex flex-wrap gap-3 mt-6 pt-4 border-t border-border/60">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-foreground text-background font-medium rounded-lg hover:opacity-90 transition-opacity text-sm"
                    >
                      <Github size={18} />
                      <span>View on GitHub</span>
                    </a>
                  )}

                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity text-sm"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
