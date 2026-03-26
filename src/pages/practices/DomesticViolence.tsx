import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShieldAlert, CheckCircle, Users, Briefcase, Clock, Heart } from "lucide-react";
import { SectionTransition, ElementTransition } from "@/components/PageTransition";

export default function DomesticViolence() {
  return (
    <div className="min-h-screen bg-legal-white pb-20 md:pb-0">
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-gradient-to-br from-red-50 to-orange-50">
        <SectionTransition delay={100}>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="flex-1">
                <div className="inline-block mb-4">
                  <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
                    <ShieldAlert className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h1 className="text-4xl xs:text-5xl sm:text-6xl font-bold font-serif text-legal-black mb-6">
                  Domestic Violence Lawyer
                </h1>
                <p className="text-lg text-legal-grey mb-6 leading-relaxed">
                  Expert legal help for victims of domestic violence in Delhi & NCR. We provide dedicated support, swift action, and strong representation to protect your safety and rights.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-red-600 text-white hover:bg-red-700 brutalist-border brutalist-shadow font-semibold hover-lift"
                >
                  <Link to="/contact">Get Help Now</Link>
                </Button>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-red-400 to-orange-400 h-64 md:h-80 rounded-lg brutalist-shadow flex items-center justify-center">
                  <ShieldAlert className="w-32 h-32 text-white opacity-30" />
                </div>
              </div>
            </div>
          </div>
        </SectionTransition>
      </section>

      {/* Support Services */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <SectionTransition delay={200}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-legal-black text-center mb-12">
              Our Support & Legal Services
            </h2>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                {
                  icon: CheckCircle,
                  title: "Immediate Legal Action",
                  description: "Filing Protection Orders under Domestic Violence Act with urgent impact and swift outcomes."
                },
                {
                  icon: Briefcase,
                  title: "Criminal Proceedings",
                  description: "Filing FIR and conducting criminal prosecution for assault, threats, and harassment cases."
                },
                {
                  icon: Heart,
                  title: "Shelter & Safety",
                  description: "Guidance on shelter homes, safe houses, and protective measures for you and your children."
                },
                {
                  icon: Users,
                  title: "Custody & Maintenance",
                  description: "Securing child custody and maintenance claims during protective proceedings."
                },
                {
                  icon: Clock,
                  title: "Emergency Response",
                  description: "Quick response to urgent safety threats with immediate legal intervention options."
                },
                {
                  icon: ShieldAlert,
                  title: "Counseling Support",
                  description: "Referrals to professional counseling and psychological support services."
                }
              ].map((service, idx) => {
                const IconComponent = service.icon;
                return (
                  <ElementTransition key={idx} delay={200 + idx * 100}>
                    <div className="p-6 md:p-8 brutalist-border bg-legal-white hover:shadow-lg transition-shadow">
                      <IconComponent className="w-8 h-8 text-red-500 mb-4" />
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

      {/* Legal Options */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-gray-50">
        <SectionTransition delay={300}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-legal-black text-center mb-12">
              Legal Options Available
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  title: "Domestic Violence Act Protection Order",
                  description: "Restraining orders to stop harassment, physical violence, and threats. Quick court approval possible."
                },
                {
                  title: "Criminal Prosecution",
                  description: "Filing criminal cases under IPC sections 498A (cruelty), 506 (criminal intimidation), 323 (assault)."
                },
                {
                  title: "Maintenance Claims",
                  description: "Securing financial support from abuser for you and dependent children."
                },
                {
                  title: "Child Custody Orders",
                  description: "Ensuring safe custody arrangements prioritizing the child's welfare and protection."
                },
                {
                  title: "Divorce & Separation",
                  description: "Quick divorce proceedings with grounds of cruelty and compensation for harassment."
                }
              ].map((option, idx) => (
                <ElementTransition key={idx} delay={300 + idx * 100}>
                  <div className="p-6 md:p-8 brutalist-border bg-legal-white">
                    <h3 className="font-bold text-legal-black mb-3 text-lg hover:text-red-500 transition-colors">{option.title}</h3>
                    <p className="text-legal-grey">{option.description}</p>
                  </div>
                </ElementTransition>
              ))}
            </div>
          </div>
        </SectionTransition>
      </section>

      {/* Important Information */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <SectionTransition delay={400}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-legal-black text-center mb-12">
              Know Your Rights
            </h2>

            <div className="space-y-4 md:space-y-6">
              {[
                {
                  title: "You Have Rights!",
                  content: "Domestic violence is illegal. You have the right to live free from violence and threats."
                },
                {
                  title: "Confidentiality",
                  content: "All proceedings can be kept confidential. Your privacy and safety are protected."
                },
                {
                  title: "No Cost Proceedings",
                  content: "Legal proceedings under DV Act are free. You don't need to pay court fees."
                },
                {
                  title: "Immediate Protection",
                  content: "Courts can grant protection orders within 24-48 hours in urgent cases."
                },
                {
                  title: "Compensation Claims",
                  content: "You can claim compensation for physical harm, mental trauma, and loss of earnings."
                },
                {
                  title: "Children's Protection",
                  content: "Your children have full legal protection and you can secure custody immediately."
                }
              ].map((item, idx) => (
                <ElementTransition key={idx} delay={400 + idx * 50}>
                  <div className="p-6 md:p-8 brutalist-border bg-red-50 hover:bg-red-100 transition-colors">
                    <h3 className="font-bold text-legal-black mb-2 text-lg">{item.title}</h3>
                    <p className="text-legal-grey">{item.content}</p>
                  </div>
                </ElementTransition>
              ))}
            </div>
          </div>
        </SectionTransition>
      </section>

      {/* Emergency CTA */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-red-600 text-white">
        <SectionTransition delay={500}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              ⚠️ In Emergency? Call Police (191)
            </h2>
            <p className="text-lg mb-8 opacity-90">
              For immediate physical danger, contact police first. We're here to provide legal support afterward.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 brutalist-border font-semibold hover-lift"
              >
                <Link to="/contact">Contact Our Lawyers</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-red-700 font-semibold hover-lift"
              >
                <Link to="/practice-areas">Other Services</Link>
              </Button>
            </div>
          </div>
        </SectionTransition>
      </section>
    </div>
  );
}
