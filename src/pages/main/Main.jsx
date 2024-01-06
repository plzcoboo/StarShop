import { MainWrap, VisualWrap } from "./MainStyle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Content1 from "./Content1";
import Content2 from "./Content2";
<Swiper
spaceBetween={0}
slidesPerView={1}
autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
modules={[Autoplay]}
>
<SwiperSlide><img src="./images/ship0.jpeg"></img></SwiperSlide>
<SwiperSlide><img src="./images/ship1.jpeg"></img></SwiperSlide>
<SwiperSlide><img src="./images/vis_ship2.jpg"></img></SwiperSlide>
</Swiper>

const Main = () => {
    return (
        <>
        <VisualWrap>
        <div className="inner">
        <video src="./images/visual_vid.mp4" autoPlay={true}></video>
        </div>
        </VisualWrap>
      
            <MainWrap className="main">
                {/* <Content1/> */}
                {/* <Content2/> */}
            </MainWrap>
        </>
    );
};

export default Main;