import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Using consistent image placeholders or solid colors for now
const gallery = [
    { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600", alt: "Team Meeting", color: "bg-blue-100 dark:bg-blue-900" },
    { src: "https://images.unsplash.com/photo-1531498860503-005a987fd781?w=600", alt: "Design Workshop", color: "bg-pink-100 dark:bg-pink-900" },
    { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600", alt: "Client Presentation", color: "bg-indigo-100 dark:bg-indigo-900" },
    { src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600", alt: "Coding Late Night", color: "bg-orange-100 dark:bg-orange-900" },
    { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600", alt: "Coffee Break", color: "bg-green-100 dark:bg-green-900" },
    { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600", alt: "Team Celebration", color: "bg-purple-100 dark:bg-purple-900" }
];

export default function LifeAt() {
    return (
        <section className="py-20 bg-brand-white dark:bg-brand-black transition-colors duration-500 overflow-hidden relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-brand-black dark:text-brand-white">
                        Life at <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-pink">ByteNLearn</span>.
                    </h2>
                    <p className="text-brand-black/60 dark:text-brand-white/60 max-w-2xl mx-auto text-lg">
                        We work hard, play harder, and celebrate every win together.
                    </p>
                </motion.div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {gallery.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.02 }}
                            className="break-inside-avoid relative group rounded-3xl overflow-hidden cursor-pointer shadow-lg"
                        >
                            {/* Colorful Placeholder Overlay */}
                            <div className={`absolute inset-0 ${item.color} opacity-20 mix-blend-overlay`} />

                            <img
                                src={item.src}
                                alt={item.alt}
                                className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <span className="text-brand-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {item.alt}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
