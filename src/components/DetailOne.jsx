import fruit from './Images/vegetable.jpg'
import { IoCartOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
const DetailOne = () => {
  return (
    <div className="bg-white w-full py-5 md:py-10 px-1 md:px-16 lg:px-24 xl:px-10  mx-auto ">
        <div className="container mx-auto w-full  md:py-10 flex flex-col md:flex-row space-x-2">

            {/* Top side? */}
           <div className="w-full h-25 object-contain md:h-50 text-center">
                <img src={fruit} alt="" />
            </div>

            {/* Bottom side? */}

            <div className="w-full text-start h-full py-2 mt-8 md:mt-0 bg-white rounded-t-md">
                    <h3 className='font-semibold text-3xl py-2'>Boston Lettuce</h3>
                    <h3 className='font-semibold text-3xl py-2'>1.1 <small className='tect-gray-300 text-xl'>e / price</small></h3>
                    <small className='font-semibold text-md text-green-700 mb-3'>-150gr / piece</small>
                    <h4  className='font-semibold text-xl py-4'>Spain</h4>
                    <p className='text-gray-400 text-sm space-x-2 mb-8 mr-1 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint quis dolor cupiditate 
                        harum tenetur magnam ducimus unde mollitia qui praesentium. Doloremque vero nisi dolorum
                      um soluta. Eveniet odit, quis ad sit voluptate
                          tempora dolotaque repellendus
                           ab dolores, error quod quaerat pernte perferendis 
                           debitis!
                    </p>
                    <div className="flex py-6 ms-4 ">
                             <button className="bg-white text-black shadow-md rounded-md px-5 py-3 md:px-2 md:py-1">
                                 <IoHeartOutline size={15} ></IoHeartOutline>
                            </button>
                                
                                        
                            <button className="bg-blue-400 ms-4 text-white rounded-md px-8 py-3 md:px-16 md:py-4 mr-3 flex items-center">
                                            
                                <IoCartOutline size={15}></IoCartOutline>
                                 <small className='ms-2'>ADD TO CARD</small>
                              </button>
                    </div>

                    
            </div>
        </div>
    
    </div>
  )
}

export default DetailOne