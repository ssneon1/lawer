
import { ReactNode, useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingContact } from "./FloatingContact";
import { MobileNavbar } from "./MobileNavbar";
import { SplashScreen } from "./SplashScreen";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [showSplash, setShowSplash] = useState(true);
  const [pageTransition, setPageTransition] = useState(false);

  useEffect(() => {
    // Check if splash screen has been shown in this session
    const splashShown = sessionStorage.getItem("splashShown");
    if (splashShown) {
      setShowSplash(false);
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    sessionStorage.setItem("splashShown", "true");
    setPageTransition(true);
    setTimeout(() => setPageTransition(false), 500);
  };

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      
      <div
        className={`min-h-screen bg-legal-white pb-20 md:pb-0 transition-all duration-500 ${
          pageTransition ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navbar />
        <main className="animate-fadeIn">{children}</main>
        <Footer />
        <FloatingContact />
        <MobileNavbar />
      </div>
    </>
  );
};
