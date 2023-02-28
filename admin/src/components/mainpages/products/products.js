import React, { useContext, useEffect } from 'react'
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/productItem/productItem'
import Loading from '../utils/loading/loading'
import axios from 'axios'

function Products(){

    const state = useContext(GlobalState)
   
    const [Products] = (state.ProductAPI.products)
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    const [callback, setCallback] = state.ProductAPI.callback

    return(
        <>
        <div className="products">
            {
                  
                Products.map(
                    product => {
                    return <ProductItem key={product._id}
                            product={product}
                            isAdmin={isAdmin} token={token} callback={callback} setCallback={setCallback} />
                    }
                )
            }
           
        </div>
        
        {Products.length === 0 && <Loading/>}
        </>
    )
}
export default Products