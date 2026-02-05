import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import AboutSection from "@/components/home/AboutSection";
import InternshipSection from "@/components/home/InternshipSection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <Services />
      <InternshipSection />
      
      <ContactSection />
    </Layout>
  );
}
