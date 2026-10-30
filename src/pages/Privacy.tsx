import React from 'react';

const Privacy: React.FC = () => {
    return (
        <div>
            {/* Hero Header */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-rugania-green text-center px-6">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="/Rugania Files/Gallery/Gallery16.jpg"
                        alt="Privacy Background"
                        className="w-full h-full object-cover scale-110"
                    />
                </div>
                <div className="relative z-10 max-w-4xl mt-16">
                    <span className="text-rugania-gold uppercase tracking-[0.5em] text-[10px] font-black mb-6 block">Privacy Policy</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 serif">Data & Protection Shield</h1>
                    <p className="text-white/80 text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                        Last Updated: October 2025
                    </p>
                </div>
            </section>

            <section className="py-24 px-6 bg-white min-h-[80vh]">
                <div className="max-w-4xl mx-auto">

                    <div className="prose prose-lg prose-green max-w-none text-rugania-slate font-medium leading-relaxed">
                        <h3 className="text-2xl font-bold text-rugania-green mt-12 mb-6 serif">1. Introduction</h3>
                        <p className="mb-6">
                            Rugania Game Park ("we," "us," or "our") is committed to protecting your privacy and ensuring that your personal
                            information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, disclose,
                            and protect your personal information in accordance with the Protection of Personal Information Act (POPIA) of South Africa.
                        </p>

                        <h3 className="text-2xl font-bold text-rugania-green mt-12 mb-6 serif">2. Information We Collect</h3>
                        <p className="mb-6">
                            We may collect the following types of personal information when you interact with us:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li><strong>Identity Data:</strong> Name, surname, ID/passport number.</li>
                            <li><strong>Contact Data:</strong> Email address, telephone numbers, postal address.</li>
                            <li><strong>Booking Data:</strong> Reservation details, payment information (processed securely via third-party gateways).</li>
                            <li><strong>Health/Dietary Data:</strong> Information voluntarily provided for catering or specific medical requirements during your stay.</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-rugania-green mt-12 mb-6 serif">3. How We Use Your Information</h3>
                        <p className="mb-6">
                            Your personal information is used exclusively for the following purposes:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>To process bookings and reservations for accommodation, hunting, or leisure activities.</li>
                            <li>To fulfill legal obligations, such as hunting permits and exemption documentation.</li>
                            <li>To communicate with you regarding your stay, pricing updates, or special offers (if opted-in).</li>
                            <li>To improve our website and services based on user feedback and analytics.</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-rugania-green mt-12 mb-6 serif">4. Data Security & Sharing</h3>
                        <p className="mb-6">
                            We implement appropriate technical and organizational measures to safeguard your personal information against accidental
                            or unlawful destruction, loss, alteration, unauthorized disclosure, or access. We do not sell your personal data. We may
                            share your data with trusted third-party service providers (e.g., payment processors, government nature conservation authorities)
                            only when legally required or strictly necessary to fulfill our services to you.
                        </p>

                        <h3 className="text-2xl font-bold text-rugania-green mt-12 mb-6 serif">5. Your Rights</h3>
                        <p className="mb-6">
                            Under POPIA, you have the right to request access to, correction, or deletion of your personal information held by us.
                            You may also object to the processing of your data under certain circumstances. To exercise these rights, please contact
                            us at <strong>info@rugania.co.za</strong>.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Privacy;
