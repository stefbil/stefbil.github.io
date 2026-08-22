import React from 'react';

const certs = [
    "AWS Cloud Technical Essentials (Coursera)",
    "Deep Learning Specialization (Coursera)",
    "Hugging Face Audio Course",
    "Foundational C# with Microsoft",
    "Programming in Python (Aristotle University)",
    "ProTools Basics",
    "Fundamentals of Digital Marketing (Google)"
];

const Certifications = () => {
    return (
        <section className="py-12 border-t border-white/5">
            <div className="container mx-auto px-6 text-center">
                <h3 className="text-2xl font-bold font-heading mb-8 text-text-secondary">Certifications</h3>
                <div className="flex flex-wrap justify-center gap-4">
                    {certs.map((cert, index) => (
                        <span
                            key={index}
                            className="px-4 py-2 border border-white/10 rounded-full text-sm text-text-secondary hover:border-accent-primary hover:text-white transition-all"
                        >
                            {cert}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
