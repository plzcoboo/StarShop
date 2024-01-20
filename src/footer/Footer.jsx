import { FooterWrap } from "./FooterStyle";
import { FaTiktok } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


 
const Footer = () => {
    return (
        <FooterWrap>
            <div className="inner">
                {/* <h2>하단로고</h2>   */}
                <div className="menu-social">
                    <nav className="navi">
                        <div className="nav-title">More From Star Wars</div>
                        <ul className="brand-icon">
                            <li><FaTiktok /></li>
                            <li><FiInstagram /></li>
                            <li><RiTwitterXFill /></li>
                            <li><FaFacebook /></li>
                            <li><FaYoutube /></li>
                        </ul>
                    </nav>
                </div>
                <div className="copy">
                <strong>HH & © HyunKiyunfilm Ltd. All Rights Reserved</strong>
                <ul className="Terms">
                    <li>Terms of Use</li>
                    <li>Additional Content Information</li>
                    <li>Privacy Policy</li>
                    <li>Children's Online Privacy Policy</li>
                    <li>Your US State Privacy Rights</li>
                    <li>Star Wars at shopDisney</li>
                    <li>Star Wars Helpdesk</li>
                    <li>Interest-Based Ads</li>
                </ul>
                <p>Do Not Sell or Share My Personal Information</p>
                </div>
             
            </div>
        </FooterWrap>
    );
};

export default Footer;