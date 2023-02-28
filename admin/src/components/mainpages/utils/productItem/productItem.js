import React , { useState } from "react";
import { Link } from "react-router-dom";
import BtnRender from "./BtnRender";
import axios from "axios";
import Loading from '../loading/loading'
function ProductItem({product, isAdmin, token, callback, setCallback}){

    const [loading, setLoading] = useState(false)

    const deleteroduct = async ()=>{
        // console.log(product)
        try{
            const destroyImg = await axios.post('/api/destroy', {public_id: product.images.public_id},{
                headers: {Authorization: token}
            })
            const deleteProduct = await axios.delete(`/api/product/${product._id}`,{
                headers: {Authorization: token}
            })
            await destroyImg
            await deleteProduct
            setLoading(false)
            setCallback(!callback)
        }catch(error){
          alert(error.response.data.msg)
      }
    }
    const handleCheck = () =>{
        product.checked = !product.checked
    }

    if(loading) return <div className="product_card"> <Loading/> </div>
    return(
        <div className="product_card">
            {
                isAdmin &&
                <>
                 <input type ="checkbox" checked={product.checked}
                    onChange={handleCheck}
                 />
                 <img src={product.images.url} alt=""/>

                 <div className="product_box">
                         <h2 title={product.title}>{product.title}</h2>
                         <span>đ {product.price} </span>
                         <p>{product.description}</p>
                 </div>
                 <BtnRender product={product} deleteroduct={deleteroduct}/>
                </>
                
                
            }


           
        </div>
    )
}
export default ProductItem