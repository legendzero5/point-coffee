import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Coffee, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Beranda', to: '/' },
        { name: 'Cerita Kami', to: '/cerita-kami' },
        { name: 'Cabang & Menu', to: '/cabang-menu' },
        { name: 'Reservasi', to: '/reservasi' },
        { name: 'Partnership', to: '/partnership' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-coffee-900/95 backdrop-blur-lg shadow-lg'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <motion.div
                        className="flex items-center space-x-2 cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/')}
                    >
                        <Coffee className="w-8 h-8 text-coffee-400" />
                        <span className="text-2xl font-bold font-serif text-cream">
                            KOMA
                        </span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className={({ isActive }) =>
                                    `text-cream/80 hover:text-coffee-300 transition-colors duration-300 cursor-pointer font-medium ${isActive ? 'text-coffee-300 font-bold' : ''
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/reservasi')}
                            className="bg-coffee-500 hover:bg-coffee-600 text-white px-6 py-2 rounded-full font-semibold transition-colors duration-300"
                        >
                            Reservasi Sekarang
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-cream p-2"
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-coffee-900/98 backdrop-blur-lg"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-4">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.to}
                                    to={link.to}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `block text-cream/80 hover:text-coffee-300 transition-colors duration-300 cursor-pointer py-2 ${isActive ? 'text-coffee-300 font-bold' : ''
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                            <button
                                onClick={() => {
                                    navigate('/reservasi');
                                    setIsMobileMenuOpen(false);
                                }}
                                className="w-full bg-coffee-500 hover:bg-coffee-600 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300"
                            >
                                Reservasi Sekarang
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
