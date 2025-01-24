import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from '../../styles/Region.module.css';

const BureauPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const members = [
    {
      name: "Bruno Nabagné KONE",
      title: "Président",
      image: "/images/president.png",
      responsibilities: "Supervision générale des activités du Conseil Régional, représentation officielle de la région"
    },
    {
      name: "À venir",
      title: "1er Vice-Président",
      image: "/images/placeholder.png",
      responsibilities: "Assistance au président et coordination des projets régionaux"
    },
    {
      name: "À venir",
      title: "2ème Vice-Président",
      image: "/images/placeholder.png",
      responsibilities: "Suivi des programmes de développement et relations avec les partenaires"
    },
    {
      name: "À venir",
      title: "Secrétaire Général",
      image: "/images/placeholder.png",
      responsibilities: "Gestion administrative et coordination des services"
    },
    {
      name: "À venir",
      title: "Trésorier",
      image: "/images/placeholder.png",
      responsibilities: "Gestion financière et suivi budgétaire"
    }
  ];

  return (
    <>
      <Head>
        <title>Le Bureau - Conseil Régional de la Bagoué</title>
        <meta name="description" content="Découvrez le Bureau du Conseil Régional de la Bagoué, son organisation et ses membres." />
      </Head>

      <Navbar />

      <main className="pt-36">
        {/* Section de navigation */}
        <div className="bg-[#F7E859] py-8 mb-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="uppercase text-sm font-medium text-gray-600 mb-2">DÉCOUVREZ NOS INSTITUTIONS</p>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Le Bureau</h1>
              <p className="text-lg text-gray-700 bg-[#9B804E] bg-opacity-30 inline-block px-4 py-2 rounded-lg">
                L'organe exécutif du Conseil Régional de la Bagoué
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 mt-6 text-sm text-gray-600">
              <a href="/" className="hover:text-gray-800">Accueil</a>
              <span>›</span>
              <span className="text-gray-800">Le Bureau</span>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="container mx-auto px-4 mb-16">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-green-50 to-white rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center relative">
              <span className="relative z-10">Notre Mission</span>
              <div className="absolute bottom-0 left-0 w-full h-3 bg-green-200 opacity-50 -rotate-1"></div>
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed text-center mb-8">
              Le bureau du Conseil Régional de la Bagoué est constitué de membres engagés qui œuvrent 
              pour le développement économique, social et culturel de notre région. Notre équipe travaille 
              en synergie pour mettre en œuvre les projets et programmes qui contribuent à l'amélioration 
              du cadre de vie des populations.
            </p>
          </div>
        </div>

        {/* Membres du Bureau */}
        <div className="container mx-auto px-4 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center relative inline-block">
            <span className="relative z-10">Composition du Bureau</span>
            <div className="absolute bottom-0 left-0 w-full h-3 bg-green-200 opacity-50 -rotate-1"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {members.map((member, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative h-64 bg-gradient-to-br from-green-50 to-green-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <div className="text-green-600 font-medium mb-4">{member.title}</div>
                  <p className="text-gray-600">{member.responsibilities}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Responsabilités */}
        <div className="container mx-auto px-4 mb-16">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-green-50 to-white rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center relative">
              <span className="relative z-10">Responsabilités</span>
              <div className="absolute bottom-0 left-0 w-full h-3 bg-green-200 opacity-50 -rotate-1"></div>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-green-500">
                <h3 className="text-lg font-semibold text-green-600 mb-3">Direction Stratégique</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Définition des orientations stratégiques</li>
                  <li>• Supervision des projets majeurs</li>
                  <li>• Relations avec les partenaires</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-green-500">
                <h3 className="text-lg font-semibold text-green-600 mb-3">Gestion Administrative</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Coordination des services</li>
                  <li>• Suivi des procédures</li>
                  <li>• Gestion des ressources humaines</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-green-500">
                <h3 className="text-lg font-semibold text-green-600 mb-3">Gestion Financière</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Élaboration et suivi du budget</li>
                  <li>• Contrôle des dépenses</li>
                  <li>• Recherche de financements</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-green-500">
                <h3 className="text-lg font-semibold text-green-600 mb-3">Communication</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Relations publiques</li>
                  <li>• Communication institutionnelle</li>
                  <li>• Gestion de l'image de la région</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default BureauPage;
