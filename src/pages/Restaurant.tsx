import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Wine, Coffee, Clock, Star } from 'lucide-react';

const Restaurant = () => {
  const diningOptions = [
    {
      title: "The Grand Dining Room",
      description: "Experience culinary excellence in our signature restaurant, featuring a menu that celebrates local seasonal ingredients with modern European techniques.",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      icon: <Utensils className="w-6 h-6 text-amber-600" />,
      features: ["Fine Dining", "Dress Code: Smart Elegant", "Dinner Only"]
    },
    {
      title: "The Wine Cellar",
      description: "An intimate subterranean dining experience surrounded by our extensive collection of vintage wines. Perfect for private celebrations and romantic dinners.",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      icon: <Wine className="w-6 h-6 text-amber-600" />,
      features: ["Private Dining", "Sommelier Service", "Tasting Menu"]
    },
    {
      title: "The Terrace",
      description: "Enjoy al fresco dining with spectacular views of the valley. A relaxed setting for breakfast, light lunches, and sundowners.",
      image: "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      icon: <Coffee className="w-6 h-6 text-amber-600" />,
      features: ["Casual Dining", "Outdoor Seating", "All Day Menu"]
    }
  ];

  const menuHighlights = [
    {
      course: "Starters",
      items: [
        { name: "Seared Scallops", description: "Cauliflower purée, crispy pancetta, truffle oil", price: "R 245" },
        { name: "Venison Carpaccio", description: "Parmesan shavings, rocket, balsamic glaze", price: "R 195" },
        { name: "Wild Mushroom Risotto", description: "Truffle foam, aged parmesan", price: "R 185" }
      ]
    },
    {
      course: "Mains",
      items: [
        { name: "Aged Beef Fillet", description: "Fondant potato, seasonal greens, red wine jus", price: "R 420" },
        { name: "Pan-Seared Salmon", description: "Asparagus, lemon butter sauce, crushed potatoes", price: "R 380" },
        { name: "Herb-Crusted Karoo Lamb", description: "Minted pea purée, roasted root vegetables", price: "R 410" }
      ]
    },
    {
      course: "Desserts",
      items: [
        { name: "Dark Chocolate Fondant", description: "Vanilla bean ice cream, berry coulis", price: "R 150" },
        { name: "Lemon Tart", description: "Meringue shard, raspberry sorbet", price: "R 135" },
        { name: "Local Artisanal Cheese Board", description: "Preserves, candied nuts, crackers", price: "R 220" }
      ]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Restaurant Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6"
          >
            Culinary Excellence
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 font-light"
          >
            Savor the flavors of our region, masterfully crafted by our award-winning culinary team.
          </motion.p>
        </div>
      </section>

      {/* Dining Options */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">Our Venues</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {diningOptions.map((option, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={option.image} 
                    alt={option.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md">
                    {option.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif text-slate-900 mb-3">{option.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {option.description}
                  </p>
                  <ul className="space-y-2 mb-8">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-500">
                        <Star className="w-4 h-4 text-amber-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-3 border border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white transition-colors duration-300 rounded uppercase tracking-wider text-sm font-medium">
                    Reserve a Table
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Menu */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">Sample Menu</h2>
            <p className="text-slate-500 italic mb-4">Our menu changes seasonally to ensure the freshest ingredients.</p>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <div className="space-y-16">
            {menuHighlights.map((section, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-serif text-amber-700 text-center mb-8 uppercase tracking-widest">{section.course}</h3>
                <div className="space-y-8">
                  {section.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline border-b border-slate-100 pb-4">
                      <div className="mb-2 sm:mb-0 max-w-2xl">
                        <h4 className="text-lg font-medium text-slate-900 mb-1">{item.name}</h4>
                        <p className="text-slate-500 text-sm">{item.description}</p>
                      </div>
                      <div className="text-amber-700 font-serif whitespace-nowrap sm:pl-4">
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Opening Hours & Info */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h4 className="text-xl font-serif mb-6 text-amber-500">Breakfast</h4>
              <p className="text-slate-300 mb-2">Monday - Friday</p>
              <p className="text-white font-medium mb-4">06:30 - 10:30</p>
              <p className="text-slate-300 mb-2">Sat, Sun & Public Holidays</p>
              <p className="text-white font-medium">07:00 - 11:00</p>
            </div>
            <div>
              <h4 className="text-xl font-serif mb-6 text-amber-500">Lunch</h4>
              <p className="text-slate-300 mb-2">Daily (The Terrace)</p>
              <p className="text-white font-medium mb-4">12:30 - 15:00</p>
            </div>
            <div>
              <h4 className="text-xl font-serif mb-6 text-amber-500">High Tea</h4>
              <p className="text-slate-300 mb-2">Saturday & Sunday</p>
              <p className="text-white font-medium mb-4">14:00 - 17:00</p>
              <p className="text-sm text-slate-400 italic">Reservations essential</p>
            </div>
            <div>
              <h4 className="text-xl font-serif mb-6 text-amber-500">Dinner</h4>
              <p className="text-slate-300 mb-2">Daily (Grand Dining Room)</p>
              <p className="text-white font-medium mb-4">18:30 - 22:30</p>
              <p className="text-sm text-slate-400 italic">Last seating at 21:00</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Restaurant;
