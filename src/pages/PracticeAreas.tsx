
import { Link } from "react-router-dom";
import { ArrowRight, Scale, Heart, Users, Gavel, Home, ShieldAlert, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTransition, ElementTransition } from "@/components/PageTransition";

export default function PracticeAreas() {
  const practiceAreas = [
    {
      id: "divorce",
      title: "Divorce Lawyer",
      shortTitle: "FAMILY LITIGATION",
      description: "Top divorce law services in Delhi/NCR — expert support for contested and mutual divorce cases with trusted guidance.",
      fullDescription: "Family disputes are sensitive and can deeply affect your life and peace of mind. At Leo Juris, we combine legal expertise with compassion to resolve matters like divorce, child custody, maintenance, and inheritance.",
      icon: Heart,
      image: "🏛️",
      color: "from-pink-500 to-rose-500",
      link: "/practice/divorce"
    },
    {
      id: "domestic-violence",
      title: "Domestic Violence Lawyer",
      shortTitle: "DOMESTIC VIOLENCE",
      description: "Experienced domestic violence lawyer in Delhi & NCR providing dedicated legal help to protect your rights and ensure your safety.",
      fullDescription: "We provide comprehensive support for victims of domestic violence with compassionate legal representation and swift action.",
      icon: ShieldAlert,
      image: "⚖️",
      color: "from-red-500 to-orange-500",
      link: "/practice/domestic-violence"
    },
    {
      id: "matrimonial",
      title: "Matrimonial Lawyer",
      shortTitle: "MATRIMONIAL LAW",
      description: "Trusted matrimonial lawyer specializing in divorce, alimony, and family disputes — protecting your interests with care and professionalism.",
      fullDescription: "Expert guidance in matrimonial matters including marriage registration, separation, and property division.",
      icon: Users,
      image: "💒",
      color: "from-blue-500 to-cyan-500",
      link: "/practice/matrimonial"
    },
    {
      id: "family-disputes",
      title: "Family Disputes Lawyer",
      shortTitle: "FAMILY DISPUTES",
      description: "Best family dispute lawyer in Delhi NCR dedicated to protecting your rights and achieving fair resolutions in family matters.",
      fullDescription: "We handle complex family disputes with expertise in inheritance, property division, and custody arrangements.",
      icon: Home,
      image: "👨‍👩‍👧‍👦",
      color: "from-green-500 to-emerald-500",
      link: "/practice/family-disputes"
    },
    {
      id: "criminal",
      title: "Criminal Defense",
      shortTitle: "CRIMINAL LAW",
      description: "Facing criminal charges or wrongful accusations? We defend your rights at every stage, from FIR to trial.",
      fullDescription: "Sharp legal strategy, fearless representation, and honest advice for your freedom and reputation.",
      icon: Gavel,
      image: "⚖️",
      color: "from-purple-500 to-indigo-500",
      link: "/practice/criminal"
    },
    {
      id: "property",
      title: "Property Litigation",
      shortTitle: "PROPERTY LITIGATION",
      description: "Complex property disputes resolved with thorough documentation review and decisive court representation.",
      fullDescription: "Expert handling of ownership disputes, encroachment issues, and inheritance conflicts with strong legal strategy.",
      icon: Briefcase,
      image: "🏠",
      color: "from-yellow-500 to-amber-500",
      link: "/practice/property"
    },
    {
      id: "money-recovery",
      title: "Money Recovery",
      shortTitle: "MONEY RECOVERY",
      description: "Recover unpaid debts and business dues with clear legal steps and determined follow-up.",
      fullDescription: "From legal notices to recovery suits and enforcement of court decrees.",
      icon: Scale,
      image: "💰",
      color: "from-green-600 to-teal-500",
      link: "/practice/money-recovery"
    },
    {
      id: "court-marriage",
      title: "Court Marriage",
      shortTitle: "COURT MARRIAGE",
      description: "Smooth and legally protected court marriage process handled with care and confidentiality.",
      fullDescription: "Complete guidance from notice drafting to final solemnization with no unnecessary delays.",
      icon: Heart,
      image: "💍",
      color: "from-pink-400 to-rose-400",
      link: "/practice/court-marriage"
    }
  ];

  return (
    <div className="min-h-screen bg-legal-white pb-20 md:pb-0">
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-gradient-to-br from-legal-black to-gray-900">
        <SectionTransition delay={100}>
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bold text-white font-serif mb-6">
              Our Expertise
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive legal solutions across multiple practice areas. Expert advocates ready to serve you.
            </p>
          </div>
        </SectionTransition>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-12 md:py-20 px-4 md:px-8">
        <SectionTransition delay={200}>
          <div className="max-w-7xl mx-auto">
            <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {practiceAreas.map((area, idx) => {
                const IconComponent = area.icon;
                return (
                  <ElementTransition key={area.id} delay={200 + idx * 100} direction="up">
                    <Link
                      to={area.link}
                      className="group h-full flex flex-col"
                    >
                      {/* Card Container */}
                      <div className="bg-legal-white border-2 border-legal-black brutalist-shadow hover:brutalist-shadow hover-3d group-hover:scale-105 transition-all duration-300 h-full overflow-hidden flex flex-col">
                        
                        {/* Image Section */}
                        <div className={`h-32 md:h-40 bg-gradient-to-br ${area.color} flex items-center justify-center text-4xl md:text-5xl animate-fadeIn group-hover:scale-110 transition-transform duration-300`}>
                          {area.image}
                        </div>

                        {/* Icon Badge */}
                        <div className="absolute top-4 left-4 w-12 h-12 md:w-14 md:h-14 rounded-full bg-legal-black flex items-center justify-center">
                          <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-legal-yellow" />
                        </div>

                        {/* Content Section */}
                        <div className="p-4 md:p-6 flex flex-col flex-grow">
                          <h3 className="text-lg md:text-xl font-bold text-legal-black mb-2 group-hover:text-legal-yellow transition-colors duration-300 line-clamp-2">
                            {area.title}
                          </h3>
                          
                          <p className="text-xs md:text-sm text-legal-grey mb-4 flex-grow line-clamp-3">
                            {area.description}
                          </p>

                          {/* View Detail Link */}
                          <div className="flex items-center gap-2 text-legal-black font-semibold group-hover:text-legal-yellow transition-colors duration-300 text-sm md:text-base">
                            <span>View Detail</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </ElementTransition>
                );
              })}
            </div>
          </div>
        </SectionTransition>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-gray-50">
        <SectionTransition delay={300}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-legal-black text-center mb-12 font-serif">
              Why Leo Juris?
            </h2>

            <div className="grid xs:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: "Expert Advocates",
                  description: "Experienced legal professionals with deep knowledge across all practice areas"
                },
                {
                  title: "Client-Centric",
                  description: "Your needs come first. We provide personalized attention to every case"
                },
                {
                  title: "Proven Results",
                  description: "Track record of successful case resolutions and satisfied clients"
                }
              ].map((feature, idx) => (
                <ElementTransition key={idx} delay={400 + idx * 100}>
                  <div className="p-6 md:p-8 brutalist-border bg-legal-white hover:shadow-lg transition-shadow">
                    <h3 className="text-lg md:text-xl font-bold text-legal-black mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-legal-grey">{feature.description}</p>
                  </div>
                </ElementTransition>
              ))}
            </div>
          </div>
        </SectionTransition>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 px-4 md:px-8">
        <SectionTransition delay={500}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-legal-black mb-6">
              Need Legal Help?
            </h2>
            <p className="text-legal-grey text-lg mb-8">
              Choose a practice area above or contact us for a personalized consultation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-legal-black text-white hover:bg-legal-grey brutalist-border brutalist-shadow font-semibold hover-lift"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
              
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-legal-black text-legal-black hover:bg-legal-black hover:text-white brutalist-border brutalist-shadow font-semibold hover-lift"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </SectionTransition>
      </section>
    </div>
  );
}