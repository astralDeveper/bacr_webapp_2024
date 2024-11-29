import React from 'react'
import { IMAGES } from '../utils/Images'
import { navManue, socialIcons } from '../utils/DummyData'
import { Link, useLocation } from 'react-router'

const Navbar = ({mainStyle,headind,para}) => {
    const active = useLocation().pathname
    console.log(active);
    
    return (
        <div className={  `bg-hero-pattern bg-no-repeat bg-cover w-full `}  >
            <div className='h-[202px] max-w-[80%] mx-auto rounded-b-[30px] p-4 bg-white' >
                <div className='flex items-center justify-between border-b-2'>
                    <img src={IMAGES.LOGO} alt="logo" className='w-[114px] h-[118px] object-contain' />
                    <div className='flex items-center gap-4'>
                        <div className='flex items-center gap-2'>
                            <img src={IMAGES.PHONE} alt="phone Icon" className='lg:w-[28px] md:w-[20px] sm:w-[15px]  lg:h-[28px]  ' />
                            <a href="tel:+92 345 3456563">+92 345 3456563</a>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={IMAGES.MAIL} alt="mail Icon" className='lg:w-[28px]  md:w-[20px] sm:w-[15px] lg:h-[28px]  ' />
                            <a href="mailto:bacremail@gmail.com">bacremail@gmail.com</a>
                        </div>
                    </div>
                </div>

                <div className='w-full p-2 flex items-center justify-between' >
                    <nav className='lg:flex md:flex sm:flex items-center justify-center lg:gap-[30px] md:gap-[15px] sm:gap-[6px] xs:hidden' >
                        {
                            navManue.map((item, ind) => {
                                return (
                                    <Link key={ind} to={item.href} className={`flex items-center lg:gap-2 md:gap-2 sm:gap-1 justify-center text1 font-semibold ${active === item.href?"text-text2":""} `} >
                                        {item.title}
                                        {item.icon&& <img src={IMAGES.ARROWDOWN} alt='arrow' className='lg:w-[14px] md:w-[12px] sm:w-[10px] lg:h-[14px]' />}
                                    </Link>
                                )
                            }

                            )
                        }
                    </nav>
                    <div className='flex items-center gap-1 xs:mx-auto'>
                        {
                            socialIcons.map((item, ind) => (
                                <div key={ind} className='shrink-0'>
                                    <img src={item.icon} alt="icons" className='lg:w-[42px] md:w-[30px] sm:w-[18px] lg:h-[42px]' />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='w-[80%] mx-auto mt-4 p-4 flex flex-col lg:gap-6 md:gap-2 sm:gap-1' >
                <p className='heading1 w-[80%]' >{headind}</p>
                <p className='text1 text-backgroundColor2 w-[40%]'>{para}</p>

            </div>
        </div>
    )
}

export default Navbar