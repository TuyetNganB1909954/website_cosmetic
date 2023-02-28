import React, {useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Login(){
    const [user, setUser] = useState({
        email:'', password:''
        
    })

    const onChangeInput = e => {
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const loginSubmit = async e => {
        e.preventDefault()
        try{
            await axios.post('/user/login', {...user})            
            localStorage.setItem('firstLogin', true)
            window.location.href = "/"

        }catch(error){
            alert(error.response.data.msg)
        }
    }

    return(
        <div className="login-page">
           <form onSubmit={loginSubmit}>
            <h2>Đăng nhập</h2>
                <input type="mail" name="email" required
                placeholder="Email" value={user.email} onChange={onChangeInput}/>

                <input type="password" name="password" required autoComplete="on"
                placeholder="Password" value={user.password} onChange={onChangeInput}/>

                <div className="row form-submit">
                    <div className="btn-l"><button type="submit">Đăng nhập</button></div>
                    
                    <div className="btn-r">
                        <p>Chưa có tài khoản ?<Link to="/register">Đăng ký</Link></p>
                    </div>
                </div>
           </form>
        </div>
    )
}
export default Login