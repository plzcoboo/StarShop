import styled from 'styled-components'

export const HeaderWrap = styled.header`
background:#213067;
    .inner { height:80px; }
    h1 {
        position:absolute; left:0; top:50%; transform: translateY(-50%); 
        a {
            img {
                width:120px;
            }
        }      
    }
    .login {
      position: absolute; right: 150px; top: 10px;
      color:blue;
    }
`


export const NavWrap = styled.nav`
   &.nav{ 
    position: absolute; right:35%;  top:50% ; transform: translateY(-50%); 
    ul{
        display: flex;
        .Cart{position:absolute; right: -60%;}
        li {
            margin-left:100px; position:relative ;
            a {
                color: #E3F2FD;
                font-size:15px; font-weight: 500;
                transition:0.3s;
                &:hover {
                    color:#64B5F6;
                }
            }
            &:last-child span{ 
                font-size:16px;
                border-radius:50% ;               
                display: block;
                position:absolute ;
                right:-20px; top:-5px; 
                width:20px; height:20px; 
                text-align:center; line-height:20px ;
            }
        }
    }
}
`


export const TopMenu  = styled.ul`
    &.top-menu {
        position: absolute; right:0;  top:10px;
        display: flex;
        li {
            margin-left:25px;
            a {
                font-size:15px;                
            }
        }
    }
    

`