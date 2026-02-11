import Head from 'next/head';
import Skills from '@/components/home/Skills';

export default function SkillsPage() {
    return (
        <>
            <Head>
                <title>Our Skills & Technologies | MERN, Python, Data Science | ByteNLearn</title>
                <meta name="description" content="Explore the comprehensive technology stack mastered by ByteNLearn engineers. From MERN Stack and Python to Data Science and Cloud Computing, we deliver excellence." />
                <meta name="keywords" content="MERN Stack, Python, Data Science, React.js, Next.js, Node.js, Web Development Technologies, Mobile App Development, Tech Stack" />
                <link rel="canonical" href="https://bytenlearn.in/skills" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://bytenlearn.in/skills" />
                <meta property="og:title" content="Our Skills & Technologies | ByteNLearn" />
                <meta property="og:description" content="We utilize the latest technologies like React, Next.js, and Python to build scalable solutions." />
                <meta property="og:image" content="https://bytenlearn.in/images/skills/skills-og.jpg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://bytenlearn.in/skills" />
                <meta name="twitter:title" content="Our Skills & Technologies | ByteNLearn" />
                <meta name="twitter:description" content="Explore our technical expertise in modern web and app development." />
                <meta name="twitter:image" content="https://bytenlearn.in/images/skills/skills-og.jpg" />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "ItemList",
                            "name": "ByteNLearn Technical Skills",
                            "description": "A list of technologies and skills offered by ByteNLearn.",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "MERN Stack" },
                                { "@type": "ListItem", "position": 2, "name": "Next.js" },
                                { "@type": "ListItem", "position": 3, "name": "React Native" },
                                { "@type": "ListItem", "position": 4, "name": "Python & Django" },
                                { "@type": "ListItem", "position": 5, "name": "Data Science" },
                                { "@type": "ListItem", "position": 6, "name": "Cloud Computing (AWS)" }
                            ]
                        })
                    }}
                />
            </Head>
            <div className="pt-20">
                <Skills />
            </div>
        </>
    );
}
