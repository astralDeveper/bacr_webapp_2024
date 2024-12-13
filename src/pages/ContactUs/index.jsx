import React from 'react'
import Container from '../../components/Container'
import { IMAGES } from '../../utils/Images'
import { address } from '../../utils/DummyData'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

const ContactUs = () => {
    return (
        <Container image heading={"Contact US"} >

            <div className='w-[80%]  mx-auto md:p-10 p-2 mb-10' >

                <div className='grid xl:grid-cols-2 lg:grid-cols-1  gap-2 justify-between' >
                    <div className='flex flex-col gap-4 xl:w-[77%]' >
                        {/* <p className='text-text1 text-1' >Contact Us</p> */}
                        <p className='heading3'>Get in Touch</p>
                        <p className='text1 text-text7' >Contact us if you have any questions about some of our HVAC services. You can also call if you need help with a heating, cooling or air quality issues. We provide free quotes for any new heating or AC equipment installation. Whether you need residential or commercial services, our experienced HVAC specialists are ready to serve you.</p>
                        <div className='flex items-start md:gap-4 gap-2 flex-col'>
                            <div className='flex items-center gap-2 md:mt-4'>
                                <img src={IMAGES.PHONE} alt={IMAGES.PHONE} className='md:w-[20px] w-[10px]' />
                                <p className='text1'>(+92) 21 34322501</p>
                            </div>  <div className='flex items-center gap-2'>
                                <img src={IMAGES.PHONE} alt={IMAGES.PHONE} className='md:w-[20px] w-[10px]' />
                                <p className='text1'>(+92) 21 34322502</p>
                            </div> 
                            <div className='flex items-center gap-2'>
                                <img src={IMAGES.MAIL} alt={IMAGES.MAIL} className='md:w-[20px] w-[10px]' />
                                <p className='text1'>bacremail@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className='border w-full md:p-10 p-3 rounded-2xl shadow-shadow2 md:mt-0 mt-2 ' >
                        <form className='flex items-center flex-col justify-center md:gap-10 gap-4 w-full ' >
                            <input type="text" placeholder='Your Name' className='border placeholder:text1 placeholder:text-text8 w-full lg:p-6 p-2 md:p-4 border-text8 rounded-full outline-none' autoComplete={false} />
                            <div className='grid lg:grid-cols-2 sm:grid-cols-1 items-center md:gap-10 gap-4 w-full' >
                                <input type="text" placeholder='Phone no' className='border placeholder:text1 placeholder:text-text8 w-full lg:p-6 p-2 md:p-4 border-text8 rounded-full outline-none' autoComplete={false} />
                                <input type="text" placeholder='Email' className='border placeholder:text1 placeholder:text-text8 w-full lg:p-6 p-2 md:p-4 border-text8 rounded-full outline-none' autoComplete={false} />
                            </div>
                            <textarea placeholder='Message (Option)' className='border placeholder:text1 placeholder:text-text8 w-full md:p-6 p-4 border-text8 md:h-[170px] h-[120px] rounded-2xl outline-none' autoComplete={false} ></textarea>
                            <Button title={"Send Message"} btnStyle={"bg-backgroundColor1 heading7 text-backgroundColor2 lg:w-[310px] md:w-[200px] sm:w-[180px] w-full rounded-lg "} />
                        </form>
                    </div>
                </div>

                <div className='lg:mt-20 md-mt-10 mt-6 grid lg:grid-cols-2 md:grid-cols-1 lg:gap-20 md:gap-10 gap-6 items-center'>

                    <img src="https://www.thestatesman.com/wp-content/uploads/2020/04/googl_ED.jpg" alt="MAp" className='lg:w-[816px] border rounded-md shadow-shadow1 border-backgroundColor5' />

                    <div className='lg:w-[80%] flex flex-col justify-center'>
                        <p className='heading3' >Addresses</p>

                        {
                            address.map((item, ind) => (
                                <div key={ind} className=''>
                                    <p className='heading6 text-text8'>{item.title}</p>
                                    <p className='text1 text-text9 cursor-pointer '>{item.addtess}</p>
                                    <Link to={item.Location}>
                                    <p className='text1 text-text8 cursor-pointer '>{item.Location}</p>
                                    </Link>
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