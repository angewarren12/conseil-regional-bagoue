import { motion } from 'framer-motion';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import { mediaFolders } from '../data/mediatheque';
import Link from 'next/link';

export default function Mediatheque() {
  return (
    <>
      <Head>
        <title>Médiathèque - Conseil Régional de la Bagoué</title>
      </Head>

      <Navbar />
      
      {/* En-tête stylisé avec image de fond */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50]/90 via-[#9DC726]/85 to-[#F7E859]/80 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(/images/region-bagoue-hero.jpg)',
            backgroundPosition: 'center 25%'
          }}
        />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">Médiathèque</h1>
          <p className="text-xl max-w-2xl mx-auto drop-shadow">
            Explorez notre collection de photos et vidéos retraçant les moments forts
            du développement de la région Bagoué
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-gradient-to-br from-[#4CAF50]/10 via-[#9DC726]/5 to-[#F7E859]/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Nos dossiers thématiques
            </h2>
            <p className="text-gray-600">
              Découvrez les différents aspects de notre région à travers des collections
              soigneusement organisées de photos et vidéos.
            </p>
          </div>
        </div>
      </section>

      {/* Grille des dossiers */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {mediaFolders.map((folder, index) => (
            <Link href={`/mediatheque/${folder.id}`} key={folder.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-64">
                  <img
                    src={folder.coverImage}
                    alt={folder.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-3">{folder.title}</h3>
                    <p className="text-sm opacity-90 line-clamp-2">{folder.description}</p>
                  </div>
                </div>
                <div className="p-4 bg-white border-t">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-600">
                      {folder.items.length} élément{folder.items.length > 1 ? 's' : ''}
                    </p>
                    <span className="text-green-600 group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
