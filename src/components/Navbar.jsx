// import React from 'react'
// import { IoMenu } from "react-icons/io5";
// import { FaUser } from 'react-icons/fa';
import logo from './Images/logo.jpg'


const Navbar = () => {
  
  return (
    <>
       <nav className="bg-white">
        <div className="conatiner bg-violet-600  flex mx-auto px-4 py-14  md:px-16 lg:px-24 xl:px-10   items-center">
            <div className="text-lg font-bold mb-20 flex justify-between z-(100) space-x-50">
                <img src={logo} alt="" className="w-10 h-10 rounded-full md:w-50 md:h-50 me-30" />
                {/* <div className=" w-100 flex items-center space-x-4">
                    
                        <IoMenu></IoMenu>
                    
                  
                        <FaUser></FaUser>
                    
                </div> */}
            </div>          
        </div>
        
        
        {/* <Home></Home> */}
    </nav>
    </>
  );
};

export default Navbar;


