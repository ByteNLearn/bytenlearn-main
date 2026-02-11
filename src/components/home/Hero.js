import dynamic from 'next/dynamic';

// Dynamically import the 3D background with no SSR — loads after page is interactive
const HeroBackground = dynamic(() => import('./HeroBackground'), {
    ssr: false,
    loading: () => (
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-brand-orange/5 blur-[80px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-brand-pink/5 blur-[80px] animate-pulse" />
        </div>
    )
});

export default function Hero({ city = "Moradabad" }) {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-white dark:bg-brand-black">
            {/* 3D Background — deferred loading */}
            <div className="absolute inset-0 z-0">
                <HeroBackground />
                {/* Gradient Overlay for Text Contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-white/80 to-brand-white dark:via-brand-black/80 dark:to-brand-black z-0 pointer-events-none" />
            </div>

            {/* Hero Content — rendered instantly with CSS animations instead of framer-motion */}
            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="animate-[fadeInUp_0.8s_ease-out_both]">
                    <div className="inline-block mb-4 px-4 py-1 rounded-full border border-brand-black/10 dark:border-brand-white/10 bg-brand-white/5 backdrop-blur-sm text-sm font-bold tracking-widest uppercase">
                        Future Ready
                    </div>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-none tracking-tighter mb-6 text-brand-black dark:text-brand-white">
                        Start <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-pink filter drop-shadow-lg">
                            Amazing.
                        </span>
                    </h1>
                </div>

                <p
                    className="text-lg md:text-2xl font-body max-w-2xl mx-auto mb-12 text-balance opacity-0 text-brand-black dark:text-brand-white animate-[fadeIn_0.8s_ease-out_0.4s_both]"
                >
                    Building the digital future with <span className="text-brand-orange font-bold">precision</span> and <span className="text-brand-pink font-bold">passion</span>. Rated as the <b className="text-brand-black dark:text-brand-white">Best Website & App Development Company in {city}</b>.
                </p>

                <div
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center opacity-0 animate-[fadeInUp_0.6s_ease-out_0.6s_both]"
                >
                    <a href="#projects" className="px-10 py-5 bg-brand-black text-brand-white dark:bg-brand-white dark:text-brand-black font-display font-bold text-xl uppercase tracking-widest hover:scale-105 transition-transform shadow-xl">
                        Explore Work
                    </a>
                    <a href="#contact" className="px-10 py-5 border-2 border-brand-black dark:border-brand-white text-brand-black dark:text-brand-white font-display font-bold text-xl uppercase tracking-widest hover:bg-brand-pink hover:border-brand-pink hover:text-white transition-all backdrop-blur-sm">
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
}
