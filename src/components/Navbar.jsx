import React, { useState } from 'react'
import { IMAGES } from '../utils/Images'
import { navManue, socialIcons } from '../utils/DummyData'
import { Link, useLocation } from 'react-router'
import Button from './Button'

const Navbar = ({ mainStyle, heading, para, home }) => {
    const active = useLocation().pathname

    const [menueOpen, SetMenueOpen] = useState(false)

    console.log(heading);


    return (
        <div className={`bg-hero-pattern bg-no-repeat bg-cover w-full`}>
            <div className='max-w-[80%] mx-auto rounded-b-[30px] bg-white p-6' >
                <div className='flex items-center justify-between'>
                    <img src={IMAGES.LOGO} alt="logo" className='xl:w-[114px] lg:h-[118px] lg:w-[60px] w-[40px] object-contain' />
                    {/*   */}
                    {/* Dekstop */}
                    <div className='lg:flex md:hidden sm:hidden' >
                        <nav className='lg:flex md:flex sm:flex items-center justify-center xl:gap-[30px] lg:gap-[16px] md:gap-[15px] sm:gap-[6px] xs:hidden' >
                            {
                                navManue.map((item, ind) => {
                                    return (
                                        <Link key={ind} to={item.href} className={`flex items-center lg:gap-2 md:gap-2 sm:gap-1 justify-center text1 lg:font-semibold ${active === item.href ? "text-backgroundColor4" : ""} `} >
                                            {item.title}
                                        </Link>
                                    )
                                }

                                )
                            }
                        </nav>
                    </div>
                    {/* Dekstop end */}


                    <div className='lg:flex sm:flex flex-col items-start justify-start gap-4 xs:hidden '>
                        <div className='flex items-center gap-2'>
                            <img src={IMAGES.PHONE} alt="phone Icon" className='lg:w-[28px] md:w-[14px] sm:w-[15px] lg:h-[28px]' />
                            <a href="tel:+92 345 3456563" className='xl:text1 lg:text ' >+92 345 3456563</a>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={IMAGES.MAIL} alt="mail Icon" className='lg:w-[28px]  md:w-[14px] sm:w-[15px] lg:h-[28px]' />
                            <a href="mailto:bacremail@gmail.com" className='xl:text1 lg:text  ' >bacremail@gmail.com</a>
                        </div>
                    </div>

                    <div className='lg:hidden md:block w-fit cursor-pointer' onClick={() => { SetMenueOpen(!menueOpen) }} >
                        <img src={IMAGES.MANUE} alt={IMAGES.MANUE} className='w-[20px]' />
                    </div>
                </div>

                {/* Mobile Start */}
                {
                    menueOpen && (
                        <div className={`w-full p-2 lg:hidden flex items-center flex-col bg-backgroundColor2 absolute left-0 top-0 h-full`} >
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
                                    <img src={IMAGES.PHONE} alt="phone Icon" className='w-[20px]   ' />
                                    <a href="tel:+92 345 3456563" className='text-[20px' >+92 345 3456563</a>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <img src={IMAGES.MAIL} alt="mail Icon" className='w-[20px]    ' />
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

            <div className='w-[80%] mx-auto pb-28 '>
                <div className={`lg:mt-14 md:mt-7 mt-4 ${mainStyle} flex flex-col gap-6 `} >
                    <p className={` heading1 text-backgroundColor2 ${mainStyle} `} >{heading}</p>
                    <p className='text1 text-backgroundColor2 lg:w-[40%]'>{para}</p>
                </div>
                {
                    home && (
                        <div className='flex  lg:gap-10 md:gap-6 sm:gap-4 xs:gap-2 lg:flex-row md:flex-row sm:flex-col xs:flex-col lg:mt-8 md:mt-4 sm:mt-2 xs:mt-2 ' >
                            <Button className="text1" btnStyle="bg-backgroundColor2 text-text2" title={"Explore Our Products"} />
                            <Button className="text1" btnStyle="rounded-md border text-backgroundColor2" title={"Request a Consultation"} />
                        </div>
                    )
                }
            </div>



        </div>
    )
}

export default Navbar