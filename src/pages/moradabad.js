import Head from "next/head";
import Script from "next/script";
import dynamic from "next/dynamic";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";

// Lazy-load below-the-fold components to reduce initial bundle size
const Skills = dynamic(() => import("@/components/home/Skills"));
const Services = dynamic(() => import("@/components/home/Services"));
const Internships = dynamic(() => import("@/components/home/Internships"));
const InternTestimonials = dynamic(() => import("@/components/home/InternTestimonials"));
const ProjectsGrid = dynamic(() => import("@/components/projects/ProjectsGrid"));
const HappyClients = dynamic(() => import("@/components/home/HappyClients"));
const Blog = dynamic(() => import("@/components/home/Blog"));
const Contact = dynamic(() => import("@/components/home/Contact"));

export default function Home() {
    return (
        <>
            <Head>
                <title>ByteNLearn | Best Software & App Development Company in Moradabad</title>
                <meta name="description" content="Looking for an affordable software development company in Moradabad? ByteNLearn offers premium custom website, mobile app, ERP, CRM, and AI solutions. Hire expert developers in Moradabad today." />
                <meta name="keywords" content="accounting software company in Moradabad, affordable software development company in Moradabad, ai software development in Moradabad, android app development company in Moradabad, app development company in Moradabad, app development cost in Moradabad, best it company in Moradabad, billing software company in Moradabad, business software solutions in Moradabad, cloud software development in Moradabad, crm software development in Moradabad, custom app development company in Moradabad, custom software development in Moradabad, ecommerce app development in Moradabad, ecommerce website development in Moradabad, enterprise software development in Moradabad, erp software development in Moradabad, full stack development company in Moradabad, hire app developer in Moradabad, hire software developer in Moradabad, hire web developer in Moradabad, hospital management software in Moradabad, hr management software in Moradabad, inventory management software in Moradabad, ios app development company in Moradabad, it company in Moradabad, it services company in Moradabad, laravel development company in Moradabad, mobile app development company in Moradabad, mobile application development services in Moradabad, node js development company in Moradabad, php development company in Moradabad, pos software provider in Moradabad, professional web development company in Moradabad, python development company in Moradabad, react js development company in Moradabad, saas development company in Moradabad, school management software in Moradabad, software company in Moradabad, software development agency in Moradabad, software development company in Moradabad, software development cost in Moradabad, software development outsourcing in Moradabad, software development services in Moradabad, startup software development company in Moradabad, top software development company in Moradabad, web application development in Moradabad, web designing company in Moradabad, web development company in Moradabad, website development company in Moradabad" />
                <meta name="author" content="ByteNLearn" />
                <link rel="canonical" href="https://bytenlearn.in/moradabad" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://bytenlearn.in/moradabad" />
                <meta property="og:title" content="ByteNLearn | Best Software & App Development Company in Moradabad" />
                <meta property="og:description" content="Looking for an affordable software development company in Moradabad? ByteNLearn offers premium custom website, mobile app, ERP, CRM, and AI solutions. Hire expert developers in Moradabad today." />
                <meta property="og:image" content="https://bytenlearn.in/images/logo.png" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://bytenlearn.in/moradabad" />
                <meta property="twitter:title" content="ByteNLearn | Best Software & App Development Company in Moradabad" />
                <meta property="twitter:description" content="Looking for an affordable software development company in Moradabad? ByteNLearn offers premium custom website, mobile app, ERP, CRM, and AI solutions. Hire expert developers in Moradabad today." />
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
            "url": "https://bytenlearn.in",
            "telephone": "+91-9876543210",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Moradabad",
              "addressRegion": "Uttar Pradesh",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "28.8386",
              "longitude": "78.7733" 
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
            "description": "ByteNLearn is a premier software development company in Moradabad offering custom website, mobile app, ERP, CRM, and AI solutions."
          }
        `}
            </Script>

            <Hero city="Moradabad" />
            <About city="Moradabad" />
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
