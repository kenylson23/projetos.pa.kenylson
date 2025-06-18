import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const services = [
  {
    id: 1,
    name: "Massagem Tradicional",
    description: "Técnicas ancestrais angolanas com óleos essenciais naturais da nossa terra",
    price: "45.000 Kz",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Spa massage room with traditional African decor and warm lighting"
  },
  {
    id: 2,
    name: "Ritual de Purificação",
    description: "Cerimônia holística inspirada nos rituais de limpeza espiritual angolanos",
    price: "65.000 Kz",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Spa treatment room with natural stone elements and tropical plants"
  },
  {
    id: 3,
    name: "Aromaterapia Baobá",
    description: "Essências extraídas do fruto do baobá para renovação completa",
    price: "35.000 Kz",
    image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Spa aromatherapy setup with essential oils bottles and candles in warm lighting"
  },
  {
    id: 4,
    name: "Banho de Argila Vermelha",
    description: "Argila rica em minerais das terras angolanas para detox profundo",
    price: "55.000 Kz",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Spa mud treatment room with natural clay and earth-toned decor"
  },
  {
    id: 5,
    name: "Reflexologia Africana",
    description: "Técnicas de pressão nos pés baseadas na medicina tradicional",
    price: "40.000 Kz",
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Spa foot massage treatment with reflexology points and relaxing ambiance"
  },
  {
    id: 6,
    name: "Experiência Completa",
    description: "Dia completo de bem-estar com todos os tratamentos incluídos",
    price: "180.000 Kz",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Luxury spa suite with multiple treatment areas and premium amenities",
    isSpecial: true
  }
];

export default function ServicesSection() {
  const { ref: servicesRef, isInView } = useScrollAnimation();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const openWhatsAppBooking = (serviceName: string) => {
    const message = `Olá! Gostaria de reservar o serviço: ${serviceName} no Spa Kenylson.`;
    window.open(`https://wa.me/244949639932?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="servicos" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={servicesRef} className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold deep-brown mb-6"
          >
            Nossos Serviços
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl deep-brown/80 max-w-3xl mx-auto"
          >
            Uma fusão harmoniosa entre tradições angolanas e técnicas contemporâneas de bem-estar
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onHoverStart={() => setHoveredCard(service.id)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 50,
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className={`overflow-hidden shadow-xl transition-all duration-500 relative group ${
                service.isSpecial ? 'bg-gradient-to-br from-terra-cotta to-golden-amber text-white' : 'bg-white'
              }`}
              style={{
                transformStyle: 'preserve-3d',
                boxShadow: hoveredCard === service.id 
                  ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' 
                  : '0 10px 25px -3px rgba(0, 0, 0, 0.1)'
              }}>
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-8">
                  <h3 className={`text-2xl font-bold mb-4 ${
                    service.isSpecial ? 'text-white' : 'deep-brown'
                  }`}>
                    {service.name}
                  </h3>
                  <p className={`mb-6 ${
                    service.isSpecial ? 'text-white/90' : 'deep-brown/70'
                  }`}>
                    {service.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className={`text-2xl font-bold ${
                      service.isSpecial ? 'text-white' : 'terra-cotta'
                    }`}>
                      {service.price}
                    </span>
                    <button
                      onClick={() => openWhatsAppBooking(service.name)}
                      className={`px-6 py-2 rounded-full transition-colors font-semibold ${
                        service.isSpecial
                          ? 'bg-white text-terra-cotta hover:bg-cream'
                          : 'bg-golden-amber hover:bg-warm-clay text-white'
                      }`}
                    >
                      Reservar
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
