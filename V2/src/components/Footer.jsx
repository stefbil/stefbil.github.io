import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" className="py-12 bg-black border-t border-white/10">
            <div className="container mx-auto px-6 text-center">
                <div className="flex justify-center gap-6 mb-8">
                    <a href="https://open.spotify.com/artist/6BxtVo9reMQ2vff0l8HMGY" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-accent-primary hover:scale-110 transition-all">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.66.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 4.2-1.32 9.6-0.66 13.38 1.681.42.18.6.78.361 1.14zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" /></svg>
                    </a>
                    <a href="https://github.com/stefbil" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-accent-primary hover:scale-110 transition-all">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.03.555-3.87-1.47-4.125-2.7-.15-.375-.78-1.53-1.335-1.83-.465-.255-1.125-.87-.015-.885 1.05-.015 1.8.96 2.055 1.32 1.185 2.01 3.105 1.44 3.855 1.095.12-.855.465-1.44.84-1.77-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.48.405.9 1.215.9 2.445 0 1.755-.015 3.18-.015 3.615 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/stefanosbiliousis/" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-accent-primary hover:scale-110 transition-all">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5S0 4.881 0 3.5C0 2.12 1.11 1 2.48 1s2.5 1.12 2.5 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-2.239 1.779-3.715 4.528-3.715h.339v-4.157c-2.31 0-3.69 1.115-4.528 2.835v-2.564z" /></svg>
                    </a>
                    <a href="mailto:stefanosbiliousis@gmail.com" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-accent-primary hover:scale-110 transition-all">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-6.623 5.772v-11.41l6.623 5.638zm10.754 0l6.623-5.638v11.41l-6.623-5.772zm-5.377 4.542l-5.654-4.814-5.346 4.551v-8.208l11 9.362 11-9.362v8.208l-5.346-4.551-5.654 4.814z" /></svg>
                    </a>
                </div>
                <p className="text-text-secondary text-sm">© 2024 Stefanos Biliousis. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
