import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import VirtualTourSection from "@/components/virtual-tour-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import WhatsappFloat from "@/components/whatsapp-float";

export default function Home() {
  useEffect(() => {
    // Set document title and meta description
    document.title = "Spa Kenylson - Bem-estar e Relaxamento em Angola";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Spa Kenylson oferece tratamentos únicos inspirados na cultura angolana. Massagens tradicionais, aromaterapia com baobá e rituais de purificação em Luanda, Angola.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <VirtualTourSection />
      <AboutSection />
      <ContactSection />
      <WhatsappFloat />
    </div>
  );
}
