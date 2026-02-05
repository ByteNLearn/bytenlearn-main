import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Link from 'next/link';

export default function InternshipSection() {
    const perks = [
        "Real-world project experience",
        "Mentorship from industry experts",
        "Flexible working hours",
        "Certificate of completion",
        "Letter of Recommendation",
        "Stipend for top performers"
    ];

    return (
        <section id="internships" className="py-20 bg-background transition-colors duration-300 min-h-screen relative overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-brand-secondary font-semibold tracking-wider uppercase text-sm">Join the Team</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold mb-6 mt-2 text-foreground"
                    >
                        Accelerate Your <span className="brand-gradient-text">Career</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
                    >
                        Don't just watch tutorials. Build scalable applications used by real users.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="p-8 rounded-3xl glass-panel border border-brand-primary/20 relative"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-secondary to-brand-primary rounded-t-3xl" />
                        <h3 className="text-3xl font-bold text-foreground dark:text-white mb-6">Full Stack Developer</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-8">
                            Looking for passionate developers who know React, Node.js, and have a hunger for learning. You will work on our core product and client projects.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {perks.map((perk, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                                    <CheckCircle className="text-brand-secondary" size={20} />
                                    {perk}
                                </li>
                            ))}
                        </ul>

                        <Link href="/contact">
                            <button className="w-full py-4 bg-brand-primary text-white rounded-xl font-bold hover:bg-brand-primary/80 transition-colors">
                                Apply Now
                            </button>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <h3 className="text-3xl font-bold text-foreground dark:text-white mb-6">Why Intern with Us?</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
                            We treat our interns like full-time employees. You aren't here to fetch coffee; you're here to push code, design interfaces, and solve problems.
                        </p>
                        <div className="space-y-6">
                            <div className="p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/10">
                                <h4 className="text-xl font-bold text-foreground dark:text-white mb-2">Mentorship</h4>
                                <p className="text-gray-600 dark:text-gray-400">1:1 guidance from senior engineers.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/10">
                                <h4 className="text-xl font-bold text-foreground dark:text-white mb-2">Projects</h4>
                                <p className="text-gray-600 dark:text-gray-400">Work on live production apps.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
