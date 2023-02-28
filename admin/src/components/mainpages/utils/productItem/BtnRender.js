import React, { useContext } from "react";
import {Link} from 'react-router-dom'
import {GlobalState} from '../../../../GlobalState'


function BtnRender({product, deleteroduct}){
    const state = useContext(GlobalState)
    const [isAdmin] = state.userAPI.isAdmin
    const addCart = state.userAPI.addCart
 
    return(

        <div className="row_btn">
        {
        isAdmin ?
        <>
            <Link id="btn_buy" to="#!" onClick={deleteroduct}>
                Xóa
            </Link>
            <Link id="btn_view" to={`/edit_product/${product._id}`}>
                Sửa
            </Link>
        </>
        :<>
             <Link id="btn_buy" to="#!" onClick={() => addCart(product)}>
                Mua
            </Link>
            <Link id="btn_view" to={`/detail/${product._id}`}>
                Xem
            </Link>
        </>
        }
       </div>  
    )
}

export default BtnRender

