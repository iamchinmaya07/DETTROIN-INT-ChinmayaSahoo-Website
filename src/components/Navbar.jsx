import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Award, ChevronDown, MapPin } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [academicsDropdown, setAcademicsDropdown] = useState(false);

  // Official Kalyani School Online Admission URL
  const ADMISSION_URL = "https://www.thekalyanischool.com/admissions/online-admission";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Banner */}
      <div className="bg-slate-950/90 text-slate-300 border-b border-slate-800/80 px-4 py-1.5 text-xs">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Phone size={13} className="text-amber-400" />
              {schoolInfo.phone.split('/')[0]}
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Mail size={13} className="text-amber-400" />
              {schoolInfo.email}
            </span>
            <span className="hidden lg:flex items-center gap-1.5 text-slate-400">
              <MapPin size={13} className="text-amber-400" />
              {schoolInfo.location}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={ADMISSION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 text-[11px] font-medium border border-amber-500/20 hover:bg-amber-500/20 transition-colors"
            >
              <Award size={12} />
              Admissions Open {schoolInfo.admissionsOpenYear}
            </a>
          </div>
        </div>
      </div>

      {/* Glass Floating Nav */}
      <nav className={`px-4 lg:px-8 py-3 transition-all duration-300 ${
        isScrolled ? 'glass-panel shadow-2xl shadow-slate-950/50 py-2.5' : 'bg-slate-900/60 backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center font-extrabold text-slate-950 text-2xl shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              K
            </div>
            <div>
              <span className="text-lg md:text-xl font-extrabold text-white tracking-tight block leading-tight">
                {schoolInfo.name}
              </span>
              <span className="text-[11px] text-amber-400 font-semibold tracking-wider uppercase block">
                {schoolInfo.affiliation}
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-7">
            <a href="#home" className="text-slate-200 hover:text-amber-400 font-medium text-sm transition-colors">Home</a>
            <a href="#about" className="text-slate-200 hover:text-amber-400 font-medium text-sm transition-colors">About Us</a>
            
            {/* Dropdown Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setAcademicsDropdown(true)}
              onMouseLeave={() => setAcademicsDropdown(false)}
            >
              <a 
                href="#academics" 
                className="text-slate-200 hover:text-amber-400 font-medium text-sm transition-colors inline-flex items-center gap-1 py-1"
              >
                Academics <ChevronDown size={14} />
              </a>

              {academicsDropdown && (
                <div className="absolute top-full left-0 w-56 glass-panel rounded-xl p-2 shadow-xl border border-slate-700/50 flex flex-col gap-1 z-50">
                  {[
                    { name: 'Pre-Primary Wing', id: 'pre-primary' },
                    { name: 'Primary Curriculum', id: 'primary' },
                    { name: 'Middle School STEM', id: 'middle' },
                    { name: 'Senior Secondary Streams', id: 'senior' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setAcademicsDropdown(false);
                        // Dispatch event to activate selected wing card in Academics.jsx
                        window.dispatchEvent(new CustomEvent('select-wing', { detail: item.id }));
                        // Smooth scroll to section
                        document.getElementById('academics')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-left px-3 py-2 text-xs text-slate-200 hover:bg-slate-800 hover:text-amber-400 rounded-lg transition-colors cursor-pointer"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a href="#facilities" className="text-slate-200 hover:text-amber-400 font-medium text-sm transition-colors">Facilities</a>
            <a href="#gallery" className="text-slate-200 hover:text-amber-400 font-medium text-sm transition-colors">Campus Gallery</a>
            <a href="#contact" className="text-slate-200 hover:text-amber-400 font-medium text-sm transition-colors">Contact</a>

            {/* Direct Official Link */}
            <a
              href={ADMISSION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold px-5 py-2.5 rounded-full text-xs uppercase tracking-wider transition-all duration-200 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transform hover:-translate-y-0.5"
            >
              Apply Online
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg bg-slate-800/80 border border-slate-700"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Slideout */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-6 mt-3 border-t border-slate-800 flex flex-col gap-3">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 hover:text-amber-400 font-medium text-sm px-2 py-1">Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 hover:text-amber-400 font-medium text-sm px-2 py-1">About Us</a>
            <a href="#academics" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 hover:text-amber-400 font-medium text-sm px-2 py-1">Academics & Wings</a>
            <a href="#facilities" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 hover:text-amber-400 font-medium text-sm px-2 py-1">Infrastructure</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 hover:text-amber-400 font-medium text-sm px-2 py-1">Photo Gallery</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-slate-200 hover:text-amber-400 font-medium text-sm px-2 py-1">Admissions & Contact</a>
            
            {/* Direct Official Link for Mobile */}
            <a
              href={ADMISSION_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-amber-500 text-slate-950 font-bold text-center py-3 rounded-xl text-xs uppercase tracking-wider mt-2 shadow-lg"
            >
              Apply Online Now
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}