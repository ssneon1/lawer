
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-legal-black text-white py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-12 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-legal-blue p-2 border-2 border-legal-blue">
                <span className="text-legal-black font-bold text-lg">LJ</span>
              </div>
              <div>
                <div className="font-bold text-base sm:text-lg leading-tight">LEO JURIS</div>
                <div className="text-gray-400 text-xs leading-tight">ADVOCATES</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              A dedicated legal professional committed to guiding you through complex legal issues with honest advice, strong representation, and practical solutions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-4">Quick Links</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <Link to="/" className="hover:text-legal-blue transition-colors block py-1">Home</Link>
              <Link to="/about" className="hover:text-legal-blue transition-colors block py-1">About</Link>
              <Link to="/practice-areas" className="hover:text-legal-blue transition-colors block py-1">Practice Areas</Link>
              <Link to="/contact" className="hover:text-legal-blue transition-colors block py-1">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <a href="tel:+919999627930" className="flex items-center space-x-2 hover:text-legal-blue transition-colors py-1">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>9999627930</span>
              </a>
              <a href="mailto:advocatecheerag@gmail.com" className="flex items-center space-x-2 hover:text-legal-blue transition-colors py-1 break-all">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>advocatecheerag@gmail.com</span>
              </a>
              <div className="flex items-center space-x-2 py-1">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>New Delhi, India</span>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-legal-blue transition-colors p-2 hover:bg-legal-blue/10 rounded-lg" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-legal-blue transition-colors p-2 hover:bg-legal-blue/10 rounded-lg" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-legal-blue transition-colors p-2 hover:bg-legal-blue/10 rounded-lg" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-legal-blue transition-colors p-2 hover:bg-legal-blue/10 rounded-lg" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="text-gray-400 text-xs sm:text-sm">
            <p className="mb-2">
              © 2025 LEO JURIS, ADVOCATES AND SOLICITORS. All rights reserved.
            </p>
            <p className="leading-relaxed">
              <strong>Legal Disclaimer:</strong> The information provided on this website is for general informational purposes only and does not constitute legal advice. 
              Consult with a qualified attorney for advice regarding your specific legal matters.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};