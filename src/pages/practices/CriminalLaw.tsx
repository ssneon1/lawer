import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Gavel, Shield, Users, FileText, Clock, CheckCircle } from "lucide-react";
import { SectionTransition, ElementTransition } from "@/components/PageTransition";

export default function CriminalLaw() {
  return (
    <div className="min-h-screen bg-legal-white pb-20 md:pb-0">
      <section className="py-12 md:py-20 px-4 md:px-8 bg-gradient-to-br from-purple-50 to-indigo-50">
        <SectionTransition delay={100}>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="flex-1">
                <div className="inline-block mb-4">
                  <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center">
                    <Gavel className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h1 className="text-4xl xs:text-5xl sm:text-6xl font-bold font-serif text-legal-black mb-6">
                  Criminal Defense
                </h1>
                <p className="text-lg text-legal-grey mb-6 leading-relaxed">
                  Facing criminal charges? We defend your rights at every stage with sharp strategy, fearless representation, and honest advice. Your freedom and reputation matter.
                </p>
                <Button asChild size="lg" className="bg-legal-black text-white hover:bg-purple-600 brutalist-border brutalist-shadow font-semibold hover-lift">
                  <Link to="/contact">Get Defense Now</Link>
                </Button>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-purple-400 to-indigo-400 h-64 md:h-80 rounded-lg brutalist-shadow flex items-center justify-center">
                  <Gavel className="w-32 h-32 text-white opacity-30" />
                </div>
              </div>
            </div>
          </div>
        </SectionTransition>
      </section>

      <section className="py-12 md:py-20 px-4 md:px-8">
        <SectionTransition delay={200}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-legal-black text-center mb-12">
              Criminal Defense Services
            </h2>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                { icon: Shield, title: "Bail Assistance", description: "Expert representation to secure bail and reduce bail conditions." },
                { icon: FileText, title: "FIR Defense", description: "Quick response to false/unjustified FIRs with protective measures." },
                { icon: Gavel, title: "Trial Representation", description: "Strong court advocacy with evidence rebuttal and witness management." },
                { icon: Users, title: "Investigation Support", description: "Guiding you through police investigation with your rights protected." },
                { icon: Clock, title: "Speedy Justice", description: "Efforts to expedite proceedings and ensure swift resolution." },
                { icon: CheckCircle, title: "Appeal & Review", description: "Post-conviction appeals and review of unfair judgments." }
              ].map((service, idx) => {
                const IconComponent = service.icon;
                return (
                  <ElementTransition key={idx} delay={200 + idx * 100}>
                    <div className="p-6 md:p-8 brutalist-border bg-legal-white hover:shadow-lg transition-shadow">
                      <IconComponent className="w-8 h-8 text-purple-600 mb-4" />
                      <h3 className="text-xl font-bold text-legal-black mb-3">{service.title}</h3>
                      <p className="text-legal-grey">{service.description}</p>
                    </div>
                  </ElementTransition>
                );
              })}
            </div>
          </div>
        </SectionTransition>
      </section>

      <section className="py-12 md:py-20 px-4 md:px-8 bg-gray-50">
        <SectionTransition delay={300}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-legal-black text-center mb-12">
              Criminal Cases We Handle
            </h2>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {[
                "Theft & Robbery Cases",
                "Assault & Violence Charges",
                "Cybercrime & Online Fraud",
                "Defamation & Slander",
                "Dowry Cases & 498A Defense",
                "Traffic Violations & Road Cases",
                "Drug-Related Offenses",
                "White Collar Crimes",
                "Falsely Accused Cases",
                "Property Dispute Crimes",
                "Sexual Offense Defense",
                "Criminal Conspiracy Cases"
              ].map((crime, idx) => (
                <ElementTransition key={idx} delay={300 + idx * 60}>
                  <div className="p-4 md:p-6 brutalist-border bg-legal-white hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                      <span className="font-semibold text-legal-black">{crime}</span>
                    </div>
                  </div>
                </ElementTransition>
              ))}
            </div>
          </div>
        </SectionTransition>
      </section>

      <section className="py-12 md:py-20 px-4 md:px-8">
        <SectionTransition delay={400}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-legal-black text-center mb-12">
              Our Defense Strategy
            </h2>

            <div className="space-y-6">
              {[
                { num: 1, title: "Immediate Action", desc: "Swift response upon complaint with bail applications and protective measures." },
                { num: 2, title: "Evidence Analysis", desc: "Thorough examination of FIR, charges, and prosecution evidence." },
                { num: 3, title: "Case Building", desc: "Collection of defense evidence and witness statements." },
                { num: 4, title: "Court Strategy", desc: "Strong cross-examination and legal arguments." },
                { num: 5, title: "Negotiation", desc: "Attempt to settlecompound cases or reduce charges where possible." }
              ].map((item, idx) => (
                <ElementTransition key={idx} delay={400 + idx * 100}>
                  <div className="p-6 md:p-8 brutalist-border bg-legal-white">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold flex-shrink-0">{item.num}</div>
                      <div className="flex-1">
                        <h3 className="font-bold text-legal-black mb-2">{item.title}</h3>
                        <p className="text-legal-grey">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </ElementTransition>
              ))}
            </div>
          </div>
        </SectionTransition>
      </section>

      <section className="py-12 md:py-16 px-4 md:px-8 bg-purple-50">
        <SectionTransition delay={500}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-legal-black mb-6">
              Don't Face Criminal Charges Alone
            </h2>
            <p className="text-legal-grey text-lg mb-8">
              Expert criminal defense that protects your freedom, reputation, and future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-legal-black text-white hover:bg-purple-600 brutalist-border brutalist-shadow font-semibold hover-lift">
                <Link to="/contact">Emergency Defense</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-legal-black text-legal-black hover:bg-legal-black hover:text-white brutalist-border brutalist-shadow font-semibold hover-lift">
                <Link to="/practice-areas">All Services</Link>
              </Button>
            </div>
          </div>
        </SectionTransition>
      </section>
    </div>
  );
}
