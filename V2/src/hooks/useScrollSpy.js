import { useState, useEffect } from 'react';

const useScrollSpy = (ids, offset = 100) => {
    const [activeId, setActiveId] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + offset;

            for (const id of ids) {
                const element = document.getElementById(id);
                if (element) {
                    const top = element.offsetTop;
                    const height = element.offsetHeight;

                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveId(id);
                        return;
                    }
                }
            }
            // If at the very top, possibly clear activeId or set to first
            if (window.scrollY < 50) {
                setActiveId('');
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Call once on mount to set initial state
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [ids, offset]);

    return activeId;
};

export default useScrollSpy;
