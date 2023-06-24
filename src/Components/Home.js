import { Link } from 'react-router-dom';
import { useState, useEffect, useRef,} from 'react';
import { gsap, Power1 } from 'gsap';
import {Context} from "../Context"
import { useContext } from "react"
import Modal from './Modal';
import Tailend from './Tailend';
import myImage from '../Assets/home-main-xz2.jpg';
import food from '../Assets/food.jpg';
import retail from '../Assets/retail.jpg';
import comm from '../Assets/comm.jpg';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
    const [isModal, setIsModal] = useState(false)

    const {currentPage, setCurrentPage} = useContext(Context)
    const [isExpanded, setIsExpanded] = useState(false)

    const aRef = useRef(null)
    const bRef = useRef(null)
    const cRef = useRef(null)
    const dRef = useRef(null)

    let zRef

    if (currentPage === 'food') {
        zRef = bRef
    } else if (currentPage === 'retail') {
        zRef = cRef 
    } else if (currentPage === 'comm') {
        zRef = dRef
    }

    const handlePage = () => {
        setCurrentPage('home')
    }

    useEffect(() => {
        const timeline = gsap.timeline();

        if (currentPage !== null) {

            timeline.to(aRef.current, {
                width: "calc(100vw - 180px)",
                duration: 0.01,
                delay: 0.1,
            })

            timeline.from(aRef.current.children, {
                opacity: 0,
                delay: 1,
                duration: 0.5,
                ease: Power1.easeInOut,
            });

            gsap.to(zRef.current, {
                width: '60px',
                duration: 1,
                delay: 0.1,
            })

            setTimeout(() => {setIsExpanded(true)}, 400)
        } else if (currentPage === null) {
            timeline
            .to(dRef.current, {height: '100%', duration: 0.8, stagger: 0.2 }, )
            .to(cRef.current, {height: '100%', duration: 0.7, stagger: 0.1}, '<0.1')
            .to(bRef.current, {height: '100%', duration: 0.6 }, '<0.1')
        }
    })

    useEffect(() => {
        if (isExpanded) {
          setCurrentPage('home');
        }
    });

    return (
        <div className="home h-full flex">
            <div className='absolute top-16 left-14'>
                <svg width="60px" height="60px" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <defs></defs>
                    <g id="R2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="1440_HP_v2-1" transform="translate(-60.000000, -60.000000)">
                            <g id="Group-46" transform="translate(60.000000, 60.000000)">
                                <g id="Group-3" transform="translate(0.000000, 0.304186)">
                                    <polygon id="Clip-2" points="0 0.0446511628 59.9554386 0.0446511628 59.9554386 59.6511628 0 59.6511628"></polygon>
                                    <path d="M29.9774035,1.31633721 C14.1535439,1.31633721 1.27985965,14.1158721 1.27985965,29.8477326 C1.27985965,45.5802907 14.1535439,58.3787791 29.9774035,58.3787791 C45.8023158,58.3787791 58.6752982,45.5802907 58.6752982,29.8477326 C58.6752982,14.1158721 45.8023158,1.31633721 29.9774035,1.31633721 M29.9774035,59.6513372 C13.4472281,59.6513372 -0.000140350877,46.2814535 -0.000140350877,29.8477326 C-0.000140350877,13.4143605 13.4472281,0.0444767442 29.9774035,0.0444767442 C46.5079298,0.0444767442 59.9556491,13.4143605 59.9556491,29.8477326 C59.9556491,46.2814535 46.5079298,59.651686 29.9774035,59.6513372" id="Fill-1" fill="#231F20"></path>
                                </g>
                                <path d="M29.1557193,28.9250233 C29.1557193,30.7846744 28.7599298,32.3097907 27.968,33.5007209 C27.0753684,34.8503721 25.7760702,35.5292093 24.068,35.5292093 C22.0788772,35.5292093 20.6988772,34.6822326 19.928,32.9851395 C19.3985263,31.8130465 19.1357193,30.027 19.1357193,27.6238605 L19.1357193,15.9346744 C19.1357193,14.8647907 19.428,13.7959535 20.0199298,12.7236279 C20.9111579,11.0875814 22.2616842,10.2723488 24.068,10.2723488 C25.9967719,10.2723488 27.3799298,10.9982791 28.2129123,12.451186 C28.8813333,13.5643256 29.1943158,15.0472326 29.1557193,16.9054884 C29.1557193,17.5107209 29.1437895,17.9732791 29.1262456,18.2980465 C29.1055439,18.6200233 28.9522105,18.8017674 28.668,18.8432791 C28.3841404,18.884093 27.8764211,18.8921163 27.1469474,18.871186 C26.1301053,18.832814 25.6750175,18.8122326 25.7760702,18.8122326 C25.4090526,18.8122326 25.2171228,18.6416512 25.1957193,18.2980465 L25.1957193,16.1481628 C25.0753684,15.0971163 24.6999298,14.5731628 24.068,14.5731628 C23.2367719,14.5731628 22.8206316,16.3710698 22.8206316,19.9626977 L22.8206316,28.5639767 C22.8206316,29.129093 22.9002807,29.6638605 23.0627368,30.1679302 C23.288,30.8760698 23.6213333,31.2280465 24.068,31.2280465 C24.8620351,31.2280465 25.2581754,30.1679302 25.2581754,28.049093 L25.2581754,27.1996744 C25.2381754,26.8585116 25.2262456,26.656186 25.2262456,26.5937442 C25.2262456,26.2323488 25.368,26.0492093 25.6515088,26.0492093 C26.9339649,26.0492093 27.9476491,26.0614186 28.7009825,26.0823488 C29.0058947,26.0823488 29.1557193,26.2504884 29.1557193,26.5937442 C29.1767719,27.1201395 29.1767719,27.8980465 29.1557193,28.9250233" id="Fill-4" fill="#231F20"></path>
                                <polygon id="Fill-6" fill="#231F20" points="12.8642456 17.2428837 13.8326667 17.2428837 15.6067018 19.5085814 15.6172281 19.5085814 15.6172281 17.2428837 16.586 17.2428837 16.586 20.9478837 15.6172281 20.9478837 13.843193 18.678 13.8326667 18.678 13.8326667 20.9478837 12.8642456 20.9478837"></polygon>
                                <polygon id="Fill-8" fill="#231F20" points="12.865614 22.546814 14.0284211 22.546814 14.7252632 23.5549535 15.4224561 22.546814 16.5849123 22.546814 15.2105263 24.4748372 15.2105263 26.2542558 14.2403509 26.2542558 14.2403509 24.4748372"></polygon>
                                <path d="M15.9945614,28.9248488 C15.7847368,28.643686 15.4447368,28.4926395 15.0942105,28.4926395 C14.4661404,28.4926395 14.0426316,28.9712442 14.0426316,29.5796163 C14.0426316,30.1995 14.4707018,30.6470581 15.11,30.6470581 C15.4447368,30.6470581 15.7801754,30.4858953 15.9945614,30.2312442 L15.9945614,31.4539186 C15.6538596,31.5578721 15.4078947,31.6360116 15.0892982,31.6360116 C14.5391228,31.6360116 14.0159649,31.4277558 13.6075439,31.0579884 C13.172807,30.6676395 12.9742105,30.1572907 12.9742105,29.5750814 C12.9742105,29.0396163 13.1784211,28.5240349 13.555614,28.1392674 C13.9426316,27.743686 14.5026316,27.5040349 15.0570175,27.5040349 C15.3875439,27.5040349 15.6907018,27.5769419 15.9945614,27.7018256 L15.9945614,28.9248488 Z" id="Fill-10" fill="#231F20"></path>
                                <path d="M17.5325614,41.2065349 C18.0069474,41.2065349 18.3964211,41.307 18.6992281,41.506186 C19.045193,41.7318837 19.2174737,42.0597907 19.2174737,42.4895581 C19.2174737,42.9915349 19.0013333,43.3407209 18.5687018,43.5353721 C18.2697544,43.6682791 17.813614,43.734907 17.2006316,43.734907 L14.2167719,43.7352558 C13.9441404,43.7352558 13.6711579,43.6606047 13.3978246,43.512 C12.9806316,43.2859535 12.7718596,42.9458372 12.7718596,42.4902558 C12.7718596,42.0032791 12.9574737,41.6551395 13.328,41.4451395 C13.6115088,41.2759535 13.990807,41.1964186 14.4644912,41.2065349 C14.6188772,41.2065349 14.7378246,41.2096744 14.8195789,41.2142093 C14.902386,41.2197907 14.9487018,41.2581628 14.9592281,41.3300233 C14.9694035,41.4018837 14.9718596,41.5292093 14.9669474,41.7144419 C14.9571228,41.9701395 14.9515088,42.0856047 14.9515088,42.0597907 C14.9515088,42.1522326 14.9076491,42.2007209 14.8195789,42.2056047 L14.2711579,42.2056047 C14.0030877,42.2366512 13.8694035,42.331186 13.8694035,42.4902558 C13.8694035,42.6995581 14.3276491,42.8052558 15.245193,42.804907 L17.4402807,42.804907 C17.5841404,42.804907 17.7206316,42.7843256 17.8494035,42.7438605 C18.0304561,42.687 18.1202807,42.6029302 18.1202807,42.4895581 C18.1202807,42.2903721 17.8494035,42.1902558 17.3087018,42.1902558 L17.0922105,42.1902558 C17.0048421,42.1951395 16.953614,42.1975814 16.9378246,42.1975814 C16.845193,42.1975814 16.7985263,42.1623488 16.7985263,42.0904884 C16.7985263,41.7674651 16.8013333,41.5117674 16.8065965,41.3223488 C16.8065965,41.2452558 16.8497544,41.2065349 16.9378246,41.2065349 C17.0715088,41.2016512 17.2694035,41.2016512 17.5325614,41.2065349" id="Fill-12" fill="#231F20"></path>
                                <path d="M17.0355439,38.7871744 C16.6060702,38.7920581 16.3646667,38.8157791 16.1941404,38.8318256 C15.9278246,38.856593 15.5274737,38.8893837 15.5274737,38.9668256 C15.5274737,39.0362442 15.8941404,39.0739186 16.1987018,39.1199651 C16.3639649,39.1450814 16.7271228,39.1789186 17.0355439,39.1900814 C17.0520351,39.1914767 17.0541404,39.1227558 17.0625614,39.0690349 C17.0702807,39.015314 17.0716842,38.9661279 17.0664211,38.9193837 C17.0611579,38.8677558 17.0565965,38.7871744 17.0355439,38.7871744 M19.1681754,37.5055465 C19.1994035,37.5006628 19.2144912,37.5240349 19.2144912,37.5746163 L19.2144912,37.9743837 C19.2095789,38.1693837 19.2074737,38.3378721 19.2074737,38.481593 C19.2074737,38.5272907 19.0397544,38.586593 18.7050175,38.6581047 C18.4520351,38.7097326 18.2358947,38.7477558 18.055193,38.7732209 C18.0194035,38.7788023 18.0011579,38.8070581 18.0011579,38.8576395 L18.0011579,39.1576395 C18.0011579,39.1939186 18.0201053,39.2162442 18.0558947,39.2263605 C18.3692281,39.2731047 18.7316842,39.3341512 19.1443158,39.4112442 C19.1913333,39.4314767 19.2144912,39.4541512 19.2144912,39.480314 L19.2144912,40.425314 C19.2144912,40.5076395 19.1843158,40.5407791 19.1218596,40.5254302 C18.0681754,40.3506628 17.0116842,40.176593 15.9530877,40.0028721 C13.9176491,39.6596163 12.898,39.4541512 12.8927368,39.3878721 C12.8772982,39.1112442 12.8772982,38.8349651 12.8927368,38.558686 C12.898,38.496593 13.9183509,38.3075233 15.9530877,37.9893837 C17.0246667,37.8257791 18.0969474,37.6642674 19.1681754,37.5055465" id="Fill-14" fill="#231F20"></path>
                                <path d="M27.1753333,40.2467442 C27.4458596,40.2415116 25.4581404,40.2282558 21.2125263,40.2080233 C21.0774386,40.2080233 21.0016491,40.1665116 20.9858596,40.084186 C20.9444561,39.835814 20.9444561,39.5752326 20.9858596,39.3013953 C21.0016491,39.2082558 21.0560351,39.1489535 21.1500702,39.1227907 C21.9297193,38.952907 22.8128772,38.7533721 23.7998947,38.5266279 C23.8781404,38.5053488 23.9170877,38.4739535 23.9170877,38.4334884 C23.9170877,38.402093 23.8627018,38.3867442 23.7542807,38.3867442 L22.6532281,38.3867442 C22.0328772,38.3815116 21.5497193,38.3790698 21.2030526,38.3790698 C21.0995439,38.3790698 21.0353333,38.3138372 21.0093684,38.1854651 C20.9886667,38.0968605 20.9816491,37.9806977 20.9858596,37.8359302 C20.9914737,37.6506977 20.9935789,37.5443023 20.9935789,37.5188372 C20.9886667,37.4148837 21.0479649,37.3611628 21.1728772,37.3559302 C21.8984912,37.3353488 22.9925263,37.3304651 24.4542807,37.3402326 C25.8697193,37.3506977 26.7690175,37.3688372 27.1525263,37.395 C27.2770877,37.4051163 27.342,37.4386047 27.3469123,37.4954651 C27.3521754,37.6196512 27.3521754,37.7874419 27.3469123,37.999186 C27.336386,38.2573256 27.3311228,38.3968605 27.3311228,38.4177907 C27.3311228,38.49 27.276386,38.5363953 27.167614,38.5573256 C25.9100702,38.8151163 25.0995439,38.9965116 24.7349825,39.0994186 C24.5953333,39.1412791 24.5251579,39.1744186 24.5251579,39.2005814 C24.5251579,39.2365116 24.6058596,39.2494186 24.7669123,39.2393023 C25.1897193,39.2187209 25.9918246,39.2082558 27.1753333,39.2082558 C27.2949825,39.2082558 27.3521754,39.2598837 27.3469123,39.3631395 L27.3469123,40.084186 C27.342,40.1926744 27.2844561,40.2467442 27.1753333,40.2467442" id="Fill-16" fill="#231F20"></path>
                                <path d="M21.1550877,47.3815465 C21.0603509,47.376314 21.0133333,47.3086395 21.0133333,47.1788721 C21.0133333,47.2102674 21.0077193,46.8673605 20.997193,46.1508488 C20.9870175,45.7151512 20.9922807,45.4109651 21.0133333,45.2403837 C21.0235088,45.1618953 21.0859649,45.1231744 21.2010526,45.1231744 C23.8533333,45.0973605 25.8480702,45.089686 27.1849123,45.0998023 C27.3315789,45.0998023 27.3968421,45.1465465 27.3810526,45.2403837 C27.365614,45.3488721 27.365614,45.6289884 27.3810526,46.0807326 C27.385614,46.1487558 27.3603509,46.1871279 27.302807,46.1972442 C27.2554386,46.1923605 27.2063158,46.1899186 27.154386,46.1899186 C26.9245614,46.2049186 26.2178947,46.208407 25.034386,46.1972442 C23.7463158,46.1871279 22.8529825,46.1899186 22.3522807,46.2049186 C22.2322807,46.2108488 22.1698246,46.2701512 22.1645614,46.3849186 L22.1645614,47.1942209 C22.1645614,47.3187558 22.117193,47.3815465 22.0224561,47.3815465 C21.8385965,47.3864302 21.5491228,47.3864302 21.1550877,47.3815465" id="Fill-18" fill="#231F20"></path>
                                <path d="M23.1789825,42.8848256 C23.6123158,42.8792442 23.8554737,42.8551744 24.0277544,42.8391279 C24.2965263,42.8140116 24.700386,42.7808721 24.700386,42.7034302 C24.700386,42.633314 24.3298596,42.5949419 24.0228421,42.5485465 C23.8568772,42.5230814 23.4902105,42.4888953 23.1789825,42.4777326 C23.1624912,42.4770349 23.160386,42.545407 23.1523158,42.5998256 C23.1442456,42.6538953 23.143193,42.7044767 23.1484561,42.7512209 C23.1530175,42.8025 23.1579298,42.8848256 23.1789825,42.8848256 M21.0284561,44.1769186 C20.9968772,44.1821512 20.9814386,44.1584302 20.9814386,44.1071512 L20.9814386,43.7038953 C20.9863509,43.5078488 20.988807,43.3372674 20.988807,43.1925 C20.988807,43.1464535 21.1579298,43.0868023 21.4958246,43.014593 C21.7502105,42.9629651 21.968807,42.9238953 22.1502105,42.8977326 C22.1870526,42.8931977 22.2049474,42.8649419 22.2049474,42.8126163 L22.2049474,42.5108721 C22.2049474,42.474593 22.1863509,42.4515698 22.1498596,42.4411047 C21.8337193,42.3947093 21.4684561,42.3326163 21.0523158,42.2551744 C21.0052982,42.2342442 20.9814386,42.2112209 20.9814386,42.185407 L20.9814386,41.231686 C20.9814386,41.1490116 21.0126667,41.1158721 21.0751228,41.1308721 C22.1375789,41.3073837 23.203193,41.4825 24.2709123,41.6579651 C26.3238947,42.0047093 27.3526667,42.2112209 27.3579298,42.2785465 C27.3730175,42.5572674 27.3730175,42.8359884 27.3579298,43.115407 C27.3526667,43.1771512 26.323193,43.368314 24.2709123,43.6888953 C23.1902105,43.8535465 22.108807,44.0164535 21.0284561,44.1769186" id="Fill-20" fill="#231F20"></path>
                                <path d="M37.8925263,44.2738605 C38.3581404,44.2738605 38.7255088,44.3924651 38.9953333,44.6293256 C39.264807,44.8654884 39.3995439,45.1996744 39.3995439,45.6304884 C39.3995439,46.004093 39.2546316,46.3225814 38.9634035,46.584907 C38.6514737,46.8632791 38.2469123,46.9972326 37.7500702,46.9864186 C37.6655088,46.9864186 37.527614,46.9836279 37.3374386,46.9787442 C37.2262105,46.9738605 37.1704211,46.944907 37.1704211,46.8925814 C37.1704211,46.8402558 37.1651579,46.6916512 37.1549825,46.4467674 C37.1444561,46.2022326 37.139193,46.0543256 37.139193,46.002 C37.139193,45.9486279 37.2079649,45.9224651 37.3451579,45.9224651 L37.7335789,45.9224651 C38.1149825,45.9224651 38.3051579,45.8202558 38.3051579,45.6144419 C38.3051579,45.4522326 38.1760351,45.3650233 37.9167368,45.3545581 L37.4725263,45.3388605 C37.3405965,45.3339767 37.1360351,45.4703721 36.8612982,45.7487442 C36.3960351,46.2168837 36.1339298,46.4743256 36.0756842,46.5221163 C35.747614,46.8004884 35.4497193,46.9396744 35.1795439,46.9396744 L34.5051579,46.9396744 C34.0241053,46.9396744 33.6409474,46.8266512 33.3546316,46.6006047 C33.0430526,46.3585116 32.882,46.0068837 32.8711228,45.5439767 C32.8658596,45.1658372 32.9977895,44.8626977 33.267614,44.6373488 C33.5216491,44.4266512 33.8574386,44.3216512 34.2749825,44.3216512 L35.0609474,44.3216512 C35.1398947,44.3216512 35.182,44.3502558 35.1879649,44.4081628 C35.2034035,44.5606047 35.2034035,44.847 35.1879649,45.2680465 C35.1879649,45.3364186 35.147614,45.3706047 35.0686667,45.3706047 C34.9469123,45.3754884 34.7353333,45.3706047 34.4335789,45.3545581 C34.3237544,45.3496744 34.2132281,45.3692093 34.1051579,45.4138605 C33.996386,45.4588605 33.9423509,45.5167674 33.9423509,45.5910698 C33.9423509,45.7965349 34.1167368,45.8987442 34.4651579,45.8987442 L34.8774386,45.8987442 C35.042,45.8987442 35.2742807,45.7595581 35.5760351,45.4804884 C35.8567368,45.217814 36.136386,44.9558372 36.4170877,44.6921163 C36.7662105,44.4137442 37.0756842,44.2738605 37.3451579,44.2738605 L37.8925263,44.2738605 Z" id="Fill-22" fill="#231F20"></path>
                                <path d="M33.8904912,40.7543372 C33.9645263,40.7543372 34.0013684,40.799686 34.0013684,40.8889884 C34.0013684,40.9256163 33.9985614,41.0041047 33.994,41.1248023 L33.994,41.4091047 C33.994,41.5200349 34.0336491,41.5744535 34.1125965,41.5744535 L39.2364561,41.5587558 C39.3217193,41.5587558 39.3666316,41.588407 39.3718947,41.6459651 C39.3982105,41.8350349 39.3957544,42.1343372 39.3638246,42.5445698 C39.3582105,42.6129419 39.3132982,42.6467791 39.2287368,42.6467791 L34.1048772,42.6551512 C34.0304912,42.6551512 33.994,42.6865465 33.994,42.7500349 L33.994,43.3329419 C33.9880351,43.4177093 33.9508421,43.4595698 33.8824211,43.4595698 C33.9403158,43.4595698 33.8322456,43.4648023 33.556807,43.4756163 C33.3775088,43.4860814 33.2371579,43.4808488 33.1371579,43.4595698 C32.9992632,43.4386395 32.9304912,43.3908488 32.9304912,43.317593 C32.9255789,42.6659651 32.9255789,41.8531744 32.9304912,40.8806163 C32.9304912,40.8070116 32.9778596,40.7679419 33.0729474,40.7623605 C33.4010175,40.7522442 33.6736491,40.7494535 33.8904912,40.7543372" id="Fill-24" fill="#231F20"></path>
                                <path d="M34.3902456,38.222686 C34.0411228,38.222686 33.8744561,38.3388488 33.8905965,38.5697791 C33.9011228,38.6224535 33.906386,38.6618721 33.906386,38.6883837 C33.906386,38.7354767 33.9505965,38.7591977 34.0404211,38.7591977 L35.4298947,38.7591977 C35.577614,38.7591977 35.6541053,38.7229186 35.6590175,38.6486163 C35.6649825,38.6224535 35.6649825,38.591407 35.6590175,38.5537326 C35.6590175,38.439314 35.6007719,38.3594302 35.4849825,38.3175698 C35.3155088,38.2544302 34.9505965,38.222686 34.3902456,38.222686 M39.2295439,37.0868721 C39.3453333,37.0610581 39.406386,37.0868721 39.4112982,37.1660581 C39.4221754,37.2661744 39.4197193,37.5735 39.4035789,38.0887326 C39.4035789,38.1469884 39.332,38.1811744 39.1888421,38.1912907 C38.8302456,38.2174535 38.4302456,38.2303605 37.9912982,38.2303605 C37.1927018,38.2303605 36.7937544,38.3702442 36.7937544,38.6486163 C36.7832281,38.685593 36.7832281,38.7173372 36.7937544,38.7435 C36.8098947,38.7804767 36.8681404,38.7979186 36.9684912,38.7979186 C37.7983158,38.7979186 38.5281404,38.801407 39.157614,38.8066395 C39.2951579,38.8066395 39.3667368,38.835593 39.372,38.8931512 C39.4035789,39.1771047 39.4084912,39.4478023 39.3881404,39.705593 C39.3821754,39.7687326 39.3053333,39.7997791 39.1583158,39.7997791 L33.057614,39.7997791 C32.9621754,39.7997791 32.914807,39.7530349 32.914807,39.6571047 C32.914807,39.3668721 32.912,38.9691977 32.9070877,38.4668721 C32.9070877,38.1389651 32.9751579,37.8612907 33.1123509,37.6338488 C33.2656842,37.3854767 33.469193,37.2609419 33.7225263,37.2609419 L35.2842807,37.2686163 C35.5425263,37.2686163 35.7642807,37.344314 35.949193,37.4981512 C36.0814737,37.6024535 36.1712982,37.7207093 36.2186667,37.8522209 C36.2341053,37.8947791 36.2502456,37.9150116 36.2660351,37.9150116 C36.2765614,37.9150116 36.2902456,37.8947791 36.3056842,37.8522209 C36.3372632,37.7524535 36.4035789,37.6471047 36.5035789,37.5361744 C36.7197193,37.2895465 37.2456842,37.1660581 38.0807719,37.1660581 C38.6137544,37.1660581 38.9969123,37.1398953 39.2295439,37.0868721" id="Fill-26" fill="#231F20"></path>
                                <path d="M41.2501754,39.5631977 C41.1887719,39.5631977 41.1547368,39.521686 41.1494737,39.4393605 C41.1133333,38.7277326 41.1189474,38.0813372 41.1652632,37.4991279 C41.1705263,37.4419186 41.2192982,37.4140116 41.3122807,37.4140116 L47.3635088,37.4140116 C47.4207018,37.4140116 47.4491228,37.4412209 47.4491228,37.4987791 C47.4540351,37.8940116 47.4512281,38.5327326 47.4414035,39.4170349 C47.4414035,39.4986628 47.4105263,39.5398256 47.3480702,39.5398256 L46.9298246,39.5398256 C46.6870175,39.534593 46.5329825,39.5321512 46.4691228,39.5325 C46.4038596,39.5325 46.3722807,39.5038953 46.3722807,39.4477326 L46.3722807,38.5679651 C46.3722807,38.4915698 46.3438596,38.4538953 46.2866667,38.4538953 C46.2603509,38.4538953 46.0775439,38.4511047 45.7364912,38.4462209 C45.4470175,38.4409884 45.2305263,38.4409884 45.085614,38.4462209 C45.0291228,38.4462209 44.9954386,38.4765698 44.985614,38.5379651 C44.9698246,38.6447093 44.9666667,38.8812209 44.9775439,39.2478488 C44.9775439,39.3141279 44.9466667,39.350407 44.8845614,39.3549419 C44.7912281,39.3601744 44.6185965,39.3577326 44.3652632,39.3476163 C44.0705263,39.3371512 43.8975439,39.3322674 43.8459649,39.3322674 C43.7733333,39.3322674 43.7378947,39.3036628 43.7378947,39.2471512 L43.7378947,38.5536628 C43.7378947,38.5027326 43.6989474,38.4713372 43.6224561,38.4615698 C43.4073684,38.4361047 43.0014035,38.4308721 42.4035088,38.4462209 C42.337193,38.4462209 42.2989474,38.4926163 42.2887719,38.5847093 C42.2887719,38.7849419 42.2887719,39.0671512 42.2880702,39.4323837 C42.2887719,39.5140116 42.2547368,39.5555233 42.1877193,39.5555233 C41.7691228,39.5555233 41.4568421,39.5579651 41.2501754,39.5631977" id="Fill-28" fill="#231F20"></path>
                                <path d="M41.2501754,42.6291628 C41.1887719,42.6291628 41.1547368,42.5876512 41.1494737,42.5053256 C41.1133333,41.7940465 41.1189474,41.1469535 41.1652632,40.5647442 C41.1705263,40.5082326 41.2192982,40.4796279 41.3122807,40.4796279 L47.3635088,40.4796279 C47.4207018,40.4796279 47.4491228,40.5082326 47.4491228,40.5643953 C47.4540351,40.9599767 47.4512281,41.5993953 47.4414035,42.4826512 C47.4414035,42.5649767 47.4105263,42.6054419 47.3480702,42.6054419 L46.9298246,42.6054419 C46.6870175,42.6005581 46.5329825,42.5981163 46.4691228,42.5981163 C46.4038596,42.5981163 46.3722807,42.5698605 46.3722807,42.5133488 L46.3722807,41.6342791 C46.3722807,41.5568372 46.3438596,41.5198605 46.2866667,41.5198605 C46.2603509,41.5198605 46.0775439,41.5170698 45.7364912,41.5118372 C45.4470175,41.5066047 45.2305263,41.5066047 45.085614,41.5118372 C45.0291228,41.5118372 44.9954386,41.542186 44.985614,41.6039302 C44.9698246,41.7106744 44.9666667,41.947186 44.9775439,42.3141628 C44.9775439,42.3804419 44.9466667,42.4156744 44.8845614,42.420907 C44.7912281,42.4257907 44.6185965,42.4233488 44.3652632,42.4128837 C44.0705263,42.4027674 43.8975439,42.3975349 43.8463158,42.3975349 C43.7733333,42.3975349 43.7378947,42.3692791 43.7378947,42.3127674 L43.7378947,41.6196279 C43.7378947,41.5683488 43.6992982,41.5376512 43.6224561,41.5268372 C43.4073684,41.5013721 43.0014035,41.4961395 42.4035088,41.5118372 C42.337193,41.5118372 42.2989474,41.5585814 42.2887719,41.6506744 C42.2887719,41.850907 42.2887719,42.1334651 42.2880702,42.4976512 C42.2887719,42.5799767 42.2547368,42.6211395 42.1877193,42.6211395 C41.7691228,42.6211395 41.4568421,42.6232326 41.2501754,42.6291628" id="Fill-30" fill="#231F20"></path>
                                <path d="M46.5034035,46.1127558 C46.4314737,46.1127558 46.3953333,46.0691512 46.3953333,45.9819419 C46.3953333,45.9456628 46.3977895,45.8689186 46.4034035,45.7510116 L46.4034035,45.4733372 C46.4034035,45.3655465 46.3641053,45.3114767 46.2869123,45.3114767 L41.282,45.3264767 C41.1988421,45.3264767 41.1546316,45.2985698 41.1497193,45.2420581 C41.1241053,45.0575233 41.1265614,44.7648488 41.1574386,44.363686 C41.1634035,44.297407 41.2065614,44.2639186 41.2897193,44.2639186 L46.2946316,44.2562442 C46.3669123,44.2562442 46.4034035,44.2255465 46.4034035,44.1638023 L46.4034035,43.5934535 C46.4079649,43.5114767 46.4444561,43.4706628 46.5118246,43.4706628 C46.4546316,43.4706628 46.5609474,43.4650814 46.8297193,43.4549651 C47.004807,43.4448488 47.1416491,43.4500814 47.2402456,43.4706628 C47.3742807,43.4905465 47.4412982,43.5372907 47.4412982,43.6095 C47.4465614,44.2454302 47.4465614,45.0393837 47.4412982,45.9892674 C47.4412982,46.0611279 47.3946316,46.0998488 47.302,46.1050814 C46.9812982,46.1151977 46.7156842,46.1179884 46.5034035,46.1127558" id="Fill-32" fill="#231F20"></path>
                                <path d="M41.3200702,24.4271163 C41.232,24.4574651 41.1853333,24.444907 41.1797193,24.3880465 L41.1797193,23.3268837 C41.1797193,23.2860698 41.2169123,23.2550233 41.2884912,23.234093 C41.5256842,23.1671163 42.0853333,23.0226977 42.9667368,22.8008372 C43.0495439,22.7795581 43.0937544,22.7642093 43.0993684,22.7537442 C43.0993684,22.7485116 43.054807,22.7432791 42.9667368,22.739093 C42.5958596,22.717814 42.0386667,22.7150233 41.2962105,22.7303721 C41.2190175,22.7303721 41.1797193,22.7021163 41.1797193,22.6456047 L41.1797193,21.8865349 C41.1797193,21.8195581 41.2295439,21.7857209 41.3277895,21.7857209 L47.3625263,21.7857209 C47.4355088,21.7857209 47.4712982,21.811186 47.4712982,21.862814 C47.4765614,22.0693256 47.4765614,22.347 47.4712982,22.6972326 C47.4670877,22.7485116 47.4302456,22.7743256 47.3625263,22.7743256 C46.4260351,22.7485116 45.8744561,22.7380465 45.7084912,22.7432791 C45.6723509,22.7432791 45.6541053,22.7509535 45.6541053,22.7666512 C45.6593684,22.7823488 45.6832281,22.794907 45.7242807,22.8050233 C46.0484912,22.8821163 46.5944561,23.0216512 47.3625263,23.2222326 C47.434807,23.2424651 47.4712982,23.2763023 47.4712982,23.3223488 C47.4667368,23.4409535 47.4670877,23.6083953 47.4716491,23.8246744 C47.4716491,24.0821163 47.4712982,24.2157209 47.4716491,24.2265349 C47.4716491,24.2980465 47.4355088,24.3343256 47.3625263,24.3343256 C47.3474386,24.3339767 47.332,24.3318837 47.3165614,24.3266512 C47.0944561,24.2188605 46.6183158,24.0123488 45.889193,23.7088605 C45.1390175,23.4001395 44.7484912,23.2504884 44.7179649,23.2613023 C43.8439298,23.549093 42.7105965,23.9380465 41.3200702,24.4271163" id="Fill-34" fill="#231F20"></path>
                                <path d="M41.2573684,27.4152209 C41.1959649,27.4152209 41.1615789,27.3740581 41.1570175,27.2910349 C41.1201754,26.5780116 41.1257895,25.9298721 41.1724561,25.3462674 C41.1777193,25.2890581 41.2261404,25.2611512 41.3201754,25.2611512 L47.3861404,25.2608023 C47.4429825,25.2611512 47.4710526,25.2890581 47.4710526,25.3455698 C47.4766667,25.7418488 47.4742105,26.3830116 47.4636842,27.2687093 C47.4636842,27.350686 47.4331579,27.3918488 47.3703509,27.3921977 L46.9514035,27.3921977 C46.7078947,27.3866163 46.5535088,27.3841744 46.4896491,27.3838256 C46.4247368,27.3838256 46.3921053,27.3562674 46.3921053,27.3001047 L46.3921053,26.4178953 C46.3921053,26.3415 46.3633333,26.3034767 46.3068421,26.3034767 C46.2805263,26.3034767 46.0966667,26.3003372 45.7552632,26.2958023 C45.4647368,26.2902209 45.2478947,26.2898721 45.1026316,26.2958023 C45.0454386,26.2958023 45.0117544,26.3265 45.0015789,26.3875465 C44.9861404,26.4946395 44.9840351,26.7321977 44.9938596,27.0995233 C44.9938596,27.1661512 44.9633333,27.2013837 44.9008772,27.2066163 C44.8078947,27.2118488 44.6345614,27.2090581 44.3805263,27.1989419 C44.0850877,27.1888256 43.9117544,27.183593 43.8601754,27.183593 C43.7868421,27.183593 43.7510526,27.1549884 43.7510526,27.0988256 L43.7510526,26.4039419 C43.7510526,26.3519651 43.712807,26.3212674 43.6359649,26.3111512 C43.4208772,26.2853372 43.0131579,26.2804535 42.4138596,26.2954535 C42.347193,26.2958023 42.3089474,26.3415 42.2984211,26.4346395 L42.2984211,27.2837093 C42.2984211,27.3660349 42.264386,27.4071977 42.1977193,27.4071977 C41.7777193,27.4071977 41.464386,27.4103372 41.2573684,27.4152209" id="Fill-36" fill="#231F20"></path>
                                <path d="M46.5472632,30.9291279 C46.4749825,30.9291279 46.4384912,30.8848256 46.4384912,30.7972674 C46.4384912,30.761686 46.4409474,30.6838953 46.4465614,30.5656395 L46.4465614,30.2879651 C46.4465614,30.1794767 46.407614,30.125407 46.3300702,30.125407 L41.3121754,30.1411047 C41.2293684,30.1411047 41.1855088,30.1125 41.1798947,30.0556395 C41.1539298,29.8707558 41.1567368,29.5773837 41.1879649,29.1755233 C41.1935789,29.1085465 41.2370877,29.075407 41.3205965,29.075407 L46.3377895,29.0677326 C46.4100702,29.0677326 46.4465614,29.0370349 46.4465614,28.9749419 L46.4465614,28.4031977 C46.4518246,28.3208721 46.487614,28.2800581 46.5556842,28.2800581 C46.4981404,28.2800581 46.604807,28.2751744 46.8735789,28.2643605 C47.0493684,28.254593 47.1869123,28.2594767 47.2851579,28.2800581 C47.4198947,28.3006395 47.4872632,28.3470349 47.4872632,28.4192442 C47.4928772,29.0569186 47.4928772,29.8526163 47.4872632,30.8052907 C47.4872632,30.8775 47.4402456,30.9151744 47.347614,30.9211047 C47.0258596,30.9312209 46.7595439,30.9336628 46.5472632,30.9291279" id="Fill-38" fill="#231F20"></path>
                                <path d="M39.1427018,27.5593256 C39.2304211,27.5593256 39.284807,27.5621163 39.3055088,27.5666512 C39.3669123,27.582 39.4009474,27.6130465 39.4062105,27.659093 C39.4114737,27.6800233 39.4041053,27.8506047 39.3883158,28.4666512 C39.3883158,28.5489767 39.3318246,28.5929302 39.2177895,28.597814 C39.0837544,28.6082791 38.8462105,28.6107209 38.5055088,28.6051395 C38.279193,28.6051395 37.9816491,28.6026977 37.6153333,28.597814 C37.2641053,28.5929302 37.0760351,28.5901395 37.0500702,28.5901395 C36.9423509,28.5901395 36.5830526,28.5814186 36.5167368,28.6016512 C36.4886667,28.6103721 36.3770877,28.6853721 37.004807,28.8304884 C37.2262105,28.8810698 37.6167368,28.9564186 38.1093684,29.0464186 C38.7142807,29.157 39.0577895,29.2093256 39.2058596,29.2438605 C39.3434035,29.2759535 39.3837544,29.3516512 39.3988421,29.4266512 C39.4146316,29.5009535 39.4062105,29.4238605 39.4062105,29.5679302 C39.4009474,29.7988605 39.3988421,29.692814 39.3988421,29.6879302 C39.3988421,29.7988605 39.3262105,29.8756047 39.1812982,29.9059535 C38.9381404,29.9575814 38.7911228,29.9806047 38.2897193,30.0754884 C37.7472632,30.1783953 37.0935789,30.3064186 37.0255088,30.3193256 C36.4718246,30.4229302 36.4746316,30.5342093 36.5216491,30.5460698 C36.5651579,30.5575814 36.8381404,30.5708372 37.0605965,30.5722326 C37.2318246,30.5729302 38.9795439,30.5826977 39.1869123,30.5774651 C39.3223509,30.5722326 39.3946316,30.6106047 39.4055088,30.6929302 L39.4062105,31.4387442 C39.4062105,31.5207209 39.3184912,31.5667674 39.1427018,31.5775814 C38.8367368,31.597814 38.4023509,31.6079302 37.8381404,31.6079302 C37.1918246,31.6079302 36.2451579,31.5925814 34.9984912,31.5618837 C33.9269123,31.5360698 33.3423509,31.5263023 33.2444561,31.5308372 C33.1977895,31.5360698 33.1560351,31.5339767 33.1202456,31.5235116 C33.0634035,31.507814 33.0377895,31.479907 33.0427018,31.4387442 C33.0634035,31.1610698 33.0683158,30.8697907 33.0581404,30.5610698 C33.0581404,30.5097907 33.1149825,30.4637442 33.2286667,30.4229302 C33.3883158,30.3664186 34.1953333,30.1316512 35.6560351,29.6851395 C35.7851579,29.6436279 35.9802456,29.594093 35.9802456,29.5686279 C35.9802456,29.5372326 35.7883158,29.491186 35.6584912,29.4556047 C35.0465614,29.2654884 34.2255088,29.0345581 33.1981404,28.737 C33.0890175,28.7063023 33.0377895,28.6473488 33.0427018,28.5601395 L33.0427018,27.7518837 C33.0427018,27.6800233 33.1149825,27.644093 33.2595439,27.644093 C34.1549825,27.6235116 35.0497193,27.6029302 35.9451579,27.582 C37.424807,27.5516512 38.4907719,27.5439767 39.1427018,27.5593256" id="Fill-40" fill="#231F20"></path>
                                <path d="M34.5108772,21.1918605 C34.1701754,21.1918605 34.0080702,21.3045349 34.0235088,21.5298837 C34.0336842,21.5818605 34.0382456,21.6202326 34.0382456,21.6456977 C34.0382456,21.692093 34.0821053,21.7147674 34.1694737,21.7147674 L35.5263158,21.7147674 C35.6694737,21.7147674 35.7445614,21.679186 35.7491228,21.6076744 C35.7550877,21.5818605 35.7550877,21.550814 35.7491228,21.5148837 C35.7491228,21.4022093 35.6929825,21.3251163 35.5796491,21.2839535 C35.4147368,21.2225581 35.0578947,21.1918605 34.5108772,21.1918605 M39.2340351,20.0832558 C39.3473684,20.0577907 39.4063158,20.0832558 39.4112281,20.1603488 C39.4221053,20.2580233 39.4196491,20.5576744 39.4045614,21.0603488 C39.4045614,21.1172093 39.334386,21.1503488 39.1950877,21.1604651 C38.8442105,21.1866279 38.454386,21.199186 38.0259649,21.199186 C37.2463158,21.199186 36.8568421,21.3352326 36.8568421,21.6076744 C36.8463158,21.6432558 36.8463158,21.6739535 36.8568421,21.6994186 C36.8726316,21.7356977 36.9291228,21.7538372 37.0273684,21.7538372 C37.8375439,21.7538372 38.5494737,21.7562791 39.1638596,21.7611628 C39.2978947,21.7611628 39.3680702,21.7894186 39.3729825,21.8459302 C39.4045614,22.122907 39.4094737,22.3873256 39.3884211,22.6388372 C39.3831579,22.7002326 39.3080702,22.7312791 39.1645614,22.7312791 L33.2101754,22.7312791 C33.1168421,22.7312791 33.0712281,22.6845349 33.0712281,22.5917442 C33.0712281,22.3074419 33.0684211,21.9198837 33.0635088,21.4297674 C33.0635088,21.1098837 33.1301754,20.8384884 33.2638596,20.6166279 C33.4136842,20.374186 33.6122807,20.2527907 33.8596491,20.2527907 L35.3831579,20.2601163 C35.6350877,20.2601163 35.8522807,20.3347674 36.0326316,20.4833721 C36.1617544,20.5862791 36.2491228,20.7013953 36.2950877,20.8297674 C36.3105263,20.8709302 36.3266667,20.8911628 36.3414035,20.8911628 C36.3526316,20.8911628 36.365614,20.8709302 36.3803509,20.8297674 C36.4115789,20.7327907 36.4764912,20.6302326 36.5740351,20.522093 C36.7849123,20.2806977 37.2982456,20.1603488 38.1129825,20.1603488 C38.6336842,20.1603488 39.0073684,20.1348837 39.2340351,20.0832558" id="Fill-42" fill="#231F20"></path>
                                <path d="M37.2305263,24.9457674 C36.7992982,24.9506512 36.557193,24.9747209 36.3870175,24.9907674 C36.12,25.015186 35.7185965,25.0483256 35.7185965,25.1257674 C35.7185965,25.195186 36.0863158,25.233907 36.3919298,25.2796047 C36.5561404,25.3040233 36.9214035,25.3382093 37.2305263,25.3500698 C37.2463158,25.3507674 37.2487719,25.2823953 37.2564912,25.2290233 C37.2642105,25.173907 37.265614,25.1250698 37.2603509,25.0783256 C37.2550877,25.0266977 37.2505263,24.9457674 37.2305263,24.9457674 M39.3666667,23.6623953 C39.397193,23.6575116 39.4126316,23.680186 39.4126316,23.7311163 L39.4126316,24.1315814 C39.4073684,24.3269302 39.405614,24.4961163 39.405614,24.6394884 C39.405614,24.6858837 39.2375439,24.7448372 38.9010526,24.816 C38.6491228,24.8676279 38.4315789,24.9063488 38.2515789,24.931814 C38.2154386,24.9373953 38.1975439,24.9656512 38.1975439,25.0165814 L38.1975439,25.3169302 C38.1975439,25.3528605 38.2161404,25.3762326 38.2522807,25.386 C38.565614,25.4327442 38.9287719,25.4937907 39.3424561,25.5708837 C39.3894737,25.5914651 39.4126316,25.6148372 39.4126316,25.6403023 L39.4126316,26.5870465 C39.4126316,26.6686744 39.3814035,26.7028605 39.32,26.686814 C38.2638596,26.5127442 37.2059649,26.3383256 36.145614,26.1635581 C34.1070175,25.8199535 33.0849123,25.6148372 33.0792982,25.5478605 C33.0645614,25.2708837 33.0645614,24.993907 33.0792982,24.7165814 C33.0849123,24.655186 34.1070175,24.4654186 36.145614,24.1465814 C37.2189474,23.9822791 38.2926316,23.8214651 39.3666667,23.6623953" id="Fill-44" fill="#231F20"></path>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
            <div ref={aRef}  className={`div-a bg-white h-full overflow-y-scroll ${currentPage === null ? 'w-[100vw] px-16' : 'w-[60px]'}  ${isExpanded ? 'px-16' : ''} pt-64`}>
                <p className='mb-32 text-[75px] font-medium leading-[85px]'>Canal Street Market is a carefully curated retail market, food hall & community space open year-round at 265 Canal Street. Support Small Business this weekend!</p>
                
                <div className='mx-[-64px]'>
                    <img className='w-full' src={myImage} alt='A stall'/>
                </div>
                    
                <h2 className='mt-32 mb-14 text-[115px] leading-[150px]'>A New Kind <br/> of Market</h2>
                
                <div className='text-sm tracking-widest grid grid-cols-3 gap-16 mb-40'>
                    <div className=''>
                        <img src={food} alt="" />
                        <p className='mt-6'>Merging retail, food, art, and culture, Canal Street Market highlights top retail and design concepts, restaurants, and up-and-coming players in the downtown New York City community.</p>
                    </div>
                    <div className=''>
                        <img src={retail} alt="" />
                        <p className='mt-6'>Retail Market Hours: <br/> Fri– Sun: 11:00AM - 7:00PM</p>
                    </div>
                    <div className=''>
                        <img src={comm} alt="" />
                        <p className='mt-6'>Food Hall Hours: <br/> Mon – Sun: 11:00AM - 8:00PM</p>
                    </div>
                </div>

                <div className='py-16'>
                    <h2 className='px-14 mb-20 text-8xl text-center font-medium leading-[105px]'>Market <br/> Events</h2>
                    <div className='zoom py-16 px-16 my-20 text-center tracking-widest grid grid-cols-3 gap-16'>
                        <div>
                            <p>12/02</p>
                            <p>Small Business Retail Pop Up Weekend!</p>
                        </div>
                        <div>
                            <p>02/07</p>
                            <p>New Balance x Paperboy Paris by Greenhouse @ Canal Street Market</p>
                        </div>
                        <div>
                            <p>12/11</p>
                            <p>Hack City 12/11</p>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-16 text-center'>
                        <div className='loop py-24 px-6 w-full leading-[80px] text-6xl'>
                            <p>265 Canal St. New York, NY</p>
                        </div>
                        <div className='loop py-20'>
                            
                        </div>
                    </div>
                </div>


                <Tailend setIsModal={setIsModal}/>
            </div>

            <Link to='/food'>
                <div 
                    onClick={()=> handlePage('food')} ref={bRef}  
                    className={`bg-blue-400 ${currentPage === null ? 'h-0' : 'h-full'} ${currentPage === 'food' ? 'w-[calc(100vw-180px)]' : 'w-[60px]'} text-xl flex justify-center items-center flex-shrink-0 relative`}
                >
                    <p className='absolute w-max top-20 left-[10px]'>餐饮</p>
                    <p className='polp font-bold tracking-[3px]'>Food</p>
                </div>
            </Link>
            <Link to='/retail'>
                <div 
                    onClick={() => handlePage('retail')} ref={cRef} 
                    className={`bg-red-500 ${currentPage === null ? 'h-0' : 'h-full'} ${currentPage === 'retail' ? 'w-[calc(100vw-180px)]' : 'w-[60px]'} text-xl flex justify-center items-center flex-shrink-0 relative`}
                >
                    <p className='absolute w-max top-20 right-0 left-0 mr-auto ml-auto'>購物</p>
                    <p className='polp font-bold tracking-[3px]'>Retail</p>
                </div>
            </Link>
            <Link to='/community'>
                <div 
                    onClick={()=> handlePage('comm')} ref={dRef} 
                    className={`bg-yellow-500 ${currentPage === null ? 'h-0' : 'h-full'} ${currentPage === 'comm' ? 'w-[calc(100vw-180px)]' : 'w-[60px]'} text-xl flex justify-center items-center flex-shrink-0 relative`}
                >
                    <p className='absolute w-max top-20 right-0 left-0 mr-auto ml-auto'>文化</p>
                    <p className='polp font-bold tracking-[3px]'>Community</p>
                </div>
            </Link>

            {isModal && 
                <Modal setIsModal={setIsModal}/>
            }
        </div>
    )
}

export default Home