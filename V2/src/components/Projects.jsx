import React from 'react';

const projects = [
    {
        category: "Data Engineering & Machine Learning",
        items: [
            {
                title: "Smart Music Royalties Insights",
                desc: "Built a full-stack analytics pipeline to ingest and normalize semi-structured data. Designed a visualization engine (Plotly/Streamlit) for revenue reporting."
            },
            {
                title: "Inference Endpoints for LLMs",
                desc: "Built and deployed RESTful inference endpoints to serve AI models for a Horizon Europe project."
            },
            {
                title: "Diabetes Prediction Model",
                desc: "Processed Pima Indians Diabetes Dataset with feature selection and statistical analysis to predict medical likelihoods."
            },
            {
                title: "Dj-Library-Organizer",
                desc: "Python script to recursively scan and migrate large file directories based on metadata tags."
            }
        ]
    },
    {
        category: "Audio Software & Signal Processing",
        items: [
            {
                title: "Adaptive Deesser Application (VST3)",
                desc: "JUCE-based application for sibilance detection and suppression using spectral centroid DSP algorithms."
            },
            {
                title: "Canonkey (Real-time Key/BPM Detector)",
                desc: "C++/JUCE app for real-time audio analysis, implementing DSP algorithms for loopback, BPM estimation, and Key detection."
            },
            {
                title: "Machine Learning Audio Classifier",
                desc: "Trained a model to classify audio into Music, Speech, and Noise."
            },
            {
                title: "ML-Power Control System",
                desc: "Real-time gesture recognition system (Max for Live) to control Ableton Live parameters via camera input."
            }
        ]
    },
    {
        category: "Creative Works",
        items: [
            {
                title: "Canonblade",
                desc: "Electronic music alias. 10M+ streams. 30+ tracks released."
            },
            {
                title: "Spatial Audio Production",
                desc: "Master Thesis: Audiovisual Production using Spatial Audio Technologies (Dolby Atmos)."
            }
        ]
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold font-heading mb-12">Projects</h2>
                <div className="grid gap-16">
                    {projects.map((section, idx) => (
                        <div key={idx}>
                            <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">
                                {section.category}
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {section.items.map((project, pIdx) => (
                                    <div
                                        key={pIdx}
                                        className="bg-surface-color p-6 rounded-xl border border-white/5 hover:border-accent-secondary/30 transition-colors group"
                                    >
                                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-accent-secondary transition-colors">
                                            {project.title}
                                        </h4>
                                        <p className="text-text-secondary">
                                            {project.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
