import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Users, Bed, Home, CheckCircle, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const Aalwynpark: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    const images = [
        "/Rugania Files/Aalwynpark Gallery/Aalwynpark_1_202603190837.jpeg",
        "/Rugania Files/Aalwynpark Gallery/Aalwynpark_2_202603190838.jpeg",
        "/Rugania Files/Aalwynpark Gallery/Aalwynpark_3_202603190838.jpeg",
        "/Rugania Files/Aalwynpark Gallery/Aalwynpark_4_202603190838.jpeg",
        "/Rugania Files/Aalwynpark Gallery/Aalwynpark_5_202603190838.jpeg",
        "/Rugania Files/Aalwynpark Gallery/Aalwynpark_8_202603190838.jpeg",
        "/Rugania Files/Aalwynpark Gallery/Aalwynpark_10_202603190838.jpeg",
        "/Rugania Files/Aalwynpark Gallery/Aalwynpark_11_202603190838.jpeg",
        "/Rugania Files/Aalwynpark Gallery/Aalwynpark_12_202603190838.jpeg",
        "/Rugania Files/Aalwynpark Gallery/Aalwyn_12_202603190839.jpeg",
        "/Rugania Files/Aalwynpark Gallery/Aalwyn_13_202603190839.jpeg",
        "/Rugania Files/Aalwynpark Gallery/Aalwyn_14_202603190839.jpeg",
        "/Rugania Files/Aalwynpark Gallery/Aalwyn_15_202603190840.jpeg",
        "/Rugania Files/Aalwynpark Gallery/Aalwyn_16_202603190840.jpeg",
        "/Rugania Files/Aalwynpark Gallery/Aalwyn_17_202603190840.jpeg",
        "/Rugania Files/Aalwynpark Gallery/Aalwyn_19_202603190840.jpeg",
        "/Rugania Files/Aalwynpark Gallery/DSCN0540.JPG_202603190838.jpeg"
    ];

    const features = [
        { icon: Bed, text: "6 Luxury Bedrooms" },
        { icon: Users, text: "Sleeps up to 12 Guests" },
        { icon: Home, text: "Secured Area" },
        { icon: Shield, text: "Malaria-Free Sanctuary" }
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
            <SEO title="Aalwynpark Lodge | Rugania Game Park" description="Aalwynpark at Rugania sleeps up to 12 guests in the Groot Marico bushveld. Perfect for family getaways, hunting safaris, and group adventures." />
            {/* Hero Header */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-rugania-green text-center px-6">
                <div className="absolute inset-0 opacity-50">
                    <img
                        src="/Rugania Files/Aalwynpark Gallery/Aalwyn_19_202603190840.jpeg"
                        alt="Aalwynpark Lodge View"
                        className="w-full h-full object-cover scale-110"
                    />
                </div>
                <div className="relative z-10 max-w-4xl mt-16">
                    <span className="text-rugania-gold uppercase tracking-[0.5em] text-[10px] font-black mb-6 block">Premium Stay</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 serif">Aalwynpark</h1>
                    <div className="w-16 h-1 bg-rugania-gold mx-auto mb-8"></div>
                    <p className="text-white text-xl font-medium leading-relaxed italic opacity-95 max-w-2xl mx-auto shadow-sm">
                        "Named after the iconic Aloe ferox that defines our landscape, Aalwynpark offers a hilltop sanctuary for large groups and families."
                    </p>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
                    <div className="w-full lg:w-1/2">
                        <span className="text-rugania-gold uppercase tracking-[0.3em] text-[10px] font-black">Architecture</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-8 serif text-rugania-green leading-tight">Elite Bushveld Comfort</h2>
                        <p className="text-rugania-slate leading-relaxed text-lg mb-10 font-medium">
                            Aalwynpark is our premier accommodation offering, designed for corporate retreats or large family gatherings. 
                            Situated on a gentle rise, it provides panoramic views of the Selons River valley and the surrounding hills.
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
                            {features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-4 group">
                                    <feature.icon className="text-rugania-gold group-hover:scale-110 transition-transform" size={24} />
                                    <span className="text-rugania-green font-bold text-sm tracking-wide uppercase">{feature.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4">
                            {[
                                "Fully equipped kitchen and catering options.",
                                "Large outdoor deck for evening fires and stargazing.",
                                "Private location ensuring total seclusion from other guests.",
                                "Close proximity to main hiking and game paths."
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
                            src="/Rugania Files/Accommodation/AalwynparkNEW8.jpg"
                            alt="Aalwynpark Exterior"
                            className="relative z-10 w-full h-[600px] object-cover rounded-sm shadow-2xl border border-black/5"
                        />
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-32 px-6 bg-paper-texture border-y border-rugania-green/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <span className="text-rugania-gold uppercase tracking-[0.3em] text-[10px] font-black">Visual Experience</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 serif text-rugania-green">The Aalwynpark Gallery</h2>
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
                                    alt={`Aalwynpark view ${i + 1}`}
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
                                alt="Aalwynpark Full View"
                                className="max-w-full max-h-[85vh] object-contain shadow-2xl border border-white/5 bg-black"
                            />
                            <div className="absolute -bottom-16 left-0 right-0 text-center flex flex-col gap-2">
                                <span className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-black">
                                    Rugania Experience | Aalwynpark Lodge
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 serif text-rugania-green">Secure Your Hilltop Escape</h2>
                    <p className="text-rugania-slate text-lg mb-12 font-medium italic">
                        "Experience the quiet authority of the North West from the comfort of Aalwynpark."
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

export default Aalwynpark;
