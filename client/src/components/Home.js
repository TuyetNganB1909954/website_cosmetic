import React from 'react'
import Slider from './mainpages/slider/slider'
import Products from './mainpages/products/products'
function Home() {
  return (
    <div>
        <Slider/>
        <div className=' text-center my-5'>
            <h2 >Sản phẩm của chúng tôi</h2>
            <p>Hàng chính hãng</p>
        </div>
        <Products/>
    </div>
  )
}

export default Home