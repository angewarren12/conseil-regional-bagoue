import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from '../../styles/Region.module.css';

const PresidentPage = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Head>
        <title>Le Président - Conseil Régional de la Bagoué</title>
        <meta name="description" content="Découvrez le président du Conseil Régional de la Bagoué, M. Bruno Nabagné KONE, son parcours et ses réalisations." />
      </Head>

      <Navbar />

      <main className="pt-36">
        {/* Section de navigation */}
        <div className="bg-[#F7E859] py-8 mb-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="uppercase text-sm font-medium text-gray-600 mb-2">DÉCOUVREZ NOS INSTITUTIONS</p>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Le Président</h1>
              <p className="text-lg text-gray-700 bg-[#9B804E] bg-opacity-30 inline-block px-4 py-2 rounded-lg">
                Un leadership visionnaire pour le développement de la Bagoué
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 mt-6 text-sm text-gray-600">
              <a href="/" className="hover:text-gray-800">Accueil</a>
              <span>›</span>
              <span className="text-gray-800">Le Président</span>
            </div>
            {/* Navigation buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <a href="#parcours" className="px-6 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 text-gray-700 hover:text-gray-900">
                Parcours
              </a>
              <a href="#politique" className="px-6 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 text-gray-700 hover:text-gray-900">
                Politique
              </a>
              <a href="#formation" className="px-6 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 text-gray-700 hover:text-gray-900">
                Formation
              </a>
            </div>
          </div>
        </div>

        {/* En-tête de la page */}
        <div className="relative bg-[#E8F5E9] mb-12 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="absolute inset-0" style={{
              backgroundImage: `url('/images/motif-bagoue.png')`,
              backgroundSize: '200px',
              opacity: 0.1
            }}></div>

            {/* Formes géométriques animées */}
            <div className="absolute inset-0">
              <div className={`absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full ${styles.float}`}></div>
              <div className={`absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full ${styles.floatDelayed}`}></div>
              <div className={`absolute top-40 right-10 w-24 h-24 bg-white/10 rotate-45 ${styles.floatSlow}`}></div>
              <div className={`absolute bottom-40 left-20 w-48 h-16 bg-white/10 -rotate-12 ${styles.floatDelayedSlow}`}></div>
            </div>
          </div>

          {/* Contenu Hero */}
          <div className="container mx-auto px-4 py-20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-1/2 text-center lg:text-left">
                <motion.h1 
                  variants={fadeInUp}
                  className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
                >
                  M. Bruno Nabagné KONE
                </motion.h1>
                <motion.p 
                  variants={fadeInUp}
                  className="text-xl text-gray-700"
                >
                  Président du Conseil Régional de la Bagoué et Ministre de la Construction, 
                  du Logement et de l'Urbanisme de Côte d'Ivoire
                </motion.p>
              </div>
              
              <motion.div 
                variants={fadeInUp}
                className="lg:w-1/2"
              >
                <div className="relative w-80 h-80 lg:w-[500px] lg:h-[600px] mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl shadow-2xl transform -rotate-3"></div>
                  <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden transform rotate-3 transition-transform hover:rotate-0 duration-300">
                    <Image
                      src="/images/president.png"
                      alt="M. Bruno Nabagné KONE"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Contenu Principal */}
        <div className="container mx-auto px-4 py-16">
          {/* Navigation rapide */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {['Parcours', 'Politique', 'Formation'].map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                className="px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 text-blue-600 font-medium"
              >
                {section}
              </a>
            ))}
          </motion.div>

          {/* Sections de contenu */}
          <div className="grid grid-cols-1 gap-16">
            {/* Présentation */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl shadow-xl p-8 mb-16 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center justify-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 relative">
                    <span className="relative z-10">Présentation</span>
                    <div className="absolute bottom-0 left-0 w-full h-3 bg-green-200 opacity-50 -rotate-1"></div>
                  </h2>
                </div>
                <div className="relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full opacity-50 -z-10 blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-100 rounded-full opacity-50 -z-10 blur-2xl"></div>
                  
                  <div className="relative z-10 grid gap-6">
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-500">
                      <h3 className="text-lg font-semibold text-green-600 mb-2">Poste Actuel</h3>
                      <p className="text-gray-700">
                        Ministre de la Construction, du Logement et de l'Urbanisme de Côte d'Ivoire depuis le 10 juillet 2018
                      </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-yellow-500">
                      <h3 className="text-lg font-semibold text-yellow-600 mb-2">Parcours Ministériel</h3>
                      <p className="text-gray-700">
                        De 2011 à 2018, Ministre de la Communication, de l'Economie Numérique et de la Poste, 
                        Porte-parole du Gouvernement et Ministre de la Poste et des Technologies de l'Information 
                        et de la Communication
                      </p>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-500">
                      <h3 className="text-lg font-semibold text-green-600 mb-2">Réalisations Majeures</h3>
                      <p className="text-gray-700">
                        Artisan de la stratégie de développement du Numérique en Côte d'Ivoire, 
                        contribuant à hisser le pays parmi ceux ayant le plus fort taux de pénétration 
                        de la téléphonie mobile en Afrique
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Parcours Professionnel */}
              <div id="parcours" className="bg-gradient-to-br from-green-50 to-white rounded-3xl shadow-xl p-8 mb-16 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center justify-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 relative">
                    <span className="relative z-10">Parcours Professionnel</span>
                    <div className="absolute bottom-0 left-0 w-full h-3 bg-green-200 opacity-50 -rotate-1"></div>
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">France Telecom – ORANGE</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Directeur des Affaires Règlementaires, zone AMEA (Afrique, Moyen-Orient & Asie)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Directeur Délégué Audit Finance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Directeur Général Côte d'Ivoire Télécom</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Expérience en Finance</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Directeur Financier de Comafrique Entreprise (groupe Sifcom)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Directeur Financier du groupe Atlantique</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Expérience Politique */}
              <div id="politique" className="bg-gradient-to-br from-green-50 to-white rounded-3xl shadow-xl p-8 mb-16 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center justify-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 relative">
                    <span className="relative z-10">Expérience Politique</span>
                    <div className="absolute bottom-0 left-0 w-full h-3 bg-green-200 opacity-50 -rotate-1"></div>
                  </h2>
                </div>
                <div className="space-y-8">
                  {[
                    {
                      date: "Mai 2023",
                      title: "Candidat RHDP aux élections régionales",
                      description: "Présenté et investi comme candidat du RHDP aux élections régionales du 02 septembre 2023 dans la Bagoué."
                    },
                    {
                      date: "Février 2022 - Présent",
                      title: "Membre du Directoire du RHDP"
                    },
                    {
                      date: "Juillet 2019 - Février 2022",
                      title: "Coordonnateur Régional en Chef du RHDP",
                      description: "Pour la Région de la Bagoué"
                    }
                  ].map((item, index) => (
                    <div key={index} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-gradient-to-b before:from-green-500 before:to-green-300">
                      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="text-sm text-green-600 font-semibold mb-2">{item.date}</div>
                        <div className="text-xl font-bold text-gray-800 mb-2">{item.title}</div>
                        {item.description && (
                          <p className="text-gray-600">{item.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Formation */}
              <div id="formation" className="bg-gradient-to-br from-green-50 to-white rounded-3xl shadow-xl p-8 mb-16 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center justify-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 relative">
                    <span className="relative z-10">Formation</span>
                    <div className="absolute bottom-0 left-0 w-full h-3 bg-green-200 opacity-50 -rotate-1"></div>
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-500">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Formation Supérieure</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Diplômé de l'École Supérieure de Commerce</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Programme International de Management (PIM) - HEC Paris</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Diplôme Français de l'Expertise Comptable (Partiel)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-500">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Spécialisations</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Audit et organisation des entreprises</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Management international</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span>Finance et gestion d'entreprise</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PresidentPage;
