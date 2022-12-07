import { useEffect } from 'react';
import SwiperLicense from './SwiperLicense';

export default function Slider() {
  useEffect(() => {
    const swiper = new Swiper('.swiperLicense', {
      loop: true,
      slidesPerView: 2,
      spaceBetween:30,
      speed:600,
      breakpoints: {
        1300: {
          slidesPerView: 4,
          slidesOffsetBefore:150,
      },
      1146: {
        slidesPerView: 4,
        slidesOffsetBefore:150,
    },
    1024: {
      slidesPerView: 3,
      slidesOffsetBefore:20,
      },

      400:{
        slidesPerView: 1,
      },
    },
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination-license',
        clickable:true,

      },
      navigation: {
        nextEl: '.swiper-button-right',
        prevEl: '.swiper-button-left',
      },
    });
  });
  return (
     <SwiperLicense/>
  );
}
