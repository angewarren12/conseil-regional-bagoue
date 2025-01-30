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
  image: string;
  details: string[];
  gradient: string;
}

const regions: Region[] = [
  {
    id: "bagoue",
    name: "Bagoué",
    description: "La région de la Bagoué, située au nord de la Côte d'Ivoire, tire son nom du fleuve Bagoué (ou Bagbè qui signifie 'fleuve blanc').",
    image: "/images/regions/bagoue.jpg",
    gradient: 'from-green-500 to-emerald-600',
    details: [
      "515 890",
      "9 500",
      "Boundiali",
      "Boundiali, Kouto, Tengrela",
      "Boundiali, Ganaoni, Siempurgo, Kasséré, Baya, Kouto, Gbon, Kolia, Sianhala, Blessegué, Tengrela, Kanakono, Débètè, Papara",
      "Agriculture vivrière, Culture du coton, Élevage, Commerce transfrontalier",
      "Parc national de la Comoé, Fleuve Bagoué, Artisanat traditionnel, Sites culturels",
      "Fait partie du District des Savanes, 126 villages traditionnels, Position stratégique à la frontière du Mali, Riche patrimoine culturel"
    ]
  },
  {
    id: "haut-sassandra",
    name: "Haut-Sassandra",
    description: "Une région majeure de l'ouest ivoirien, avec Daloa comme chef-lieu, caractérisée par sa richesse agricole et sa diversité culturelle.",
    image: "/images/regions/haut-sassandra.jpg",
    gradient: 'from-purple-500 to-violet-600',
    details: [
      "1 739 697",
      "17 761",
      "Daloa",
      "Daloa, Issia, Vavoua, Zoukougbeu",
      "Daloa, Gonaté, Domangbeu, Issia, Saïoua, Boguedia, Tapeguia, Iboguhe, Namane, Nahio, Vavoua, Bazra-Nattis, Ketro-Bassam, Séïtifla, Gadouan, Zaibo, Bédiala, Boguhé, Zoukougbeu, Dania",
      "Production de cacao, Culture du café, Agriculture vivrière, Commerce, Industrie de transformation",
      "Forêt classée de Daloa, Marchés traditionnels, Sites touristiques, Festivals culturels",
      "Troisième région la plus peuplée, Important centre économique, Carrefour commercial, Diversité ethnique"
    ]
  },
  {
    id: "bafing",
    name: "Bafing",
    description: "Une région du nord-ouest de la Côte d'Ivoire, tirant son nom du fleuve Bafing qui signifie 'fleuve noir' en langues mandingues.",
    image: "/images/regions/bafing.jpg",
    gradient: 'from-violet-500 to-purple-600',
    details: [
      "215 298",
      "8 720",
      "Touba",
      "Touba, Koro, Ouaninou",
      "Touba, Koro, Ouaninou, Booko, Borotou, Guintéguéla",
      "Agriculture vivrière, Culture du café, Élevage, Commerce transfrontalier",
      "Mont Touba, Forêt classée, Sites culturels traditionnels, Artisanat local",
      "Région frontalière avec la Guinée, Relief montagneux, Riche patrimoine culturel mandingue, Zone de transition climatique soudano-guinéenne"
    ]
  },
  {
    id: "worodougou",
    name: "Worodougou",
    description: "Située dans le centre-ouest du pays, la région du Worodougou fait partie du district du Woroba avec Séguéla comme chef-lieu.",
    image: "/images/regions/worodougou.jpg",
    gradient: 'from-blue-500 to-indigo-600',
    details: [
      "429 812",
      "21 900",
      "Séguéla",
      "Séguéla, Kani",
      "Sifié, Kamalo, Siena, Worofla, Bobi, Diarabana",
      "Agriculture, Élevage, Exploitation minière, Commerce",
      "Sites historiques de Séguéla, Artisanat traditionnel, Marchés locaux, Festivals culturels",
      "Important centre minier, Carrefour commercial régional, Diversité culturelle, Architecture traditionnelle"
    ]
  },
  {
    id: "bounkani",
    name: "Bounkani",
    description: "Située au nord-est de la Côte d'Ivoire, la région du Bounkani est une zone historique abritant le premier royaume formé au 16ème siècle dans les frontières de l'actuelle Côte d'Ivoire.",
    image: "/images/regions/bounkani.jpg",
    gradient: 'from-rose-500 to-pink-600',
    details: [
      "427 037",
      "22 091",
      "Bouna",
      "Bouna, Doropo, Nassian, Téhini",
      "Bouna, Doropo, Nassian, Téhini, Tougbo",
      "Agriculture traditionnelle, Production d'anacarde, Exploitation du karité, Élevage, Exploitation minière (or)",
      "Parc national de la Comoé, Festival du Bounkani, Fête de l'igname (Dongbô diguê), Kroubi (fête Malinké), Djôrô (rites Lobi)",
      "Plus vaste région du pays, 50% occupée par le Parc de la Comoé, Zone agro-pastorale importante, Diversité ethnique (Koulango, Malinké, Lobi), Frontière avec le Burkina Faso et le Ghana"
    ]
  },
  {
    id: "gontougo",
    name: "Gontougo",
    description: "Située au nord-est de la Côte d'Ivoire, la région du Gontougo est une région cosmopolite qui constitue avec la région du Bounkani le district du Zanzan.",
    image: "/images/regions/gontougo.jpg",
    gradient: 'from-cyan-500 to-sky-600',
    details: [
      "917 828",
      "15 820",
      "Bondoukou",
      "Bondoukou, Koun-Fao, Sandégué, Tanda, Transua",
      "Bondoukou, Koun-Fao, Sandégué, Tanda, Transua, Amanvi, Diamba, Tchèdio",
      "Production d'igname (60% nationale), Culture d'anacarde, Production de cacao et café, Exploitation du manganèse, Commerce transfrontalier",
      "Sites sacrés traditionnels, Rivière Sransi à Sapia, Caïmans sacrés de Yégbaligba, Singes sacrés de Soko, Festival de danses traditionnelles, Fête des ignames",
      "Grande diversité ethnique, Premier producteur d'igname du pays, Riche patrimoine culturel et sacré, Présence de sites historiques, Carrefour commercial avec le Ghana"
    ]
  },
  {
    id: "loh-djiboua",
    name: "Lôh-Djiboua",
    description: "Située au centre-ouest de la Côte d'Ivoire, la région du Lôh-Djiboua est réputée pour sa richesse culturelle, notamment le raphia utilisé dans la confection de textiles traditionnels.",
    image: "/images/regions/loh-djiboua.jpg",
    gradient: 'from-emerald-500 to-green-600',
    details: [
      "729 169",
      "10 650",
      "Divo",
      "Divo, Lakota, Guitry",
      "Divo, Hiré, Guitry, Lakota, Zikisso, Djidji, Gagoré, Goudouko, Niambézaaria",
      "Culture du cacao et café, Production d'hévéa, Culture du palmier à huile, Exploitation minière (or, manganèse), Artisanat du raphia",
      "Djaka festival, Danse Alloukou, Danse Agbagningnin, Mine d'or d'Agbahou, Mine d'or de Bonikro, Sites culturels Dida",
      "Production de textiles en raphia, Pagne traditionnel Gnigbéli-loku, Pagne Kôdê (Tapa), Riche patrimoine culturel Dida, Important bassin minier"
    ]
  },
  {
    id: "goh",
    name: "Gôh",
    description: "Située au centre-ouest de la Côte d'Ivoire, la région du Gôh est un important bassin agricole et forestier, abritant une population diversifiée et un riche patrimoine culturel.",
    image: "/images/regions/goh.jpg",
    gradient: 'from-amber-500 to-yellow-600',
    details: [
      "876 117",
      "7 327",
      "Gagnoa",
      "Gagnoa, Oumé",
      "Gagnoa, Oumé, Guibéroua, Ouaragahio, Gnagbodougnoa, Dignago, Bayota, Doubé, Galebouo, Serihio, Guépahouo, Tonla, Diégonéfla",
      "Production de cacao (35 021 tonnes/an), Culture du café (3 845 095 tonnes/an), Exploitation forestière, Agriculture vivrière, Prospection minière (or)",
      "Forêt classée de Bayota, Sites culturels Bété, Sites culturels Gban, Scieries historiques, Marchés traditionnels",
      "Grenier agricole de la Côte d'Ivoire, Diversité ethnique importante, Présence des Gban (plus ancien peuple), Zone forestière attractive, Carrefour commercial régional"
    ]
  },
  {
    id: "gbêkê",
    name: "Gbêkê",
    description: "Située au centre de la Côte d'Ivoire, la région du Gbêkê est la troisième région la plus peuplée du pays, avec Bouaké comme chef-lieu, un important carrefour commercial et culturel.",
    image: "/images/regions/gbeke.jpg",
    gradient: 'from-indigo-500 to-blue-600',
    details: [
      "1 352 900",
      "9 136",
      "Bouaké",
      "Bouaké, Béoumi, Sakassou, Botro",
      "Bouaké, Béoumi, Sakassou, Botro, Diabo, Brobo, Djébonoua",
      "Agriculture vivrière, Commerce régional, Artisanat traditionnel, Industrie textile, Transport et logistique",
      "Cathédrale Sainte Thérèse, Grand Marché de Bouaké, Festival du Djoula, Ateliers d'artisanat, Sites culturels Baoulé",
      "Troisième région la plus peuplée, Important carrefour commercial, Diversité ethnique et culturelle, Centre économique majeur, Patrimoine architectural colonial"
    ]
  },
  {
    id: "hambol",
    name: "Hambol",
    description: "Située au centre-nord de la Côte d'Ivoire, la région du Hambol est réputée pour son artisanat, particulièrement la poterie traditionnelle des femmes Mangoro.",
    image: "/images/regions/hambol.jpg",
    gradient: 'from-purple-500 to-fuchsia-600',
    details: [
      "612 029",
      "19 122",
      "Katiola",
      "Katiola, Dabakala, Niakaramandougou",
      "Katiola, Fronan, Timbé, Dabakala, Niakaramandougou, Arikokaha, Niédiékaha, Tafiré",
      "Artisanat (poterie), Culture de l'anacarde, Production de coton, Agriculture vivrière, Commerce régional",
      "Coopérative des potières, Sites culturels Tagbana, Artisanat Mangoro, Marchés traditionnels, Festival des arts et traditions",
      "Centre de la poterie traditionnelle, Diversité ethnique (Tagbana, Djimini, Mangoro), Important producteur d'anacarde, Carrefour commercial du centre-nord, Traditions artisanales préservées"
    ]
  },
  {
    id: "poro",
    name: "Poro",
    description: "La région du Poro, située au nord de la Côte d'Ivoire, est une région dynamique avec Korhogo comme chef-lieu. Elle est connue pour son riche patrimoine culturel Sénoufo et son importance économique.",
    image: "/images/regions/poro.jpg",
    gradient: 'from-orange-500 to-amber-600',
    details: [
      "1 040 461",
      "13 400",
      "Korhogo",
      "Korhogo, Dikodougou, M'Bengué, Sinématiali",
      "Korhogo, Dassoungboho, Kanoroba, Karakoro, Kiémou, Kombolokoura, Komborodougou, Koni, Lataha, Nafoun, Napiéolédougou, Natiokobadara, Niofoin, Sirasso, Sohouo, Tioroniaradougou",
      "Culture du coton, Production de mangues, Artisanat traditionnel, Élevage, Commerce régional",
      "Cases sacrées Sénoufo, Marché central de Korhogo, Village des tisserands, Mont Korhogo, Peintures sur toile de Korhogo",
      "Centre culturel Sénoufo, Important pôle agricole, Artisanat réputé (tissage, peinture), Architecture traditionnelle unique, Carrefour commercial du Nord"
    ]
  },
  {
    id: "tchologo",
    name: "Tchologo",
    description: "La région du Tchologo, située au nord de la Côte d'Ivoire, est une zone stratégique frontalière avec le Burkina Faso et le Mali. Son chef-lieu Ferkessédougou est un important carrefour commercial et industriel.",
    image: "/images/regions/tchologo.jpg",
    gradient: 'from-yellow-500 to-amber-600',
    details: [
      "603 084",
      "17 728",
      "Ferkessédougou",
      "Ferkessédougou, Kong, Ouangolodougou",
      "Ferkessédougou, Kong, Ouangolodougou, Diawala, Koumbala, Niellé, Togoniéré",
      "Culture du coton, Production d'anacarde, Industrie sucrière (SUCAF), Élevage traditionnel, Commerce transfrontalier",
      "Ville historique de Kong, Mosquée de Kong, Parc national de la Comoé, Sites culturels Niarafolo, Marchés traditionnels",
      "Carrefour commercial stratégique, Zone industrielle importante, Diversité ethnique (Niarafolo, Malinké), Position frontalière avec deux pays, Centre de transformation agricole"
    ]
  },
  {
    id: "kabadougou",
    name: "Kabadougou",
    description: "La région du Kabadougou, située dans le nord-ouest de la Côte d'Ivoire, est une composante du district du Denguélé avec Odienné comme chef-lieu. Elle se distingue par ses ressources naturelles abondantes et son potentiel agricole.",
    image: "/images/regions/kabadougou.jpg",
    gradient: 'from-lime-500 to-green-600',
    details: [
      "289 806",
      "14 000",
      "Odienné",
      "Odienné, Madinani, Séguélon, Gbéléban, Samatiguila",
      "Odienné, Bako, Bougousso, Dioulatièdougou, Tiémé, Madinani, Fengolo, N'Goloblasso, Séguélon, Gbongaha, Gbéléban, Samango, Seydougou, Samatiguila, Kimbirila-Sud",
      "Agriculture vivrière, Culture du coton et de l'anacarde, Élevage traditionnel, Exploitation minière (or), Artisanat local",
      "Mont Denguélé, Forêts classées, Sites historiques d'Odienné, Artisanat traditionnel, Festivals culturels",
      "Relief montagneux unique, Riche réseau hydrographique, Treize forêts classées, Potentiel minier important, Traditions Malinké préservées"
    ]
  },
  {
    id: "folon",
    name: "Folon",
    description: "La région du Folon, située au nord-ouest de la Côte d'Ivoire, fait partie du district du Denguélé. Cette région frontalière avec le Mali et la Guinée se caractérise par sa végétation de savane boisée et son potentiel minier.",
    image: "/images/regions/folon.jpg",
    gradient: 'from-teal-500 to-emerald-600',
    details: [
      "146 209",
      "7 239",
      "Minignan",
      "Minignan, Kaniasso",
      "Minignan, Goulia, Tienko, Kaniasso, Sokoro, Mahandiana-Sokourani",
      "Culture de l'anacarde, Production de coton, Agriculture vivrière, Élevage traditionnel, Exploitation minière",
      "Mont Mandant, Forêts classées, Sites miniers, Culture Malinké, Artisanat local",
      "Région frontalière stratégique, Potentiel minier important (or, manganèse), Savane boisée préservée, Diversité ethnique (Malinké, Peulh), Arbres à karité abondants"
    ]
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
                  src={region.image}
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
