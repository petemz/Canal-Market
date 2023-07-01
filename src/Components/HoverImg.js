import { useState, useEffect } from "react"

const HoverImg = ({items, hoverRef}) => {
    //const hoverRef = useRef(null)
    const [visible, setVisible] = useState(false)
    const [hoverImg, setHoverImg] = useState('')    


    const handleShow = (img) => {
        setHoverImg(img)
        setVisible(true)
    }
    const [width, setWidth] = useState(0)
  
    useEffect(() => {
        const handleResize = () => {
            setWidth(hoverRef.current.offsetWidth)
        }
        handleResize();
        window.addEventListener('resize', handleResize)
    
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    const mountedStyle = { 
        position: 'absolute',
        top: Math.floor(Math.random() * (window.innerHeight - 450)),
        left: Math.floor(Math.random()* (width-340)),
        height: '450px',
        animation: "inAnimation 500ms ease-in" 
    }
    const unmountedStyle = {
        position: 'absolute',
        top: Math.floor(Math.random() * (window.innerHeight - 450)),
        left: Math.floor(Math.random()* (width-340)),
        height: '450px',
        animation: "outAnimation 1200ms ease-out",
    }

    return (
        <>
            {items.map(item => {
                return (
                    <div
                        className='cursor-pointer z-10' key={item.vendor} 
                        onMouseEnter={() => handleShow(item.img)}
                        onMouseLeave={() => setVisible(false)}
                    >
                        <p className=''>{item.type}</p>
                        <p className='text-3xl mt-5 sm:mt-2'>{item.vendor}</p>
                    </div>
                )}
            )}

            {visible && <img className='sm:hidden transition ease-in-out opacity-80' src={hoverImg} style={visible ? mountedStyle : unmountedStyle} alt=""/>}
                
        </>
    )
}

export default HoverImg