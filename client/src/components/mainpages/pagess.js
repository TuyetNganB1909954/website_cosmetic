import React,{useContext} from "react";
import Products from "./products/products";
import Login from "./auth/login";
import Register from "./auth/register";
import Cart from "./cart/cart";
import {Routes, Route} from 'react-router-dom'
import NotFound from "./utils/NotFound/NotFound";
import DetailProduct from "./detailProduct/detailProduct"
import Home from "../Home";
import Checkout from "./checkout/checkout";


import { GlobalState } from "../../GlobalState";

function Pages(){
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    return(
        <Routes>
            <Route path="/"  element={<Home/>}/> 
            <Route path="/product"  element={<Products/>}/>
            <Route path="/detail/:id"  element={<DetailProduct/>}/>
            <Route path="/login"  element={isLogged ? NotFound:<Login/>}/>
            <Route path="/register"  element={isLogged ? NotFound:<Register/>}/>
            <Route path="/cart"  element={<Cart/>}/>
            <Route path="/*"  element={<NotFound/>}/>
            <Route path="/checkout"  element={<Checkout/>}/>
        </Routes>
       
    )
}

export default Pages