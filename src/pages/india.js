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

export default function India() {
    return (
        <>
            <Head>
                <title>ByteNLearn | Best Website, App & Software Development Company in India</title>
                <meta name="description" content="Looking for the best website and app development company in India? ByteNLearn is the No.1 software development company in India offering premium corporate training, interns, and custom web solutions." />
                <meta name="keywords" content="Best Website Development Company in India, Top App Development Company India, No.1 Software Development Company in India, Web Design India, ByteNLearn, Corporate Training, MERN Stack, Data Science" />
                <meta name="author" content="ByteNLearn" />
                <link rel="canonical" href="https://bytenlearn.in/india" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://bytenlearn.in/india" />
                <meta property="og:title" content="ByteNLearn | Best Website & Software Development Company in India" />
                <meta property="og:description" content="ByteNLearn is the No.1 website and app development company in India. We deliver premium software solutions and corporate training." />
                <meta property="og:image" content="https://bytenlearn.in/images/logo.png" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://bytenlearn.in/india" />
                <meta property="twitter:title" content="ByteNLearn | Best Website & Software Development Company in India" />
                <meta property="twitter:description" content="ByteNLearn is the No.1 website and app development company in India. We deliver premium software solutions." />
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
            "url": "https://bytenlearn.in/india",
            "telephone": "+91-9876543210",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "New Delhi",
              "addressRegion": "Delhi",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "28.6139",
              "longitude": "77.2090" 
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
            "description": "ByteNLearn is the No.1 software, website, and app development company in India."
          }
        `}
            </Script>

            <Hero city="India" />
            <About city="India" />
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
