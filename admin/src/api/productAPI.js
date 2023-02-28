import React, {useState, useEffect} from "react"
import axios from 'axios'


function ProductAPI(){
    const [Products, setProducts] = useState([])
    const [callback, setCallback] = useState(false)
    useEffect(() => {
        const getProduct = async() => {
            const res = await axios.get('/api/product')
            setProducts(res.data.Products)
            console.log(res)
        }
        getProduct()
    },[callback])
    return{
        products: [Products, setProducts],
        callback: [callback, setCallback],
    }
}
export default ProductAPI