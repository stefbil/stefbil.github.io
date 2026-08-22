import { Calendar } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    title: "Software Engineer - ML/AI Engineer",
    company: "Center for Research and Technology Hellas (CERTH)",
    period: "Dec 2022 – Dec 2023",
    description: [
      "Engineered Python-based automated data processing pipelines for unstructured datasets",
      "Developed REST APIs to serve computer vision models for ML applications",
      "Implemented NLP and Transformer-based architectures for AI research",
      "Utilized Docker for standardized deployment environments",
    ],
    type: "primary",
  },
  {
    title: "Teaching Assistant",
    company: "Aristotle University of Thessaloniki",
    period: "Feb 2025 – July 2025",
    description: [
      "Delivered lectures for the 'Music Production Laboratory' course",
      "Developed course materials for sound engineering and AI in media",
    ],
    type: "secondary",
  },
  {
    title: "Sound Engineer - Recording Studio Assistant",
    company: "Aristotle University of Thessaloniki",
    period: "2021 – August 2025",
    description: [
      "Assisted in studio recording sessions and equipment management",
      "Provided technical support for audio production workflows",
    ],
    type: "secondary",
  },
  {
    title: "Sound Engineer & Artist (Canonblade)",
    company: "Self-Employed",
    period: "Aug 2012 – Present",
    description: [
      "Managed digital rights and distribution for 10M+ streams catalog",
      "Analyzed cross-platform listener data to optimize release strategies",
      "Achieved 20,000+ monthly listeners on Spotify",
    ],
    type: "primary",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-card/30">
      <div className="section-container">
        <ScrollReveal>
          <h2 className="section-title">
            <span className="gradient-text">Experience</span>
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ScrollReveal
                key={exp.title}
                delay={index * 0.15}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <div
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background -translate-x-1/2 mt-6" />

                  {/* Content */}
                  <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <div
                      className={`glass-card p-6 hover-lift ${
                        exp.type === "primary" ? "border-primary/30" : "border-accent/30"
                      }`}
                    >
                      <div className="flex flex-col md:flex-row items-start justify-between gap-3 md:gap-4 mb-4">
                        <div>
                          <h3 className="font-mono font-bold text-foreground text-lg">
                            {exp.title}
                          </h3>
                          <p className={`text-sm ${exp.type === "primary" ? "text-primary" : "text-accent"}`}>
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground md:whitespace-nowrap">
                          <Calendar size={12} />
                          {exp.period}
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex gap-2">
                            <span className="text-primary mt-1.5">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
