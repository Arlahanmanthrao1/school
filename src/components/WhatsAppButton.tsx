const WHATSAPP_NUMBER = "1234567890"; // Replace with your WhatsApp number

const WhatsAppButton = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform overflow-hidden"
    >
      <img
        src="https://res.cloudinary.com/dl8hswxt2/image/upload/whatsapplogo_j452aq.png" // Path to your WhatsApp logo in public folder
        alt="WhatsApp"
        className="w-full h-full object-contain" // ✅ Fit image properly
      />
    </a>
  );
};

export default WhatsAppButton;
