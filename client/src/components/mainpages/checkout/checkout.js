/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect,useContext}  from 'react'
import {GlobalState} from '../../../GlobalState'
import axios from "axios";

import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
function checkout() {
    const state = useContext(GlobalState)
    const [cart,setCart] = state.userAPI.cart
   const [total, setTotal] = useState(0)
    const[token]=state.token
    const [checkoutInput, setCheckoutInput] = state.userAPI.user

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
     
    const removeProductAll = async () => {
            cart.forEach((index) =>{
                    cart.splice(index,cart.length)
            })
            setCart([...cart])
            setCheckoutInput.cart([])
            

    }
           
    

    const handleInput = (e) =>{
        const {name, value} = e.target
        setCheckoutInput({...checkoutInput, [name]:value})
      }
    

    const submitOrder = async(e) => {
        e.preventDefault()
        try{
            await axios.post('/api/payment',{...checkoutInput},{
                headers: {Authorization: token}
            })
            localStorage.setItem('firstLogin', false)
            window.location.href = "/"
            alert("Đặt hàng thành công")
            removeProductAll()
            addToCart([])
            
        }catch(error){
            alert(error.response.data.msg)
        }
    }
    
  return (
    <>
        <div>
            <div className='py-4'>
                <div className='container'>
                   <div className='row my-3'>
                        <div className='col-md-6 mb-3'>
                            <div className='col-md-12 '>
                                <h4>Thông tin khách hàng</h4>
                            </div>
                            <div className='card-body '>
                                <div className='row'>
                                    <div className='col-md-10'>
                                        <div className='form-group mb-3'>
                                            <label>Họ và tên: </label>
                                            <input type="text" name="name" className='form-control' onChange={handleInput} value={checkoutInput.name}/>
                                        </div>
                                    </div>
                                    <div className='col-md-10'>
                                        <div className='form-group mb-3'>
                                            <label>Email: </label>
                                            <input type="text" name="email" className='form-control'onChange={handleInput} value={checkoutInput.email}/>
                                        </div>
                                    </div>
                                    <div className='col-md-10'>
                                        <div className='form-group mb-3'>
                                            <label>Số điện  thoại: </label>
                                            <input type="text" name="phone" className='form-control' onChange={handleInput} value={checkoutInput.phone}/>
                                        </div>
                                    </div>
                                    <div className='col-md-10'>
                                        <div className='form-group mb-3'>
                                            <label>Địa chỉ: </label>
                                            <input rows="3" name="address"className='form-control' onChange={handleInput} value={checkoutInput.address}></input>
                                        </div>
                                    </div>
                                    <div className='col-md-10'>
                                        <div className=' text-center'>
                                            <button type='submit' className='btn btn-danger' onClick={submitOrder} >Đặt hàng</button>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                        <div className='col-md-5 '>
                            <div className="">
                                <div className='col-md-12  text-center '>
                                    <h4>Sản phẩm</h4>
                                    <hr/>
                                </div>
                                <table className="text-center table " >
                                        <tr>
                                            <th className="cart-images">Hình ảnh</th>
                                            <th className="cart-title">Tên sản phẩm</th>
                                            <th  className="cart-price">Giá</th>
                                            <th  className="cart-sum">Số lượng</th>
                                            <th></th>
                                        </tr>
                                </table>
                                <div>
                                    {
                                        cart.map((product, i) => (
                                            <div key={product._id} >
                                                <Table className='table'>
                                                    <body className="text-center">
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
                                                                    <span>{product.quantity}</span>
                                                                </div>
                                                            </td>
                                                            </tr>
                                                        </body>
                                                    </Table>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className='col-md-12'>
                                    <div className=' text-end'>
                                        <h5  >Tổng thanh toán: <span >{total} vnđ</span> </h5>
                                    </div>
                                </div>
                             </div>
                        </div>
                        
                   </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default checkout