import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Services', href: '/services' },
    { name: 'Internships', href: '/internships' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
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
        <>
            {/* Top Bar - Contact Info */}
            <div className="fixed top-0 left-0 right-0 bg-brand-black text-brand-white py-2 px-6 text-xs font-bold tracking-widest flex justify-between items-center z-[60] border-b border-brand-white/10">
                <div className="flex gap-4 md:gap-8 overflow-x-auto no-scrollbar">
                    <a href="tel:+919837033948" className="hover:text-brand-orange transition-colors whitespace-nowrap">
                        📞 +91 9837033948
                    </a>
                    <a href="tel:+918077897867" className="hover:text-brand-orange transition-colors whitespace-nowrap">
                        📞 +91 8077897867
                    </a>
                    <a href="mailto:bytenlearn@gmail.com?subject=Enquiry from Website" className="hover:text-brand-orange transition-colors whitespace-nowrap">
                        ✉️ bytenlearn@gmail.com
                    </a>
                </div>
                <div className="hidden md:flex gap-4">
                    <span className="opacity-50">Mon - Sat: 9:00 - 18:00</span>
                </div>
            </div>

            <nav className={`fixed top-[33px] left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-brand-white/80 dark:bg-brand-black/80 backdrop-blur-md border-b border-brand-black/10 dark:border-brand-white/10 shadow-sm' : 'py-6 bg-transparent'}`}>
                <div className="w-full md:container md:mx-auto px-6 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2 text-2xl font-display font-bold uppercase tracking-tighter z-50">
                        <Image src="/images/logo.png" alt="Bytenlearn Logo" width={48} height={48} className="rounded-full object-cover" />
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
                                className="fixed inset-0 bg-brand-white dark:bg-brand-black flex flex-col justify-center items-center gap-8 md:hidden z-40"
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

                                {/* Mobile Contact Info */}
                                <div className="mt-8 text-center space-y-4">
                                    <p className="text-sm font-bold opacity-50 uppercase tracking-widest">Get In Touch</p>
                                    <div className="flex flex-col gap-2 text-lg font-bold">
                                        <a href="tel:+919837033948" className="hover:text-brand-orange">+91 9837033948</a>
                                        <a href="tel:+918077897867" className="hover:text-brand-orange">+91 8077897867</a>
                                        <a href="mailto:bytenlearn@gmail.com?subject=Enquiry from Website" className="hover:text-brand-orange">bytenlearn@gmail.com</a>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </nav>
        </>
    );
}
