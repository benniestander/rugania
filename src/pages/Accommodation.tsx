import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Users, Wind, Star, Utensils, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const lodges = [
    {
        name: "Aalwynpark",
        description: "Space, comfort, and bushveld hospitality come together at Alwynpark. Whether you're planning a hunting safari, family getaway, or group adventure, Alwynpark provides everything you need for a memorable stay.",
        sleeps: "Up to 12 guests",
        features: ["Panoramic views", "Hilltop serenity", "6 Bedrooms", "Secured Area"],
        image: "/Rugania Files/Accommodation/AalwynparkNEW8.jpg",
        id: "aalwynpark",
        link: "/aalwynpark"
    },
    {
        name: "Kareekloof Game Farm",
        description: "A peaceful sanctuary for families seeking a true farm atmosphere. Experience the quiet beauty of the bushveld in a relaxed, spacious setting.",
        sleeps: "Contact us for bedding",
        features: ["Authentic Hospitality", "Scenic Surroundings", "Family Friendly", "Ample Space"],
        image: "/Rugania Files/Accommodation/Kareekloof.jpg",
        id: "kareekloof",
        link: "https://kareekloofgamefarm.co.za/"
    },
    {
        name: "The Lapa (Bush Camp)",
        description: "The Lapa is a quiet bush camp on the banks of the Selons River. It is the perfect spot to switch off and enjoy the peace of the North West bushveld. Our sites offer plenty of privacy and easy access to the water.",
        sleeps: "Rustic and Intimate",
        features: ["Fire Pit", "Off-grid feel", "River Sounds", "Close to Nature"],
        image: "/Rugania Files/Accommodation/Lapa9.jpg",
        id: "lapa",
        link: "/lapa"
    }
];

const AccommodationPage: React.FC = () => {
    return (
        <div className="bg-white">
            <SEO title="Accommodation | Rugania Game Park" description="Relaxed accommodation in the Groot Marico bushveld. Choose from Aalwynpark, The Lapa, and Kareekloof — all malaria-free and set in pristine wilderness." />
            {/* Hero Header */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-rugania-green text-center px-6">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="/Rugania Files/Accommodation/AalwynparkNEW8.jpg"
                        alt="Accommodation Background"
                        className="w-full h-full object-cover scale-110"
                    />
                </div>
                <div className="relative z-10 max-w-4xl mt-16">
                    <span className="text-rugania-gold uppercase tracking-[0.5em] text-[10px] font-black mb-6 block">Stay at Rugania</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 serif">Relaxed Accommodation in the Groot Marico</h1>
                </div>
            </section>

            {/* Lodge Grid */}
            <section className="py-24 px-6 md:px-12 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {lodges.map((lodge, index) => (
                            <motion.div
                                key={lodge.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group bg-white rounded-sm overflow-hidden shadow-lg border border-black/5 hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
                            >
                                <div className="aspect-[4/3] overflow-hidden relative">
                                    <img
                                        src={lodge.image}
                                        alt={lodge.name}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-[8px] font-black uppercase tracking-widest text-rugania-green">
                                        Featured Stay
                                    </div>
                                </div>
                                
                                <div className="p-8 flex flex-col flex-grow">
                                    <h4 className="text-2xl font-bold mb-4 serif text-rugania-green leading-tight">{lodge.name}</h4>
                                    <p className="text-sm text-rugania-slate mb-8 leading-relaxed font-medium flex-grow italic opacity-90">
                                        {lodge.description}
                                    </p>
                                    
                                    <ul className="mb-8 space-y-2">
                                        {lodge.features.map((feature, fIdx) => (
                                            <li key={fIdx} className="flex items-center gap-3 text-xs font-semibold text-rugania-green/80">
                                                <Star size={12} className="text-rugania-gold" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex justify-between items-center mt-auto pt-6 border-t border-gray-100">
                                        <div className="flex items-center gap-2 text-xs font-bold text-rugania-slate">
                                            <Users size={16} className="text-rugania-gold" />
                                            {lodge.sleeps}
                                        </div>
                                        {lodge.link.startsWith('http') ? (
                                            <a 
                                                href={lodge.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[10px] font-black uppercase tracking-[0.2em] text-rugania-gold border-b-2 border-rugania-gold pb-1 hover:text-rugania-green hover:border-rugania-green transition-all"
                                            >
                                                View Stay
                                            </a>
                                        ) : (
                                            <Link 
                                                to={lodge.link} 
                                                className="text-[10px] font-black uppercase tracking-[0.2em] text-rugania-gold border-b-2 border-rugania-gold pb-1 hover:text-rugania-green hover:border-rugania-green transition-all"
                                            >
                                                View Stay
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* General Info Grid */}
            <section className="py-24 px-6 bg-paper-texture border-y border-rugania-green/5">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    <div>
                        <Wind className="text-rugania-gold mx-auto mb-6" size={40} />
                        <h5 className="font-bold text-rugania-green mb-2 serif">Secluded Privacy</h5>
                        <p className="text-xs text-rugania-slate font-medium">Experience the quiet authority of the bush in absolute solitude.</p>
                    </div>
                    <div>
                        <Utensils className="text-rugania-gold mx-auto mb-6" size={40} />
                        <h5 className="font-bold text-rugania-green mb-2 serif">Self-Catering</h5>
                        <p className="text-xs text-rugania-slate font-medium">All units are fully equipped for independent living.</p>
                    </div>
                    <div>
                        <Star className="text-rugania-gold mx-auto mb-6" size={40} />
                        <h5 className="font-bold text-rugania-green mb-2 serif">Malaria-Free</h5>
                        <p className="text-xs text-rugania-slate font-medium">Rugania is a safe zone for the entire family.</p>
                    </div>
                    <div>
                        <Users className="text-rugania-gold mx-auto mb-6" size={40} />
                        <h5 className="font-bold text-rugania-green mb-2 serif">Secured Area</h5>
                        <p className="text-xs text-rugania-slate font-medium">Verified boundaries and area-wide security for total peace of mind.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AccommodationPage;
