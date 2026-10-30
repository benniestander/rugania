import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Camera, Bike, Compass, Map } from 'lucide-react';

const activities = [
    {
        title: "Game Drives",
        description: "Head out in our 4x4 Land Cruiser or the rugged Unimog at sunrise or sunset. You might spot anything from giraffe to the more elusive brown hyena and leopard in their natural habitat.",
        image: "/Rugania Files/Nature Walks/rugania gamedrive.jpeg",
        icon: Camera
    },
    {
        title: "Mountain Biking",
        description: "Bring your own bike and discover kilometres of scenic gravel roads. Whether you prefer an easy ride or a more challenging adventure - the choice is yours.",
        image: "/Rugania Files/Leisure/mountainbiking.png",
        icon: Bike
    },
    {
        title: "Nature Walks",
        description: "It is a great way to learn about the wildlife, plants and the natural environment of the Groot Marico bushveld.",
        image: "/Leisure/Hiking_web.jpg",
        icon: Compass
    },
    {
        title: "Bird Watching",
        description: "The farm is a quiet spot for birders. Spend some time at our dams and waterholes to see the local birdlife come down to drink.",
        image: "/Rugania Files/Hides/Hide_18_202603180801.jpeg",
        icon: Map
    }
];

const Leisure: React.FC = () => {
    return (
        <div>
            <SEO title="Leisure Activities | Rugania Game Park" description="Discover mountain biking, nature walks, swimming, and more at Rugania. Perfect for families and groups exploring the Groot Marico bushveld." />
            {/* Hero Header */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-rugania-green text-center px-6">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="/Rugania Files/slider/SliderFG5.jpg"
                        alt="Leisure Background"
                        className="w-full h-full object-cover scale-110"
                    />
                </div>
                <div className="relative z-10 max-w-4xl mt-16">
                    <span className="text-rugania-gold uppercase tracking-[0.5em] text-[10px] font-black mb-6 block">Explore the Bush</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 serif">Discover the Land at Your Own Pace</h1>
                    <p className="text-white/80 text-xl font-medium leading-relaxed italic opacity-90 max-w-2xl mx-auto">
                        "At Rugania, we believe the bush offers many ways to reconnect with nature that don't involve a rifle. Our focus is on the environment and the quiet moments in between."
                    </p>
                </div>
            </section>

            <section className="py-24 px-6 bg-white">

                <div className="max-w-7xl mx-auto space-y-32">
                    {activities.map((activity, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-24`}
                        >
                            <div className="w-full lg:w-1/2 relative">
                                <div className="absolute -inset-4 bg-rugania-gold/10 -rotate-2 rounded-sm -z-10"></div>
                                <img
                                    src={activity.image}
                                    alt={activity.title}
                                    className="w-full h-[280px] md:h-[500px] object-cover rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                            <div className="w-full lg:w-1/2">
                                <activity.icon className="text-rugania-gold mb-8" size={60} />
                                <h2 className="text-3xl md:text-4xl font-bold text-rugania-green mb-8 serif">{activity.title}</h2>
                                <p className="text-rugania-slate text-lg leading-relaxed font-medium">
                                    {activity.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Leisure;
