import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../store/modules/authSlice";
import { LoginWrap } from "./LoginStyle";


 
 
const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const { email, password } = user;

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { authed } = useSelector((state) => state.auth);

    useEffect(() => {
        if (authed) {
            navigate("/");
        }
    }, [authed, navigate]);

    const onSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) return;

        dispatch(login(user));
        setUser({
            email: "",
            password: "",
        });
    };

    const onInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    return (
        <LoginWrap>
            <div className="inner">
            <div className="Login-form">
            <div>
              <Link to={"/"}>
                <img src="./images/sw_logo.jpg" alt="Star Shop" />
              </Link>
            </div>
            <h2>Login</h2>
            <form onSubmit={onSubmit}>
                <p>
                    <label>이메일</label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      name="email"
                      value={email}
                      onChange={onInput}
                      required
                    />
                </p>
                <p>
                    <label>비밀번호</label>
                    <input
                      type="password"
                      placeholder="영문+숫자 6자 이상"
                      name="password"
                      value={password}
                      onChange={onInput}
                      required
                    />
                </p>
                <p>
                  <button type="submit">Login</button>
                </p>
            </form>
            <div className="login-bottom">
              <span>아직 계정이 없으신가요?</span>
              <Link to="/join">회원가입</Link>
            </div>
            </div>
            </div>
        </LoginWrap>
    );
};

export default Login;