import Head from "next/head";
import Script from "next/script";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Skills from "@/components/home/Skills";
import Services from "@/components/home/Services";
import Internships from "@/components/home/Internships";
import InternTestimonials from "@/components/home/InternTestimonials";
import Projects from "@/components/home/Projects";
import HappyClients from "@/components/home/HappyClients";
import Blog from "@/components/home/Blog";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>ByteNLearn | Premium Corporate Training & Web Development</title>
        <meta name="description" content="ByteNLearn offers premium corporate training, internships in MERN Stack, Django, Data Science, and custom web development services. Join the revolution in tech education." />
        <meta name="keywords" content="ByteNLearn, ByteN Learn, Corporate Training, Web Development, Internships, MERN Stack, Python Django, Data Science, Cyber Security" />
        <meta name="author" content="ByteNLearn" />
        <link rel="canonical" href="https://bytenlearn.in" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bytenlearn.in/" />
        <meta property="og:title" content="ByteNLearn | Premium Corporate Training & Web Development" />
        <meta property="og:description" content="ByteNLearn offers premium corporate training, internships, and web development services. Join the revolution in tech education." />
        <meta property="og:image" content="https://bytenlearn.in/images/logo.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://bytenlearn.in/" />
        <meta property="twitter:title" content="ByteNLearn | Premium Corporate Training & Web Development" />
        <meta property="twitter:description" content="ByteNLearn offers premium corporate training, internships, and web development services. Join the revolution in tech education." />
        <meta property="twitter:image" content="https://bytenlearn.in/images/logo.png" />
      </Head>

      {/* Structured Data for SEO */}
      <Script id="structured-data" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ByteNLearn",
            "url": "https://bytenlearn.in",
            "logo": "https://bytenlearn.in/images/logo.png",
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
              "availableLanguage": ["en", "hi"]
            },
            "description": "ByteNLearn provides top-tier corporate training, internships, and web development services."
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
      <Projects />
      <Contact />
    </>
  );
}
