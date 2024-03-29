import styled from 'styled-components'

export const VisualWrap = styled.section`
    width:100%; position:relative;
    margin-top: 100px;
    .video-box{position:relative;
      video{width:100%; border-radius:30px;}
    }
    .buy-now{width: 150px; height: 50px; background:#000035; border-radius:10px; text-align:center; padding:15px; box-sizing:border-box;
      position: absolute; right: 100px; bottom:40px;
      a {color:#E3F2FD; width: 100%; height:100%; display:block}
    }
    
.Main-Text {position:absolute; left: 50%;top: -16%; transform:translateX(-50%); a {color:#E3F2FD}}

`

export const MainWrap = styled.div`
    &.main{}
    h2 { font-size:30px; font-weight:700 }
    .swiperStyle{
      margin-top: 100px;
      img{height:700px; width:100%}
    }
`