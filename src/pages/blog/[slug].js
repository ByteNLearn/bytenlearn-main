import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { blogs } from '@/data/blogs';

export default function BlogPost({ blog }) {
    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-brand-white dark:bg-brand-black text-brand-black dark:text-brand-white">
                <h1 className="text-4xl font-display font-bold">Blog Not Found</h1>
            </div>
        );
    }

    return (
        <>
            <Head>
                <title>{blog.title} | ByteNLearn Blog</title>
                <meta name="description" content={blog.excerpt} />
                <meta property="og:title" content={blog.title} />
                <meta property="og:description" content={blog.excerpt} />
                <meta property="og:type" content="article" />
                <meta property="article:published_time" content={blog.date} />
                <meta property="article:author" content={blog.author} />
            </Head>

            <article className="bg-brand-white dark:bg-brand-black min-h-screen text-brand-black dark:text-brand-white transition-colors duration-500">

                {/* 1. Hero Header Section */}
                <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
                    {/* Background Accents */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-[100px]" />
                        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-pink/10 rounded-full blur-[100px]" />
                    </div>

                    <div className="w-full max-w-4xl mx-auto relative z-10">

                        {/* Breadcrumb / Back Link */}
                        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-black/60 dark:text-brand-white/60 hover:text-brand-orange mb-8 transition-colors group">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Articles
                        </Link>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Meta Info */}
                            <div className="flex flex-wrap items-center gap-4 text-sm font-bold uppercase tracking-widest mb-6">
                                <span className="text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/20">
                                    {blog.category}
                                </span>
                                <span className="text-brand-black/40 dark:text-brand-white/40">
                                    {new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                </span>
                                <span className="text-brand-black/40 dark:text-brand-white/40">•</span>
                                <span className="text-brand-black/40 dark:text-brand-white/40">
                                    5 min read
                                </span>
                            </div>

                            {/* Title */}
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8 text-brand-black dark:text-brand-white leading-[1.1] tracking-tight">
                                {blog.title}
                            </h1>

                            {/* Excerpt */}
                            <p className="text-xl md:text-2xl font-body text-brand-black/70 dark:text-brand-white/70 leading-relaxed max-w-3xl mb-12">
                                {blog.excerpt}
                            </p>

                            {/* Author Card */}
                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-brand-black/5 dark:bg-brand-white/5 border border-brand-black/10 dark:border-brand-white/10 w-fit backdrop-blur-sm">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-orange to-brand-pink p-[2px]">
                                    <div className="w-full h-full rounded-full bg-brand-white dark:bg-brand-black flex items-center justify-center overflow-hidden">
                                        <span className="font-display font-bold text-xl text-brand-black dark:text-brand-white">
                                            {blog.author.charAt(0)}
                                        </span>
                                        {/* If you have an image, resemble: <img src={blog.authorImage} alt={blog.author} className="w-full h-full object-cover" /> */}
                                    </div>
                                </div>
                                <div>
                                    <p className="font-bold text-base text-brand-black dark:text-brand-white leading-none mb-1">{blog.author}</p>
                                    <p className="text-xs font-bold uppercase tracking-widest text-brand-black/50 dark:text-brand-white/50">Content Creator @ ByteNLearn</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* 2. Main Content */}
                <div className="w-full max-w-3xl mx-auto px-6 pb-24 relative z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <div
                            className="prose prose-lg md:prose-xl dark:prose-invert max-w-none 
                                prose-headings:font-display prose-headings:font-bold prose-headings:text-brand-black dark:prose-headings:text-brand-white
                                prose-p:font-body prose-p:text-brand-black/80 dark:prose-p:text-brand-white/80 prose-p:leading-loose
                                prose-strong:text-brand-orange prose-strong:font-bold
                                prose-a:text-brand-pink prose-a:font-bold prose-a:no-underline hover:prose-a:text-brand-orange hover:prose-a:underline transition-colors
                                prose-blockquote:border-l-4 prose-blockquote:border-brand-orange prose-blockquote:bg-brand-orange/5 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-xl prose-blockquote:not-italic
                                prose-code:bg-brand-black/10 dark:prose-code:bg-brand-white/10 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-brand-pink prose-code:font-mono prose-code:text-sm
                                prose-img:rounded-3xl prose-img:shadow-2xl prose-img:border prose-img:border-brand-black/10 dark:prose-img:border-brand-white/10"
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                        />
                    </motion.div>

                    {/* Share Section */}
                    <div className="mt-20 pt-10 border-t border-brand-black/10 dark:border-brand-white/10">
                        <h4 className="font-display font-bold text-xl mb-6 text-center text-brand-black dark:text-brand-white">Share this article</h4>
                        <div className="flex justify-center gap-4">
                            {['Twitter', 'LinkedIn', 'Facebook'].map((platform) => (
                                <button key={platform} className="px-6 py-2 rounded-full border border-brand-black/10 dark:border-brand-white/10 hover:border-brand-orange hover:text-brand-orange dark:text-brand-white dark:hover:text-brand-orange transition-colors font-bold uppercase tracking-widest text-xs">
                                    {platform}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 3. Newsletter / CTA Footer for Blog */}
                <div className="bg-brand-black/5 dark:bg-brand-white/5 py-20 px-6 mt-12 mb-0 border-t border-brand-black/5 dark:border-brand-white/5">
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 text-brand-black dark:text-brand-white">Never miss an update.</h3>
                        <p className="text-lg opacity-70 mb-8 max-w-xl mx-auto text-brand-black dark:text-brand-white">Get the latest insights on tech, design, and corporate training delivered straight to your inbox.</p>
                        <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-6 py-4 rounded-xl bg-brand-white dark:bg-brand-black border border-brand-black/10 dark:border-brand-white/10 text-brand-black dark:text-brand-white focus:border-brand-orange focus:outline-none flex-grow"
                            />
                            <button className="px-8 py-4 bg-brand-black dark:bg-brand-white text-brand-white dark:text-brand-black font-bold uppercase tracking-widest rounded-xl hover:bg-brand-orange dark:hover:bg-brand-orange hover:text-white transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

            </article>
        </>
    );
}

export async function getStaticPaths() {
    const paths = blogs.map((blog) => ({
        params: { slug: blog.slug },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const blog = blogs.find((blog) => blog.slug === params.slug);

    return {
        props: {
            blog,
        },
    };
}
