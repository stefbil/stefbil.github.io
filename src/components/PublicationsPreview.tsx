import { ArrowRight, BookOpen, CalendarDays, ExternalLink, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const previewPublications = [
  {
    title: "Intelligent Adaptive De-Essing with Automatic Sibilance Tracking",
    venue: "Audio Engineering Society",
    year: "2026",
    abstract: "This paper presents a novel adaptive de-essing algorithm that automatically tracks sibilance in real-time audio signals. The proposed method utilizes spectral analysis and machine learning techniques to dynamically adjust the de-essing parameters, resulting in improved vocal clarity and reduced artifacts compared to traditional static de-essing approaches.",
    tags: ["Audio Research", "DSP", "Machine Learning"],
    sourceUrl: "https://aes.org/publications/elibrary-page/?id=23182",
  },
  {
    title: "A SINGLE-PARAMETER AUDITORY DISTANCE RENDERER FOR MUSIC PRODUCTION",
    venue: "DAFx26",
    year: "2026",
    abstract: "This paper introduces a single-parameter auditory distance renderer designed for music production applications. The proposed renderer simplifies the process of simulating spatial audio effects by allowing users to control perceived distance with a single parameter, while maintaining high fidelity and naturalness in the rendered sound field.",
    tags: ["Audio Technology", "DSP"],
    sourceUrl: "",
  },
];

const PublicationsPreview = () => {
  return (
    <section id="publications" className="py-24 bg-card/30">
      <div className="section-container">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="section-title mb-2">
                Selected <span className="gradient-text">Publications</span>
              </h2>
              <p className="text-muted-foreground text-sm max-w-md">
                Research connecting data engineering, audio technology, digital signal processing, and machine learning.
              </p>
            </div>
            <Link
              to="/publications"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 hover:border-primary/50 transition-all duration-200 group self-start sm:self-auto"
            >
              <span>View Publications</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {previewPublications.map((publication, index) => (
            <ScrollReveal key={`${publication.title}-${index}`} delay={index * 0.1}>
              <article className="glass-card p-6 hover-lift h-full flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <FileText size={23} />
                  </div>
                  <span className="tag tag-primary">Research</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <CalendarDays size={13} />
                  <span>{publication.year}</span>
                  <span className="text-border">/</span>
                  <span>{publication.venue}</span>
                </div>
                <h3 className="font-mono font-bold text-foreground text-lg leading-snug mb-3">
                  {publication.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {publication.abstract}
                </p>
                <div className="flex flex-wrap gap-2 pt-5 mt-6 border-t border-border/40">
                  {publication.tags.map((tag) => (
                    <span key={tag} className="tag text-xs">{tag}</span>
                  ))}
                </div>
                {publication.sourceUrl && (
                  <a
                    href={publication.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 pt-4 mt-4 text-sm text-primary hover:text-foreground transition-colors"
                  >
                    <ExternalLink size={15} />
                    View publication source
                  </a>
                )}
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsPreview;
