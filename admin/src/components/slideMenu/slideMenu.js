/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
import {GlobalState} from "../../GlobalState"

function slideMenu() {
  const state = useContext(GlobalState)

  // const [isLogged] = (state.userAPI.isLogged)
  const [isAdmin] = (state.userAPI.isAdmin)

  const logoutAdmin = async() => {
      await axios.get('/user/logout')
      localStorage.removeItem('firstLogin')
      window.location.href = "/"
  }

      
  const  AdminRouter = () =>{
      return(
          <>
              <li><Link className="nav-link" to="/" onClick={logoutAdmin}>Đăng xuất</Link></li>
          </>
      )
  }
  
  return (
    <div className="slider">
      <h2>Bảng quản trị</h2>
      <hr/>
      <ul className="nav flex-column ">
        <li className="nav-item">
          <Link className="nav-link" to="/product">Sản phẩm </Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/CreateProduct">Thêm sản phẩm </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Category">Danh mục </Link>
        </li>
        <li className="nav-item">
          {
            isAdmin ? AdminRouter(): 
            <Link className="nav-link" to="/">Đăng nhập</Link>
        }
          
        </li>
      </ul>
    </div>
  )
}

export default slideMenu




