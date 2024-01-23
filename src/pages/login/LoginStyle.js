import styled from 'styled-components'


export const LoginWrap = styled.div`
 .inner {
position: relative;
.Login-form{text-align:center; position:absolute; left:50%; top:50%; transform:translate(-50%,50%)}
h2 { font-size:20px; font-weight:700; margin-bottom:50px; color:#E3F2FD; text-align:right;}
img{width:250px;}
p {
    position: relative;
    margin-bottom: 30px;
    label {color: #E3F2FD;position:absolute; left: 0px; top:-20px;}
    input[type=email] , input[type=password]{
        margin-top:5px;
        width:250px; box-sizing: border-box;
        height:50px; padding:0 10px; 
    }
    
    &:last-child {
        margin-top:50px; text-align: center;
        button {
        width:150px; height:60px; background: none; border:1px solid #E3F2FD; color: #E3F2FD;
        cursor: pointer;
    }
    }
 }   

}
`
export const LoginMainWrap = styled.div`
display: flex; justify-content: space-between;
.Login-left{width:40%; position:relative; background:#000; video{position:absolute; left:0; top:50%; transform:translateY(-50%)}
h2{img{
    width: 200px; opacity: 0.2; margin-top: 30px; margin-left: 30px; cursor: pointer;
}}
}
.Login-right{width:60%;height:100vh; position: relative; text-align: center;
.Login-box{position:absolute; left:50%;top:50%; transform:translate(-50%,-50%);
button {width:250px; height:50px; background:none; border:1px solid #E3F2FD; color:#E3F2FD}
button:first-child {margin-right:10px;}
h2 {color: #E3F2FD; font-size:40px; margin-bottom:50px}
}
}
`



export const LogoutWrap = styled.div`
     .inner { padding:100px 0 ; display:flex ; flex-direction:column; justify-content: center; align-items:center; height:600px; }
     h2 { font-size:30px; font-weight:700; margin-bottom:50px  }
     h3 { margin-bottom:30px; font-size:25px; font-weight:700;
        span {
            color:tomato
        }
     }
     p {
        margin-top:50px; text-align: center;
        button {
          width:250px; height:60px; background: #546E7A; color:#fff; border:none; cursor: pointer;
        }
    }
` 

export const JoinWrap = styled.div`
 .inner { padding:100px 0 ; display:flex ; flex-direction:column; justify-content: center; align-items:center; height:750px; }
 h2 { font-size:30px; font-weight:700; margin-bottom:50px  }
 p {
    margin-bottom: 15px;
    label {
        display: block; width:110px;
    }
    input[type=email] , input[type=password], input[type=tel], input[type=text]{
        margin-top:5px;
        width:450px; box-sizing: border-box;
        height:55px; padding:0 10px;
    }
    
    &:last-child {
        margin-top:50px; text-align: center;
        button {
            width:200px; height:60px; background: #546E7A; color:#fff; border:none;
            cursor: pointer;margin-left:5px; 
    }
    }
 }   
`