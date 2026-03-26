import React from 'react';
import { Target, Eye, Shield, Gavel, Handshake, Award } from 'lucide-react';

const AboutContent = () => {
  const values = [
    {
      icon: <Shield className="text-sky-600" size={32} />,
      title: "Unwavering Integrity",
      description: "We uphold the highest ethical standards in all our legal dealings, ensuring transparency and trust."
    },
    {
      icon: <Gavel className="text-sky-600" size={32} />,
      title: "Legal Expertise",
      description: "With over 15 years of experience in high court litigation, we provide deep legal insights and strategies."
    },
    {
      icon: <Handshake className="text-sky-600" size={32} />,
      title: "Client-Centric",
      description: "Our clients are our priority. We listen, understand, and fight for the best possible outcomes."
    },
    {
      icon: <Award className="text-sky-600" size={32} />,
      title: "Proven Results",
      description: "Our track record in criminal and civil law speaks for itself. We deliver success through diligence."
    }
  ];

  return (
    <div className="bg-slate-50 py-20 lg:py-24">
      <div className="container mx-auto px-4">
        
        {/* Our Story Section */}
        <section className="bg-white rounded-3xl p-10 lg:p-16 shadow-xl shadow-slate-200/50 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-serif font-bold text-slate-900 mb-6">Our Story</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Founded by expert advocates with a passion for justice, LEO JURIS has grown from a specialized boutique firm into a comprehensive legal practice in Indore. Our journey began with a simple belief: everyone deserves access to top-tier legal representation, regardless of the complexity of their case.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Over the years, we have successfully represented hundreds of clients in the High Court and district courts, specializing in Criminal Law, Civil Law, and Family Law matters. Our reputation is built on thorough research, strategic thinking, and a relentless pursuit of our clients' rights.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Today, LEO JURIS stands as a beacon of hope and a symbol of legal excellence in central India, continuing to serve with the same dedication that defined our very first case.
              </p>
            </div>
            <div className="bg-slate-100 rounded-2xl h-[400px] flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-sky-600/10 group-hover:bg-sky-600/20 transition-colors duration-500"></div>
              <Scale size={180} className="text-slate-300 group-hover:text-slate-400 transition-all duration-500 group-hover:scale-110" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg">
                <p className="text-sky-600 font-bold">15+ Years of Excellence</p>
                <p className="text-slate-500 text-sm">High Court Advocates & Solicitors</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-sky-600 to-sky-700 rounded-3xl p-10 text-white shadow-xl shadow-sky-200">
            <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 backdrop-blur">
              <Target size={32} />
            </div>
            <h4 className="text-2xl font-serif font-bold mb-4">Our Mission</h4>
            <p className="text-sky-50 leading-relaxed">
              To provide accessible, high-quality legal services that empower individuals and organizations to navigate the complexities of the law with confidence and success.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-10 text-slate-900 shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="bg-sky-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Eye size={32} className="text-sky-600" />
            </div>
            <h4 className="text-2xl font-serif font-bold mb-4">Our Vision</h4>
            <p className="text-slate-600 leading-relaxed">
              To be the most trusted and sought-after legal advocates in Indore, recognized for our unwavering integrity, profound expertise, and commitment to justice for all.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">Our Core Values</h3>
          <p className="text-slate-500 max-w-xl mx-auto">These principles guide every decision we make and every case we take.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-lg shadow-slate-200/40 border border-slate-50 hover-lift transition-all">
              <div className="mb-6">{v.icon}</div>
              <h5 className="text-xl font-bold text-slate-900 mb-3">{v.title}</h5>
              <p className="text-slate-500 text-sm leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

// Internal Import for the placeholder since Scale is used twice
import { Scale } from 'lucide-react';

export default AboutContent;
