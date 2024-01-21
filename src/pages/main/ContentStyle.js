import styled from "styled-components";

export const ContentStyle = styled.section`
width: 100%;
/* opacity: 0.8; */
display: flex;
justify-content: space-between;
.img-box {width:50%;img{width:100%;}}
.text-box {position:relative; width:50%;  color: white; h2{font-size:18px;}
text-align: center;
span{display:block; font-size:14px;}
.inner-box{
width: 450px;
.go-shop{margin-right:auto; margin-left:auto; margin-top:30px}
position:absolute; left:50%; top:50%; 
transform:translate(-50%,-50%)}
}
`
export const Content2Style = styled.section`
box-sizing: border-box;
padding: 150px;
.Con-Text{width: 900px; margin:auto; text-align:center}
color: #E3F2FD;
`

export const BannerStyle = styled.div`
margin-bottom: 100px;
`

export const Content4Style = styled.section`
margin-top: 100px;
display: flex;
justify-content: space-evenly;
color: #E3F2FD;
p{line-height:25px; font-size:15px;}
.title {margin-bottom:30px}
margin-bottom: 100px;
`