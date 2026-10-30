import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Shield, Leaf, Heart, ArrowRight, PenTool, Map as MapIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
    return (
        <div>
            <SEO title="About Rugania | Conservation in the Groot Marico" description="Learn about Rugania's commitment to ecological restoration and sustainable land use in the iconic Groot Marico region of North West Province." />
            {/* Hero Header */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-rugania-green text-center px-6">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="/Rugania Files/About/Bosveld_web.jpg"
                        alt="Rugania Bushveld"
                        className="w-full h-full object-cover scale-110"
                    />
                </div>
                <div className="relative z-10 max-w-4xl mt-16">
                    <span className="text-rugania-gold uppercase tracking-[0.5em] text-[10px] font-black mb-6 block">Our Story</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 serif">A Legacy of Conservation in the North West</h1>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-20">
                        <p className="text-2xl md:text-3xl text-rugania-green leading-relaxed serif italic border-l-4 border-rugania-gold pl-8 py-4">
                            Rugania is situated in the iconic Groot-Marico region of the North West, where the landscape is defined by the "floating hills" and the untamed character of the Marico bushveld. Our story is one of protecting this unique part of South Africa.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <div>
                            <h3 className="text-2xl font-bold text-rugania-green mb-6 serif uppercase tracking-wider">Sustainable Majesty</h3>
                            <p className="text-rugania-slate leading-relaxed mb-10 font-medium">
                                At Rugania, we don’t just host nature; we honour it. Our 5,000 hectare farm operates on the principles of sustainable land use.
                                Through careful population management and a nature-first approach, we ensure that the Rugania you see today will be even more vibrant for the generations to come.
                            </p>
                            <Link
                                to="/stadsjagter"
                                className="inline-flex flex-col items-center gap-1 text-[10px] font-black uppercase tracking-[0.3em] bg-rugania-green text-white px-8 py-4 hover:bg-rugania-gold transition-all duration-300 shadow-lg"
                            >
                                <span className="inline-flex items-center gap-4">
                                    <PenTool size={14} />
                                    Die Stadsjagter
                                </span>
                                <span className="text-[9px] font-medium tracking-wider normal-case opacity-80">(Roelf Odendaal - 2015)</span>
                            </Link>
                        </div>
                        <div>
                            <img
                                src="/Rugania Files/Gallery/Gallery24.jpg"
                                alt="Rugania Wildlife"
                                className="w-full h-[300px] md:h-[500px] object-cover shadow-2xl rounded-sm border border-black/5"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Rugania */}
            <section className="py-32 px-6 bg-paper-texture">
                <div className="max-w-6xl mx-auto text-center mb-20">
                    <span className="text-rugania-gold uppercase tracking-[0.3em] text-[10px] font-black">Choosing Rugania</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 serif text-rugania-green">Why Rugania?</h2>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white p-10 text-center shadow-sm hover:shadow-2xl transition-all duration-500 rounded-sm border border-black/5"
                    >
                        <MapIcon className="text-rugania-gold mx-auto mb-8" size={48} />
                        <h4 className="text-lg font-bold text-rugania-green mb-4 serif uppercase tracking-wider">Ideal Location</h4>
                        <p className="text-rugania-slate text-xs leading-relaxed font-medium">A true Groot-Marico bushveld experience featuring riverside areas, rocky valleys and beautiful hilltop views.</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white p-10 text-center shadow-sm hover:shadow-2xl transition-all duration-500 rounded-sm border border-black/5"
                    >
                        <Shield className="text-rugania-gold mx-auto mb-8" size={48} />
                        <h4 className="text-lg font-bold text-rugania-green mb-4 serif uppercase tracking-wider">Malaria-Free</h4>
                        <p className="text-rugania-slate text-xs leading-relaxed font-medium">A safe environment for the whole family to explore the entire 5,000 hectare estate.</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white p-10 text-center shadow-sm hover:shadow-2xl transition-all duration-500 rounded-sm border border-black/5"
                    >
                        <Leaf className="text-rugania-gold mx-auto mb-8" size={48} />
                        <h4 className="text-lg font-bold text-rugania-green mb-4 serif uppercase tracking-wider">Commitment</h4>
                        <p className="text-rugania-slate text-xs leading-relaxed font-medium">Every visit supports our long-term mission to build a healthy, balanced ecosystem.</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -10 }}
                        className="bg-white p-10 text-center shadow-sm hover:shadow-2xl transition-all duration-500 rounded-sm border border-black/5"
                    >
                        <Heart className="text-rugania-gold mx-auto mb-8" size={48} />
                        <h4 className="text-lg font-bold text-rugania-green mb-4 serif uppercase tracking-wider">Authentic</h4>
                        <p className="text-rugania-slate text-xs leading-relaxed font-medium">A quiet, malaria-free sanctuary where the environment always comes first.</p>
                    </motion.div>
                </div>
            </section>

            {/* Commitment to the Land Section */}
            <section className="py-32 px-6 bg-white border-t border-rugania-green/10">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
                    <div className="w-full lg:w-1/2">
                        <span className="text-rugania-gold uppercase tracking-[0.3em] text-[10px] font-black">Conservation</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-8 serif text-rugania-green leading-tight">Our Commitment to the Land</h2>
                        <p className="text-rugania-slate leading-relaxed text-lg mb-6 font-medium">
                            We are deeply committed to looking after the Groot Marico bushveld. A large part of our work involves building new dams to provide reliable water for the wildlife and restore the natural balance of the land. We also focus on careful unbushing to make sure the indigenous plants have the space they need to thrive.
                        </p>
                        <p className="text-rugania-slate leading-relaxed text-lg font-medium">
                            By keeping the habitat as natural as possible, we ensure that the local ecology stays healthy and vibrant. It is incredibly important to us that this wild space remains protected, especially since we are only 90 minutes from Johannesburg and Pretoria. We want to make sure the land is well cared for so that it stays a true, wild escape for everyone who visits.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="h-48 md:h-64 rounded-sm overflow-hidden shadow-lg border border-black/5">
                                <img src="/Rugania Files/Commitment/DSCN0615_optimized.jpg" alt="Commitment to the Land" className="w-full h-full object-cover" />
                            </div>
                            <div className="h-48 md:h-64 rounded-sm overflow-hidden shadow-lg border border-black/5 mt-12">
                                <img src="/Rugania Files/Commitment/DSCN0642_optimized.jpg" alt="Conservation at Rugania" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
