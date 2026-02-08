import Head from 'next/head';
import Services from '@/components/home/Services';

export default function ServicesPage() {
    return (
        <>
            <Head>
                <title>Expert Web & App Development Services | ByteNLearn Moradabad</title>
                <meta name="description" content="ByteNLearn offers premium web design, custom software development, mobile apps, and digital marketing services in Moradabad. Grow your business with us." />
                <meta name="keywords" content="Web Development Services, Custom App Development, SEO Services Moradabad, Digital Marketing Agency, Software Maintenance" />
                <link rel="canonical" href="https://bytenlearn.in/services" />

                {/* Open Graph */}
                <meta property="og:type" content="service" />
                <meta property="og:url" content="https://bytenlearn.in/services" />
                <meta property="og:title" content="Premium Digital Services by ByteNLearn" />
                <meta property="og:description" content="We turn ideas into reality with our expert development and marketing services." />
                <meta property="og:image" content="https://bytenlearn.in/images/services/services-og.jpg" />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "serviceType": "Software Development Agency",
                            "provider": {
                                "@type": "Organization",
                                "name": "ByteNLearn"
                            },
                            "areaServed": {
                                "@type": "City",
                                "name": "Moradabad"
                            },
                            "hasOfferCatalog": {
                                "@type": "OfferCatalog",
                                "name": "IT Services",
                                "itemListElement": [
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Web Development"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Mobile App Development"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Digital Marketing"
                                        }
                                    }
                                ]
                            }
                        })
                    }}
                />
            </Head>
            <div className="pt-20">
                <Services />
            </div>
        </>
    );
}
