import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useSpring, animated } from '@react-spring/web';
import { useGesture } from '@use-gesture/react';
import Tilt from 'react-parallax-tilt';
import { useInView } from 'react-intersection-observer';

interface RegionModalProps {
  region: {
    name: string;
    description: string;
    image: string;
    details: string[];
  };
  onClose: () => void;
}

const tabs = [
  { id: 'apercu', label: 'Aperçu', icon: '🏠' },
  { id: 'administrative', label: 'Administration', icon: '🏛️' },
  { id: 'economie', label: 'Économie', icon: '💰' },
  { id: 'tourisme', label: 'Tourisme', icon: '🌄' },
];

const RegionModal: React.FC<RegionModalProps> = ({ region, onClose }) => {
  const [activeTab, setActiveTab] = useState('apercu');
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  const bindGesture = useGesture({
    onDrag: ({ down, movement: [mx, my] }) => {
      api.start({
        x: down ? mx : 0,
        y: down ? my : 0,
        immediate: down,
      });
    },
  });

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Dialog
      open={true}
      onClose={onClose}
      className="fixed inset-0 z-50 overflow-y-auto"
    >
      <div className="min-h-screen px-4 text-center">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>

        <animated.div
          {...bindGesture()}
          ref={ref}
          style={{
            x,
            y,
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(50px)',
          }}
          className="relative inline-block w-full max-w-2xl text-left align-middle bg-white rounded-xl shadow-xl overflow-hidden transform transition-all h-[36rem]"
        >
          <div className="relative h-48">
            <Image
              src={region.image}
              alt={region.name}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-t-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
          </div>

          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-white hover:text-gray-200 transition-colors"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>

          <div className="p-6 h-[calc(36rem-12rem)] overflow-y-auto">
            <Dialog.Title className="text-2xl font-semibold mb-2">
              {region.name}
            </Dialog.Title>
            
            <Dialog.Description className="text-base text-gray-600 mb-4">
              {region.description}
            </Dialog.Description>

            <div className="flex space-x-1 border-b mb-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-2 text-sm font-medium rounded-t-lg transition-all flex items-center space-x-1
                    ${activeTab === tab.id
                      ? 'text-green-600 border-b-2 border-green-500 bg-green-50'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                    }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {activeTab === 'apercu' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <span className="text-lg mr-2">👥</span>
                          Population
                        </h4>
                        <p className="text-gray-700">{region.details[0]} habitants</p>
                      </div>
                    </Tilt>
                    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <span className="text-lg mr-2">📏</span>
                          Superficie
                        </h4>
                        <p className="text-gray-700">{region.details[1]} km²</p>
                      </div>
                    </Tilt>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <span className="text-lg mr-2">🌟</span>
                      Particularités
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {region.details.slice(7).map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'administrative' && (
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <span className="text-lg mr-2">🏛️</span>
                      Chef-lieu
                    </h4>
                    <p className="text-gray-700">{region.details[2]}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <span className="text-lg mr-2">🏢</span>
                        Départements
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {region.details[3].split(', ').map((dept, index) => (
                          <li key={index}>{dept}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <span className="text-lg mr-2">🏘️</span>
                        Sous-préfectures
                      </h4>
                      <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                        {region.details[4].split(', ').map((sp, index) => (
                          <div key={index} className="flex items-center">
                            <span className="h-1.5 w-1.5 bg-gray-400 rounded-full mr-2"></span>
                            {sp}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'economie' && (
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <span className="text-lg mr-2">💼</span>
                      Activités économiques
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {region.details[5].split(', ').map((activity, index) => (
                        <li key={index}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <span className="text-2xl mb-2 block">🌾</span>
                        <span className="font-medium text-gray-900">Agriculture</span>
                      </div>
                    </Tilt>
                    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <span className="text-2xl mb-2 block">🏭</span>
                        <span className="font-medium text-gray-900">Industrie</span>
                      </div>
                    </Tilt>
                  </div>
                </div>
              )}

              {activeTab === 'tourisme' && (
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <span className="text-lg mr-2">🎯</span>
                      Sites touristiques
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {region.details[6].split(', ').map((attraction, index) => (
                        <li key={index}>{attraction}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <span className="text-2xl mb-2 block">🏛️</span>
                        <span className="font-medium text-gray-900">Sites historiques</span>
                      </div>
                    </Tilt>
                    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <span className="text-2xl mb-2 block">🎭</span>
                        <span className="font-medium text-gray-900">Culture</span>
                      </div>
                    </Tilt>
                  </div>
                </div>
              )}
            </div>
          </div>
        </animated.div>
      </div>
    </Dialog>
  );
};

export default RegionModal;
