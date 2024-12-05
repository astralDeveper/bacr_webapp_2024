import React, { useState } from 'react'
import { IMAGES } from '../utils/Images'
import Button from './Button';

const TabBar = ({ search,tabtext1,tabtext2,tabtext3 }) => {

    const [tab, setTab] = useState("new");

    const handleTabChange = (selectedTab) => {
        setTab(selectedTab);
    };
    return (
        <div>
            {/* Tabs Navigation */}
            <div className="lg:w-[70%] mx-auto flex items-center justify-around bg-backgroundColor9 rounded-lg">
                <Button
                    onclick={() => { handleTabChange("new") }}
                    btnStyle={`${tab === "new" ? "bg-gradient-to-tl to-backgroundColor3 from-backgroundColor4 text-backgroundColor2 transition-all duration-500 ease-linear " : "text-text4"
                        } w-full rounded-md  lg:text-[18px] md:text-[14px] text-[10px] flex-1 w-full `}
                    title={tabtext1}
                />
                <Button
                    onclick={() => { handleTabChange("used") }}
                    btnStyle={`${tab === "used" ? "bg-gradient-to-tl to-backgroundColor3 from-backgroundColor4 text-backgroundColor2 transition-all duration-500 ease-linear" : "text-text4"
                        } w-full rounded-md lg:text-[18px] md:text-[14px] text-[10px] flex-1 w-full`}
                    title={tabtext2}
                />
                <Button
                    onclick={() => { handleTabChange("store") }}
                    btnStyle={`${tab === "store" ? "bg-gradient-to-tl to-backgroundColor3 from-backgroundColor4 text-backgroundColor2 transition-all duration-500 ease-linear" : "text-text4"
                        } w-full rounded-md lg:text-[18px] md:text-[14px] text-[10px] flex-1 w-full`}
                    title={tabtext3}
                />

            </div>
            {
                search && (
                    <div className='lg:w-[70%] mx-auto'>
                        <img src={IMAGES.SEARCH} alt="icon" className='translate-y-11 translate-x-3 w-[20px]  ' />
                        <input type="text" placeholder='Search what you want...' className='px-10 border-2 w-full h-[67px] rounded-xl outline-none' onChange={(e) => setBrand(e.target.value)} />
                    </div>

                )
            }

            {/* Tab Content */}
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
            </div>
        </div>

    )
}

export default TabBar