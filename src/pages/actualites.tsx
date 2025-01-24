import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewsCard from '../components/NewsCard';
import newsData from '../data/news.json';

const ActualitesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  // Récupérer tous les tags uniques
  const allTags = Array.from(new Set(
    newsData.news.flatMap(news => news.tags || [])
  ));

  // Filtrer les actualités
  const filteredNews = newsData.news.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         news.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || (news.tags && news.tags.includes(selectedTag));
    return matchesSearch && matchesTag;
  });

  return (
    <>
      <Head>
        <title>Actualités - Conseil Régional de la Bagoué</title>
        <meta name="description" content="Actualités et événements du Conseil Régional de la Bagoué" />
      </Head>

      <Navbar />

      <main className="pt-36">
        {/* Section de navigation */}
        <div className="bg-[#F7E859] py-8 mb-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="uppercase text-sm font-medium text-gray-600 mb-2">RESTEZ INFORMÉ</p>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Actualités</h1>
              <p className="text-lg text-gray-700 bg-[#9B804E] bg-opacity-30 inline-block px-4 py-2 rounded-lg">
                Les dernières nouvelles de la région de la Bagoué
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 mt-6 text-sm text-gray-600">
              <a href="/" className="hover:text-gray-800">Accueil</a>
              <span>›</span>
              <span className="text-gray-800">Actualités</span>
            </div>
          </div>
        </div>

        {/* Filtres et recherche */}
        <div className="container mx-auto px-4 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-4">
              {/* Barre de recherche */}
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Rechercher une actualité..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <svg
                    className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Filtres par tags */}
              <div className="flex-shrink-0">
                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Tous les tags</option>
                  {allTags.map((tag) => (
                    <option key={tag} value={tag}>{tag}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Liste des actualités */}
        <div className="container mx-auto px-4 mb-16">
          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((newsItem, index) => (
                <motion.div
                  key={newsItem.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <NewsCard
                    id={newsItem.id}
                    image={newsItem.image}
                    date={newsItem.date}
                    title={newsItem.title}
                    description={newsItem.description}
                    tags={newsItem.tags}
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-500 mb-4">
                <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Aucune actualité trouvée</h3>
                <p>Essayez de modifier vos critères de recherche</p>
              </div>
            </div>
          )}
        </div>

        {/* Section Newsletter */}
        <div className="bg-gradient-to-br from-green-50 to-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Restez informé</h2>
              <p className="text-gray-600 mb-8">
                Abonnez-vous à notre newsletter pour recevoir les dernières actualités 
                de la région de la Bagoué directement dans votre boîte mail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="px-6 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  S'abonner
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ActualitesPage;
