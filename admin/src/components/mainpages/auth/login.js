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
            window.location.href = "/product"

        }catch(error){
            alert(error.response.data.msg)
        }
    }

    return(
       
        <div class="wrapper">
            <div class="">
                
            <div className="login-page box">
                <form onSubmit={loginSubmit}>
                    <h2>Admin đăng nhập</h2>
                        <input type="mail" name="email" required
                        placeholder="Email" value={user.email} onChange={onChangeInput}/>

                        <input type="password" name="password" required autoComplete="on"
                        placeholder="Password" value={user.password} onChange={onChangeInput}/>

                        <div className="row">
                            <button type="submit">Đăng nhập</button>
                        </div>
                </form>
            </div>

            </div>
        </div>
    )
}
export default Login