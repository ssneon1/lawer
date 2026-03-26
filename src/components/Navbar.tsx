
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/team", label: "Our Team" },
    { href: "/faq", label: "FAQ" },
    { href: "/practice-areas", label: "Practice Areas" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="bg-white border-b-2 border-legal-black sticky top-0 z-40 hidden md:block">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 gap-2">
          <Link to="/" className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
            <div className="bg-legal-blue p-1.5 sm:p-2 border-2 border-legal-black">
              <span className="text-legal-black font-bold text-base sm:text-xl">LJ</span>
            </div>
            <div className="hidden xs:block">
              <div className="font-bold text-legal-black text-sm sm:text-lg leading-tight">LEO JURIS</div>
              <div className="text-legal-grey text-xs leading-tight">ADVOCATES</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-medium text-sm transition-colors ${
                  isActive(link.href)
                    ? "text-legal-blue border-b-2 border-legal-blue"
                    : "text-legal-black hover:text-legal-blue"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button 
              asChild
              className="bg-legal-blue text-legal-black hover:bg-legal-blue/90 border-2 border-legal-black font-semibold"
            >
              <Link to="/contact">
                <Phone className="w-4 h-4 mr-2" />
                Book Consultation
              </Link>
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-legal-black hover:text-legal-blue p-2 -mr-2 touch-target"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t-2 border-legal-black bg-white">
            <div className="flex flex-col space-y-3 px-0">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-medium text-sm transition-colors px-3 py-2 rounded ${
                    isActive(link.href)
                      ? "text-legal-blue bg-legal-blue/5"
                      : "text-legal-black hover:text-legal-blue hover:bg-gray-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-gray-200">
                <Button 
                  asChild
                  className="bg-legal-blue text-legal-black hover:bg-legal-blue/90 border-2 border-legal-black font-semibold w-full justify-center"
                >
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    <Phone className="w-4 h-4 mr-2" />
                    Book Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
