import React, {createContext, useEffect, useState} from 'react'
import ProductAPI from './api/productAPI'
import UserAPI from './api/userAPI'
import CategoriesAPI from './api/CategoriesAPI'
import axios from 'axios'

export const GlobalState = createContext()

export const DataProvider = ({children}) => {
    
    const [token ,setToken] = useState(false)

    
    useEffect(() => {
        const firstLogin = localStorage.getItem('firstLogin')
        if(firstLogin){
            const refreshToken = async () =>{
                const res = await axios.get('/user/refresh_token')
        
                setToken(res.data.accesstoken)
    
                setTimeout(() => {
                    refreshToken()
                }, 15000)
            }
            refreshToken()
        }
    },[])


    const state = {
        token: [token, setToken],
        ProductAPI: ProductAPI(),
        userAPI: UserAPI(token),
        categoriesAPI: CategoriesAPI(),
    }
    // ProductAPI()
    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}