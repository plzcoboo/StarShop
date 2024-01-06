import styled from 'styled-components'

export const VisualWrap = styled.section`
    width:100%; position:relative;
    margin: 50px 0;
    video{width:100%}
    .swiper {}

.swiper-slide {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  height: 900px;
  width: 100%;
}
`

export const MainWrap = styled.div`
    &.main{}
    .inner { padding:100px 0 }
    h2 { font-size:30px; font-weight:700 }
`