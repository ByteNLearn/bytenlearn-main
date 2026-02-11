import Head from "next/head";
import Script from "next/script";
import dynamic from "next/dynamic";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
const Skills = dynamic(() => import("@/components/home/Skills"));
const Services = dynamic(() => import("@/components/home/Services"));
const Internships = dynamic(() => import("@/components/home/Internships"));
const InternTestimonials = dynamic(() => import("@/components/home/InternTestimonials"));
const ProjectsGrid = dynamic(() => import("@/components/projects/ProjectsGrid"));
const HappyClients = dynamic(() => import("@/components/home/HappyClients"));
const Blog = dynamic(() => import("@/components/home/Blog"));
const Contact = dynamic(() => import("@/components/home/Contact"));

export default function Rampur() {
  return (
    <>
      <Head>
        <title>ByteNLearn | Best Website, App & Software Development Company in Rampur</title>
        <meta name="description" content="Looking for the best website and app development company in Rampur? ByteNLearn is the No.1 software development company in Rampur offering premium corporate training, interns, and custom web solutions." />
        <meta name="keywords" content="Best Website Development Company in Rampur, Top App Development Company Rampur, No.1 Software Development Company in Rampur, Web Design Rampur, ByteNLearn, Corporate Training, MERN Stack, Data Science" />
        <meta name="author" content="ByteNLearn" />
        <link rel="canonical" href="https://bytenlearn.in/rampur" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bytenlearn.in/rampur" />
        <meta property="og:title" content="ByteNLearn | Best Website & Software Development Company in Rampur" />
        <meta property="og:description" content="ByteNLearn is the No.1 website and app development company in Rampur. We deliver premium software solutions and corporate training." />
        <meta property="og:image" content="https://bytenlearn.in/images/logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://bytenlearn.in/rampur" />
        <meta property="twitter:title" content="ByteNLearn | Best Website & Software Development Company in Rampur" />
        <meta property="twitter:description" content="ByteNLearn is the No.1 website and app development company in Rampur. We deliver premium software solutions." />
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
            "url": "https://bytenlearn.in/rampur",
            "telephone": "+91-9876543210",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Rampur",
              "addressRegion": "Uttar Pradesh",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "28.8153",
              "longitude": "79.0257" 
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
            "description": "ByteNLearn is the No.1 software, website, and app development company in Rampur."
          }
        `}
      </Script>

      <Hero city="Rampur" />
      <About city="Rampur" />
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
