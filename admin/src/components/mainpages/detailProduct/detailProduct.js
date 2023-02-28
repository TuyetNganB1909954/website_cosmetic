import React, { useContext, useEffect, useState } from "react";
import {useParams, Link} from 'react-router-dom'
import {GlobalState} from '../../../GlobalState'
import ProductItem from "../utils/productItem/productItem";

function DetailProduct(){
    const params = useParams()

    const state = useContext(GlobalState)
    const [product] = (state.ProductAPI.products)
    const [detailProduct, setdetailProduct] = useState([])
    useEffect(()=>{
        console.log( `Render`)
        if(params){
            product.forEach(product => {
                if(product._id === params.id) setdetailProduct(product)
            })
        }
    },[params, product])
    // console.log(detailProduct)
    return(
    <>
        <div className="detail">
           <img src={detailProduct?.images?.url} alt=""/>
           <div className="box-detail">
                <div className="Row">
                    <h2>{detailProduct?.title}</h2>
                    <h6>#id: {detailProduct?.product_id}</h6>
                </div>
                <span>đ {detailProduct.price}</span>
                <p>{detailProduct.description}</p>
                <p>{detailProduct.content}</p>
                <p>Số lượng: {detailProduct.sold}</p>
                <Link to="/cart" className="cart">Mua ngay</Link>
           </div>
        </div>

        <div>
            <h2>Sản phẩm có liên quan </h2>
            <div className="products">
                {
                    product.map(product =>{
                        return product.category === detailProduct.category 
                        ? <ProductItem key={product._id} product={product}/>: null
                    })
                }
            </div>
        </div>
        
    
        </>
    )
}
export default DetailProduct