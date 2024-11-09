import ImageOne from "./Images/lettuce.jpg";
import ImageTwo from "./Images/bread.jpg";
import ImageThree from "./Images/vegetables.jpg";
import { IoCartOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
const DetailsCard = () => {

const detailData = [
        {
          id: 1,
          image: ImageOne,
          name: "Boston Lettuce ",
          price: 1.10,
        },
        {
          id: 2,
          image: ImageTwo,
          name: "Boston Lettuce",
          price: 1.10,
        },
        {
          id: 3,
          image: ImageThree,
          name: "Boston Lettuce",
          price: 1.10,
        },
        
       
      ];
  return (
    <div  className=" py-4 px-2 md:px-16 lg:py-6 mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-2  md:gap-5
     cursor-pointer sm:h-28 w-150 h-70 rounded-xl border-none"> 
    

        {
                detailData.map((item)=>{
                        return (
                            <div key={item.id} className="bg-white mx-auto py-6 md:px-6 reltive border shadow transform rounded-lg
                            transitation-transform duration-300 hover:scale-105 w-150 md:w-400 space-between flex object-contain gap-4 ">
                                <img
                                    src={item.image}  className="w-36 h-24 md:w-60 md:h-45
                                     mb-4 object-fill"
                                 />
                                <div className="w-full">
                                    <div className="">
                                        <h3 className="text-xl md:text-sm  font-semibold tex-center ">{item.name}</h3>
                                        <p className=" font-bold text-md md:text-sm lg:text-sm">{item.price}<small className="text-gray-400 md:text-sm">  e / piece</small></p>
                                    </div>
                                    <div className="flex justify-between py-5">
                                        <button className="bg-white text-black shadow-md rounded-md px-5 py-1.5 md:px-2 md:py-1">
                                        <IoHeartOutline size={15} ></IoHeartOutline>
                                        </button>
                                
                                        
                                        <button className="bg-green-500 ms-2 text-white rounded-md px-4 py-1.5 md:px-2 md:py-1 mr-3 ">
                                            
                                            <IoCartOutline size={15}></IoCartOutline>
                                        </button>

                                    </div>
                                </div>
                            </div>
                        )
                })
            }
     

    
        
           
        
 </div> 
 
  
</div>
  )
}

export default DetailsCard