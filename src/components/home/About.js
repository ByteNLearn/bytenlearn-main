export default function About({ city = "Moradabad" }) {
    return (
        <section id="about" className="py-20 md:py-32 bg-brand-white dark:bg-brand-black relative overflow-hidden transition-colors duration-500">
            <div className="w-full md:container md:mx-auto px-0 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    <div className="px-6 md:px-0">
                        <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 text-brand-black dark:text-brand-white">
                            We Are <span className="text-brand-orange">ByteNLearn</span>.
                        </h2>
                        <div className="space-y-6 text-lg md:text-xl font-body opacity-80 text-brand-black dark:text-brand-white">
                            <p>
                                Recognized as the <b className="text-brand-orange">Best Website & App Development Company in {city}</b>, we don't just write code; we architect experiences. Born from a desire to break the mold, we bring <span className="text-brand-pink font-bold">energy</span> and <span className="text-brand-pink font-bold">innovation</span> to every pixel.
                            </p>
                            <p>
                                As the <b className="text-brand-orange">No.1 Software Development Company in {city}</b>, our team integrates cutting-edge 3D technologies with robust backend systems to deliver websites that leave a lasting impression.
                            </p>
                        </div>

                        <div className="mt-12 grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-5xl font-display font-bold text-brand-orange">10+</h4>
                                <p className="font-bold uppercase tracking-widest text-sm text-brand-black/60 dark:text-brand-white/60">Years Experience</p>
                            </div>
                            <div>
                                <h4 className="text-5xl font-display font-bold text-brand-pink">50+</h4>
                                <p className="font-bold uppercase tracking-widest text-sm text-brand-black/60 dark:text-brand-white/60">Global Projects</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[400px] md:h-[600px] bg-brand-black/5 dark:bg-brand-white/5 rounded-2xl overflow-hidden perspective-container">
                        {/* Abstract visual representation instead of a generic stock photo */}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange via-transparent to-brand-pink opacity-20" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-9xl font-display font-bold opacity-10 rotate-90 tracking-widest text-brand-black dark:text-brand-white">LEARN</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
