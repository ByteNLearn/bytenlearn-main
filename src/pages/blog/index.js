import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { blogs } from '@/data/blogs';

export default function BlogIndex() {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const itemsPerPage = 9;

    // Get unique categories from the blogs data
    const categories = ["All", ...new Set(blogs.map(blog => blog.category))];

    useEffect(() => {
        if (router.isReady && router.query.category) {
            const categoryFromUrl = router.query.category;
            if (categories.includes(categoryFromUrl)) {
                setSelectedCategory(categoryFromUrl);
            }
        }
    }, [router.isReady, router.query.category]);

    // Filter blogs based on category
    const filteredBlogs = selectedCategory === "All"
        ? blogs
        : blogs.filter(blog => blog.category === selectedCategory);

    const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
    const paginatedBlogs = filteredBlogs.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1); // Reset to first page

        // Update URL without refreshing
        const query = category === "All" ? {} : { category };
        router.push({ pathname: '/blog', query }, undefined, { shallow: true });
    };

    return (
        <>
            <Head>
                <title>Blog | ByteNLearn - Insights & Tutorials</title>
                <meta name="description" content="Explore insights, tutorials, and industry news from the ByteNLearn team. Stay updated on tech trends, corporate training, and digital transformation." />
                <link rel="canonical" href="https://bytenlearn.in/blog" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://bytenlearn.in/blog" />
                <meta property="og:title" content="Blog | ByteNLearn - Insights & Tutorials" />
                <meta property="og:description" content="Explore insights, tutorials, and industry news from the ByteNLearn team." />
                <meta property="og:image" content="https://bytenlearn.in/images/logo.png" /> {/* ideally a specific blog index image */}

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Blog | ByteNLearn - Insights & Tutorials" />
                <meta name="twitter:description" content="Explore insights, tutorials, and industry news from the ByteNLearn team." />
                <meta name="twitter:image" content="https://bytenlearn.in/images/logo.png" />
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

                    {/* Category Filter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-nowrap overflow-x-auto gap-4 mb-16 pb-4 justify-start md:justify-center md:flex-wrap scrollbar-hide"
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => handleCategoryChange(category)}
                                className={`px-6 py-2 rounded-full font-bold uppercase tracking-widest text-xs transition-all border whitespace-nowrap flex-shrink-0 ${selectedCategory === category
                                    ? 'bg-brand-orange border-brand-orange text-white'
                                    : 'bg-transparent border-brand-black/20 dark:border-brand-white/20 text-brand-black dark:text-brand-white hover:border-brand-orange hover:text-brand-orange'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {paginatedBlogs.map((blog, index) => (
                            <motion.div
                                key={blog.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.2 }}
                                className="group flex flex-col h-full bg-brand-black/5 dark:bg-brand-white/5 border border-brand-black/10 dark:border-brand-white/10 rounded-3xl overflow-hidden hover:border-brand-orange/50 transition-colors"
                            >
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

                    {filteredBlogs.length === 0 && (
                        <div className="text-center py-20 opacity-50">
                            <h3 className="text-2xl font-display font-bold">No articles found in this category.</h3>
                        </div>
                    )}

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center mt-16 gap-4">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="px-6 py-3 border border-brand-black/20 dark:border-brand-white/20 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-black hover:text-brand-white dark:hover:bg-brand-white dark:hover:text-brand-black disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                            >
                                Previous
                            </button>

                            <div className="flex gap-2">
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => handlePageChange(page)}
                                        className={`w-10 h-10 rounded-full font-bold flex items-center justify-center transition-all ${currentPage === page
                                            ? 'bg-brand-orange text-white'
                                            : 'text-brand-black dark:text-brand-white hover:bg-brand-black/10 dark:hover:bg-brand-white/10'
                                            }`}
                                    >
                                        {page}
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="px-6 py-3 border border-brand-black/20 dark:border-brand-white/20 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-black hover:text-brand-white dark:hover:bg-brand-white dark:hover:text-brand-black disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                            >
                                Next
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
