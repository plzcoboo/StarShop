import { MainWrap, VisualWrap } from "./MainStyle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Content1 from "./Content1";
import Content2 from "./Content2";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import Content3 from "./Content3";
import Content4 from "./Content4";

const Main = () => {
    return (
        <>
        <VisualWrap>
        <Banner/>
        </VisualWrap>
            <MainWrap className="main">
                <Content1/>
                <Content3/>
                <div className="inner">
<Swiper className="swiperStyle"
spaceBetween={0}
slidesPerView={1}
autoplay={{ delay: 8000, disableOnInteraction: false }}
          loop={true}
modules={[Autoplay]}
>
<SwiperSlide className="sl-0"><img src="./images/Swiper_vis_2.jpg"></img></SwiperSlide>
<SwiperSlide className="sl-1"><img src="./images/Swiper_vis_3.jpg"></img></SwiperSlide>
<SwiperSlide className="sl-2"><img src="./images/Swiper_vis_1.jpeg"></img></SwiperSlide>
</Swiper>
</div>
               
                <Content2/>
                <Content4/>
            </MainWrap>
        </>
    );
};

export default Main;