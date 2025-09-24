import { Link } from "react-router-dom";
import { LoginMainWrap } from "./LoginStyle";

const LoginMain = () => {
  return (
    <LoginMainWrap>
      <div className="Login-left">
        <h2>
          <Link to="/">
            <img src="./images/sw_logo.jpg" alt="Star Shop" />
          </Link>
        </h2>
        <video
          width="100%"
          src="./images/login_page_vid.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className="Login-right">
        <div className="Login-box">
          <h2>Get started</h2>
          <p className="description">
            로그인하면 장바구니와 고객센터를 포함한 모든 서비스를 이용할 수
            있습니다.
          </p>
          <div className="button-box">
            <Link to="/login">
              <button type="button">Login</button>
            </Link>
            <Link to="/join">
              <button type="button" className="secondary">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </LoginMainWrap>
  );
};

export default LoginMain;