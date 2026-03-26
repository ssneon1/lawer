import { useEffect, useState } from "react";

export const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
    }, 2500);

    const exitTimer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-legal-black flex items-center justify-center transition-all duration-700 ${
        isExiting ? "opacity-0 pointer-events-none invisible scale-110" : "opacity-100"
      }`}
    >
      <div className="text-center">
        {/* Logo container with animation */}
        <div className="mb-8 inline-block">
          <div
            className="bg-legal-blue p-4 border-2 border-legal-blue rounded-lg animate-bounce"
            style={{
              animation: "bounce 1.5s ease-in-out infinite",
            }}
          >
            <span className="text-legal-black font-bold text-5xl block">LJ</span>
          </div>
        </div>

        {/* App title */}
        <h1 className="text-white text-3xl font-bold mb-2 font-serif animate-pulse">
          LEO JURIS
        </h1>
        <p className="text-legal-yellow text-sm font-serif mb-8">
          ADVOCATES AND SOLICITORS
        </p>

        {/* Loading dots animation */}
        <div className="flex justify-center items-center gap-2 mt-8">
          <div
            className="w-2 h-2 bg-legal-blue rounded-full animate-pulse"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="w-2 h-2 bg-legal-blue rounded-full animate-pulse"
            style={{ animationDelay: "0.3s" }}
          ></div>
          <div
            className="w-2 h-2 bg-legal-blue rounded-full animate-pulse"
            style={{ animationDelay: "0.6s" }}
          ></div>
        </div>

        {/* Subtext */}
        <p className="text-legal-grey text-xs mt-8 font-serif">
          Loading your legal solutions...
        </p>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
};
