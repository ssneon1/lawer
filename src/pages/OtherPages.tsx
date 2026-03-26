import React from 'react';
import { Home, Gavel, Mail, Scale } from 'lucide-react';

export const HomePage = () => (
  <div className="py-24 text-center">
    <div className="bg-sky-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8">
      <Home size={40} className="text-sky-600" />
    </div>
    <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Welcome to LEO JURIS</h2>
    <p className="text-slate-500 max-w-2xl mx-auto">Your trusted partner for expert legal solutions. We are currently updating our home page to serve you better.</p>
  </div>
);

export const PracticeAreasPage = () => (
  <div className="py-24 text-center">
    <div className="bg-amber-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8">
      <Gavel size={40} className="text-amber-500" />
    </div>
    <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Our Practice Areas</h2>
    <p className="text-slate-500 max-w-2xl mx-auto">Specializing in Criminal, Civil, and Family Law. Detailed services coming soon.</p>
  </div>
);

export const ContactPage = () => (
  <div className="py-24 text-center">
    <div className="bg-red-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8">
      <Mail size={40} className="text-red-500" />
    </div>
    <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Contact Us</h2>
    <p className="text-slate-500 max-w-2xl mx-auto">Get in touch for a consultation. Use the floating action buttons for immediate assistance.</p>
  </div>
);
