/* eslint-disable no-undef */

import React, {useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {GlobalState} from '../../../GlobalState'
import axios from "axios";


import Table from 'react-bootstrap/Table';

function Cart(){
    const state = useContext(GlobalState)
    const [cart,setCart] = state.userAPI.cart
    const [total, setTotal] = useState(0)
    const[token]=state.token
    
    useEffect(() =>{
        const getTotal = () =>{
            const total = cart.reduce((prev, item) => {
                return prev + (item.price * item.quantity)
            },0)
            setTotal(total)
        }
        getTotal()
    },[cart])
    
    const addToCart = async () => {
        await axios.patch('/user/addcart', {cart},{
            headers: {Authorization: token}
        })
    }

    const increment = (id) =>{
        cart.forEach(item => {
            if(item._id === id){
                item.quantity += 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }
    const decrement = (id) =>{
        cart.forEach(item => {
            if(item._id === id){
                item.quantity === 1 ? item.quantity =1 : item.quantity -= 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }
    const removeProduct = (id) => {
        if(window.confirm("Xóa sản phẩm")){
            cart.forEach((item,index) =>{
                if(item._id === id){
                    cart.splice(index,1)
                }
            })
            setCart([...cart])
            addToCart(cart)
        }
    }

    const removeProductAll = () => {
        if(window.confirm("Xóa tất cả sản phẩm")){
            cart.forEach((index) =>{
              
                    cart.splice(index,cart.length)
              
            })
            setCart([...cart])
            addToCart(cart)
        }
    }

    if(cart.length === 0)
        return <h2 style={{textAlign: "center", fontSize:" 4rem"}}>Giỏ hàng rỗng</h2>

    // console.log(cart)
    // console.log(total)
    return(
        <>
       <div className="my-5">
       <Table className="text-center  " >
            <tr>
                <th className="cart-images">Hình ảnh</th>
                <th className="cart-title">Tên sản phẩm</th>
                <th  className="cart-price">Giá</th>
                <th  className="cart-sum">Số lượng</th>
                <th></th>
            </tr>
        </Table>
        <div>
            {
                cart.map((product, i) => (
                    <div key={product._id} >
                           <Table >
                             <tbody className="text-center">
                                    <tr>
                                    <td className="cart-images">
                                        <div className="cart-img">
                                            <img  className="img_fluid" src={product?.images?.url} alt=""/>
                                        </div>
                                    </td>
                                    <td  className="cart-title">
                                        <div className="Row">
                                            <p>{product?.title}</p>
                                        </div>
                                    </td>
                                    <td  className="cart-price">
                                        <p>{product?.price * product.quantity} </p>
                                    </td>
                                    <td className="cart-sum">
                                        <div className="amount">
                                            <button onClick={()=> decrement(product._id)}> - </button>
                                            <span>{product.quantity}</span>
                                            <button onClick={()=> increment(product._id)}> + </button>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="delete"onClick={()=> removeProduct(product._id)}>
                                            Xóa
                                        </div>
                                    </td>
                                    </tr>
                                </tbody>
                            </Table>
                    </div>
                ))
            }
            <div className="total">
                <h4>Tổng giá trị: <span>{total} vnđ</span> </h4>
                <div   className=" px-2">
                    <Link to="/checkout" id="btn_pay">
                        Thanh toán
                    </Link>
                </div>
               
                
            </div>
            
        </div>
       </div>
       <div className="delete"onClick={()=> removeProductAll()}>
            Xóa tất cả
        </div>
      
        </>
    )
}
export default Cart