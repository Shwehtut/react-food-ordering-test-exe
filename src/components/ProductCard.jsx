/* eslint-disable react/prop-types */
import ImageOne from "./Images/bread.jpg";
import ImageTwo from "./Images/bread.jpg";
import ImageThree from "./Images/bread.jpg";
import ImageFour from "./Images/bread.jpg";

const ProductCard = () => {

 const data = [
    {
      id: 1,
      image: ImageOne,
      name: "Vegetables ",
      quantity: (10),
    },
    {
      id: 2,
      image: ImageTwo,
      name: "Breads",
      quantity: (15),
    },
    {
      id: 3,
      image: ImageThree,
      name: "Fruits",
      quantity: (29),
    },
    {
      id: 4,
      image: ImageFour,
      name: "Coffee",
      quantity: (32),
    },
   
  ];
 
  return (
  
    <div  className=" py-4 px-2 md:px-16 lg:px-24 mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-5
         cursor-pointer sm:h-28 w-full h-70 rounded-xl border-none"> 
        

            {
                    data.map((item)=>{
                            return (
                                <div key={item.id} className="bg-white p-4 reltive border shadow transform 
                                transitation-transform duration-300 hover:scale-105 w-full object-fill gap-4">
                                    <img
                                        src={item.image}  className="w-full h-48  mb-4 object-fill rounded-lg"
                                     />
                                    <h3 className="text-xl font-bold tex-center">{item.name}</h3>
                                     <p className="text-gray-500">({item.quantity})</p>
                                </div>
                            )
                    })
                }
         

        
            
               
            
     </div> 
     
      
    </div>
  );
};

export default ProductCard;
