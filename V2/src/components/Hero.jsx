import React from 'react';

const Hero = () => {
    return (
        <section className="h-screen flex items-center justify-center text-center relative pt-20">
            <div className="container mx-auto px-6 z-10 max-w-4xl">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-in-from-bottom">
                    Stefanos <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">Biliousis</span>
                </h1>
                <h2
                    className="text-xl md:text-3xl font-heading font-bold text-text-secondary mb-8 animate-slide-in-from-bottom opacity-0 fill-mode-forwards"
                    style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
                >
                    Sound Engineer | Music Producer | Sound Designer
                </h2>
                <p
                    className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-in-from-bottom opacity-0"
                    style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
                >
                    Dive into a world where sound meets innovation. 10+ years of experience in creating immersive audio experiences, from pristine engineering to evocative music production.
                </p>
                <a
                    href="#projects"
                    className="inline-block px-8 py-4 bg-gradient-to-r from-accent-secondary to-accent-primary text-white font-semibold rounded-full shadow-lg shadow-accent-primary/25 hover:shadow-accent-primary/50 hover:-translate-y-1 transition-all duration-300 animate-slide-in-from-bottom opacity-0"
                    style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
                >
                    Explore My Work
                </a>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-primary/10 rounded-full blur-[100px] -z-10"></div>
        </section>
    );
};

export default Hero;
