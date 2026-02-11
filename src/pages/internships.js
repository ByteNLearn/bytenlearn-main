import Head from 'next/head';
import Internships from '@/components/home/Internships';
import InternTestimonials from '@/components/home/InternTestimonials';

export default function InternshipsPage() {
    return (
        <>
            <Head>
                <title>Internship Programs in Moradabad | Coding & Development | ByteNLearn</title>
                <meta name="description" content="Boost your career with ByteNLearn's premium internship programs in Moradabad. Hands-on training in MERN Stack, Data Science, App Development, and more." />
                <meta name="keywords" content="Internship in Moradabad, Web Development Internship, Summer Training, Coding Internship, ByteNLearn Careers, Student Programs" />
                <link rel="canonical" href="https://bytenlearn.in/internships" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://bytenlearn.in/internships" />
                <meta property="og:title" content="Career-Boosting Internships | ByteNLearn" />
                <meta property="og:description" content="Get real-world experience with our expert-led internship programs. Build live projects and get hired." />
                <meta property="og:image" content="https://bytenlearn.in/images/internships/internship-og.jpg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://bytenlearn.in/internships" />
                <meta name="twitter:title" content="Internship Programs in Moradabad | ByteNLearn" />
                <meta name="twitter:description" content="Join the best internship program in Moradabad for developers." />
                <meta name="twitter:image" content="https://bytenlearn.in/images/internships/internship-og.jpg" />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "EducationalOccupationalProgram",
                            "name": "ByteNLearn Internship Program",
                            "description": "A comprehensive internship program for students and freshers in web and app development.",
                            "provider": {
                                "@type": "Organization",
                                "name": "ByteNLearn",
                                "url": "https://bytenlearn.in"
                            },
                            "educationalProgramMode": "Hybrid",
                            "programPrerequisites": "Basic knowledge of programming"
                        })
                    }}
                />
            </Head>
            <div className="pt-20">
                <Internships />
                <InternTestimonials />
            </div>
        </>
    );
}
