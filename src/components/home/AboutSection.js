import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
    return (
        <section id="about" className="py-20 bg-background text-foreground transition-colors duration-300 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                            We Are <span className="brand-gradient-text">ByteNLearn.</span>
                        </h1>
                        <p className="text-lg text-gray-500 dark:text-gray-300 mb-6 leading-relaxed">
                            Founded with a vision to bridge the gap between academic learning and industry demands, ByteNLearn is a dual-engine powerhouse: a cutting-edge digital agency and a premier training institute.
                        </p>
                        <p className="text-lg text-gray-500 dark:text-gray-300 mb-8 leading-relaxed">
                            We believe in "Learning by Doling". Our team consists of passionate engineers, designers, and strategists who are dedicated to pushing the boundaries of what is possible on the web.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-6 rounded-xl glass-panel">
                                <h3 className="text-3xl font-bold text-foreground dark:text-white mb-2">50+</h3>
                                <p className="text-gray-500 dark:text-gray-400">Projects Delivered</p>
                            </div>
                            <div className="p-6 rounded-xl glass-panel">
                                <h3 className="text-3xl font-bold text-foreground dark:text-white mb-2">100+</h3>
                                <p className="text-gray-500 dark:text-gray-400">Interns Trained</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-2xl overflow-hidden glass-panel border border-white/10 relative z-10">
                            {/* Placeholder for an image or graphic */}
                            <div className="w-full h-full bg-black/5 dark:bg-white/5 flex items-center justify-center p-12">
                                <div className="relative w-full h-full">
                                    <Image
                                        src="/images/logo.png"
                                        alt="ByteNLearn Logo"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Decorative background blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-primary/20 blur-[100px] z-0 pointer-events-none" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
