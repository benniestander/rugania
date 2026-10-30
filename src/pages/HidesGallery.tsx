import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const hides = [
    { image: "/Rugania Files/Hides/Hide_1_202603180804.jpeg", name: "Vlakte" },
    { image: "/Rugania Files/Hides/Hide_2_202603180804.jpeg", name: "Kloofdam" },
    { image: "/Rugania Files/Hides/Hide_3_202603180804.jpeg", name: "Berg" },
    { image: "/Rugania Files/Hides/Hide_6_202603180803.jpeg", name: "Horizon" },
    { image: "/Rugania Files/Hides/Hide_8_202603180803.jpeg", name: "Ou Kraal" },
    { image: "/Rugania Files/Hides/Hide_9_202603180803.jpeg", name: "Spitskop 1" },
    { image: "/Rugania Files/Hides/Hide_10_202603180803.jpeg", name: "Windpomp" },
    { image: "/Rugania Files/Hides/Hide_12_202603180802.jpeg", name: "Soetdoring" },
    { image: "/Rugania Files/Hides/Hide_16_202603180802.jpeg", name: "Wapad" },
    { image: "/Rugania Files/Hides/Hide_13_202603180802.jpeg", name: "Lapa" },
    { image: "/Rugania Files/Hides/Hide_14_202603180802.jpeg", name: "Pit" },
    { image: "/Rugania Files/Hides/Hide_15_202603180802.jpeg", name: "Fonteintjie" },
    { image: "/Rugania Files/Hides/Hide_17_202603180801.jpeg", name: "Honeywell" },
    { image: "/Rugania Files/Hides/Hide_18_202603180801.jpeg", name: "Liesbet" },
    { image: "/Rugania Files/Hides/Grasdak.png", name: "Grasdak" },
    { image: "/Rugania Files/Hides/Sable Hide.png", name: "Sable Hide" },
    { image: "/Rugania Files/Hides/Kleindam.png", name: "Kleindam" },
    { image: "/Rugania Files/Hides/Perdeby.png", name: "Perdeby" },
    { image: "/Rugania Files/Hides/Vark Krip.png", name: "Vark Krip" },
    { image: "/Rugania Files/Hides/Blesbok Kop.png", name: "Blesbok Kop" },
    { image: "/Rugania Files/Hides/Grond Dam.png", name: "Grond Dam" },
];

const HidesGallery: React.FC = () => {
    return (
        <div className="bg-white">
            <SEO title="The 22 Hides of Rugania | Traditional Bowhunting" description="Explore Rugania's 22 permanent hides and blinds, strategically positioned across 5,000 hectares of Groot Marico bushveld." />
            {/* Header */}
            <section className="relative h-[60vh] flex items-center justify-center bg-rugania-green overflow-hidden text-center">
                <div className="absolute inset-0 opacity-30">
                    <img
                        src="/Rugania Files/Hunting/Hunting7.jpg"
                        alt="Hides Gallery Background"
                        className="w-full h-full object-cover grayscale brightness-50"
                    />
                </div>
                <div className="relative z-10 max-w-4xl px-6">
                    <span className="text-rugania-gold uppercase tracking-[0.5em] text-[10px] font-black mb-6 block">Strategic Advantage</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 serif">The 22 Hides of Rugania</h1>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {hides.map((hide, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: (index % 6) * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative aspect-video overflow-hidden rounded-sm bg-rugania-cream/50"
                        >
                            <img
                                src={hide.image}
                                alt={hide.name}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            {/* Name Overlay */}
                            <div className="absolute top-4 right-4 bg-rugania-green/80 text-white px-2 py-1 text-[10px] font-black uppercase tracking-widest leading-none">
                                {hide.name}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <Link
                        to="/hunting"
                        className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] bg-rugania-green text-white px-10 py-5 hover:bg-rugania-gold transition-all duration-300"
                    >
                        Return to Hunting
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default HidesGallery;
