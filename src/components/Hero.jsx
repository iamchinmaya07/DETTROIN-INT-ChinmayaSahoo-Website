import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Sparkles, Play } from 'lucide-react';
import { heroSlides, schoolInfo } from '../data/schoolData';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center bg-slate-950 overflow-hidden">
      
      {/* Dynamic Background Image Slider with Overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={heroSlides[currentSlide].id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.35, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroSlides[currentSlide].image}')` }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent z-0" />

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-amber-500/30 text-amber-400 text-xs font-semibold mb-6"
            >
              <Sparkles size={14} />
              <span>{heroSlides[currentSlide].badge}</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none mb-6"
            >
              {heroSlides[currentSlide].title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              key={`sub-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-slate-300 text-base sm:text-lg max-w-2xl mb-8 leading-relaxed font-normal"
            >
              {heroSlides[currentSlide].subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-extrabold px-8 py-4 rounded-full text-sm uppercase tracking-wider transition-all duration-200 shadow-xl shadow-amber-500/20 transform hover:-translate-y-0.5"
              >
                <span>Admissions 2026-27</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="#facilities"
                className="inline-flex items-center justify-center gap-2.5 glass-panel hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold px-8 py-4 rounded-full text-sm transition-all"
              >
                <Play size={16} className="text-amber-400 fill-amber-400" />
                <span>Virtual Campus Tour</span>
              </a>
            </div>

            {/* Indicators & Manual Controls */}
            <div className="mt-12 flex items-center gap-4">
              <div className="flex items-center gap-2">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentSlide === idx ? 'w-8 bg-amber-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2 ml-4">
                <button
                  onClick={prevSlide}
                  className="w-9 h-9 rounded-full glass-panel flex items-center justify-center text-slate-300 hover:text-white hover:border-amber-400 transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-9 h-9 rounded-full glass-panel flex items-center justify-center text-slate-300 hover:text-white hover:border-amber-400 transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

          </div>

          {/* Quick Highlight Floating Card */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="glass-card p-6 rounded-3xl border border-slate-700/60 shadow-2xl relative">
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-amber-500 text-slate-950 rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg">
                #1
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Why The Kalyani School?</h3>
              <p className="text-slate-300 text-xs leading-relaxed mb-6">
                Promoted by the Akshara Holding Trust, combining global educational standards with rich Indian values.
              </p>
              
              <div className="space-y-3 border-t border-slate-800 pt-4 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-amber-400" />
                  <span>Comprehensive CBSE Board Standard</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-amber-400" />
                  <span>State-of-the-Art Sports Complex</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-amber-400" />
                  <span>1:15 Individual Attention Ratio</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}