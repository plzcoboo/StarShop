import styled from 'styled-components'
export const ProductSearchWrap = styled.div`
margin-bottom:30px; position:relative;
 form {
    display: flex;
    justify-content: space-between;
    p {        
        input[type=text] { width:350px; box-sizing:border-box; height:45px; padding:10px; margin-right:10px; background:#E3F2FD; border:none; color: #000; border-radius:10px;}
        button { width:100px; height:45px; vertical-align:top; background:none; border:1px solid #E3F2FD; color:#fff}
        select { width:200px; height:45px; box-sizing:border-box; padding:10px; background-color:#E3F2FD; border:none; color: #000;}
        span { margin-left:15px; cursor: pointer; color: #fff;}
    }
 }

`