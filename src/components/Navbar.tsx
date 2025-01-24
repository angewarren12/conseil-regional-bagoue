import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);

  const menuItems = [
    { label: 'Accueil', href: '/' },
    { label: 'La Région', href: '/region' },
    {
      label: 'Institution',
      href: '#',
      submenu: [
        { label: 'Le Président', href: '/institutions/president' },
        { label: 'Le Bureau', href: '/institutions/bureau' },
        { label: 'Le Conseil', href: '/institutions/conseil' },
        { label: "L'Administration", href: '/institutions/administration' }
      ]
    },
    { label: 'Actualités', href: '/actualites' },
    { label: 'Projets', href: '/projets' },
    { label: 'Contact', href: '/contact' }
  ];

  const handleSubmenuClick = (index: number) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 top-0">
      {/* Top Bar */}
      <div className="bg-[#F7E859] text-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            <div className="social-links space-x-4">
              <a href="#" className="hover:opacity-80"><i className="bi bi-facebook"></i></a>
              <a href="#" className="hover:opacity-80"><i className="bi bi-twitter"></i></a>
              <a href="#" className="hover:opacity-80"><i className="bi bi-instagram"></i></a>
            </div>
            <div className="contact-info space-x-6">
              <span><i className="bi bi-telephone me-2"></i>+225 XX XX XX XX XX</span>
              <span><i className="bi bi-envelope me-2"></i>contact@regionbagoue.ci</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-16 h-16 relative">
                <Image
                  src="/images/logo.png"
                  alt="Logo Conseil Régional de la Bagoué"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="ml-4">
                <h1 className="text-xl font-bold text-gray-800">Conseil Régional</h1>
                <p className="text-sm text-gray-600">de la Bagoué</p>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-4">
              {menuItems.map((item, index) => (
                <div 
                  key={index} 
                  className="relative group"
                  onMouseEnter={() => setActiveSubmenu(index)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  {item.submenu ? (
                    <>
                      <button 
                        onClick={() => handleSubmenuClick(index)}
                        className="inline-flex items-center text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
                      >
                        {item.label}
                        <svg
                          className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                            activeSubmenu === index ? 'transform rotate-180' : ''
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <div 
                        className={`
                          absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 
                          transition-all duration-200 transform origin-top
                          ${(activeSubmenu === index) ? 'scale-100 opacity-100 visible' : 'scale-95 opacity-0 invisible'}
                        `}
                      >
                        <div className="py-1">
                          {item.submenu.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="inline-flex items-center text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {menuItems.map((item, index) => (
            <div key={index}>
              {item.submenu ? (
                <>
                  <button
                    onClick={() => handleSubmenuClick(index)}
                    className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 block text-base font-medium"
                  >
                    {item.label}
                  </button>
                  {activeSubmenu === index && (
                    <div className="pl-4">
                      {item.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="block px-3 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 text-sm"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-base font-medium"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
