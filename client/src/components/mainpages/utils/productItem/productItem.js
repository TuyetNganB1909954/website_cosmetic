import React from "react";
import { Link } from "react-router-dom";
import BtnRender from "./BtnRender";

function ProductItem({product, isAdmin}){
    return(
        <>
         <Link className="product_view" to={`/detail/${product._id}`}>
         <div className="product_card">
            {
                isAdmin && <input type ="checkbox" checked={product.checked}/>
            }

            <img src={product.images.url} alt=""/>

            <div className="product_box">
                    <h2 title={product.title}>{product.title}</h2>
                    <span>{product.price} VNĐ </span>
                    <p>{product.description}</p>
            </div>
            <div className="product-btn">
                <BtnRender product={product}/>
            </div>
           
        </div>
        </Link>
    
       
        </>
    )
}
export default ProductItem