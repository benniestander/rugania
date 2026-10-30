import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Layout: React.FC = () => {
    return (
        <div className="relative min-h-screen bg-rugania-cream">
            <Navbar />
            <main className="pt-20">
                <Outlet />
            </main>
            <Footer />

            {/* Floating Action Button */}
            <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="/contact"
                aria-label="Book your stay at Rugania"
                className="fixed bottom-10 right-10 bg-rugania-gold text-white p-5 rounded-full shadow-[0_20px_50px_rgba(212,163,115,0.4)] z-50 flex items-center justify-center"
            >
                <Calendar size={24} strokeWidth={2.5} />
            </motion.a>
        </div>
    );
};

export default Layout;
