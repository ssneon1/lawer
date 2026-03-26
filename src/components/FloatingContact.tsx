
import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";

export const FloatingContact = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/919999627930", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+919999627930";
  };

  const handleEmail = () => {
    window.location.href = "mailto:advocatecheerag@gmail.com";
  };

  const buttons = [
    { onClick: handleCall, color: "bg-legal-blue", icon: Phone, title: "Call Now", label: "Call" },
    { onClick: handleWhatsApp, color: "bg-green-500", icon: MessageCircle, title: "WhatsApp", label: "WhatsApp" },
    { onClick: handleEmail, color: "bg-legal-black", icon: Mail, title: "Email", label: "Email" },
    { onClick: () => window.open("https://maps.app.goo.gl/qNaXWP757r7qCrqb7", "_blank"), color: "bg-red-500", icon: MapPin, title: "Location", label: "Location" },
  ];

  return (
    <div className="fixed right-3 sm:right-4 bottom-20 sm:bottom-4 z-40 flex flex-col gap-2 sm:gap-3">
      {buttons.map((btn, idx) => {
        const Icon = btn.icon;
        return (
          <button
            key={idx}
            onClick={btn.onClick}
            className={`${btn.color} text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 active:translate-y-0 touch-target`}
            title={btn.title}
            aria-label={btn.label}
          >
            <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        );
      })}
    </div>
  );
};
