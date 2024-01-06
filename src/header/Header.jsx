
import {  Link  } from "react-router-dom";
import NavBar from "./NavBar"; 
import { HeaderWrap } from "./HeaderStyle";
import logo from '/images/sw_logo.jpg'

const Header = () => {
     
    return (
        <HeaderWrap>
            <div className="inner">
                <h1><Link to={"/"}>  <img src={logo} alt=""  /> </Link></h1>
                <NavBar />
            </div>
        </HeaderWrap>
    );
};

export default Header;