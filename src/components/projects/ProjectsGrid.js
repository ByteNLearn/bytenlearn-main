import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
    {
        title: "FinTech Dashboard",
        category: "Web App",
        description: "A comprehensive dashboard for financial analytics with real-time data visualization.",
        gradient: "from-blue-600 to-indigo-900",
        colSpan: "col-span-1 md:col-span-2"
    },
    {
        title: "Neon E-Commerce",
        category: "Shopify Store",
        description: "A high-conversion Shopify store with neon aesthetics and seamless checkout.",
        gradient: "from-purple-500 to-pink-500",
        colSpan: "col-span-1"
    },
    {
        title: "AI Analytics Platform",
        category: "SaaS Product",
        description: "AI-powered analytics tool for predictive modeling and business intelligence.",
        gradient: "from-cyan-400 to-blue-500",
        colSpan: "col-span-1"
    },
    {
        title: "Luxury Real Estate",
        category: "Website Design",
        description: "Elegant website showcasing premium properties with immersive galleries.",
        gradient: "from-yellow-400 to-orange-500",
        colSpan: "col-span-1 md:col-span-2"
    },
    {
        title: "Crypto Exchange App",
        category: "Mobile Application",
        description: "Secure and fast cryptocurrency trading app with advanced charting tools.",
        gradient: "from-green-400 to-emerald-600",
        colSpan: "col-span-1"
    },
    {
        title: "Health & Wellness",
        category: "Cross-platform App",
        description: "Holistic health tracking app integrating with wearables and smart devices.",
        gradient: "from-rose-400 to-red-500",
        colSpan: "col-span-1"
    },
    {
        title: "Smart EduTech",
        category: "Learning Platform",
        description: "Interactive learning management system for schools and corporate training.",
        gradient: "from-violet-500 to-fuchsia-600",
        colSpan: "col-span-1 md:col-span-2"
    },
];

export default function ProjectsGrid({ limit }) {
    const visibleProjects = limit ? projects.slice(0, limit) : projects;

    return (
        <section className="py-20 md:py-32 bg-brand-black text-brand-white min-h-screen">
            <div className="w-full max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-display font-bold mb-6"
                    >
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-pink">Portfolio</span>.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
                    >
                        Explore some of our recent work across web development, mobile apps, and custom software solutions.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[400px]">
                    {visibleProjects.map((proj, i) => (
                        <motion.div
                            key={proj.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`${proj.colSpan} group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-brand-pink/30 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-pink/10 flex flex-col`}
                        >
                            {/* Visual Placeholder (Gradient) */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${proj.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />

                            {/* Hover Reveal Pattern/Image Mockup if we had images - keeping it abstract for now */}
                            {/* Hover Reveal Pattern - Abstract Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

                            {/* Overlay Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black via-black/60 to-transparent z-10">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-brand-orange uppercase bg-brand-orange/10 rounded-full border border-brand-orange/20 backdrop-blur-sm">
                                        {proj.category}
                                    </span>
                                    <h3 className="text-3xl font-display font-bold mb-2 group-hover:text-brand-pink transition-colors duration-300">
                                        {proj.title}
                                    </h3>
                                    <p className="text-gray-300 line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                        {proj.description}
                                    </p>
                                    <button className="flex items-center text-sm font-bold text-white uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 mt-4 group/btn">
                                        View Details
                                        <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
