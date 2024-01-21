import { AboutWrap } from "./AboutStyle";
import { FaCheck } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";









const About = () => {
    return (
        <AboutWrap>
            <div className="inner">
                <nav>
                <ul className="nav">
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                </nav>
                <div className="content">
                <div className="box-left">
                    <div className="title-content">
                    <p className="title">사용기술</p>
                    <p className="text-content">
                        <ul>
                            <li><FaReact /><span>React</span></li>
                            <li><SiStyledcomponents /><span>Styled-Components</span></li>
                            <li><SiReactrouter /><span>React-router</span></li>
                            <li><SiRedux /><span>Redux-toolkit</span></li>
                        </ul>
                    </p>
                    </div>
                    <div className="title-content">
                    <p className="title">기능</p>
                    <p className="text-content">회원가입, 로그인 장바구니 정렬 검색 게시판(CRUD)</p>
                    </div>
                    <div className="title-content">
                    <p className="title">설명</p>
                    <p className="text-content">평소에 좋아하는 스타워즈 테마로 쇼핑몰을 구현했습니다. <br></br>현재 기본적인 기능만 들어가있는상태이며,<br></br> 추후 추가적으로 보완하거나 기능을 추가할예정입니다.</p>
                    </div>
                </div>
                <div className="box-right">
                    <div className="video-box">
                    <video src="/images/Star Wars Intro.mp4" autoPlay={true} loop={true} muted={true}></video>
                    </div>
                    <div className="title-content">
                    <p className="title">Contact</p>
                    <p className="text-content">
                        <ul>
                            <li><FaGithub /><span>https://github.com/plzcoboo</span></li>
                            <li><HiOutlineMail /><span>plzcobooo@gmail.com</span></li>
                        </ul>
                    </p>
                    </div>
                </div>
                </div>
             </div>
        </AboutWrap>
    );
};

export default About;