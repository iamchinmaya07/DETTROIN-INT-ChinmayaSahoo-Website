import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Image as ImageIcon } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: "Eco-Friendly 9-Acre Campus",
    category: "Campus",
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80",
    caption: "Panoramic view of our sustainable green academic blocks in Manjri, Pune."
  },
  {
    id: 2,
    title: "Robotics & Innovation Tinkering",
    category: "STEM",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    caption: "Students collaborating on micro-controller automation projects in the STEM lab."
  },
  {
    id: 3,
    title: "Annual Sports Day Meet",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",
    caption: "Inter-house track and field championship at our multi-sport outdoor arena."
  },
  {
    id: 4,
    title: "Interactive Smart Classrooms",
    category: "Campus",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    caption: "Digitally-enabled learning environments fostering active student participation."
  },
  {
    id: 5,
    title: "Cultural Performing Arts Festival",
    category: "Events",
    image: "https://images.unsplash.com/photo-1469488865564-c2de10f69f96?auto=format&fit=crop&w=1200&q=80",
    caption: "Theatrical play staged at the 700-seat state-of-the-art campus auditorium."
  },
  {
    id: 6,
    title: "Semi-Olympic Swimming Championships",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=80",
    caption: "Certified aquatic training sessions supervised by professional coaches."
  },
  {
    id: 7,
    title: "Annual Science Exhibition",
    category: "STEM",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    caption: "Young researchers presenting working scientific models and environmental solutions."
  },
  {
    id: 8,
    title: "Central Knowledge Center",
    category: "Campus",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80",
    caption: "Quiet reading pods and extensive physical/digital reference archives."
  }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeModal, setActiveModal] = useState(null);

  const categories = ['All', 'Campus', 'STEM', 'Sports', 'Events'];

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold px-3 py-1 bg-amber-500/10 rounded-full border border-amber-500/20 inline-flex items-center gap-1.5">
            <ImageIcon size={13} />
            Visual Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4">
            Life at The Kalyani School
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base">
            Take a glance inside our vibrant classrooms, athletic fields, creative arts stages, and innovation centers.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'glass-panel text-slate-300 hover:text-white border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-Style Image Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                onClick={() => setActiveModal(item)}
                className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer border border-slate-800 glass-card shadow-lg"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                <div className="absolute inset-0 p-5 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-amber-400 border border-slate-800 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-md">
                      <ZoomIn size={16} />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-[11px] line-clamp-1 mt-0.5">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModal(null)}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl p-4 sm:p-8 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full glass-panel rounded-3xl overflow-hidden border border-slate-800 shadow-2xl"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-950/80 text-slate-300 hover:text-white flex items-center justify-center border border-slate-800 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="max-h-[70vh] overflow-hidden">
                <img
                  src={activeModal.image}
                  alt={activeModal.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 bg-slate-900 border-t border-slate-800">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                  {activeModal.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-2 mb-1">{activeModal.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{activeModal.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}