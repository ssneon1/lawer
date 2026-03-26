import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Shield, Users, Heart, FileText, CheckCircle } from "lucide-react";
import { SectionTransition, ElementTransition } from "@/components/PageTransition";

export default function FamilyDisputes() {
  return (
    <div className="min-h-screen bg-legal-white pb-20 md:pb-0">
      <section className="py-12 md:py-20 px-4 md:px-8 bg-gradient-to-br from-green-50 to-emerald-50">
        <SectionTransition delay={100}>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="flex-1">
                <div className="inline-block mb-4">
                  <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
                    <Home className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h1 className="text-4xl xs:text-5xl sm:text-6xl font-bold font-serif text-legal-black mb-6">
                  Family Disputes Lawyer
                </h1>
                <p className="text-lg text-legal-grey mb-6 leading-relaxed">
                  Expert resolution of complex family disputes in Delhi NCR. We protect your rights in inheritance, succession, and family property matters with fair and decisive outcomes.
                </p>
                <Button asChild size="lg" className="bg-legal-black text-white hover:bg-green-600 brutalist-border brutalist-shadow font-semibold hover-lift">
                  <Link to="/contact">Get Legal Help</Link>
                </Button>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-green-400 to-emerald-400 h-64 md:h-80 rounded-lg brutalist-shadow flex items-center justify-center">
                  <Home className="w-32 h-32 text-white opacity-30" />
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
              Family Dispute Resolution Services
            </h2>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                { icon: FileText, title: "Inheritance Disputes", description: "Resolution of will contests and succession disputes with thorough legal review." },
                { icon: Home, title: "Property Division", description: "Fair division of family properties and ancestral assets among heirs." },
                { icon: Users, title: "Succession Planning", description: "Expert guidance on succession laws and inheritance protection." },
                { icon: Heart, title: "Family Reconciliation", description: "Mediation and negotiation for peaceful family dispute resolution." },
                { icon: Shield, title: "Title Clarification", description: "Legal clarification of property titles and ownership disputes." },
                { icon: CheckCircle, title: "Court Representation", description: "Strong advocacy in family court and succession proceedings." }
              ].map((service, idx) => {
                const IconComponent = service.icon;
                return (
                  <ElementTransition key={idx} delay={200 + idx * 100}>
                    <div className="p-6 md:p-8 brutalist-border bg-legal-white hover:shadow-lg transition-shadow">
                      <IconComponent className="w-8 h-8 text-green-500 mb-4" />
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
              Types of Family Disputes We Handle
            </h2>

            <div className="space-y-4 md:space-y-6">
              {[
                { title: "Will & Testament Disputes", desc: "Contesting wills, proving fraud, and securing rightful inheritance." },
                { title: "Succession Certificate Cases", desc: "Obtaining succession certificates and managing ancestral assets." },
                { title: "Inheritance Tax Issues", desc: "Expert guidance on inheritance taxation and planning." },
                { title: "Property Partition", desc: "Fair division of ancestral properties among family members." },
                { title: "Succession Laws", desc: "Navigation of Hindu, Muslim, Christian succession laws as per personal laws." },
                { title: "Family Settlement Deeds", desc: "Creation and execution of family settlement agreements." }
              ].map((item, idx) => (
                <ElementTransition key={idx} delay={300 + idx * 80}>
                  <div className="p-6 md:p-8 brutalist-border bg-legal-white">
                    <h3 className="font-bold text-legal-black mb-2 text-lg hover:text-green-500 transition-colors">{item.title}</h3>
                    <p className="text-legal-grey">{item.desc}</p>
                  </div>
                </ElementTransition>
              ))}
            </div>
          </div>
        </SectionTransition>
      </section>

      <section className="py-12 md:py-16 px-4 md:px-8 bg-green-50">
        <SectionTransition delay={400}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-legal-black mb-6">
              Resolve Family Disputes Fairly & Quickly
            </h2>
            <p className="text-legal-grey text-lg mb-8">
              Our experienced lawyers ensure your interests are protected in all family matters.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-legal-black text-white hover:bg-green-600 brutalist-border brutalist-shadow font-semibold hover-lift">
                <Link to="/contact">Consult Now</Link>
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
