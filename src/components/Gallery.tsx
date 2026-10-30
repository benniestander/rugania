import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';

const galleryImages = [
    'Gallery0.jpg', 'Gallery1.jpg', 'Gallery2.jpg', 'Gallery5.jpg', 'Gallery7.jpg',
    'Gallery8.jpg', 'Gallery10.jpg', 'Gallery13.jpg',
    'Gallery14.jpg', 'Gallery15.jpg', 'Gallery16.jpg', 'Gallery19.jpg',
    'Gallery20.jpg', 'Gallery21.jpg', 'Gallery22.jpg', 'Gallery23.jpg', 'Gallery24.jpg',
    'Gallery25.jpg', 'Gallery26.jpg', 'Gallery27.jpg', 'Gallery28.jpg', 'Gallery29.jpg',
    'Gallery31.jpg', 'Gallery32.jpg', 'Gallery33.jpg', 'Gallery34.jpg', 'Gallery36.jpg',
    'Gallery37.jpg', 'Gallery38.jpg', 'Gallery39.jpg', 'Gallery41.jpg', 'Gallery42.jpg',
    'Gallery43.jpg', 'Gallery49.jpg',
    'Gallery50.jpg', 'Gallery54.jpg',
    'Gallery55.jpg', 'Gallery57.jpg', 'Gallery58.jpg', 'Gallery60.jpg',
    'Gallery62.jpg', 'Gallery63.jpg', 'Gallery64.jpg'
].map(img => `/Rugania Files/Gallery/${img}`);

interface GalleryProps {
    showTitle?: boolean;
}

const Gallery: React.FC<GalleryProps> = ({ showTitle = true }) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section className="py-32 px-6 bg-white" id="gallery">
            <div className="max-w-7xl mx-auto">
                {showTitle && (
                    <div className="mb-20 text-center">
                        <span className="text-rugania-gold uppercase tracking-[0.3em] text-[10px] font-black">Visual Heritage</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 serif text-rugania-green">The Rugania Gallery</h2>
                        <p className="text-rugania-slate max-w-2xl mx-auto leading-relaxed font-medium">
                            A window into our 5,000ha sanctuary. Witness the raw beauty of the North West province, captured through the lens of local explorers.
                        </p>
                    </div>
                )}

                {/* Masonry Grid using CSS Columns */}
                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                    {galleryImages.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index % 5 * 0.1 }}
                            viewport={{ once: true }}
                            className="relative group cursor-pointer break-inside-avoid overflow-hidden rounded-sm"
                            onClick={() => setSelectedImage(src)}
                        >
                            <img
                                src={src}
                                alt={`Rugania Gallery ${index}`}
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-rugania-green/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <Maximize2 className="text-white" size={32} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox / Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-rugania-green/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-10 right-10 text-white hover:text-rugania-gold transition-colors z-[110]"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={40} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-7xl max-h-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage}
                                alt="Rugania Full View"
                                className="max-w-full max-h-[85vh] object-contain shadow-2xl border border-white/10"
                            />
                            <div className="absolute -bottom-16 left-0 right-0 text-center text-white/50 text-[10px] uppercase tracking-[0.4em] font-black">
                                Rugania Game Park | Refined Wilderness
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
