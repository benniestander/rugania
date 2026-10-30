import React from 'react';
import SEO from '../components/SEO';
import Gallery from '../components/Gallery';

const GalleryPage: React.FC = () => {
    return (
        <div>
            <SEO title="Gallery | Rugania Game Park" description="Explore the raw beauty of Rugania through our photo gallery. Scenic landscapes, wildlife, and accommodation in the Groot Marico." />
            {/* Hero Header */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-rugania-green text-center px-6">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="/Rugania Files/Gallery/Gallery10.jpg"
                        alt="Rugania Gallery"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-10 max-w-4xl mt-16">
                    <span className="text-rugania-gold uppercase tracking-[0.5em] text-[10px] font-black mb-6 block">Visual Heritage</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 serif">The Rugania Gallery</h1>
                </div>
            </section>

            <Gallery showTitle={false} />
        </div>
    );
};

export default GalleryPage;
