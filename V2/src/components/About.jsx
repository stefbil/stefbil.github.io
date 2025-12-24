import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-24">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold font-heading bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                        About Me
                    </h2>
                    <h3 className="text-xl text-white font-semibold">
                        MSc Student in Media Technology | Electrical & Computer Engineer
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                        I combine advanced technical proficiency in <span className="text-white">Data Engineering</span> (Python, Pipeline Automation) with specialized expertise in <span className="text-white">Audio Technology</span> (DSP, Acoustics).
                    </p>
                    <p className="text-text-secondary leading-relaxed">
                        My experience spans developing machine learning models for computer vision and NLP, designing REST APIs, and engineering real-time audio applications. I am seeking to apply engineering rigor to challenging data-driven or signal-processing initiatives.
                    </p>

                    <div className="pt-4 space-y-4">
                        <div className="border-l-2 border-accent-primary pl-4">
                            <h4 className="text-white font-bold">MSc Media Technology, Sound and Music Computing</h4>
                            <p className="text-sm text-text-secondary">Aalborg University, Copenhagen | 2025 – 2027</p>
                        </div>
                        <div className="border-l-2 border-accent-secondary pl-4">
                            <h4 className="text-white font-bold">M.Eng Electrical & Computer Engineering</h4>
                            <p className="text-sm text-text-secondary">Aristotle University of Thessaloniki | 2022</p>
                            <p className="text-xs text-text-secondary mt-1">GPA: 7.52 | Major: Electronics & Electroacoustics</p>
                        </div>
                    </div>
                </div>
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10">
                        <img
                            src="images/ProfilePic2.jpg"
                            alt="Stefanos Biliousis"
                            className="w-full h-auto transform transition duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
