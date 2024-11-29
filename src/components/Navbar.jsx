import React from 'react'
import { IMAGES } from '../utils/Images'
import { navManue, socialIcons } from '../utils/DummyData'
import { Link } from 'react-router'

const Navbar = ({mainStyle,headind,text}) => {
    return (
        <div className={  `bg-hero-pattern bg-no-repeat bg-cover w-full h-[400px]`}  >
            <div className='h-[202px] max-w-[80%] mx-auto rounded-b-[30px] p-4 bg-white' >
                <div className='flex items-center justify-between border-b-2'>
                    <img src={IMAGES.LOGO} alt="logo" className='w-[114px] h-[118px] object-contain' />
                    <div className='flex items-center gap-4'>
                        <div className='flex items-center gap-2'>
                            <img src={IMAGES.PHONE} alt="phone Icon" className='w-[28px] h-[28px]' />
                            <a href="tel:+92 345 3456563">+92 345 3456563</a>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={IMAGES.MAIL} alt="mail Icon" className='w-[28px] h-[28px]' />
                            <a href="mailto:bacremail@gmail.com">bacremail@gmail.com</a>
                        </div>
                    </div>
                </div>

                <div className='w-full p-2 flex items-center justify-between' >
                    <nav className='flex items-center justify-center gap-[30px]' >
                        {
                            navManue.map((item, ind) => {
                                return (
                                    <Link key={ind} to={item.href} className='flex items-center gap-2 justify-center text-[18px]' >
                                        {item.title}
                                        {item.icon&& <img src={IMAGES.ARROWDOWN} alt='arrow' className='w-[14px] h-[14px]' />}
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
                                    <img src={item.icon} alt="icons" className='w-[42px] h-[42px]' />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div>

            </div>
        </div>
    )
}

export default Navbar