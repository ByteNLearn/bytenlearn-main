import Head from "next/head";
import Script from "next/script";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Skills from "@/components/home/Skills";
import Services from "@/components/home/Services";
import Internships from "@/components/home/Internships";
import InternTestimonials from "@/components/home/InternTestimonials";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import HappyClients from "@/components/home/HappyClients";
import Blog from "@/components/home/Blog";
import Contact from "@/components/home/Contact";

export default function UttarPradesh() {
    return (
        <>
            <Head>
                <title>ByteNLearn | Best Website, App & Software Development Company in Uttar Pradesh</title>
                <meta name="description" content="Looking for the best website and app development company in Uttar Pradesh? ByteNLearn is the No.1 software development company in Uttar Pradesh offering premium corporate training, interns, and custom web solutions." />
                <meta name="keywords" content="Best Website Development Company in Uttar Pradesh, Top App Development Company Uttar Pradesh, No.1 Software Development Company in Uttar Pradesh, Web Design Uttar Pradesh, ByteNLearn, Corporate Training, MERN Stack, Data Science" />
                <meta name="author" content="ByteNLearn" />
                <link rel="canonical" href="https://bytenlearn.in/uttarpradesh" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://bytenlearn.in/uttarpradesh" />
                <meta property="og:title" content="ByteNLearn | Best Website & Software Development Company in Uttar Pradesh" />
                <meta property="og:description" content="ByteNLearn is the No.1 website and app development company in Uttar Pradesh. We deliver premium software solutions and corporate training." />
                <meta property="og:image" content="https://bytenlearn.in/images/logo.png" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://bytenlearn.in/uttarpradesh" />
                <meta property="twitter:title" content="ByteNLearn | Best Website & Software Development Company in Uttar Pradesh" />
                <meta property="twitter:description" content="ByteNLearn is the No.1 website and app development company in Uttar Pradesh. We deliver premium software solutions." />
                <meta property="twitter:image" content="https://bytenlearn.in/images/logo.png" />
            </Head>

            {/* Structured Data for SEO */}
            <Script id="structured-data" type="application/ld+json">
                {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ByteNLearn",
            "image": "https://bytenlearn.in/images/logo.png",
            "url": "https://bytenlearn.in/uttarpradesh",
            "telephone": "+91-9876543210",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Lucknow",
              "addressRegion": "Uttar Pradesh",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "26.8467",
              "longitude": "80.9462" 
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            },
            "sameAs": [
              "https://www.facebook.com/bytenlearn",
              "https://www.instagram.com/bytenlearn",
              "https://www.linkedin.com/company/bytenlearn"
            ],
            "priceRange": "$$",
            "description": "ByteNLearn is the No.1 software, website, and app development company in Uttar Pradesh."
          }
        `}
            </Script>

            <Hero city="Uttar Pradesh" />
            <About city="Uttar Pradesh" />
            <Skills />
            <HappyClients />
            <Services />
            <Blog />
            <InternTestimonials />
            <Internships />
            <ProjectsGrid limit={4} />
            <Contact />
        </>
    );
}
