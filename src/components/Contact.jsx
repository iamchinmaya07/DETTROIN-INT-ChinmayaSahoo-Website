import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">Admissions Desk</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 mb-4">
              Schedule Your Campus Visit
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Experience our vibrant classrooms, meet our educators, and explore our 9-acre facility firsthand.
            </p>

            <div className="space-y-4 text-xs text-slate-300">
              <div className="p-4 glass-panel rounded-2xl flex items-start gap-3">
                <MapPin className="text-amber-400 shrink-0 mt-0.5" size={18} />
                <div>
                  <span className="font-bold text-white block mb-0.5">Campus Location</span>
                  <span>Near Manjri Stud Farm, Manjri, Pune - 412307, Maharashtra</span>
                </div>
              </div>

              <div className="p-4 glass-panel rounded-2xl flex items-start gap-3">
                <Phone className="text-amber-400 shrink-0 mt-0.5" size={18} />
                <div>
                  <span className="font-bold text-white block mb-0.5">Direct Line</span>
                  <span>{schoolInfo.phone}</span>
                </div>
              </div>

              <div className="p-4 glass-panel rounded-2xl flex items-start gap-3">
                <Clock className="text-amber-400 shrink-0 mt-0.5" size={18} />
                <div>
                  <span className="font-bold text-white block mb-0.5">Visiting Hours</span>
                  <span>Monday through Saturday: 8:30 AM to 3:30 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 rounded-3xl border border-slate-800 shadow-2xl relative">
              {submitted ? (
                <div className="text-center py-16">
                  <CheckCircle2 size={56} className="text-amber-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Inquiry Successfully Sent</h3>
                  <p className="text-slate-400 text-sm max-w-md mx-auto">
                    Thank you, Chinmaya. Our admissions counselor will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-white mb-4">Online Admission Inquiry</h3>
                  
                  <div>
                    <label className="block text-slate-300 text-[11px] font-bold uppercase tracking-wider mb-1.5">Parent / Guardian Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Chinmaya Sahoo"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-xs focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 text-[11px] font-bold uppercase tracking-wider mb-1.5">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="parent@example.com"
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-xs focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 text-[11px] font-bold uppercase tracking-wider mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-xs focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 text-[11px] font-bold uppercase tracking-wider mb-1.5">Target Grade Level</label>
                    <select className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-xs focus:outline-none focus:border-amber-500">
                      <option>Pre-Primary Wing (Nursery - KG)</option>
                      <option>Primary School (Grades 1 - 5)</option>
                      <option>Middle School (Grades 6 - 8)</option>
                      <option>Senior Secondary (Grades 9 - 12)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold py-4 rounded-xl text-xs uppercase tracking-widest transition-all duration-200 shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 mt-2"
                  >
                    <span>Submit Official Application</span>
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}