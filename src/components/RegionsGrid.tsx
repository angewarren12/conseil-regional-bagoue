import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Region {
  id: string;
  name: string;
  description: string;
  color: string;
  bgColor: string;
  imageUrl: string;
}

const regions: Region[] = [
  {
    id: "haut-sassandra",
    name: "Haut-Sassandra",
    description: "Une région économiquement importante",
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-50",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Location_Map_of_Haut-Sassandra_Region_in_C%C3%B4te_d%27Ivoire.svg"
  },
  {
    id: "bafing",
    name: "Bafing",
    description: "Région riche en culture et traditions",
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-50",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/69/Location_Map_of_Bafing_Region_in_C%C3%B4te_d%27Ivoire.svg"
  },
  {
    id: "worodougou",
    name: "Worodougou",
    description: "Une région au cœur de la Côte d'Ivoire",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7d/C%C3%B4te_d%27Ivoire_-_Worodougou.svg"
  },
  {
    id: "bounkani",
    name: "Bounkani",
    description: "Région du nord-est de la Côte d'Ivoire",
    color: "from-rose-500 to-pink-600",
    bgColor: "bg-rose-50",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Location_Map_of_Bounkani_Region_in_C%C3%B4te_d%27Ivoire.svg"
  },
  {
    id: "gontougo",
    name: "Gontougo",
    description: "Une région à la frontière du Ghana",
    color: "from-cyan-500 to-sky-600",
    bgColor: "bg-cyan-50",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Location_Map_of_Gontougo_Region_in_C%C3%B4te_d%27Ivoire.svg"
  },
  {
    id: "loh-djiboua",
    name: "Lôh Djiboua",
    description: "Région du sud de la Côte d'Ivoire",
    color: "from-lime-500 to-green-600",
    bgColor: "bg-lime-50",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Location_Map_of_L%C3%B4h-Djiboua_Region_in_C%C3%B4te_d%27Ivoire.svg"
  },
  {
    id: "gbokle",
    name: "Gbôkle",
    description: "Une région côtière du sud-ouest",
    color: "from-fuchsia-500 to-pink-600",
    bgColor: "bg-fuchsia-50",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Location_Map_of_Gb%C3%B4kle_Region_in_C%C3%B4te_d%27Ivoire.svg"
  },
  {
    id: "san-pedro",
    name: "San-Pedro",
    description: "Important port maritime de la Côte d'Ivoire",
    color: "from-amber-500 to-yellow-600",
    bgColor: "bg-amber-50",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Location_Map_of_San-P%C3%A9dro_Region_in_C%C3%B4te_d%27Ivoire.svg"
  },
  {
    id: "nawa",
    name: "Nawa",
    description: "Région agricole majeure",
    color: "from-teal-500 to-emerald-600",
    bgColor: "bg-teal-50",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Location_Map_of_Nawa_Region_in_C%C3%B4te_d%27Ivoire.svg"
  },
  {
    id: "goh",
    name: "Gôh",
    description: "Au centre-ouest de la Côte d'Ivoire",
    color: "from-indigo-500 to-blue-600",
    bgColor: "bg-indigo-50",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/90/Location_Map_of_G%C3%B4h_Region_in_C%C3%B4te_d%27Ivoire.svg"
  },
  {
    id: "folon",
    name: "Folon",
    description: "Région située au nord-ouest de la Côte d'Ivoire",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Location_Map_of_Folon_Region_in_C%C3%B4te_d%27Ivoire.svg"
  },
  {
    id: "kabadougou",
    name: "Kabadougou",
    description: "Une région dynamique au nord de la Côte d'Ivoire",
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-50",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Location_Map_of_Kabadougou_Region_in_C%C3%B4te_d%27Ivoire.svg"
  },
  {
    id: "bere",
    name: "Bere",
    description: "Région du centre-nord",
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Location_Map_of_B%C3%A9r%C3%A9_Region_in_C%C3%B4te_d%27Ivoire.svg"
  },
  {
    id: "poro",
    name: "Poro",
    description: "Une région historique du nord",
    color: "from-sky-500 to-cyan-600",
    bgColor: "bg-sky-50",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Location_Map_of_Poro_Region_in_C%C3%B4te_d%27Ivoire.svg"
  },
  {
    id: "hambol",
    name: "Hambol",
    description: "Au centre de la Côte d'Ivoire",
    color: "from-green-500 to-lime-600",
    bgColor: "bg-green-50",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Location_Map_of_Hambol_Region_in_C%C3%B4te_d%27Ivoire.svg"
  },
  {
    id: "tchologo",
    name: "Tchologo",
    description: "Région frontalière du nord",
    color: "from-yellow-500 to-amber-600",
    bgColor: "bg-yellow-50",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Location_Map_of_Tchologo_Region_in_C%C3%B4te_d%27Ivoire.svg"
  },
  {
    id: "la-me",
    name: "La Me",
    description: "Une région du sud-est",
    color: "from-red-500 to-orange-600",
    bgColor: "bg-red-50",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Location_Map_of_La_M%C3%A9_Region_in_C%C3%B4te_d%27Ivoire.svg"
  }
];

const RegionsGrid: React.FC = () => {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {regions.map((region) => (
          <div
            key={region.id}
            className="group relative"
            onMouseEnter={() => setHoveredRegion(region.id)}
            onMouseLeave={() => setHoveredRegion(null)}
          >
            <div className={`
              relative overflow-hidden rounded-xl
              transform transition-all duration-500 ease-in-out
              ${hoveredRegion === region.id ? 'scale-105' : 'scale-100'}
              ${region.bgColor} shadow-lg hover:shadow-xl
              h-72
            `}>
              {/* Image de la carte de la région */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="relative w-full h-full">
                  <Image
                    src={region.imageUrl}
                    alt={`Carte de la région ${region.name}`}
                    fill
                    className="object-contain opacity-20 group-hover:opacity-60 transition-opacity duration-500"
                    priority
                  />
                </div>
              </div>

              {/* Overlay de couleur */}
              <div className={`
                absolute inset-0 bg-gradient-to-br ${region.color}
                opacity-0 group-hover:opacity-10 transition-all duration-500
              `} />
              
              {/* Content Container */}
              <div className="relative h-full p-6 flex flex-col justify-between z-10">
                <div className="transform transition-all duration-500">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-gray-900">
                    {region.name}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-800">
                    {region.description}
                  </p>
                </div>
                
                {/* Button Container */}
                <div className="transform transition-all duration-500 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  <Link 
                    href={`/regions/${region.id}`}
                    className={`
                      inline-flex items-center px-6 py-3 
                      bg-white rounded-lg
                      transform transition-all duration-300
                      hover:bg-opacity-90 hover:scale-105
                      font-semibold text-sm text-gray-800
                      shadow-lg hover:shadow-xl
                    `}
                  >
                    Découvrir la région
                    <svg 
                      className="w-5 h-5 ml-2 -mr-1 transform transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M13 7l5 5m0 0l-5 5m5-5H6" 
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegionsGrid;
