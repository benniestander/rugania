import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, Users, Calendar, ArrowRight, ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    guests: string;
    arrivalDate: string;
    interest: string;
    message: string;
    popiaConsent: boolean;
}

interface ValidationErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
}

function validateStep1(data: FormData): ValidationErrors {
    const errors: ValidationErrors = {};
    if (!data.firstName.trim()) errors.firstName = 'First name is required';
    if (!data.lastName.trim()) errors.lastName = 'Last name is required';
    if (!data.email.trim()) {
        errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        errors.email = 'Please enter a valid email address';
    }
    return errors;
}

const BookingForm: React.FC = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        guests: '2',
        arrivalDate: '',
        interest: 'Leisure',
        message: '',
        popiaConsent: false
    });
    const [errors, setErrors] = useState<ValidationErrors>({});
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const nextStep = () => {
        if (step === 1) {
            const validationErrors = validateStep1(formData);
            if (Object.keys(validationErrors).length > 0) {
                setErrors(validationErrors);
                return;
            }
            setErrors({});
        }
        setStep(prev => prev + 1);
    };

    const prevStep = () => setStep(prev => prev - 1);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.popiaConsent) return;

        setIsSubmitting(true);
        setSubmitError(null);

        if (!isSupabaseConfigured) {
            setIsSubmitting(false);
            setSubmitError('Booking system is not yet configured. Please contact us directly.');
            return;
        }

        const { error } = await supabase.from('inquiries').insert({
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            phone: formData.phone || null,
            guests: parseInt(formData.guests) || 1,
            arrival_date: formData.arrivalDate || null,
            interest: formData.interest,
            message: formData.message || null,
            popia_consent: formData.popiaConsent,
        });

        setIsSubmitting(false);

        if (error) {
            setSubmitError('Something went wrong. Please try again or contact us directly.');
            return;
        }

        setStep(4);
    };

    const inputClasses = "w-full bg-transparent border-b border-rugania-green/20 py-3 focus:border-rugania-gold outline-none transition-colors text-rugania-green placeholder-rugania-slate/40 font-medium";
    const errorClasses = "text-red-500 text-[10px] mt-1 font-medium";

    return (
        <div className="w-full max-w-xl mx-auto">
            <AnimatePresence mode="wait">
                {step === 1 && (
                    <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1">
                                <label className="text-[10px] uppercase tracking-widest font-black text-rugania-gold">First Name</label>
                                <div className="relative">
                                    <User className="absolute right-0 top-3 text-rugania-gold/30" size={18} />
                                    <input
                                        type="text"
                                        placeholder="e.g. Bennie"
                                        className={inputClasses}
                                        value={formData.firstName}
                                        onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                                    />
                                </div>
                                {errors.firstName && <p className={errorClasses}>{errors.firstName}</p>}
                            </div>
                            <div className="flex-1">
                                <label className="text-[10px] uppercase tracking-widest font-black text-rugania-gold">Last Name</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Stander"
                                    className={inputClasses}
                                    value={formData.lastName}
                                    onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                                />
                                {errors.lastName && <p className={errorClasses}>{errors.lastName}</p>}
                            </div>
                        </div>
                        <div>
                            <label className="text-[10px] uppercase tracking-widest font-black text-rugania-gold">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute right-0 top-3 text-rugania-gold/30" size={18} />
                                <input
                                    type="email"
                                    placeholder="bennie@example.za"
                                    className={inputClasses}
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            {errors.email && <p className={errorClasses}>{errors.email}</p>}
                        </div>
                        <div>
                            <label className="text-[10px] uppercase tracking-widest font-black text-rugania-gold">Phone (optional)</label>
                            <div className="relative">
                                <Phone className="absolute right-0 top-3 text-rugania-gold/30" size={18} />
                                <input
                                    type="tel"
                                    placeholder="+27 14 543 2736"
                                    className={inputClasses}
                                    value={formData.phone}
                                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                        </div>
                        <button
                            onClick={nextStep}
                            className="w-full bg-rugania-green text-white py-5 font-bold uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-3 hover:bg-rugania-gold transition-colors duration-500"
                        >
                            Continue to Details <ArrowRight size={16} />
                        </button>
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1">
                                <label className="text-[10px] uppercase tracking-widest font-black text-rugania-gold">Guests</label>
                                <div className="relative">
                                    <Users className="absolute right-0 top-3 text-rugania-gold/30" size={18} />
                                    <select
                                        className={inputClasses}
                                        value={formData.guests}
                                        onChange={e => setFormData({ ...formData, guests: e.target.value })}
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>4</option>
                                        <option>6+</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex-1">
                                <label className="text-[10px] uppercase tracking-widest font-black text-rugania-gold">Preferred Date</label>
                                <div className="relative">
                                    <Calendar className="absolute right-0 top-3 text-rugania-gold/30" size={18} />
                                    <input
                                        type="date"
                                        className={inputClasses}
                                        value={formData.arrivalDate}
                                        min={new Date().toISOString().split('T')[0]}
                                        onChange={e => setFormData({ ...formData, arrivalDate: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="text-[10px] uppercase tracking-widest font-black text-rugania-gold">Primary Interest</label>
                            <div className="flex gap-4 mt-2">
                                {['Leisure', 'Hunting', 'Corporate'].map(item => (
                                    <button
                                        key={item}
                                        onClick={() => setFormData({ ...formData, interest: item })}
                                        className={`flex-1 py-3 text-[10px] font-black uppercase tracking-widest border ${formData.interest === item ? 'bg-rugania-green text-white border-rugania-green' : 'border-rugania-green/10 text-rugania-green hover:border-rugania-gold'} transition-all`}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <button onClick={prevStep} className="flex-1 border border-rugania-green/20 py-5 font-bold uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-3">
                                <ArrowLeft size={16} /> Back
                            </button>
                            <button
                                onClick={nextStep}
                                className="flex-[2] bg-rugania-green text-white py-5 font-bold uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-3 hover:bg-rugania-gold transition-colors duration-500"
                            >
                                Final Step <ArrowRight size={16} />
                            </button>
                        </div>
                    </motion.div>
                )}

                {step === 3 && (
                    <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <div>
                            <label className="text-[10px] uppercase tracking-widest font-black text-rugania-gold">Additional Requirements</label>
                            <textarea
                                rows={4}
                                placeholder="Tell us about special requests or dietary needs..."
                                className={`${inputClasses} border border-rugania-green/10 p-4 mt-2 placeholder:italic`}
                                value={formData.message}
                                onChange={e => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-rugania-green/5 rounded-sm">
                            <input
                                type="checkbox"
                                id="popia"
                                className="mt-1 accent-rugania-gold"
                                checked={formData.popiaConsent}
                                onChange={e => setFormData({ ...formData, popiaConsent: e.target.checked })}
                            />
                            <label htmlFor="popia" className="text-[10px] leading-relaxed text-rugania-slate font-medium">
                                I consent to Rugania Game Park processing my personal information in accordance with the
                                <span className="text-rugania-gold font-black"> POPI Act (Act 4 of 2013)</span>.
                            </label>
                        </div>
                        {submitError && (
                            <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-sm">
                                <AlertCircle size={18} className="text-red-500 shrink-0" />
                                <p className="text-[10px] text-red-600 font-medium">{submitError}</p>
                            </div>
                        )}
                        <div className="flex gap-4">
                            <button onClick={prevStep} className="flex-1 border border-rugania-green/20 py-5 font-bold uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-3">
                                <ArrowLeft size={16} /> Back
                            </button>
                            <button
                                onClick={handleSubmit}
                                disabled={!formData.popiaConsent || isSubmitting}
                                className="flex-[2] bg-rugania-green text-white py-5 font-bold uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-3 hover:bg-rugania-gold transition-colors duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                            </button>
                        </div>
                    </motion.div>
                )}

                {step === 4 && (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-10"
                    >
                        <div className="inline-flex items-center justify-center w-24 h-24 bg-rugania-gold/10 rounded-full mb-8">
                            <CheckCircle2 size={48} className="text-rugania-gold" />
                        </div>
                        <h3 className="text-3xl font-bold serif text-rugania-green mb-4">Enquiry Received</h3>
                        <p className="text-rugania-slate font-medium mb-10 max-w-sm mx-auto">
                            Our reservation team has been notified. You can expect a response within 12 hours.
                        </p>
                        <button
                            onClick={() => { setStep(1); setFormData({ firstName: '', lastName: '', email: '', phone: '', guests: '2', arrivalDate: '', interest: 'Leisure', message: '', popiaConsent: false }); }}
                            className="text-[10px] font-black uppercase tracking-[0.2em] text-rugania-gold border-b-2 border-rugania-gold pb-2"
                        >
                            Back to Start
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default BookingForm;
