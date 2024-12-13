import React from 'react'
import { Products } from '../../../utils/DummyData'
import { Link } from 'react-router-dom'
import Button from '../../../components/Button'

const UsedEquipments = ({ clickedIndex }) => {
    return (
        <div className=''>
        <div className='grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-4 gap-y-4 w-full mt-1'>

            {Products.map((item, ind) => (
                <div
                    key={ind}
                    className={`lg:max-w-[370px] lg:max-h-[471px] p-6 rounded-xl shadow-md ${clickedIndex === ind
                        ? "bg-backgroundColor1 text-backgroundColor2 transition-colors duration-500 ease-in-out"
                        : "bg-backgroundColor9"
                        } cursor-pointer`}
                    onClick={() => handleClick(ind)}
                >
                    <img
                        src={item.images}
                        alt={item.productName}
                        className="lg:w-[289px] md:w-[200px] w-[150px] h-auto mb-4 mx-auto"
                    />
                    <div className="flex items-center justify-between">
                        <p className="heading7 font-semibold">{item.productName}</p>
                        <div className="flex items-center gap-2 text1">
                            <span>12</span>
                            <img src={clickedIndex === ind ? item.iconwhite : item.icon} alt="icon" className="md:w-6 w-4" />
                        </div>
                    </div>
                    <div className="mt-2">
                        <p className="text1">
                            Model No: <span className="font-bold text1">{item.modelno}</span>
                        </p>
                        <p className="text1">
                            Brands Name: <span className="font-bold text1">{item.brands}</span>
                        </p>
                    </div>
                    <div className="md:mt-6 mt-4 flex items-center justify-center">
                        <Link
                            to={{
                                pathname: `/detail/${item?.id}`,
                            }}
                            className='w-full bg-red-700'
                        >

                            <Button

                                btnStyle={`rounded-md w-full text1 ${clickedIndex === ind
                                    ? "bg-backgroundColor2 text-backgroundColor1"
                                    : "text-backgroundColor6 bg-backgroundColor1"
                                    } font-semibold`}
                                title="Product Inquiry"
                            />
                        </Link>
                    </div>
                </div>
            ))
            }</div>
    </div>
    )
}

export default UsedEquipments