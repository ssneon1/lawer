import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Gavel, Heart, Scale, Users, Award, CheckCircle, ChevronRight, Shield } from "lucide-react";
import { SectionTransition, ElementTransition } from "@/components/PageTransition";
import { useState, MouseEvent } from "react";

export default function About() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  return (
    <div className="overflow-x-hidden bg-white pb-20 md:pb-0">
      {/* Hero Header */}
      <section 
        onMouseMove={handleMouseMove}
        className="relative py-20 md:py-32 bg-legal-black text-white px-4 overflow-hidden"
      >
        <div 
          className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none"
          style={{
            transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
            transition: "transform 0.2s ease-out"
          }}
        >
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-legal-blue rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-legal-yellow rounded-full blur-3xl animate-pulse" />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <SectionTransition delay={100}>
            <div className="inline-block bg-legal-blue/20 text-legal-blue px-6 py-2 rounded-full text-sm font-bold tracking-widest mb-6">
              ESTABLISHED IN 2010
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif mb-8 leading-tight">
              Leading With <span className="text-legal-blue">Integrity,</span> <br />
              Driven by <span className="text-legal-yellow">Justice.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-serif italic mb-10">
              "We don't just represent clients; we champion causes and protect futures."
            </p>
          </SectionTransition>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionTransition direction="left">
              <div className="relative">
                <div className="absolute -inset-4 bg-gray-100 rounded-2xl transform rotate-3" />
                <div 
                  className="relative h-[500px] md:h-[600px] bg-cover bg-center rounded-2xl brutalist-border brutalist-shadow" 
                  style={{ backgroundImage: "url('/avatar.jpeg')" }}
                />
                <div className="absolute -bottom-10 -right-10 hidden md:block w-48 h-48 bg-legal-yellow rounded-2xl brutalist-border brutalist-shadow p-6">
                  <div className="text-4xl font-bold font-serif mb-1">15+</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-legal-black">Years of Court Experience</div>
                  <Award className="w-10 h-10 mt-4 text-legal-black/20" />
                </div>
              </div>
            </SectionTransition>

            <SectionTransition direction="right" delay={200}>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-legal-black mb-8 font-serif">
                  The Vision Behind <br /> Leo Juris
                </h2>
                <p className="text-xl text-legal-grey leading-relaxed mb-8">
                  I'm <span className="text-legal-black font-bold underline decoration-legal-blue decoration-4 underline-offset-4">Advocate Cheerag Goel</span>. Leo Juris was founded with a single mission: to provide high-quality legal representation that is both honest and fearless.
                </p>
                <p className="text-lg text-legal-grey leading-relaxed mb-10">
                  In a legal landscape where complexity often breeds confusion, we pride ourselves on delivering clarity. We combine deep academic knowledge with relentless courtroom advocacy to ensure our clients' voices are heard and their rights are protected.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Strategic Litigation Planning",
                    "Detailed Case Research & Analysis",
                    "Aggressive Courtroom Representation",
                    "Ethical & Honest Legal Advice"
                  ].map((point, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <CheckCircle className="w-6 h-6 text-legal-blue" />
                      <span className="font-bold text-legal-black uppercase tracking-wide">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SectionTransition>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTransition>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-legal-black mb-6">Our Core Values</h2>
              <p className="text-lg text-legal-grey max-w-2xl mx-auto">The principles that guide every decision we make and every case we take.</p>
            </div>
          </SectionTransition>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Trust", icon: Shield, desc: "Building unbreakable attorney-client relationships based on transparency." },
              { title: "Precision", icon: Gavel, desc: "Applying meticulous detail to every legal document and argument." },
              { title: "Empathy", icon: Heart, desc: "Understanding the human story behind every legal dispute." },
              { title: "Tenacity", icon: Scale, desc: "Relentless pursuit of justice through every available legal channel." }
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <ElementTransition key={idx} delay={idx * 150}>
                  <div className="bg-white p-8 border-2 border-legal-black hover-3d brutalist-shadow transition-all group">
                    <Icon className="w-12 h-12 text-legal-blue mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold text-legal-black mb-4">{value.title}</h3>
                    <p className="text-legal-grey leading-relaxed">{value.desc}</p>
                  </div>
                </ElementTransition>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <SectionTransition>
            <div className="text-6xl text-legal-blue mb-10 font-serif opacity-40">"</div>
            <h2 className="text-3xl md:text-4xl font-serif italic text-legal-black leading-snug mb-10">
              Legal battles are won in the courtroom, but the victory is seeded in the strategy meetings, the late-night research, and the absolute commitment to the client's cause.
            </h2>
            <div className="w-20 h-1 bg-legal-blue mx-auto mb-6"></div>
            <p className="font-bold text-xl uppercase tracking-widest text-legal-black">Our Legal Philosophy</p>
          </SectionTransition>
        </div>
      </section>

      {/* Experience Stats */}
      <section className="py-20 bg-legal-black text-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: "Years in Practice", value: "15+" },
              { label: "Cases Won", value: "450+" },
              { label: "Satisfied Clients", value: "1000+" },
              { label: "Practice Areas", value: "12+" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center group border-r border-gray-800 last:border-r-0">
                <div className="text-5xl md:text-6xl font-bold font-serif mb-2 text-legal-blue group-hover:scale-110 transition-transform inline-block">
                  {stat.value}
                </div>
                <div className="text-sm font-bold uppercase tracking-widest text-gray-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center border-4 border-legal-black p-12 brutalist-shadow-lg">
          <h2 className="text-4xl font-bold font-serif text-legal-black mb-6">Ready to Protect Your Rights?</h2>
          <p className="text-xl text-legal-grey mb-10">Schedule a consultation today and get the expert legal support you deserve.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-legal-black text-white hover:bg-legal-grey border-2 border-legal-black px-10 py-8 font-bold text-lg">
              <Link to="/contact">BOOK A CONSULTATION</Link>
            </Button>
            <Button asChild translate="no" size="lg" variant="outline" className="border-legal-black text-legal-black font-bold px-10 py-8 text-lg">
              <Link to="/practice-areas" className="flex items-center">
                VIEW SERVICES <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
