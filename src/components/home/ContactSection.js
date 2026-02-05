import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ firstName: '', lastName: '', email: '', message: '' });
                toast.success('Message sent successfully! We will get back to you soon.');
            } else {
                setStatus('error');
                toast.error('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('error');
            toast.error('Something went wrong. Please check your connection.');
        }
    };

    return (
        <section id="contact" className="py-20 bg-background transition-colors duration-300 min-h-screen relative flex items-center">
            {/* Background Elements */}
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Info Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h4 className="text-brand-secondary font-bold uppercase tracking-widest mb-4">Get in touch</h4>
                        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
                            Let's Build Something <br />
                            <span className="brand-gradient-text">Extraordinary.</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-lg">
                            Whether you have a project in mind or just want to explore partnership opportunities, we're here to help.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/10 text-brand-secondary shadow-sm">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-foreground dark:text-white font-bold text-lg">Email Us</h3>
                                    <p className="text-gray-600 dark:text-gray-400">bytenlearn@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/10 text-brand-secondary shadow-sm">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-foreground dark:text-white font-bold text-lg">Call Us</h3>
                                    <p className="text-gray-600 dark:text-gray-400">+91 9837033948</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/10 text-brand-secondary shadow-sm">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-foreground dark:text-white font-bold text-lg">Visit Us</h3>
                                    <p className="text-gray-600 dark:text-gray-400">Greater Noida, Uttar Pradesh, India</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="glass-panel p-8 md:p-12 rounded-3xl border border-black/5 dark:border-white/10"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-foreground dark:text-white focus:outline-none focus:border-brand-secondary/50 focus:ring-1 focus:ring-brand-secondary/50 transition-all placeholder:text-gray-400"
                                        placeholder="firstName"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-foreground dark:text-white focus:outline-none focus:border-brand-secondary/50 focus:ring-1 focus:ring-brand-secondary/50 transition-all placeholder:text-gray-400"
                                        placeholder="lastName"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-foreground dark:text-white focus:outline-none focus:border-brand-secondary/50 focus:ring-1 focus:ring-brand-secondary/50 transition-all placeholder:text-gray-400"
                                    placeholder="your@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-foreground dark:text-white focus:outline-none focus:border-brand-secondary/50 focus:ring-1 focus:ring-brand-secondary/50 transition-all resize-none placeholder:text-gray-400"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading' || status === 'success'}
                                className="w-full bg-brand-primary hover:bg-brand-primary/80 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all group"
                            >
                                {status === 'loading' ? (
                                    <>
                                        Sending... <Loader2 size={18} className="animate-spin" />
                                    </>
                                ) : status === 'success' ? (
                                    'Message Sent!'
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                            {status === 'error' && (
                                <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
