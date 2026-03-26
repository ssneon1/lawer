import React from 'react';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

const FloatingActions = () => {
  const actions = [
    { 
      icon: <Phone size={24} />, 
      color: "bg-blue-500", 
      hover: "hover:bg-blue-600",
      label: "Call Us",
      href: "tel:+910000000000" 
    },
    { 
      icon: <MessageCircle size={24} />, 
      color: "bg-green-500", 
      hover: "hover:bg-green-600",
      label: "WhatsApp",
      href: "https://wa.me/910000000000" 
    },
    { 
      icon: <Mail size={24} />, 
      color: "bg-slate-900", 
      hover: "hover:bg-slate-800",
      label: "Email",
      href: "mailto:contact@leojuris.com" 
    },
    { 
      icon: <MapPin size={24} />, 
      color: "bg-red-500", 
      hover: "hover:bg-red-600",
      label: "Location",
      href: "https://maps.google.com" 
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-50">
      {actions.map((action, index) => (
        <a
          key={index}
          href={action.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${action.color} ${action.hover} text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-rotate-12 group relative`}
          aria-label={action.label}
        >
          {action.icon}
          {/* Tooltip */}
          <span className="absolute right-full mr-4 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {action.label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default FloatingActions;
