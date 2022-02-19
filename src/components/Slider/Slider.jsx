import dataSlider from "./dataSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation, Pagination, Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "./slider.css";


const Slider = () => {
    SwiperCore.use([Autoplay]);
    return (
        <>
            <Swiper
                effect={"fade"}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                autoplay={{ delay: 4000 }}
                modules={[EffectFade, Navigation, Pagination]}
                className="container-slider mySwiper"
            >
                {dataSlider.map((obj, index) => {
                    return (
                        <SwiperSlide key={obj.id} className="slide" >
                            <img src={obj.src} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
};

export default Slider;
