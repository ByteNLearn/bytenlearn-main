import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const domainInfo = {
    "MERN Stack": {
        description: "Master full-stack development with MongoDB, Express, React, and Node.js. Build scalable web applications from scratch.",
        skills: ["React.js", "Node.js", "MongoDB", "Redux", "REST APIs"],
        tools: ["VS Code", "Postman", "Git", "Heroku"]
    },
    "Django": {
        description: "Dive into high-level Python web framework. Learn rapid development and clean, pragmatic design.",
        skills: ["Python", "Django REST Framework", "PostgreSQL", "MVC Architecture", "Authentication"],
        tools: ["PyCharm", "Docker", "AWS", "Celery"]
    },
    "Cyber Security": {
        description: "Protect systems and networks. Learn ethical hacking, penetration testing, and security protocols.",
        skills: ["Network Security", "Ethical Hacking", "Cryptography", "Linux", "Risk Analysis"],
        tools: ["Kali Linux", "Wireshark", "Metasploit", "Burp Suite"]
    },
    "Data Science": {
        description: "Unlock insights from data. Master machine learning algorithms, statistical analysis, and data visualization.",
        skills: ["Python", "Machine Learning", "Pandas & NumPy", "Statistics", "Deep Learning"],
        tools: ["Jupyter", "TensorFlow", "Scikit-learn", "Tableau"]
    },
    "Data Analyst": {
        description: "Transform data into actionable business intelligence. Specialized in SQL, reporting, and visualization.",
        skills: ["SQL", "Data Cleaning", "Excel/Google Sheets", "PowerBI", "Critical Thinking"],
        tools: ["MySQL", "Tableau", "PowerBI", "Python"]
    },
    "Social Media Marketing": {
        description: "Dominate the digital space. Learn content strategy, SEO, analytics, and community management.",
        skills: ["Content Strategy", "SEO/SEM", "Copywriting", "Analytics", "Brand Management"],
        tools: ["Google Analytics", "Canva", "Hootsuite", "Meta Ads"]
    }
};

const opportunities = [
    {
        type: "Unpaid Internship",
        role: "Frontend Developer Trainee",
        duration: "3 Months",
        perks: ["Mentorship", "Real Projects", "Certificate", "Future Job Offer"],
        color: "border-brand-black/20 dark:border-brand-white/20",
        btnColor: "bg-brand-black/5 dark:bg-white/10 hover:bg-brand-black/10 dark:hover:bg-white/20 text-brand-black dark:text-brand-white"
    },
    {
        type: "Paid Internship",
        role: "Junior React Developer",
        duration: "6 Months",
        perks: ["Competitive Stipend", "Equipment", "Health Insurance", "Full-time conversion"],
        color: "border-brand-orange",
        btnColor: "bg-brand-orange text-white hover:bg-brand-pink/90"
    }
];

