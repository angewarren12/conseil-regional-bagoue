import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json';

const ProjetsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrer les projets
  const filteredProjects = projectsData.projects.filter(project => {
    const matchesCategory = !selectedCategory || project.category === selectedCategory;
    const matchesStatus = !selectedStatus || project.status === selectedStatus;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesStatus && matchesSearch;
  });

  return (
    <Layout>
      <Head>
        <title>Projets - Conseil Régional de la Bagoué</title>
        <meta name="description" content="Découvrez les projets de développement du Conseil Régional de la Bagoué" />
      </Head>

      <main>
        {/* Section de navigation */}
        <div className="bg-[#F7E859] py-8 mb-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="uppercase text-sm font-medium text-gray-600 mb-2">DÉVELOPPEMENT RÉGIONAL</p>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Nos Projets</h1>
              <p className="text-lg text-gray-700 bg-[#9B804E] bg-opacity-30 inline-block px-4 py-2 rounded-lg">
                Découvrez les projets qui façonnent l'avenir de notre région
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 mt-6 text-sm text-gray-600">
              <a href="/" className="hover:text-gray-800">Accueil</a>
              <span>›</span>
              <span className="text-gray-800">Projets</span>
            </div>
          </div>
        </div>

        {/* Filtres et recherche */}
        <div className="container mx-auto px-4 mb-12">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Recherche */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Rechercher un projet..."
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

                {/* Filtre par catégorie */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Toutes les catégories</option>
                  {projectsData.categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>

                {/* Filtre par statut */}
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Tous les statuts</option>
                  {projectsData.statuses.map((status) => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Liste des projets */}
        <div className="container mx-auto px-4 mb-16">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-500 mb-4">
                <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Aucun projet trouvé</h3>
                <p>Essayez de modifier vos critères de recherche</p>
              </div>
            </div>
          )}
        </div>

        {/* Section statistiques */}
        <div className="bg-gradient-to-br from-green-50 to-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                  <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
                  <div className="text-gray-600">Projets en cours</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                  <div className="text-4xl font-bold text-green-600 mb-2">5.5B</div>
                  <div className="text-gray-600">FCFA investis</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                  <div className="text-4xl font-bold text-green-600 mb-2">375k</div>
                  <div className="text-gray-600">Bénéficiaires</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                  <div className="text-4xl font-bold text-green-600 mb-2">28</div>
                  <div className="text-gray-600">Localités touchées</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ProjetsPage;
