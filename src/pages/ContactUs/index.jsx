import React, { useEffect, useState } from 'react'
import Container from '../../components/Container'
import { IMAGES } from '../../utils/Images'
import { address } from '../../utils/DummyData'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

const ContactUs = () => {
    const [visibleCards, setVisibleCards] = useState([]);
    const [visibleText, setVisibleText] = useState([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target.classList.contains("ltr")) {
                            setVisibleCards((prev) => [...new Set([...prev, entry.target.id])]); // Avoid duplicates
                        }
                        if (entry.target.classList.contains("rtl")) {
                            setVisibleText((prev) => [...new Set([...prev, entry.target.id])]); // Avoid duplicates
                        }
                    }
                });
            },
            {
                threshold: 0.2, // Trigger when 20% of the element is visible
            }
        );
    
        const cards = document.querySelectorAll(".ltr");
        const texts = document.querySelectorAll(".rtl");
    
        cards.forEach((card) => observer.observe(card));
        texts.forEach((text) => observer.observe(text));
    
        return () => {
            cards.forEach((card) => observer.unobserve(card));
            texts.forEach((text) => observer.unobserve(text));
        };
    }, []);
    
    return (
        <Container image heading={"Contact US"} >

            <div className=' md:w-[80%] w-[96%] mx-auto md:p-10 p-2 mb-10' >

                <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-4 justify-between' >
                    <div
                        style={{
                            animation: `slideLtr 2s ease-out forwards`,
                            animationDelay: `0.5s`,  // Delay based on index
                            opacity: 0,  // Initially invisible
                            transform: 'translateY(20px)',  // Initially positioned below
                        }}
                        className='flex flex-col gap-4 xl:w-[77%]' >
                        {/* <p className='text-text1 text-1' >Contact Us</p> */}
                        <p className='heading4 font-semibold'>Get in Touch</p>
                        <p className='text2 text-text7' >Contact us if you have any questions about some of our HVAC services. You can also call if you need help with a heating, cooling or air quality issues. We provide free quotes for any new heating or AC equipment installation. Whether you need residential or commercial services, our experienced HVAC specialists are ready to serve you.</p>
                        <div className='flex items-start md:gap-4 gap-2 flex-col'>
                            <div className='flex items-center gap-2 md:mt-4'>
                                <img src={IMAGES.PHONE} alt={IMAGES.PHONE} className='md:w-[16px] w-[10px]' />
                                <p className='text2'>(+92) 21 34322501</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img src={IMAGES.PHONE} alt={IMAGES.PHONE} className='md:w-[16px] w-[10px]' />
                                <p className='text2'>(+92) 21 34322502</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img src={IMAGES.PHONE} alt={IMAGES.PHONE} className='md:w-[16px] w-[10px]' />
                                <p className='text2'>(+92) 21 34322502</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img src={IMAGES.MAIL} alt={IMAGES.MAIL} className='md:w-[16px] w-[10px]' />
                                <p className='text2'>bacremail@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div
                        style={{
                            animation: `slideRtl 2s ease-out forwards`,
                            animationDelay: `0.5s`,  // Delay based on index
                            opacity: 0,  // Initially invisible
                            transform: 'translateY(20px)',  // Initially positioned below
                        }}
                        className='border md:p-6 p-2 rounded-2xl shadow-shadow2 md:mt-0 mt-2' >
                        <form

                            className='flex items-center flex-col justify-center md:gap-10 gap-4 w-full ' >
                            <input type="text" placeholder='Your Name' className='border placeholder:text1 placeholder:text-text8 w-full md:py-3 py-2 md:px-2 px-1 border-text8 rounded-full outline-none' autoComplete={false} />
                            <div className='grid lg:grid-cols-2 sm:grid-cols-1 items-center gap-4 w-full' >
                                <input type="text" placeholder='Phone no' className='border placeholder:text1 placeholder:text-text8 w-full md:py-3 py-2 md:px-2 px-1 border-text8 rounded-full outline-none' autoComplete={false} />
                                <input type="text" placeholder='Email' className='border placeholder:text1 placeholder:text-text8 w-full md:py-3 py-2 md:px-2 px-1 border-text8 rounded-full outline-none' autoComplete={false} />
                            </div>
                            <textarea placeholder='Message (Option)' className='border placeholder:text1 placeholder:text-text8 w-full md:p-6 p-4 border-text8 md:h-[170px] h-[120px] rounded-2xl outline-none' autoComplete={false} ></textarea>
                            <Button title={"Send Message"} btnStyle={"bg-backgroundColor1 heading7 text-backgroundColor2 lg:w-[310px] md:w-[200px] sm:w-[180px] w-full rounded-lg "} />
                        </form>
                    </div>
                </div>

                <div className='lg:mt-20 md-mt-10 mt-6 grid lg:grid-cols-2 md:grid-cols-1 lg:gap-20 md:gap-10 gap-4 items-center'>
                    <div id='ltr' className={` w-full h-full ltr ${visibleCards.includes(`ltr`) ? "visible" : ""}`}>
                        <img src="https://www.thestatesman.com/wp-content/uploads/2020/04/googl_ED.jpg" alt="MAp" className='h-full object-cover border w-full rounded-md shadow-shadow1 border-backgroundColor5' />
                    </div>

                    <div className='lg:w-[80%] flex flex-col justify-center'>
                        <p className='heading5' >Addresses</p>

                        {
                            address.map((item, ind) => (
                                <div key={ind} id={`rtl-${ind}`} className={`rtl ${visibleText.includes(`rtl-${ind}`) ? "visible" : ""}`}>
                                    <p className='heading7 font-bold text-text8'>{item.title}</p>
                                    <p className='text2 text-text9 cursor-pointer '>{item.addtess}</p>
                                    {/* <Link to={item.Location}>
                                        <p className='text1 text-text8 cursor-pointer '>{item.Location}</p>
                                    </Link> */}
                                </div>
                            ))
                        }

                    </div>

                </div>









            </div>

        </Container>
    )
}

export default ContactUs