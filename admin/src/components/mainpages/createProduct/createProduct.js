import React, {useContext, useState, useEffect } from "react";
import {GlobalState} from "../../../GlobalState";
import axios from "axios";
import Loading from '../utils/loading/loading';
import { useParams  } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const initialState={
    product_id: '',
    title: '',
    price: 0,
    content: '',
    category: '',
    _id:''
}

function CreateProduct() {
    const state = useContext(GlobalState)
    const [product, setProduct] = useState(initialState)

    const [categories] = state.categoriesAPI.categories

    const [images, setImages] = useState(false)
    const [loading, setLoading] = useState(false)

    const [token] = state.token

    const param = useParams()
    const navigate = useNavigate();
    const [products] = state.ProductAPI.products
    const [onEdit, setOnEdit] = useState(false)
    const [callback, setCallback] = state.ProductAPI.callback

    console.log(product)

    useEffect(() => {
      if(param.id){
          setOnEdit(true)
          products.forEach(product => {
              if(product._id === param.id) {
                  setProduct(product)
                  setImages(product.images)
              }
          })
      }else{
          setOnEdit(false)
          setProduct(initialState)
          setImages(false)
      }
  }, [param.id, products])

    const handleUpload = async e =>{
        e.preventDefault();
        try{
           const file = e.target.files[0]
           console.log(file)
          if(!file) return alert("File không tồn tại")
          if(file.size > 1024*1024) return alert("Kích thước file quá lớn")
          if(file.type !== 'image/jpeg' && file.type !== 'image/png')
            return alert("File không đúng định dạng")
            
            let formData = new FormData()
            formData.append('file',file)

            setLoading(true)
            const res = await axios.post('/api/upload', formData, {
                headers: {'Content-Type': 'multipart/form-data', Authorization: token}
            })

            setLoading(false)
            setImages(res.data)

        }catch(error){
          alert(error.response.data.msg)
        }
    }

    const handleDestroy = async() => {
      try{
          setLoading(true)
           await axios.post('/api/destroy',  {public_id: images.public_id}, {
            headers: {Authorization: token}
        })

          setLoading(false)
          setImages(false)
      }catch(error){
          alert(error.response.data.msg)
        }
    }

    const handleChangeInput = e =>{
      const {name, value} = e.target
      setProduct({...product, [name]:value})
    }

    const handleSubmit = async e =>{
      e.preventDefault()
      try{
        if(!images) return alert("Vui lòng chọn hình ảnh")

        if(onEdit){
          await axios.put(`/api/product/${product._id}`, {...product, images}, {
              headers: {Authorization: token}
          })
      }else{
          await axios.post('/api/product', {...product, images}, {
              headers: {Authorization: token}
          })
      }
        // setImages(false)
        // setProduct(initialState)
        setCallback(!callback)
        navigate('/product');

      }catch(error){
          alert(error.response.data.msg)
      }
    }

    const styleUpload = {
        display:images ? "block":"none"
    }

  return (
    <div className="create_product">
       <div className="upload">
            <input type="file" name="file" id="file_up" onChange={handleUpload}/>
            {
                    loading ? <div id="file_img"><Loading /></div>

                    :<div id="file_img" style={styleUpload}>
                        <img src={images ? images.url : ''} alt=""/>
                        <span onClick={handleDestroy}>X</span>
                    </div>
                }
          
       </div>
       <form onSubmit={handleSubmit}>
          <div className="row">
            <label htmlFor="product_id"> ID sản phẩm: </label>
            <input type="text" name="product_id" id="product_id" required 
            value={product.product_id} onChange={handleChangeInput}  disabled={onEdit}/>
          </div>

          <div className="row">
            <label htmlFor="title"> Tên sản phẩm: </label>
            <input type="text" name="title" id="title" required 
            value={product.title} onChange={handleChangeInput}/>
          </div>

          <div className="row">
            <label htmlFor="price"> Giá sản phẩm: </label>
            <input type="number" name="price" id="price" required 
            value={product.price} onChange={handleChangeInput} />
          </div>

          <div className="row">
            <label htmlFor="content">Mô tả sản phẩm: </label>
            <input type="text" name="content" id="content" required 
            value={product.content} rows="7" onChange={handleChangeInput}/>
          </div>

          <div className="row">
            <label htmlFor="categories"> Loại sản phẩm: </label>
            <select name="category" value={product.category} onChange={handleChangeInput}>
              <option value=""> Chọn loại sản phẩm</option>
              {
                categories.map(category => (
                  <option value={category._id} key={category._id}>
                    {category.name}
                  </option>
                ))
              }
            </select>
          </div>

          <button type="submit"> {onEdit? "Cập nhật" : "Thêm"} </button>
          
       </form>



    </div>
  )
}

export default CreateProduct