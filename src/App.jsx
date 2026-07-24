import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero.jsx';
import About from './components/About';
import Academics from './components/Academics';
import Facilities from './components/Facilities';
import Contact from './components/Contact';
import { statistics, schoolInfo } from './data/schoolData';
import Gallery from './components/Gallery';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      <Navbar />
      
      <main>
        <Hero />

        {/* Quick Statistics Banner */}
        <section className="bg-slate-900 py-12 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {statistics.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl lg:text-4xl font-extrabold text-amber-400 tracking-tight">{stat.value}</div>
                  <div className="text-white font-semibold text-xs sm:text-sm mt-1">{stat.label}</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <About />
        <Academics />
        <Facilities />
        <Gallery />
        <Contact />
      </main>

      <footer className="bg-slate-950 py-8 border-t border-slate-900 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center sm:flex sm:justify-between sm:items-center">
          <p>© 2026 {schoolInfo.name}. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Dettroin Full Stack Developer Internship Challenge</p>
        </div>
      </footer>
    </div>
  );
}