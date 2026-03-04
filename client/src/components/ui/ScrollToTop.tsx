import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "wouter";

export function ScrollToTop() {
    const [location] = useLocation();

    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
    }, []);

    useLayoutEffect(() => {
        const handleScroll = () => {
            document.documentElement.style.scrollBehavior = "auto";
            window.scrollTo(0, 0);
            document.body.scrollTop = 0;

            // Delay to ensure the DOM has updated and browser finished any auto-scroll
            setTimeout(() => {
                window.scrollTo(0, 0);
                document.documentElement.style.scrollBehavior = "smooth";
            }, 0);
        };

        handleScroll();

        // Additional attempts for slow-loading content or browser quirks
        const timer1 = setTimeout(handleScroll, 20);
        const timer2 = setTimeout(handleScroll, 50);

        window.addEventListener('popstate', handleScroll);
        return () => {
            window.removeEventListener('popstate', handleScroll);
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [location]);

    useEffect(() => {
        // Safety net with no behavior to force default instant
        const timer = setTimeout(() => {
            window.scrollTo(0, 0);
        }, 20);
        return () => clearTimeout(timer);
    }, [location]);

    return null;
}
