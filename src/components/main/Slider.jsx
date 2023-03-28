import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

import Img1 from '../../assets/image/swiper-01.svg';
import Img2 from '../../assets/image/swiper-02.svg';
import Img3 from '../../assets/image/swiper-03.svg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




SwiperCore.use([Autoplay]);

const Slider = () => {

  return (
    <div style={{position:'relative', width:'375px', height:'190px'}}>
    <Swiper
    allowTouchMove={false}
    autoplay={{ delay: 3000 }}
    className={'h2h2'}
    slidesPerView={1}
    spaceBetween={0}
    style={{
      width:'100%',
      height:"100%",
    }}
  >
    {/* {swiperSlides} */}
    <SwiperSlide><img src={Img1} alt="" /></SwiperSlide>
    <SwiperSlide><img src={Img2} alt="" /></SwiperSlide>
    <SwiperSlide><img src={Img3} alt="" /></SwiperSlide>
  </Swiper>
  </div>
  )
}

export default Slider;