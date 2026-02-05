import { motion } from 'framer-motion';
import { Monitor, Smartphone, TrendingUp, Cpu, Users, ShieldCheck } from 'lucide-react';

const services = [
    {
        icon: <Monitor size={28} />,
        title: 'Web Engineering',
        description: 'Scalable, SEO-optimized web applications built on Next.js.',
        gradient: 'from-blue-500 to-cyan-500'
    },
    {
        icon: <Smartphone size={28} />,
        title: 'Mobile Solutions',
        description: 'Cross-platform apps that feel native and perform beautifully.',
        gradient: 'from-purple-500 to-pink-500'
    },
    {
        icon: <TrendingUp size={28} />,
        title: 'Growth Marketing',
        description: 'Data-driven strategies to convert traffic into loyal customers.',
        gradient: 'from-orange-500 to-red-500'
    },
    {
        icon: <Cpu size={28} />,
        title: 'Automation & AI',
        description: 'Eliminate manual tasks with custom workflows and bots.',
        gradient: 'from-emerald-500 to-teal-500'
    },
    {
        icon: <Users size={28} />,
        title: 'Tech Internships',
        description: 'Launch your career with hands-on mentorship on real projects.',
        gradient: 'from-indigo-500 to-violet-500'
    },
    {
        icon: <ShieldCheck size={28} />,
        title: 'Security & DevOps',
        description: 'Keep your infrastructure resilient, secure, and always online.',
        gradient: 'from-gray-500 to-slate-500'
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 50, damping: 20 }
    }
};

export default function Services() {
    return (
        <section id="services" className="py-32 bg-background relative transition-colors duration-300">
            {/* Section Divider - stylized */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight"
                        >
                            We craft <span className="text-gray-500 dark:text-gray-500">digital experiences</span> that matter.
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-600 dark:text-gray-400"
                        >
                            A full-suite digital agency and learning hub.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <button className="text-brand-secondary font-semibold hover:text-foreground transition-colors flex items-center gap-2">
                            View full catalog <span className="text-xl">→</span>
                        </button>
                    </motion.div>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="group relative p-8 rounded-2xl glass-panel hover:bg-black/5 dark:hover:bg-white/5 border border-black/5 dark:border-white/5 transition-all duration-500"
                        >
                            <div className={`mb-6 inline-flex p-3 rounded-lg bg-gradient-to-br ${service.gradient} bg-opacity-10 text-white shadow-lg`}>
                                {service.icon}
                            </div>

                            <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-brand-secondary transition-colors duration-300">
                                {service.title}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                                {service.description}
                            </p>

                            {/* Decorative hover line */}
                            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-brand-secondary to-brand-primary w-0 group-hover:w-full transition-all duration-500 ease-out rounded-b-2xl" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
