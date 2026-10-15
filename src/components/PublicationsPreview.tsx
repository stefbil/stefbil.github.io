import { ArrowRight, BookOpen, CalendarDays, ExternalLink, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const previewPublications = [
  {
    title: "A Computational Model for Predicting Perceived Tension in Electronic Dance Music Buildups",
    venue: "SMC26, Zagreb · with Sofia Dahl",
    year: "2026",
    abstract: "A computational model of perceived tension in EDM build-ups, grounded in the Gestalt principles of pitch proximity, timbral similarity and temporal proximity. A composite Tension Index is derived from pitch, timbre and temporal-density features. In a continuous-rating study, 14 listeners rated twelve excerpts spanning breakdown, build-up and drop; accounting for a 2 s response lag, the model correlated with listener ratings at mean r = .57 (95% CI [.51, .62]), with high inter-rater reliability (ICC .85–.95).",
    tags: ["Music Perception", "MIR", "Listening Study"],
    sourceUrl: "https://github.com/stefbil/tensionmodel",
  },
  {
    title: "Intelligent Adaptive De-Essing with Automatic Sibilance Tracking",
    venue: "AES 160th Convention, Copenhagen · Express Paper 10268",
    year: "2026",
    abstract: "A real-time adaptive de-esser, built in JUCE, that automatically detects and suppresses sibilant frequencies. A derivative-based frequency tracker estimates a spectral-centroid-like statistic without the cost of an FFT, combined with dual-path envelope detection and relative threshold logic to separate sibilance from the wideband signal. A dynamic harmonic exciter restores high-frequency presence between sibilant events. Across three vocal files, adaptive tracking improved attenuation-frequency alignment over static processing by 99.58 Hz on average.",
    tags: ["Audio Research", "DSP", "Real-time Audio"],
    sourceUrl: "https://aes.org/publications/elibrary-page/?id=23182",
  },
  {
    title: "A Perceptually Inspired Single Parameter Auditory Distance Renderer for Music Production",
    venue: "DAFx26, MIT, Cambridge MA · Demo paper",
    year: "2026",
    abstract: "A real-time VST3 plugin that derives five correlated auditory distance cues from a single control and keeps them mutually coherent by construction, grounded in the psychoacoustics of distance perception. In a headphone listening test with 18 participants, the coupled renderer roughly halved distance placement error compared with an uncoupled manual mix and was unanimously preferred on composite spatial quality.",
    tags: ["Spatial Audio", "Psychoacoustics", "DSP"],
    sourceUrl: "https://www.dafx.de/paper-archive/details/BPzlG_JAe0g9WudN6kkbng",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
