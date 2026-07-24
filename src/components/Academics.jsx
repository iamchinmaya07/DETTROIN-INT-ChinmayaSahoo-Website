import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { academicsData } from '../data/schoolData';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function Academics() {
  const [selectedWing, setSelectedWing] = useState(academicsData[0]);

  // Listen for dropdown clicks from Navbar
  useEffect(() => {
    const handleSelectWing = (e) => {
      const targetWing = academicsData.find((wing) => wing.id === e.detail);
      if (targetWing) {
        setSelectedWing(targetWing);
      }
    };

    window.addEventListener('select-wing', handleSelectWing);
    return () => window.removeEventListener('select-wing', handleSelectWing);
  }, []);

  return (
    <section id="academics" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold px-3 py-1 bg-amber-500/10 rounded-full border border-amber-500/20">
            Educational Framework
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4">
            Curriculum Tailored for Every Milestone
          </h2>
          <p className="text-slate-400 mt-4 text-sm sm:text-base">
            Our progressive CBSE learning model seamlessly blends core academics with robotics, co-curricular arts, and physical literacy.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {academicsData.map((wing) => (
            <div
              key={wing.id}
              onClick={() => setSelectedWing(wing)}
              className={`group cursor-pointer rounded-2xl overflow-hidden border transition-all duration-300 ${
                selectedWing.id === wing.id
                  ? 'bg-slate-900 border-amber-500 shadow-xl shadow-amber-500/10'
                  : 'glass-card border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={wing.image}
                  alt={wing.level}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <span className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-[11px] font-semibold text-amber-400 border border-slate-800">
                  {wing.grades}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {wing.level}
                  </h3>
                  <ArrowUpRight size={18} className="text-slate-500 group-hover:text-amber-400 transition-colors" />
                </div>
                <p className="text-slate-400 text-xs line-clamp-3 leading-relaxed mb-4">
                  {wing.description}
                </p>

                <div className="space-y-1.5 border-t border-slate-800/80 pt-3">
                  {wing.highlights.slice(0, 2).map((h, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-300">
                      <CheckCircle2 size={12} className="text-amber-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Active Wing Highlight Drawer */}
        <motion.div
          key={selectedWing.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 glass-panel p-8 rounded-3xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block mb-1">
              Active Focus Wing • {selectedWing.grades}
            </span>
            <h3 className="text-2xl font-bold text-white mb-3">{selectedWing.level} Overview</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">{selectedWing.description}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {selectedWing.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 p-3 bg-slate-900/80 rounded-xl border border-slate-800 text-xs text-slate-200">
                  <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 h-64 rounded-2xl overflow-hidden border border-slate-800">
            <img src={selectedWing.image} alt={selectedWing.level} className="w-full h-full object-cover" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}