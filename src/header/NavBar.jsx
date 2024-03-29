import { Link } from "react-router-dom"; 
import { NavWrap, TopMenu } from "./HeaderStyle";
import { useSelector } from "react-redux";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { BiSolidLogIn } from "react-icons/bi";



const NavBar = () => {
    const {carts} = useSelector(state => state.cart)
    return (
        <>
        <NavWrap className="nav">
            <ul>             
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/product"}>Product</Link></li>
                <li><Link to={"/notice"}>Notice</Link></li>
                <li><Link to={"/customer"}>Customer</Link></li>
                <li className="login"><Link to="/loginMain"><BiSolidLogIn />Login</Link></li>
                <li className="Cart"><Link to="/cart"><HiMiniShoppingCart /><span>{carts.length}</span></Link></li>                        
            </ul>
        </NavWrap>

       {/*  <TopMenu className="top-menu">
             <li><Link to={"/join"}>회원가입</Link></li>
                
                    <li><Link to={"/logout"}>로그아웃</Link></li>
                    <li><Link to={"/login"}>로그인</Link></li>
       </TopMenu>       */}
        </>
    );
};

export default NavBar;