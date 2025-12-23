import React from 'react';

const experiences = [
    {
        title: "Software Engineer - ML/AI Engineer",
        company: "CERTH - Visual Computing Lab 3D",
        period: "Dec 2022 – Dec 2023",
        desc: [
            "Engineered Python-based automated data processing pipelines, reducing manual handling for unstructured datasets.",
            "Developed REST APIs to serve computer vision models for ML applications.",
            "Researched and implemented computer vision AI models using NLP and Transformers.",
            "Utilized Docker for consistent deployment across system architectures."
        ]
    },
    {
        title: "Teaching Assistant",
        company: "Aristotle University of Thessaloniki",
        period: "Feb 2025 – July 2025",
        desc: [
            "Delivered lectures and facilitated hands-on learning for 'Music Production Laboratory'.",
            "Developed course materials simplifying complex sound engineering and AI concepts."
        ]
    },
    {
        title: "Sound Engineer - Recording Studio Assistant",
        company: "Aristotle University of Thessaloniki",
        period: "2021 – August 2025",
        desc: [
            "Assisted in studio recording sessions, equipment management, and technical support."
        ]
    },
    {
        title: "Sound Engineer - Musician (Canonblade)",
        company: "Self-Employed",
        period: "Aug 2012 – Present",
        desc: [
            "Managed digital rights/distribution achieving 10M+ streams and 20k+ monthly listeners.",
            "Analyzed listener data via Spotify/Apple Music APIs to optimize strategies."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-surface-color/30">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold font-heading mb-12">Experience</h2>
                <div className="space-y-8">
                    {experiences.map((item, index) => (
                        <div
                            key={index}
                            className="p-8 bg-surface-color rounded-2xl border border-white/5 hover:border-white/10 hover:bg-surface-hover transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                                    <p className="text-accent-secondary font-medium">{item.company}</p>
                                </div>
                                <span className="text-sm text-text-secondary bg-white/5 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                                    {item.period}
                                </span>
                            </div>
                            <ul className="space-y-2">
                                {item.desc.map((point, i) => (
                                    <li key={i} className="text-text-secondary text-base flex items-start gap-2">
                                        <span className="text-accent-primary mt-1.5 min-w-[6px] h-[6px] rounded-full bg-accent-primary block"></span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
