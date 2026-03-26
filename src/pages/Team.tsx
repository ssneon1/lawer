import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin, Users } from "lucide-react";
import { SectionTransition, ElementTransition } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";

export default function Team() {
  const team = [
    {
      name: "Advocate Cheerag Goel",
      role: "Founder & Lead Counsel",
      specialty: "Criminal & Civil Litigation",
      bio: "Over 15 years of experience in High Court and District court litigation.",
      image: "/avatar.jpeg"
    },
    {
      name: "Advocate Rajesh Sharma",
      role: "Senior Associate",
      specialty: "Family & Matrimonial Law",
      bio: "Specialist in complex family disputes and mutual consent divorces.",
      image: "👤"
    },
    {
      name: "Advocate Priya Singh",
      role: "Corporate Consultant",
      specialty: "Property & Real Estate Law",
      bio: "Expert in property verification, title deeds, and commercial registration.",
      image: "👤"
    }
  ];

  return (
    <div className="min-h-screen bg-legal-white pb-20 md:pb-0">
      <section className="py-12 md:py-20 px-4 md:px-8 bg-gradient-to-br from-legal-black to-gray-900 text-white">
        <SectionTransition delay={100}>
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl font-bold font-serif mb-6">Our Legal Team</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto italic">
              "A team of dedicated professionals committed to your justice and peace of mind."
            </p>
          </div>
        </SectionTransition>
      </section>

      <section className="py-12 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {team.map((member, idx) => (
              <ElementTransition key={idx} delay={200 + idx * 150}>
                <div className="bg-white border-2 border-legal-black brutalist-shadow hover:scale-105 transition-all duration-300 overflow-hidden group">
                  <div className="h-64 bg-gray-100 flex items-center justify-center text-6xl">
                    {member.image.includes('/') ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      member.image
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-legal-black mb-1">{member.name}</h3>
                    <p className="text-legal-blue font-bold text-sm uppercase tracking-wider mb-4">{member.role}</p>
                    <p className="text-legal-grey text-sm mb-6 leading-relaxed">{member.bio}</p>
                    <div className="flex space-x-4">
                      <a href="#" className="p-2 bg-gray-50 rounded-lg hover:bg-legal-blue hover:text-white transition-colors"><Linkedin size={20} /></a>
                      <a href="#" className="p-2 bg-gray-50 rounded-lg hover:bg-legal-blue hover:text-white transition-colors"><Mail size={20} /></a>
                      <a href="#" className="p-2 bg-gray-50 rounded-lg hover:bg-legal-blue hover:text-white transition-colors"><Phone size={20} /></a>
                    </div>
                  </div>
                </div>
              </ElementTransition>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 bg-legal-blue/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 font-serif">Work With Us</h2>
          <p className="text-legal-grey mb-8">We are always looking for passionate legal minds to join our mission of justice.</p>
          <Button asChild className="bg-legal-black text-white hover:bg-legal-grey px-8 py-6 font-bold">
            <Link to="/contact">JOIN THE FIRM</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
