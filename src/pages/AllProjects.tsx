import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Search,
  Github,
  ExternalLink,
  Music,
  FolderGit2,
  SlidersHorizontal,
  Code2,
  Sparkles,
  Database,
  Headphones,
  Wand2,
  Brain,
  Layers,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { getAllProjects, getCategories, Project } from "@/data/projects";

// Category icon helper
const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Data Engineering":
      return Database;
    case "Audio Software":
      return Headphones;
    case "Machine Learning":
      return Wand2;
    case "Audio Research":
      return Brain;
    default:
      return Code2;
  }
};

const AllProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const allProjects = useMemo(() => getAllProjects(), []);
  const categories = useMemo(() => getCategories(), []);

  // Filter projects by category and search text
  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === "" ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query) ||
        project.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [allProjects, selectedCategory, searchQuery]);

  // Group filtered projects by category for grouped layout
  const groupedProjects = useMemo(() => {
    const groups: Record<string, Project[]> = {};
    for (const project of filteredProjects) {
      if (!groups[project.category]) {
        groups[project.category] = [];
      }
      groups[project.category].push(project);
    }
    return groups;
  }, [filteredProjects]);

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-24 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <nav className="section-container flex items-center justify-between h-20">
          <Link
            to="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Back to Portfolio</span>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              to="/music"
              className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs hover:bg-primary/20 transition-colors duration-200"
            >
              <Music size={14} />
              Canonblade
            </Link>
            <a
              href="https://github.com/stefbil"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border/60 hover:text-primary hover:border-primary/50 transition-colors"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <Github size={18} />
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-12 relative z-10">
        <div className="section-container text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-mono mb-4">
              <FolderGit2 size={14} />
              <span>Project Archive & Showcase</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-mono font-bold mb-4">
              All <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10">
              A comprehensive showcase of engineering projects, audio algorithms, DSP tools, and machine learning pipelines.
            </p>
          </ScrollReveal>

          {/* Search & Category Filter Bar */}
          <ScrollReveal delay={0.1}>
            <div className="max-w-4xl mx-auto space-y-5">
              {/* Search Bar */}
              <div className="relative max-w-xl mx-auto">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <input
                  type="text"
                  placeholder="Search by title, technology, or keywords (e.g. Python, JUCE, DSP)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-10 py-3 rounded-full bg-card/60 border border-border/60 text-foreground placeholder:text-muted-foreground/70 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all backdrop-blur-md"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                <button
                  onClick={() => setSelectedCategory("All")}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    selectedCategory === "All"
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                      : "bg-card/80 border border-border/60 text-muted-foreground hover:text-foreground hover:border-border"
                  }`}
                >
                  <Sparkles size={13} />
                  <span>All</span>
                  <span className="opacity-70 text-[10px]">({allProjects.length})</span>
                </button>

                {categories.map((category) => {
                  const Icon = getCategoryIcon(category);
                  const count = allProjects.filter((p) => p.category === category).length;
                  const isActive = selectedCategory === category;

                  return (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                          : "bg-card/80 border border-border/60 text-muted-foreground hover:text-foreground hover:border-border"
                      }`}
                    >
                      <Icon size={13} />
                      <span>{category}</span>
                      <span className="opacity-70 text-[10px]">({count})</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Display Section */}
      <section className="pb-28 relative z-10">
        <div className="section-container">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 bg-card/30 rounded-2xl border border-border/40 max-w-lg mx-auto">
              <Code2 size={40} className="mx-auto text-muted-foreground mb-3 opacity-50" />
              <h3 className="font-mono text-lg font-bold text-foreground mb-2">
                No matching projects
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Try adjusting your search query or selecting a different category filter.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="px-4 py-2 bg-secondary text-foreground text-xs rounded-lg hover:bg-secondary/80 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="space-y-16">
              {Object.entries(groupedProjects).map(([category, projectsInCategory], groupIndex) => {
                const CategoryIcon = getCategoryIcon(category);

                return (
                  <div key={category} className="space-y-6">
                    {/* Category Header */}
                    <ScrollReveal>
                      <div className="flex items-center gap-3 pb-3 border-b border-border/60">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <CategoryIcon size={20} />
                        </div>
                        <h2 className="text-xl md:text-2xl font-mono font-bold text-foreground">
                          {category}
                        </h2>
                        <span className="tag text-xs ml-auto font-mono">
                          {projectsInCategory.length} {projectsInCategory.length === 1 ? "project" : "projects"}
                        </span>
                      </div>
                    </ScrollReveal>

                    {/* Category Project Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {projectsInCategory.map((project, index) => (
                        <ScrollReveal
                          key={project.id || project.title}
                          delay={index * 0.08}
                        >
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

                                <div className="flex items-center gap-1.5">
                                  {project.githubUrl && (
                                    <a
                                      href={project.githubUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      onClick={(e) => e.stopPropagation()}
                                      className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                                      title="View GitHub Repository"
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

                              <h3 className="font-mono font-bold text-foreground text-lg mb-2.5 group-hover:text-primary transition-colors">
                                {project.title}
                              </h3>

                              <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                                {project.description}
                              </p>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-3 border-t border-border/40">
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
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Detailed Modal Dialog */}
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
                  Technologies & Frameworks
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

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-muted-foreground text-sm font-mono">
          <p>© {new Date().getFullYear()} Stefanos Biliousis. All rights reserved.</p>
          <Link to="/" className="text-primary hover:underline text-xs">
            Back to Home ↑
          </Link>
        </div>
      </footer>
    </main>
  );
};

export default AllProjects;
