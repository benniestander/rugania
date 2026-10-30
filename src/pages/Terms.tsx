import React from 'react';

const Terms: React.FC = () => {
    return (
        <div>
            {/* Hero Header */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-rugania-green text-center px-6">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="/Rugania Files/Gallery/Gallery15.jpg"
                        alt="Terms Background"
                        className="w-full h-full object-cover scale-110"
                    />
                </div>
                <div className="relative z-10 max-w-4xl mt-16">
                    <span className="text-rugania-gold uppercase tracking-[0.5em] text-[10px] font-black mb-6 block">Terms & Conditions</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 serif">Service Agreement</h1>
                    <p className="text-white/80 text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                        Effective Date: October 2025
                    </p>
                </div>
            </section>

            <section className="py-24 px-6 bg-white min-h-[80vh]">
                <div className="max-w-4xl mx-auto">

                    <div className="prose prose-lg prose-green max-w-none text-rugania-slate font-medium leading-relaxed">
                        <h3 className="text-2xl font-bold text-rugania-green mt-12 mb-6 serif">1. Agreement Overview</h3>
                        <p className="mb-6">
                            These Terms and Conditions govern your use of the Rugania Game Park website and your booking
                            of any accommodation, hunting, or leisure services provided by us. By accessing this site or confirming a reservation,
                            you agree to be bound by these terms.
                        </p>

                        <h3 className="text-2xl font-bold text-rugania-green mt-12 mb-6 serif">2. Bookings, Payments & Cancellations</h3>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li><strong>Deposits:</strong> A non-refundable deposit is required to secure any booking.</li>
                            <li><strong>Balance Payments:</strong> The remaining balance must be settled prior to departure unless prior arrangements are made.</li>
                            <li><strong>Cancellations:</strong> Cancellations made within 30 days of the arrival date will result in forfeiture of the full deposit.</li>
                            <li><strong>Pricing Updates:</strong> We reserve the right to amend our price lists annually. Confirmed bookings will honor the agreed rate.</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-rugania-green mt-12 mb-6 serif">3. Indemnity & Liability</h3>
                        <p className="mb-6">
                            Rugania Game Park, its owners, staff, and representatives will not be held liable for any loss, damage, injury,
                            or death resulting from interactions with wildlife, use of facilities, or participation in activities (including hunting)
                            on our premises. All guests are required to sign a mandatory indemnity form upon arrival.
                        </p>

                        <h3 className="text-2xl font-bold text-rugania-green mt-12 mb-6 serif">4. Hunting Ethics (Fair Chase)</h3>
                        <p className="mb-6">
                            Hunters are meticulously held to the highest standard of ethical (fair chase) hunting. Wounding an animal is considered a kill,
                            and the hunter is liable for the full trophy fee regardless of whether the animal is recovered. All rules and guidelines set
                            by the professional hunter (PH) must be strictly followed.
                        </p>

                        <h3 className="text-2xl font-bold text-rugania-green mt-12 mb-6 serif">5. Governing Law</h3>
                        <p className="mb-6">
                            These Terms are governed by and construed in accordance with the laws of the Republic of South Africa. Any disputes
                            shall be subject to the exclusive jurisdiction of the courts of South Africa.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Terms;
