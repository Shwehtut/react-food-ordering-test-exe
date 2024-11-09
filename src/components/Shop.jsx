
import ImageOne from "./Images/bread.jpg";
import ImageTwo from "./Images/bread.jpg";
import ImageThree from "./Images/bread.jpg";
import ImageFour from "./Images/bread.jpg";
import ImageFive from "./Images/bread.jpg";

// const data = [
//     {
//       id: 1,
//       image: ImageOne,
//       name: "Product 1 ",
//       price: 10.16,
//     },
//     {
//       id: 2,
//       image: ImageTwo,
//       name: "Product 2",
//       price: 15.1,
//     },
//     {
//       id: 3,
//       image: ImageThree,
//       name: "Product 3",
//       price: 29.11,
//     },
//     {
//       id: 4,
//       image: ImageFour,
//       name: "Product 4",
//       price: 32.3,
//     },
//     {
//       id: 5,
//       image: ImageFive,
//       name: "Product 5",
//       price: 89.15,
//     },
//   ];


const Shop = () => {
    const data = [
        {
          id: 1,
          image: ImageOne,
          name: "Product 1 ",
          price: 10.16,
        },
        {
          id: 2,
          image: ImageTwo,
          name: "Product 2",
          price: 15.1,
        },
        {
          id: 3,
          image: ImageThree,
          name: "Product 3",
          price: 29.11,
        },
        {
          id: 4,
          image: ImageFour,
          name: "Product 4",
          price: 32.3,
        },
        {
          id: 5,
          image: ImageFive,
          name: "Product 5",
          price: 89.15,
        },
      ];
  return (
    <div>
        <div  className=" py-12 px-4 md:px-16 lg:px-24 mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Shop</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
          {
            data.map(product=>(
                <div key={product.id} >
                     {/* <ProductCard product={product}></ProductCard> */}
                     
                </div>
             ))
          }
        </div>
      </div>
    </div>
  )
}

export default Shop