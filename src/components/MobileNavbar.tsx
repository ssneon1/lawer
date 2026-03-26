import { Link, useLocation } from "react-router-dom";
import { Home, Briefcase, Users, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";

export const MobileNavbar = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/about", icon: Users, label: "About" },
    { href: "/practice-areas", icon: Briefcase, label: "Practice" },
    { href: "/contact", icon: Phone, label: "Contact" },
    { href: "/blog", icon: Mail, label: "Blog" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Spacer for fixed bottom nav */}
      <div className="h-20 md:hidden"></div>
      
      {/* Bottom Navigation - Mobile Only */}
      <nav
        className={`fixed bottom-0 left-0 right-0 bg-white border-t-2 border-legal-black z-40 md:hidden transition-all duration-300 ease-out ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex justify-around items-center h-20 max-w-full overflow-x-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`flex flex-col items-center justify-center w-16 sm:w-20 h-20 transition-all duration-300 relative group ${
                  active ? "text-legal-blue" : "text-legal-grey hover:text-legal-black"
                }`}
              >
                {/* Active indicator */}
                {active && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-legal-blue animate-pulse"></div>
                )}
                
                {/* Icon with scale animation */}
                <Icon
                  className={`w-6 h-6 transition-transform duration-300 ${
                    active ? "scale-110" : "scale-100 group-hover:scale-105"
                  }`}
                />
                
                {/* Label */}
                <span className="text-xs mt-1 font-medium text-center line-clamp-1">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};
