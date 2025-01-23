import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden h-20">
        <svg 
          viewBox="0 0 500 150" 
          preserveAspectRatio="none" 
          className="w-full h-full"
        >
          <path
            d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            className="fill-gray-800 stroke-none"
          />
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="bg-gray-800 pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
            {/* About */}
            <div>
              <div className="mb-6 relative w-48 h-16">
                <Image
                  src="/images/logo-white.png"
                  alt="Logo Conseil Régional de la Bagoué"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-white/80 mb-6">
                Le Conseil Régional de la Bagoué œuvre pour le développement durable et harmonieux de notre région.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Liens Rapides</h3>
              <ul className="space-y-3">
                {['Actualités', 'Projets', 'Services', 'Contact'].map((item, index) => (
                  <li key={index}>
                    <Link 
                      href={`/${item.toLowerCase()}`}
                      className="flex items-center hover:translate-x-2 transition-transform duration-300"
                    >
                      <FaChevronRight className="mr-2 text-yellow-400" />
                      <span>{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-bold mb-6">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="text-yellow-400 mt-1" />
                  <span>Boundiali, Région de la Bagoué<br />Côte d'Ivoire</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-yellow-400" />
                  <span>+225 XX XX XX XX XX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-yellow-400" />
                  <span>contact@bagoue.ci</span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-bold mb-6">Newsletter</h3>
              <p className="mb-4 text-white/80">Restez informé de nos actualités</p>
              <div className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="px-4 py-2 rounded-lg bg-white/10 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button className="px-6 py-2 bg-yellow-400 text-gray-800 rounded-lg hover:bg-white transition-colors">
                  S'abonner
                </button>
              </div>
              <div className="mt-6 flex space-x-4">
                <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                  <FaFacebook size={24} />
                </a>
                <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/80">
            <p> 2024 Conseil Régional de la Bagoué. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
