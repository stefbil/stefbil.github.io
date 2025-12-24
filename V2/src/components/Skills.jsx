import React from 'react';

const skillsData = {
    "Programming": ["Python", "C++", "C#", "SQL", "Matlab", "JavaScript", "LaTeX", "Bash"],
    "Data & ML": ["Pandas", "NumPy", "Scikit-Learn", "TensorFlow", "PyTorch", "Computer Vision", "NLP", "GenAI", "Plotly"],
    "Engineering": ["Docker", "Git", "REST APIs", "CI/CD", "MongoDB", "MySQL", "Firebase", "JUCE", "MaxMSP"],
    "Audio & Creative": ["ProTools", "Ableton", "Dolby Atmos", "REW", "DaVinci Resolve", "Blender", "Unreal Engine", "Unity3D"]
};

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-surface-color/30">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold font-heading mb-12">Skills</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Object.entries(skillsData).map(([category, items]) => (
                        <div key={category} className="bg-surface-color p-6 rounded-2xl border border-white/5">
                            <h3 className="text-xl font-bold text-accent-primary mb-6">{category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map(skill => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-white/5 rounded-lg text-sm text-text-secondary hover:text-white hover:bg-white/10 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
