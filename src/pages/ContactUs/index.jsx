import React from 'react'
import Container from '../../components/Container'
import { IMAGES } from '../../utils/Images'
import { address } from '../../utils/DummyData'

const ContactUs = () => {
    return (
        <Container image heading={"Contact US"} >

            <div className='xl:w-[80%] mx-auto p-10 mb-10' >

                <div className='grid xl:grid-cols-2 lg:grid-cols-1 items-center gap-2 justify-between' >
                    <div className='flex flex-col gap-6 xl:w-[70%]' >
                        <p className='text-text1 text-1' >Contact Us</p>
                        <p className='heading3'>Get in Touch</p>
                        <p className='text1 text-text7' >Contact us if you have any questions about some of our HVAC services. You can also call if you need help with a heating, cooling or air quality issues. We provide free quotes for any new heating or AC equipment installation. Whether you need residential or commercial services, our experienced HVAC specialists are ready to serve you.</p>
                        <div className='flex items-center gap-6 lg:flex-row md:flex-row flex-col'>
                            <div className='flex items-center gap-2'>
                                <img src={IMAGES.PHONE} alt={IMAGES.PHONE} className='w-[24px]' />
                                <p className='text-1'>+92 345 3456563</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img src={IMAGES.MAIL} alt={IMAGES.MAIL} className='w-[24px]' />
                                <p className='text-1'>bacremail@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className='border w-full h-[536px] p-10 rounded-2xl shadow-shadow2 mt-10' >
                        <form className='flex items-center flex-col justify-center gap-10 mt-10w-full ' >
                            <input type="text" placeholder='Your Name' className='border placeholder:text1 placeholder:text-text8 w-full lg:p-6 p-4 border-text8 rounded-full outline-none' autoComplete={false} />
                            <div className='grid lg:grid-cols-2 sm:grid-cols-1 items-center gap-10 w-full' >
                                <input type="text" placeholder='Phone no' className='border placeholder:text1 placeholder:text-text8 w-full lg:p-6 p-4 border-text8 rounded-full outline-none' autoComplete={false} />
                                <input type="text" placeholder='Email' className='border placeholder:text1 placeholder:text-text8 w-full lg:p-6 p-4 border-text8 rounded-full outline-none' autoComplete={false} />
                            </div>
                            <textarea placeholder='Message (Option)' className='border placeholder:text1 placeholder:text-text8 w-full p-6 border-text8 h-[170px] rounded-2xl outline-none' autoComplete={false} ></textarea>
                        </form>
                    </div>
                </div>

                <div className='lg:mt-20 md-mt-10 mt-6 grid lg:grid-cols-2 md:grid-cols-1 lg:gap-20 md:gap-10 gap-6 items-center'>

                    <img src="https://www.thestatesman.com/wp-content/uploads/2020/04/googl_ED.jpg" alt="MAp" className='lg:w-[816px]' />

                    <div className='lg:w-[80%] flex flex-col justify-center'>
                        <p className='heading3' >Addresses</p>

                        {
                            address.map((item, ind) => (
                                <div key={ind} className=''>
                                    <p className='heading6 text-text8'>{item.title}</p>
                                    <p className='text1 text-text9' >{item.addtess}</p>
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