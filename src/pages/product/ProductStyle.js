import styled from 'styled-components'

export const ProductWrap = styled.div` 
    .inner { padding:100px 0 }
    h2 {  margin-bottom:50px; font-weight:700; color:#E3F2FD}

    .cart-box { display: flex;flex-wrap: wrap;
        article { width: 23%;padding: 20px; box-sizing: border-box; margin-bottom: 30px; text-align: center; border-radius : 20px; margin-right:24px; background-color:#37474F;
            div {margin-bottom: 25px;}
            img { width: 100%; height:130px}
            h3 {font-size: 12px; margin-bottom: 10px; color:#80CBC4;}
            h4 {font-size: 18px; line-height: 1.3; font-weight: 300;margin-bottom: 20px;}
            p { font-weight:400; color:#64FFDA;display: flex; justify-content: space-between; align-items: center; margin-top: 10px;
                button { background: #333; padding: 8px 30px; vertical-align: middle; color:#fff; font-size: 12px;
                &.off { background: #E6EE9C; padding: 8px 26px; vertical-align: middle; color:#558B2F;}
                }
                span { font-size: 14px; }
            }
        }
    }


`