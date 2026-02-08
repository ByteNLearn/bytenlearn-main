import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { blogs } from '@/data/blogs';

export default function BlogPost({ blog, relatedBlogs }) {
    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-brand-white dark:bg-brand-black text-brand-black dark:text-brand-white">
                <h1 className="text-4xl font-display font-bold">Blog Not Found</h1>
            </div>
        );
    }

    const [currentUrl, setCurrentUrl] = useState('');

    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, []);

    return (
        <>
            <Head>
                <title>{blog.title} | ByteNLearn Blog</title>
                <meta name="description" content={blog.excerpt} />
                <link rel="canonical" href={`https://bytenlearn.in/blog/${blog.slug}`} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`https://bytenlearn.in/blog/${blog.slug}`} />
                <meta property="og:title" content={blog.title} />
                <meta property="og:description" content={blog.excerpt} />
                <meta property="og:image" content={blog.image} />
                <meta property="article:published_time" content={blog.date} />
                <meta property="article:author" content={blog.author} />
                <meta property="article:section" content={blog.category} />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                {/* <meta name="twitter:site" content="@bytenlearn" /> Optional: Add if you have a handle */}
                <meta name="twitter:title" content={blog.title} />
                <meta name="twitter:description" content={blog.excerpt} />
                <meta name="twitter:image" content={blog.image} />

                {/* Structured Data (JSON-LD) */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "BlogPosting",
                            "headline": blog.title,
                            "image": [blog.image],
                            "datePublished": blog.date,
                            "dateModified": blog.date,
                            "author": [{
                                "@type": "Person",
                                "name": blog.author
                            }],
                            "publisher": {
                                "@type": "Organization",
                                "name": "ByteNLearn",
                                "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://bytenlearn.in/images/logo.png"
                                }
                            },
                            "description": blog.excerpt,
                            "mainEntityOfPage": {
                                "@type": "WebPage",
                                "@id": `https://bytenlearn.in/blog/${blog.slug}`
                            }
                        })
                    }}
                />
            </Head>
            <div className="w-full h-[200px] md:h-[400px] relative z-10 mt-5 shadow-2xl">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent" />
            </div>
            <article className="bg-brand-white dark:bg-brand-black min-h-screen text-brand-black dark:text-brand-white transition-colors duration-500">

                {/* 1. Hero Header Section */}
                <div className="relative pt-12 pb-20 md:pt-12 md:pb-32 px-6 overflow-hidden">
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
                            {/* Browse by Category Section */}
                            {/* <section className="py-12 px-6 border-t border-brand-black/10 dark:border-brand-white/10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h4 className="font-display font-bold text-lg mb-6 text-brand-black/60 dark:text-brand-white/60 uppercase tracking-widest">
                            Browse by <span className="text-brand-orange">Topic</span>
                        </h4>
                        <div className="flex flex-wrap justify-center gap-4">
                            {[...new Set(blogs.map(b => b.category))].map((category) => (
                                <Link
                                    key={category}
                                    href={`/blog?category=${category}`}
                                    className="px-6 py-2 rounded-full border border-brand-black/20 dark:border-brand-white/20 text-brand-black dark:text-brand-white font-bold uppercase tracking-widest text-xs hover:border-brand-orange hover:text-brand-orange transition-all"
                                >
                                    {category}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section> */}

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
                                prose-headings:font-display prose-headings:font-bold
                                prose-h2:text-4xl md:prose-h2:text-5xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:leading-tight
                                prose-h3:text-3xl md:prose-h3:text-4xl prose-h3:mt-12 prose-h3:mb-6 prose-h3:leading-tight
                                prose-p:font-body prose-p:text-brand-black/80 dark:prose-p:text-brand-white/80 prose-p:leading-loose prose-p:mb-8
                                prose-strong:text-brand-orange prose-strong:font-bold
                                prose-a:text-brand-pink prose-a:font-bold prose-a:no-underline hover:prose-a:text-brand-orange transition-colors
                                prose-blockquote:border-l-4 prose-blockquote:border-brand-orange prose-blockquote:bg-brand-orange/5 prose-blockquote:px-8 prose-blockquote:py-6 prose-blockquote:rounded-r-2xl prose-blockquote:not-italic prose-blockquote:font-medium prose-blockquote:text-brand-black/90 dark:prose-blockquote:text-brand-white/90 prose-blockquote:my-10 prose-blockquote:shadow-sm
                                prose-ul:list-disc prose-ul:pl-6 prose-ul:my-8 prose-li:marker:text-brand-pink prose-li:pl-2 prose-li:mb-2
                                prose-ol:list-decimal prose-ol:pl-6 prose-ol:my-8 prose-ol:marker:text-brand-orange prose-ol:marker:font-bold prose-li:pl-2 prose-li:mb-2
                                prose-code:bg-brand-black/5 dark:prose-code:bg-brand-white/10 prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:text-brand-pink prose-code:font-mono prose-code:text-sm prose-code:font-bold prose-code:before:content-none prose-code:after:content-none
                                prose-img:rounded-3xl prose-img:shadow-2xl prose-img:border prose-img:border-brand-black/10 dark:prose-img:border-brand-white/10 prose-img:my-12
                                    [&>p:first-of-type]:first-letter:text-5xl [&>p:first-of-type]:first-letter:font-display [&>p:first-of-type]:first-letter:font-bold [&>p:first-of-type]:first-letter:text-brand-orange [&>p:first-of-type]:first-letter:mr-3 [&>p:first-of-type]:first-letter:float-left [&>p:first-of-type]:first-letter:leading-none"
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                        />
                    </motion.div>

                    {/* Share Section */}
                    {/* Share Section - Interactive Redesign */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="mt-24 pt-10 border-t border-brand-black/10 dark:border-brand-white/10"
                    >
                        <h4 className="font-display font-bold text-2xl mb-8 text-center text-brand-black dark:text-brand-white">
                            Share this <span className="text-brand-orange">article</span>
                        </h4>

                        <div className="flex flex-wrap justify-center gap-6">
                            {[
                                {
                                    name: 'Twitter',
                                    url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${currentUrl}`,
                                    color: 'hover:bg-[#1DA1F2] hover:border-[#1DA1F2] hover:text-white',
                                    icon: (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                    )
                                },
                                {
                                    name: 'LinkedIn',
                                    url: `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`,
                                    color: 'hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white',
                                    icon: (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                                    )
                                },
                                {
                                    name: 'Facebook',
                                    url: `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`,
                                    color: 'hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white',
                                    icon: (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                                    )
                                },
                                {
                                    name: 'WhatsApp',
                                    url: `https://wa.me/?text=${encodeURIComponent(blog.title)}%20${currentUrl}`,
                                    color: 'hover:bg-[#25D366] hover:border-[#25D366] hover:text-white',
                                    icon: (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.694c.93.535 2.12.835 3.194.844 3.192 0 5.79-2.597 5.79-5.8 0-3.194-2.607-5.786-5.787-5.786zm9.73 5.395c.783 2.895-.898 6.035-2.071 7.218 0 0-3.004 2.885-7.792 2.883-4.708.005-7.563-3.018-7.563-3.018l-3.328.877 1.09-4.004c-1.163-1.696-2.193-4.701-1.558-7.51.688-3.044 2.879-5.12 5.769-6.315 2.548-1.054 5.925.101 7.294 1.464 1.368 1.363 2.59 4.14 1.56 6.075z" clipRule="evenodd" /></svg>
                                    )
                                },
                                {
                                    name: 'Instagram',
                                    url: null, // Instagram doesn't support direct link sharing easily
                                    onClick: () => {
                                        navigator.clipboard.writeText(currentUrl);
                                        alert('Link copied! Share this on your Instagram Story.');
                                    },
                                    color: 'hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-transparent hover:text-white',
                                    icon: (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.416 2.065c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                                    )
                                },
                            ].map((platform) => (
                                <motion.button
                                    key={platform.name}
                                    onClick={() => platform.onClick ? platform.onClick() : window.open(platform.url, '_blank', 'width=600,height=400')}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`
                                        flex items-center gap-3 px-6 py-3 rounded-2xl 
                                        bg-white dark:bg-brand-black 
                                        border border-brand-black/10 dark:border-brand-white/10 
                                        shadow-lg hover:shadow-xl
                                        text-brand-black dark:text-brand-white
                                        font-bold uppercase tracking-widest text-xs
                                        transition-all duration-300
                                        ${platform.color}
                                    `}
                                >
                                    {platform.icon}
                                    {platform.name}
                                </motion.button>
                            ))}

                            <motion.button
                                onClick={() => {
                                    navigator.clipboard.writeText(currentUrl);
                                    alert('Link copied to clipboard!');
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="flex items-center gap-3 px-6 py-3 rounded-2xl 
                                    bg-brand-black dark:bg-brand-white 
                                    border border-transparent 
                                    shadow-lg hover:shadow-xl
                                    text-brand-white dark:text-brand-black
                                    font-bold uppercase tracking-widest text-xs
                                    hover:bg-brand-orange hover:text-white dark:hover:bg-brand-orange dark:hover:text-white
                                    transition-all duration-300"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                </svg>
                                Copy Link
                            </motion.button>
                        </div>
                    </motion.div>
                </div>



                {/* Related Blogs Section */}
                {relatedBlogs.length > 0 && (
                    <section className="py-20 px-6 bg-brand-black/5 dark:bg-brand-white/5 border-t border-brand-black/10 dark:border-brand-white/10">
                        <div className="w-full max-w-6xl mx-auto">
                            <h3 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center text-brand-black dark:text-brand-white">
                                Related <span className="text-brand-orange">Articles</span>
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {relatedBlogs.map((item) => (
                                    <Link key={item.id} href={`/blog/${item.slug}`} className="group flex flex-col h-full bg-brand-white dark:bg-brand-black border border-brand-black/10 dark:border-brand-white/10 rounded-3xl overflow-hidden hover:border-brand-orange/50 transition-colors shadow-lg">
                                        <div className="h-48 w-full relative overflow-hidden">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-brand-black/10 transition-colors duration-500" />
                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1 bg-brand-white dark:bg-brand-black text-xs font-bold uppercase tracking-widest rounded-full shadow-lg text-brand-black dark:text-brand-white">
                                                    {item.category}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-brand-black/40 dark:text-brand-white/40 mb-4">
                                                <span>{new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                            </div>

                                            <h4 className="text-xl font-display font-bold mb-3 text-brand-black dark:text-brand-white group-hover:text-brand-orange transition-colors line-clamp-2">
                                                {item.title}
                                            </h4>

                                            <p className="text-sm text-brand-black/60 dark:text-brand-white/60 mb-4 flex-grow line-clamp-3">
                                                {item.excerpt}
                                            </p>

                                            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-pink hover:text-brand-orange transition-colors">
                                                Read Article
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

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

            </article >
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

    // Filter related blogs by category, excluding the current one
    const relatedBlogs = blogs
        .filter((b) => b.category === blog.category && b.slug !== blog.slug)
        .slice(0, 3);

    return {
        props: {
            blog,
            relatedBlogs,
        },
    };
}

