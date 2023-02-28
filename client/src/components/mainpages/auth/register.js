


import React, {useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Register(){
    const [user, setUser] = useState({
        name: '', email:'', password:''
        
    })

    const onChangeInput = e => {
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const RegisterSubmit = async e => {
        e.preventDefault()
        try{
            await axios.post('/user/register', {...user})            
            localStorage.setItem('firstLogin', true)
            window.location.href = "/"

        }catch(error){
            alert(error.response.data.msg)
        }
    }

    return(
        <div className="login-page">
           <form onSubmit={RegisterSubmit}>
            <h2>Đăng ký</h2>
                <input type="text" name="name" required
                placeholder="Họ và tên" value={user.name} onChange={onChangeInput}/>

                <input type="mail" name="email" required
                placeholder="Email" value={user.email} onChange={onChangeInput}/>

                <input type="password" name="password" required autoComplete="on"
                placeholder="Mật khẩu" value={user.password} onChange={onChangeInput}/>
                <div className="row form-submit">
                    <div className="btn-l"><button type="submit">Đăng Ký</button></div>
                    
                    <div className="btn-r">
                        <p>Đã có tài khoản !<Link to="/login">Đăng Nhập</Link></p>
                    </div>
                </div>
           </form>
        </div>
    )
}
export default Register