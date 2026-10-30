import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Users, Coffee, TreePine, CheckCircle, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const Bosberaad: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    const images = [
        "/Rugania Files/Reception Gallery/office1_202603191515.jpeg",
        "/Rugania Files/Reception Gallery/Office2_202603191515.jpeg",
        "/Rugania Files/Reception Gallery/office4_202603191523.jpeg",
        "/Rugania Files/Reception Gallery/office5_202603191523.jpeg",
        "/Rugania Files/Reception Gallery/office6_202603191526.jpeg",
        "/Rugania Files/Reception Gallery/office7_202603191526.jpeg",
        "/Rugania Files/Reception Gallery/office8_202603191526.jpeg",
        "/Rugania Files/Reception Gallery/office8_202603191529.jpeg",
    ];

    const features = [
        { icon: MapPin, text: "90 min from Joburg & Pretoria" },
        { icon: Users, text: "Small Groups & Teams" },
        { icon: Coffee, text: "Private Meeting Space" },
        { icon: TreePine, text: "Malaria-Free Bushveld" },
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
            <SEO title="Bosberaad | Corporate Retreat | Rugania" description="Host your next corporate retreat or team-building event at Rugania. The Groot Marico bushveld is the perfect setting to reconnect and recharge." />
            {/* Hero Header */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-rugania-green text-center px-6">
                <div className="absolute inset-0 opacity-50">
                    <img
                        src="/Rugania Files/Reception Gallery/office1_202603191515.jpeg"
                        alt="Bosberaad at Rugania"
                        className="w-full h-full object-cover scale-110"
                    />
                </div>
                <div className="relative z-10 max-w-4xl mt-16">
                    <span className="text-rugania-gold uppercase tracking-[0.5em] text-[10px] font-black mb-6 block">Corporate Retreat</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 serif">Bosberaad</h1>
                    <div className="w-16 h-1 bg-rugania-gold mx-auto mb-8"></div>
                    <p className="text-white text-xl font-medium leading-relaxed italic opacity-95 max-w-2xl mx-auto shadow-sm">
                        "A focused space for your next bosberaad — in the heart of the Groot-Marico bushveld."
                    </p>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
                    <div className="w-full lg:w-1/2">
                        <span className="text-rugania-gold uppercase tracking-[0.3em] text-[10px] font-black">The Space</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-8 serif text-rugania-green leading-tight">Swap the Boardroom for the Bushveld</h2>
                        <p className="text-rugania-slate leading-relaxed text-lg mb-6 font-medium">
                            Getting your team out of the city is often the best way to move your business forward. Rugania offers a professional, 
                            relaxed environment in the heart of the Groot-Marico bushveld for small groups to meet and plan.
                        </p>
                        <p className="text-rugania-slate leading-relaxed text-lg mb-10 font-medium">
                            Leave the office distractions behind. Our reception and office area is set up to handle small corporate groups. 
                            It is a simple, comfortable space where your team can really focus on the task at hand.
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
                                "Private meeting space with a large boardroom table.",
                                "Relaxed lounge area for informal discussions.",
                                "Comfortable on-site accommodation for multi-day sessions.",
                                "Ideal for management teams or small departments.",
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
                            src="/Rugania Files/Reception Gallery/office4_202603191523.jpeg"
                            alt="Bosberaad Meeting Space"
                            className="relative z-10 w-full h-[300px] md:h-[600px] object-cover rounded-sm shadow-2xl border border-black/5"
                        />
                    </div>
                </div>
            </section>

            {/* Easy to Reach + Connect section */}
            <section className="py-32 px-6 bg-paper-texture border-y border-rugania-green/5">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <span className="text-rugania-gold uppercase tracking-[0.3em] text-[10px] font-black">Getting Here</span>
                        <h3 className="text-3xl font-bold mt-4 mb-6 serif text-rugania-green">Easy to Reach</h3>
                        <p className="text-rugania-slate leading-relaxed text-lg font-medium">
                            You do not have to drive all day to find peace and quiet. Rugania is only 90 minutes from Johannesburg and Pretoria. 
                            It is the perfect distance for a quick team getaway or a focused strategy session.
                        </p>
                    </div>
                    <div>
                        <span className="text-rugania-gold uppercase tracking-[0.3em] text-[10px] font-black">The Experience</span>
                        <h3 className="text-3xl font-bold mt-4 mb-6 serif text-rugania-green">Connect Away from the Screen</h3>
                        <p className="text-rugania-slate leading-relaxed text-lg font-medium">
                            The best ideas often happen during the breaks. Whether you are sitting on the veranda or walking down to the Selons River, 
                            the quiet surroundings of the Groot-Marico help clear the mind and get the conversation flowing.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-32 px-6 bg-white border-y border-rugania-green/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <span className="text-rugania-gold uppercase tracking-[0.3em] text-[10px] font-black">Visual Experience</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 serif text-rugania-green">The Bosberaad Gallery</h2>
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
                                    alt={`Bosberaad view ${i + 1}`}
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

            {/* Lightbox */}
            <AnimatePresence>
                {currentIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-rugania-green/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12"
                        onClick={() => setCurrentIndex(null)}
                    >
                        <button
                            className="absolute top-10 right-10 text-white hover:text-rugania-gold transition-colors z-[110]"
                            onClick={() => setCurrentIndex(null)}
                        >
                            <X size={48} />
                        </button>
                        <button
                            className="absolute left-4 md:left-10 text-white hover:text-rugania-gold transition-colors z-[110]"
                            onClick={prevImage}
                        >
                            <ChevronLeft size={64} strokeWidth={1} />
                        </button>
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
                                alt="Bosberaad Full View"
                                className="max-w-full max-h-[85vh] object-contain shadow-2xl border border-white/5 bg-black"
                            />
                            <div className="absolute -bottom-16 left-0 right-0 text-center flex flex-col gap-2">
                                <span className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-black">
                                    Rugania Experience | Bosberaad
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 serif text-rugania-green">Plan Your Next Bosberaad</h2>
                    <p className="text-rugania-slate text-lg mb-12 font-medium italic">
                        "Get in touch to discuss your team's requirements. We will make sure your group has the space and quiet to do their best thinking."
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

export default Bosberaad;
