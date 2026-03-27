import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedItem, setSelectedItem] = useState(null);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    const categories = ['All', 'Hot', 'Cold', 'Food'];

    const menuItems = [
        {
            id: 1,
            name: 'Espresso',
            category: 'Hot',
            price: 'Rp 35.000',
            description: 'Rich and bold single shot of pure coffee excellence',
            image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400',
        },
        {
            id: 2,
            name: 'Cappuccino',
            category: 'Hot',
            price: 'Rp 45.000',
            description: 'Perfect balance of espresso, steamed milk, and foam',
            image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400',
        },
        {
            id: 3,
            name: 'Latte',
            category: 'Hot',
            price: 'Rp 48.000',
            description: 'Smooth espresso with velvety steamed milk',
            image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400',
        },
        {
            id: 4,
            name: 'Iced Coffee',
            category: 'Cold',
            price: 'Rp 40.000',
            description: 'Refreshing cold brew over ice',
            image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400',
        },
        {
            id: 5,
            name: 'Frappuccino',
            category: 'Cold',
            price: 'Rp 55.000',
            description: 'Blended coffee drink with ice and cream',
            image: 'https://images.unsplash.com/photo-1562447447-4019687cc04c?w=400',
        },
        {
            id: 6,
            name: 'Matcha Latte',
            category: 'Cold',
            price: 'Rp 50.000',
            description: 'Premium matcha green tea with milk over ice',
            image: 'https://images.unsplash.com/photo-1536013452441-05af2d6ed669?w=400',
        },
        {
            id: 7,
            name: 'Croissant',
            category: 'Food',
            price: 'Rp 35.000',
            description: 'Buttery, flaky French pastry',
            image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400',
        },
        {
            id: 8,
            name: 'Avocado Toast',
            category: 'Food',
            price: 'Rp 75.000',
            description: 'Fresh avocado on artisan sourdough with toppings',
            image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400',
        },
    ];

    const filteredItems = selectedCategory === 'All'
        ? menuItems
        : menuItems.filter(item => item.category === selectedCategory);

    return (
        <section
            id="menu"
            className="py-20 bg-coffee-900 relative overflow-hidden"
            ref={sectionRef}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-cream mb-6 font-serif">
                        Our Menu
                    </h2>
                    <p className="text-xl text-cream/80 max-w-2xl mx-auto">
                        Discover our carefully curated selection of premium beverages and treats
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${selectedCategory === category
                                    ? 'bg-coffee-500 text-white shadow-lg scale-105'
                                    : 'glass text-cream/80 hover:bg-coffee-700/30'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Menu Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: '0 20px 40px rgba(139, 111, 71, 0.3)',
                                }}
                                onClick={() => setSelectedItem(item)}
                                className="glass rounded-2xl overflow-hidden cursor-pointer group"
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-coffee-900 to-transparent opacity-60" />
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h3 className="text-white font-bold text-xl font-serif">
                                            {item.name}
                                        </h3>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <p className="text-cream/70 text-sm mb-4 line-clamp-2">
                                        {item.description}
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-coffee-400 font-bold text-2xl">
                                            {item.price}
                                        </span>
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="bg-coffee-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-coffee-600 transition-colors"
                                        >
                                            Add
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedItem(null)}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="glass rounded-3xl overflow-hidden max-w-2xl w-full"
                        >
                            <div className="relative h-80">
                                <img
                                    src={selectedItem.image}
                                    alt={selectedItem.name}
                                    className="w-full h-full object-cover"
                                />
                                <button
                                    onClick={() => setSelectedItem(null)}
                                    className="absolute top-4 right-4 bg-coffee-900/80 p-2 rounded-full hover:bg-coffee-800 transition-colors"
                                >
                                    <X className="w-6 h-6 text-white" />
                                </button>
                            </div>
                            <div className="p-8">
                                <h3 className="text-4xl font-bold text-cream mb-2 font-serif">
                                    {selectedItem.name}
                                </h3>
                                <p className="text-coffee-400 text-sm mb-4">
                                    {selectedItem.category}
                                </p>
                                <p className="text-cream/80 text-lg mb-6">
                                    {selectedItem.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <span className="text-coffee-400 font-bold text-3xl">
                                        {selectedItem.price}
                                    </span>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-coffee-500 text-white px-8 py-3 rounded-full font-bold hover:bg-coffee-600 transition-colors"
                                    >
                                        Add to Order
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Menu;
