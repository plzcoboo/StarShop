import styled from 'styled-components'
export const ProductSearchWrap = styled.div`
margin-bottom:30px; position:relative;
 form {
    display: flex;
    justify-content: space-between;
    p {        
        input[type=text] { width:350px; box-sizing:border-box; height:45px; padding:10px; margin-right:10px; background-color:#607D8B; border:none; color: #fff; border-radius:10px;}
        button { width:100px; height:45px; vertical-align:top; background:#90A4AE; border:none; color:#fff}
        select { width:200px; height:45px; box-sizing:border-box; padding:10px; background-color:#BCAAA4; border:none; color: #fff;}
        span { margin-left:15px; cursor: pointer; color: #fff;}
    }
 }

`