import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const CustomArrow = ({ direction, onClick }: { direction: 'prev' | 'next', onClick?: () => void }) => (
  <button
    onClick={onClick}
    className={`absolute z-10 top-1/2 transform -translate-y-1/2 ${
      direction === 'prev' ? 'left-4' : 'right-4'
    } bg-primary/80 hover:bg-primary text-white p-4 rounded-full transition-all duration-300 focus:outline-none`}
  >
    {direction === 'prev' ? <FaChevronLeft size={24} /> : <FaChevronRight size={24} />}
  </button>
);

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'linear',
    pauseOnHover: true,
    arrows: true,
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
    appendDots: (dots: React.ReactNode) => (
      <div style={{ position: 'absolute', bottom: '20px', width: '100%' }}>
        <ul className="flex justify-center gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <button className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-all duration-300 focus:outline-none" />
    ),
  };

  const slides = [
    {
      image: '/images/slider/slider1.png',
      title: 'Inauguration des Infrastructures',
      subtitle: 'Développement Local',
      description: 'Le Président Bruno Nabagné Koné inaugure de nouvelles infrastructures dans la région'
    },
    {
      image: '/images/slider/slider2.png',
      title: 'Éducation et Formation',
      subtitle: 'Investir dans l\'avenir',
      description: 'Construction et réhabilitation de salles de classe pour une éducation de qualité'
    },
    {
      image: '/images/slider/slider4.png',
      title: 'Accès à l\'Eau Potable',
      subtitle: 'Amélioration du cadre de vie',
      description: 'Installation de forages pour un meilleur accès à l\'eau potable'
    },
    {
      image: '/images/slider/slider5.png',
      title: 'Autonomisation des Jeunes',
      subtitle: 'PEJEDEC 3',
      description: 'Programme d\'insertion professionnelle pour les jeunes de la région'
    },
    {
      image: '/images/slider/slider4.png',
      title: 'Développement Agricole',
      subtitle: 'Soutien aux agriculteurs',
      description: 'Promotion des activités agro-pastorales dans la région de la Bagoué'
    }
  ];

  return (
    <div className="slider-container mt-24">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slider-item">
            <div className="relative h-[800px]">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                style={{ objectFit: 'cover' }}
                priority={index === 0}
                className="brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                <div className="container h-full flex items-center">
                  <div className="text-white max-w-3xl">
                    <span className="inline-block bg-primary px-4 py-2 rounded-full text-sm mb-4">
                      {slide.subtitle}
                    </span>
                    <h2 className="text-5xl font-bold mb-4 leading-tight">
                      {slide.title}
                    </h2>
                    <p className="text-xl mb-6 text-gray-200">
                      {slide.description}
                    </p>
                    <button className="btn btn-primary btn-lg">
                      En savoir plus
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeSlider;
