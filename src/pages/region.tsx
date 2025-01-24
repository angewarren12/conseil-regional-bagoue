import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { FaMapMarkerAlt, FaCloud, FaTree } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Region.module.css';

const RegionPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>La Région - Conseil Régional de la Bagoué</title>
        <meta name="description" content="Découvrez la région de la Bagoué, sa situation géographique, son organisation administrative et ses caractéristiques naturelles." />
      </Head>

      <Navbar />

      <main className="pt-36">
        {/* En-tête de la page */}
        <div className="relative bg-[#F7E859] mb-12 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="absolute inset-0" style={{
              backgroundImage: `url('/images/motif-bagoue.png')`,
              backgroundSize: '200px',
              opacity: 0.1
            }}></div>

            {/* Formes géométriques animées */}
            <div className="absolute inset-0">
              {/* Cercles */}
              <div className={`absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full ${styles.float}`}></div>
              <div className={`absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full ${styles.floatDelayed}`}></div>
              
              {/* Carré */}
              <div className={`absolute top-40 right-10 w-24 h-24 bg-white/10 rotate-45 ${styles.floatSlow}`}></div>
              
              {/* Rectangle */}
              <div className={`absolute bottom-40 left-20 w-48 h-16 bg-white/10 -rotate-12 ${styles.floatDelayedSlow}`}></div>
              
              {/* Triangle */}
              <div className={`absolute top-1/2 left-1/3 w-0 h-0 border-l-[30px] border-l-transparent border-b-[52px] border-b-white/10 border-r-[30px] border-r-transparent ${styles.float}`}></div>
              
              {/* Hexagone */}
              <div 
                className={`absolute bottom-1/3 right-1/3 w-16 h-16 bg-white/10 ${styles.floatDelayed}`}
                style={{
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                }}
              ></div>
            </div>
          </div>
          
          <div className="container mx-auto px-4 py-16 relative">
            <div className="flex flex-col items-center text-center">
              <div className="inline-block bg-black/5 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                <p className="text-gray-800 text-sm font-medium tracking-wider uppercase">
                  Découvrez notre région
                </p>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">La Région de la Bagoué</h1>
              <p className="text-xl text-white bg-black/20 px-6 py-2 rounded-lg max-w-2xl backdrop-blur-sm">
                Une terre d'opportunités au cœur du nord de la Côte d'Ivoire
              </p>
              <div className="flex items-center space-x-2 text-gray-600 mt-8">
                <span>Accueil</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-gray-800 font-medium">La Région</span>
              </div>
            </div>
          </div>

          {/* Vague décorative en bas */}
          <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
            <svg viewBox="0 0 2880 48" className="absolute bottom-0 w-full text-white">
              <path
                d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Situation Géographique */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Situation Géographique
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/carte-bagoue.png"
                  alt="Carte géologique de la région de la Bagoué"
                  fill
                  className="object-contain bg-white"
                />
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  La région de la Bagoué, située au nord de la Côte d'Ivoire, s'étend sur une superficie de 9 350 km².
                  Elle est limitée au nord par la République du Mali, au sud par la région du Béré, à l'est par la région
                  du Poro et à l'ouest par la région du Folon.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Chef-lieu de région : <strong>Boundiali</strong>
                </p>
                <div className="pl-4 border-l-4 border-green-500">
                  <p className="text-gray-600">
                    <strong>Coordonnées géographiques :</strong><br />
                    Latitude : 9°31'N<br />
                    Longitude : 6°29'O
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Organisation Administrative */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Organisation Administrative
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Boundiali',
                  image: '/images/tengrela.png',
                  description: 'Chef-lieu de région et département'
                },
                {
                  name: 'Kouto',
                  image: '/images/tengrela.png',
                  description: 'Département'
                },
                {
                  name: 'Tengréla',
                  image: '/images/tengrela.png',
                  description: 'Département'
                }
              ].map((city, index) => (
                <div key={index} className="relative group">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src={city.image}
                      alt={`Ville de ${city.name}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-30 transition-opacity"></div>
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{city.name}</h3>
                      <p className="text-white/90">{city.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Données Démographiques */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Population et Démographie
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Statistiques générales */}
              <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
                <div className="text-center p-6 bg-gradient-to-br from-green-600 to-green-800 rounded-lg shadow-lg">
                  <h3 className="text-4xl font-bold text-white mb-2">515 890</h3>
                  <p className="text-green-100">Habitants (RGPH 2021)</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-lg border border-green-100">
                    <h4 className="text-2xl font-semibold text-green-800">52%</h4>
                    <p className="text-green-700">Femmes</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-lg border border-green-100">
                    <h4 className="text-2xl font-semibold text-green-800">48%</h4>
                    <p className="text-green-700">Hommes</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-lg border border-green-100">
                    <h4 className="text-2xl font-semibold text-green-800">60%</h4>
                    <p className="text-green-700">- de 25 ans</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-lg border border-green-100">
                    <h4 className="text-2xl font-semibold text-green-800">3.2%</h4>
                    <p className="text-green-700">Croissance annuelle</p>
                  </div>
                </div>
              </div>

              {/* Répartition par département */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Répartition par Département</h3>
                <div className="space-y-6">
                  {[
                    { 
                      name: 'Boundiali', 
                      population: 215000,
                      percentage: 41.7,
                      color: 'bg-green-500'
                    },
                    { 
                      name: 'Kouto', 
                      population: 185000,
                      percentage: 35.9,
                      color: 'bg-green-400'
                    },
                    { 
                      name: 'Tengréla', 
                      population: 115890,
                      percentage: 22.4,
                      color: 'bg-green-300'
                    }
                  ].map((dept, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>{dept.name}</span>
                        <span>{dept.population.toLocaleString()} hab. ({dept.percentage}%)</span>
                      </div>
                      <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${dept.color} transition-all duration-1000`}
                          style={{ 
                            width: `${dept.percentage}%`,
                            transform: scrollY > 800 ? 'scaleX(1)' : 'scaleX(0)',
                            transformOrigin: 'left'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Caractéristiques démographiques */}
              <div className="md:col-span-2 bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Caractéristiques Démographiques</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-4 border border-green-100 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Groupes Ethniques</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Sénoufo (majoritaire)</li>
                      <li>• Malinké</li>
                      <li>• Dioula</li>
                      <li>• Autres communautés</li>
                    </ul>
                  </div>
                  <div className="p-4 border border-green-100 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Répartition</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Population urbaine: 35%</li>
                      <li>• Population rurale: 65%</li>
                      <li>• Densité: 48,4 hab/km²</li>
                    </ul>
                  </div>
                  <div className="p-4 border border-green-100 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Activités</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Agriculture: 60%</li>
                      <li>• Commerce: 25%</li>
                      <li>• Services: 10%</li>
                      <li>• Autres: 5%</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Caractéristiques Naturelles */}
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Caractéristiques Naturelles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Climat */}
              <div className="relative h-96 group">
                <div
                  className="absolute inset-0 rounded-xl overflow-hidden"
                  style={{
                    backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))"
                  }}
                >
                  <Image
                    src="/images/climat-bagoue.png"
                    alt="Climat de la Bagoué"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-full p-6 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent text-white rounded-xl">
                  <div className="mb-4">
                    <FaCloud className="text-4xl mb-2" />
                    <h3 className="text-2xl font-bold mb-2">Climat</h3>
                  </div>
                  <p className="text-white/90">
                    Climat tropical de type soudanais avec deux saisons distinctes. 
                    Température moyenne de 26°C et pluviométrie annuelle de 1200mm.
                  </p>
                </div>
              </div>

              {/* Végétation */}
              <div className="relative h-96 group">
                <div
                  className="absolute inset-0 rounded-xl overflow-hidden"
                  style={{
                    backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))"
                  }}
                >
                  <Image
                    src="/images/vegetation-bagoue.png"
                    alt="Végétation de la Bagoué"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-full p-6 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent text-white rounded-xl">
                  <div className="mb-4">
                    <FaTree className="text-4xl mb-2" />
                    <h3 className="text-2xl font-bold mb-2">Végétation</h3>
                  </div>
                  <p className="text-white/90">
                    Savane arborée caractéristique avec des espèces adaptées au climat soudanais.
                    Présence de forêts galeries le long des cours d'eau.
                  </p>
                </div>
              </div>

              {/* Relief et Sols */}
              <div className="relative h-96 group">
                <div
                  className="absolute inset-0 rounded-xl overflow-hidden"
                  style={{
                    backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))"
                  }}
                >
                  <Image
                    src="/images/vegetation-bagoue.png"
                    alt="Ressources de la Bagoué"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-full p-6 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent text-white rounded-xl">
                  <div className="mb-4">
                    <FaMapMarkerAlt className="text-4xl mb-2" />
                    <h3 className="text-2xl font-bold mb-2">Relief et Sols</h3>
                  </div>
                  <p className="text-white/90">
                    Relief peu accidenté avec des plateaux et des plaines.
                    Sols ferralitiques propices à l'agriculture et à l'élevage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default RegionPage;
