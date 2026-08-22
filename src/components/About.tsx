import { GraduationCap, Music, Code, Brain } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const highlights = [
  {
    icon: GraduationCap,
    title: "MSc Sound and Music Computing",
    description: "Media Technology, Aalborg University",
    color: "text-primary",
  },
  {
    icon: Code,
    title: "M.Eng Graduate",
    description: "Electrical & Computer Engineering, Aristotle University of Thessaloniki",
    color: "text-accent",
  },
  {
    icon: Brain,
    title: "ML/AI Experience",
    description: "Computer Vision & NLP, CERTH Research",
    color: "text-primary",
  },
  {
    icon: Music,
    title: "10M+ Streams",
    description: "Independent artist with 20K+ monthly listeners",
    color: "text-accent",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="section-container">
        <ScrollReveal>
          <h2 className="section-title">
            <span className="gradient-text">About</span> Me
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <ScrollReveal delay={0.1} direction="left">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm an MSc Student in Sound and Music Computing with a unique blend of expertise 
                spanning 
                <span className="text-foreground font-medium"> Machine Learning</span>,
                <span className="text-foreground font-medium"> Digital Signal Processing</span>,
                <span className="text-foreground font-medium"> Data Engineering </span> 
                and 
                <span className="text-foreground font-medium"> Sound Engineering</span>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a Master of Engineering degree from Aristotle University of Thessaloniki, 
                I've developed automated data pipelines, deployed ML models for computer vision 
                applications, and engineered real-time audio software using DSP algorithms.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As the independent artist <span className="text-primary font-medium">Canonblade</span>, 
                I've achieved over 10 million streams across platforms, combining technical precision 
                with creative expression. I'm passionate about applying engineering rigor to 
                challenging data-driven and signal-processing projects.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <ScrollReveal key={item.title} delay={0.1 + index * 0.1} direction="right">
                <div className="glass-card p-6 hover-lift h-full">
                  <item.icon className={`${item.color} mb-4`} size={28} />
                  <h3 className="font-mono font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
