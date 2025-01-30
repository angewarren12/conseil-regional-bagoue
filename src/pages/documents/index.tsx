import { useState, useEffect } from 'react';
import Head from 'next/head';
import { FaSearch, FaDownload, FaEye } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Document {
  id: string;
  title: string;
  category: string;
  date: string;
  fileUrl: string;
}

const documents: Document[] = [
  {
    id: '1',
    title: 'Budget prévisionnel 2025',
    category: 'Finances',
    date: '2025-01-15',
    fileUrl: '/documents/budget-2025.pdf',
  },
  {
    id: '2',
    title: 'Plan de développement régional',
    category: 'Planification',
    date: '2024-12-20',
    fileUrl: '/documents/plan-developpement.pdf',
  },
  {
    id: '3',
    title: 'Rapport annuel 2024',
    category: 'Rapports',
    date: '2024-12-31',
    fileUrl: '/documents/rapport-2024.pdf',
  },
];

const categories = ['Tous', 'Finances', 'Planification', 'Rapports'];

export default function Documents() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });
    setIsLoaded(true);
  }, []);

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Tous' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const heroVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      <Head>
        <title>Documents Administratifs - Conseil Régional de la Bagoué</title>
        <meta name="description" content="Accédez aux documents administratifs du Conseil Régional de la Bagoué" />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          className="bg-gradient-to-br from-[#4CAF50] via-[#9DC726] to-[#F7E859] text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
            <div className="text-center">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Documents Administratifs
              </motion.h1>
              <motion.p 
                className="text-xl max-w-2xl mx-auto opacity-90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Consultez et téléchargez les documents officiels du Conseil Régional
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Filtres et recherche */}
          <motion.div 
            className="mb-8 flex flex-col sm:flex-row gap-4 justify-between items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="relative flex-1 max-w-xs">
              <input
                type="text"
                placeholder="Rechercher un document..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-green-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-green-50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Liste des documents */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-xl shadow-sm overflow-hidden"
          >
            <div className="grid gap-4 p-6">
              <AnimatePresence mode="wait">
                {filteredDocuments.map((doc) => (
                  <motion.div
                    key={doc.id}
                    variants={itemVariants}
                    layout
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-lg border border-gray-100 hover:border-green-200 transition-colors duration-200 hover:shadow-md"
                    data-aos="fade-up"
                    data-aos-delay={parseInt(doc.id) * 100}
                  >
                    <div className="mb-4 sm:mb-0">
                      <h3 className="text-lg font-medium text-gray-900 mb-1">
                        {doc.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{doc.category}</span>
                        <span>•</span>
                        <span>{new Date(doc.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.open(doc.fileUrl, '_blank')}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
                      >
                        <FaEye className="text-gray-600" />
                        <span>Consulter</span>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          const link = document.createElement('a');
                          link.href = doc.fileUrl;
                          link.download = doc.title;
                          link.click();
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-200"
                      >
                        <FaDownload />
                        <span>Télécharger</span>
                      </motion.button>
                    </div>
                  </motion.div>
                ))}

                {filteredDocuments.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12 text-gray-500"
                  >
                    Aucun document ne correspond à votre recherche
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
