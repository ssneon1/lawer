
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, MapPin, MessageSquare, Scale, Clock, Shield, Users } from "lucide-react";
import { SectionTransition } from "@/components/PageTransition";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-legal-white pb-20 md:pb-0">
      {/* 404 Section */}
      <div className="py-12 md:py-20 flex items-center justify-center px-4">
        <SectionTransition delay={100}>
          <div className="text-center max-w-md">
            <div className="bg-legal-white p-8 brutalist-border brutalist-shadow mb-8">
              <h1 className="text-6xl font-bold text-legal-black mb-4">404</h1>
              <h2 className="text-2xl font-bold text-legal-black mb-2">Page Not Found</h2>
            </div>
            
            <p className="text-xl text-legal-grey mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                asChild
                size="lg"
                className="bg-legal-black text-white hover:bg-legal-grey brutalist-border brutalist-shadow font-semibold hover-lift"
              >
                <Link to="/">
                  <Home className="w-5 h-5 mr-2" />
                  Go Home
                </Link>
              </Button>
              
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-legal-black text-legal-black hover:bg-legal-black hover:text-white brutalist-border brutalist-shadow font-semibold hover-lift"
                onClick={() => window.history.back()}
              >
                <span>
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Go Back
                </span>
              </Button>
            </div>
          </div>
        </SectionTransition>
      </div>

      {/* Quick Navigation Section */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-gradient-to-b from-white via-legal-white to-white">
        <SectionTransition delay={200}>
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-legal-black text-center mb-4">
              But you can still explore
            </h3>
            <p className="text-legal-grey text-center mb-12">
              Check out our main sections for legal insights and services
            </p>

            {/* Navigation Cards */}
            <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                {
                  icon: Home,
                  title: "Home",
                  description: "Discover our services and expertise",
                  link: "/",
                },
                {
                  icon: Users,
                  title: "About Us",
                  description: "Meet our legal team",
                  link: "/about",
                },
                {
                  icon: Scale,
                  title: "Practice Areas",
                  description: "Explore our specializations",
                  link: "/practice-areas",
                },
                {
                  icon: MessageSquare,
                  title: "Contact",
                  description: "Get in touch with us",
                  link: "/contact",
                },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  to={item.link}
                  className="group p-6 brutalist-border brutalist-shadow bg-legal-white hover:bg-gray-50 transition-all duration-300 hover-lift"
                >
                  <item.icon className="w-8 h-8 text-legal-yellow mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-legal-black mb-2 group-hover:text-legal-yellow transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-legal-grey">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </SectionTransition>
      </section>

      {/* Services Overview Section */}
      <section className="py-12 md:py-16 px-4 md:px-8">
        <SectionTransition delay={300}>
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-legal-black text-center mb-12">
              Why Choose Leo Juris?
            </h3>

            <div className="grid xs:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: Shield,
                  title: "Expert Advocates",
                  description: "Our team of experienced advocates specializes in dowry cases, criminal defense, and corporate law.",
                },
                {
                  icon: Clock,
                  title: "Quick Response",
                  description: "We understand the urgency of legal matters. Get immediate consultation and timely assistance.",
                },
                {
                  icon: MapPin,
                  title: "Accessible",
                  description: "Located conveniently for client consultations with online meeting options available.",
                },
              ].map((item, idx) => (
                <div key={idx} className="text-center p-8 brutalist-border brutalist-shadow bg-legal-white hover:shadow-lg transition-shadow">
                  <item.icon className="w-10 h-10 text-legal-yellow mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-legal-black mb-3">{item.title}</h4>
                  <p className="text-legal-grey text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionTransition>
      </section>

      {/* Specializations Section */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-gray-50">
        <SectionTransition delay={400}>
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-legal-black text-center mb-4">
              Our Practice Areas
            </h3>
            <p className="text-legal-grey text-center mb-12">
              Comprehensive legal solutions across multiple domains
            </p>

            <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Dowry Cases & Cases Against Women",
                "Criminal Defense & Prosecution Support",
                "Corporate & Commercial Law",
                "Family Law & Matrimonial Disputes",
                "Civil Litigation",
                "Legal Consultation & Advisory",
              ].map((area, idx) => (
                <div key={idx} className="p-4 md:p-6 brutalist-border bg-legal-white hover:bg-legal-yellow/10 transition-colors">
                  <h4 className="font-bold text-legal-black hover:text-legal-yellow transition-colors">
                    {area}
                  </h4>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                asChild
                size="lg"
                className="bg-legal-black text-white hover:bg-legal-grey brutalist-border brutalist-shadow font-semibold hover-lift"
              >
                <Link to="/practice-areas">
                  View All Practice Areas
                </Link>
              </Button>
            </div>
          </div>
        </SectionTransition>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 px-4 md:px-8">
        <SectionTransition delay={500}>
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-legal-black mb-6">
              Need Legal Assistance?
            </h3>
            <p className="text-legal-grey text-lg mb-8">
              Our expert legal team is ready to help you with your case. Get professional advice and representation from experienced advocates.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-legal-black text-white hover:bg-legal-grey brutalist-border brutalist-shadow font-semibold hover-lift"
              >
                <Link to="/contact">
                  📞 Contact Our Legal Team
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-legal-black text-legal-black hover:bg-legal-black hover:text-white brutalist-border brutalist-shadow font-semibold hover-lift"
              >
                <Link to="/">
                  📖 Read Our Blog
                </Link>
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t-2 border-legal-black">
              <p className="text-sm text-legal-grey mb-4">
                📍 Located in major legal hubs | 📱 Available for online consultations
              </p>
            </div>
          </div>
        </SectionTransition>
      </section>
    </div>
  );
};

export default NotFound;
