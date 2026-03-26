import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, CheckCircle, Home, Heart, FileText, Scale } from "lucide-react";
import { SectionTransition, ElementTransition } from "@/components/PageTransition";

export default function Matrimonial() {
  return (
    <div className="min-h-screen bg-legal-white pb-20 md:pb-0">
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-gradient-to-br from-blue-50 to-cyan-50">
        <SectionTransition delay={100}>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="flex-1">
                <div className="inline-block mb-4">
                  <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h1 className="text-4xl xs:text-5xl sm:text-6xl font-bold font-serif text-legal-black mb-6">
                  Matrimonial Lawyer
                </h1>
                <p className="text-lg text-legal-grey mb-6 leading-relaxed">
                  Trusted matrimonial legal services specializing in divorce, separation, property division, and alimony. We protect your interests with care and professionalism.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-legal-black text-white hover:bg-blue-600 brutalist-border brutalist-shadow font-semibold hover-lift"
                >
                  <Link to="/contact">Consult Now</Link>
                </Button>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-blue-400 to-cyan-400 h-64 md:h-80 rounded-lg brutalist-shadow flex items-center justify-center">
                  <Users className="w-32 h-32 text-white opacity-30" />
                </div>
              </div>
            </div>
          </div>
        </SectionTransition>
      </section>

      {/* Services */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <SectionTransition delay={200}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-legal-black text-center mb-12">
              Matrimonial Services
            </h2>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                {
                  icon: Home,
                  title: "Court Marriage",
                  description: "Complete guidance for court marriage registration with proper documentation and affidavits."
                },
                {
                  icon: Heart,
                  title: "Marriage Registration",
                  description: "Smooth registration of marriages under Registration of Marriages Act with all legal compliance."
                },
                {
                  icon: CheckCircle,
                  title: "Divorce Proceedings",
                  description: "Expert handling of mutual and contested divorce cases with fair settlement negotiations."
                },
                {
                  icon: Scale,
                  title: "Alimony & Maintenance",
                  description: "Securing fair alimony and maintenance claims for spouse and children."
                },
                {
                  icon: FileText,
                  title: "Property Division",
                  description: "Equitable division of matrimonial properties acquired during marriage."
                },
                {
                  icon: Users,
                  title: "Separation Orders",
                  description: "Legal separation without divorce when parties wish to separate formally."
                }
              ].map((service, idx) => {
                const IconComponent = service.icon;
                return (
                  <ElementTransition key={idx} delay={200 + idx * 100}>
                    <div className="p-6 md:p-8 brutalist-border bg-legal-white hover:shadow-lg transition-shadow">
                      <IconComponent className="w-8 h-8 text-blue-500 mb-4" />
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

      {/* Why Choose Us */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-gray-50">
        <SectionTransition delay={300}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-legal-black text-center mb-12">
              Why Choose Us for Matrimonial Matters
            </h2>

            <div className="grid xs:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: "Compassionate Approach",
                  items: [
                    "Sensitive handling of emotional issues",
                    "Confidential advice and proceedings",
                    "Focus on amicable settlements when possible"
                  ]
                },
                {
                  title: "Strong Negotiation",
                  items: [
                    "Fair property settlements",
                    "Optimal alimony calculations",
                    "Custody arrangements in best interest"
                  ]
                },
                {
                  title: "Expert Advocacy",
                  items: [
                    "Experienced in contested cases",
                    "Strong court representation",
                    "Proven track record of success"
                  ]
                }
              ].map((item, idx) => (
                <ElementTransition key={idx} delay={300 + idx * 100}>
                  <div className="p-6 md:p-8 brutalist-border bg-legal-white">
                    <h3 className="text-lg font-bold text-legal-black mb-4">{item.title}</h3>
                    <ul className="space-y-3">
                      {item.items.map((point, pidx) => (
                        <li key={pidx} className="flex gap-3">
                          <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="text-legal-grey">{point}</span>
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

      {/* Process Timeline */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <SectionTransition delay={400}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-legal-black text-center mb-12">
              Our Legal Process
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: "Step 1",
                  title: "Initial Consultation",
                  description: "Free consultation to understand your situation, concerns, and legal options available.",
                  duration: "30-45 minutes"
                },
                {
                  step: "Step 2",
                  title: "Case Analysis",
                  description: "Detailed review of documents, assets, and arrangements to develop best strategy.",
                  duration: "2-3 days"
                },
                {
                  step: "Step 3",
                  title: "Legal Filing",
                  description: "Preparation and filing of petition with all necessary documents and affidavits.",
                  duration: "1-2 weeks"
                },
                {
                  step: "Step 4",
                  title: "Court Proceedings",
                  description: "Attendance at court hearings with strong advocacy and settlement negotiations.",
                  duration: "6 months - 2 years"
                },
                {
                  step: "Step 5",
                  title: "Final Order",
                  description: "Obtaining final decree and ensuring smooth execution of court orders.",
                  duration: "2-4 weeks"
                }
              ].map((item, idx) => (
                <ElementTransition key={idx} delay={400 + idx * 100}>
                  <div className="p-6 md:p-8 brutalist-border bg-legal-white hover:shadow-lg transition-shadow">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                          {idx + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-legal-black mb-2">{item.title}</h3>
                        <p className="text-legal-grey mb-2">{item.description}</p>
                        <p className="text-sm text-blue-600 font-semibold">⏱️ {item.duration}</p>
                      </div>
                    </div>
                  </div>
                </ElementTransition>
              ))}
            </div>
          </div>
        </SectionTransition>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-blue-50">
        <SectionTransition delay={500}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-legal-black mb-6">
              Need Matrimonial Legal Help?
            </h2>
            <p className="text-legal-grey text-lg mb-8">
              Professional guidance for all your matrimonial matters with experienced advocates.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-legal-black text-white hover:bg-blue-600 brutalist-border brutalist-shadow font-semibold hover-lift"
              >
                <Link to="/contact">Book Consultation</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-legal-black text-legal-black hover:bg-legal-black hover:text-white brutalist-border brutalist-shadow font-semibold hover-lift"
              >
                <Link to="/practice-areas">All Services</Link>
              </Button>
            </div>
          </div>
        </SectionTransition>
      </section>
    </div>
  );
}
