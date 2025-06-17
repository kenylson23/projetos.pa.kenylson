import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Leaf, Heart, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  const { ref: aboutRef, isInView } = useScrollAnimation();

  const culturalElements = [
    {
      icon: Leaf,
      title: "Ingredientes Naturais",
      description: "Essências e elementos da rica flora angolana"
    },
    {
      icon: Users,
      title: "Técnicas Tradicionais",
      description: "Sabedoria ancestral passada através de gerações"
    },
    {
      icon: Heart,
      title: "Cuidado Personalizado",
      description: "Atenção individual inspirada na hospitalidade angolana"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-warm-beige relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 angola-pattern opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={aboutRef}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold deep-brown mb-6">
              Nossa História
            </h2>
            <p className="text-lg deep-brown/80 mb-6">
              O Spa Kenylson nasceu do sonho de criar um espaço único em Angola, onde as tradições ancestrais de cura e bem-estar se encontram com as técnicas mais modernas de spa.
            </p>
            <p className="text-lg deep-brown/80 mb-6">
              Inspirados pela rica cultura angolana e pela sabedoria dos nossos antepassados, criamos tratamentos exclusivos que honram nossa herança enquanto oferecem o máximo em relaxamento e renovação.
            </p>
            <p className="text-lg deep-brown/80 mb-8">
              Cada detalhe do nosso spa foi pensado para transportá-lo numa jornada sensorial através da essência de Angola, desde os aromas naturais até os elementos decorativos que celebram nossa identidade cultural.
            </p>
            
            {/* Cultural elements */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {culturalElements.map((element, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-terra-cotta rounded-full flex items-center justify-center mx-auto mb-3">
                    <element.icon className="text-white" size={24} />
                  </div>
                  <p className="text-sm font-semibold deep-brown mb-2">{element.title}</p>
                  <p className="text-xs deep-brown/70">{element.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Spa interior featuring Angolan cultural artifacts and modern wellness amenities"
              className="rounded-2xl shadow-2xl w-full"
            />
            
            {/* Floating testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card className="bg-white rounded-2xl shadow-xl -mt-20 ml-8 relative z-10">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex golden-amber">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                  <p className="deep-brown/80 italic mb-4">
                    "Uma experiência transformadora que me conectou com minhas raízes e me trouxe uma paz interior que eu não sentia há anos."
                  </p>
                  <p className="deep-brown font-semibold">- Maria José, Cliente Frequente</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
