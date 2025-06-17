export default function WhatsappFloat() {
  const openWhatsApp = () => {
    const message = "Olá! Gostaria de saber mais sobre os serviços do Spa Kenylson.";
    window.open(`https://wa.me/244949639932?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="whatsapp-float"
      aria-label="Contactar via WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </button>
  );
}
