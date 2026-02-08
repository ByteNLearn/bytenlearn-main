import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-brand-black text-brand-white pt-24 pb-12 relative overflow-hidden">
            {/* Decorative Blur */}
            <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-brand-orange/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                    <div className="md:col-span-5">
                        <h2 className="text-display-md font-display font-bold leading-none mb-6">
                            BYTEN <span className="text-brand-orange">LEARN</span>
                        </h2>
                        <p className="text-brand-white/60 max-w-sm text-balance">
                            Crafting digital experiences that transcend the ordinary. High-contrast, high-impact, high-performance.
                        </p>
                    </div>

                    <div className="md:col-span-3">
                        <h4 className="font-display font-bold text-lg mb-6 text-brand-pink">Explore</h4>
                        <ul className="space-y-4 font-body text-brand-white/80">
                            <li><Link href="/" className="hover:text-brand-orange transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-brand-orange transition-colors">About Us</Link></li>
                            <li><Link href="/skills" className="hover:text-brand-orange transition-colors">Skills</Link></li>
                            <li><Link href="/services" className="hover:text-brand-orange transition-colors">Services</Link></li>
                            <li><Link href="/projects" className="hover:text-brand-orange transition-colors">Projects</Link></li>
                            <li><Link href="/blog" className="hover:text-brand-orange transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-4">
                        <h4 className="font-display font-bold text-lg mb-6 text-brand-pink">Contact Us</h4>
                        <ul className="space-y-4 font-body text-brand-white/80">
                            <li>
                                <a href="tel:+919837033948" className="hover:text-brand-orange transition-colors flex items-center gap-2">
                                    <span>📞</span> +91 9837033948
                                </a>
                            </li>
                            <li>
                                <a href="tel:+918077897867" className="hover:text-brand-orange transition-colors flex items-center gap-2">
                                    <span>📞</span> +91 8077897867
                                </a>
                            </li>
                            <li>
                                <a href="mailto:bytenlearn@gmail.com?subject=Enquiry from Website" className="hover:text-brand-orange transition-colors flex items-center gap-2">
                                    <span>✉️</span> bytenlearn@gmail.com
                                </a>
                            </li>
                            <li>
                                <div className="flex gap-4 mt-4">
                                    <a href="#" className="hover:text-brand-orange transition-colors">LinkedIn</a>
                                    <a href="#" className="hover:text-brand-orange transition-colors">Twitter</a>
                                    <a href="#" className="hover:text-brand-orange transition-colors">Instagram</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-brand-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-brand-white/40 font-body">
                    <p>&copy; {new Date().getFullYear()} ByteNLearn Corp. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-brand-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-brand-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
