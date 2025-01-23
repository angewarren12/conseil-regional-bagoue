import { useEffect } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NewsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  const news = [
    {
      id: 1,
      title: "Installation du nouveau président",
      description: "Le ministre Bruno Nabagné Koné a été officiellement installé le 16 septembre 2023",
      image: "/images/installation.jpg",
    },
    {
      id: 2,
      title: "Adoption du budget 2025",
      description: "Le Conseil a adopté un budget primitif de 6,5 milliards de francs CFA",
      image: "/images/budget.jpg",
    },
    {
      id: 3,
      title: "Développement local",
      description: "Nouveaux projets pour améliorer les conditions de vie des populations",
      image: "/images/development.jpg",
    },
  ];

  return (
    <div className="relative w-full h-[600px]">
      <Slider {...settings}>
        {news.map((item) => (
          <div key={item.id} className="relative h-[600px]">
            <div className="absolute inset-0 bg-black/50 z-10" />
            <Image
              src={item.image}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">{item.title}</h2>
                <p className="text-xl md:text-2xl">{item.description}</p>
                <button className="mt-8 bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full">
                  En savoir plus
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewsCarousel;
