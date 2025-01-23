import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/about-image.png"
              alt="Conseil Régional de la Bagoué"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              À Propos du Conseil Régional
            </h2>
            <p className="text-gray-600 mb-6">
              Le Conseil Régional de la Bagoué est l'organe exécutif de la région, chargé de promouvoir le développement 
              économique, social et culturel. Notre mission est d'améliorer la qualité de vie des populations et de 
              favoriser le développement durable de notre territoire.
            </p>
            <p className="text-gray-600 mb-6">
              Nous travaillons en étroite collaboration avec les communautés locales pour mettre en œuvre des projets 
              structurants dans les domaines de l'éducation, la santé, l'agriculture, les infrastructures et 
              l'environnement.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <span className="block text-4xl font-bold text-primary mb-2">28</span>
                <span className="text-gray-600">Communes</span>
              </div>
              <div className="text-center">
                <span className="block text-4xl font-bold text-primary mb-2">375,000</span>
                <span className="text-gray-600">Habitants</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
