import { IoIosArrowBack } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { FaWalking } from "react-icons/fa";
import { FaBiking } from "react-icons/fa";
import { IoCardOutline } from "react-icons/io5";

const Checkout = () => {
  return (
    <div  className="bg-white w-full py-5 md:py-10 px-1 md:px-16 lg:px-24 xl:px-10  mx-auto ">
        <div className="container mx-auto w-full  md:py-10 flex flex-col md:flex-row space-x-2">
            <div className="w-full mx-auto  py-2">
            <div className="flex items-center text-center shadow-lg py-4 ">
                 <div className="">
                 <IoIosArrowBack size={18} className="items-center"></IoIosArrowBack>
                 </div>
                 <h2 className="text-xl font-bold text-center mx-auto">Checkout</h2>
            </div>
            <div className="py-4">
                <h1 className="text-2xl font-bold">Payment method</h1>
                <div className="flex ms-2 py-6">
                    <IoCardOutline size={20}  className="ms-2"></IoCardOutline>
                    <input type="number" name="" placeholder="**** **** **** 4747"
                     className="text-xl text-gray-400 ms-4 "/>
                </div>
            </div>
            <div className="py-4">
                <h1 className="text-2xl font-bold">Delivery address</h1>
                <div className="flex items-center py-6">
                    <IoLocation size={18} ></IoLocation>
                    <input className="text-xl text-gray-400 ms-4" type="text" name="" placeholder="Hlaing thar yar Yangon"/>
                </div>
            </div>
            <div className="py-4">
                <h1 className="text-2xl font-bold">Delivery options</h1>
                <div className="flex items-center py-6">
                    <FaWalking  size={18}></FaWalking>
                    <input className="text-xl text-gray-400 ms-4" type="text" name="" placeholder="I'll pick up myself"/>
                </div>
                <div className="flex items-center py-4">
                    <FaBiking  size={18}></FaBiking>
                    <input className="text-xl text-gray-400 ms-4" type="text" name="" placeholder="By counter"/>
                </div>
                <div className="flex items-center py-6">
                    <FaBiking  size={18}></FaBiking>
                    <input className="text-xl text-gray-400 ms-4" type="text" name="" placeholder="By Done"/>
                </div>
            </div>
            <div className="py-4 flex items-center ">
                <h1 className="text-xl font-bold">No-Contact-Delivery</h1>
                <div className="ms-10 items-center text-center flex ">
                    <label htmlFor="" className="text-md ">Yes</label>
                    <input type="radio" name="" id="" placeholder="yes" className="ms-2 items-center"/>
                </div>
                <div className="ms-6 items-center text-center flex ">
                    <label htmlFor="" className="text-md ">No</label>
                    <input type="radio" name="" id="" placeholder="yes" className="ms-2 items-center"/>
                </div>
            </div>
            </div>
           
            
        </div>
    </div>
  )
}

export default Checkout