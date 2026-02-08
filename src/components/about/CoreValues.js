import { motion } from 'framer-motion';

const values = [
    {
        title: "Innovation",
        description: "We don't just follow trends; we set them. We constantly explore new technologies to solve problems in unique ways.",
        icon: "💡",
        gradient: "from-yellow-400 to-orange-500"
    },
    {
        title: "Integrity",
        description: "Transparency is our foundation. We believe in honest communication and delivering exactly what we promise.",
        icon: "🤝",
        gradient: "from-blue-400 to-indigo-500"
    },
    {
        title: "Mentorship",
        description: "Empowering the next generation. We share knowledge freely and believe in growing together as a community.",
        icon: "🌱",
        gradient: "from-green-400 to-emerald-500"
    },
    {
        title: "Excellence",
        description: "Good isn't enough. We strive for pixel-perfect designs and robust, scalable code in every project.",
        icon: "⭐",
        gradient: "from-pink-500 to-rose-500"
    }
];

export default function CoreValues() {
    return (
        <section className="py-20 bg-brand-white dark:bg-brand-black transition-colors duration-500 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-brand-black dark:text-brand-white">
                        Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-pink">Values</span>.
                    </h2>
                    <p className="text-brand-black/60 dark:text-brand-white/60 max-w-2xl mx-auto text-lg">
                        The principles that guide every decision we make and every line of code we write.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-brand-black/5 dark:bg-brand-white/5 p-8 rounded-3xl border border-brand-black/10 dark:border-brand-white/10 relative group overflow-hidden"
                        >
                            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${value.gradient} opacity-10 rounded-bl-full group-hover:scale-110 transition-transform duration-500`} />

                            <div className="text-4xl mb-6 bg-brand-white dark:bg-brand-black w-16 h-16 flex items-center justify-center rounded-2xl shadow-lg group-hover:rotate-12 transition-transform duration-300">
                                {value.icon}
                            </div>

                            <h3 className="text-2xl font-display font-bold mb-4 text-brand-black dark:text-brand-white">
                                {value.title}
                            </h3>
                            <p className="text-brand-black/70 dark:text-brand-white/70 leading-relaxed text-sm">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
