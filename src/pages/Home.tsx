import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Experiences from '../components/Experiences';
import Accommodation from '../components/Accommodation';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Shield, Heart } from 'lucide-react';
import Reviews from '../components/Reviews';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <>
            <SEO title="Rugania Game Park | Groot Marico Bushveld" description="A 5,000 hectare malaria-free game park in the heart of the Groot Marico bushveld. Traditional bowhunting, relaxed accommodation, and authentic nature experiences." />
            <Hero />

            {/* Intro Section */}
            <section className="py-24 px-6 bg-white overflow-hidden">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-rugania-gold/5 rounded-full blur-3xl"></div>
                        <div className="relative z-10 p-4 border border-black/5 rounded-sm">
                            <img
                                src="/Rugania Files/Nature Walks/IMG_3088.jpeg"
                                alt="Rugania Bushveld"
                                className="w-full h-[300px] md:h-[500px] object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                        </div>
                    </motion.div>

                    <div className="w-full lg:w-1/2">
                        <span className="text-rugania-gold uppercase tracking-[0.3em] text-[10px] font-black">Welcome to Rugania</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-8 serif text-rugania-green">Restoring the Wild</h2>
                        <div className="w-16 h-px bg-rugania-gold mb-10"></div>
                        <p className="text-rugania-slate leading-relaxed text-lg mb-8 font-medium">
                            Rugania is a 5,000 hectare sanctuary nestled in the heart of the legendary Groot-Marico bushveld. Our primary mission is the ecology.
                            We are dedicated to building a healthy and balanced ecosystem where South African wildlife can truly thrive.
                        </p>
                        <p className="text-rugania-slate leading-relaxed text-lg mb-10 font-medium">
                            Whether you are here to reconnect with nature or for a specialised bowhunt, you are stepping into a malaria-free
                            landscape managed with a nature-first mindset. It is quiet, it is authentic, and it is the bush at its best.
                        </p>
                        <div className="flex gap-6">
                            <Link to="/about" className="text-xs font-black uppercase tracking-[0.2em] text-rugania-green flex items-center gap-4 group">
                                <span className="w-12 h-px bg-rugania-green group-hover:w-16 transition-all duration-300"></span>
                                Explore the Park
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Stats / Features */}
            <section className="py-24 bg-paper-texture relative border-y border-rugania-green/5">
                <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="flex flex-col items-center text-center p-6 md:p-12 bg-white/60 backdrop-blur-md rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.04)] border border-white/40 hover:-translate-y-2 hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.08)] transition-all duration-500 group"
                    >
                        <Leaf className="text-rugania-gold mb-8 group-hover:scale-110 transition-transform duration-500" size={48} strokeWidth={1.5} />
                        <h3 className="text-2xl font-semibold text-rugania-green mb-4 serif">Ecological Restoration</h3>
                        <p className="text-rugania-slate text-base leading-relaxed">Every part of our 5,000 hectare farm, from the riverine forests to the hills, is managed to improve biodiversity and land health.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="flex flex-col items-center text-center p-6 md:p-12 bg-white/60 backdrop-blur-md rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.04)] border border-white/40 hover:-translate-y-2 hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.08)] transition-all duration-500 group"
                    >
                        <Shield className="text-rugania-gold mb-8 group-hover:scale-110 transition-transform duration-500" size={48} strokeWidth={1.5} />
                        <h3 className="text-2xl font-semibold text-rugania-green mb-4 serif">Malaria-Free</h3>
                        <p className="text-rugania-slate text-base leading-relaxed">A safe and natural environment for the whole family to enjoy.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="flex flex-col items-center text-center p-6 md:p-12 bg-white/60 backdrop-blur-md rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.04)] border border-white/40 hover:-translate-y-2 hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.08)] transition-all duration-500 group"
                    >
                        <Heart className="text-rugania-gold mb-8 group-hover:scale-110 transition-transform duration-500" size={48} strokeWidth={1.5} />
                        <h3 className="text-2xl font-semibold text-rugania-green mb-4 serif">Sustainable Balance</h3>
                        <p className="text-rugania-slate text-base leading-relaxed">We use careful conservation practices to ensure the Selons River gorge and surrounding veld remain pristine for generations.</p>
                    </motion.div>
                </div>
            </section>

            <Experiences />
            <Accommodation />

            <Reviews />

            {/* Gallery CTA */}
            <section className="py-24 px-6 bg-white text-center">
                <div className="max-w-4xl mx-auto">
                    <span className="text-rugania-gold uppercase tracking-[0.3em] text-[10px] font-black">Visual Heritage</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-8 serif text-rugania-green">Captured Moments</h2>
                    <p className="text-rugania-slate leading-relaxed text-lg mb-12 font-medium max-w-2xl mx-auto">
                        Explore the raw beauty of Rugania through our lens. From endless views to the intimate details of the wild.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-16 px-0 max-w-6xl mx-auto">
                        {[
                            "/Rugania Files/Gallery/Gallery36.jpg",
                            "/Rugania Files/Gallery/Gallery24.jpg",
                            "/Rugania Files/Gallery/Gallery15.jpg",
                            "/Rugania Files/Gallery/Gallery13.jpg"
                        ].map((img, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                                viewport={{ once: true }}
                                className="aspect-square rounded-sm overflow-hidden shadow-lg border border-black/5"
                            >
                                <img
                                    src={img}
                                    alt={`Captured Moment ${i + 1}`}
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </motion.div>
                        ))}
                    </div>

                    <Link
                        to="/gallery"
                        className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] bg-rugania-green text-white px-10 py-5 hover:bg-rugania-gold transition-all duration-300"
                    >
                        Visit the Full Gallery
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Home;
