import styled from 'styled-components'

export const AboutWrap = styled.div`
.inner{margin-top:100px;margin-bottom:100px;}
color:#E3F2FD;
.nav {display:flex; li{margin-right:10px; cursor: pointer; font-size:25px}margin-bottom:30px;}

.content{display:flex; justify-content:space-between;
.title-content{margin-top:15px;
.title {margin-bottom:10px;color:#80CBC4;}
.text-content {
line-height: 1.6;
ul{display:flex; li{border:1px solid #E3F2FD;margin-right: 10px; padding:10px; text-align:center; span{font-size:15px; margin-top:10px; display:inline-block;} svg{vertical-align:middle; font-size:80px;}}
}
}
}  
.box-left{width:50%;}
.box-right{width:40%;}
.video-box{
    video{width:100%;}
}
}
`