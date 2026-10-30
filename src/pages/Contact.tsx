import React from 'react';
import SEO from '../components/SEO';
import BookingForm from '../components/BookingForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
    return (
        <div>
            <SEO title="Contact Rugania | Game Park Enquiries" description="Get in touch with Rugania Game Park. Make a booking enquiry or ask about our hunting, leisure, and accommodation offerings in the Groot Marico." />
            {/* Hero Header */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-rugania-green text-center px-6">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="/Rugania Files/Gallery/Gallery1.jpg"
                        alt="Contact Background"
                        className="w-full h-full object-cover scale-110"
                    />
                </div>
                <div className="relative z-10 max-w-4xl mt-16">
                    <span className="text-rugania-gold uppercase tracking-[0.5em] text-[10px] font-black mb-6 block">Stay in Touch</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 serif">Start Your Journey to Rugania.</h1>
                    <p className="text-white/80 text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                        Ready to hear the call of the wild? Our team is standing by to help you plan the perfect hunt or the ultimate family getaway.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24 px-4 md:px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">

                    {/* Contact Info */}
                    <div className="w-full lg:w-1/2">
                        <span className="text-rugania-gold uppercase tracking-[0.5em] text-[10px] font-black block mb-6">Connect With Us</span>
                        <h2 className="text-3xl font-bold text-rugania-green mb-10 serif">Direct Contacts</h2>

                        <div className="space-y-12">
                            <div className="flex gap-8 group">
                                <div className="w-16 h-16 bg-rugania-cream rounded-full flex items-center justify-center shrink-0 group-hover:bg-rugania-gold transition-colors duration-500">
                                    <Phone className="text-rugania-green group-hover:text-white" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-rugania-gold mb-2">Bookings & Enquiries</h4>
                                    <p className="text-xl font-bold text-rugania-green serif">Reception Office</p>
                                    <p className="text-rugania-slate font-medium">+27 (0) 14 543 2736</p>
                                </div>
                            </div>

                            <div className="flex gap-8 group">
                                <div className="w-16 h-16 bg-rugania-cream rounded-full flex items-center justify-center shrink-0 group-hover:bg-rugania-gold transition-colors duration-500">
                                    <Mail className="text-rugania-green group-hover:text-white" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-rugania-gold mb-2">Direct Email</h4>
                                    <p className="text-xl font-bold text-rugania-green serif">info@rugania.co.za</p>
                                    <p className="text-rugania-slate font-medium">Official Correspondence</p>
                                </div>
                            </div>

                            <div className="flex gap-8 group">
                                <div className="w-16 h-16 bg-rugania-cream rounded-full flex items-center justify-center shrink-0 group-hover:bg-rugania-gold transition-colors duration-500">
                                    <MapPin className="text-rugania-green group-hover:text-white" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-rugania-gold mb-2">Location</h4>
                                    <p className="text-xl font-bold text-rugania-green serif">Rustenburg District</p>
                                    <p className="text-rugania-slate font-medium italic">25 45 55.63 S | 27 04 15.74 E</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-20 p-8 border border-rugania-green/5 bg-rugania-cream/50 rounded-sm">
                            <Clock className="text-rugania-gold mb-4" />
                            <h5 className="font-bold text-rugania-green mb-2 serif">Admin Support</h5>
                            <p className="text-sm text-rugania-slate font-medium">For payment confirmations and logistics, please contact <strong className="text-rugania-green">Joh-Mari</strong>.</p>
                        </div>
                    </div>

                    {/* Booking Form Card */}
                    <div className="w-full lg:w-1/2">
                        <div className="bg-white p-8 md:p-16 shadow-[0_30px_100px_rgba(0,0,0,0.08)] border border-black/5 rounded-sm relative">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-rugania-gold/10 -translate-y-16 translate-x-16 rounded-full blur-3xl"></div>
                            <div className="text-center mb-16">
                                <h3 className="text-3xl font-bold text-rugania-green serif mb-4">Request a Consultation</h3>
                                <p className="text-sm text-rugania-slate font-medium">Fill out your details and we will craft a custom itinerary for you.</p>
                            </div>
                            <BookingForm />
                        </div>
                    </div>

                </div>
            </section>

            {/* Map Section */}
            <section className="h-[350px] md:h-[500px] w-full bg-rugania-cream relative border-t border-black/5">
                <iframe
                    title="Rugania Game Park Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.5!2d27.0666362!3d-25.7710115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebde498fc053dbb:0xaf62e63fd32762a!2sRugania%20Game%20Park!5e0!3m2!1sen!2sza!4v1748000000000!5m2!1sen!2sza"
                    className="w-full h-full grayscale contrast-[1.1] brightness-[0.9] hover:grayscale-0 transition-all duration-1000"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                {/* Floating Directions Card - visible on md+ */}
                <div className="absolute top-20 left-6 md:left-20 z-10 hidden md:block">
                    <div className="bg-white p-10 shadow-2xl border border-black/5 rounded-sm max-w-xs">
                        <span className="text-rugania-gold uppercase tracking-[0.3em] text-[10px] font-black">Find Your Way</span>
                        <h4 className="text-xl font-bold text-rugania-green mt-3 mb-4 serif">Our Location</h4>
                        <p className="text-rugania-slate text-sm font-medium leading-relaxed mb-6">
                            On the R52 road between Koster and Rustenburg, Koster, 0348, South Africa.
                        </p>
                        <a
                            href="https://www.google.com/maps/place/Rugania+Game+Park/@-25.7710115,27.0666362,652m/data=!3m2!1e3!4b1!4m6!3m5!1s0x1ebde498fc053dbb:0xaf62e63fd32762a!8m2!3d-25.7710115!4d27.0666362!16s%2Fg%2F1vm6bk9_"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-[10px] font-black uppercase tracking-[0.2em] text-white bg-rugania-green px-8 py-4 hover:bg-rugania-gold transition-colors"
                        >
                            Get Directions
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
