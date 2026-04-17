import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileText, ExternalLink, BookOpen } from 'lucide-react';

const BRANCH_PDF = {
    komaMambal: '/koma-mambal.pdf',
    komaPoint: '/koma-point.pdf',
    komaRenon: '/koma-renon.pdf',
};

const Menu = ({ branch = 'komaMambal' }) => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
    const [pdfExists, setPdfExists] = useState(null); // null = checking

    const pdfUrl = BRANCH_PDF[branch] ?? BRANCH_PDF.komaMambal;

    useEffect(() => {
        setPdfExists(null);
        fetch(pdfUrl, { method: 'HEAD' })
            .then((res) => setPdfExists(res.ok))
            .catch(() => setPdfExists(false));
    }, [pdfUrl]);

    return (
        <section
            id="menu"
            className="py-20 relative overflow-hidden"
            ref={sectionRef}
        >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-coffee-800 mb-6 font-serif">
                        Our Menu
                    </h2>
                    <p className="text-xl text-coffee-700 max-w-2xl mx-auto">
                        Discover our carefully curated selection of premium beverages and treats
                    </p>
                </motion.div>

                {/* Loading */}
                {pdfExists === null && (
                    <div className="flex items-center justify-center h-40 text-coffee-600 animate-pulse">
                        Memuat menu...
                    </div>
                )}

                {/* PDF Preview — hanya jika ada */}
                {pdfExists === true && (
                    <motion.div
                        key={pdfUrl}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative rounded-3xl overflow-hidden shadow-2xl border border-beige-300 bg-beige-50"
                    >
                        <iframe
                            src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                            className="w-full"
                            style={{ height: '80vh', minHeight: '600px' }}
                            title="Menu KOMA Coffee"
                        />

                        {/* Floating action buttons — pojok kanan atas */}
                        <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.6 }}
                            className="absolute top-4 right-4 flex gap-2"
                        >
                            <motion.a
                                href={pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 bg-gold hover:bg-gold-dark text-white px-4 py-2 rounded-full font-semibold text-sm transition-colors shadow-lg backdrop-blur-sm"
                            >
                                <ExternalLink className="w-4 h-4" />
                                Buka
                            </motion.a>
                            <motion.a
                                href={pdfUrl}
                                download
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 bg-beige-50/90 hover:bg-beige-100 text-coffee-800 border border-beige-300 px-4 py-2 rounded-full font-semibold text-sm transition-colors shadow-md backdrop-blur-sm"
                            >
                                <FileText className="w-4 h-4" />
                                Download
                            </motion.a>
                        </motion.div>
                    </motion.div>
                )}

                {/* Fallback — jika PDF tidak ada */}
                {pdfExists === false && (
                    <motion.div
                        key={pdfUrl}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col items-center justify-center h-64 gap-6 px-8 text-center"
                    >
                        <BookOpen className="w-20 h-20 text-beige-400" />
                        <div>
                            <p className="text-3xl font-bold font-serif text-beige-400 line-through decoration-2">
                                Menu Tersedia
                            </p>
                            <p className="text-coffee-600 mt-3 text-lg">
                                Menu untuk cabang ini belum tersedia saat ini.
                            </p>
                            <p className="text-coffee-500 text-sm mt-1">
                                Silakan hubungi cabang langsung untuk informasi menu.
                            </p>
                        </div>
                    </motion.div>
                )}


            </div>
        </section>
    );
};

export default Menu;
