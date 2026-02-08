import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { blogs } from '@/data/blogs';

export default function Blog() {
    // Show only the latest 3 blogs on the home page
    const latestBlogs = blogs.slice(0, 3);

    return (
        <section id="blog" className="py-20 md:py-32 bg-brand-white dark:bg-brand-black transition-colors duration-500 relative overflow-hidden">
            <div className="w-full md:container md:mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4 md:px-0">
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-brand-black dark:text-brand-white">
                        Latest <span className="text-brand-orange">Insights</span>.
                    </h2>
                    <Link href="/blog" className="hidden md:inline-block mt-4 md:mt-0 px-8 py-3 border border-brand-black dark:border-brand-white rounded-full font-bold uppercase tracking-widest hover:bg-brand-black hover:text-brand-white dark:hover:bg-brand-white dark:hover:text-brand-black transition-all">
                        View All Posts
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {latestBlogs.map((blog, index) => (
                        <motion.div
                            key={blog.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group flex flex-col h-full bg-brand-black/5 dark:bg-brand-white/5 border border-brand-black/10 dark:border-brand-white/10 rounded-3xl overflow-hidden hover:border-brand-orange/50 transition-colors"
                        >
                            {/* Image Placeholder with Gradient */}
                            <div className="h-48 w-full relative overflow-hidden">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-brand-black/10 transition-colors duration-500" />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-brand-white dark:bg-brand-black text-xs font-bold uppercase tracking-widest rounded-full shadow-lg text-brand-black dark:text-brand-white">
                                        {blog.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 md:p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-brand-black/40 dark:text-brand-white/40 mb-4">
                                    <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                    <span className="w-1 h-1 bg-current rounded-full" />
                                    <span>{blog.author}</span>
                                </div>

                                <h3 className="text-xl md:text-2xl font-display font-bold mb-4 text-brand-black dark:text-brand-white group-hover:text-brand-orange transition-colors line-clamp-2">
                                    {blog.title}
                                </h3>

                                <p className="text-brand-black/60 dark:text-brand-white/60 mb-6 flex-grow line-clamp-3">
                                    {blog.excerpt}
                                </p>

                                <Link href={`/blog/${blog.slug}`} className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-black dark:text-brand-white hover:text-brand-pink transition-colors">
                                    Read Article
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link href="/blog" className="inline-block px-8 py-3 border border-brand-black dark:border-brand-white rounded-full font-bold uppercase tracking-widest hover:bg-brand-black hover:text-brand-white dark:hover:bg-brand-white dark:hover:text-brand-black transition-all">
                        View All Posts
                    </Link>
                </div>
            </div>
        </section>
    );
}
