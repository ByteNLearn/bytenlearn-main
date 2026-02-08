import Head from 'next/head';
import Contact from '@/components/home/Contact';

export default function ContactPage() {
    return (
        <>
            <Head>
                <title>Contact Us | Get a Free Quote | ByteNLearn</title>
                <meta name="description" content="Ready to start your project? Contact ByteNLearn in Moradabad for website design, app development, and corporate training inquiries. We reply within 24 hours." />
                <meta name="keywords" content="Contact ByteNLearn, Hire Developers Moradabad, Web Design Quote, IT Consultation" />
                <link rel="canonical" href="https://bytenlearn.in/contact" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://bytenlearn.in/contact" />
                <meta property="og:title" content="Contact Us | Start Your Digital Transformation" />
                <meta property="og:description" content="Reach out to our team of experts. We are ready to listen to your ideas and help you build the future." />
                <meta property="og:image" content="https://bytenlearn.in/images/contact/contact-og.jpg" />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "ContactPage",
                            "name": "Contact ByteNLearn",
                            "description": "Contact details for ByteNLearn, Moradabad's premier software company.",
                            "url": "https://bytenlearn.in/contact",
                            "mainEntity": {
                                "@type": "LocalBusiness",
                                "name": "ByteNLearn",
                                "image": "https://bytenlearn.in/images/logo.png",
                                "telephone": "+91-9876543210",
                                "email": "contact@bytenlearn.in",
                                "address": {
                                    "@type": "PostalAddress",
                                    "addressLocality": "Moradabad",
                                    "addressRegion": "Uttar Pradesh",
                                    "addressCountry": "IN"
                                },
                                "openingHoursSpecification": {
                                    "@type": "OpeningHoursSpecification",
                                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                    "opens": "09:00",
                                    "closes": "18:00"
                                }
                            }
                        })
                    }}
                />
            </Head>
            <div className="pt-20">
                <Contact />
            </div>
        </>
    );
}
