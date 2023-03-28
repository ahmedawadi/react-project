import ReactDOM from 'react-dom/client';
import Evenments from './body/Evenments';
import Product from './product/Product';
import Products from './body/Products';
import Footer from './footer/Footer'
import Submition from './footer/Submition';
import SwellSelection from './body/SwellSelection';
import Header_1 from './nav_bar/Header_1'
import Header_2 from './nav_bar/Header_2'
import Header_3 from './nav_bar/Header_3'

function App() {
  return <div> 
    <div className='z-50   fixed w-full'>
      <Header_1 />
      <Header_2 />
    </div>
    <div className='bg-black'>
      <div className='bg-[url("backpic.jpg")] z-20 h-[33em] pt-[10em] opacity-90  relative top-0 left-0 w-full'>
        <Header_3 />
      </div>
    </div>
    <SwellSelection />
    <Products/>
    <Evenments />
    <Submition/>
    <Footer/>
    {/* <Product/> */}
  </div>

    
}

export default App;
