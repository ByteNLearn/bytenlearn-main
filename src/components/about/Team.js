import { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';

const teamMembers = [
    {
        name: "Aman Gupta",
        role: "Founder & CEO",
        image: "https://i.pravatar.cc/300?img=68",
        experience: "10+ Years"
    },
    {
        name: "Sarah Jenkins",
        role: "CTO",
        image: "https://i.pravatar.cc/300?img=49",
        experience: "8+ Years"
    },
    {
        name: "David Chen",
        role: "Lead Developer",
        image: "https://i.pravatar.cc/300?img=11",
        experience: "6+ Years"
    },
    {
        name: "Emma Wilson",
        role: "Head of Design",
        image: "https://i.pravatar.cc/300?img=5",
        experience: "7+ Years"
    },
    {
        name: "Michael Ross",
        role: "Project Manager",
        image: "https://i.pravatar.cc/300?img=53",
        experience: "5+ Years"
    },
    {
        name: "Jessica Lee",
        role: "Marketing Director",
        image: "https://i.pravatar.cc/300?img=32",
        experience: "6+ Years"
    },
];

// Duplicate for infinite loop
const doubleTeam = [...teamMembers, ...teamMembers];

export default function Team() {
    const carousel = useRef();
    const [width, setWidth] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const x = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);

    // Responsive card width + gap
    // Mobile: 280px width + 24px (gap-6 = 24px) -> 304px
    // Desktop: 320px width + 32px (gap-8 = 32px) -> 352px
    const getCardWidth = () => typeof window !== 'undefined' && window.innerWidth >= 768 ? 352 : 304;

    // Smooth auto-scroll speed
    const ANIMATION_SPEED = 0.5;

    useEffect(() => {
        if (!carousel.current) return;

        const scrollWidth = carousel.current.scrollWidth;
        const visibleWidth = carousel.current.offsetWidth;
        setWidth(scrollWidth - visibleWidth);

        let animationFrameId;
        const animateScroll = () => {
            const cardW = getCardWidth();

            if (!isHovered) {
                let newX = x.get() - ANIMATION_SPEED;

                // Infinite Loop Logic
                // We reset when we've scrolled past the first set of items (half the total width)
                // The logical width of one set is teamMembers.length * cardW
                const singleSetWidth = teamMembers.length * cardW;

                if (Math.abs(newX) >= singleSetWidth) {
                    newX = newX + singleSetWidth; // Seamlessly jump back
                }
                x.set(newX);
            }

            // Update Active Index based on current scroll position
            // We use modulo to map the infinite scroll back to 0-length range
            const currentX = Math.abs(x.get());
            const index = Math.round(currentX / cardW) % teamMembers.length;

            if (index !== activeIndex) {
                // We need to use functional update or check if component is mounted effectively, 
                // but React setState is safe. We just avoid setting if same.
                // However, we can't read activeIndex from closure efficiently here without ref,
                // but setState(val) where val is same doesn't re-render.
                // To be safe, we check inside the effect? setState checks internally.
                setActiveIndex(index);
            }

            animationFrameId = requestAnimationFrame(animateScroll);
        };

        animationFrameId = requestAnimationFrame(animateScroll);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isHovered, x, teamMembers.length]); // Removed activeIndex from deps to avoid re-binding loop

    const handleDotClick = (index) => {
        setIsHovered(true); // Pause auto-scroll on interaction
        const cardW = getCardWidth();
        const newX = -(index * cardW);

        animate(x, newX, {
            type: "spring",
            stiffness: 300,
            damping: 30,
            onComplete: () => {
                // Optional: resume auto-scroll after delay? 
                // For now, relies on mouse leave. 
                // If clicked via touch/tap, user might not "leave".
                // But simplified for now.
            }
        });
        setActiveIndex(index);
    };

    return (
        <section className="py-20 md:py-2 bg-brand-white dark:bg-brand-black transition-colors duration-500 overflow-hidden relative">
            <div className="container mx-auto px-6 mb-12 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-display font-bold mb-6 text-brand-black dark:text-brand-white"
                >
                    Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-pink">Team</span>.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-brand-black/60 dark:text-brand-white/60 max-w-2xl mx-auto text-lg"
                >
                    The creative minds and technical experts behind our success.
                </motion.p>
            </div>

            <div className="w-full relative group">
                <motion.div
                    ref={carousel}
                    className="cursor-grab active:cursor-grabbing overflow-hidden pl-4 md:pl-0"
                    whileTap={{ cursor: "grabbing" }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <motion.div
                        style={{ x }}
                        className="flex gap-6 md:gap-8"
                    >
                        {doubleTeam.map((member, i) => (
                            <motion.div
                                key={i}
                                className="min-w-[280px] md:min-w-[320px] relative group/card rounded-3xl overflow-hidden bg-brand-black/5 dark:bg-brand-white/5 border border-brand-black/10 dark:border-brand-white/10 hover:border-brand-pink/30 transition-all duration-300"
                            >
                                {/* Image Container */}
                                <div className="aspect-[3/4] overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10" />
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transform group-hover/card:scale-110 transition-transform duration-700"
                                    />

                                    {/* Overlay Content */}
                                    <div className="absolute bottom-0 left-0 w-full p-6 z-20 transform translate-y-2 group-hover/card:translate-y-0 transition-transform duration-300">
                                        <p className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-2 bg-black/50 backdrop-blur-md inline-block px-2 py-1 rounded-md">
                                            {member.role}
                                        </p>
                                        <h3 className="text-2xl font-display font-bold text-white mb-1">
                                            {member.name}
                                        </h3>
                                        <p className="text-sm text-gray-300 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 delay-100">
                                            {member.experience} Experience
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-3 mt-12">
                    {teamMembers.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => handleDotClick(i)}
                            className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex
                                    ? 'w-8 bg-brand-orange'
                                    : 'w-2 bg-brand-black/20 dark:bg-brand-white/20 hover:bg-brand-orange/50'
                                }`}
                            aria-label={`Go to team member ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
