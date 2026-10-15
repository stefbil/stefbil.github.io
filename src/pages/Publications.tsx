import { BookOpen, ExternalLink, FileText, ArrowLeft, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";

type Publication = {
  title: string;
  venue: string;
  year: string;
  abstract: string;
  tags: string[];
  doiUrl?: string;
  pdfUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
};

const publications: Publication[] = [
  {
    title: "A Computational Model for Predicting Perceived Tension in Electronic Dance Music Buildups",
    venue: "SMC26, Zagreb · with Sofia Dahl",
    year: "2026",
    abstract: "A computational model of perceived tension in EDM build-ups, grounded in the Gestalt principles of pitch proximity, timbral similarity and temporal proximity. A composite Tension Index is derived from pitch, timbre and temporal-density features. In a continuous-rating study, 14 listeners rated twelve excerpts spanning breakdown, build-up and drop; accounting for a 2 s response lag, the model correlated with listener ratings at mean r = .57 (95% CI [.51, .62]), with high inter-rater reliability (ICC .85–.95).",
    tags: ["Music Perception", "MIR", "Listening Study"],
    sourceUrl: "https://github.com/stefbil/tensionmodel",
  },
  {
    title: "EDM Break Routines: Grouping Percept and Action Tendency",
    venue: "GTA 2026, Berlin \u00b7 Abstract & talk \u00b7 with Sofia Dahl",
    year: "2026",
    abstract: "How EDM break routines (breakdown, build-up and drop) shape dancers' action tendencies through changes in timbre, loudness and rhythmic density. We present a model of musical tension built on Gestalt grouping principles, validated against listeners' continuous tension ratings and compared with motion data from earlier studies. Presented at the 24th Scientific Conference of the Society for Gestalt Theory and its Applications.",
    tags: ["Music Perception", "Gestalt", "Embodiment"],
    sourceUrl: "https://www.gta-conferences.net/",
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
    pdfUrl: "https://www.dafx.de/paper-archive/2026/papers/DAFx26_demo_57.pdf",
  },
];

const Publications = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute top-24 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <nav className="section-container flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="theme-toggle"
              aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
              title={`Switch to ${isDark ? "light" : "dark"} theme`}
            >
              <Sun className="theme-toggle-sun" size={16} aria-hidden="true" />
              <Moon className="theme-toggle-moon" size={16} aria-hidden="true" />
            </button>
            <Link to="/" className="font-mono text-xl font-bold tracking-tight">
              <span className="gradient-text">SB</span>
              <span className="text-muted-foreground">_</span>
            </Link>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Back to Portfolio</span>
            <span className="sm:hidden">Back</span>
          </Link>
        </nav>
      </header>

      <section className="pt-32 pb-14 relative z-10">
        <div className="section-container text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs font-mono mb-4">
              <BookOpen size={14} />
              <span>Research Archive</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-mono font-bold mb-4">
              Selected <span className="gradient-text">Publications</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Research across data engineering, audio technology, digital signal processing, and machine learning for media.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-28 relative z-10">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publications.map((publication, index) => (
              <ScrollReveal key={`${publication.title}-${index}`} delay={index * 0.1}>
                <article
                  className={`glass-card p-6 hover-lift h-full flex flex-col ${
                    publication.featured ? "border-primary/40" : "border-border/60"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <FileText size={23} />
                    </div>
                    {publication.featured && <span className="tag tag-primary">Featured</span>}
                  </div>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <CalendarDays size={13} />
                    <span>{publication.year}</span>
                    <span className="text-border">/</span>
                    <span>{publication.venue}</span>
                  </div>

                  <h2 className="font-mono font-bold text-foreground text-lg leading-snug mb-3">
                    {publication.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {publication.abstract}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-5 mt-6 border-t border-border/40">
                    {publication.tags.map((tag) => (
                      <span key={tag} className="tag text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {(publication.doiUrl || publication.pdfUrl || publication.sourceUrl) && (
                    <div className="flex items-center gap-4 pt-4 mt-4 border-t border-border/40">
                      {publication.pdfUrl && (
                        <a href={publication.pdfUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:text-foreground transition-colors">
                          <FileText size={15} /> PDF
                        </a>
                      )}
                      {publication.doiUrl && (
                        <a href={publication.doiUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:text-foreground transition-colors">
                          <ExternalLink size={15} /> DOI
                        </a>
                      )}
                      {publication.sourceUrl && (
                        <a
                          href={publication.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-primary hover:text-foreground transition-colors"
                        >
                          <ExternalLink size={15} /> Source
                        </a>
                      )}
                    </div>
                  )}
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Publications;
