import React , {useContext}from "react";
import Products from "./products/products";
import Login from "./auth/login";
import {Routes, Route} from 'react-router-dom'
import NotFound from "./utils/NotFound/NotFound";
import DetailProduct from "./detailProduct/detailProduct"
import Categories from "../mainpages/categories/categories";
import CreateProduct from "../mainpages/createProduct/createProduct";
import {GlobalState} from '../../GlobalState'

function Pages(){
    const state = useContext(GlobalState)
    const [isAdmin] = state.userAPI.isAdmin
    return(
        <Routes>
            <Route path="/product"  element={<Products/>}/>
            <Route path="/detail/:id"  element={<DetailProduct/>}/>
            <Route path="/"  element={<Login/>}/>
            <Route path="/*"  element={<NotFound/>}/>
            <Route path="/Category"  element={isAdmin ? <Categories/> : NotFound}/>
            <Route path="/CreateProduct"  element={isAdmin ? <CreateProduct/> : NotFound}/>
            <Route path="/edit_product/:id"   element={isAdmin ? <CreateProduct/> : NotFound}/>
        </Routes>
       
    )
}

export default Pages