import { MessageCircle } from "lucide-react";

const WhatsAppBubble = () => {
  const phone = "237682529834";
  const message = encodeURIComponent("Bonjour AMTN SARL, j'aimerais en savoir plus sur vos services.");
  const url = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] text-primary-foreground flex items-center justify-center shadow-elevated hover:scale-110 transition-transform"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
};

export default WhatsAppBubble;
