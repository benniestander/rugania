import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, ShieldCheck, Tag, Info } from 'lucide-react';

const PriceList: React.FC = () => {
    return (
        <div>
            {/* Hero Header */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-rugania-green text-center px-6">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="/Rugania Files/Gallery/Gallery42.jpg"
                        alt="Pricing Background"
                        className="w-full h-full object-cover scale-110"
                    />
                </div>
                <div className="relative z-10 max-w-4xl mt-16">
                    <span className="text-rugania-gold uppercase tracking-[0.5em] text-[10px] font-black mb-6 block">Rates & Policies</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 serif">Transparent Pricing for an Unmatched Experience.</h1>
                    <p className="text-white/80 text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                        At Rugania, we believe in fair-chase hunting and fair-value pricing. Our rates are comprehensive,
                        including VAT, ensuring no surprises, only memories.
                    </p>
                </div>
            </section>

            <section className="py-24 px-6 bg-white">

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Info Cards */}
                    <div className="space-y-8">
                        <div className="bg-rugania-cream p-10 border border-black/5 rounded-sm">
                            <h3 className="text-2xl font-bold text-rugania-green mb-6 serif flex items-center gap-4">
                                <ShieldCheck className="text-rugania-gold" /> Scaled Pricing
                            </h3>
                            <p className="text-rugania-slate font-medium leading-relaxed">
                                We offer dedicated rates for both Hunters and Non-Hunters, ensuring everyone feels welcome in our sanctuary.
                                Children under 12 receive special discounted residency rates.
                            </p>
                        </div>
                        <div className="bg-rugania-cream p-10 border border-black/5 rounded-sm">
                            <h3 className="text-2xl font-bold text-rugania-green mb-6 serif flex items-center gap-4">
                                <Tag className="text-rugania-gold" /> Seasonal Incentives
                            </h3>
                            <p className="text-rugania-slate font-medium leading-relaxed">
                                <strong className="text-rugania-gold">Save 15%</strong> on midweek stays (Mon-Thu) or
                                <strong className="text-rugania-gold">7.5%</strong> during our beautiful summer off-season (October – April).
                            </p>
                        </div>
                    </div>

                    {/* Downloads Section */}
                    <div className="bg-rugania-green p-6 md:p-12 text-white rounded-sm flex flex-col justify-center">
                        <h3 className="text-3xl font-bold mb-8 serif">Digital Documentation</h3>
                        <p className="text-white/70 mb-12 font-medium">
                            Please download our comprehensive price lists and mandatory indemnity forms before your arrival.
                        </p>
                        <div className="space-y-6">
                            <a
                                href="/files/rugania-price-list-2026.pdf"
                                download
                                className="w-full bg-rugania-gold hover:bg-white hover:text-rugania-green transition-all duration-500 py-6 px-10 flex items-center justify-between group"
                            >
                                <span className="text-[10px] font-black uppercase tracking-[0.3em]">2026 Price List (PDF)</span>
                                <FileDown className="group-hover:translate-y-1 transition-transform" />
                            </a>
                            <a
                                href="/files/rugania-indemnity-form.pdf"
                                download
                                className="w-full bg-white/10 hover:bg-white hover:text-rugania-green border border-white/20 transition-all duration-500 py-6 px-10 flex items-center justify-between group"
                            >
                                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Indemnity Form</span>
                                <FileDown className="group-hover:translate-y-1 transition-transform" />
                            </a>
                        </div>
                        <div className="mt-12 p-6 border border-white/10 flex gap-6 items-start">
                            <Info className="text-rugania-gold shrink-0" />
                            <p className="text-[10px] text-white/50 leading-relaxed font-medium uppercase tracking-widest">
                                Sustainable Sourcing: Pricing for trophy animals is calculated by horn length or weight,
                                rewarding the pursuit of mature animals in line with our population management goals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PriceList;
