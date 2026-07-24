import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, Award, ShieldCheck, HeartHandshake, Sparkles, UserCheck } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

export default function About() {
  const [activeTab, setActiveTab] = useState('mission');

  const values = [
    {
      icon: Award,
      title: "Academic Excellence",
      desc: "Delivering a comprehensive CBSE curriculum enriched with modern STEM, humanities, and research-driven learning."
    },
    {
      icon: HeartHandshake,
      title: "Holistic Development",
      desc: "Equal emphasis on sports, performing arts, public speaking, and leadership through inter-school competitions."
    },
    {
      icon: ShieldCheck,
      title: "Ethical & Global Values",
      desc: "Instilling strong moral integrity, empathy, environmental responsibility, and respect for cultural diversity."
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-900 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold px-3 py-1 bg-amber-500/10 rounded-full border border-amber-500/20 inline-flex items-center gap-1.5">
            <Sparkles size={13} />
            About Our Institution
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4">
            Guided by Integrity, Driven by Excellence
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base leading-relaxed">
            Promoted by the Akshara Holding Trust, {schoolInfo.name} is dedicated to fostering global leaders equipped with wisdom, character, and innovative vision.
          </p>
        </div>

        {/* Feature Grid: Image + Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[420px] rounded-3xl overflow-hidden border border-slate-800 glass-card shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80"
                alt="The Kalyani School Campus"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            </div>

            {/* Overlay Badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 glass-panel p-5 rounded-2xl border border-slate-700/80 shadow-2xl max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold shrink-0">
                  <UserCheck size={20} />
                </div>
                <div>
                  <h4 className="text-white text-xs font-bold">Akshara Holding Trust</h4>
                  <p className="text-slate-400 text-[11px] mt-0.5">Visionary educational leadership</p>
                </div>
              </div>
            </div>
          </div>

          {/* Vision/Mission Tabs */}
          <div className="lg:col-span-6">
            <div className="flex gap-2 mb-6 border-b border-slate-800 pb-3">
              <button
                onClick={() => setActiveTab('mission')}
                className={`px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                  activeTab === 'mission'
                    ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                    : 'text-slate-400 hover:text-white bg-slate-950 border border-slate-800'
                }`}
              >
                <Target size={15} />
                Our Mission
              </button>
              <button
                onClick={() => setActiveTab('vision')}
                className={`px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                  activeTab === 'vision'
                    ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                    : 'text-slate-400 hover:text-white bg-slate-950 border border-slate-800'
                }`}
              >
                <Compass size={15} />
                Our Vision
              </button>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-slate-800">
              {activeTab === 'mission' ? (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <h3 className="text-xl font-bold text-white mb-3">Empowering Every Scholar</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    Our mission is to create a safe, nurturing, and stimulating learning environment that encourages academic mastery, personal responsibility, and ethical leadership.
                  </p>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    Through innovative teaching practices, individual care, and continuous skill refinement, we empower students to transform challenges into meaningful contributions for society.
                  </p>
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <h3 className="text-xl font-bold text-white mb-3">A Global Standard of Education</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    To be recognized as a benchmark institution that combines traditional values with forward-thinking educational practices.
                  </p>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    We envision a community of curious learners, compassionate citizens, and creative thinkers capable of excelling in an interconnected, rapidly evolving global landscape.
                  </p>
                </motion.div>
              )}
            </div>
          </div>

        </div>

        {/* Core Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div key={idx} className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-slate-800 text-amber-400 flex items-center justify-center mb-4">
                  <Icon size={20} />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{val.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{val.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}