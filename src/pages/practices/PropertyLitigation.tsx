import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Scale, Users, FileText, Shield, CheckCircle } from "lucide-react";
import { SectionTransition, ElementTransition } from "@/components/PageTransition";

export default function PropertyLitigation() {
  return (
    <div className="min-h-screen bg-legal-white pb-20 md:pb-0">
      <section className="py-12 md:py-20 px-4 md:px-8 bg-gradient-to-br from-yellow-50 to-amber-50">
        <SectionTransition delay={100}>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="flex-1">
                <div className="inline-block mb-4">
                  <div className="w-16 h-16 rounded-full bg-amber-600 flex items-center justify-center">
                    <Home className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h1 className="text-4xl xs:text-5xl sm:text-6xl font-bold font-serif text-legal-black mb-6">
                  Property Litigation
                </h1>
                <p className="text-lg text-legal-grey mb-6 leading-relaxed">
                  Expert resolution of complex property disputes involving ownership, encroachment, illegal possession, and inheritance conflicts. Protecting your property rights and investment.
                </p>
                <Button asChild size="lg" className="bg-legal-black text-white hover:bg-amber-600 brutalist-border brutalist-shadow font-semibold hover-lift">
                  <Link to="/contact">Protect Your Property</Link>
                </Button>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-yellow-400 to-amber-400 h-64 md:h-80 rounded-lg brutalist-shadow flex items-center justify-center">
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
              Property Litigation Services
            </h2>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                { icon: FileText, title: "Title Disputes", description: "Resolution of property ownership disputes with thorough document review." },
                { icon: Home, title: "Encroachment Cases", description: "Legal action against illegal encroachment on your property boundaries." },
                { icon: Scale, title: "Possession Suits", description: "Recovery of property from illegal occupants through court proceedings." },
                { icon: Users, title: "Inheritance Disputes", description: "Resolution of property disputes arising from inheritance and succession." },
                { icon: Shield, title: "Boundary Disputes", description: "Expert resolution of neighbor disputes over property boundaries." },
                { icon: CheckCircle, title: "Partition Suits", description: "Fair division of joint properties among co-owners through legal process." }
              ].map((service, idx) => {
                const IconComponent = service.icon;
                return (
                  <ElementTransition key={idx} delay={200 + idx * 100}>
                    <div className="p-6 md:p-8 brutalist-border bg-legal-white hover:shadow-lg transition-shadow">
                      <IconComponent className="w-8 h-8 text-amber-600 mb-4" />
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
              Types of Property Cases
            </h2>

            <div className="space-y-4 md:space-y-6">
              {[
                { title: "Title Defects", desc: "Remedying defects in property titles and clearing ownership clouds." },
                { title: "Adverse Possession", desc: "Defending against or establishing rights through adverse possession." },
                { title: "Tenant Disputes", desc: "Landlord-tenant disputes regarding eviction and possession." },
                { title: "Co-Ownership Issues", desc: "Resolution of disputes between co-owners of properties." },
                { title: "Sale Agreement Disputes", desc: "Disputes arising from property sale agreements and registration." },
                { title: "Lease Matters", desc: "Disputes related to commercial and residential leases." }
              ].map((item, idx) => (
                <ElementTransition key={idx} delay={300 + idx * 80}>
                  <div className="p-6 md:p-8 brutalist-border bg-legal-white">
                    <h3 className="font-bold text-legal-black mb-2 text-lg hover:text-amber-600 transition-colors">{item.title}</h3>
                    <p className="text-legal-grey">{item.desc}</p>
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
              Our Property Litigation Approach
            </h2>

            <div className="grid xs:grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Document Analysis",
                  items: ["Review deeds & titles", "Verify registrations", "Check encumbrances"]
                },
                {
                  title: "Evidence Building",
                  items: ["Site inspections", "Witness statements", "Survey reports", "Expert opinions"]
                },
                {
                  title: "Court Advocacy",
                  items: ["Strong presentation", "Cross-examination", "Legal arguments", "Appeal support"]
                }
              ].map((item, idx) => (
                <ElementTransition key={idx} delay={400 + idx * 100}>
                  <div className="p-6 md:p-8 brutalist-border bg-legal-white">
                    <h3 className="text-lg font-bold text-legal-black mb-4">{item.title}</h3>
                    <ul className="space-y-2">
                      {item.items.map((point, pidx) => (
                        <li key={pidx} className="flex gap-2 text-legal-grey">
                          <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ElementTransition>
              ))}
            </div>
          </div>
        </SectionTransition>
      </section>

      <section className="py-12 md:py-16 px-4 md:px-8 bg-yellow-50">
        <SectionTransition delay={500}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-legal-black mb-6">
              Protect Your Property Rights
            </h2>
            <p className="text-legal-grey text-lg mb-8">
              Expert litigation for property disputes with proven success rate.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-legal-black text-white hover:bg-amber-600 brutalist-border brutalist-shadow font-semibold hover-lift">
                <Link to="/contact">Get Legal Help</Link>
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
