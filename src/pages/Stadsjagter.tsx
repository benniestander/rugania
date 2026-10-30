import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Scroll, Quote, PenTool, Calendar } from 'lucide-react';

const Stadsjagter: React.FC = () => {
    return (
        <div className="bg-white min-h-screen">
            <SEO title="Die Stadsjagter | Rugania" description="Read Die Stadsjagter — a bowhunting story set in the Groot Marico, by Roelf Odendaal (2015)." />
            {/* Hero Header */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-rugania-green text-center px-6">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="/Rugania Files/About/Bosveld_web.jpg"
                        alt="Bushveld Background"
                        className="w-full h-full object-cover scale-110"
                    />
                </div>
                <div className="relative z-10 max-w-4xl mt-16">
                    <span className="text-rugania-gold uppercase tracking-[0.5em] text-[10px] font-black mb-6 block">Afrikaans Heritage</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 serif">Die Stadsjagter</h1>
                    <p className="text-white/80 text-xl font-medium leading-relaxed italic opacity-90 max-w-2xl mx-auto">
                        deur Roelf Odendaal
                    </p>
                </div>
            </section>

            {/* Poem Content */}
            <section className="py-24 px-8 md:px-12 max-w-4xl mx-auto relative">
                <div className="absolute top-20 left-10 opacity-5 pointer-events-none">
                    <Quote size={200} className="text-rugania-green" />
                </div>
                
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                    className="relative z-10 space-y-12 text-center md:text-left"
                >
                    <div className="serif text-xl md:text-2xl leading-[2.2] text-rugania-green/90 space-y-8 font-medium italic">
                        <div className="space-y-2">
                            <p>Kalenderstryd, tussen geld en tyd,</p>
                            <p>net om weer te wees by ons plek van keus.</p>
                            <p>Dit is na bosveld en vleis waarna ons reis.</p>
                            <p>Speelgoed en kos, ons groot genot</p>
                            <p>resep getik om lekker aan te dik.</p>
                        </div>

                        <div className="space-y-2">
                            <p>Die veld sal wag, vir ons as gas,</p>
                            <p>nie veel van ons gevra, wat hy bied moet ons verdra.</p>
                            <p>In sy seisoen doen hy altyd sy bes,</p>
                            <p>wat wel van ons gevra, dat ons ons gedra.</p>
                            <p>Nie onbeskof deur dop verdof,</p>
                            <p>of hoogs verwaand en twak te praat.</p>
                            <p>Gee net respek vir elke ding, gun elke ding sy plek.</p>
                        </div>

                        <div className="space-y-4 border-l-4 border-rugania-gold/20 pl-8 md:pl-12 py-4 italic text-rugania-green/100">
                            <p>“Ken my op 'n afstand, ja ek die veld, my kleur en my geur.</p>
                            <p>Ken my seisoen, droog of groen.</p>
                            <p>Ken my blaar, my vorm en my blom.</p>
                            <p>Ken my, jy wat van die stad af kom.</p>
                            <p>Ken my veer, my klank en my gesang.</p>
                            <p>Ken my spoor, my vel en sprong.</p>
                            <p>Ken my gedrag en my gesag.</p>
                            <p>Ken my naam, gemaak na God se raam,</p>
                            <p>anders lê ek soek, net opgeskryf as Nommer in 'n boek.”</p>
                        </div>

                        <div className="space-y-2">
                            <p>Die gras, die boom en die blaar staan dik geskaar,</p>
                            <p>dis die bok se kos wat die jagter, gebuk, laat hak en krap.</p>
                            <p>Om te skiet, net om te skiet, of om te jag, om wel te jág,</p>
                            <p>help ons vir hul wat bewaar, om vir hul sak te spaar.</p>
                        </div>

                        <div className="space-y-2">
                            <p>Ons reis terug na geld en tyd,</p>
                            <p>vol van stories om vir mekaar te deel.</p>
                            <p>Gemoedsvervuld van jag en lag,</p>
                            <p>nuut bevriend en lus vir dien.</p>
                            <p>Die stokkies vir die braai en biltong uit die laai,</p>
                            <p>die ervarings van 'n vorige keer,</p>
                            <p>dit sal dat ons eendag graag terug kom weer.</p>
                        </div>

                        <div className="space-y-2">
                            <p>Die veld sal steeds leef, al dink jy, jy laat alles beef.</p>
                            <p>Altyd wag, vir jou die veld se gas!</p>
                        </div>
                    </div>

                    <div className="pt-20 border-t border-rugania-green/10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-4 text-rugania-gold">
                            <PenTool size={20} />
                            <span className="text-xs font-black uppercase tracking-widest">Roelf Odendaal</span>
                        </div>
                        <div className="flex items-center gap-4 text-rugania-slate">
                            <Calendar size={20} />
                            <span className="text-xs font-black uppercase tracking-widest">18 Junie 2015</span>
                        </div>
                    </div>
                </motion.div>
                
                <div className="mt-32 text-center">
                    <div className="inline-block p-12 border border-rugania-green/10 rounded-sm bg-white/40 backdrop-blur-sm">
                        <p className="rugania-slate italic max-w-md font-medium">
                            Hierdie gedig weerspieël die hart van Rugania: respek vir die natuur, die soeke na stilte en die ewige band tussen die jagter en die veld.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Stadsjagter;
