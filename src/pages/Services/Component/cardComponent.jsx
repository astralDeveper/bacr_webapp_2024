
// import { serviceCardData } from '../../../utils/DummyData'

// const CardComponent = () => {
//   return (
//     <div>
//         <div className='bg-Navbar'>
//             <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//                     {serviceCardData.map((item, ind) => {
//                         return (
//                             <div key={ind} className="rounded-2xl overflow-hidden shadow-lg flex flex-col  ">
//                                  <div className='relative'>
//                                      <img className="w-full h-[224px] rounded-t-2xl"
//                                         src={item.image}
//                                         alt={item.image} />
//                                         <p className='absolute transform -translate-y-40    text-center w-full bg-red-600 mx-auto  rounded-xl     items-center justify-center heading3 text-white'>{item.text}</p>
//                                         <div className='absolute transform my-10 w-full -translate-y-20 mx-auto bg-red-500    items-center justify-center'>
//                                         <img className="  rounded-lg p-2  mx-auto object-contain w-[70px] h-[70px]"
//                                         src={item.logo}
//                                         alt={item.logo} />
//                                         </div>
//                                  </div>
                                   

//                                 <div className="p-3 bg-BackgroundColor1  bg-green-600">  
//                                     <p className="text-white text-sm">{item.description}</p>
//                                     <p className="text-white text-sm">{item.description}</p> 

//                                 </div>
//                             </div>
//                         )
//                     })}
//                 </div>
//             </div>
//         </div>

 
//     </div>
//   )
// }

// export default CardComponent



import Button from '../../../components/Button'
import { serviceCardData } from '../../../utils/DummyData'

const CardComponent = () => {
  return (
    <div>
        <div className='bg-Navbar'>
            <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {serviceCardData.map((item, ind) => {
                        return (
                            <div key={ind} className="rounded-lg overflow-hidden shadow-md flex flex-col">
                                 <div className='relative'>
                                     <img className="w-full h-[224px] rounded-t-2xl object-cover"
                                          src={item.image}
                                          alt={item.image} 
                                          draggable={false}
                                          />
                                         
                                     {/* centered Text */}
                                     <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-[100%] mx-auto rounded-xl text-white heading3'>
                                         {item.text}
                                     </p>

                                     {/* Logo positioned half on the image and half below it */}
                                     <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex items-center justify-center bg-white rounded-xl shadow-black shadow-xs'>
                                         <img className="rounded-lg p-2 object-contain w-[70px] h-[70px]"
                                              src={item.logo}
                                              alt={item.logo} 
                                              draggable={false}
                                              />
                                     </div>
                                 </div>
                                   
                                <div className="p-3 bg-BackgroundColor1 pt-14">  
                                    <p className="text-text6 text-sm text-center">{item.description}</p>
                                    <div className='mt-10 flex items-center justify-center  rounded-md'>
                            <Button btnStyle="bg-backgroundColor1  text1 text-backgroundColor6 group-hover:bg-backgroundColor2 group-hover:text-backgroundColor1 lg:font-semibold " title={"Product Inquiry"} />
                        </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardComponent
