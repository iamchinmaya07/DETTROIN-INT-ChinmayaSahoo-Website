import React, { useState } from 'react';
import { facilitiesData } from '../data/schoolData';

export default function Facilities() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Academic', 'Sports', 'Infrastructure'];

  const filteredItems = filter === 'All' 
    ? facilitiesData 
    : facilitiesData.filter(item => item.category === filter);

  return (
    <section id="facilities" className="py-24 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold px-3 py-1 bg-amber-500/10 rounded-full border border-amber-500/20">
            Campus Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4">
            9-Acre Modern Infrastructure
          </h2>
        </div>

        {/* Category Selector */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                filter === cat
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="glass-card rounded-2xl overflow-hidden border border-slate-800 group hover:border-amber-500/40 transition-colors">
              <div className="h-52 overflow-hidden relative">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-amber-400 border border-slate-800">
                  {item.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}