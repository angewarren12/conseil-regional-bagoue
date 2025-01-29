import { useState } from 'react';
import { FaBars, FaFileAlt, FaCalendar, FaPhone, FaPhotoVideo } from 'react-icons/fa';
import { useRouter } from 'next/router';

const QuickAccess = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const quickLinks = [
    {
      icon: FaFileAlt,
      title: 'Documents',
      description: 'Accédez aux documents administratifs',
      onClick: () => router.push('/documents'),
    },
    {
      icon: FaPhotoVideo,
      title: 'Médiathèque',
      description: 'Photos et vidéos de la région',
      onClick: () => router.push('/mediatheque'),
    },
    {
      icon: FaCalendar,
      title: 'Agenda',
      description: 'Consultez les événements à venir',
      onClick: () => router.push('/agenda'),
    },
    {
      icon: FaPhone,
      title: 'Contact',
      description: 'Contactez nos services',
      onClick: () => router.push('/contact'),
    },
  ];

  return (
    <div className="fixed right-0 top-40 z-50">
      <div className="relative flex items-start">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 rounded-l-xl shadow-lg flex items-center justify-center transition-all duration-200 bg-gradient-to-br from-[#4CAF50] via-[#9DC726] to-[#F7E859] hover:opacity-90"
          aria-label="Menu d'accès rapide"
        >
          <FaBars className="w-5 h-5 text-white" />
        </button>

        <div
          className={`
            absolute right-full top-0
            flex flex-col space-y-4
            transition-all duration-300 ease-in-out
            mr-4 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
          `}
        >
          {quickLinks.map((link, index) => (
            <div key={index} className="relative group">
              <button 
                onClick={link.onClick}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-800 hover:bg-gradient-to-br from-[#4CAF50] via-[#9DC726] to-[#F7E859] hover:text-white transition-all duration-200"
              >
                <link.icon className="w-5 h-5" />
              </button>
              <div
                className={`
                  absolute right-full top-1/2 -translate-y-1/2 mr-2
                  w-48 bg-white rounded-lg shadow-lg p-3
                  transition-all duration-200
                  group-hover:opacity-100 group-hover:visible
                  opacity-0 invisible
                `}
              >
                <p className="font-medium text-gray-800 mb-1">{link.title}</p>
                <p className="text-sm text-gray-600">{link.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickAccess;
