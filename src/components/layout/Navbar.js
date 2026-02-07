import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Internships', href: '#internships' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-brand-white/80 dark:bg-brand-black/80 backdrop-blur-md border-b border-brand-black/10 dark:border-brand-white/10' : 'py-8 bg-transparent'}`}>
            <div className="w-full md:container md:mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 text-2xl font-display font-bold uppercase tracking-tighter z-50">
                    <img src="/images/logo.png" alt="Bytenlearn Logo" className="h-12 w-12 rounded-full object-cover" />
                    <div>
                        Byten<span className="text-brand-orange">learn</span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="relative font-body text-sm uppercase tracking-widest hover:text-brand-orange transition-colors group">
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-pink transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                    {/* <button className="px-6 py-2 border border-brand-black dark:border-brand-white font-display font-bold text-xs uppercase hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all">
                        Get Hired
                    </button> */}
                </div>

                {/* Mobile Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50 relative w-8 h-6 flex flex-col justify-between">
                    <motion.span animate={isOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }} className="w-full h-[2px] bg-brand-black dark:bg-brand-white origin-left" />
                    <motion.span animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className="w-full h-[2px] bg-brand-black dark:bg-brand-white" />
                    <motion.span animate={isOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }} className="w-full h-[2px] bg-brand-black dark:bg-brand-white origin-left" />
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="fixed inset-0 bg-brand-white dark:bg-brand-black flex flex-col justify-center items-center gap-8 md:hidden"
                        >
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-4xl font-display font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-brand-orange hover:to-brand-pink transition-all"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
