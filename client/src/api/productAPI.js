import React, {useState, useEffect} from "react"
import axios from 'axios'


function ProductAPI(){
    const [Products, setProducts] = useState([])
    
    const getProduct = async() => {
        const res = await axios.get('/api/product')
        // console.log(res.data.Products)
        setProducts(res.data.Products)
        console.log(res)
    }
    useEffect(() => {
        getProduct()
    },[])
    return{
        products: [Products, setProducts],
       

    }
}
export default ProductAPI