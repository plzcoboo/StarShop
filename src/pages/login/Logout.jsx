import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/modules/authSlice";
import { LogoutWrap } from "./LoginStyle";


const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { authed, user } = useSelector((state) => state.auth);

    useEffect(() => {
        if (!authed) {
            navigate("/loginMain");
        }
    }, [authed, navigate]);

    const onLogout = () => {
        dispatch(logout());
    };

    return (
        <LogoutWrap>
            <div className="inner">
                <h2>
                    방문해 주셔서 감사합니다.
                    <br /> 다시 방문해주세요
                </h2>
                <h3>
                    <span>{user?.username ?? ""} 님</span> 이용해주셔서 감사합니다
                </h3>
                <p>
                    <button onClick={onLogout}>로그아웃</button>
                </p>
            </div>
        </LogoutWrap>
    );
};

export default Logout;