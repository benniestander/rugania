import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Bird, Camera, MapPin, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const animals = [
    { name: "Blue wildebeest", type: "Plains Game" },
    { name: "Warthog", type: "Plains Game" },
    { name: "Eland", type: "Plains Game" },
    { name: "Impala", type: "Plains Game" },
    { name: "Kudu", type: "Plains Game" },
    { name: "Red hartebeest", type: "Plains Game" },
    { name: "Blesbok", type: "Plains Game" },
    { name: "Gemsbok/Oryx", type: "Plains Game" },
    { name: "Zebra", type: "Plains Game" }
];

const Wildlife: React.FC = () => {
    return (
        <div>
            <SEO title="Wildlife at Rugania | Groot Marico" description="Discover the diverse wildlife of Rugania's 5,000 hectare sanctuary. From plains game to birds of prey, the Groot Marico ecosystem thrives." />
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-rugania-green text-center px-6">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="/Rugania Files/Gallery/Gallery38.jpg"
                        alt="Wildlife at Rugania"
                        className="w-full h-full object-cover scale-110"
                    />
                </div>
                <div className="relative z-10 max-w-4xl mt-16">
                    <span className="text-rugania-gold uppercase tracking-[0.5em] text-[10px] font-black mb-6 block">Discover Nature</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 serif">Wildlife at Rugania</h1>
                    <p className="text-white/80 text-xl font-medium leading-relaxed italic opacity-90 max-w-2xl mx-auto">
                        "Plains Game in the Heart of the Groot-Marico"
                    </p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <Compass className="text-rugania-gold mx-auto mb-8" size={48} />
                    <h2 className="text-3xl md:text-4xl font-bold text-rugania-green mb-8 serif">A Thriving Ecosystem</h2>
                    <p className="text-rugania-slate text-lg leading-relaxed font-medium">
                        Rugania's 5,000 hectares of restored Groot-Marico bushveld and dramatic river gorge support a thriving population of classic South African plains game. Our focus is on ethical, sustainable populations — no dangerous game like lion, buffalo, or rhino.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* Animal Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {animals.map((animal, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-rugania-cream p-8 rounded-sm shadow-md border hover:border-rugania-gold transition-colors duration-300"
                            >
                                <div className="w-12 h-1 bg-rugania-gold mb-6"></div>
                                <h3 className="text-2xl font-bold text-rugania-green mb-2 serif">{animal.name}</h3>
                                <p className="text-rugania-slate text-sm font-medium tracking-widest uppercase">{animal.type}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Birding & Sightings */}
            <section className="py-24 px-6 bg-rugania-cream border-t border-rugania-green/10">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="absolute -inset-4 bg-rugania-gold/10 rotate-2 rounded-sm -z-10"></div>
                        <img
                            src="/Rugania Files/Leisure/Bird-Watching_web.jpg"
                            alt="Birding at the Selons River"
                            className="w-full h-[280px] md:h-[500px] object-cover rounded-sm shadow-2xl"
                        />
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <Bird className="text-rugania-gold mb-8" size={60} />
                        <h2 className="text-3xl md:text-4xl font-bold text-rugania-green mb-8 serif">Birding & More Sightings</h2>
                        <p className="text-rugania-slate text-lg leading-relaxed font-medium mb-10">
                            The Groot-Marico region is renowned for its exceptional birding. The Selons River corridor draws a remarkable variety of species, from raptors to riverine specials — a true paradise for the birding enthusiast.
                        </p>
                        
                        <div className="bg-white p-8 border-l-4 border-rugania-gold shadow-lg">
                            <h4 className="text-xl font-bold text-rugania-green mb-4 serif">Ready for an adventure?</h4>
                            <p className="text-rugania-slate mb-8 font-medium">Join us for guided game viewing, walks, or birding.</p>
                            <Link to="/contact" className="btn-primary inline-flex items-center gap-3">
                                <Camera size={18} />
                                ENQUIRE NOW
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default Wildlife;
