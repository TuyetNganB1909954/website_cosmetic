import { Button } from "bootstrap";
import React, { useContext, useState } from "react";
import {GlobalState} from "../../../GlobalState"
import axios from "axios";

function Categories() {
    const state = useContext(GlobalState)
    const [categories, setCategories] = state.categoriesAPI.categories
    const [callback, setCallback] = state.categoriesAPI.callback
    const [category, setCategory] = useState('')
    const [token] = state.token
    const [onEdit, setOnEdit] = useState(false)
    const [id, setID] = useState('')
    console.log(category)

    const createCategory = async e => {
        e.preventDefault();
        try{
            if(onEdit){
                const res = await axios.put(`/api/category/${id}`, {name: category}, {
                    headers: {Authorization: token}
                })
                alert(res.data.msg)
            }else{
                const res = await axios.post('/api/category', {name: category}, {
                    headers: {Authorization: token}
                })
                alert(res.data.msg)
            }
            setOnEdit(false)
            setCategory('')
            setCallback(!callback)
        }catch(error){
            alert(error.response.data.msg)
        }   
    }

    const editCategory = async (id,name) =>{
        setID(id)
        setCategory(name)
        setOnEdit(true)
    }

    const deleteCategory = async id => {
        try{
            const res = await axios.delete(`/api/category/${id}`, {
                headers: {Authorization: token}
            })
            alert(res.data.msg)
            setCallback(!callback)
        }catch(error){
            alert(error.response.data.msg)
        }
    }

  return (
   <div className="categories">
        <form onSubmit={createCategory}>
            <label htmlFor="category">Danh mục sản phẩm</label>
            <input name="category" type="text" value={category} required onChange={e => setCategory(e.target.value)}/>
           <button type="submit">{onEdit?"Cập nhật":"Lưu"}</button>
        </form>
        
        <div className="col">
                {
                    categories.map(category => (
                        <div className="row" key={category._id}>
                            <div className="title-category">
                                <p>{category.name}</p>
                                
                            </div>
                            <hr/>
                            <div>
                                <button onClick={()=>editCategory(category._id, category.name)}>Cập nhật</button>
                                <button onClick={()=>deleteCategory(category._id)}>Xóa</button>
                            </div>
                        </div>
                    ))
                }
            </div>
   </div>
  )
}

export default Categories