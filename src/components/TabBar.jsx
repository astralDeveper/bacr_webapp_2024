import React, { useState } from 'react'
import { IMAGES } from '../utils/Images'
import Button from './Button';

const TabBar = ({ search, tabtext1, tabtext2, tabtext3, setBrand, tabtext4, handleTabChange, tab, product }) => {






    return (
        <div className=''>
            {/* Tabs Navigation */}
            <div className="md:w-[70%] w-full mx-auto flex items-center justify-around bg-backgroundColor9 rounded-lg">
                <Button
                    onclick={() => { handleTabChange(product ? "new" : "overseas") }}
                    btnStyle={`${tab === "new" || tab == "overseas" ? "bg-gradient-to-tl to-backgroundColor3 cursor-default from-backgroundColor4 text-backgroundColor2 transition-all duration-500 ease-linear " : "text-text4"
                        } w-full rounded-md  lg:text-[18px] md:text-[14px] text-[10px] flex-1 w-full `}
                    title={tabtext1}
                />
                <Button
                    onclick={() => { handleTabChange(product ? "used" : "turnkey") }}
                    btnStyle={`${tab === "used" || tab == "turnkey" ? "bg-gradient-to-tl to-backgroundColor3 cursor-default from-backgroundColor4 text-backgroundColor2 transition-all duration-500 ease-linear" : "text-text4"
                        } w-full rounded-md lg:text-[18px] md:text-[14px] text-[10px] flex-1 w-full `}
                    title={tabtext2}
                />
                <Button
                    onclick={() => { handleTabChange(product ? "spareParts" : "supply") }}
                    btnStyle={`${tab === "spareParts" || tab === "supply" ? "bg-gradient-to-tl to-backgroundColor3 cursor-default from-backgroundColor4 text-backgroundColor2 transition-all duration-500 ease-linear" : "text-text4"
                        } w-full rounded-md lg:text-[18px] md:text-[14px] text-[10px] flex-1 w-full `}
                    title={tabtext3}
                />
                {
                    tabtext4 && (
                        <Button
                            onclick={() => { handleTabChange("operations") }}
                            btnStyle={`${tab === "operations" ? "bg-gradient-to-tl to-backgroundColor3 cursor-default from-backgroundColor4 text-backgroundColor2 transition-all duration-500 ease-linear" : "text-text4"
                                } w-full rounded-md lg:text-[18px] md:text-[14px] text-[10px] flex-1 w-full `}
                            title={tabtext4}
                        />
                    )
                }

            </div>
            {
                search && (
                    <div className='md:w-[70%] w-full mx-auto'>
                        <img src={IMAGES.SEARCH} alt="icon" className='md:translate-y-10 translate-y-8 translate-x-3 md:w-[20px] w-[16px]  ' />
                        <input type="text" placeholder='Search what you want...' className='px-10 border-2 w-full md:py-4 py-3 placeholder:text1 rounded-xl text1 outline-none' onChange={(e) => setBrand(e.target.value)} />
                    </div>

                )
            }
            {/* Tab Content
            <div className="mt-6">
                {tab === "new" && (
                    <div>
                        <h2 className="text1">{tabtext1}</h2>
                    </div>
                )}
                {tab === "used" && (
                    <div>
                        <h2 className="text1">{tabtext2}</h2>
                    </div>
                )}
                {tab === "store" && (
                    <div>
                        <h2 className="text1">{tabtext3}</h2>
                    </div>
                )}
            </div> */}
        </div>

    )
}

export default TabBar