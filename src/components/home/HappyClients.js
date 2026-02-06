import { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate, useAnimation } from 'framer-motion';

const clients = [
    {
        name: "TechCorp Global",
        review: "Bytenlearn transformed our digital presence. Their team is simply world-class.",
        role: "CTO",
        image: "https://i.pravatar.cc/150?img=11"
    },
    {
        name: "InnovateX",
        review: "The interns we hired through Bytenlearn were production-ready from day one.",
        role: "HR Director",
        image: "https://i.pravatar.cc/150?img=5"
    },
    {
        name: "AlphaWave",
        review: "Exceptional quality and timely delivery. A partner we can trust.",
        role: "Product Manager",
        image: "https://i.pravatar.cc/150?img=3"
    },
    {
        name: "NextGen Systems",
        review: "Their web development services are top-notch. Highly recommended.",
        role: "CEO",
        image: "https://i.pravatar.cc/150?img=68"
    },
    {
        name: "DataFlow",
        review: "Great experience working with the team. Professional and skilled.",
        role: "Director",
        image: "https://i.pravatar.cc/150?img=32"
    },
    {
        name: "CyberShield",
        review: "Security training provided was comprehensive and practical.",
        role: "CISO",
        image: "https://i.pravatar.cc/150?img=53"
    }
];

// Duplicate clients for infinite scroll effect
const doubleClients = [...clients, ...clients];

export default function HappyClients() {
    const carousel = useRef();
    const [activeIndex, setActiveIndex] = useState(0);
    const [width, setWidth] = useState(0);
    const x = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);

    // Constants
    // Mobile: 350px min-width + 32px gap
    // Desktop: 450px min-width + 32px gap
    const getCardWidth = () => typeof window !== 'undefined' && window.innerWidth >= 768 ? 482 : 382;
    const ANIMATION_SPEED = 1;

    useEffect(() => {
        if (!carousel.current) return;

        const scrollWidth = carousel.current.scrollWidth;
        const visibleWidth = carousel.current.offsetWidth;
        setWidth(scrollWidth - visibleWidth); // Width to scroll is total width minus viewport width

        let animationFrameId;
        const animateScroll = () => {
            // Only auto-scroll loop if NOT hovered
            if (!isHovered) {
                let newX = x.get() - ANIMATION_SPEED;

                // Reset for infinite loop if we've scrolled past the first set of items
                // This assumes doubleClients has exactly 2x the items
                // We want to reset when we've scrolled (clients.length * cardWidth)
                // But simplified: check if absolute scroll is >= half total scrollWidth relative to content
                if (Math.abs(newX) >= scrollWidth / 2) {
                    newX = 0;
                }
                x.set(newX);
            }

            // Calculate active index based on scroll position - always runs to update on drag/momentum
            const cardW = getCardWidth();
            const index = Math.round(Math.abs(x.get()) / cardW) % clients.length;
            setActiveIndex(index);

            animationFrameId = requestAnimationFrame(animateScroll);
        };

        animationFrameId = requestAnimationFrame(animateScroll);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isHovered, x]);

    const handleIndicatorClick = (index) => {
        setIsHovered(true);
        const cardW = getCardWidth();
        const newX = -(index * cardW);
        animate(x, newX, { type: "spring", stiffness: 300, damping: 30 });
        setActiveIndex(index);
    };

    const handleNext = () => {
        setIsHovered(true);
        const cardW = getCardWidth();
        const currentInd = Math.abs(x.get()) / cardW;
        let nextInd = Math.floor(currentInd) + 1;
        const newX = -(nextInd * cardW);
        animate(x, newX, { type: "spring", stiffness: 300, damping: 30 });
    };

    const handlePrev = () => {
        setIsHovered(true);
        const cardW = getCardWidth();
        const currentInd = Math.abs(x.get()) / cardW;
        let prevInd = Math.ceil(currentInd) - 1;
        if (prevInd < 0) prevInd = 0;
        const newX = -(prevInd * cardW);
        animate(x, newX, { type: "spring", stiffness: 300, damping: 30 });
    };

    return (
        <section id="happy-clients" className="py-20 md:py-32 bg-brand-white dark:bg-brand-black transition-colors duration-500 overflow-hidden relative group/section">
            <div className="container mx-auto px-6 mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-display font-bold text-center text-brand-black dark:text-brand-white"
                >
                    Happy <span className="text-brand-orange">Clients</span>.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-center mt-6 text-brand-black/60 dark:text-brand-white/60 max-w-2xl mx-auto text-lg"
                >
                    Trusted by industry leaders and innovative startups worldwide.
                </motion.p>
            </div>

            <div className="w-full relative group">
                {/* Navigation Arrows */}
                <button
                    onClick={handlePrev}
                    className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-brand-white dark:bg-brand-black border border-brand-black/10 dark:border-brand-white/10 rounded-full flex items-center justify-center text-brand-black dark:text-brand-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-brand-orange hover:text-white hover:border-brand-orange hidden md:flex"
                    aria-label="Previous client"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-brand-white dark:bg-brand-black border border-brand-black/10 dark:border-brand-white/10 rounded-full flex items-center justify-center text-brand-black dark:text-brand-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-brand-orange hover:text-white hover:border-brand-orange hidden md:flex"
                    aria-label="Next client"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>

                <motion.div
                    ref={carousel}
                    className="cursor-grab active:cursor-grabbing overflow-hidden"
                    whileTap={{ cursor: "grabbing" }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <motion.div
                        style={{ x }}
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        className="flex gap-8 px-6 md:px-0"
                    >
                        {doubleClients.map((client, i) => (
                            <motion.div
                                key={i}
                                className="min-w-[350px] md:min-w-[450px] p-8 md:p-12 rounded-3xl bg-brand-black/5 dark:bg-brand-white/5 border border-brand-black/10 dark:border-brand-white/10 backdrop-blur-sm flex flex-col justify-between min-h-[450px] md:min-h-[400px] select-none"
                            >
                                <div>
                                    <div className="text-4xl text-brand-orange mb-6 font-display font-bold opacity-20">
                                        “
                                    </div>
                                    <p className="text-xl md:text-2xl font-body font-medium text-brand-black dark:text-brand-white leading-relaxed">
                                        {client.review}
                                    </p>
                                </div>
                                <div className="flex items-center gap-4 mt-8">
                                    <img
                                        src={client.image}
                                        alt={client.name}
                                        className="w-12 h-12 rounded-full object-cover bg-brand-black/10 dark:bg-brand-white/10"
                                    />
                                    <div>
                                        <h4 className="font-bold text-brand-black dark:text-brand-white">{client.name}</h4>
                                        <p className="text-sm opacity-60 text-brand-black dark:text-brand-white">{client.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-12">
                {clients.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => handleIndicatorClick(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-8 bg-brand-orange' : 'w-2 bg-brand-black/20 dark:bg-brand-white/20 hover:bg-brand-orange/50 cursor-pointer'}`}
                        aria-label={`Go to client ${i + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
