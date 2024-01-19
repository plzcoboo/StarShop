import styled from 'styled-components'

export const CartListWrap = styled.div`
margin-top: 100px;
margin-bottom:100px;
h3{margin-top:10px}
.cart-remove{
button{width:130px; height:30px; font-size:14px; border:none; font-weight:600}
button:first-child {margin-right:10px;}
}
.cart-del{margin-top:10px; font-size:40px;}
.cart-con{display:flex; justify-content:space-between;}
.title{font-size:30px; display:flex; justify-content:space-between}
.cart-list{
.cart-count{span{vertical-align:middle; font-size:20px;display:inline-block; margin:0px 10px 0px 10px;} margin:10px 0px 10px 0px; svg{vertical-align:middle; font-size:25px;}}
display: flex;
flex-wrap: wrap;
width: 60%;
border-top: 2px solid #E0E0E0;
article {
position: relative;
.cart-select {
position: absolute;
left: 20px;
top: 0px;
input[type="checkbox"]{
        display: none;
      }
input[type="checkbox"] + label{
        display: inline-block;
        width: 20px;
        height: 20px;
        border:3px solid #E0E0E0;
        position: relative;
      }
input:checked + label::after{
        content:'✔';
        font-size: 16px;
        width: 20px;
        height: 20px;
        text-align: center;
        position: absolute;
        left: 0;
        top:0;
      }
}
margin-top: 50px;
color: #E0E0E0;
text-align: center;
box-sizing: border-box;
padding:10%;
width: 50%;
border-right: 1px solid #E0E0E0;
border-bottom: 1px solid #E0E0E0;
img { width: 150px; height:100px;}
}
}
h2 {color:white;}
.cart-right {color: #E0E0E0; width:30%; border-top:2px solid #E0E0E0; line-height:2; padding-top:20px;
button{width:100%; height: 50px; margin-top:20px; border:none; font-size:25px;font-weight:600}
.cart-Total{
    border-top: 4px solid #E0E0E0; margin-top: 20px;
    border-bottom: 4px solid #E0E0E0;
    padding: 10px;
}
.C-T{display:block; margin-left:auto; width:105px; margin-top:20px; font-size:20px}
}
`
export const CartEmptyWrap = styled.div`
.inner {position: relative; h2 { font-size: 60px; margin-top:200px; margin-bottom:200px; color:#fff}}
a {width: 250px; background: #000; display: inline-block; height: 50px; line-height: 50px; color:#fff}
`