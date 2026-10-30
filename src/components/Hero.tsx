import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
    '/Rugania Files/slider/SliderFG3.jpg',
    '/Rugania Files/slider/SliderFG4.jpg',
    '/Rugania Files/slider/SliderFG5.jpg',
    '/Rugania Files/Gallery/Gallery22.jpg',
];

const Hero: React.FC = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 10000);
        return () => clearInterval(timer);
    }, []);

    return (
        <header className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="sync">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 3.5 }}
                    className="absolute inset-0"
                >
                    <img
                        src={images[current]}
                        alt="Rugania Landscape"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-b from-rugania-green/40 to-rugania-green/70"></div>

            <div className="relative z-10 text-center text-white px-4 max-w-6xl">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="uppercase tracking-[0.4em] mb-6 text-xs md:text-sm font-bold text-rugania-gold"
                >
                    Deep in the Groot-Marico
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight serif text-editorial"
                >
                    A real bush experience, <br className="hidden md:block" /> made to be remembered
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 96 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="h-px bg-white/40 mx-auto mb-10"
                ></motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center w-full px-4"
                >
                    <a
                        href="#experiences"
                        className="btn-primary text-center w-full sm:w-auto"
                    >
                        EXPLORE THE WILD
                    </a>
                    <a
                        href="#accommodation"
                        className="btn-outline text-center w-full sm:w-auto"
                    >
                        BOOK YOUR STAY
                    </a>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
            >
                <div className="w-[1px] h-16 bg-white/20 mx-auto relative overflow-hidden">
                    <motion.div
                        animate={{ y: [0, 64] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="w-full h-1/2 bg-rugania-gold absolute top-0"
                    />
                </div>
            </motion.div>
        </header>
    );
};

export default Hero;
