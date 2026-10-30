import React from 'react';
import { Mail, Phone, MapPin, Facebook, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-rugania-green text-white/70 pt-16 md:pt-32 pb-12 px-6 md:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 border-b border-white/10 pb-16 md:pb-20">
                {/* Logo & Info */}
                <div className="lg:col-span-4 space-y-8 lg:pr-8">
                    <Link to="/">
                        <img
                            src="/Rugania Files/Site-Logo-Color.png"
                            alt="Rugania Logo"
                            className="h-16"
                        />
                    </Link>
                    <p className="text-sm leading-relaxed max-w-sm font-medium">
                        A 5,000ha malaria-free sanctuary in the heart of the North West Province.
                        Preserving the heritage of South Africa’s wild spaces since our founding.
                    </p>
                    <div className="flex gap-4">
                        <a
                            href="https://www.facebook.com/RuganiaGamePark"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 border border-white/20 flex items-center justify-center rounded-full hover:bg-rugania-gold hover:border-rugania-gold transition-all duration-300 group"
                            title="Follow us on Facebook"
                        >
                            <Facebook size={16} className="text-white group-hover:scale-110" />
                        </a>
                    </div>
                </div>

                {/* Navigation */}
                <div className="lg:col-span-2">
                    <h5 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-10">Navigation</h5>
                    <ul className="space-y-6 text-sm font-medium">
                        {[
                            { name: 'Home', path: '/' },
                            { name: 'About', path: '/about' },
                            { name: 'Accommodation', path: '/accommodation' },
                            { name: 'Bosberaad', path: '/bosberaad' },
                            { name: 'Leisure', path: '/leisure' },
                            { name: 'Hunting', path: '/hunting' },
                            { name: 'Abattoir', path: '/abattoir' },
                            { name: 'Contact', path: '/contact' }
                        ].map((link) => (
                            <li key={link.name}>
                                <Link to={link.path} className="hover:text-rugania-gold transition-colors duration-300 flex items-center gap-2">
                                    <span className="w-4 h-px bg-rugania-gold/30"></span>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Reach Us */}
                <div className="lg:col-span-3">
                    <h5 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-10">Reach Us</h5>
                    <ul className="space-y-8 text-sm font-medium">
                        <li className="flex items-start gap-4">
                            <MapPin size={20} className="text-rugania-gold shrink-0" />
                            <span className="leading-relaxed">Rustenburg District,<br />North West Province, RSA</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <Phone size={20} className="text-rugania-gold shrink-0" />
                            <span>+27 (0) 14 543 2736</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <Mail size={20} className="text-rugania-gold shrink-0" />
                            <span>info@rugania.co.za</span>
                        </li>
                    </ul>
                </div>

                {/* Stay Updated */}
                <div className="lg:col-span-3">
                    <h5 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-10">Stay Updated</h5>
                    <p className="text-xs mb-8 font-medium leading-relaxed">
                        Join our exclusive circle for seasonal updates and conservation news.
                    </p>
                    <form className="relative">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="bg-transparent border-b border-white/30 pb-4 pr-10 text-sm w-full placeholder-white/40 focus:outline-none focus:border-rugania-gold transition-colors"
                        />
                        <button className="absolute right-0 bottom-4 text-rugania-gold hover:scale-110 transition-transform">
                            <ArrowRight size={18} />
                        </button>
                    </form>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.3em] font-black">
                <p className="opacity-40">© {new Date().getFullYear()} Rugania Game Park. Crafted for Excellence.</p>
                <div className="flex gap-10 opacity-40">
                    <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
