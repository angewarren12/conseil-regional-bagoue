import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
    pauseOnHover: true,
    arrows: true
  };

  const slides = [
    {
      image: '/images/slider/slider1.png',
      title: 'Bienvenue dans la Région de la Bagoué',
      subtitle: 'Une région en plein essor',
      description: 'Découvrez les richesses et opportunités de notre belle région'
    },
    {
      image: '/images/slider/slider2.png',
      title: 'Des Projets Structurants',
      subtitle: 'Développement et modernisation',
      description: 'Investissements majeurs pour l\'avenir de notre région'
    },
    {
      image: '/images/slider/slider3.png',
      title: 'Une Culture Riche',
      subtitle: 'Traditions et modernité',
      description: 'Préservation de notre patrimoine culturel'
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
