import { Link } from "react-router-dom";
import { LoginWrap  } from "./LoginStyle";


 
 
const Login = () => {
    return (
        <LoginWrap>
            <div className="inner">
            <div className="Login-form">
            <div><Link to={'/main'}><img src="./images/sw_logo.jpg" alt="" /></Link></div>
            <h2>Login</h2>
            <form>
                <p>
                    <label>이메일</label>  
                    <input type="email"   placeholder=""/>
                </p>                
                <p>
                    <label>비밀번호</label>  
                    <input type="password"   placeholder="" />
                </p>
                <p><button type="submit">Login</button></p>
            </form>
            </div>
            </div>
        </LoginWrap>
    );
};

export default Login;