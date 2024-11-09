import { FaSearch, FaSith } from "react-icons/fa";
import DetailsCard from "./DetailsCard";
import { IoIosArrowBack } from "react-icons/io";
const Details = () => {
  return (
    <div className="bg-white py-5 md:py-10 px-1 md:px-16 lg:px-24 xl:px-10  mx-auto ">
      {/* Categories Title*/}
      <div className="container mx-auto py-5 md:py-10 flex flex-col md:flex-row space-x-2">
        <div className="flex flex-1 flex-col md:flex-col  gap-4 py-8 ">
          <div className="flex space-x-5 flex-col left-4">
            <IoIosArrowBack className="md:diplay-block ms-5 mb-6"></IoIosArrowBack>
            <h2 className="text-4xl font-bold ">Vegetables</h2>
          </div>

          {/* Search icons */}
          <div className="relative flex-1 mx-4 items-center focus-within:text-gray-500 mt-4">
            <FaSearch className="absolute top-4 ml-3 ms-3 text-black-500 w-5 h-5 space-x-5 "></FaSearch>
            <input
              type="text"
              placeholder="Enter Search Products...."
              className="w-full px-8 py-3 border rounded-xl pr-3 pl-10 md:px-12 md:py:6"
            />
          </div>
                 {/* Note mark btn5 */}
          <div className="grid gird-cols-1 sm:grid-cols-12 md:grid-cols-4 lg:grid-cols-5
                    px-4 py-2 sm:px-4 md:py-2 md:px-6 md:py-3">
                 <div className="relative lg:w-25 flex flex-1 mx-4 space-x-2 items-center
                focus-within:text-gray-500 mt-4 bg-blue-300 py-2 px-2 rounded-xl">
                    <FaSith className="text-blue-700"></FaSith>
                    <small className="text-blue-700">Cabbage and Lettice(14)</small>
                </div>
                <div className="relative lg:w-25 flex flex-1 mx-4 space-x-2 items-center
                focus-within:text-gray-500 mt-4 bg-white shadow py-2 px-4 rounded-xl">
                    <small className="text-gray-500">Onions and garlic(18)</small>
                </div>
                <div className="relative lg:w-25 flex flex-1 mx-4 space-x-2 items-center
                focus-within:text-gray-500 mt-4 bg-white shadow py-2 px-4 rounded-xl">
                    <small className="text-gray-500">Peppers(7)</small>
                </div>
                <div className="relative lg:w-25 flex flex-1 mx-4 space-x-2 items-center
                focus-within:text-gray-500 mt-4 bg-white shadow text-center py-2 px-4 rounded-xl">
                    <small className="text-gray-500">Sugars(18)</small>
                </div> 
          </div>
            

           
        </div>
        
      </div>
      <DetailsCard></DetailsCard>
    </div>
  );
};

export default Details;
