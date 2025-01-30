import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { MotionProps } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';
import { useSpring, animated } from '@react-spring/web';
import { useGesture } from '@use-gesture/react';
import { Tilt } from 'react-tilt';
import { useInView } from 'react-intersection-observer';
import { Particles as ReactParticles } from '@tsparticles/react';
import { loadSlim } from 'tsparticles-slim';
import type { Engine, ISourceOptions } from 'tsparticles-engine';

interface RegionModalProps {
  region: {
    id: string;
    name: string;
    imageUrl: string;
    description: string;
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
  };
  onClose: () => void;
}

const tabs = [
  { id: 'apercu', label: 'Aperçu', icon: '🏠' },
  { id: 'administrative', label: 'Administration', icon: '🏛️' },
  { id: 'economie', label: 'Économie', icon: '💰' },
  { id: 'tourisme', label: 'Tourisme', icon: '🌄' },
];

const particlesOptions: ISourceOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#000000"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5,
      random: false
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#000000",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    }
  },
  retina_detect: true
};

const RegionModal: React.FC<RegionModalProps> = ({ region, onClose }) => {
  const [activeTab, setActiveTab] = useState('apercu');
  const [{ scale }, api] = useSpring(() => ({ scale: 1 }));
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const bindGesture = useGesture({
    onHover: ({ hovering }) => api({ scale: hovering ? 1.05 : 1 }),
    onDrag: ({ down, movement: [mx], velocity: [vx] }) => {
      if (down && vx > 0.2) {
        onClose();
      }
    },
  });

  return (
    <Dialog
      open={true}
      onClose={onClose}
      className="relative z-50"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        aria-hidden="true"
      />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 500
            }}
            className="relative bg-white rounded-xl shadow-xl overflow-hidden"
          >
            <ReactParticles
              id="tsparticles"
              init={particlesInit}
              options={particlesOptions}
              className="absolute inset-0 pointer-events-none"
            />

            <animated.button
              style={{ scale }}
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
            >
              <XMarkIcon className="h-6 w-6 text-gray-500" />
            </animated.button>

            <Tilt options={{ max: 5, scale: 1.02 }}>
              <div className="relative h-64">
                <div className="absolute inset-0">
                  <Image
                    src={region.imageUrl}
                    alt={region.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-700 hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${region.gradient} opacity-60 mix-blend-overlay`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <motion.div 
                  className="absolute bottom-0 left-0 p-6 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h2 className="text-3xl font-bold mb-2">{region.name}</h2>
                  <p className="text-lg opacity-90">{region.description}</p>
                </motion.div>
              </div>
            </Tilt>

            <div className="p-6">
              <div className="flex space-x-1 border-b mb-6 overflow-x-auto">
                {tabs.map((tab) => (
                  <animated.button
                    key={tab.id}
                    style={{ scale: activeTab === tab.id ? scale : 1 }}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-all flex items-center space-x-2 ${
                      activeTab === tab.id
                        ? 'text-green-600 border-b-2 border-green-500 bg-green-50'
                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span>{tab.icon}</span>
                    <span>{tab.label}</span>
                  </animated.button>
                ))}
              </div>

              <div className="p-4" ref={ref}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    {activeTab === 'apercu' && (
                      <motion.div 
                        className="space-y-6"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Tilt options={{ max: 10, scale: 1.05 }}>
                            <div className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow">
                              <h4 className="font-semibold text-gray-900 mb-2">Population</h4>
                              <p className="text-gray-600">{region.details.population} habitants</p>
                            </div>
                          </Tilt>
                          <Tilt options={{ max: 10, scale: 1.05 }}>
                            <div className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow">
                              <h4 className="font-semibold text-gray-900 mb-2">Superficie</h4>
                              <p className="text-gray-600">{region.details.superficie} km²</p>
                            </div>
                          </Tilt>
                        </div>
                        <motion.div
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                        >
                          <h4 className="font-semibold text-gray-900 mb-2">Particularités</h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {region.details.particularites.map((item, index) => (
                              <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                              >
                                <span className="h-2 w-2 bg-green-500 rounded-full" />
                                <span>{item}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      </motion.div>
                    )}

                    {activeTab === 'administrative' && (
                      <motion.div 
                        className="space-y-6"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        <Tilt options={{ max: 10, scale: 1.05 }}>
                          <div className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow">
                            <h4 className="font-semibold text-gray-900 mb-2">Chef-lieu</h4>
                            <p className="text-gray-600">{region.details.chefLieu}</p>
                          </div>
                        </Tilt>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Départements</h4>
                            <ul className="space-y-2">
                              {region.details.departements.map((dept, index) => (
                                <motion.li
                                  key={index}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                >
                                  <span className="h-2 w-2 bg-blue-500 rounded-full" />
                                  <span>{dept}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Sous-préfectures</h4>
                            <ul className="space-y-2">
                              {region.details.sousPrefs.map((sp, index) => (
                                <motion.li
                                  key={index}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                >
                                  <span className="h-2 w-2 bg-purple-500 rounded-full" />
                                  <span>{sp}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'economie' && (
                      <motion.div 
                        className="space-y-6"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        <Tilt options={{ max: 10, scale: 1.05 }}>
                          <div className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow">
                            <h4 className="font-semibold text-gray-900 mb-2">Activités principales</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {region.details.activites.map((activite, index) => (
                                <motion.li
                                  key={index}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                >
                                  <span className="h-2 w-2 bg-yellow-500 rounded-full" />
                                  <span>{activite}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </Tilt>
                      </motion.div>
                    )}

                    {activeTab === 'tourisme' && (
                      <motion.div 
                        className="space-y-6"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        <Tilt options={{ max: 10, scale: 1.05 }}>
                          <div className="bg-gray-50 p-4 rounded-lg hover:shadow-lg transition-shadow">
                            <h4 className="font-semibold text-gray-900 mb-2">Attractions touristiques</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {region.details.attractions.map((attraction, index) => (
                                <motion.li
                                  key={index}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                >
                                  <span className="h-2 w-2 bg-red-500 rounded-full" />
                                  <span>{attraction}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </Tilt>
                      </motion.div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default RegionModal;
