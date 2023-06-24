import { Link } from "react-router-dom"
import logo from '../Assets/logo.svg'

const LinkStrip = ({linkObj, handlePage, currentPage}) => {
    const firstLetterCap = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }

    return (
        linkObj.name === 'home' ? 
            <Link to='/'>
                <div 
                    onClick={()=> handlePage(linkObj.name)} ref={linkObj.ref}  
                    className={`bg-white ${currentPage === linkObj.name ? 'w-[calc(100vw-180px)]' : 'w-[60px]'}  ${currentPage === null ? 'h-0' : 'h-full'} relative`}
                >
                    <img className='absolute top-16 left-[7%]' src={logo} alt="Logo" />
                </div>
            </Link>
        :
            <Link to={`/${linkObj.name}`}>
                <div 
                    onClick={() => handlePage(linkObj.name)} ref={linkObj.ref}
                    className={`${linkObj.color} ${currentPage === null ? 'h-0' : 'h-full'} ${currentPage === linkObj.name ? 'w-[calc(100vw-180px)]' : 'w-[60px]'} text-xl flex justify-center items-center flex-shrink-0 relative`}
                > 
                    <p className='absolute w-max top-20 left-[10px]'>{linkObj.symb}</p>
                    <p className='[writing-mode:vertical-lr] font-bold tracking-[3px]'>{firstLetterCap(linkObj.name)}</p>
                </div>
            </Link>
    )
}

export default LinkStrip