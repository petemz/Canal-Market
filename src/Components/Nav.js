import { Link } from "react-router-dom"

const Nav = ({setIsModal, setIsNav}) => {
    const links = [{name:'about', color: 'bg-white'}, {name:'food', color: 'bg-blue-400'}, {name:'retail', color: 'bg-red-500'}, {name:'community', color: 'bg-yellow-500'}]
    
    const handleModal = () => {
        setIsModal(true)
        setIsNav(false)
    }

    const handleLink = () => {
        setTimeout(() => setIsNav(false), 100)
    }
    
    const firstLetterCap = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }


    return (
        <div className=" flex flex-col fixed z-40 w-full h-full">
            <div className="h-full grid grid-cols-2">
                {links.map((link, index) => {
                    const angle = index === 0 || index === 3 ? -45 : 45
                    console.log(angle)
                    return(
                        <Link 
                            to={link.name === 'about' ? '/' : `/${link.name}`} key={link.name}
                            onClick={() => handleLink()}
                            style={{display: 'block', height: '100%'}}
                        >
                            <div className={`h-full flex text-lg ${link.color}`}>
                                <span style={{ transform: 'rotate(' + angle + 'deg)' }} className={`m-auto  block`}>{firstLetterCap(link.name)}</span>
                            </div>
                        </Link>
                    )}
                )}
            </div>
            
            <div className="bg-white h-32 p-8">
                <button onClick={() => handleModal()} className="w-full h-full border border-black">
                    <span>become a vendor</span>
                </button>
            </div>
        </div>
    )
}

export default Nav