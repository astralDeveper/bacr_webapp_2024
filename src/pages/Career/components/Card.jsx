import React from 'react'
import Button from '../../../components/Button'
import { careerCardData } from '../../../utils/DummyData'

const Card = () => {
    return (

        <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-4' >
            {
                careerCardData.map((items, ind) => (
                    <div key={ind} className="lg:max-w-md p-6 bg-backgroundColor2 rounded-lg shadow-shadow1 lg:mb-6 mb-2">
                        <div className="text-text9 heading7 mb-3">
                            {items.jobType}
                        </div>

                        <h5 className="mb-2 heading6 text-text4">
                           {items.jobTitle}
                        </h5>
                        <p className="mb-3 font-normal text-text7 ">
                            {items.jobDescription}
                        </p>
                        <Button title={"Apply Now"} btnStyle={"bg-backgroundColor1 text-backgroundColor2 rounded-lg mt-4 heading7"} />
                    </div>
                ))
            }
        </div>
    )
}

export default Card