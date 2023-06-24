import { useState, useRef } from 'react';
import {Context} from "../Context"
import { useContext } from "react"
import Modal from './Modal';
import Tailend from './Tailend';
import LinkStrip from './LinkStrip';
import usePageTransition from './usePageTrans';

const Retail = () => {
    const [isModal, setIsModal] = useState(false)
    const {currentPage, setCurrentPage} = useContext(Context)

    const commRef = useRef(null)
    const homeRef = useRef(null)
    const foodRef = useRef(null)
    const retailRef = useRef(null)

    const pgData = [
        {name: 'home', ref: homeRef, color: 'bg-white'}, 
        {name: 'food', ref: foodRef, symb: '餐饮',  color: 'bg-blue-400'}, 
        {name: 'retail', ref:retailRef, symb: '購物', color: 'bg-red-500'}
        
    ]

    const { handlePage, isExpanded } = usePageTransition('community', pgData, currentPage, setCurrentPage, commRef)

    return (
        <div className="home bg-yellow-500 h-full flex">
            {pgData.map((page) => {
                return(
                    <LinkStrip linkObj={page} handlePage={handlePage} currentPage={currentPage} />  
                )}
            )}

            <div ref={commRef}  className={` h-full overflow-y-scroll ${currentPage === null ? 'w-[100vw] px-16' : 'w-[60px]'}  ${isExpanded ? 'px-16' : ''} pt-40`}>
                <div className='flex justify-between mb-20'>
                    <div className='flex flex-col opacity-50 tracking-widest items-center'>
                        <p className='[writing-mode:vertical-lr]'>Commmunity</p>
                        <svg className='rotate-[-90deg] w-5 h-5 mt-5' xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 512 512" style={{ enableBackground: "new 0 0 512 512"}} xmlSpace="preserve">
                            <g transform="matrix(1,0,0,1,0,0)"><path d="m0 256 320 160.6L221.536 256 320 95.4z" fill="currentColor" data-original="#88d8c9" ></path><path d="m0 256 320 160.6L221.536 256H126.76z" fill="currentColor" data-original="#32bea6" ></path><path d="M432 240h80v32h-80zM286.592 240h80v32h-80z" fill="currentColor" data-original="#415e72" ></path></g>
                        </svg>
                    </div>

                    <p>Our mixed-use space hosts <br/> ongoing events, podcasts <br/> & artists in residence</p>
                </div>

                <div className='flex justify-between relative mb-28'>
                    <h1 className='text-[200px] break-words	w-full leading-[192px]'>Canal St. <br/>Community</h1>
                    <p className='absolute right-0 text-6xl'>購物</p>
                </div>

                <div className="waves flex items-center py-28 my-28">
                    <svg className='bounce-one w-1/4' width="117px" height="140px" viewBox="0 0 117 140" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g id="R2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="1440_community" transform="translate(-386.000000, -3535.000000)" fill="#000000" fillRule="nonzero">
                                <g id="Group-15" transform="translate(239.000000, 3173.000000)">
                                    <g id="Group-14" transform="translate(0.000000, 180.000000)">
                                        <g id="Group-13" transform="translate(2.000000, 0.000000)">
                                            <g id="noun_Audio_1883584-Copy" transform="translate(203.500000, 252.000000) scale(-1, 1) translate(-203.500000, -252.000000) translate(145.000000, 182.000000)">
                                                <path d="M7.0668,90.8783333 L8.45742857,91.37 L7.74707143,92.6583333 C7.22224286,93.6133333 8.25852857,94.955 9.56224286,96.4816667 C10.2726,97.3133333 10.8860143,98.0316667 11.1317143,98.7666667 C11.6849571,100.42 9.98845714,101.163333 9.1728,101.52 C8.75327143,101.703333 7.97104286,102.045 7.90752857,102.29 C7.90251429,102.305 7.81727143,102.673333 8.56941429,103.675 C9.2313,104.553333 9.7695,105.1 10.2040714,105.541667 C12.2365286,107.606667 12.2064429,108.275 11.1852,116.418333 C11.0682,117.355 11.3105571,118.125 11.9490429,118.846667 C14.3274857,121.531667 21.7051714,123.011667 32.7232286,123.011667 C38.0350286,123.011667 42.2520429,122.655 42.2938286,122.651667 L43.1429143,122.578333 L51.6354429,139.51 C52.5915,139.538333 54.4267286,139.58 56.8436143,139.58 C82.1206286,139.58 99.7040571,135.645 103.874271,129.055 C105.2766,126.838333 105.256543,124.295 103.815771,121.278333 C97.4175429,107.896667 102.617357,98.085 108.123043,87.6966667 C112.303286,79.81 116.6256,71.6533333 116.6256,61.0033333 C116.6256,42.785 110.884243,0.413333333 57.7094143,0.413333333 C40.1209714,0.413333333 27.0554143,4.92 18.8771143,13.81 C9.13937143,24.395 8.17662857,39.1033333 9.08254286,49.58 C10.4581286,65.5016667 4.61314286,78.5966667 0.942685714,83.825 C0.227314286,84.845 0.3393,85.5683333 0.486385714,86.0216667 C1.23017143,88.3533333 5.59761429,90.36 7.0668,90.8783333 Z M80.3405571,54.6 L78.5671714,52.8316667 C81.8782714,49.53 81.8782714,44.1566667 78.5671714,40.8533333 C76.9609286,39.2516667 74.8281857,38.37 72.5567143,38.37 C72.5550429,38.37 72.5550429,38.37 72.5550429,38.37 C70.2869143,38.37 68.1525,39.25 66.5496,40.85 C63.2368286,44.1533333 63.2368286,49.53 66.5496,52.835 L64.7762143,54.6033333 C60.4856571,50.3233333 60.4856571,43.36 64.7762143,39.0816667 C66.8521286,37.01 69.615,35.8683333 72.5533714,35.8683333 L72.5550429,35.8683333 C75.4950857,35.87 78.2579571,37.0116667 80.3372143,39.085 C82.4148,41.1566667 83.5597286,43.9116667 83.5597286,46.8416667 C83.5597286,49.7716667 82.4198143,52.5283333 80.3405571,54.6 Z M86.2590857,60.5033333 C93.8122714,52.97 93.8122714,40.7166667 86.2590857,33.185 C78.7025571,25.65 66.4092,25.65 58.8576857,33.18 C55.1972571,36.83 53.1815143,41.6833333 53.1815143,46.8416667 C53.1831857,52.0016667 55.2006,56.8533333 58.8610286,60.5033333 L57.0876429,62.2716667 C52.9525286,58.1483333 50.6743714,52.6683333 50.6727,46.8416667 C50.6727,41.0133333 52.9491857,35.535 57.0843,31.4116667 C61.2160714,27.2916667 66.7100571,25.0233333 72.5533714,25.0233333 L72.5550429,25.0233333 C78.4000286,25.0233333 83.8956857,27.2933333 88.0308,31.4166667 C96.5617714,39.9233333 96.5617714,53.7616667 88.0308,62.27 L86.2590857,60.5033333 Z M49.3974,23.745 C62.1687857,11.0066667 82.9479857,11.0116667 95.7227143,23.75 C108.4941,36.4866667 108.4941,57.2066667 95.7243857,69.94 L93.951,68.1716667 C105.742929,56.4116667 105.742929,37.2783333 93.9493286,25.5166667 C82.1540571,13.7583333 62.9643857,13.7516667 51.1691143,25.5116667 C45.4545,31.21 42.3072,38.785 42.3072,46.8416667 C42.3088714,54.8983333 45.4561714,62.4733333 51.1707857,68.1716667 L49.3974,69.94 C36.6260143,57.2033333 36.6243429,36.4816667 49.3974,23.745 Z" id="Shape"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>

                    <div className='w-1/2 text-center'>
                        <p className=' text-[100px] leading-[100px] mb-7'>The <br/> Best <br/> of <br/> NYC</p>
                        <p className=' tracking-widest'>All under one roof!</p>
                    </div>
                    
                    <svg transform="scale(1,-1) translate(-140px, 0)" className='bounce-two w-1/4'  width="117px" height="140px" viewBox="0 0 117 140" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g id="R2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="1440_community" transform="translate(-386.000000, -3535.000000)" fill="#000000" fillRule="nonzero">
                                <g id="Group-15" transform="translate(239.000000, 3173.000000)">
                                    <g id="Group-14" transform="translate(0.000000, 180.000000)">
                                        <g id="Group-13" transform="translate(2.000000, 0.000000)">
                                            <g id="noun_Audio_1883584-Copy" transform="translate(203.500000, 252.000000) scale(-1, 1) translate(-203.500000, -252.000000) translate(145.000000, 182.000000)">
                                                <path d="M7.0668,90.8783333 L8.45742857,91.37 L7.74707143,92.6583333 C7.22224286,93.6133333 8.25852857,94.955 9.56224286,96.4816667 C10.2726,97.3133333 10.8860143,98.0316667 11.1317143,98.7666667 C11.6849571,100.42 9.98845714,101.163333 9.1728,101.52 C8.75327143,101.703333 7.97104286,102.045 7.90752857,102.29 C7.90251429,102.305 7.81727143,102.673333 8.56941429,103.675 C9.2313,104.553333 9.7695,105.1 10.2040714,105.541667 C12.2365286,107.606667 12.2064429,108.275 11.1852,116.418333 C11.0682,117.355 11.3105571,118.125 11.9490429,118.846667 C14.3274857,121.531667 21.7051714,123.011667 32.7232286,123.011667 C38.0350286,123.011667 42.2520429,122.655 42.2938286,122.651667 L43.1429143,122.578333 L51.6354429,139.51 C52.5915,139.538333 54.4267286,139.58 56.8436143,139.58 C82.1206286,139.58 99.7040571,135.645 103.874271,129.055 C105.2766,126.838333 105.256543,124.295 103.815771,121.278333 C97.4175429,107.896667 102.617357,98.085 108.123043,87.6966667 C112.303286,79.81 116.6256,71.6533333 116.6256,61.0033333 C116.6256,42.785 110.884243,0.413333333 57.7094143,0.413333333 C40.1209714,0.413333333 27.0554143,4.92 18.8771143,13.81 C9.13937143,24.395 8.17662857,39.1033333 9.08254286,49.58 C10.4581286,65.5016667 4.61314286,78.5966667 0.942685714,83.825 C0.227314286,84.845 0.3393,85.5683333 0.486385714,86.0216667 C1.23017143,88.3533333 5.59761429,90.36 7.0668,90.8783333 Z M80.3405571,54.6 L78.5671714,52.8316667 C81.8782714,49.53 81.8782714,44.1566667 78.5671714,40.8533333 C76.9609286,39.2516667 74.8281857,38.37 72.5567143,38.37 C72.5550429,38.37 72.5550429,38.37 72.5550429,38.37 C70.2869143,38.37 68.1525,39.25 66.5496,40.85 C63.2368286,44.1533333 63.2368286,49.53 66.5496,52.835 L64.7762143,54.6033333 C60.4856571,50.3233333 60.4856571,43.36 64.7762143,39.0816667 C66.8521286,37.01 69.615,35.8683333 72.5533714,35.8683333 L72.5550429,35.8683333 C75.4950857,35.87 78.2579571,37.0116667 80.3372143,39.085 C82.4148,41.1566667 83.5597286,43.9116667 83.5597286,46.8416667 C83.5597286,49.7716667 82.4198143,52.5283333 80.3405571,54.6 Z M86.2590857,60.5033333 C93.8122714,52.97 93.8122714,40.7166667 86.2590857,33.185 C78.7025571,25.65 66.4092,25.65 58.8576857,33.18 C55.1972571,36.83 53.1815143,41.6833333 53.1815143,46.8416667 C53.1831857,52.0016667 55.2006,56.8533333 58.8610286,60.5033333 L57.0876429,62.2716667 C52.9525286,58.1483333 50.6743714,52.6683333 50.6727,46.8416667 C50.6727,41.0133333 52.9491857,35.535 57.0843,31.4116667 C61.2160714,27.2916667 66.7100571,25.0233333 72.5533714,25.0233333 L72.5550429,25.0233333 C78.4000286,25.0233333 83.8956857,27.2933333 88.0308,31.4166667 C96.5617714,39.9233333 96.5617714,53.7616667 88.0308,62.27 L86.2590857,60.5033333 Z M49.3974,23.745 C62.1687857,11.0066667 82.9479857,11.0116667 95.7227143,23.75 C108.4941,36.4866667 108.4941,57.2066667 95.7243857,69.94 L93.951,68.1716667 C105.742929,56.4116667 105.742929,37.2783333 93.9493286,25.5166667 C82.1540571,13.7583333 62.9643857,13.7516667 51.1691143,25.5116667 C45.4545,31.21 42.3072,38.785 42.3072,46.8416667 C42.3088714,54.8983333 45.4561714,62.4733333 51.1707857,68.1716667 L49.3974,69.94 C36.6260143,57.2033333 36.6243429,36.4816667 49.3974,23.745 Z" id="Shape"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>


                <Tailend setIsModal={setIsModal}/>
            </div>


            {isModal && 
                <Modal setIsModal={setIsModal}/>
            }
        </div>
    )
}

export default Retail
