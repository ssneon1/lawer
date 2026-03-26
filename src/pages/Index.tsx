import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { SectionTransition, ElementTransition } from "@/components/PageTransition";
import { useState, MouseEvent } from "react";

export default function Index() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 15;
    const y = (clientY / innerHeight - 0.5) * 15;
    setMousePos({ x, y });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Banner Section */}
      <section
        onMouseMove={handleMouseMove}
        className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center overflow-hidden"
        style={{ backgroundImage: "url('/bg.jpeg')" }}
      >
        <div 
          className="absolute inset-0 bg-legal-black bg-opacity-60 transition-transform duration-300 pointer-events-none"
          style={{
            transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0) scale(1.05)`,
          }}
        ></div>
        <div className="relative z-10 flex items-center justify-center w-full px-4 py-12">
          <div className="text-center text-white">
            <SectionTransition delay={200}>
              <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-serif uppercase tracking-wider mb-4 sm:mb-6">
                LEO JURIS
              </h1>
            </SectionTransition>
            
            <SectionTransition delay={400}>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif mb-3 sm:mb-4">
                ADVOCATES AND SOLICITORS
              </h2>
            </SectionTransition>
            
            <SectionTransition delay={600}>
              <p className="text-base sm:text-lg md:text-xl opacity-90 font-serif mb-6 sm:mb-8">
                Expert Legal Solutions You Can Trust
              </p>
            </SectionTransition>
            
            <SectionTransition delay={800}>
              <Button 
                asChild
                className="bg-legal-blue text-legal-black hover:bg-legal-blue/90 border-2 border-legal-blue font-semibold px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base hover-lift"
              >
                <Link to="/contact" className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Consultation Today
                </Link>
              </Button>
            </SectionTransition>
          </div>
        </div>
      </section>

      {/* Professional Photo & Intro */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            <SectionTransition delay={0} direction="left">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-legal-blue/20 rounded-xl blur-2xl animate-pulse" />
                  <div
                    className="relative w-64 sm:w-80 h-96 bg-cover bg-center rounded-xl brutalist-border brutalist-shadow"
                    style={{ backgroundImage: "url('/avatar.jpeg')" }}
                  />
                </div>
              </div>
            </SectionTransition>

            <SectionTransition delay={200} direction="right">
              <div>
                <div className="inline-block bg-legal-blue/10 text-legal-blue px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-4">
                  MEET OUR ADVOCATE
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-legal-black mb-8 font-serif leading-tight">
                  Advocate Cheerag Goel
                </h2>
                <p className="text-lg text-legal-grey leading-relaxed mb-8">
                  I am a passionate litigation lawyer with deep expertise in <span className="text-legal-black font-bold">Civil, Criminal, Property, and Family Law</span>. My practice is built on the foundation of honest advice, strategic precision, and fearless advocacy for every client I represent.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-10">
                  <div className="p-4 border-l-4 border-legal-blue bg-legal-blue/5">
                    <div className="text-3xl font-bold font-serif text-legal-black">15+</div>
                    <div className="text-sm text-legal-grey uppercase tracking-wider font-bold">Years Experience</div>
                  </div>
                  <div className="p-4 border-l-4 border-legal-blue bg-legal-blue/5">
                    <div className="text-3xl font-bold font-serif text-legal-black">500+</div>
                    <div className="text-sm text-legal-grey uppercase tracking-wider font-bold">Cases Resolved</div>
                  </div>
                </div>
                <Button 
                  asChild
                  className="bg-legal-black text-white hover:bg-legal-grey border-2 border-legal-black font-bold px-8 py-6 hover-lift"
                >
                  <Link to="/about" className="flex items-center">
                    FULL PROFILE <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </SectionTransition>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <SectionTransition>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-legal-black mb-4">Practice Areas</h2>
              <div className="w-24 h-1 bg-legal-blue mx-auto mb-6"></div>
              <p className="text-lg text-legal-grey max-w-2xl mx-auto">Specialized legal solutions for complex legal challenges in New Delhi and NCR.</p>
            </div>
          </SectionTransition>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Divorce Law", icon: "⚖️", link: "/practice/divorce" },
              { title: "Criminal Defense", icon: "🛡️", link: "/practice/criminal" },
              { title: "Property Cases", icon: "🏠", link: "/practice/property" },
              { title: "Money Recovery", icon: "💰", link: "/practice/money-recovery" }
            ].map((service, idx) => (
              <ElementTransition key={idx} delay={idx * 100}>
                <Link to={service.link} className="group block bg-white border-2 border-legal-black p-8 brutalist-shadow hover-3d hover:bg-legal-blue/5 transition-all">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">{service.icon}</div>
                  <h3 className="text-xl font-bold text-legal-black mb-2">{service.title}</h3>
                  <div className="text-legal-blue font-bold text-sm flex items-center group-hover:gap-2 transition-all">
                    READ MORE <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              </ElementTransition>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-legal-black font-bold">
              <Link to="/practice-areas">VIEW ALL SERVICES</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section (Placeholder) */}
      <section className="py-20 px-4 bg-legal-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTransition>
            <div className="text-6xl text-legal-blue mb-8 font-serif opacity-30">"</div>
            <p className="text-2xl md:text-3xl font-serif italic mb-10 leading-relaxed">
              Advocate Cheerag Goel provided exceptional legal guidance during my property dispute. His strategic approach and honest advice were refreshing and effective. I highly recommend his services.
            </p>
            <div className="font-bold text-xl text-legal-blue mb-1">Rajesh S.</div>
            <div className="text-gray-500 text-sm uppercase tracking-widest">Client Testimonial</div>
          </SectionTransition>
        </div>
      </section>
    </div>
  );
}
