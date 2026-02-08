import Head from 'next/head';
import About from '@/components/home/About';
import CoreValues from '@/components/about/CoreValues';
import Journey from '@/components/about/Journey';
import Process from '@/components/about/Process';
import LifeAt from '@/components/about/LifeAtByteNLearn';
import Team from '@/components/about/Team';

export default function AboutPage() {
    return (
        <>
            <Head>
                <title>About Us | Best Software Company in Moradabad | ByteNLearn</title>
                <meta name="description" content="Discover ByteNLearn, the leading software development company in Moradabad. Learn about our journey, core values, and the expert team delivering innovative web and app solutions." />
                <meta name="keywords" content="About ByteNLearn, Software Company in Moradabad, Web Development Team, Best IT Company Moradabad, ByteNLearn History" />
                <link rel="canonical" href="https://bytenlearn.in/about" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://bytenlearn.in/about" />
                <meta property="og:title" content="About ByteNLearn | Transforming Digital Ideas into Reality" />
                <meta property="og:description" content="Meet the team behind Moradabad's No.1 software company. We combine creativity with technology to build exceptional digital experiences." />
                <meta property="og:image" content="https://bytenlearn.in/images/about/team-og.jpg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://bytenlearn.in/about" />
                <meta name="twitter:title" content="About ByteNLearn | Innovation & Excellence" />
                <meta name="twitter:description" content="Learn about our mission to empower businesses through technology." />
                <meta name="twitter:image" content="https://bytenlearn.in/images/about/team-og.jpg" />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "AboutPage",
                            "name": "About ByteNLearn",
                            "url": "https://bytenlearn.in/about",
                            "description": "Information about ByteNLearn, a leading software development company in Moradabad.",
                            "mainEntity": {
                                "@type": "Organization",
                                "name": "ByteNLearn",
                                "foundingDate": "2020",
                                "url": "https://bytenlearn.in",
                                "sameAs": [
                                    "https://www.facebook.com/bytenlearn",
                                    "https://www.instagram.com/bytenlearn",
                                    "https://www.linkedin.com/company/bytenlearn"
                                ],
                                "contactPoint": {
                                    "@type": "ContactPoint",
                                    "telephone": "+91-9876543210",
                                    "contactType": "customer service",
                                    "areaServed": "IN",
                                    "availableLanguage": "en"
                                }
                            }
                        })
                    }}
                />
            </Head>
            <main className="pt-20">
                <About />
                <CoreValues />
                <Journey />
                <Process />
                <Team />
                <LifeAt />
            </main>
        </>
    );
}
