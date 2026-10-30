import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface AccommodationCardProps {
    title: string;
    description: string;
    image: string;
    price: string;
}

const AccommodationCard = ({ title, description, image, price }: AccommodationCardProps) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="bg-white group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 rounded-sm border border-black/5"
    >
        <div className="aspect-[3/4] overflow-hidden relative">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rugania-green/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        <div className="p-10">
            <h4 className="text-2xl font-bold mb-4 serif text-rugania-green">{title}</h4>
            <p className="text-sm text-rugania-slate mb-8 leading-relaxed font-medium">
                {description}
            </p>
            <div className="pt-8 border-t border-gray-100 flex justify-center">
                <Link
                    to="/accommodation"
                    className="w-full text-center text-[10px] font-black tracking-[0.2em] uppercase text-rugania-green hover:text-white hover:bg-rugania-green transition-all duration-300 border border-rugania-green/30 px-6 py-4"
                >
                    View Stay Details
                </Link>
            </div>
        </div>
    </motion.div>
);

const Accommodation: React.FC = () => {
    const stays = [
        {
            title: 'Aalwynpark',
            description: 'Exclusive 6-bedroom lodge with 360-degree bushveld views. Premier accommodation for corporate retreats or large families.',
            image: '/Rugania Files/Accommodation/AalwynparkNEW8.jpg',
            price: '1 550'
        },
        {
            title: 'The Lapa',
            description: 'For the purist who wants to unplug. Experience the sound of the wind and the glow of the fire in our authentic bush camp.',
            image: '/Rugania Files/Accommodation/Lapa9.jpg',
            price: '1 250'
        },
        {
            title: 'Kareekloof',
            description: 'A beautiful addition offering a peaceful farm atmosphere with plenty of space for families or groups.',
            image: '/Rugania Files/Accommodation/Kareekloof.jpg',
            price: '1 450'
        }
    ];

    return (
        <section className="py-24 px-6 bg-paper-texture scroll-mt-24" id="accommodation">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-rugania-gold uppercase tracking-[0.3em] text-[10px] font-black"
                        >
                            Reside
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-bold mt-4 serif text-rugania-green"
                        >
                            Relaxed Accommodation
                        </motion.h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {stays.map((stay, index) => (
                        <motion.div
                            key={stay.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <AccommodationCard {...stay} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Accommodation;
