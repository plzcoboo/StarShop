import styled from 'styled-components'

export const NoticeListWrap  = styled.div` 

.noticeTable { width: 100%; color:#E3F2FD;
    caption { position:absolute; left:0; top:0; text-indent:-9999px}
    .num { width: 10%; }
    .title { width: auto;}
    .date { width: 15%; }
    th,  td{ height: 45px; vertical-align: middle; 
        border: 1px solid #E3F2FD;}
    th { border-bottom: none; font-weight: 700; background:#E3F2FD; color:#000035;}   
    td{ text-align: center;
        &:nth-child(2){ text-align: left; padding-left: 20px; } 
    }
    a{color:#E3F2FD;}
} 

`

export const NoticeDetailWrap = styled.div` 
color: #E3F2FD;
    .inner { padding:100px 0 }
    h2 { font-size:30px; font-weight:700; margin-bottom:50px }

    .con {  font-size: 20px; line-height: 1.7; border-top:1px solid #E3F2FD;
        border-bottom:1px solid #E3F2FD;
             margin-bottom: 20px; padding: 20px 0; 
       h3 {
        font-size: 20px; font-weight: 500 ; padding-bottom: 15px;  border-bottom:1px solid #dcdcdc ; margin-bottom: 15px 
       }
       .txt {
        font-size:18px; margin-bottom: 15px;
        height:300px; white-space: pre-line;
       }
       .date { font-size: 16px }
    }
    button { width: 200px; height: 50px; background:none; color:#E3F2FD; cursor: pointer; border:none ;margin-right:5px; border:1px solid #E3F2FD; }
`