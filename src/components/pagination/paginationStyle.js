import styled from 'styled-components'

export const PaginationWrap  = styled.div` 
    div{
 
        margin-top:30px;
        text-align: center;
        button {
            border-radius: 5px;
            width:30px; height:30px; border:1px soild #E3F2FD;
            margin-right:5px; background:#fff;
            &:first-child { border:none }
            &:last-child { border:none }
            &.on {
                border-color:#E3F2FD;
                background:#78c0f5;
                color:black;
                font-weight: 700;
            }
        }
    }
`