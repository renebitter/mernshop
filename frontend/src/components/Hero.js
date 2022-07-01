import { Image } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  return (
    <div className='hero'>
      <Image
        src={isMobile ? '../images/hero-sm.jpg' : '../images/hero.jpg'}
        alt='hero'
        fluid
      />
    </div>
  );
};
export default Hero;
