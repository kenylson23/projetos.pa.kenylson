import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useParallax } from "@/hooks/use-parallax";

export default function HeroSection() {
  const { ref: heroRef, isInView } = useScrollAnimation();
  const parallaxOffset = useParallax(0.5);

  const scrollToServices = () => {
    const element = document.querySelector('#servicos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/244949639932', '_blank');
  };

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0 parallax-element"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <img
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1200"
          alt="Angola landscape with baobab trees at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-brown/70 via-terra-cotta/50 to-transparent"></div>
      </div>
      
      {/* Cultural pattern overlay */}
      <div className="absolute inset-0 angola-pattern opacity-30"></div>
      
      {/* Hero content */}
      <div ref={heroRef} className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 floating"
        >
          <span className="golden-amber">Spa</span> Kenylson
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8"
        >
          Bem-estar autêntico inspirado na essência de Angola
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl mb-12"
        >
          Descubra uma experiência única de relaxamento que combina tradições ancestrais com técnicas modernas
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="space-x-4"
        >
          <button
            onClick={scrollToServices}
            className="inline-block bg-golden-amber hover:bg-warm-clay text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Explorar Serviços
          </button>
          <button
            onClick={openWhatsApp}
            className="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-deep-brown text-white font-semibold py-4 px-8 rounded-full transition-all duration-300"
          >
            Reservar Agora
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer"
        onClick={scrollToServices}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
