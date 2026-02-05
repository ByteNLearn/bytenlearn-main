import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background text-foreground pt-20 transition-colors duration-300">

            {/* 1. Atmospheric Background Layers */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Subtle noise grain could go here optionally */}

                {/* Deep gradient blobs - Creates depth */}
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-blob" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-blob animation-delay-2000" />

                {/* Grid overlay for tech feel - Low opacity */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center bg-fixed opacity-20 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

                {/* Floating geometric decorative elements */}
                <div className="absolute top-0 left-10 md:left-20 animate-float opacity-50">
                    <div className="w-12 h-12 border border-white/10 rounded-lg backdrop-blur text-brand-secondary flex items-center justify-center text-2xl">⚡</div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-8"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm font-medium text-brand-secondary border-brand-secondary/20 shadow-[0_0_15px_rgba(0,180,216,0.1)]">
                        <span className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse" />
                        ByteNLearn <span className="text-gray-500">|</span> The Future of Work
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[1.1]"
                >
                    Innovate. <br />
                    <span className="brand-gradient-text">Automate.</span> <br />
                    Elevate.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-xl text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-12 leading-relaxed"
                >
                    We architect digital ecosystems. From high-performance web apps to business automation workflows, we turn complex problems into elegant software.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col sm:flex-row gap-5"
                >
                    <Link href="/contact">
                        <button className="group relative px-8 py-4 bg-brand-primary text-white rounded-xl font-bold text-lg overflow-hidden transition-all hover:scale-105 shadow-xl shadow-brand-primary/20">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                            <span className="relative z-10">Start Your Project</span>
                        </button>
                    </Link>

                    <Link href="/contact">
                        <button className="group px-8 py-4 glass-panel text-foreground dark:text-white rounded-xl font-bold text-lg transition-all hover:bg-white/5 hover:border-white/20">
                            <span className="group-hover:text-brand-secondary transition-colors">Apply for Internship →</span>
                        </button>
                    </Link>
                </motion.div>
            </div>

            {/* Hero visual/abstract 3d element replacement via CSS/Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.4 }}
                className="absolute -bottom-20 md:-bottom-40 inset-x-0 h-[40vh] w-full z-0 pointer-events-none"
            >
                <div className="w-full h-full bg-gradient-to-t from-brand-primary/10 to-transparent blur-3xl opacity-30" />
            </motion.div>
        </section>
    );
}
