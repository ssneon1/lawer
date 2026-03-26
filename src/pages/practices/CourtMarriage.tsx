import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, FileText, Clock, Users, CheckCircle, Shield } from "lucide-react";
import { SectionTransition, ElementTransition } from "@/components/PageTransition";

export default function CourtMarriage() {
  return (
    <div className="min-h-screen bg-legal-white pb-20 md:pb-0">
      <section className="py-12 md:py-20 px-4 md:px-8 bg-gradient-to-br from-pink-50 to-rose-50">
        <SectionTransition delay={100}>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="flex-1">
                <div className="inline-block mb-4">
                  <div className="w-16 h-16 rounded-full bg-pink-500 flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h1 className="text-4xl xs:text-5xl sm:text-6xl font-bold font-serif text-legal-black mb-6">
                  Court Marriage
                </h1>
                <p className="text-lg text-legal-grey mb-6 leading-relaxed">
                  Marriage should be about love, not legal stress. We help couples complete court marriage legally, smoothly, and without unnecessary delays. Your journey together, legally protected.
                </p>
                <Button asChild size="lg" className="bg-legal-black text-white hover:bg-pink-600 brutalist-border brutalist-shadow font-semibold hover-lift">
                  <Link to="/contact">Register Your Marriage</Link>
                </Button>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-pink-400 to-rose-400 h-64 md:h-80 rounded-lg brutalist-shadow flex items-center justify-center text-6xl">
                  💍
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
              Court Marriage Services
            </h2>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                { icon: FileText, title: "Documentation", description: "Complete preparation of marriage notice, affidavits, and all required documents." },
                { icon: Clock, title: "Quick Processing", description: "Fast-track court marriage process without unnecessary delays or complications." },
                { icon: Users, title: "Witness Management", description: "Guidance on witness requirements and documentation for smooth proceedings." },
                { icon: Shield, title: "Legal Protection", description: "Full legal recognition of your marriage under Special Marriage Act." },
                { icon: CheckCircle, title: "Certificate Issuance", description: "Immediate issuance of court marriage certificate after solemnization." },
                { icon: Heart, title: "Privacy & Confidentiality", description: "Confidential proceedings to protect your privacy and personal details." }
              ].map((service, idx) => {
                const IconComponent = service.icon;
                return (
                  <ElementTransition key={idx} delay={200 + idx * 100}>
                    <div className="p-6 md:p-8 brutalist-border bg-legal-white hover:shadow-lg transition-shadow">
                      <IconComponent className="w-8 h-8 text-pink-500 mb-4" />
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
              Our Court Marriage Process
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: "Step 1",
                  title: "Initial Consultation",
                  description: "Meet with our lawyer to discuss requirements, documents needed, and answer all your questions.",
                  timeline: "Day 1"
                },
                {
                  step: "Step 2",
                  title: "Document Preparation",
                  description: "Prepare marriage notice, affidavits, and other required documentation with our guidance.",
                  timeline: "Days 2-3"
                },
                {
                  step: "Step 3",
                  title: "Court Filing",
                  description: "Submit marriage notice to court. Court calls for investigation (optional in some cases).",
                  timeline: "Days 4-7"
                },
                {
                  step: "Step 4",
                  title: "Waiting Period",
                  description: "Mandatory 30-day waiting period (may be waived in some cases). No objections means approval.",
                  timeline: "30 days"
                },
                {
                  step: "Step 5",
                  title: "Solemnization",
                  description: "Formal marriage ceremony in court before Marriage Registrar with witnesses.",
                  timeline: "Day 35"
                },
                {
                  step: "Step 6",
                  title: "Certificate Issuance",
                  description: "Receive official court marriage certificate - legally recognized document for all purposes.",
                  timeline: "Day 35"
                }
              ].map((item, idx) => (
                <ElementTransition key={idx} delay={300 + idx * 100}>
                  <div className="p-6 md:p-8 brutalist-border bg-legal-white">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold">
                          {idx + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-legal-black mb-2">{item.title}</h3>
                        <p className="text-legal-grey mb-2">{item.description}</p>
                        <p className="text-sm font-semibold text-pink-600">⏱️ {item.timeline}</p>
                      </div>
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
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-legal-black text-center mb-12">
              Requirements & Benefits
            </h2>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <h3 className="text-xl font-bold text-legal-black mb-6">Required Documents</h3>
                <ul className="space-y-3">
                  {[
                    "Birth Certificate or Age Proof",
                    "Address Proof (Aadhaar, Passport)",
                    "Passport size photos (4 copies)",
                    "Affidavit of Age & Marital Status",
                    "Divorce Decree (if previously married)",
                    "Character witness letters (2)"
                  ].map((doc, idx) => (
                    <li key={idx} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                      <span className="text-legal-grey">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-legal-black mb-6">Benefits of Court Marriage</h3>
                <ul className="space-y-3">
                  {[
                    "Full legal recognition",
                    "Protection under matrimonial laws",
                    "Inheritance rights secured",
                    "No religious barriers",
                    "Complete confidentiality",
                    "Valid for all legal purposes"
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                      <span className="text-legal-grey">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </SectionTransition>
      </section>

      <section className="py-12 md:py-16 px-4 md:px-8 bg-pink-50">
        <SectionTransition delay={500}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-legal-black mb-6">
              💑 Begin Your Married Life The Right Way
            </h2>
            <p className="text-legal-grey text-lg mb-8">
              Legal marriage with our expert guidance - smooth, quick, and completely confidential.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-legal-black text-white hover:bg-pink-600 brutalist-border brutalist-shadow font-semibold hover-lift">
                <Link to="/contact">Start Your Court Marriage</Link>
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
