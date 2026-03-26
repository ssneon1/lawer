import { Link } from "react-router-dom";
import { MessageSquare, ChevronDown, CheckCircle, HelpCircle } from "lucide-react";
import { SectionTransition, ElementTransition } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How long does a regular court case take?",
      a: "The duration of a legal proceeding varies significantly based on the type of case and the court's schedule. A mutual divorce can be resolved in 6-12 months, while complex property or criminal trials may take longer. We always strive for the speediest resolution possible."
    },
    {
      q: "What documents do I need for a divorce consultation?",
      a: "Generally, you'll need আপনার identity proof (Aadhaar/Passport), marriage certificate or wedding photo, and any previous legal notices. For contested cases, evidence of grounds for divorce is also helpful."
    },
    {
      q: "Can I file for a stay order on a property?",
      a: "Yes, if there is a realistic threat of illegal possession, construction, or sale of the property. We can file an application for a temporary injunction (Stay Order) to protect your interests during the litigation."
    },
    {
      q: "How do I get bail in a criminal case?",
      a: "Bail application can be filed in the relevant District Court or High Court. The court considers the nature of the alleged offense, your background, and the likelihood of evidence tampering. We provide specialized representation for urgent bail matters."
    },
    {
      q: "Is a legal notice mandatory before filing a suit?",
      a: "In many cases, like money recovery or consumer disputes, it is mandatory or highly recommended. A well-drafted legal notice often leads to an out-of-court settlement, saving time and costs."
    },
    {
      q: "What are the requirements for a court marriage?",
      a: "Both parties must be of legal age (21 for male, 18 for female), should not have a living spouse (unless divorced), and shouldn't be within degrees of prohibited relationship. You'll need witnesses and relevant age/address proofs."
    }
  ];

  return (
    <div className="min-h-screen bg-legal-white pb-20 md:pb-0">
      <section className="py-12 md:py-20 px-4 md:px-8 bg-legal-black text-white">
        <SectionTransition delay={100}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">Frequently Asked Questions</h1>
            <p className="text-lg text-gray-300">Quick answers to common legal questions from our experts.</p>
          </div>
        </SectionTransition>
      </section>

      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <ElementTransition key={idx} delay={idx * 100}>
                <div className="border-2 border-legal-black brutalist-shadow bg-white overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full text-left p-6 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-xl font-bold text-legal-black pr-8">{faq.q}</span>
                    <ChevronDown className={`w-6 h-6 transform transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
                  </button>
                  {openIndex === idx && (
                    <div className="p-6 pt-0 border-t-2 border-legal-black bg-legal-blue/5">
                      <p className="text-legal-grey leading-relaxed text-lg">{faq.a}</p>
                    </div>
                  )}
                </div>
              </ElementTransition>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-3xl mx-auto text-center p-12 border-4 border-dashed border-legal-blue rounded-3xl">
          <MessageSquare className="w-16 h-16 text-legal-blue mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-legal-black mb-4 font-serif">Still have questions?</h2>
          <p className="text-legal-grey mb-8">Every legal matter is unique. Contact us for a personalized consultation regarding your specific case.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-legal-black text-white hover:bg-legal-grey px-8 py-6 font-bold">
              <Link to="/contact">TALK TO US NOW</Link>
            </Button>
            <Button asChild translate="no" size="lg" variant="outline" className="border-legal-black text-legal-black font-bold px-8 py-6">
              <a href="tel:+919999627930">CALL +91 9999 627 930</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
