import { motion } from 'framer-motion';

const projects = [
    { title: "FinTech Dashboard", category: "Web App", size: "col-span-1 md:col-span-2" },
    { title: "Neon E-Commerce", category: "Shopify", size: "col-span-1" },
    { title: "AI Analytics", category: "SaaS Platform", size: "col-span-1" },
    { title: "Luxury Real Estate", category: "Website", size: "col-span-1 md:col-span-2" },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 md:py-32 bg-brand-black text-brand-white">
            <div className="w-full md:container md:mx-auto px-0 md:px-6">
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-16 px-6 md:px-0">
                    Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-pink">Works</span>.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects.map((proj, i) => (
                        <motion.div
                            key={proj.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`${proj.size} aspect-[4/3] bg-white/5 rounded-2xl relative overflow-hidden group cursor-pointer border border-white/5 hover:border-brand-pink/50 transition-all duration-500`}
                        >
                            {/* Image Placeholder */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-black to-brand-black/0 opacity-80 z-10" />
                            <div className="absolute inset-0 bg-brand-white/5 group-hover:scale-110 transition-transform duration-700" />

                            <div className="absolute bottom-0 left-0 p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-brand-orange uppercase tracking-widest text-xs font-bold mb-2">{proj.category}</p>
                                <h3 className="text-3xl font-display font-bold">{proj.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
