import { useState, useEffect } from 'react';
import { gsap, Power1 } from 'gsap';

// Custom hook to handle page transitions
const usePageTransition = (page, pgData, currentPage, setCurrentPage, refA) => {
  const [width, setWidth] = useState(0)
  
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    handleResize();
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  const [isExpanded, setIsExpanded] = useState(false);
 
  const handlePage = () => {
    setCurrentPage(page)
  }

  const pop = () => {
    let zRef

    pgData.map((page) => {
      if (currentPage === page.name) {
        zRef = page.ref
      }
      return zRef
    })

    return zRef
  }

  useEffect(() => {
      const timeline = gsap.timeline();

      if (currentPage !== null) {
        timeline.to(refA.current, {
          width: width > 800 ? "calc(100vw - 180px)" : "100vw",
          duration: 0.01,
          delay: 0.1,
        });

        timeline.from(refA.current.children, {
          opacity: 0,
          delay: 0.6,
          duration: 0.5,
          ease: Power1.easeInOut,
        });

        if (pop() !== undefined) {
        gsap.to(pop().current, {
          width: '60px',
          duration: 0.3,
          delay: 0.2,
        });
      }

      } else if (currentPage === null) {
        timeline
          .to(pgData[2].ref.current, { height: '100%', duration: 0.8, stagger: 0.2 })
          .to(pgData[1].ref.current, { height: '100%', duration: 0.7, stagger: 0.1 }, '<0.1')
          .to(pgData[0].ref.current, { height: '100%', duration: 0.6 }, '<0.1');
      }
    
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsExpanded(true);
    }, 400)
  })

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
