import React, { useState } from 'react'
import { IMAGES } from '../utils/Images'
import Button from './Button';

const TabBar = ({ search, tabtext1, tabtext2, tabtext3, setBrand, tabtext4, handleTabChange, tab, product, topbarStyle }) => {






    return (
        <div className=''>
            {/* Tabs Navigation */}
            <div className={`${topbarStyle?topbarStyle:"md:w-[63%] w-full"}  mx-auto flex items-center justify-around bg-backgroundColor9 rounded-lg`}>
                <Button
                    onclick={() => { handleTabChange(product ? "new" : "overseas") }}
                    btnStyle={`${tab === "new" || tab == "overseas" ? "bg-gradient-to-tl to-backgroundColor3 cursor-default from-backgroundColor4 text-backgroundColor2 transition-all duration-500 ease-linear " : "text-text4"
                        } w-full rounded-md  text2 flex-1 `}
                    title={tabtext1}
                />
                <Button
                    onclick={() => { handleTabChange(product ? "used" : "turnkey") }}
                    btnStyle={`${tab === "used" || tab == "turnkey" ? "bg-gradient-to-tl to-backgroundColor3 cursor-default from-backgroundColor4 text-backgroundColor2 transition-all duration-500 ease-linear" : "text-text4"
                        } w-full rounded-md text2 flex-1`}
                    title={tabtext2}
                />
                <Button
                    onclick={() => { handleTabChange(product ? "spareParts" : "supply") }}
                    btnStyle={`${tab === "spareParts" || tab === "supply" ? "bg-gradient-to-tl to-backgroundColor3 cursor-default from-backgroundColor4 text-backgroundColor2 transition-all duration-500 ease-linear" : "text-text4"
                        } w-full rounded-md text2 flex-1`}
                    title={tabtext3}
                />
                {
                    tabtext4 && (
                        <Button
                            onclick={() => { handleTabChange("operations") }}
                            btnStyle={`${tab === "operations" ? "bg-gradient-to-tl to-backgroundColor3 cursor-default from-backgroundColor4 text-backgroundColor2 transition-all duration-500 ease-linear" : "text-text4"
                                } w-full rounded-md text2 flex-1 w-full `}
                            title={tabtext4}
                        />
                    )
                }

            </div>
            {
                search && (
                    <div className='md:w-[63%] w-full mx-auto'>
                        <img src={IMAGES.SEARCH} alt="icon" className='md:translate-y-8 translate-y-7 translate-x-3 md:w-[16px] w-[12px]  ' />
                        <input type="text" placeholder='Search what you want...' className='px-10 border-2 w-full md:py-3 py-3 placeholder:text2 rounded-xl text2 outline-none' onChange={(e) => setBrand(e.target.value)} />
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