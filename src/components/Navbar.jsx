import React, { useState } from 'react'
import { IMAGES } from '../utils/Images'
import { navManue, socialIcons } from '../utils/DummyData'
import { Link, useLocation } from 'react-router'
import Button from './Button'

const Navbar = ({ mainStyle, headind, para, home }) => {
    const active = useLocation().pathname

    const [menueOpen, SetMenueOpen] = useState(false)

    return (
        <div className={`bg-hero-pattern bg-no-repeat bg-cover w-full`}>
            <div className='h-[202px] max-w-[80%] mx-auto rounded-b-[30px] p-4 bg-white' >

                <div className='lg:hidden md:hidden xs:block w-fit cursor-pointer' onClick={() => { SetMenueOpen(!menueOpen) }} >
                    <img src={IMAGES.MANUE} alt={IMAGES.MANUE} className='w-[20px]' />
                </div>

                <div className='flex items-center justify-between lg:border-b-2 md:border-b-2 xs:border-none lg:flex-row md:flex-row xs:flex-col'>
                    <img src={IMAGES.LOGO} alt="logo" className='w-[114px] h-[118px] object-contain' />
                    <div className='lg:flex lg:flex-row md:flex-row xs:flex-col items-center gap-4'>
                        <div className='flex items-center gap-2'>
                            <img src={IMAGES.PHONE} alt="phone Icon" className='lg:w-[28px] md:w-[20px] sm:w-[15px] lg:h-[28px] xs:w-[12px]  ' />
                            <a href="tel:+92 345 3456563" className='text-1' >+92 345 3456563</a>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={IMAGES.MAIL} alt="mail Icon" className='lg:w-[28px]  md:w-[20px] sm:w-[15px] lg:h-[28px] xs:w-[12px]  ' />
                            <a href="mailto:bacremail@gmail.com" className='text-1' >bacremail@gmail.com</a>
                        </div>
                    </div>
                </div>
                {/* Dekstop */}
                <div className='w-full p-2 lg:flex md:flex items-center justify-between xs:hidden ' >
                    <nav className='lg:flex md:flex sm:flex items-center justify-center lg:gap-[30px] md:gap-[15px] sm:gap-[6px] xs:hidden' >
                        {
                            navManue.map((item, ind) => {
                                return (
                                    <Link key={ind} to={item.href} className={`flex items-center lg:gap-2 md:gap-2 sm:gap-1 justify-center text1 font-semibold ${active === item.href ? "text-text2" : ""} `} >
                                        {item.title}
                                        {item.icon && <img src={IMAGES.ARROWDOWN} alt='arrow' className='lg:w-[14px] md:w-[12px] sm:w-[10px] lg:h-[14px]' />}
                                    </Link>
                                )
                            }

                            )
                        }
                    </nav>
                    <div className='flex items-center gap-1'>
                        {
                            socialIcons.map((item, ind) => (
                                <div key={ind} className='shrink-0'>
                                    <img src={item.icon} alt="icons" className='lg:w-[42px] md:w-[30px] sm:w-[18px] lg:h-[42px]' />
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* Dekstop end */}

                {/* Mobile Start */}
                {
                    menueOpen && (
                        <div className={`w-full p-2 lg:hidden md:hidden flex items-center flex-col bg-red-700 absolute left-0 top-0 h-full`} >
                            <div className='bg-yellow-400 flex items-end justify-end w-full cursor-pointer' onClick={() => { SetMenueOpen(!menueOpen) }} >
                                <img src={IMAGES.CLOSE} alt={IMAGES.CLOSE} className='w-[30px]' />
                            </div>
                            <nav className='flex items-center justify-center flex-col gap-10 mt-12 ' >
                                {
                                    navManue.map((item, ind) => {
                                        return (
                                            <Link key={ind} to={item.href} className={`flex items-center flex-row gap-2  justify-center text-[20px] font-semibold ${active === item.href ? "text-text2" : ""} `} >
                                                {item.title}
                                                {item.icon && <img src={IMAGES.ARROWDOWN} alt='arrow' className='w-[12px]' />}
                                            </Link>
                                        )
                                    }

                                    )
                                }
                            </nav>
                            <div className={`flex items-center justify-center gap-2 mt-6 w-full`}>
                                {
                                    socialIcons.map((item, ind) => (
                                        <div key={ind} className='shrink-0'>
                                            <img src={item.icon} alt="icons" className='w-[42px]' />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    )
                }
                {/* Mobile End */}

            </div>

            <div className='w-[80%] mx-auto pb-28 '>
                <div className={` lg:mt-10 p-4 flex flex-col lg:gap-6 md:gap-2 sm:gap-1`} >
                    <p className={` heading1 lg:w-[80%]`} >{headind}</p>
                    <p className='text1 text-backgroundColor2 lg:w-[40%]'>{para}</p>
                </div>
                {
                    home && (
                        <div className='flex lg:items-start md:items-center lg:justify-start md:justify-center lg:gap-10 md:gap-4 lg:mt-8 md:mt-4 lg:flex-row md:flex-row sm:flex-row xs:flex-col' >
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