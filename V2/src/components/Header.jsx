import React, { useState, useEffect } from 'react';
import useScrollSpy from '../hooks/useScrollSpy';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navLinks = [
        { name: 'About', href: '#about', id: 'about' },
        { name: 'Experience', href: '#experience', id: 'experience' },
        { name: 'Projects', href: '#projects', id: 'projects' },
        { name: 'Skills', href: '#skills', id: 'skills' },
        { name: 'Contact', href: '#contact', id: 'contact' },
    ];

    const activeId = useScrollSpy(navLinks.map(link => link.id), 150);

    // Handle scroll effect for padding/transparency
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="fixed top-0 left-0 w-full z-50 pointer-events-none flex justify-center pt-6">
            <div
                className={`
                    pointer-events-auto
                    relative
                    transition-all duration-500 ease-in-out
                    ${scrolled ? 'w-[90%] md:w-auto rounded-full' : 'w-full md:w-auto rounded-none md:rounded-full bg-transparent border-transparent'}
                    ${scrolled ? 'bg-black/50 backdrop-blur-xl border border-white/10 shadow-lg shadow-purple-900/10' : ''}
                    ${!scrolled && 'md:bg-black/30 md:backdrop-blur-md md:border md:border-white/5'}
                    px-6 py-3
                `}
            >
                <div className="flex items-center justify-between gap-8">
                    {/* Logo */}
                    <a href="#" className="font-heading font-bold text-xl tracking-tight text-white/90 hover:text-white transition-colors">
                        sb.
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`
                                    px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                                    ${activeId === link.id
                                        ? 'bg-white/10 text-white shadow-[0_0_10px_rgba(139,92,246,0.3)]'
                                        : 'text-text-secondary hover:text-white hover:bg-white/5'}
                                `}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-2xl text-white/80 hover:text-white transition-colors"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? '✕' : '☰'}
                    </button>

                    {/* CTA Button (Desktop only) */}
                    <a
                        href="#contact"
                        className="hidden md:block px-5 py-2 bg-gradient-to-r from-accent-secondary to-accent-primary text-white text-sm font-semibold rounded-full hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                        Let's Talk
                    </a>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`
                        absolute top-full left-0 w-full mt-4 
                        bg-surface-color/95 backdrop-blur-xl border border-white/10 rounded-2xl 
                        overflow-hidden transition-all duration-300 origin-top
                        ${isOpen ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-0 -translate-y-4 pointer-events-none'}
                        md:hidden
                    `}
                >
                    <nav className="flex flex-col p-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`
                                    p-4 text-center rounded-xl transition-colors
                                    ${activeId === link.id ? 'bg-white/10 text-white' : 'text-text-secondary hover:text-white hover:bg-white/5'}
                                `}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
