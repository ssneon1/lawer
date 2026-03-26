import React from 'react';
import { Scale } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white py-16 lg:py-24">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-50/50 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 text-center">
        {/* Scaled Justice Icon with Animated Glow */}
        <div className="relative inline-block mb-12">
          <div className="absolute inset-0 bg-amber-400/20 blur-2xl rounded-full scale-150 animate-pulse"></div>
          <div className="relative bg-white p-8 rounded-full shadow-2xl shadow-amber-100 border border-amber-50">
            <Scale size={64} className="text-amber-500" strokeWidth={1.5} />
          </div>
        </div>

        {/* Headlines - serif as seen in screenshot */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-serif font-extrabold text-slate-900 mb-6 drop-shadow-sm">
            Justice for All
          </h2>
          <p className="text-lg md:text-xl font-medium text-slate-500 uppercase tracking-widest mb-4">
            Our unwavering commitment
          </p>
          <div className="w-24 h-1 bg-sky-500 mx-auto rounded-full mb-10"></div>
          
          <p className="text-xl md:text-2xl text-slate-600 font-light max-w-2xl mx-auto leading-relaxed italic">
            "Defending your rights with integrity and expertise. We believe everyone deserves a fair chance in the court of law."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
