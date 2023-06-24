import { useState, useEffect, useRef } from 'react';
import { gsap, Power1 } from 'gsap';

// Custom hook to handle page transitions
const usePageTransition = (currentPage, setCurrentPage, refA, refB, refC, refD) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePage = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const timeline = gsap.timeline();

    if (currentPage !== null) {
      timeline.to(refA.current, {
        width: "calc(100vw - 180px)",
        duration: 0.01,
        delay: 0.1,
      });

      timeline.from(refA.current.children, {
        opacity: 0,
        delay: 1,
        duration: 0.5,
        ease: Power1.easeInOut,
      });

      gsap.to(refD.current, {
        width: '60px',
        duration: 1,
        delay: 0.1,
      });

      setTimeout(() => {
        setIsExpanded(true);
      }, 400);
    } else if (currentPage === null) {
      timeline
        .to(refD.current, { height: '100%', duration: 0.8, stagger: 0.2 })
        .to(refC.current, { height: '100%', duration: 0.7, stagger: 0.1 }, '<0.1')
        .to(refB.current, { height: '100%', duration: 0.6 }, '<0.1');
    }
  }, [currentPage, refA, refB, refC, refD]);

  useEffect(() => {
    if (isExpanded) {
      setCurrentPage('retail');
    }
  }, [isExpanded]);

  return {
    handlePage,
  };
};

export default usePageTransition;
