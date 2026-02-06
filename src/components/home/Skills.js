import { motion } from 'framer-motion';

const skillsHelper = [
    {
        category: "Frontend Development",
        items: [
            "HTML5 & CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js",
            "Redux Toolkit", "Tailwind CSS", "Three.js", "Framer Motion", "Material UI"
        ]
    },
    {
        category: "Backend Development",
        items: [
            "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Python",
            "Django", "REST APIs", "GraphQL", "Supabase", "Firebase"
        ]
    },
    {
        category: "Mobile App Development",
        items: [
            "React Native", "Expo", "iOS (Swift via RN)", "Android (Kotlin via RN)",
            "Cross-Platform", "Mobile UI/UX"
        ]
    },
    {
        category: "DevOps & Tools",
        items: [
            "Git & GitHub", "Docker", "AWS", "CI/CD", "Postman",
            "VS Code", "Figma", "Linux", "Vercel"
        ]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 md:py-32 bg-brand-white dark:bg-brand-black transition-colors duration-500">
            <div className="w-full md:container md:mx-auto px-0 md:px-6">
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-16 text-brand-black dark:text-brand-white px-6 md:px-0">
                    Our <span className="text-brand-orange">Skills</span>.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {skillsHelper.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="bg-brand-black/5 dark:bg-brand-white/5 rounded-3xl p-6 md:p-10 hover:bg-brand-black/10 dark:hover:bg-brand-white/10 transition-colors border border-transparent hover:border-brand-black/5 dark:hover:border-brand-white/5"
                        >
                            <h3 className="text-2xl md:text-3xl font-display font-bold mb-8 text-brand-black dark:text-brand-white flex items-center gap-4">
                                <span className="w-1.5 h-8 bg-brand-pink rounded-full"></span>
                                {skill.category}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {skill.items.map((item, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 bg-brand-white dark:bg-brand-black border border-brand-black/10 dark:border-brand-white/10 rounded-xl text-sm md:text-base font-body font-bold text-brand-black/80 dark:text-brand-white/80 shadow-sm hover:scale-105 hover:text-brand-orange transition-all cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
