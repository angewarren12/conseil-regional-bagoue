import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import RegionModal from './RegionModal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface Region {
  id: string;
  name: string;
  description: string;
  color: string;
  bgColor: string;
  imageUrl: string;
  gradient: string;
  details: {
    population: string;
    superficie: string;
    chefLieu: string;
    departements: string[];
    sousPrefs: string[];
    activites: string[];
    attractions: string[];
    particularites: string[];
  };
}

const regions: Region[] = [
  {
    id: "bagoue",
    name: "Bagoué",
    description: "La région de la Bagoué, située au nord de la Côte d'Ivoire, tire son nom du fleuve Bagoué (ou Bagbè qui signifie 'fleuve blanc').",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
    imageUrl: "/images/regions/bagoue.jpg",
    gradient: 'from-green-500 to-emerald-600',
    details: {
      population: "515 890",
      superficie: "9 500",
      chefLieu: "Boundiali",
      departements: [
        "Boundiali",
        "Kouto",
        "Tengrela"
      ],
      sousPrefs: [
        "Boundiali",
        "Ganaoni",
        "Siempurgo",
        "Kasséré",
        "Baya",
        "Kouto",
        "Gbon",
        "Kolia",
        "Sianhala",
        "Blessegué",
        "Tengrela",
        "Kanakono",
        "Débètè",
        "Papara"
      ],
      activites: [
        "Agriculture vivrière",
        "Culture du coton",
        "Élevage",
        "Commerce transfrontalier"
      ],
      attractions: [
        "Parc national de la Comoé",
        "Fleuve Bagoué",
        "Artisanat traditionnel",
        "Sites culturels"
      ],
      particularites: [
        "Fait partie du District des Savanes",
        "126 villages traditionnels",
        "Position stratégique à la frontière du Mali",
        "Riche patrimoine culturel"
      ]
    }
  },
  {
    id: "haut-sassandra",
    name: "Haut-Sassandra",
    description: "Une région majeure de l'ouest ivoirien, avec Daloa comme chef-lieu, caractérisée par sa richesse agricole et sa diversité culturelle.",
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-50",
    imageUrl: "/images/regions/haut-sassandra.jpg",
    gradient: 'from-purple-500 to-violet-600',
    details: {
      population: "1 739 697",
      superficie: "17 761",
      chefLieu: "Daloa",
      departements: [
        "Daloa",
        "Issia",
        "Vavoua",
        "Zoukougbeu"
      ],
      sousPrefs: [
        "Daloa",
        "Gonaté",
        "Domangbeu",
        "Issia",
        "Saïoua",
        "Boguedia",
        "Tapeguia",
        "Iboguhe",
        "Namane",
        "Nahio",
        "Vavoua",
        "Bazra-Nattis",
        "Ketro-Bassam",
        "Séïtifla",
        "Gadouan",
        "Zaibo",
        "Bédiala",
        "Boguhé",
        "Zoukougbeu",
        "Dania"
      ],
      activites: [
        "Production de cacao",
        "Culture du café",
        "Agriculture vivrière",
        "Commerce",
        "Industrie de transformation"
      ],
      attractions: [
        "Forêt classée de Daloa",
        "Marchés traditionnels",
        "Sites touristiques",
        "Festivals culturels"
      ],
      particularites: [
        "Troisième région la plus peuplée",
        "Important centre économique",
        "Carrefour commercial",
        "Diversité ethnique"
      ]
    }
  },
  {
    id: "bafing",
    name: "Bafing",
    description: "Une région du nord-ouest de la Côte d'Ivoire, tirant son nom du fleuve Bafing qui signifie 'fleuve noir' en langues mandingues.",
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-50",
    imageUrl: "/images/regions/bafing.jpg",
    gradient: 'from-violet-500 to-purple-600',
    details: {
      population: "215 298",
      superficie: "8 720",
      chefLieu: "Touba",
      departements: [
        "Touba",
        "Koro",
        "Ouaninou"
      ],
      sousPrefs: [
        "Touba",
        "Koro",
        "Ouaninou",
        "Booko",
        "Borotou",
        "Guintéguéla"
      ],
      activites: [
        "Agriculture vivrière",
        "Culture du café",
        "Élevage",
        "Commerce transfrontalier"
      ],
      attractions: [
        "Mont Touba",
        "Forêt classée",
        "Sites culturels traditionnels",
        "Artisanat local"
      ],
      particularites: [
        "Région frontalière avec la Guinée",
        "Relief montagneux",
        "Riche patrimoine culturel mandingue",
        "Zone de transition climatique soudano-guinéenne"
      ]
    }
  },
  {
    id: "worodougou",
    name: "Worodougou",
    description: "Située dans le centre-ouest du pays, la région du Worodougou fait partie du district du Woroba avec Séguéla comme chef-lieu.",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    imageUrl: "/images/regions/worodougou.jpg",
    gradient: 'from-blue-500 to-indigo-600',
    details: {
      population: "429 812",
      superficie: "21 900",
      chefLieu: "Séguéla",
      departements: [
        "Séguéla",
        "Kani"
      ],
      sousPrefs: [
        "Sifié",
        "Kamalo",
        "Siena",
        "Worofla",
        "Bobi",
        "Diarabana"
      ],
      activites: [
        "Agriculture",
        "Élevage",
        "Exploitation minière",
        "Commerce"
      ],
      attractions: [
        "Sites historiques de Séguéla",
        "Artisanat traditionnel",
        "Marchés locaux",
        "Festivals culturels"
      ],
      particularites: [
        "Important centre minier",
        "Carrefour commercial régional",
        "Diversité culturelle",
        "Architecture traditionnelle"
      ]
    }
  },
  {
    id: "bounkani",
    name: "Bounkani",
    description: "Située au nord-est de la Côte d'Ivoire, la région du Bounkani est une zone historique abritant le premier royaume formé au 16ème siècle dans les frontières de l'actuelle Côte d'Ivoire.",
    color: "from-rose-500 to-pink-600",
    bgColor: "bg-rose-50",
    imageUrl: "/images/regions/bounkani.jpg",
    gradient: 'from-rose-500 to-pink-600',
    details: {
      population: "427 037",
      superficie: "22 091",
      chefLieu: "Bouna",
      departements: [
        "Bouna",
        "Doropo",
        "Nassian",
        "Téhini"
      ],
      sousPrefs: [
        "Bouna",
        "Doropo",
        "Nassian",
        "Téhini",
        "Tougbo"
      ],
      activites: [
        "Agriculture traditionnelle",
        "Production d'anacarde",
        "Exploitation du karité",
        "Élevage",
        "Exploitation minière (or)"
      ],
      attractions: [
        "Parc national de la Comoé",
        "Festival du Bounkani",
        "Fête de l'igname (Dongbô diguê)",
        "Kroubi (fête Malinké)",
        "Djôrô (rites Lobi)"
      ],
      particularites: [
        "Plus vaste région du pays",
        "50% occupée par le Parc de la Comoé",
        "Zone agro-pastorale importante",
        "Diversité ethnique (Koulango, Malinké, Lobi)",
        "Frontière avec le Burkina Faso et le Ghana"
      ]
    }
  },
  {
    id: "gontougo",
    name: "Gontougo",
    description: "Située au nord-est de la Côte d'Ivoire, la région du Gontougo est une région cosmopolite qui constitue avec la région du Bounkani le district du Zanzan.",
    color: "from-cyan-500 to-sky-600",
    bgColor: "bg-cyan-50",
    imageUrl: "/images/regions/gontougo.jpg",
    gradient: 'from-cyan-500 to-sky-600',
    details: {
      population: "917 828",
      superficie: "15 820",
      chefLieu: "Bondoukou",
      departements: [
        "Bondoukou",
        "Koun-Fao",
        "Sandégué",
        "Tanda",
        "Transua"
      ],
      sousPrefs: [
        "Bondoukou",
        "Koun-Fao",
        "Sandégué",
        "Tanda",
        "Transua",
        "Amanvi",
        "Diamba",
        "Tchèdio"
      ],
      activites: [
        "Production d'igname (60% nationale)",
        "Culture d'anacarde",
        "Production de cacao et café",
        "Exploitation du manganèse",
        "Commerce transfrontalier"
      ],
      attractions: [
        "Sites sacrés traditionnels",
        "Rivière Sransi à Sapia",
        "Caïmans sacrés de Yégbaligba",
        "Singes sacrés de Soko",
        "Festival de danses traditionnelles",
        "Fête des ignames"
      ],
      particularites: [
        "Grande diversité ethnique",
        "Premier producteur d'igname du pays",
        "Riche patrimoine culturel et sacré",
        "Présence de sites historiques",
        "Carrefour commercial avec le Ghana"
      ]
    }
  },
  {
    id: "loh-djiboua",
    name: "Lôh-Djiboua",
    description: "Située au centre-ouest de la Côte d'Ivoire, la région du Lôh-Djiboua est réputée pour sa richesse culturelle, notamment le raphia utilisé dans la confection de textiles traditionnels.",
    color: "from-emerald-500 to-green-600",
    bgColor: "bg-emerald-50",
    imageUrl: "/images/regions/loh-djiboua.jpg",
    gradient: 'from-emerald-500 to-green-600',
    details: {
      population: "729 169",
      superficie: "10 650",
      chefLieu: "Divo",
      departements: [
        "Divo",
        "Lakota",
        "Guitry"
      ],
      sousPrefs: [
        "Divo",
        "Hiré",
        "Guitry",
        "Lakota",
        "Zikisso",
        "Djidji",
        "Gagoré",
        "Goudouko",
        "Niambézaaria"
      ],
      activites: [
        "Culture du cacao et café",
        "Production d'hévéa",
        "Culture du palmier à huile",
        "Exploitation minière (or, manganèse)",
        "Artisanat du raphia"
      ],
      attractions: [
        "Djaka festival",
        "Danse Alloukou",
        "Danse Agbagningnin",
        "Mine d'or d'Agbahou",
        "Mine d'or de Bonikro",
        "Sites culturels Dida"
      ],
      particularites: [
        "Production de textiles en raphia",
        "Pagne traditionnel Gnigbéli-loku",
        "Pagne Kôdê (Tapa)",
        "Riche patrimoine culturel Dida",
        "Important bassin minier"
      ]
    }
  },
  {
    id: "goh",
    name: "Gôh",
    description: "Située au centre-ouest de la Côte d'Ivoire, la région du Gôh est un important bassin agricole et forestier, abritant une population diversifiée et un riche patrimoine culturel.",
    color: "from-amber-500 to-yellow-600",
    bgColor: "bg-amber-50",
    imageUrl: "/images/regions/goh.jpg",
    gradient: 'from-amber-500 to-yellow-600',
    details: {
      population: "876 117",
      superficie: "7 327",
      chefLieu: "Gagnoa",
      departements: [
        "Gagnoa",
        "Oumé"
      ],
      sousPrefs: [
        "Gagnoa",
        "Oumé",
        "Guibéroua",
        "Ouaragahio",
        "Gnagbodougnoa",
        "Dignago",
        "Bayota",
        "Doubé",
        "Galebouo",
        "Serihio",
        "Guépahouo",
        "Tonla",
        "Diégonéfla"
      ],
      activites: [
        "Production de cacao (35 021 tonnes/an)",
        "Culture du café (3 845 095 tonnes/an)",
        "Exploitation forestière",
        "Agriculture vivrière",
        "Prospection minière (or)"
      ],
      attractions: [
        "Forêt classée de Bayota",
        "Sites culturels Bété",
        "Sites culturels Gban",
        "Scieries historiques",
        "Marchés traditionnels"
      ],
      particularites: [
        "Grenier agricole de la Côte d'Ivoire",
        "Diversité ethnique importante",
        "Présence des Gban (plus ancien peuple)",
        "Zone forestière attractive",
        "Carrefour commercial régional"
      ]
    }
  },
  {
    id: "gbêkê",
    name: "Gbêkê",
    description: "Située au centre de la Côte d'Ivoire, la région du Gbêkê est la troisième région la plus peuplée du pays, avec Bouaké comme chef-lieu, un important carrefour commercial et culturel.",
    color: "from-indigo-500 to-blue-600",
    bgColor: "bg-indigo-50",
    imageUrl: "/images/regions/gbeke.jpg",
    gradient: 'from-indigo-500 to-blue-600',
    details: {
      population: "1 352 900",
      superficie: "9 136",
      chefLieu: "Bouaké",
      departements: [
        "Bouaké",
        "Béoumi",
        "Sakassou",
        "Botro"
      ],
      sousPrefs: [
        "Bouaké",
        "Béoumi",
        "Sakassou",
        "Botro",
        "Diabo",
        "Brobo",
        "Djébonoua"
      ],
      activites: [
        "Agriculture vivrière",
        "Commerce régional",
        "Artisanat traditionnel",
        "Industrie textile",
        "Transport et logistique"
      ],
      attractions: [
        "Cathédrale Sainte Thérèse",
        "Grand Marché de Bouaké",
        "Festival du Djoula",
        "Ateliers d'artisanat",
        "Sites culturels Baoulé"
      ],
      particularites: [
        "Troisième région la plus peuplée",
        "Important carrefour commercial",
        "Diversité ethnique et culturelle",
        "Centre économique majeur",
        "Patrimoine architectural colonial"
      ]
    }
  },
  {
    id: "hambol",
    name: "Hambol",
    description: "Située au centre-nord de la Côte d'Ivoire, la région du Hambol est réputée pour son artisanat, particulièrement la poterie traditionnelle des femmes Mangoro.",
    color: "from-purple-500 to-fuchsia-600",
    bgColor: "bg-purple-50",
    imageUrl: "/images/regions/hambol.jpg",
    gradient: 'from-purple-500 to-fuchsia-600',
    details: {
      population: "612 029",
      superficie: "19 122",
      chefLieu: "Katiola",
      departements: [
        "Katiola",
        "Dabakala",
        "Niakaramandougou"
      ],
      sousPrefs: [
        "Katiola",
        "Fronan",
        "Timbé",
        "Dabakala",
        "Niakaramandougou",
        "Arikokaha",
        "Niédiékaha",
        "Tafiré"
      ],
      activites: [
        "Artisanat (poterie)",
        "Culture de l'anacarde",
        "Production de coton",
        "Agriculture vivrière",
        "Commerce régional"
      ],
      attractions: [
        "Coopérative des potières",
        "Sites culturels Tagbana",
        "Artisanat Mangoro",
        "Marchés traditionnels",
        "Festival des arts et traditions"
      ],
      particularites: [
        "Centre de la poterie traditionnelle",
        "Diversité ethnique (Tagbana, Djimini, Mangoro)",
        "Important producteur d'anacarde",
        "Carrefour commercial du centre-nord",
        "Traditions artisanales préservées"
      ]
    }
  },
  {
    id: "poro",
    name: "Poro",
    description: "La région du Poro, située au nord de la Côte d'Ivoire, est une région dynamique avec Korhogo comme chef-lieu. Elle est connue pour son riche patrimoine culturel Sénoufo et son importance économique.",
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-50",
    imageUrl: "/images/regions/poro.jpg",
    gradient: 'from-orange-500 to-amber-600',
    details: {
      population: "1 040 461",
      superficie: "13 400",
      chefLieu: "Korhogo",
      departements: [
        "Korhogo",
        "Dikodougou",
        "M'Bengué",
        "Sinématiali"
      ],
      sousPrefs: [
        "Korhogo",
        "Dassoungboho",
        "Kanoroba",
        "Karakoro",
        "Kiémou",
        "Kombolokoura",
        "Komborodougou",
        "Koni",
        "Lataha",
        "Nafoun",
        "Napiéolédougou",
        "Natiokobadara",
        "Niofoin",
        "Sirasso",
        "Sohouo",
        "Tioroniaradougou"
      ],
      activites: [
        "Culture du coton",
        "Production de mangues",
        "Artisanat traditionnel",
        "Élevage",
        "Commerce régional"
      ],
      attractions: [
        "Cases sacrées Sénoufo",
        "Marché central de Korhogo",
        "Village des tisserands",
        "Mont Korhogo",
        "Peintures sur toile de Korhogo"
      ],
      particularites: [
        "Centre culturel Sénoufo",
        "Important pôle agricole",
        "Artisanat réputé (tissage, peinture)",
        "Architecture traditionnelle unique",
        "Carrefour commercial du Nord"
      ]
    }
  },
  {
    id: "tchologo",
    name: "Tchologo",
    description: "La région du Tchologo, située au nord de la Côte d'Ivoire, est une zone stratégique frontalière avec le Burkina Faso et le Mali. Son chef-lieu Ferkessédougou est un important carrefour commercial et industriel.",
    color: "from-yellow-500 to-amber-600",
    bgColor: "bg-yellow-50",
    imageUrl: "/images/regions/tchologo.jpg",
    gradient: 'from-yellow-500 to-amber-600',
    details: {
      population: "603 084",
      superficie: "17 728",
      chefLieu: "Ferkessédougou",
      departements: [
        "Ferkessédougou",
        "Kong",
        "Ouangolodougou"
      ],
      sousPrefs: [
        "Ferkessédougou",
        "Kong",
        "Ouangolodougou",
        "Diawala",
        "Koumbala",
        "Niellé",
        "Togoniéré"
      ],
      activites: [
        "Culture du coton",
        "Production d'anacarde",
        "Industrie sucrière (SUCAF)",
        "Élevage traditionnel",
        "Commerce transfrontalier"
      ],
      attractions: [
        "Ville historique de Kong",
        "Mosquée de Kong",
        "Parc national de la Comoé",
        "Sites culturels Niarafolo",
        "Marchés traditionnels"
      ],
      particularites: [
        "Carrefour commercial stratégique",
        "Zone industrielle importante",
        "Diversité ethnique (Niarafolo, Malinké)",
        "Position frontalière avec deux pays",
        "Centre de transformation agricole"
      ]
    }
  },
  {
    id: "kabadougou",
    name: "Kabadougou",
    description: "La région du Kabadougou, située dans le nord-ouest de la Côte d'Ivoire, est une composante du district du Denguélé avec Odienné comme chef-lieu. Elle se distingue par ses ressources naturelles abondantes et son potentiel agricole.",
    color: "from-lime-500 to-green-600",
    bgColor: "bg-lime-50",
    imageUrl: "/images/regions/kabadougou.jpg",
    gradient: 'from-lime-500 to-green-600',
    details: {
      population: "289 806",
      superficie: "14 000",
      chefLieu: "Odienné",
      departements: [
        "Odienné",
        "Madinani",
        "Séguélon",
        "Gbéléban",
        "Samatiguila"
      ],
      sousPrefs: [
        "Odienné",
        "Bako",
        "Bougousso",
        "Dioulatièdougou",
        "Tiémé",
        "Madinani",
        "Fengolo",
        "N'Goloblasso",
        "Séguélon",
        "Gbongaha",
        "Gbéléban",
        "Samango",
        "Seydougou",
        "Samatiguila",
        "Kimbirila-Sud"
      ],
      activites: [
        "Agriculture vivrière",
        "Culture du coton et de l'anacarde",
        "Élevage traditionnel",
        "Exploitation minière (or)",
        "Artisanat local"
      ],
      attractions: [
        "Mont Denguélé",
        "Forêts classées",
        "Sites historiques d'Odienné",
        "Artisanat traditionnel",
        "Festivals culturels"
      ],
      particularites: [
        "Relief montagneux unique",
        "Riche réseau hydrographique",
        "Treize forêts classées",
        "Potentiel minier important",
        "Traditions Malinké préservées"
      ]
    }
  },
  {
    id: "folon",
    name: "Folon",
    description: "La région du Folon, située au nord-ouest de la Côte d'Ivoire, fait partie du district du Denguélé. Cette région frontalière avec le Mali et la Guinée se caractérise par sa végétation de savane boisée et son potentiel minier.",
    color: "from-teal-500 to-emerald-600",
    bgColor: "bg-teal-50",
    imageUrl: "/images/regions/folon.jpg",
    gradient: 'from-teal-500 to-emerald-600',
    details: {
      population: "146 209",
      superficie: "7 239",
      chefLieu: "Minignan",
      departements: [
        "Minignan",
        "Kaniasso"
      ],
      sousPrefs: [
        "Minignan",
        "Goulia",
        "Tienko",
        "Kaniasso",
        "Sokoro",
        "Mahandiana-Sokourani"
      ],
      activites: [
        "Culture de l'anacarde",
        "Production de coton",
        "Agriculture vivrière",
        "Élevage traditionnel",
        "Exploitation minière"
      ],
      attractions: [
        "Mont Mandant",
        "Forêts classées",
        "Sites miniers",
        "Culture Malinké",
        "Artisanat local"
      ],
      particularites: [
        "Région frontalière stratégique",
        "Potentiel minier important (or, manganèse)",
        "Savane boisée préservée",
        "Diversité ethnique (Malinké, Peulh)",
        "Arbres à karité abondants"
      ]
    }
  }
];

const RegionsGrid: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRegionClick = (region: Region) => {
    setSelectedRegion(region);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRegion(null);
  };

  return (
    <>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="w-full py-12"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }}
      >
        {regions.map((region) => (
          <SwiperSlide key={region.id}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
            >
              <div className="relative h-72">
                <img
                  src={region.imageUrl}
                  alt={region.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${region.gradient} opacity-60 mix-blend-overlay`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                  <h3 className="text-2xl font-bold mb-2">{region.name}</h3>
                  <p className="text-sm opacity-90 line-clamp-2 mb-4">
                    {region.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleRegionClick(region)}
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
                  >
                    Découvrir la région
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <AnimatePresence>
        {selectedRegion && isModalOpen && (
          <RegionModal
            region={selectedRegion}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default RegionsGrid;
