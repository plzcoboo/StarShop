import React from 'react';
import { LoginMainWrap } from './LoginStyle';
import { Link } from 'react-router-dom';

const LoginMain = () => {
    return (
        <LoginMainWrap>
            <div className='Login-left'>
                     <h2><Link to={'/main'}><img src="./images/sw_logo.jpg" alt="" /></Link></h2>
                    <video width={'100%'} src="./images/login_page_vid.mp4" autoPlay={true} loop={true}>
                    </video>
            </div>
            <div className='Login-right'>
                <div className='Login-box'>
                    <h2>Get started</h2>
                    <div><Link to={'/login'}><button>Login</button></Link><Link to={'/join'}><button>Sign up</button></Link></div>
                </div>
            </div>
        </LoginMainWrap>
    );
};

export default LoginMain;