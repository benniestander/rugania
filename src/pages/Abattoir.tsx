import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Shield, PenTool as Tool, CheckCircle } from 'lucide-react';

const Abattoir: React.FC = () => {
    const images = [
        "/Rugania Files/Abbatoir/Abbatoir_2_202603180841.jpeg",
        "/Rugania Files/Abbatoir/Abbatoir_3_202603180840.jpeg",
        "/Rugania Files/Abbatoir/Abbatoir_4_202603180840.jpeg",
        "/Rugania Files/Abbatoir/Abbatoir_5_202603180840.jpeg",
        "/Rugania Files/Abbatoir/Abbatoir_6_202603180840.jpeg",
        "/Rugania Files/Abbatoir/Abbatoir_7_202603180840.jpeg"
    ];

    return (
        <div className="bg-white">
            <SEO title="Professional Game Processing | Rugania" description="Rugania's on-site abattoir offers professional skinning, hygienic meat processing, and cold storage for all hunting guests." />
            {/* Hero Header */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-rugania-green text-center px-6">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="/Rugania Files/Abbatoir/Abbatoir_2_202603180841.jpeg"
                        alt="Rugania Abattoir"
                        className="w-full h-full object-cover scale-110"
                    />
                </div>
                <div className="relative z-10 max-w-4xl mt-16">
                    <span className="text-rugania-gold uppercase tracking-[0.5em] text-[10px] font-black mb-6 block">Facility</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 serif">Professional Processing</h1>
                    <p className="text-white/80 text-xl font-medium leading-relaxed italic opacity-90 max-w-2xl mx-auto">
                        "Precision and hygiene from field to table. Our state-of-the-art facility ensures your harvest is managed with the utmost respect and professional care."
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-20">
                    <div className="w-full lg:w-1/2">
                        <span className="text-rugania-gold uppercase tracking-[0.3em] text-[10px] font-black">Our Standards</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-8 serif text-rugania-green leading-tight">Professional Game Processing</h2>
                        <div className="w-16 h-px bg-rugania-gold mb-10"></div>
                        <p className="text-rugania-slate leading-relaxed text-lg mb-8 font-medium">
                            Our team is highly trained in the ethical handling and professional processing of South African game meat.
                        </p>
                        
                        <div className="space-y-6 mt-12">
                            {[
                                "Cold storage facilities for immediate temperature control.",
                                "Hygienic processing area with professional-grade equipment.",
                                "Expert skinning and dressing services for trophies and venison.",
                                "Vacuum sealing and labeling for easy transport."
                            ].map((feature, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <CheckCircle size={20} className="text-rugania-gold shrink-0 mt-1" />
                                    <p className="text-rugania-slate font-medium italic">{feature}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="w-full lg:w-1/2 relative">
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-rugania-gold/5 rounded-full blur-3xl"></div>
                        <div className="relative z-10 p-4 border border-black/5 rounded-sm">
                            <img
                                src="/Rugania Files/Abbatoir/Abbatoir_5_202603180840.jpeg"
                                alt="Abattoir Processing Area"
                                className="w-full h-[300px] md:h-[500px] object-cover shadow-2xl rounded-sm grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-32 px-6 bg-paper-texture border-y border-rugania-green/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <span className="text-rugania-gold uppercase tracking-[0.3em] text-[10px] font-black">Visual Tour</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 serif text-rugania-green">Facility Showcase</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {images.map((image, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="aspect-video overflow-hidden rounded-sm group relative"
                            >
                                <img
                                    src={image}
                                    alt={`Abattoir aspect ${i + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-rugania-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Abattoir;
