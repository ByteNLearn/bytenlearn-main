import Head from 'next/head';
import ProjectsGrid from '@/components/projects/ProjectsGrid';
import HappyClients from '@/components/home/HappyClients';

export default function ProjectsPage() {
    return (
        <>
            <Head>
                <title>Our Portfolio | Best Website & App Projects in Moradabad</title>
                <meta name="description" content="Explore our extensive portfolio of web apps, mobile applications, and software solutions. See why we are the top choice for development in Moradabad." />
                <meta name="keywords" content="ByteNLearn Portfolio, Case Studies, Web Design Projects, App Development Examples, Recent Work" />
                <link rel="canonical" href="https://bytenlearn.in/projects" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://bytenlearn.in/projects" />
                <meta property="og:title" content="Our Work | Innovative Digital Solutions by ByteNLearn" />
                <meta property="og:description" content="From FinTech dashboards to eCommerce stores, explore how we help businesses grow with custom software." />
                <meta property="og:image" content="https://bytenlearn.in/images/projects/portfolio-og.jpg" />

                {/* Structured Data for CollectionPage */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "CollectionPage",
                            "name": "ByteNLearn Projects Portfolio",
                            "description": "A showcase of web and mobile application projects developed by ByteNLearn.",
                            "url": "https://bytenlearn.in/projects",
                            "mainEntity": {
                                "@type": "ItemList",
                                "itemListElement": [
                                    {
                                        "@type": "ListItem",
                                        "position": 1,
                                        "name": "FinTech Dashboard"
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 2,
                                        "name": "Neon E-Commerce"
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 3,
                                        "name": "AI Analytics Platform"
                                    }
                                ]
                            }
                        })
                    }}
                />
            </Head>
            <main>
                <ProjectsGrid />
                <HappyClients />
            </main>
        </>
    );
}
