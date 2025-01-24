import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../../components/Layout';
import projectsData from '../../data/projects.json';

const ProjectDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Trouver le projet correspondant à l'ID
  const project = projectsData.projects.find(p => p.id === id);

  if (!project) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Projet non trouvé</h1>
            <p className="text-gray-600 mb-8">Le projet que vous recherchez n'existe pas.</p>
            <Link
              href="/projets"
              className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
            >
              ← Retour aux projets
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En cours':
        return 'bg-green-100 text-green-800';
      case 'Planifié':
        return 'bg-blue-100 text-blue-800';
      case 'Terminé':
        return 'bg-gray-100 text-gray-800';
      case 'En pause':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gray-900">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className={`px-4 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                  <span className="text-sm font-medium text-green-400 bg-green-900/50 px-4 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
                <p className="text-xl text-gray-300">{project.description}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 py-4 text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-800">Accueil</Link>
            <span>›</span>
            <Link href="/projets" className="hover:text-gray-800">Projets</Link>
            <span>›</span>
            <span className="text-gray-800">{project.title}</span>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Galerie d'images */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Galerie du projet</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="relative h-48 cursor-pointer group overflow-hidden rounded-lg"
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image.url}
                    alt={image.caption}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Progression */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6 mb-8"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">Progression du projet</h2>
            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold text-green-600">{project.progress}%</div>
              <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-green-500 rounded-full transition-all duration-500"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>
          </motion.div>

          {/* Informations détaillées */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Informations clés</h2>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Budget</div>
                  <div className="font-medium text-gray-900">{project.details.budget}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Durée</div>
                  <div className="font-medium text-gray-900">{project.details.duration}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Localisation</div>
                  <div className="font-medium text-gray-900">{project.details.location}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Bénéficiaires</div>
                  <div className="font-medium text-gray-900">{project.details.beneficiaries}</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Objectifs</h2>
              <ul className="space-y-3">
                {project.details.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Navigation entre projets */}
          <div className="border-t pt-8">
            <div className="flex justify-between">
              <Link
                href="/projets"
                className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
              >
                ← Retour aux projets
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <div className="relative aspect-video">
                <Image
                  src={project.images[selectedImage].url}
                  alt={project.images[selectedImage].caption}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-white bg-black bg-opacity-50">
                <p>{project.images[selectedImage].caption}</p>
              </div>
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300"
                onClick={() => setSelectedImage(null)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {selectedImage > 0 && (
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(selectedImage - 1);
                  }}
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}
              {selectedImage < project.images.length - 1 && (
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(selectedImage + 1);
                  }}
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default ProjectDetailPage;
