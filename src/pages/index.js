import Head from "next/head";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Skills from "@/components/home/Skills";
import Services from "@/components/home/Services";
import Internships from "@/components/home/Internships";
import InternTestimonials from "@/components/home/InternTestimonials";
import Projects from "@/components/home/Projects";
import HappyClients from "@/components/home/HappyClients";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Premium Corporate | Bytenlearn</title>
        <meta name="description" content="A high-contrast, premium corporate experience." />
      </Head>

      <Hero />
      <About />
      <Skills />
      <HappyClients />
      <Services />
      <InternTestimonials />
      <Internships />
      <Projects />
      <Contact />
    </>
  );
}
