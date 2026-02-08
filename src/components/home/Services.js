import { motion } from 'framer-motion';

const services = [
    {
        title: "Social Media Marketing",
        description: "Scale your brand with data-driven social strategies. We manage your presence, engage your audience, and drive real conversions across all platforms.",
        highlight: "Brand Growth"
    },
    {
        title: "Google Ads",
        description: "Maximize ROI with targeted PPC campaigns. We optimize your ad spend to ensure you reach the right customers at the right time.",
        highlight: "High ROI"
    },
    {
        title: "Web & App Development",
        description: "Custom, high-performance websites and mobile apps. built with modern technologies like React, Next.js, and React Native for seamless user experiences.",
        highlight: "Cross-Platform"
    },
    {
        title: "Maintenance & Support",
        description: "Keep your digital assets secure and up-to-date. We provide ongoing support, security monitoring, and performance optimization.",
        highlight: "24/7 Security"
    },
    {
        title: "SEO Optimization",
        description: "Improve your organic search visibility and drive qualified traffic. We use data-driven strategies to boost your rankings and reach your target audience effectively.",
        highlight: "Organic Growth"
    }
];

export default function Services() {
    return (
        <section id="services" className="py-20 md:py-32 bg-brand-white dark:bg-brand-black transition-colors duration-500">
            <div className="w-full md:container md:mx-auto px-0 md:px-6">
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-16 text-right text-brand-black dark:text-brand-white px-6 md:px-0">
                    Premium <span className="text-brand-orange">Services</span>.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="group relative p-6 md:p-10 border border-brand-black/10 dark:border-brand-white/10 rounded-3xl hover:bg-brand-black/5 dark:hover:bg-brand-white/5 transition-colors overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="text-6xl font-display font-bold text-brand-black dark:text-brand-white">
                                    0{index + 1}
                                </span>
                            </div>

                            <div className="relative z-10">
                                <span className="inline-block px-3 py-1 mb-6 text-xs font-bold uppercase tracking-widest text-brand-pink border border-brand-pink/30 rounded-full">
                                    {service.highlight}
                                </span>
                                <h3 className="text-3xl font-display font-bold mb-4 text-brand-black dark:text-brand-white">
                                    {service.title}
                                </h3>
                                <p className="text-lg opacity-70 font-body leading-relaxed text-brand-black dark:text-brand-white">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
