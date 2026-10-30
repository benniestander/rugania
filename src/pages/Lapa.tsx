import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Wind, Waves, Leaf, CheckCircle, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const Lapa: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    const images = [
        "/Rugania Files/Lapa Gallery/Lapa1_202603191440.jpeg",
        "/Rugania Files/Lapa Gallery/Lapa3_202603191440.jpeg",
        "/Rugania Files/Lapa Gallery/Lapa4_202603191440.jpeg",
        "/Rugania Files/Lapa Gallery/Lapa5_202603191440.jpeg",
        "/Rugania Files/Lapa Gallery/Lapa6_202603191440.jpeg",
        "/Rugania Files/Lapa Gallery/Lapa7_202603191440.jpeg",
        "/Rugania Files/Lapa Gallery/Lapa8_202603191439.jpeg",
        "/Rugania Files/Lapa Gallery/Lapa10_202603191439.jpeg",
        "/Rugania Files/Lapa Gallery/Lapa11_202603191439.jpeg",
        "/Rugania Files/Lapa Gallery/Lapa12_202603191500.jpeg",
        "/Rugania Files/Lapa Gallery/Lapa13_202603191507.jpeg",
        "/Rugania Files/Lapa Gallery/Lapa14_202603191508.jpeg"
    ];

    const features = [
        { icon: Flame, text: "Central Fire Pit" },
        { icon: Wind, text: "Off-Grid Experience" },
        { icon: Waves, text: "Riverbank Proximity" },
        { icon: Leaf, text: "Unspoiled Nature" }
    ];

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (currentIndex !== null) {
            setCurrentIndex((currentIndex + 1) % images.length);
        }
    };

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (currentIndex !== null) {
            setCurrentIndex((currentIndex - 1 + images.length) % images.length);
        }
    };

    return (
        <div className="bg-white">
            <SEO title="The Lapa | Bush Camp | Rugania Game Park" description="The Lapa is Rugania's authentic bush camp on the banks of the Selons River — perfect for hunting groups and intimate bush gatherings." />
            {/* Hero Header */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-rugania-green text-center px-6">
                <div className="absolute inset-0 opacity-50">
                    <img
                        src="/Rugania Files/Lapa Gallery/Lapa1_202603191440.jpeg"
                        alt="The Lapa Bush Camp View"
                        className="w-full h-full object-cover scale-110"
                    />
                </div>
                <div className="relative z-10 max-w-4xl mt-16">
                    <span className="text-rugania-gold uppercase tracking-[0.5em] text-[10px] font-black mb-6 block">The Real Bush Camp</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 serif">The Lapa</h1>
                    <div className="w-16 h-1 bg-rugania-gold mx-auto mb-8"></div>
                    <p className="text-white text-xl font-medium leading-relaxed italic opacity-95 max-w-2xl mx-auto shadow-sm">
                        "Unplug and unwind. For the purist who wants the sound of the night wind and the glow of the fire—without the city distractions."
                    </p>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
                    <div className="w-full lg:w-1/2">
                        <span className="text-rugania-gold uppercase tracking-[0.3em] text-[10px] font-black">Atmosphere</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-8 serif text-rugania-green leading-tight">Authentic Groot-Marico Living</h2>
                        <p className="text-rugania-slate leading-relaxed text-lg mb-10 font-medium">
                            The Lapa is our most authentic accommodation offering, designed for those who want to be at one with the 
                            unique stillness and raw spirit of the Marico bushveld. Situated near the banks of the Selons River, 
                            it offers a true off-grid experience where the only soundtrack is the whisper of the trees and 
                            the flow of the water.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-8 mb-12">
                            {features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-4 group">
                                    <feature.icon className="text-rugania-gold group-hover:scale-110 transition-transform" size={24} />
                                    <span className="text-rugania-green font-bold text-sm tracking-wide uppercase">{feature.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4">
                            {[
                                "Traditional boma for authentic starlit evenings.",
                                "Secluded location near the life-giving Selons River.",
                                "Ideal for those seeking a primitive, soulful escape.",
                                "Located at the heart of our most active game paths."
                            ].map((text, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <CheckCircle size={18} className="text-rugania-gold shrink-0 mt-1" />
                                    <p className="text-rugania-slate italic tracking-wide">{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="w-full lg:w-1/2 relative">
                        <div className="absolute -inset-4 bg-rugania-gold/5 rounded-full blur-3xl"></div>
                        <img
                            src="/Rugania Files/Lapa Gallery/Lapa3_202603191440.jpeg"
                            alt="The Lapa Exterior"
                            className="relative z-10 w-full h-[300px] md:h-[600px] object-cover rounded-sm shadow-2xl border border-black/5"
                        />
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-32 px-6 bg-paper-texture border-y border-rugania-green/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <span className="text-rugania-gold uppercase tracking-[0.3em] text-[10px] font-black">Visual Experience</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 serif text-rugania-green">The Lapa Gallery</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {images.map((image, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: (i % 6) * 0.1 }}
                                viewport={{ once: true }}
                                className="aspect-video relative group cursor-pointer overflow-hidden rounded-sm shadow-lg border border-black/10 transition-all duration-500 hover:shadow-2xl"
                                onClick={() => setCurrentIndex(i)}
                            >
                                <img
                                    src={image}
                                    alt={`Lapa view ${i + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-rugania-green/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <Maximize2 className="text-white" size={32} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox / Slider Modal */}
            <AnimatePresence>
                {currentIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-rugania-green/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12"
                        onClick={() => setCurrentIndex(null)}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-10 right-10 text-white hover:text-rugania-gold transition-colors z-[110]"
                            onClick={() => setCurrentIndex(null)}
                        >
                            <X size={48} />
                        </button>

                        {/* Prev Button */}
                        <button
                            className="absolute left-4 md:left-10 text-white hover:text-rugania-gold transition-colors z-[110]"
                            onClick={prevImage}
                        >
                            <ChevronLeft size={64} strokeWidth={1} />
                        </button>

                        {/* Next Button */}
                        <button
                            className="absolute right-4 md:right-10 text-white hover:text-rugania-gold transition-colors z-[110]"
                            onClick={nextImage}
                        >
                            <ChevronRight size={64} strokeWidth={1} />
                        </button>

                        <motion.div
                            key={currentIndex}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="relative max-w-7xl w-full max-h-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={images[currentIndex]}
                                alt="Lapa Full View"
                                className="max-w-full max-h-[85vh] object-contain shadow-2xl border border-white/5 bg-black"
                            />
                            <div className="absolute -bottom-16 left-0 right-0 text-center flex flex-col gap-2">
                                <span className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-black">
                                    Rugania Experience | The Lapa
                                </span>
                                <span className="text-rugania-gold text-xs font-bold font-serif italic">
                                    Image {currentIndex + 1} of {images.length}
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Inquiry Section */}
            <section className="py-32 px-6 bg-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 serif text-rugania-green">Answer the Call of the Wild</h2>
                    <p className="text-rugania-slate text-lg mb-12 font-medium italic">
                        "Experience the raw, unhurried magic of Rugania from the heart of The Lapa."
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <a 
                            href="mailto:info@rugania.co.za"
                            className="bg-rugania-green text-white px-12 py-5 rounded-none font-black uppercase tracking-[0.4em] text-[10px] hover:bg-rugania-gold transition-all duration-500 shadow-xl"
                        >
                            Inquire Now
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Lapa;
