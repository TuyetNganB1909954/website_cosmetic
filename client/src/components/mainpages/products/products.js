import React, { useContext } from 'react'
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/productItem/productItem'
import Loading from '../utils/loading/loading'
function Products(){

    const state = useContext(GlobalState)
   
    const [Products] = (state.ProductAPI.products)
    const [isAdmin] = state.userAPI.isAdmin

    return(
        <>
        <div className="products">
            {
                Products.map(
                    product => {
            
                    return <ProductItem key={product._id}
                            product={product}
                            isAdmin={isAdmin}/>
                    }
                )
            }
           
        </div>
        
        {Products.length === 0 && <Loading/>}
        </>
    )
}
export default Products