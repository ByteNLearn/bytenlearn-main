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

export default function Noida() {
    return (
        <>
            <Head>
                <title>ByteNLearn | Best Website, App & Software Development Company in Noida</title>
                <meta name="description" content="Looking for the best website and app development company in Noida? ByteNLearn is the No.1 software development company in Noida offering premium corporate training, interns, and custom web solutions." />
                <meta name="keywords" content="Best Website Development Company in Noida, Top App Development Company Noida, No.1 Software Development Company in Noida, Web Design Noida, ByteNLearn, Corporate Training, MERN Stack, Data Science" />
                <meta name="author" content="ByteNLearn" />
                <link rel="canonical" href="https://bytenlearn.in/noida" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://bytenlearn.in/noida" />
                <meta property="og:title" content="ByteNLearn | Best Website & Software Development Company in Noida" />
                <meta property="og:description" content="ByteNLearn is the No.1 website and app development company in Noida. We deliver premium software solutions and corporate training." />
                <meta property="og:image" content="https://bytenlearn.in/images/logo.png" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://bytenlearn.in/noida" />
                <meta property="twitter:title" content="ByteNLearn | Best Website & Software Development Company in Noida" />
                <meta property="twitter:description" content="ByteNLearn is the No.1 website and app development company in Noida. We deliver premium software solutions." />
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
            "url": "https://bytenlearn.in/noida",
            "telephone": "+91-9876543210",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Noida",
              "addressRegion": "Uttar Pradesh",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "28.5355",
              "longitude": "77.3910" 
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
            "description": "ByteNLearn is the No.1 software, website, and app development company in Noida."
          }
        `}
            </Script>

            <Hero city="Noida" />
            <About city="Noida" />
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
