import axios from "axios";
import React, {useState, useEffect} from "react";
function UserAPI(token){
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [cart, setCart] = useState([])
    const [User, setUser] = useState('')
    const [callback, setCallback] = useState(false)
     useEffect(() =>{
        if(token){
            const getUser = async() => {
                try{
                    const res = await axios.get('/user/infor',{
                        headers: {Authorization: token}
                    })
                    setIsLogged(true)
                    setUser(res.data)
                    res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false)
                    // console.log(res)
                    setCart(res.data.cart)
                }catch(error){
                    alert(error.respone.data.msg)
                }
            }
            getUser()
        }
     },[token])

     const addCart = async (product) => {
        if(!isLogged)
            return alert("Vui lòng đăng nhập trước khi mua hàng")
        const check = cart.every(item =>{
            return item._id !== product._id
        })
        if (check){
            setCart([...cart, {...product, quantity: 1}])
            await axios.patch('/user/addcart', {cart: [...cart, {...product, quantity: 1}]},{
                headers: {Authorization: token}
            })
        }else{
            alert("Sản phẩm đã được thêm vào giở hàng")
        }
     }

    return{
        isLogged: [isLogged, setIsLogged],
        isAdmin:  [isAdmin, setIsAdmin], 
        cart: [cart, setCart],
        addCart: addCart,
        user:[User, setUser],
        callback:[callback, setCallback]
    }
}

export default UserAPI