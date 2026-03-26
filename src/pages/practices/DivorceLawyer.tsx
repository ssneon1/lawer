import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, CheckCircle, Users, FileText, Clock, Shield, Scale } from "lucide-react";
import { SectionTransition, ElementTransition } from "@/components/PageTransition";

export default function DivorceLawyer() {
  return (
    <div className="min-h-screen bg-legal-white pb-20 md:pb-0">
      {/* Hero Section */}
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
                  Divorce Lawyer
                </h1>
                <p className="text-lg text-legal-grey mb-6 leading-relaxed">
                  Expert divorce law services in Delhi/NCR. Whether it's a contested or mutual divorce, we provide compassionate yet decisive legal support to protect your rights and help you move forward.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-legal-black text-white hover:bg-pink-600 brutalist-border brutalist-shadow font-semibold hover-lift"
                >
                  <Link to="/contact">Schedule Consultation</Link>
                </Button>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-pink-400 to-rose-400 h-64 md:h-80 rounded-lg brutalist-shadow flex items-center justify-center">
                  <Heart className="w-32 h-32 text-white opacity-30" />
                </div>
              </div>
            </div>
          </div>
        </SectionTransition>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <SectionTransition delay={200}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-legal-black text-center mb-12">
              Our Divorce Services
            </h2>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                {
                  icon: FileText,
                  title: "Mutual Divorce",
                  description: "Quick and amicable dissolution of marriage with both parties' consent. We handle all documentation and court procedures."
                },
                {
                  icon: Scale,
                  title: "Contested Divorce",
                  description: "Strong representation if one party opposes the divorce. We fight for your rights and valid grounds."
                },
                {
                  icon: Users,
                  title: "Custody & Maintenance",
                  description: "Protection of child custody arrangements and fair maintenance settlements for dependents."
                },
                {
                  icon: Shield,
                  title: "Property Settlement",
                  description: "Fair division of assets and property acquired during the marriage with expert negotiation."
                },
                {
                  icon: Clock,
                  title: "Speedy Resolution",
                  description: "We work to resolve your case efficiently without unnecessary delays or court appearances."
                },
                {
                  icon: CheckCircle,
                  title: "Post-Divorce Support",
                  description: "Continued legal support for modifications, enforcement, and addressing future concerns."
                }
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

      {/* Process Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-gray-50">
        <SectionTransition delay={300}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-legal-black text-center mb-12">
              Our Process
            </h2>

            <div className="max-w-4xl mx-auto">
              {[
                {
                  step: 1,
                  title: "Initial Consultation",
                  description: "We listen to your situation, understand your concerns, and explain the legal options available to you."
                },
                {
                  step: 2,
                  title: "Case Assessment",
                  description: "Detailed analysis of your case, property, and custody considerations to develop the best strategy."
                },
                {
                  step: 3,
                  title: "Documentation",
                  description: "Preparation of all legal documents, notices, and affidavits required for your divorce petition."
                },
                {
                  step: 4,
                  title: "Court Proceedings",
                  description: "Expert representation throughout court hearings with strong advocacy for your interests."
                },
                {
                  step: 5,
                  title: "Settlement & Resolution",
                  description: "Negotiation of fair settlements and finalization of the divorce decree."
                }
              ].map((item, idx) => (
                <ElementTransition key={idx} delay={300 + idx * 100}>
                  <div className="flex gap-4 md:gap-6 mb-8 last:mb-0">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-500 text-white font-bold text-lg">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-lg font-bold text-legal-black mb-2">{item.title}</h3>
                      <p className="text-legal-grey">{item.description}</p>
                    </div>
                  </div>
                </ElementTransition>
              ))}
            </div>
          </div>
        </SectionTransition>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <SectionTransition delay={400}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-legal-black text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4 md:space-y-6">
              {[
                {
                  q: "How long does a divorce take?",
                  a: "Mutual divorce typically takes 6 months to 1 year. Contested divorces can take longer depending on complexity."
                },
                {
                  q: "What are the grounds for divorce in India?",
                  a: "Common grounds include cruelty, abandonment, adultery, desertion, and irretrievable breakdown of marriage."
                },
                {
                  q: "How is property divided in divorce?",
                  a: "Property acquired during marriage is typically divided fairly. Pre-marital property usually remains with the owner."
                },
                {
                  q: "What about child custody?",
                  a: "Courts decide custody based on the child's best interests, considering factors like age, health, and parent-child bond."
                },
                {
                  q: "Do I need grounds for mutual divorce?",
                  a: "No. Mutual divorce requires nothing except mutual consent and a separation period of 6 months."
                }
              ].map((item, idx) => (
                <ElementTransition key={idx} delay={400 + idx * 100}>
                  <div className="p-6 md:p-8 brutalist-border bg-legal-white">
                    <h3 className="font-bold text-legal-black mb-3 text-lg">{item.q}</h3>
                    <p className="text-legal-grey">{item.a}</p>
                  </div>
                </ElementTransition>
              ))}
            </div>
          </div>
        </SectionTransition>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-pink-50">
        <SectionTransition delay={500}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-legal-black mb-6">
              Ready to Move Forward?
            </h2>
            <p className="text-legal-grey text-lg mb-8">
              Let our experienced divorce lawyers guide you through this transition with compassion and expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-legal-black text-white hover:bg-pink-600 brutalist-border brutalist-shadow font-semibold hover-lift"
              >
                <Link to="/contact">Contact Us Now</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-legal-black text-legal-black hover:bg-legal-black hover:text-white brutalist-border brutalist-shadow font-semibold hover-lift"
              >
                <Link to="/practice-areas">View Other Services</Link>
              </Button>
            </div>
          </div>
        </SectionTransition>
      </section>
    </div>
  );
}
