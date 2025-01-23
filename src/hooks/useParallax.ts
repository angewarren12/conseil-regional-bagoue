import { useState, useEffect } from 'react';

const useParallax = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setOffset(window.pageYOffset);
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getParallaxStyle = (speed: number = 0.5) => {
    return {
      transform: `translate3d(0, ${offset * speed}px, 0)`,
      transition: 'transform 0.1s cubic-bezier(0,0,0.2,1)'
    };
  };

  return { getParallaxStyle };
};

export default useParallax;
