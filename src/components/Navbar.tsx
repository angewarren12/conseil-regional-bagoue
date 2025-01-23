import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Accueil', href: '/' },
    {
      label: 'La Région',
      href: '#',
      submenu: [
        { label: 'Présentation', href: '/presentation' },
        { label: 'Organisation', href: '/organisation' },
        { label: 'Économie', href: '/economie' }
      ]
    },
    {
      label: 'Institution',
      href: '#',
      submenu: [
        { label: 'Le Président', href: '/president' },
        { label: 'Le Bureau', href: '/bureau' },
        { label: 'Le Conseil', href: '/conseil' }
      ]
    },
    { label: 'Actualités', href: '/actualites' },
    { label: 'Projets', href: '/projets' },
    { label: 'Contact', href: '/contact' }
  ];

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
                <div key={index} className="relative group flex items-center">
                  {item.submenu ? (
                    <>
                      <button className="inline-flex items-center text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium group-hover:text-primary">
                        {item.label}
                        <i className="bi bi-chevron-down ml-1 text-xs"></i>
                      </button>
                      <div className="absolute left-0 top-full mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div className="py-1">
                          {item.submenu.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
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
                      className="inline-flex items-center text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
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

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-200`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {menuItems.map((item, index) => (
            <div key={index}>
              {item.submenu ? (
                <div className="space-y-1">
                  <button
                    className="w-full text-left text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item.label}
                    <i className="bi bi-chevron-down ml-1"></i>
                  </button>
                  <div className="pl-4">
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className="text-gray-600 hover:text-primary block px-3 py-2 rounded-md text-sm"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
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
