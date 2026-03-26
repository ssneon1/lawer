import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Scale, FileText, Users, Clock, Shield, CheckCircle } from "lucide-react";
import { SectionTransition, ElementTransition } from "@/components/PageTransition";

export default function MoneyRecovery() {
  return (
    <div className="min-h-screen bg-legal-white pb-20 md:pb-0">
      <section className="py-12 md:py-20 px-4 md:px-8 bg-gradient-to-br from-teal-50 to-green-50">
        <SectionTransition delay={100}>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="flex-1">
                <div className="inline-block mb-4">
                  <div className="w-16 h-16 rounded-full bg-teal-600 flex items-center justify-center">
                    <Scale className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h1 className="text-4xl xs:text-5xl sm:text-6xl font-bold font-serif text-legal-black mb-6">
                  Money Recovery
                </h1>
                <p className="text-lg text-legal-grey mb-6 leading-relaxed">
                  Recover what's rightfully yours. From legal notices to recovery suits and court decree enforcement - we ensure unpaid debts, loans, and business dues don't stay stuck.
                </p>
                <Button asChild size="lg" className="bg-legal-black text-white hover:bg-teal-600 brutalist-border brutalist-shadow font-semibold hover-lift">
                  <Link to="/contact">Recover Your Money</Link>
                </Button>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-teal-400 to-green-400 h-64 md:h-80 rounded-lg brutalist-shadow flex items-center justify-center text-6xl">
                  💰
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
              Money Recovery Services
            </h2>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                { icon: FileText, title: "Legal Notices", description: "Formal demand notices to recover unpaid loans, business dues, and personal borrowings." },
                { icon: Scale, title: "Recovery Suits", description: "Filing and prosecution of recovery suits in court with clear legal strategy." },
                { icon: Clock, title: "Decree Enforcement", description: "Enforcement of court decrees to ensure debtor pays what court ordered." },
                { icon: Users, title: "Negotiation", description: "Settlement negotiations to recover money speedily without prolonged litigation." },
                { icon: Shield, title: "Asset Recovery", description: "Identification and recovery from debtor's assets and properties." },
                { icon: CheckCircle, title: "Follow-Up", description: "Determined follow-up and monitoring until full recovery is completed." }
              ].map((service, idx) => {
                const IconComponent = service.icon;
                return (
                  <ElementTransition key={idx} delay={200 + idx * 100}>
                    <div className="p-6 md:p-8 brutalist-border bg-legal-white hover:shadow-lg transition-shadow">
                      <IconComponent className="w-8 h-8 text-teal-600 mb-4" />
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
              Types of Debts We Recover
            </h2>

            <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {[
                "Loan Default Cases",
                "Business Dues & Payments",
                "Personal Loans",
                "Partnership Disputes",
                "Vendor Dues",
                "Cheque Bounce Cases",
                "Salary & Wages",
                "Maintenance Amounts",
                "Insurance Claims",
                "Contract Breach Damages",
                "Rent Default",
                "Goods Supplied Dues"
              ].map((debt, idx) => (
                <ElementTransition key={idx} delay={300 + idx * 60}>
                  <div className="p-4 md:p-6 brutalist-border bg-legal-white hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3">
                      <Scale className="w-5 h-5 text-teal-600 flex-shrink-0" />
                      <span className="font-semibold text-legal-black">{debt}</span>
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
              Our Recovery Strategy
            </h2>

            <div className="space-y-6">
              {[
                { num: 1, title: "Case Assessment", desc: "Review of documents, evidence, and debtor's financial position." },
                { num: 2, title: "Legal Notice", desc: "Formal demand notice that often results in immediate settlement." },
                { num: 3, title: "Negotiation", desc: "Attempt to settle and recover without court involvement." },
                { num: 4, title: "Court Filing", desc: "Filing recovery suit if debtor refuses to pay." },
                { num: 5, title: "Decree Enforcement", desc: "After court orders recovery, enforcement through asset attachment." }
              ].map((item, idx) => (
                <ElementTransition key={idx} delay={400 + idx * 100}>
                  <div className="p-6 md:p-8 brutalist-border bg-legal-white">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold flex-shrink-0">{item.num}</div>
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

      <section className="py-12 md:py-16 px-4 md:px-8 bg-teal-50">
        <SectionTransition delay={500}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-legal-black mb-6">
              Start Your Money Recovery Today
            </h2>
            <p className="text-legal-grey text-lg mb-8">
              Expert strategies to recover unpaid debts with determination and legal excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-legal-black text-white hover:bg-teal-600 brutalist-border brutalist-shadow font-semibold hover-lift">
                <Link to="/contact">Get Help Now</Link>
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
