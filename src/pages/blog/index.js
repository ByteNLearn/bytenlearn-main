import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { blogs } from '@/data/blogs';

export default function BlogIndex() {
    return (
        <>
            <Head>
                <title>Blog | ByteNLearn</title>
                <meta name="description" content="Insights, tutorials, and industry news from the ByteNLearn team." />
            </Head>

            <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-brand-white dark:bg-brand-black min-h-screen relative overflow-hidden">
                <div className="w-full md:container md:mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-display font-bold mb-6 text-brand-black dark:text-brand-white"
                        >
                            Our <span className="text-brand-orange">Insights</span>.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg md:text-xl font-body opacity-60 max-w-2xl mx-auto text-brand-black dark:text-brand-white"
                        >
                            Exploring the future of technology, corporate training, and digital transformation.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blog, index) => (
                            <motion.div
                                key={blog.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.2 }}
                                className="group flex flex-col h-full bg-brand-black/5 dark:bg-brand-white/5 border border-brand-black/10 dark:border-brand-white/10 rounded-3xl overflow-hidden hover:border-brand-orange/50 transition-colors"
                            >
                                <div className="h-48 w-full bg-gradient-to-br from-brand-black/10 to-brand-black/5 dark:from-brand-white/10 dark:to-brand-white/5 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-brand-orange/10 transform scale-100 group-hover:scale-110 transition-transform duration-700" />
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
                </div>
            </section>
        </>
    );
}
