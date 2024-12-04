import React, { useState } from 'react'
import { IMAGES } from '../utils/Images'
import { navManue, socialIcons } from '../utils/DummyData'
import { Link, useLocation } from 'react-router'
import Button from './Button'

const Navbar = ({ mainStyle, heading, para, home, image }) => {
    const active = useLocation().pathname

    const [menueOpen, SetMenueOpen] = useState(false)

    console.log(heading);


    return (
        <div className={`${image ? 'bg-hero-pattern bg-no-repeat bg-cover w-full' : ''}`}>
            <div className='max-w-[80%] mx-auto rounded-b-[30px] bg-white shadow-shadow2  p-6 ' >
                <div className='flex items-center justify-between'>
                    <img src={IMAGES.LOGO} alt="logo" className='lg:w-[114px] lg:h-[118px] w-[40px] object-contain' />
                    {/*   */}
                    {/* Dekstop */}
                    <div className='2xl:flex lg:hidden sm:hidden' >
                        <nav className='lg:flex md:flex sm:flex items-center justify-center xl:gap-[30px] lg:gap-[16px] md:gap-[15px] sm:gap-[6px] xs:hidden' >
                            {
                                navManue.map((item, ind) => {
                                    return (
                                        <Link key={ind} to={item.href} className={`flex items-center lg:gap-2 md:gap-2 sm:gap-1 justify-center lg:text1 md:tet-[10px]  ${active === item.href ? "text-backgroundColor4" : ""} `} >
                                            {item.title}
                                        </Link>
                                    )
                                }

                                )
                            }
                        </nav>
                    </div>
                    {/* Dekstop end */}


                    <div className='lg:flex sm:flex flex-col items-start justify-start lg:gap-4 md:gap-2 sm:1 xs:hidden '>
                        <div className='flex items-center gap-2'>
                            <img src={IMAGES.PHONE} alt="phone Icon" className='lg:w-[28px] md:w-[10px] sm:w-[15px] lg:h-[28px]' />
                            <a href="tel:+92 345 3456563" className='text1 ' >+92 345 3456563</a>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={IMAGES.MAIL} alt="mail Icon" className='lg:w-[28px]  md:w-[10px] sm:w-[15px] lg:h-[28px]' />
                            <a href="mailto:bacremail@gmail.com" className='text1 ' >bacremail@gmail.com</a>
                        </div>
                    </div>

                    <div className='2xl:hidden  w-fit cursor-pointer' onClick={() => { SetMenueOpen(!menueOpen) }} >
                        <img src={IMAGES.MANUE} alt={IMAGES.MANUE} className='w-[20px]' />
                    </div>
                </div>

                {/* Mobile Start */}
                {
                    menueOpen && (
                        <div className={`w-full p-2 2xl:hidden flex items-center flex-col bg-backgroundColor2 absolute left-0 top-0 h-full z-50`} >
                            <div className='flex items-end justify-end w-full cursor-pointer' onClick={() => { SetMenueOpen(!menueOpen) }} >
                                <img src={IMAGES.CLOSE} alt={IMAGES.CLOSE} className='w-[30px]' />
                            </div>
                            <nav className='flex items-center justify-center flex-col gap-10 mt-12 ' >
                                {
                                    navManue.map((item, ind) => {
                                        return (
                                            <Link key={ind} to={item.href} className={`flex items-center flex-row gap-2  justify-center text-[20px] font-semibold ${active === item.href ? "text-text2" : ""} `} >
                                                {item.title}
                                                {/* {item.icon && <img src={IMAGES.ARROWDOWN} alt='arrow' className='w-[12px]' />} */}
                                            </Link>
                                        )
                                    }
                                    )
                                }
                            </nav>

                            <div className='flex flex-col items-center justify-center gap-4 mt-6'>
                                <div className='flex items-center gap-2'>
                                    <img src={IMAGES.PHONE} alt="phone Icon" className='w-[20px]' />
                                    <a href="tel:+92 345 3456563" className='text-[20px]' >+92 345 3456563</a>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <img src={IMAGES.MAIL} alt="mail Icon" className='w-[20px]' />
                                    <a href="mailto:bacremail@gmail.com" className='text-[20px]' >bacremail@gmail.com</a>
                                </div>
                            </div>
                            {/* <div className={`flex items-center justify-center gap-2 mt-6 w-full`}>
                                {
                                    socialIcons.map((item, ind) => (
                                        <div key={ind} className='shrink-0'>
                                            <img src={item.icon} alt="icons" className='w-[42px]' />
                                        </div>
                                    ))
                                }
                            </div> */}
                        </div>
                    )
                }
                {/* Mobile End */}

            </div>
            {/*   gap-6 flex items-center justify-center flex-col */}
            {image &&
                <div className={`w-[80%] mx-auto pb-28 `}>
                    <div className={`lg:mt-14 md:mt-7 mt-4 ${active === "/" ? "" : "flex flex-col items-center justify-center  text-center"}  `} >
                        <p className={`heading1 text-backgroundColor2 xl:w-[82%] w-full`} >{heading}</p>
                        <p className={`text1 text-backgroundColor2 xl:w-[34%] w-full mt-4`}>{para}</p>
                    </div>
                    {
                        home && (
                            <div className='flex  lg:gap-10 md:gap-6 sm:gap-4 xs:gap-2 lg:flex-row md:flex-row sm:flex-col xs:flex-col lg:mt-10 md:mt-4 mt-4  ' >
                                <Button className="text1" btnStyle="bg-backgroundColor2 text-text2" title={"Explore Our Products"} />
                                <Button className="text1" btnStyle="rounded-md border text-backgroundColor2" title={"Request a Consultation"} />
                            </div>
                        )
                    }
                </div>
            }



        </div>
    )
}

export default Navbar