// import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import {  FaSearch } from "react-icons/fa";
import ProductCard from "./ProductCard";

  const Footer = () => {      
    
    return (

        <div className="bg-white py-5 md:py-10 lg:py-16 lg:mb-16 px-1 md:px-16 lg:px-24 xl:px-10  mx-auto ">
          {/* Categories Title*/}
          <div className="flex flex-1 flex-col md:flex-col  gap-4 py-8 ">
            
                <div className="flex space-x-5 flex-col left-4">
                    <IoIosArrowBack className="md:diplay-block ms-5 mb-6"></IoIosArrowBack>           
                    <h2 className="text-4xl font-bold ">Categories</h2>
                </div>

                {/* Search icons */}
                <div className="relative flex-1 mx-4 items-center focus-within:text-gray-500 mt-4">
                 
                        <FaSearch className="absolute top-4 ml-3 ms-3 text-black-500 w-5 h-5 space-x-5 "
                        
                        >

                        </FaSearch>
                            <input type="text" placeholder="Enter Search Products...." 
                            className="w-full px-8 py-3 border rounded-xl pr-3 pl-10 md:px-12 md:py:6"
                            />
                   
                </div>   
                <ProductCard></ProductCard>   
        </div>
      
        
       
        
      </div>
    );
  };
  
  export default Footer;
  