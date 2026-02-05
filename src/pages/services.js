import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Code, Smartphone, BarChart, Settings, Users, Globe, Database, Cloud, Lock } from "lucide-react";

export default function ServicesPage() {
    const allServices = [
        {
            icon: <Code size={32} />,
            title: 'Web Engineering',
            description: 'Scalable, SEO-optimized web applications built on Next.js, React, and modern frameworks.',
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            icon: <Smartphone size={32} />,
            title: 'Mobile Solutions',
            description: 'Cross-platform mobile apps using React Native and Flutter for seamless user experiences.',
            gradient: 'from-purple-500 to-pink-500'
        },
        {
            icon: <Cloud size={32} />,
            title: 'Cloud Architecture',
            description: 'Robust cloud infrastructure setup on AWS, Azure, or Google Cloud.',
            gradient: 'from-sky-500 to-indigo-500'
        },
        {
            icon: <BarChart size={32} />,
            title: 'Growth Marketing',
            description: 'Data-driven SEO, PPC, and social media strategies to convert traffic into loyal customers.',
            gradient: 'from-orange-500 to-red-500'
        },
        {
            icon: <Settings size={32} />,
            title: 'Business Automation',
            description: 'Eliminate manual tasks with custom workflows, chatbots, and AI-driven automation.',
            gradient: 'from-emerald-500 to-teal-500'
        },
        {
            icon: <Users size={32} />,
            title: 'Support & Maintenance',
            description: '24/7 technical support and maintenance to keep your digital assets secure and up-to-date.',
            gradient: 'from-indigo-500 to-violet-500'
        },
        {
            icon: <Database size={32} />,
            title: 'Data Analytics',
            description: 'Turn raw data into actionable insights with custom dashboards and reporting tools.',
            gradient: 'from-rose-500 to-pink-600'
        },
        {
            icon: <Lock size={32} />,
            title: 'Cybersecurity',
            description: 'Protect your business with advanced security auditing and threat prevention.',
            gradient: 'from-slate-500 to-gray-500'
        },
        {
            icon: <Globe size={32} />,
            title: 'Blockchain Solutions',
            description: 'Secure, decentralized applications (dApps) and smart contract development.',
            gradient: 'from-amber-400 to-orange-600'
        }
    ];

    return (
        <Layout title="Services | ByteNLearn">
            <section className="py-20 bg-dark-bg min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-bold mb-6"
                        >
                            Our <span className="brand-gradient-text">Services</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-400 max-w-3xl mx-auto"
                        >
                            End-to-end digital solutions designed to scale your business.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative p-8 rounded-2xl glass-panel hover:bg-surface-hover border border-white/5 transition-colors duration-500"
                            >
                                <div className={`mb-6 inline-flex p-3 rounded-lg bg-gradient-to-br ${service.gradient} bg-opacity-10 text-white shadow-lg`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-brand-secondary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}
