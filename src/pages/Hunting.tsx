import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Target, Shield, Crosshair, ArrowRight, CheckCircle, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hunting: React.FC = () => {
    return (
        <div className="bg-white">
            <SEO title="Traditional Bowhunting | Rugania Game Park" description="Rugania offers 22 permanent hides across 5,000 hectares of Groot Marico bushveld. Ethical, malaria-free bowhunting in South Africa's North West Province." />
            {/* Hero Header */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-rugania-green text-center px-6">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="/Rugania Files/Gallery/Gallery42.jpg"
                        alt="Hunting Background"
                        className="w-full h-full object-cover scale-110"
                    />
                </div>
                <div className="relative z-10 max-w-4xl mt-16">
                    <span className="text-rugania-gold uppercase tracking-[0.5em] text-[10px] font-black mb-6 block">The Hunt at Rugania</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 serif">A Fair Chase</h1>
                </div>
            </section>

            {/* Ethical Section */}
            <section className="py-32 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
                    <div className="w-full lg:w-1/2">
                        <span className="text-rugania-gold uppercase tracking-[0.3em] text-[10px] font-black">Philosophy</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-8 serif text-rugania-green leading-tight">Ethical Sportsmanship</h2>
                        <div className="w-16 h-px bg-rugania-gold mb-12"></div>
                        <p className="text-rugania-slate leading-relaxed text-lg mb-10 font-medium">
                            While our primary focus is the ecology of the farm, we offer professional hunting as a tool for sustainable land management 
                            in the heart of the Groot-Marico. Rugania is a fair-chase environment where we value patience and ethical sportsmanship above all else.
                        </p>
                        
                        <div className="space-y-12">
                            <div className="flex gap-8 items-start">
                                <Crosshair className="text-rugania-gold shrink-0" size={32} />
                                <div>
                                    <h4 className="text-lg font-bold text-rugania-green mb-2 serif uppercase tracking-wider">Traditional Bowhunting</h4>
                                    <p className="text-rugania-slate text-sm font-medium">Rugania is designed with the bowhunter in mind. We have 22 permanent hides and blinds placed strategically across our 5,000 hectare farm.</p>
                                </div>
                            </div>
                            <div className="flex gap-8 items-start">
                                <Target className="text-rugania-gold shrink-0" size={32} />
                                <div>
                                    <h4 className="text-lg font-bold text-rugania-green mb-2 serif uppercase tracking-wider">Rifle Hunting</h4>
                                    <p className="text-rugania-slate text-sm font-medium">We also accommodate rifle hunting in dedicated areas. These spots are chosen for safety and clear sightlines, whether you prefer walk-and-stalk or hunting from a fixed position.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full lg:w-1/2">
                        <div className="absolute -inset-4 border-2 border-rugania-gold/20 translate-x-8 translate-y-8 rounded-sm"></div>
                        <img
                            src="/Rugania Files/Gallery/Gallery31.jpg"
                            alt="Professional Hunting Experience"
                            className="relative z-10 w-full h-[350px] md:h-[600px] object-cover shadow-2xl rounded-sm grayscale hover:grayscale-0 transition-all duration-1000"
                        />
                    </div>
                </div>
            </section>

            {/* Hides / 19 Hides Feature */}
            <section className="py-32 px-6 bg-paper-texture border-y border-rugania-green/5">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-20">
                    <div className="w-full lg:w-1/2">
                        <span className="text-rugania-gold uppercase tracking-[0.3em] text-[10px] font-black">Strategic Placement</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-8 serif text-rugania-green leading-tight">22 Permanent Hides.</h2>
                        <div className="w-16 h-px bg-rugania-gold mb-12"></div>
                        <p className="text-rugania-slate leading-relaxed text-lg mb-10 font-medium">
                            For the bowhunting enthusiast, 22 permanent hides strategically positioned across our 5,000ha sanctuary. 
                            These structures are more than simple blinds; they are tactical advantages.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <div>
                                <h4 className="text-[10px] font-black uppercase text-rugania-gold tracking-widest mb-3">Strategic Placement</h4>
                                <p className="text-rugania-slate text-sm font-medium">Hides are located near waterholes and known game paths to give you the best vantage point.</p>
                            </div>
                            <div>
                                <h4 className="text-[10px] font-black uppercase text-rugania-gold tracking-widest mb-3">Scent and Sound</h4>
                                <p className="text-rugania-slate text-sm font-medium">Our elevated, enclosed structures are designed to keep you hidden and minimise your scent.</p>
                            </div>
                        </div>

                        <Link
                            to="/hides-gallery"
                            className="inline-flex items-center gap-6 group text-rugania-green font-black uppercase tracking-[0.3em] text-[10px]"
                        >
                            <span className="bg-rugania-green text-white p-4 rounded-full group-hover:bg-rugania-gold transition-colors">
                                <ArrowRight size={16} />
                            </span>
                            View All 22 Hides
                        </Link>
                    </div>
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative z-10 p-4 border border-black/5 rounded-sm">
                            <img
                                src="/Rugania Files/Hides/Hide_1_202603180804.jpeg"
                                alt="Bow Hunting Hide View"
                                className="w-full h-[350px] md:h-[600px] object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Accommodation Promotion Section */}
            <section className="py-32 px-6 bg-paper-texture">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
                    <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
                        <div className="absolute -inset-4 border-2 border-rugania-gold/20 -translate-x-8 translate-y-8 rounded-sm"></div>
                        <img
                            src="/Rugania Files/Accommodation/AalwynparkNEW8.jpg"
                            alt="Aalwynpark at Rugania"
                            className="relative z-10 w-full h-[300px] md:h-[500px] object-cover shadow-2xl rounded-sm"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        <span className="text-rugania-gold uppercase tracking-[0.3em] text-[10px] font-black">Family Stays</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-8 serif text-rugania-green leading-tight">Bring the Whole Family</h2>
                        <div className="w-16 h-px bg-rugania-gold mb-12"></div>
                        <p className="text-rugania-slate leading-relaxed text-lg mb-10 font-medium">
                            The Rugania experience is not just for the hunter. Our 5,000 hectare Groot-Marico gamefarm offers a variety of accommodations perfect for the entire family. 
                            From the fully-equipped Lapa with its private boma to the quiet escapes of Aalwynpark and Kareekloof, we provide a safe, malaria-free sanctuary to relax and reconnect.
                        </p>
                        <Link
                            to="/accommodation"
                            className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] bg-rugania-green text-white px-10 py-5 hover:bg-rugania-gold transition-all duration-300 shadow-xl"
                        >
                            Explore our Accommodation
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Abattoir CTA Section */}
            <section className="py-32 px-6 bg-rugania-green text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img 
                        src="/Rugania Files/Abbatoir/Abbatoir_7_202603180840.jpeg" 
                        alt="Abbatoir Background" 
                        className="w-full h-full object-cover scale-110"
                    />
                </div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <span className="text-rugania-gold uppercase tracking-[0.3em] text-[10px] font-black mb-6 block">The Final Step</span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 serif italic">Professional Meat Processing</h2>
                    <p className="text-white/80 text-lg leading-relaxed mb-12 font-medium max-w-2xl mx-auto">
                        Rugania offers a fully equipped on-site abattoir, providing professional skinning, hygienic meat processing, and cold storage facilities.
                    </p>
                    <Link
                        to="/abattoir"
                        className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] bg-white text-rugania-green px-10 py-5 hover:bg-rugania-gold hover:text-white transition-all duration-300 shadow-xl"
                    >
                        Explore our Abattoir
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Hunting;
