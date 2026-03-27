import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OurBranches = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const navigate = useNavigate();

  const branches = [
    {
      id: 'komaMambal',
      name: 'Koma Mambal',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800',
      description: 'Cabang pertama kami, tempat segalanya bermula',
      location: 'Jl. Menteng Raya No. 45, Jakarta Pusat',
    },
    {
      id: 'komaPoint',
      name: 'Koma Point',
      image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800',
      description: 'Spot modern dengan view menakjubkan',
      location: 'Sudirman Plaza Lt. G, Jakarta Selatan',
    },
    {
      id: 'komaRenon',
      name: 'Koma Renon',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800',
      description: 'Tropical vibes dengan pemandangan rice terrace',
      location: 'Jl. Raya Ubud No. 88, Gianyar, Bali',
    },
  ];

  const handleViewDetail = (branchId) => {
    navigate(`/cabang-menu?branch=${branchId}`);
  };

  return (
    <section
      id="branches"
      className="py-20 bg-coffee-900"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-cream mb-6 font-serif">
            Cabang Kami
          </h2>
          <p className="text-xl text-cream/80 max-w-2xl mx-auto">
            Tiga lokasi dengan pengalaman yang berbeda
          </p>
        </motion.div>

        {/* 3 Branch Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="h-64 overflow-hidden">
                <img
                  src={branch.image}
                  alt={branch.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-cream font-bold text-2xl mb-3 font-serif">
                  {branch.name}
                </h3>
                <p className="text-cream/80 mb-4">
                  {branch.description}
                </p>
                <div className="flex items-start gap-2 text-cream/70 text-sm mb-6">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{branch.location}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleViewDetail(branch.id)}
                  className="w-full bg-coffee-500 hover:bg-coffee-600 text-white py-3 rounded-full font-semibold transition-colors"
                >
                  Lihat Detail
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBranches;
