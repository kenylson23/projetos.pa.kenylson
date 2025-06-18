import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Play, X, Eye } from "lucide-react";

const virtualSpaces = [
  {
    id: 1,
    name: "Recepção Principal",
    panorama: "/images/360-tour/recepcao-360.jpg", // Substitua pela sua imagem 360° da recepção
    preview: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "360 degree view of spa reception area with modern African-inspired decor and warm lighting",
    hotspots: [
      { 
        pitch: -2, 
        yaw: 15, 
        type: "info", 
        text: "Recepção", 
        info: "Área de boas-vindas com chá tradicional angolano" 
      },
      { 
        pitch: 5, 
        yaw: 90, 
        type: "info", 
        text: "Relaxamento", 
        info: "Poltronas confortáveis para descanso" 
      },
      { 
        pitch: -10, 
        yaw: 180, 
        type: "info", 
        text: "Jardim", 
        info: "Plantas nativas de Angola" 
      }
    ]
  },
  {
    id: 2,
    name: "Salas de Tratamento",
    panorama: "/images/360-tour/sala-tratamento-360.jpg", // Substitua pela sua imagem 360° da sala de tratamento
    preview: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "360 degree view of spa treatment room with natural stone elements and warm African textiles",
    hotspots: [
      { 
        pitch: 0, 
        yaw: 30, 
        type: "info", 
        text: "Mesa de Massagem", 
        info: "Equipamento premium para tratamentos de spa" 
      },
      { 
        pitch: 10, 
        yaw: 120, 
        type: "info", 
        text: "Óleos Essenciais", 
        info: "Essências naturais extraídas da flora angolana" 
      },
      { 
        pitch: -5, 
        yaw: 270, 
        type: "info", 
        text: "Sistema de Som", 
        info: "Música ambiente para relaxamento profundo" 
      }
    ]
  },
  {
    id: 3,
    name: "Área de Relaxamento",
    panorama: "/images/360-tour/area-relaxamento-360.jpg", // Substitua pela sua imagem 360° da área de relaxamento
    preview: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Vista 360° da área de relaxamento com assentos confortáveis e iluminação ambiente",
    hotspots: [
      { 
        pitch: 0, 
        yaw: 0, 
        type: "info", 
        text: "Área de Descanso", 
        info: "Sofás confortáveis para relaxamento pós-tratamento" 
      },
      { 
        pitch: 15, 
        yaw: 90, 
        type: "info", 
        text: "Fonte de Água", 
        info: "Som relaxante da água corrente" 
      },
      { 
        pitch: -10, 
        yaw: 180, 
        type: "info", 
        text: "Vista Externa", 
        info: "Conexão com a natureza angolana" 
      }
    ]
  },
  {
    id: 4,
    name: "Sala de Meditação",
    panorama: "/images/360-tour/sala-meditacao-360.jpg", // Substitua pela sua imagem 360° da sala de meditação
    preview: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Vista 360° da sala de meditação com almofadas tradicionais e ambiente sereno",
    hotspots: [
      { 
        pitch: 0, 
        yaw: 45, 
        type: "info", 
        text: "Altar de Meditação", 
        info: "Espaço sagrado para práticas espirituais" 
      },
      { 
        pitch: -5, 
        yaw: 135, 
        type: "info", 
        text: "Almofadas", 
        info: "Almofadas artesanais angolanas" 
      },
      { 
        pitch: 10, 
        yaw: 270, 
        type: "info", 
        text: "Incenso Natural", 
        info: "Fragrâncias de plantas medicinais locais" 
      }
    ]
  }
];

declare global {
  interface Window {
    pannellum: any;
  }
}

