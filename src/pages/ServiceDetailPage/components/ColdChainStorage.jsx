import React from 'react'
import { IMAGES } from '../../../utils/Images'
import { comfortCooling } from '../../../utils/DummyData'

const ColdChainStorage = () => {
    return (
        <div className="w-full py-14">
            <div className="relative max-w-[80%] mx-auto">
                <img src={IMAGES.COMFORT1} alt={IMAGES.COMFORT1} />
                <div className="py-8">
                    <h1 className="heading1 py-2">
                        Welcome to BAC Comfort Cooling Solutions
                    </h1>
                    <p className="text1 text-text7">
                        At BAC, we specialize in delivering cutting-edge Comfort Cooling
                        solutions for HVACR chillers and equipment, ensuring optimal
                        performance and enhanced comfort in diverse environments. With a
                        legacy of excellence and innovation spanning decades, we are
                        committed to providing reliable, efficient, and sustainable
                        cooling solutions tailored to meet the unique needs of our
                        clients.
                    </p>
                </div>
                <div className="py-6">
                    <h1 className="heading1 py-2">Your Comfort, Our Mission</h1>
                    <p className="text1 text-text7">
                        Upgrading your existing air conditioning system to more
                        energy-efficient models, helping you save on energy bills and
                        reduce your carbon footprint Lubrication of moving parts,
                        electrical connection inspection,
                    </p>
                </div>
                <div className="w-[100%] grid md:grid-cols-2 grid-cols-1 place-items-center items-center justify-center gap-4 py-4">
                    {comfortCooling.map((item, index) => (
                        <div className='p-4'>
                            <div>
                                <img
                                    className="rounded-xl font-semibold object-contain md:w-[748px] w-[500px] h-[463px]"
                                    src={item.img}
                                    alt={item.img}
                                />
                            </div>
                            <div className="py-4 flex flex-col gap-3 w-full">
                                <h1 className="heading5 lg:w-full md:w-[80%] md:line-clamp-1 ">
                                    {item.title}
                                </h1>
                                <p className="text1 font-poppins font-bold  text-text7">
                                    {item.para}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="py-8">
                    <h1 className="heading4">HVAC Systems</h1>
                    <p className="text1 text-text7">
                        We prioritize customer satisfaction above all else, striving to
                        exceed expectations at every step of the process. From initial
                        consultation to ongoing support, our dedicated team is committed
                        to delivering exceptional service and ensuring a seamless
                        experience for our clients.
                    </p>
                    <br />
                    <p className="text1 text-text7">
                        At BAC, we are committed to sustainability and environmental
                        responsibility. Our cooling solutions are designed to minimize
                        environmental impact while maximizing energy efficiency. By
                        utilizing innovative technologies and eco-friendly practices, we
                        help clients reduce their carbon footprint and achieve their
                        sustainability goals.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ColdChainStorage