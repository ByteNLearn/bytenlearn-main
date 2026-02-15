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
        <title>ByteNLearn | Best Software, Web & App Development Company</title>
        <meta name="description" content="Looking for an affordable software development company? ByteNLearn offers premium custom website, mobile app, ERP, CRM, and AI solutions. Hire expert developers today." />
        <meta name="keywords" content="accounting software company, affordable software development company, ai software development, android app development company, app development company, app development cost, best it company, billing software company, business software solutions, cloud software development, crm software development, custom app development company, custom software development, ecommerce app development, ecommerce website development, enterprise software development, erp software development, full stack development company, hire app developer, hire software developer, hire web developer, hospital management software, hr management software, inventory management software, ios app development company, it company, it services company, laravel development company, mobile app development company, mobile application development services, node js development company, php development company, pos software provider, professional web development company, python development company, react js development company, saas development company, school management software, software company, software development agency, software development company, software development cost, software development outsourcing, software development services, startup software development company, top software development company, web application development, web designing company, web development company, website development company" />
        <meta name="author" content="ByteNLearn" />
        <link rel="canonical" href="https://bytenlearn.in" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bytenlearn.in/" />
        <meta property="og:title" content="ByteNLearn | Best Software, Web & App Development Company" />
        <meta property="og:description" content="Looking for an affordable software development company? ByteNLearn offers premium custom website, mobile app, ERP, CRM, and AI solutions. Hire expert developers today." />
        <meta property="og:image" content="https://bytenlearn.in/images/logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://bytenlearn.in/" />
        <meta property="twitter:title" content="ByteNLearn | Best Software, Web & App Development Company" />
        <meta property="twitter:description" content="Looking for an affordable software development company? ByteNLearn offers premium custom website, mobile app, ERP, CRM, and AI solutions. Hire expert developers today." />
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
            "description": "ByteNLearn is a premier software development company offering custom website, mobile app, ERP, CRM, and AI solutions."
          }
        `}
      </Script>

      <Hero />
      <About />
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
  
