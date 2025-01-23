import React, { useState } from 'react';
import { FaFileAlt, FaCalendarAlt, FaPhone, FaNewspaper, FaBars, FaDownload } from 'react-icons/fa';

const QuickAccessButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState('');

  const quickLinks = [
    { icon: FaFileAlt, label: 'Documents', description: 'Accédez aux documents administratifs' },
    { icon: FaDownload, label: 'Téléchargements', description: 'Documents à télécharger' },
    { icon: FaCalendarAlt, label: 'Agenda', description: 'Consultez les événements à venir' },
    { icon: FaPhone, label: 'Contact', description: 'Contactez nos services' },
    { icon: FaNewspaper, label: 'Actualités', description: 'Dernières nouvelles de la région' },
  ];

  return (
    <div className="fixed right-0 top-40 z-50">
      <div className="relative flex items-start">
        {/* Main Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 rounded-l-xl shadow-lg flex items-center justify-center transition-all duration-200 bg-gradient-to-br from-[#4CAF50] via-[#9DC726] to-[#F7E859] hover:opacity-90"
          aria-label="Menu d'accès rapide"
        >
          <FaBars className="w-5 h-5 text-white" />
        </button>

        {/* Icons Container - Vertical Stack */}
        <div 
          className={`
            absolute right-full top-0
            flex flex-col space-y-4
            transition-all duration-300 ease-in-out
            ${isOpen ? 'mr-4 opacity-100' : '-mr-20 opacity-0 pointer-events-none'}
          `}
        >
          {quickLinks.map((item, index) => (
            <div key={index} className="relative group">
              <button
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-800 hover:bg-gradient-to-br from-[#4CAF50] via-[#9DC726] to-[#F7E859] hover:text-white transition-all duration-200"
                onMouseEnter={() => setActiveTooltip(item.label)}
                onMouseLeave={() => setActiveTooltip('')}
              >
                <item.icon className="w-5 h-5" />
              </button>

              {/* Tooltip */}
              <div 
                className={`
                  absolute right-full top-1/2 -translate-y-1/2 mr-2
                  w-48 bg-white rounded-lg shadow-lg p-3
                  transition-all duration-200
                  ${activeTooltip === item.label ? 'opacity-100 visible' : 'opacity-0 invisible'}
                `}
              >
                <p className="font-medium text-gray-800 mb-1">{item.label}</p>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickAccessButton;
