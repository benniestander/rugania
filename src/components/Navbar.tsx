import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Leisure', href: '/leisure' },
        { name: 'Hunting', href: '/hunting' },
        { name: 'Accommodation', href: '/accommodation' },
        { name: 'Bosberaad', href: '/bosberaad' },
        { name: 'Gallery', href: '/gallery' },
    ];

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 w-full bg-rugania-green shadow-xl py-2 px-8 flex justify-between items-center"
        >
            <Link to="/" className="relative z-[60] w-64 lg:w-80 h-16 flex items-center">
                <div className="absolute top-0 inset-x-0 bg-white pt-0 pb-4 px-4 lg:px-8 rounded-b-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-b-8 border-rugania-gold transition-all duration-500 hover:pb-6 group flex justify-center items-center h-28 z-[70]">
                    <img
                        src="/Rugania%20Files/Site-Logo-Color.png"
                        alt="Rugania Game Park Logo"
                        className="h-24 lg:h-32 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-10 font-medium uppercase tracking-[0.1em] xl:tracking-[0.2em] text-[9px] xl:text-[10px] text-white">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.href}
                        className={`hover:text-rugania-gold transition-colors duration-300 whitespace-nowrap ${location.pathname === link.href ? 'text-rugania-gold underline underline-offset-8' : ''
                            }`}
                    >
                        {link.name}
                    </Link>
                ))}
                <Link
                    to="/contact"
                    className="btn-outline text-[9px] xl:text-[11px] px-5 xl:px-8 py-3 xl:py-4"
                >
                    Contact
                </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
                className="lg:hidden text-white"
                aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-rugania-green p-8 flex flex-col space-y-6 lg:hidden shadow-2xl"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`text-white text-sm uppercase tracking-widest font-bold ${location.pathname === link.href ? 'text-rugania-gold' : ''
                                    }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="px-6 py-3 border border-white text-white text-center font-bold uppercase tracking-widest text-xs"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
