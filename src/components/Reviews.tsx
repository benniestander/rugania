import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviewsData = [
    {
        name: "Walter RC",
        date: "July 2024",
        quote: "Went on a bowhunt on the first week of July and the quality and quantity of game available was impressive. Excellent terrain for spot and stalk. The accommodation was clean, spacious, comfortable and well equipped. Anton, the farm general manager, went out of his way to accommodate myself and my non-hunting family."
    },
    {
        name: "Hannes Bezuidenhout",
        date: "June 2024",
        quote: "Awesome break away just an hours drive from Joburg. Treat your family to this ideal break away from the hustle and bustle. Great for walking, camping and hunting. Anton the farm manager knows the farm inside out and is such a great assistance when you need anything."
    },
    {
        name: "Ockie van Schalkwyk",
        date: "August 2024",
        quote: "Beautiful game farm where one can truly relax! Lovely camping area and incredible atmosphere. A hidden gem in the North West."
    },
    {
        name: "Cornay Smith",
        date: "May 2024",
        quote: "Great place, really friendly staff and manager. The attention to detail and the sheer beauty of the park is something you have to experience for yourself."
    }
];

const Reviews: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-paper-texture border-y border-rugania-green/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <span className="text-rugania-gold uppercase tracking-[0.3em] text-[10px] font-black">Guest Testimonials</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 serif text-rugania-green">What Our Guests Say</h2>
                    <div className="flex justify-center gap-1 mt-4">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="fill-rugania-gold text-rugania-gold" />
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {reviewsData.map((review, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 md:p-12 rounded-sm border border-black/5 hover:border-rugania-gold/30 transition-all duration-500 shadow-sm flex flex-col"
                        >
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={12} className="fill-rugania-gold text-rugania-gold" />
                                ))}
                            </div>
                            <p className="text-rugania-slate italic leading-relaxed mb-8 flex-1 font-medium">
                                "{review.quote}"
                            </p>
                            <div className="border-t border-rugania-green/5 pt-6 flex justify-between items-center">
                                <span className="font-bold text-rugania-green serif">{review.name}</span>
                                <span className="text-[10px] uppercase tracking-widest text-rugania-gold font-black">{review.date}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="text-center mt-16">
                    <a
                        href="https://maps.app.goo.gl/4MEyrCE1uDJx94sTA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-black uppercase tracking-[0.2em] text-rugania-gold border-b-2 border-rugania-gold pb-2 hover:text-rugania-green hover:border-rugania-green transition-all"
                    >
                        Read More Google Reviews
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
