import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieBanner: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('rugania_cookie_consent');
        if (!consent) {
            // Slight delay to not overwhelm on immediate load
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('rugania_cookie_consent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('rugania_cookie_consent', 'declined');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pb-8 pointer-events-none"
                >
                    <div className="max-w-5xl mx-auto bg-rugania-green/95 backdrop-blur-md border border-rugania-gold/20 shadow-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 rounded-sm pointer-events-auto">
                        <div className="flex-1">
                            <h4 className="text-rugania-gold font-bold mb-2 serif text-lg">We Respect Your Privacy</h4>
                            <p className="text-white/80 text-sm leading-relaxed font-medium">
                                Rugania Game Park uses cookies to enhance your browsing experience, serve personalised content, and analyse our traffic.
                                In accordance with the Protection of Personal Information Act (POPIA), you can choose to accept or decline the use of
                                non-essential cookies.
                            </p>
                        </div>
                        <div className="flex gap-4 shrink-0 w-full md:w-auto">
                            <button
                                onClick={handleDecline}
                                className="flex-1 md:flex-none px-6 py-3 border border-white/20 text-white text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-colors"
                            >
                                Decline
                            </button>
                            <button
                                onClick={handleAccept}
                                className="flex-1 md:flex-none px-6 py-3 bg-rugania-gold text-rugania-green text-[10px] font-black uppercase tracking-widest hover:bg-white transition-colors"
                            >
                                Accept All
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieBanner;