export default function Internships() {
    const [activeDomain, setActiveDomain] = useState("MERN Stack");
    const [selectedRole, setSelectedRole] = useState(null);
    const [status, setStatus] = useState(null); // 'loading', 'success', 'error'
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        countryCode: '+91', // Default India
        phone: '',
        domain: 'MERN Stack', // Default
        college: '',
        course: '',
        portfolio: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/apply', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, role: selectedRole }),
            });

            if (response.ok) {
                setStatus('success');
                setTimeout(() => {
                    setSelectedRole(null);
                    setStatus(null);
                    setFormData({
                        name: '',
                        email: '',
                        // countryCode: '+91',
                        phone: '',
                        domain: 'MERN Stack',
                        college: '',
                        course: '',
                        portfolio: ''
                    });
                }, 3000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

    return (
        <section id="internships" className="py-20 md:py-32 bg-brand-white dark:bg-brand-black transition-colors duration-500 relative">
            <div className="w-full md:container md:mx-auto px-0 md:px-6">
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-16 text-end text-brand-black dark:text-brand-white px-6 md:px-0">
                    Join the <span className="text-brand-orange">Revolution</span>.
                </h2>

                {/* 1. Domains Tabs */}
                <div className="flex flex-nowrap overflow-x-auto md:flex-wrap justify-start md:justify-center gap-4 mb-12 px-4 md:px-0 pb-2">
                    {Object.keys(domainInfo).map((domain) => (
                        <button
                            key={domain}
                            onClick={() => setActiveDomain(domain)}
                            className={`px-6 py-3 rounded-full text-sm md:text-base font-bold uppercase tracking-widest transition-all duration-300 whitespace-nowrap border ${activeDomain === domain
                                ? "bg-brand-orange text-white border-brand-orange scale-105 shadow-lg shadow-brand-orange/30"
                                : "bg-transparent text-brand-black/60 dark:text-brand-white/60 border-brand-black/10 dark:border-brand-white/10 hover:border-brand-orange hover:text-brand-orange"
                                }`}
                        >
                            {domain}
                        </button>
                    ))}
                </div>

                {/* 2. Active Domain Details */}
                <div className="max-w-4xl mx-auto mb-24 min-h-[300px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeDomain}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="p-6 md:p-12 rounded-3xl bg-brand-black/5 dark:bg-brand-white/5 border border-brand-black/10 dark:border-brand-white/10 backdrop-blur-sm"
                        >
                            <h3 className="text-3xl md:text-5xl font-display font-bold mb-6 text-brand-black dark:text-brand-white">
                                {activeDomain}
                            </h3>
                            <p className="text-lg md:text-xl font-body opacity-80 mb-10 max-w-2xl text-brand-black dark:text-brand-white">
                                {domainInfo[activeDomain].description}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-brand-pink font-bold uppercase tracking-widest text-sm mb-4">What You'll Learn</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {domainInfo[activeDomain].skills.map((skill) => (
                                            <span key={skill} className="px-3 py-1 bg-brand-black/5 dark:bg-brand-white/10 rounded-md text-sm font-medium text-brand-black dark:text-brand-white">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-brand-pink font-bold uppercase tracking-widest text-sm mb-4">Tools & Tech</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {domainInfo[activeDomain].tools.map((tool) => (
                                            <span key={tool} className="px-3 py-1 bg-brand-black/5 dark:bg-brand-white/10 rounded-md text-sm font-medium text-brand-black dark:text-brand-white">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* 3. Opportunities Cards (Structure) */}
                <div className="text-center mb-12">
                    <h3 className="text-2xl font-display font-bold text-brand-black/40 dark:text-brand-white/40 uppercase tracking-widest">
                        Internship Structures
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto w-full px-0">
                    {opportunities.map((opp, i) => (
                        <motion.div
                            key={opp.role}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className={`p-6 md:p-10 border-2 ${opp.color} rounded-3xl relative overflow-hidden group bg-transparent transition-colors`}
                        >
                            <div className="relative z-10">
                                <span className="inline-block px-4 py-1 mb-6 text-xs font-bold uppercase tracking-widest border border-current rounded-full opacity-60 text-brand-black dark:text-brand-white">
                                    {opp.type}
                                </span>
                                <h3 className="text-3xl md:text-4xl font-display font-bold mb-2 text-brand-black dark:text-brand-white">{opp.role}</h3>
                                <p className="text-xl opacity-60 mb-8 text-brand-black dark:text-brand-white">{opp.duration}</p>

                                <ul className="space-y-4 mb-10">
                                    {opp.perks.map((perk) => (
                                        <li key={perk} className="flex items-center gap-3 text-brand-black dark:text-brand-white">
                                            <span className="w-2 h-2 rounded-full bg-brand-pink" />
                                            <span className="font-body text-lg">{perk}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={() => setSelectedRole(opp.role)}
                                    className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest transition-all ${opp.btnColor}`}
                                >
                                    Apply Now
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Application Modal */}
            <AnimatePresence>
                {selectedRole && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedRole(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-black/80 backdrop-blur-sm p-4 overflow-y-auto"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full max-w-2xl bg-brand-white dark:bg-brand-black border border-brand-black/10 dark:border-brand-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative my-10"
                        >
                            <button
                                onClick={() => setSelectedRole(null)}
                                className="absolute top-6 right-6 text-brand-black/40 dark:text-brand-white/40 hover:text-brand-orange transition-colors z-10"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <h3 className="text-2xl md:text-3xl font-display font-bold mb-2 text-brand-black dark:text-brand-white">
                                Apply for <span className="text-brand-orange">{selectedRole}</span>
                            </h3>
                            <p className="text-brand-black/60 dark:text-brand-white/60 mb-8">
                                Complete the form below to start your journey.
                            </p>

                            {status === 'success' ? (
                                <div className="p-6 bg-green-500/10 border border-green-500 rounded-xl text-center">
                                    <h4 className="text-xl font-bold text-green-500 mb-2">Application Received!</h4>
                                    <p className="text-brand-black dark:text-brand-white">We'll get back to you shortly.</p>
                                </div>
                            ) : (
                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-widest text-brand-black/60 dark:text-brand-white/60 mb-2">Full Name *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="w-full bg-brand-black/5 dark:bg-brand-white/5 border border-brand-black/10 dark:border-brand-white/10 rounded-xl px-4 py-3 text-brand-black dark:text-brand-white focus:outline-none focus:border-brand-orange transition-colors"
                                                placeholder="John Doe"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-widest text-brand-black/60 dark:text-brand-white/60 mb-2">Email Address *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full bg-brand-black/5 dark:bg-brand-white/5 border border-brand-black/10 dark:border-brand-white/10 rounded-xl px-4 py-3 text-brand-black dark:text-brand-white focus:outline-none focus:border-brand-orange transition-colors"
                                                placeholder="john@example.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-widest text-brand-black/60 dark:text-brand-white/60 mb-2">Domain of Interest *</label>
                                            <select
                                                name="domain"
                                                value={formData.domain}
                                                onChange={handleInputChange}
                                                className="w-full bg-brand-black/5 dark:bg-brand-white/5 border border-brand-black/10 dark:border-brand-white/10 rounded-xl px-4 py-3 text-brand-black dark:text-brand-white focus:outline-none focus:border-brand-orange transition-colors"
                                                required
                                            >
                                                {Object.keys(domainInfo).map(domain => (
                                                    <option key={domain} value={domain} className="bg-white dark:bg-black">{domain}</option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* Mobile Number Section - Replaced Student Year */}
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-widest text-brand-black/60 dark:text-brand-white/60 mb-2">Mobile Number *</label>
                                            <div className="flex gap-2">
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className="flex-1 bg-brand-black/5 dark:bg-brand-white/5 border border-brand-black/10 dark:border-brand-white/10 rounded-xl px-4 py-3 text-brand-black dark:text-brand-white focus:outline-none focus:border-brand-orange transition-colors"
                                                    placeholder="9876543210"
                                                    pattern="[0-9]{10,15}"
                                                    title="Please enter a valid phone number"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-widest text-brand-black/60 dark:text-brand-white/60 mb-2">College Name *</label>
                                            <input
                                                type="text"
                                                name="college"
                                                value={formData.college}
                                                onChange={handleInputChange}
                                                className="w-full bg-brand-black/5 dark:bg-brand-white/5 border border-brand-black/10 dark:border-brand-white/10 rounded-xl px-4 py-3 text-brand-black dark:text-brand-white focus:outline-none focus:border-brand-orange transition-colors"
                                                placeholder="University of Technology"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-widest text-brand-black/60 dark:text-brand-white/60 mb-2">Course / Degree *</label>
                                            <input
                                                type="text"
                                                name="course"
                                                value={formData.course}
                                                onChange={handleInputChange}
                                                className="w-full bg-brand-black/5 dark:bg-brand-white/5 border border-brand-black/10 dark:border-brand-white/10 rounded-xl px-4 py-3 text-brand-black dark:text-brand-white focus:outline-none focus:border-brand-orange transition-colors"
                                                placeholder="B.Tech CS / BCA"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-brand-black/60 dark:text-brand-white/60 mb-2">Portfolio Link (Optional)</label>
                                        <input
                                            type="url"
                                            name="portfolio"
                                            value={formData.portfolio}
                                            onChange={handleInputChange}
                                            className="w-full bg-brand-black/5 dark:bg-brand-white/5 border border-brand-black/10 dark:border-brand-white/10 rounded-xl px-4 py-3 text-brand-black dark:text-brand-white focus:outline-none focus:border-brand-orange transition-colors"
                                            placeholder="https://github.com/..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="w-full py-4 bg-brand-orange text-white rounded-xl font-bold uppercase tracking-widest hover:bg-brand-pink transition-colors shadow-lg shadow-brand-orange/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {status === 'loading' ? 'Sending...' : 'Submit Application'}
                                    </button>

                                    {status === 'error' && (
                                        <p className="text-red-500 text-center text-sm font-bold">Failed to send application. Please try again.</p>
                                    )}
                                </form>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
