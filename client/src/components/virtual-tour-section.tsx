import { motion } from "framer-motion";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Play, Maximize } from "lucide-react";

const virtualSpaces = [
  {
    id: 1,
    name: "Recepção Principal",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "360 degree view of spa reception area with modern African-inspired decor and warm lighting",
    hotspots: [
      { x: 20, y: 30, info: "Recepção - Área de boas-vindas com chá tradicional" },
      { x: 70, y: 50, info: "Sala de Relaxamento - Poltronas confortáveis para descanso" },
      { x: 40, y: 70, info: "Jardim Interno - Plantas nativas de Angola" }
    ]
  },
  {
    id: 2,
    name: "Salas de Tratamento",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "360 degree view of spa treatment room with natural stone elements and warm African textiles",
    hotspots: [
      { x: 30, y: 40, info: "Mesa de Massagem - Equipamento premium para tratamentos" },
      { x: 80, y: 60, info: "Área de Óleos - Essências naturais angolanas" },
      { x: 60, y: 25, info: "Sistema de Som - Música ambiente relaxante" }
    ]
  }
];

export default function VirtualTourSection() {
  const { ref: tourRef, isInView } = useScrollAnimation();
  const [selectedHotspot, setSelectedHotspot] = useState<string | null>(null);

  const handleHotspotClick = (info: string) => {
    setSelectedHotspot(info);
    setTimeout(() => setSelectedHotspot(null), 3000);
  };

  const startFullTour = () => {
    // In a real implementation, this would open a full 360° tour
    alert("Tour completo será implementado com tecnologia 360° avançada!");
  };

  const openFullscreen = () => {
    // In a real implementation, this would open the tour in fullscreen
    alert("Modo tela cheia será implementado!");
  };

  return (
    <section id="tour-virtual" className="py-20 bg-deep-brown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={tourRef} className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold cream mb-6"
          >
            Tour Virtual 360°
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl cream/80 max-w-3xl mx-auto"
          >
            Explore nosso spa antes da sua visita através de nossa experiência virtual imersiva
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {virtualSpaces.map((space, index) => (
            <motion.div
              key={space.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="virtual-tour-container relative"
            >
              <img
                src={space.image}
                alt={space.alt}
                className="w-full h-96 object-cover"
              />
              
              {/* Interactive Hotspots */}
              {space.hotspots.map((hotspot, hotspotIndex) => (
                <div
                  key={hotspotIndex}
                  className="tour-hotspot cursor-pointer"
                  style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                  onClick={() => handleHotspotClick(hotspot.info)}
                />
              ))}
              
              <div className="absolute bottom-4 left-4 bg-black/50 text-white px-4 py-2 rounded-lg">
                <p className="text-sm">{space.name}</p>
              </div>
              
              {selectedHotspot && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute top-4 left-4 right-4 bg-golden-amber text-white p-4 rounded-lg shadow-lg"
                >
                  <p className="text-sm font-medium">{selectedHotspot}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Virtual Tour Controls */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex justify-center space-x-4"
        >
          <button
            onClick={startFullTour}
            className="bg-golden-amber hover:bg-warm-clay text-white px-6 py-3 rounded-full transition-colors flex items-center space-x-2"
          >
            <Play size={20} />
            <span>Iniciar Tour Completo</span>
          </button>
          <button
            onClick={openFullscreen}
            className="bg-transparent border-2 border-golden-amber text-golden-amber hover:bg-golden-amber hover:text-white px-6 py-3 rounded-full transition-all flex items-center space-x-2"
          >
            <Maximize size={20} />
            <span>Tela Cheia</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
