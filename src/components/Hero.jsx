

// import Shop from "./Shop";
// import { useNavigate } from "react-router-dom";
import Boxlogo from './Images/boximg.jpg'


const Home = () => {

const ShopPage = () =>{
  // navigate('/shop')
}
  return (
    
    <div>  
      <div className="bg-violet-600 md:bg-white md:mb-10 px-1 md:px-16 lg:px-24 xl:px-10  mx-auto ">
        <div className="container mx-auto  flex flex-col md:flex-row space-x-2">

          {/* Right Home Image*/}
          <div className="w-full text-center h-full mt-8 md:mt-0 bg-white rounded-t-md">
            {/* <img src={HeroImage} alt="" className="w-full h-full"/> */}
            <div className="mt-12 mb-5 text-center">
              <img src={Boxlogo} alt="" className="w-10 h-10 rounded-full object-cover mx-auto" />
              <h2 className="font-bold text-3xl mt-6 text-violet-700">None-Contact Deliveries</h2>
              <p className="text-gray-400 text-sm mt-4 ">Lorem ipsum dolor sit  elit. Incidunt, asperiores recusandae! Quia fugiat commodi deleniti numquam fuga vitae quas labore!</p>
              <div className=" md:space-x-10 lg:space-x-20 mb-2 md:mb-10 lg:mb-15 ">
                <button className="bg-green-500 text-white rounded px-24 py-2 md:px-12 md:py-3 lg:px-8 lg:py-4 mt-8 hover:bg-green-700
                transform transition-transform hover:scale-105 duration-300  "
                onClick={ShopPage}
                >ORDER NOW</button>
                <button className="bg-white text-gray-600  rounded px-24 py-4 md:px-12 md:py-3 lg:px-8 lg:py-4 mt-2 hover:bg-gray-300
                transform transition-transform hover:scale-105 duration-300"
                >DISMISS</button>
              </div>
            </div>
          </div>
          
        </div>
          
      </div>
      {/* <Shop></Shop> */}
    
   </div>
     
  );
};

export default Home;
