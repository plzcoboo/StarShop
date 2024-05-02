import { Link, useNavigate } from "react-router-dom";
import { LoginWrap  } from "./LoginStyle";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/modules/authSlice";


 
 
const Login = () => {
    const [user, setUser] = useState({
        email:'', password:''
    })
    const emailRef = useRef()
    const {email,password} = user;
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()
        if(!email || !password) return
            dispatch(login(user))
            navigate('/main')
        setUser({
            email:'',
            password:''
        })
    }

    const onInput = (e) => {
        const {name,value} = e.target 
        setUser({...user,[name]:value})
    }

    return (
        <LoginWrap>
            <div className="inner">
            <div className="Login-form">
            <div><Link to={'/main'}><img src="./images/sw_logo.jpg" alt="" /></Link></div>
            <h2>Login</h2>
            <form onClick={onSubmit}>
                <p>
                    <label>이메일</label>  
                    <input type="email"   placeholder="" name='email' value={email} onChange={onInput}/>
                </p>                
                <p>
                    <label>비밀번호</label>  
                    <input type="password"   placeholder="" name='password' value={password} onChange={onInput}/>
                </p>
                <p><button type="submit">Login</button></p>
            </form>
            </div>
            </div>
        </LoginWrap>
    );
};

export default Login;