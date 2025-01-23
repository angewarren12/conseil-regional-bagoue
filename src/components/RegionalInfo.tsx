import React from 'react';
import { IconType } from 'react-icons';
import { FaRoad, FaTree, FaUsers, FaLandmark, FaIndustry, FaUmbrellaBeach } from 'react-icons/fa';
import useParallax from '../hooks/useParallax';

interface InfoCardProps {
  title: string;
  content: string;
  Icon: IconType;
  color: string;
}

const InfoCard = ({ title, content, Icon, color }: InfoCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transform transition-transform hover:scale-105 h-full flex flex-col">
      <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${color}`}>
        <Icon className="text-white text-2xl" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 flex-grow">{content}</p>
    </div>
  );
};

const RegionalInfo = () => {
  const { getParallaxStyle } = useParallax();
  
  const infoCards = [
    {
      title: "POPULATION",
      content: "Une population diversifiée, principalement composée des ethnies Sénoufo et Malinké, créant une riche mosaïque culturelle et sociale.",
      Icon: FaUsers,
      color: "bg-orange-500"
    },
    {
      title: "ENVIRONNEMENT",
      content: "Caractérisée par une savane arborée et des plateaux, la région bénéficie d'un climat tropical avec une importante biodiversité et des ressources naturelles précieuses.",
      Icon: FaTree,
      color: "bg-green-500"
    },
    {
      title: "CULTURE",
      content: "Riche en traditions avec ses danses, sa musique et son artisanat, la région perpétue un patrimoine culturel unique, notamment à travers les festivals et célébrations locales.",
      Icon: FaLandmark,
      color: "bg-purple-500"
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background avec parallaxe */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white"
        style={getParallaxStyle(0.1)}
      >
        {/* Formes décoratives */}
        <div className="absolute inset-0">
          {/* Grands cercles */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#4CAF50]/5 rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-[30rem] h-[30rem] bg-[#F7E859]/5 rounded-full"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#9DC726]/5 rounded-full"></div>
          
          {/* Petits cercles */}
          <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-[#4CAF50]/5 rounded-full"></div>
          <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-[#F7E859]/5 rounded-full"></div>
          
          {/* Lignes décoratives */}
          <div className="absolute top-1/4 right-0 w-48 h-1 bg-gradient-to-r from-[#4CAF50]/20 to-transparent"></div>
          <div className="absolute bottom-1/3 left-0 w-64 h-1 bg-gradient-to-r from-transparent to-[#F7E859]/20"></div>
        </div>
      </div>

      {/* Contenu principal (fixe) */}
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Découvrez la Région de la Bagoué
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {infoCards.map((card, index) => (
            <div 
              key={index}
              className="relative group h-full"
            >
              <InfoCard {...card} />
            </div>
          ))}
        </div>

        {/* Sections détaillées */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Section Économie */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gradient-to-br from-[#4CAF50] to-[#9DC726] rounded-lg text-white">
                <FaIndustry size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">ÉCONOMIE</h3>
                <p className="text-gray-600">
                  L'économie de la région de la Bagoué est principalement basée sur l'agriculture. 
                  Le coton représente la principale culture de rente, faisant de la région l'un des 
                  plus grands producteurs de Côte d'Ivoire. L'anacarde et les cultures vivrières 
                  comme le maïs, le riz et l'igname complètent les activités agricoles.
                </p>
              </div>
            </div>
          </div>

          {/* Section Tourisme */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gradient-to-br from-[#9DC726] to-[#F7E859] rounded-lg text-white">
                <FaUmbrellaBeach size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">TOURISME & DÉCOUVERTE</h3>
                <p className="text-gray-600">
                  La région regorge de sites touristiques remarquables, notamment le Mont Korhogo 
                  offrant une vue panoramique exceptionnelle. Les villages traditionnels Sénoufo 
                  permettent de découvrir l'artisanat local, les danses traditionnelles et 
                  l'architecture typique de la région.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionalInfo;
