import React, { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import HomeSlider from '../components/HomeSlider';
import Navbar from '../components/Navbar';
import AboutSection from '../components/AboutSection';
import RegionalInfo from '../components/RegionalInfo';
import QuickAccessButton from '../components/QuickAccessButton';
import Footer from '../components/Footer';
import NewsCard from '../components/NewsCard';
import RegionsGrid from '../components/RegionsGrid';
import newsData from '../data/news.json';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Parallax } from 'react-parallax';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const heroVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const handleExploreClick = () => {
    router.push('/region');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Conseil Régional de la Bagoué</title>
        <meta name="description" content="Site officiel du Conseil Régional de la Bagoué" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      {/* Navbar */}
      <Navbar />

      {/* Quick Access Button */}
      <QuickAccessButton />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Banner */}
        <div className="bg-white">
          <div className="container mx-auto flex justify-center">
            <div className="relative w-full max-w-4xl h-28">
              <Image
                src="/images/banner.png"
                alt="Région De La Bagoué"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Hero Slider Section */}
        <HomeSlider />

        {/* Mot du Président */}
        <section className="py-16 bg-gray-50 relative overflow-hidden">
          {/* Formes décoratives */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-[#4CAF50]/20 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#F7E859]/20 rounded-full"></div>
            <div className="absolute top-1/2 right-20 w-24 h-24 bg-[#9DC726]/20 rounded-full"></div>
            <div className="absolute -left-10 bottom-20 w-48 h-48 bg-gradient-to-br from-[#4CAF50]/10 to-[#F7E859]/10 transform rotate-45"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8 relative">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Image du président avec cercle décoratif */}
                  <div className="relative">
                    <div className="w-64 h-64 rounded-full relative z-10 overflow-hidden border-8 border-white shadow-xl">
                      <Image
                        src="/images/president-kone.png"
                        alt="Président du Conseil Régional"
                        width={256}
                        height={256}
                        className="object-cover"
                      />
                    </div>
                    {/* Cercle décoratif */}
                    <div className="absolute -top-4 -left-4 w-72 h-72 rounded-full bg-gradient-to-br from-[#4CAF50] via-[#9DC726] to-[#F7E859] -z-10"></div>
                  </div>

                  {/* Contenu */}
                  <div className="flex-1 text-left">
                    <div className="inline-block bg-gradient-to-r from-[#4CAF50] to-[#F7E859] p-1 rounded-lg mb-4">
                      <h2 className="text-3xl font-bold bg-white px-4 py-2 rounded-md">
                        Mot du Président
                      </h2>
                    </div>
                    <div className="space-y-4">
                      <p className="text-gray-600 leading-relaxed">
                        Chers habitants de la région de la Bagoué, je suis honoré de vous accueillir sur notre plateforme numérique.
                        Notre engagement est de faire de notre région un modèle de développement durable et de progrès social.
                      </p>
                      <div className="border-l-4 border-[#4CAF50] pl-4">
                        <p className="font-medium text-gray-800 text-lg">M. Bruno Nabagné KONÉ</p>
                        <p className="text-[#4CAF50]">Président du Conseil Régional de la Bagoué</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <AboutSection />

        {/* Regional Information */}
        <RegionalInfo />

        

        {/* News Section */}
        <section className="news-section py-16 bg-gradient-to-br from-white via-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Actualités</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#4CAF50] to-[#F7E859] mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsData.news.slice(0, 3).map((newsItem) => (
                <NewsCard
                  key={newsItem.id}
                  id={newsItem.id}
                  image={newsItem.image}
                  date={newsItem.date}
                  title={newsItem.title}
                  description={newsItem.description}
                  tags={newsItem.tags}
                />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/actualites" className="inline-block px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                Voir toutes les actualités
              </Link>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="statistics-section py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="stat-item">
                <div className="stat-number h2 mb-2">3</div>
                <div className="stat-label">Départements</div>
              </div>
              <div className="stat-item">
                <div className="stat-number h2 mb-2">28</div>
                <div className="stat-label">Sous-préfectures</div>
              </div>
              <div className="stat-item">
                <div className="stat-number h2 mb-2">375 000</div>
                <div className="stat-label">Habitants</div>
              </div>
              <div className="stat-item">
                <div className="stat-number h2 mb-2">9 350</div>
                <div className="stat-label">km²</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Interactive Map Section */}
        <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-4 block">Découverte</span>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Les Régions de la Côte d'Ivoire</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-yellow-400 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Explorez la richesse culturelle et la diversité des régions ivoiriennes. Chaque région raconte une histoire unique, 
                préserve un patrimoine précieux et contribue à la beauté de notre pays.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <RegionsGrid />
            </motion.div>
            <div className="text-center">
              <button 
                onClick={handleExploreClick}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Découvrir notre région
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
