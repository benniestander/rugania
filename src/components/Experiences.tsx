import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Experiences: React.FC = () => {
    const experiences = [
        {
            id: '01',
            title: 'Nature and Wildlife',
            description: 'Explore the diverse game of the North West in their natural habitat. We focus on quiet observation of the land, from the majestic kudu to the smaller wonders of the Groot Marico bushveld. Since we are only 90 minutes from Johannesburg and Pretoria, it is an easy escape into nature.',
            image: '/Rugania Files/About/Koedoe-Bul_web.jpg',
            link: '/leisure',
            reverse: false,
            accent: 'gold'
        },
        {
            id: '02',
            title: 'Bushveld Living',
            description: 'Leave the city behind for guided walks and bird-watching. It is about slow days, fresh air, and the simple peace of the South African wilderness.',
            image: '/Rugania Files/Gallery/Gallery26.jpg',
            link: '/leisure',
            reverse: true,
            accent: 'green'
        },
        {
            id: '03',
            title: 'Traditional Bowhunting',
            description: 'As part of our sustainable management programme, we offer professional bowhunting. This is a secondary focus of the farm, handled with the utmost ethics and respect for the environment.',
            image: '/Rugania Files/Hides/Hide_4_202603180803.jpeg',
            link: '/hunting',
            reverse: false,
            accent: 'gold'
        }
    ];

    return (
        <section className="py-24 px-6 bg-white overflow-hidden scroll-mt-24" id="experiences">
            <div className="max-w-7xl mx-auto">
                <div className="mb-5 text-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-rugania-gold uppercase tracking-[0.3em] text-[10px] font-black"
                    >
                        Discover
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mt-4 mb-6 serif text-rugania-green"
                    >
                        The Rugania Experience
                    </motion.h2>
                    <div className="w-12 h-1 bg-rugania-gold mx-auto mb-8"></div>
                    <p className="text-rugania-slate max-w-2xl mx-auto leading-relaxed font-medium">
                        Enjoy a real South African bush experience with activities made for people who love the outdoors.
                    </p>
                </div>

                <div className="space-y-32">
                    {experiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            className={`flex flex-col lg:items-center gap-12 lg:gap-24 ${exp.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
                        >
                            <motion.div
                                initial={{ opacity: 0, x: exp.reverse ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="w-full lg:w-3/5 relative group"
                            >
                                <div className={`absolute -inset-4 ${exp.accent === 'gold' ? 'bg-rugania-gold' : 'bg-rugania-green'} opacity-5 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700`}></div>
                                <div className="relative overflow-hidden shadow-2xl aspect-[16/10]">
                                    <img
                                        src={exp.image}
                                        alt={exp.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="w-full lg:w-2/5 px-4"
                            >
                                <span className="text-rugania-gold text-7xl font-serif italic opacity-10 block mb-2 leading-none">{exp.id}</span>
                                <h3 className="text-4xl mb-6 serif leading-tight text-rugania-green">{exp.title}</h3>
                                <p className="text-rugania-slate leading-relaxed mb-8 text-lg">
                                    {exp.description}
                                </p>
                                <Link
                                    to={exp.link}
                                    className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-rugania-green border-b-2 border-rugania-gold pb-2 hover:text-rugania-gold transition-colors"
                                >
                                    EXPLORE DETAILS
                                    <span className="text-lg">→</span>
                                </Link>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experiences;
