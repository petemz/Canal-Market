import { useState, useEffect } from 'react';
import { gsap, Power1 } from 'gsap';

// Custom hook to handle page transitions
const usePageTransition = (page, pgData, currentPage, setCurrentPage, refA) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  function pop (params) {
    let zRef

    pgData.map((page) => {
      if (currentPage === page.name) {
        zRef = page.ref
      }
      return zRef
    })

    return zRef
}

  const handlePage = () => {
    setCurrentPage(page)
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
        delay: 0.6,
        duration: 0.5,
        ease: Power1.easeInOut,
      });

      gsap.to(pop().current, {
        width: '60px',
        duration: 0.3,
        delay: 0.2,
      });

      setTimeout(() => {
        setIsExpanded(true);
      }, 400)

    } else if (currentPage === null) {
      timeline
        .to(pgData[2].ref.current, { height: '100%', duration: 0.8, stagger: 0.2 })
        .to(pgData[1].ref.current, { height: '100%', duration: 0.7, stagger: 0.1 }, '<0.1')
        .to(pgData[0].ref.current, { height: '100%', duration: 0.6 }, '<0.1');
    }
  }, []);

  useEffect(() => {
    if (isExpanded) {
      setCurrentPage(currentPage);
    }
  }, [isExpanded]);

  return {
    handlePage, isExpanded
  };
};

export default usePageTransition;
