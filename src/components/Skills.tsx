import ScrollReveal from "./ScrollReveal";

const skillCategories = [
  {
    title: "Programming & Scripting",
    skills: ["Python", "C++", "C#", "SQL", "MATLAB", "JavaScript", "TypeScript", "Bash"],
    color: "primary",
  },
  {
    title: "Data & ML",
    skills: [
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "TensorFlow",
      "PyTorch",
      "Transformers",
      "Computer Vision",
      "NLP",
    ],
    color: "accent",
  },
  {
    title: "Engineering & DevOps",
    skills: ["Docker", "Git", "REST APIs", "CI/CD", "MongoDB", "MySQL", "Firebase", "AWS"],
    color: "primary",
  },
  {
    title: "Audio & Creative",
    skills: [
      "JUCE",
      "Max/MSP",
      "ProTools",
      "Ableton",
      "Dolby Atmos",
      "DSP",
      "Blender",
      "Unreal Engine",
    ],
    color: "accent",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="section-container">
        <ScrollReveal>
          <h2 className="section-title">
            <span className="gradient-text">Skills</span> & Technologies
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <ScrollReveal
              key={category.title}
              delay={categoryIndex * 0.1}
              direction={categoryIndex % 2 === 0 ? "left" : "right"}
            >
              <div className="glass-card p-6 h-full">
                <h3
                  className={`font-mono font-bold mb-4 ${
                    category.color === "primary" ? "text-primary" : "text-accent"
                  }`}
                >
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 text-sm rounded-lg transition-all duration-200 hover:scale-105 cursor-default ${
                        category.color === "primary"
                          ? "bg-primary/10 text-primary border border-primary/20 hover:border-primary/40"
                          : "bg-accent/10 text-accent border border-accent/20 hover:border-accent/40"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Certifications */}
        <ScrollReveal delay={0.4}>
          <div className="mt-12 glass-card p-6">
            <h3 className="font-mono font-bold text-foreground mb-4">Certifications</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: "AWS Cloud Technical Essentials", org: "Coursera" },
                { name: "Deep Learning Specialization", org: "Coursera" },
                { name: "Hugging Face Audio Course", org: "Hugging Face" },
                { name: "Foundational C# with Microsoft", org: "Microsoft" },
              ].map((cert) => (
                <div key={cert.name} className="p-4 bg-secondary/50 rounded-lg">
                  <p className="text-sm font-medium text-foreground">{cert.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{cert.org}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Skills;