export default function VirtualTourSection() {
  const { ref: tourRef, isInView } = useScrollAnimation();
  const [selectedSpace, setSelectedSpace] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [pannellumViewer, setPannellumViewer] = useState<any>(null);
  const panoramaRef = useRef<HTMLDivElement>(null);

  const openVirtualTour = (spaceId: number) => {
    const space = virtualSpaces.find(s => s.id === spaceId);
    if (!space) return;

    setSelectedSpace(spaceId);
    setIsFullscreen(true);

    // Initialize Pannellum viewer after the modal opens
    setTimeout(() => {
      if (panoramaRef.current && window.pannellum) {
        const viewer = window.pannellum.viewer(panoramaRef.current, {
          type: "equirectangular",
          panorama: space.panorama,
          autoLoad: true,
          autoRotate: -2,
          compass: true,
          showZoomCtrl: true,
          showFullscreenCtrl: false,
          showControls: true,
          hotSpots: space.hotspots.map((hotspot, index) => ({
            ...hotspot,
            id: `hotspot-${index}`,
            createTooltipFunc: (hotSpotDiv: HTMLElement) => {
              const tooltip = document.createElement('div');
              tooltip.className = 'tour-tooltip bg-golden-amber text-white px-3 py-2 rounded-lg shadow-lg text-sm font-medium';
              tooltip.textContent = hotspot.info;
              hotSpotDiv.appendChild(tooltip);
            },
            createTooltipArgs: hotspot.text
          }))
        });
        setPannellumViewer(viewer);
      }
    }, 100);
  };

  const closeTour = () => {
    setIsFullscreen(false);
    setSelectedSpace(null);
    if (pannellumViewer) {
      pannellumViewer.destroy();
      setPannellumViewer(null);
    }
  };

  const startFullTour = () => {
    openVirtualTour(1); // Start with first space
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        closeTour();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isFullscreen]);

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

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {virtualSpaces.map((space, index) => (
            <motion.div
              key={space.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="virtual-tour-container relative group cursor-pointer"
              onClick={() => openVirtualTour(space.id)}
            >
              <img
                src={space.preview}
                alt={space.alt}
                className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Play button overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-golden-amber rounded-full p-6 transform transition-transform duration-300 group-hover:scale-110">
                  <Eye size={32} className="text-white" />
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg">
                <p className="text-sm font-medium">{space.name}</p>
                <p className="text-xs text-white/80">Clique para explorar em 360°</p>
              </div>
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
        </motion.div>
      </div>

      {/* 360° Virtual Tour Modal */}
      {isFullscreen && selectedSpace && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          {/* Close button - top right */}
          <button
            onClick={closeTour}
            className="absolute top-4 right-4 z-60 bg-golden-amber hover:bg-warm-clay text-white p-3 rounded-full transition-colors shadow-lg"
          >
            <X size={24} />
          </button>
          
          {/* Exit button - top center */}
          <button
            onClick={closeTour}
            className="absolute top-4 left-1/2 transform -translate-x-1/2 z-60 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full transition-colors shadow-lg flex items-center space-x-2"
          >
            <X size={20} />
            <span className="font-medium">Sair do Tour</span>
          </button>
          
          <div className="w-full h-full relative">
            <div 
              ref={panoramaRef} 
              className="w-full h-full pannellum-container"
              style={{ borderRadius: 0 }}
            />
            
            {/* Navigation between spaces */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {virtualSpaces.map((space) => (
                <button
                  key={space.id}
                  onClick={() => openVirtualTour(space.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedSpace === space.id
                      ? 'bg-golden-amber text-white'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  {space.name}
                </button>
              ))}
            </div>
            
            {/* Instructions */}
            <div className="absolute top-4 left-4 bg-black/70 text-white p-4 rounded-lg max-w-sm">
              <p className="text-sm font-medium mb-2">Como navegar:</p>
              <ul className="text-xs space-y-1">
                <li>• Arraste para olhar ao redor</li>
                <li>• Use a roda do mouse para zoom</li>
                <li>• Clique nos pontos dourados para informações</li>
                <li>• Pressione ESC para sair</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}