import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const ConseilPage = () => {
  return (
    <>
      <Head>
        <title>Le Conseil - Conseil Régional de la Bagoué</title>
        <meta name="description" content="Découvrez le Conseil Régional de la Bagoué, ses conseillers et son fonctionnement." />
      </Head>

      <Navbar />

      <main className="pt-36">
        {/* En-tête de la page */}
        <div className="relative bg-gradient-to-r from-blue-900 to-blue-800 mb-12">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'url("/images/motif-bagoue.png")',
                backgroundSize: '200px'
              }}
            ></div>
          </div>

          <div className="container mx-auto px-4 py-16 relative">
            <div className="flex flex-col items-center text-center">
              <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                <p className="text-white/90 text-sm font-medium tracking-wider uppercase">
                  Institution
                </p>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Le Conseil</h1>
              <p className="text-xl text-white/90 max-w-2xl">
                L'assemblée délibérante du Conseil Régional de la Bagoué
              </p>
            </div>
          </div>

          {/* Vague décorative */}
          <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
            <svg viewBox="0 0 2880 48" className="absolute bottom-0 w-full text-white">
              <path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="currentColor" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Contenu à venir */}
          <div className="max-w-3xl mx-auto text-center py-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Page en construction</h2>
            <p className="text-gray-600">
              Le contenu détaillé du Conseil Régional sera bientôt disponible.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ConseilPage;
