export default function Footer() {
    return (
        <footer className="bg-brand-black text-brand-white pt-24 pb-12 relative overflow-hidden">
            {/* Decorative Blur */}
            <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-brand-orange/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                    <div className="md:col-span-5">
                        <h2 className="text-display-md font-display font-bold leading-none mb-6">
                            BYTEN <br /><span className="text-brand-orange">LEARN</span>
                        </h2>
                        <p className="text-brand-white/60 max-w-sm text-balance">
                            Crafting digital experiences that transcend the ordinary. High-contrast, high-impact, high-performance.
                        </p>
                    </div>

                    <div className="md:col-span-3">
                        <h4 className="font-display font-bold text-lg mb-6 text-brand-pink">Explore</h4>
                        <ul className="space-y-4 font-body text-brand-white/80">
                            <li><a href="#" className="hover:text-brand-orange transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-brand-orange transition-colors">About Us</a></li>
                            <li><a href="#skills" className="hover:text-brand-orange transition-colors">Skills</a></li>
                            <li><a href="#services" className="hover:text-brand-orange transition-colors">Services</a></li>
                            <li><a href="#projects" className="hover:text-brand-orange transition-colors">Projects</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-3">
                        <h4 className="font-display font-bold text-lg mb-6 text-brand-pink">Connect</h4>
                        <ul className="space-y-4 font-body text-brand-white/80">
                            <li><a href="#" className="hover:text-brand-orange transition-colors">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-brand-orange transition-colors">Twitter / X</a></li>
                            <li><a href="#" className="hover:text-brand-orange transition-colors">Instagram</a></li>
                            <li><a href="mailto:contact@bytenlearn.com" className="hover:text-brand-orange transition-colors">Email Us</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-brand-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-brand-white/40 font-body">
                    <p>&copy; {new Date().getFullYear()} Bytenlearn Corp. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-brand-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-brand-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
