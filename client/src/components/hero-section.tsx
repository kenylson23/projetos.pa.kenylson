import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useParallax } from "@/hooks/use-parallax";
import FloatingParticles from "./floating-particles";

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
      {/* Floating particles */}
      <FloatingParticles />
      
      {/* Parallax background */}
      <div
        className="absolute inset-0 parallax-element"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1200"
          alt="Serene spa treatment room with candles, warm lighting and natural stone elements"
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
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={scrollToServices}
            className="relative inline-block bg-golden-amber text-white font-semibold py-4 px-8 rounded-full overflow-hidden group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(218, 165, 32, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-warm-clay"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles size={18} />
              Explorar Serviços
            </span>
          </motion.button>
          
          <motion.button
            onClick={openWhatsApp}
            className="relative inline-block bg-transparent border-2 border-white text-white font-semibold py-4 px-8 rounded-full overflow-hidden group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span 
              className="relative z-10"
              whileHover={{ color: "#4a3b32" }}
              transition={{ duration: 0.3 }}
            >
              Reservar Agora
            </motion.span>
          </motion.button>
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
