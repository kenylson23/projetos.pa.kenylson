import { motion } from "framer-motion";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ContactSection() {
  const { ref: contactRef, isInView } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const services = [
    { value: "massagem-tradicional", label: "Massagem Tradicional" },
    { value: "ritual-purificacao", label: "Ritual de Purificação" },
    { value: "aromaterapia-baoba", label: "Aromaterapia Baobá" },
    { value: "banho-argila", label: "Banho de Argila Vermelha" },
    { value: "reflexologia", label: "Reflexologia Africana" },
    { value: "experiencia-completa", label: "Experiência Completa" }
  ];

  const timeSlots = [
    { value: "09:00", label: "09:00" },
    { value: "11:00", label: "11:00" },
    { value: "14:00", label: "14:00" },
    { value: "16:00", label: "16:00" },
    { value: "18:00", label: "18:00" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const selectedService = services.find(s => s.value === formData.service);
    const selectedTime = timeSlots.find(t => t.value === formData.time);
    
    let message = `Olá! Gostaria de fazer uma reserva no Spa Kenylson:\n\n`;
    message += `📋 *Dados da Reserva:*\n`;
    message += `👤 Nome: ${formData.name}\n`;
    message += `📞 Telefone: ${formData.phone}\n`;
    message += `💆‍♀️ Serviço: ${selectedService?.label || 'Não especificado'}\n`;
    message += `📅 Data: ${formData.date}\n`;
    message += `🕐 Horário: ${selectedTime?.label || 'Não especificado'}\n`;
    
    if (formData.message) {
      message += `💬 Observações: ${formData.message}\n`;
    }
    
    message += `\n🙏 Aguardo confirmação!`;
    
    const whatsappUrl = `https://wa.me/244949639932?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Localização",
      content: "Luanda, Angola"
    },
    {
      icon: () => (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/></svg>
      ),
      title: "WhatsApp",
      content: "+244 949 639 932"
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      content: "Segunda a Sábado: 8:00 - 20:00\nDomingo: 10:00 - 18:00"
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-deep-brown to-terra-cotta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={contactRef} className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
          >
            Contacte-nos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-cream/80 max-w-3xl mx-auto"
          >
            Reserve a sua experiência de bem-estar ou tire as suas dúvidas
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>Informações de Contacto</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="w-12 h-12 bg-golden-amber rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <info.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-cream font-semibold">{info.title}</p>
                    <p className="text-cream/80 whitespace-pre-line">{info.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12"
            >
              <h4 className="text-xl font-semibold text-cream mb-4">Siga-nos</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-golden-amber rounded-full flex items-center justify-center hover:bg-warm-clay transition-colors"
                >
                  <Facebook className="text-white" size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-golden-amber rounded-full flex items-center justify-center hover:bg-warm-clay transition-colors"
                >
                  <Instagram className="text-white" size={20} />
                </a>
                <a
                  href="https://wa.me/244949639932"
                  className="w-10 h-10 bg-golden-amber rounded-full flex items-center justify-center hover:bg-warm-clay transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/></svg>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card className="bg-black/60 backdrop-blur-md border-white/30 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>Faça a Sua Reserva</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6 contact-form">
                  <div>
                    <label className="block text-cream font-semibold mb-2">Nome Completo</label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Seu nome completo"
                      className="bg-white/40 border-white/60 text-white placeholder:text-white/70 focus:border-golden-amber focus:bg-white/50 focus:ring-2 focus:ring-golden-amber/50 h-12"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-cream font-semibold mb-2">Telefone</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+244 9XX XXX XXX"
                      className="bg-white/40 border-white/60 text-white placeholder:text-white/70 focus:border-golden-amber focus:bg-white/50 focus:ring-2 focus:ring-golden-amber/50 h-12"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-cream font-semibold mb-2">Serviço Desejado</label>
                    <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                      <SelectTrigger className="bg-white/40 border-white/60 text-white focus:border-golden-amber focus:bg-white/50 focus:ring-2 focus:ring-golden-amber/50 h-12">
                        <SelectValue placeholder="Selecione um serviço" className="text-white placeholder:text-white/70" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-gray-200 shadow-lg">
                        {services.map((service) => (
                          <SelectItem key={service.value} value={service.value} className="text-gray-900 hover:bg-golden-amber/20 focus:bg-golden-amber/20 py-3">
                            {service.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-cream font-semibold mb-2">Data</label>
                      <Input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="bg-white/40 border-white/60 text-white focus:border-golden-amber focus:bg-white/50 focus:ring-2 focus:ring-golden-amber/50 h-12 [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:brightness-0 [&::-webkit-calendar-picker-indicator]:invert"
                        required
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div>
                      <label className="block text-cream font-semibold mb-2">Horário</label>
                      <Select value={formData.time} onValueChange={(value) => setFormData({ ...formData, time: value })}>
                        <SelectTrigger className="bg-white/40 border-white/60 text-white focus:border-golden-amber focus:bg-white/50 focus:ring-2 focus:ring-golden-amber/50 h-12">
                          <SelectValue placeholder="Selecione" className="text-white placeholder:text-white/70" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border-gray-200 shadow-lg">
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot.value} value={slot.value} className="text-gray-900 hover:bg-golden-amber/20 focus:bg-golden-amber/20 py-3">
                              {slot.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-cream font-semibold mb-2">Mensagem (Opcional)</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Alguma observação especial..."
                      className="bg-white/40 border-white/60 text-white placeholder:text-white/70 focus:border-golden-amber focus:bg-white/50 focus:ring-2 focus:ring-golden-amber/50 min-h-[100px]"
                      rows={4}
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-golden-amber hover:bg-warm-clay text-white font-semibold py-4 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Confirmar Reserva
                  </Button>
                  
                  <p className="text-cream/60 text-sm text-center">
                    Ou contacte-nos diretamente via WhatsApp:{" "}
                    <a
                      href="https://wa.me/244949639932"
                      className="text-golden-amber hover:underline"
                    >
                      +244 949 639 932
                    </a>
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-20 pt-12 border-t border-white/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-golden-amber mb-4">Spa Kenylson</h3>
            <p className="text-cream/80 mb-6">Bem-estar autêntico inspirado na essência de Angola</p>
            <p className="text-cream/60 text-sm">
              © 2024 Spa Kenylson. Todos os direitos reservados. | Luanda, Angola
            </p>
          </div>
        </div>
      </motion.footer>
    </section>
  );
}
