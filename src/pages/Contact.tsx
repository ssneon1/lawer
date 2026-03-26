import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";

export default function Contact() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello, I would like to schedule a legal consultation.");
    window.open(`https://wa.me/919999627930?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen py-8 sm:py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-legal-black mb-4 sm:mb-6 font-serif">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg text-legal-grey max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your legal matter? We're here to help. Reach out to us for expert 
            legal consultation and personalized solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Email + WhatsApp Contact */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            <div className="bg-white border-2 border-legal-black rounded-lg shadow-lg p-6 sm:p-8 text-center">
              <Mail className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-4 sm:mb-6 text-legal-blue" />
              <h2 className="text-2xl sm:text-3xl font-bold text-legal-black mb-3 sm:mb-4">Get In Touch</h2>
              <p className="text-sm sm:text-lg text-legal-grey mb-4 sm:mb-6">
                For any legal inquiries or consultation requests, drop us a mail at:
              </p>
              <div className="bg-legal-black text-white p-4 rounded-lg mb-4 sm:mb-6">
                <a 
                  href="mailto:advocatecheerag@gmail.com" 
                  className="text-base sm:text-xl font-semibold hover:text-legal-blue transition-colors break-all"
                >
                  advocatecheerag@gmail.com
                </a>
              </div>
              <p className="text-sm sm:text-base text-legal-grey">
                We'll respond to your inquiry within 24 hours.
              </p>
            </div>

            <div className="bg-green-500 border-2 border-legal-black text-white rounded-lg shadow-lg p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Need Immediate Consultation?</h3>
                  <p className="text-xs sm:text-sm text-green-100">Contact us directly on WhatsApp for urgent legal matters</p>
                </div>
                <Button
                  onClick={handleWhatsApp}
                  className="bg-white text-green-500 hover:bg-gray-100 rounded-lg shadow-md font-semibold px-4 py-3 sm:py-6 touch-target"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-legal-black border-2 border-legal-black text-white rounded-lg shadow-lg p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Contact Info</h3>
              <div className="space-y-4 sm:space-y-5 text-sm sm:text-base">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-legal-blue mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <a href="tel:+919999627930" className="text-gray-300 hover:text-legal-blue transition-colors">+91-9999627930</a>
                    <div className="text-xs text-gray-400">9 AM - 7 PM</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-legal-blue mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <a href="mailto:advocatecheerag@gmail.com" className="text-gray-300 hover:text-legal-blue transition-colors break-all text-xs sm:text-sm">advocatecheerag@gmail.com</a>
                    <div className="text-xs text-gray-400">2 hours response time</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-legal-blue mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Office</div>
                    <div className="text-gray-300 text-xs sm:text-sm">G-1/125, Uttam Nagar<br />New Delhi - 110059</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-legal-blue mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-xs sm:text-sm">Chamber</div>
                    <div className="text-gray-300 text-xs">No. 753-B, Dwarka Court<br />Sector-10 Dwarka<br />New Delhi 110075</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-legal-blue mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Hours</div>
                    <div className="text-gray-300 text-xs sm:text-sm">Mon-Sat: 9 AM - 7 PM<br />Sun: By appointment</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-500 border-2 border-legal-black text-white rounded-lg shadow-lg p-5 sm:p-6 text-center">
              <h3 className="text-base sm:text-lg font-bold mb-2">Emergency Legal Assistance</h3>
              <p className="text-red-100 text-xs sm:text-sm mb-4">
                For urgent legal matters
              </p>
              <Button
                onClick={() => window.location.href = "tel:+919999627930"}
                className="bg-white text-red-500 hover:bg-gray-100 rounded-lg shadow-md font-semibold w-full py-3 sm:py-6 touch-target text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
