import { useState, useEffect, useRef, useContext } from 'react';
import {Context} from "../Context"
import Modal from './Modal';
import Tailend from './Tailend';
import usePageTransition from './usePageTrans';
import LinkStrip from './LinkStrip';

import food from '../Assets/food.jpg';
import retail from '../Assets/retail.jpg';
import comm from '../Assets/comm.jpg';
import bakery from '../Assets/bakery-unsplash.jpg';
import Logo from "../Assets/logo.svg"

const Food = () => {
    const {currentPage, setCurrentPage, isModal, setIsModal, isNav, setIsNav} = useContext(Context)
    
    const hoverRef = useRef(null);
    const [visible, setVisible] = useState(false)
    const [hoverImg, setHoverImg] = useState('')


    const foods = [
        {type: 'Khao Man Gai', vendor: 'Betong', img: comm}, 
        {type: 'Coffee, Pastries & Smoothies', vendor:'Chinatown Del', img: food}, 
        {type: 'Artisanal Chocolates', vendor: 'Daniel Corpuz Chocolatier', img: retail},
        {type: 'Napoli Stylee Pizza', vendor: 'Enzo Bruni La Pizza Gourmet', img: food},
        {type: 'Chinese Classics', vendor: 'Joe\'s Rice and Noodles', img: comm},
        {type: 'Cantonese Steamed Rice Rolls', vendor: 'Joe\'s Steam Rice Roll', img: retail},
        {type: 'Delicious Filipino Classics', vendor: 'Kabisera', img: food},
        {type: 'Bingsoo Sundaes & Bubble Tea', vendor: 'Lazy Sundaes', img: comm},
        {type: 'Sushi, Handrolls & Chirashi', vendor: 'Mastunori', img: retail},
        {type: 'Filipino Inspired Taqueria', vendor: 'Mucho Sarap', img: food}
    ]

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

    const homeRef = useRef(null)
    const foodRef = useRef(null)
    const retailRef = useRef(null)
    const commRef = useRef(null) 


    const pgData = [
        {name: 'home', ref: homeRef, color: 'bg-white'}, 
        {name: 'retail', ref:retailRef, symb: '購物', color: 'bg-red-500'},  
        {name: 'community', ref: commRef, symb: '文化', color: 'bg-yellow-500'}
    ]

    const { handlePage, isExpanded } = usePageTransition('food', pgData, currentPage, setCurrentPage, foodRef)

    return (
        <div className="home bg-blue-400 h-full flex">
            <LinkStrip linkObj={pgData[0]} handlePage={handlePage} currentPage={currentPage} />

            <div ref={foodRef}  className={` h-full overflow-y-scroll ${currentPage === null ? 'w-[100vw] px-16' : 'w-[60px]'}  ${isExpanded ? 'px-16 ' : ''} sm:px-7 pt-40 sm:pt-24 relative`}>
                <div className='flex justify-between sm:justify-end mb-20'>
                    <div className='sm:hidden flex flex-col opacity-30 tracking-widest items-center'>
                        <p className='[writing-mode:vertical-lr]  font-semibold'>Food </p>
                        <svg className='rotate-[-90deg] w-5 h-5 mt-5' xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512"}} xmlSpace="preserve">
                            <g transform="matrix(1,0,0,1,0,0)"><path d="m0 256 320 160.6L221.536 256 320 95.4z" fill="currentColor" data-original="#88d8c9"></path><path d="m0 256 320 160.6L221.536 256H126.76z" fill="currentColor" data-original="#32bea6"></path><path d="M432 240h80v32h-80zM286.592 240h80v32h-80z" fill="currentColor" data-original="#415e72"></path></g>
                        </svg>
                    </div>

                    <p className='text-right'>Food Hall Hours: <br/> Mon - Sun: 11:00AM - 8:00PM</p>
                </div>

                <div className='flex xl:flex-col justify-between relative mb-28'>
                    <h1 className='text-[200px] lg:text-[160px] sm:text-6xl leading-[192px] lg:leading-[160px]'>The <br className='sm:hidden'/> Food <br className='sm:hidden'/> Hall</h1>
                    <p className='absolute right-0 text-6xl sm:hidden'>餐饮</p>
                    <div className=' w-full -xl:w-[300px] sm:h-[450px] h-[600px] -xl:h-[450px] mt-16 -xl:mt-24 -xl:ml-2'>
                        <img className='h-full w-full object-cover' src={bakery} alt="" />
                    </div>
                </div>

                <div ref={hoverRef} className='grid grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-16 sm:gap-8 relative'>
                    {foods.map(food => {
                        return (
                            <div 
                                className='cursor-pointer z-10' key={food.vendor} 
                                onMouseEnter={() => handleShow(food.img)}
                                onMouseLeave={() => setVisible(false)}
                            >
                                <p className=''>{food.type}</p>
                                <p className='text-3xl mt-5 sm:mt-2'>{food.vendor}</p>
                            </div>
                        )}
                    )}

                    {visible && <img className='sm:hidden transition ease-in-out opacity-80' src={hoverImg} style={visible ? mountedStyle : unmountedStyle} alt=""/>}
                </div>

                <div className="waves-des flex sm:flex-col justify-between items-center -lg:px-[5%] sm:py-14 py-28 my-28 sm:my-20 xs:my-14">
                    <svg className='bounce-one-des w-[180px] sm:w-24 xs:w-16' viewBox="0 0 88 90" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g id="WH_new" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="375-food" transform="translate(-143.000000, -2270.000000)" fill="#000000" fillRule="nonzero">
                                <g id="Group" transform="translate(30.000000, 2195.000000)">
                                    <path d="M196.662655,97.6781208 C201.084664,106.974077 202.177872,118.240733 199.740961,129.403048 C195.238308,150.029294 179.791005,165 163.010576,165 C161.028621,165 159.042944,164.785014 157.108459,164.360493 L138.63803,158.690324 C120.800711,154.777884 109.148889,132.865739 114.174554,109.845421 C119.199933,86.8245235 137.441309,71.7027573 155.278345,75.6160595 L175.570016,79.7919296 C184.630803,81.7792539 192.121681,88.1313476 196.662655,97.6781208 Z M196.880554,128.775578 C201.632843,107.00647 191.811423,86.35901 174.944065,82.6592605 C174.443926,82.5494748 173.942647,82.4603268 173.441658,82.3823598 C172.182881,82.1871527 170.922388,82.0873996 169.667047,82.0873996 C154.563742,82.0873996 140.055797,95.8736792 135.798208,115.376555 C131.519745,134.973456 139.055814,153.654229 152.90663,159.888227 C154.441923,160.579041 156.051279,161.123956 157.734412,161.49316 C159.49075,161.878415 161.255096,162.064737 163.010576,162.064737 C178.11416,162.064737 192.622967,148.278454 196.880554,128.775578 Z M160.912282,111.939161 C159.838703,115.910511 156.464608,118.454862 153.376031,117.622129 C150.287453,116.789396 148.653974,112.894918 149.727552,108.923569 C150.801131,104.95222 154.175226,102.407868 157.263803,103.240601 C160.352381,104.073334 161.985861,107.967812 160.912282,111.939161 Z M174.684045,112.13791 C171.961255,111.320848 170.521076,107.49972 171.467576,103.603398 C172.414075,99.7070808 175.388459,97.2107699 178.111532,98.0278346 C180.83433,98.8449014 182.274501,102.66603 181.328006,106.562347 C180.38151,110.458668 177.406836,112.954977 174.684045,112.13791 Z M161.760532,148.524223 C155.595547,146.762924 151.150561,141.169132 149.298343,133.955195 L188.082873,123.232044 C187.902709,124.878085 187.607622,126.54461 187.181168,128.215976 C183.559867,142.407639 172.178417,151.500119 161.760532,148.524223 Z" id="happy-hour-smile2-copy"></path>
                                </g>
                            </g>
                        </g>
                    </svg>

                    <div className='w-1/2 sm:w-full sm:my-12 xs:my-8 text-center'>
                        <p className=' text-[100px] sm:text-6xl leading-[100px] sm:leading-normal mb-7 sm:mb-4'>The <br className='sm:hidden'/> Best of <br className='sm:hidden'/> NYC</p>
                        <p className=' tracking-widest'>All under one roof!</p>
                    </div>
      
                    <svg className='bounce-two-des w-[180px] sm:w-24 xs:w-16' viewBox="0 0 88 90" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g id="WH_new" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="375-food" transform="translate(-143.000000, -2270.000000)" fill="#000000" fillRule="nonzero">
                                <g id="Group" transform="translate(30.000000, 2195.000000)">
                                    <path d="M196.662655,97.6781208 C201.084664,106.974077 202.177872,118.240733 199.740961,129.403048 C195.238308,150.029294 179.791005,165 163.010576,165 C161.028621,165 159.042944,164.785014 157.108459,164.360493 L138.63803,158.690324 C120.800711,154.777884 109.148889,132.865739 114.174554,109.845421 C119.199933,86.8245235 137.441309,71.7027573 155.278345,75.6160595 L175.570016,79.7919296 C184.630803,81.7792539 192.121681,88.1313476 196.662655,97.6781208 Z M196.880554,128.775578 C201.632843,107.00647 191.811423,86.35901 174.944065,82.6592605 C174.443926,82.5494748 173.942647,82.4603268 173.441658,82.3823598 C172.182881,82.1871527 170.922388,82.0873996 169.667047,82.0873996 C154.563742,82.0873996 140.055797,95.8736792 135.798208,115.376555 C131.519745,134.973456 139.055814,153.654229 152.90663,159.888227 C154.441923,160.579041 156.051279,161.123956 157.734412,161.49316 C159.49075,161.878415 161.255096,162.064737 163.010576,162.064737 C178.11416,162.064737 192.622967,148.278454 196.880554,128.775578 Z M160.912282,111.939161 C159.838703,115.910511 156.464608,118.454862 153.376031,117.622129 C150.287453,116.789396 148.653974,112.894918 149.727552,108.923569 C150.801131,104.95222 154.175226,102.407868 157.263803,103.240601 C160.352381,104.073334 161.985861,107.967812 160.912282,111.939161 Z M174.684045,112.13791 C171.961255,111.320848 170.521076,107.49972 171.467576,103.603398 C172.414075,99.7070808 175.388459,97.2107699 178.111532,98.0278346 C180.83433,98.8449014 182.274501,102.66603 181.328006,106.562347 C180.38151,110.458668 177.406836,112.954977 174.684045,112.13791 Z M161.760532,148.524223 C155.595547,146.762924 151.150561,141.169132 149.298343,133.955195 L188.082873,123.232044 C187.902709,124.878085 187.607622,126.54461 187.181168,128.215976 C183.559867,142.407639 172.178417,151.500119 161.760532,148.524223 Z" id="happy-hour-smile2-copy"></path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>


                <Tailend setIsModal={setIsModal}/>
            </div>

            
            <LinkStrip linkObj={pgData[1]} handlePage={handlePage} currentPage={currentPage} />
            <LinkStrip linkObj={pgData[2]} handlePage={handlePage} currentPage={currentPage} />
            
            <div className='absolute -sm:hidden rounded-full top-16 sm:top-8 left-14 sm:left-7 w-[60px]'>
                <img className='top-16 left-[7%]' src={Logo} alt="Logo" />
            </div>

            {isModal && 
                <Modal setIsModal={setIsModal}/>
            }

            {isNav ? 
                <button onClick={() => setIsNav(false)} className='h-12 w-12 absolute z-50 -sm:hidden right-8 top-8 pl-3 pt-3 border border-black rounded-full'>
                    <svg className='h-5 w-5' xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 191.721 191.72" style={{enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve">
                        <g><path d="M191.328 133.248c-6.39-12.188-19.232-21.508-29.474-30.397-10.948-9.502-22.332-18.497-33.687-27.513 12.985-16.615 26.197-33.1 39.136-49.818 2.477-.111 4.292-2.813 3.856-5.3 1.225-3.119-2.752-6.463-5.736-5.2-5.744-3.401-12.061-6.335-17.977-9.095-2.389-1.115-5.137 1.275-4.309 3.452-14.211 14.521-28.93 28.564-43.797 42.467-6.208-5.272-12.332-10.644-18.3-16.188-.028-.026-.054-.056-.082-.082-.013-1.002-.447-2.013-1.469-2.859-.295-.244-.615-.452-.916-.687l.01-.013c-.038-.02-.075-.044-.113-.065a105.273 105.273 0 0 0-3.453-2.59c-5.625-6.393-11.027-13.564-17.396-18.717-.107-3.117-3.365-6.168-6.835-4.063-11.694 7.096-25.984 14.422-35.003 24.937a4.884 4.884 0 0 0-.675 1.023c-2.405 0-4.331 3.555-2.289 5.636 16.229 16.54 34.895 30.518 53.126 44.752-20.276 18.875-40.302 37.979-59.288 58.052-.08.071-.165.098-.243.18a226.364 226.364 0 0 0-5.122 5.431c-2.882 3.107-.485 7.23 2.663 7.824 5.768 9.427 14.606 16.436 23.635 22.602 6.122 4.182 17.289 11.836 24.996 8.038 1.435.256 2.953-.159 3.71-1.67 12.661-25.268 27.836-48.728 44.177-71.383 9.179 8.064 18.289 16.209 27.48 24.216 2.699 2.351 32.588 33.965 37.721 23.447.705.192 1.441.281 2.169.147 4.673-.851 8.372-6.737 10.926-10.222 2.64-3.602 5.362-7.41 7.675-11.325 3.14 2.122 6.425-2.077 4.884-5.017zm-169.676 6.587c-.232.629-.283 1.287-.24 1.938-1.146.634-1.929 1.723-2.232 2.958-1.187.104-2.329.498-3.314 1.236-.14-.058-.277-.118-.417-.176a948.111 948.111 0 0 1 6.203-5.956zm29.398 37.208c-.836-.394-1.706-.678-2.581-.959a14.26 14.26 0 0 0 3.959-2.127c-.451 1.031-.936 2.051-1.378 3.086zM72.621 76.7c-10.23-8.269-20.595-16.375-30.994-24.432a130.741 130.741 0 0 0 10.146 6.318c6.855 6.141 13.933 12.056 21.077 17.901l-.229.213z" fill="currentColor" data-original="white"></path></g>
                    </svg>
                </button>
            : 
                <button onClick={() => setIsNav(true)} className='absolute -sm:hidden right-8 top-10'>
                    <svg className='h-7'  xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 18.2 10.4" style={{ enableBackground: "new 0 0 512 512"}} xmlSpace="preserve">
                        <g transform="translate(-3 -6.8)"><path fill="#000000" fillRule="evenodd" d="M3 8a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z" clipRule="evenodd" data-original="#000000"></path></g>
                    </svg>
                </button>
            }
        </div>
    )
}

export default Food