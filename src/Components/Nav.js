import { Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

const Nav = ({setIsModal, setIsNav}) => {
    const links = [{name:'about', color: 'bg-white'}, {name:'food', color: 'bg-blue-400'}, {name:'retail', color: 'bg-red-500'}, {name:'community', color: 'bg-yellow-500'}]
    
    const handleModal = () => {
        setIsModal(true)
        setIsNav(false)
    }

    //const handleLink = () => {
    //    setTimeout(() => setIsNav(false), 500)
    //}
    
    const firstLetterCap = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }

    const elementsRef = useRef([]);

    useEffect(() => {
        const elements = elementsRef.current;

        gsap.from(elements, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.out",
        stagger: 0.25, 
        });
    }, []);

    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleLink = (index) => {
      setExpandedIndex(index);
      setTimeout(() => setIsNav(false), 800)
    };

    //console.log(expandedIndex)
  
    const getDivStyle = (index) => {
      if (expandedIndex === index) {
        return {
          width: '100vw',
          height: '100%',
          transition: 'all 0.5s ease-in-out',
          display: 'block', 
          position: 'absolute',
          top: 0,
          zIndex: 1000
        };
      } else {
        return {display: 'block', height: '100%'};
      }
    };

    return (
        <div className=" flex flex-col top-0 fixed z-40 w-full h-full">
            <div className="h-full relative grid grid-cols-2">
                {links.map((link, index) => {
                    const angle = index === 0 || index === 3 ? -45 : 45

                    return(
                        <Link 
                            ref={(el) => (elementsRef.current[index] = el)}
                            to={link.name === 'about' ? '/' : `/${link.name}`} key={link.name}
                            //style={getDivStyle(0)}
                            onClick={() => handleLink(index)}
                            style={getDivStyle(index)}
                        >
                            <div className={`h-full font-bold tracking-widest flex text-lg ${link.color}`}>
                                <span style={{ transform: expandedIndex < 0 ? 'rotate(' + angle + 'deg)' : 'rotate(0deg)' }} className={`m-auto rotate[${angle}deg] block`}>{firstLetterCap(link.name)}</span>
                            </div>
                        </Link>
                    )}
                )}
            </div>
            
            <div ref={(el) => (elementsRef.current[4] = el)} className="bg-white h-32 p-8">
                <button onClick={() => handleModal()} className="w-full h-full border border-black">
                    <span>become a vendor</span>
                </button>
            </div>
        </div>
    )
}

export default Nav