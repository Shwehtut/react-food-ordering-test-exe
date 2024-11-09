import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import BodyCatego from './components/BodyCatego'
import Details from './components/Details'
import DetailOne from './components/DetailOne'
import Checkout from './components/Checkout'



function App() {
 

  return (
    <>
     <Navbar></Navbar>
     <Hero></Hero>
     <BodyCatego></BodyCatego>
    {/* <ProductCard></ProductCard> */}
    <Details></Details>
    <DetailOne></DetailOne>
    <Checkout></Checkout>
    
    </>
  )
}

export default App
