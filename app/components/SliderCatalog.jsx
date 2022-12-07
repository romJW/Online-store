import { useEffect } from 'react';
import SwiperCatalog from './SwiperCatalog';


export default function Slider() {
  useEffect(() => {
    const swiper = new Swiper('.swiperCatalog', {
      loop: true,
      slidesPerView: 1,
      speed: 1000,
      wrapperClass:'swiper-wrapper-catalog',
      breakpoints: {
        1700: {
          slidesPerView: 5,
          slidesPerGroup:3,
        },
        1390: {
          slidesPerView: 4,
          slidesPerGroup:4,
        },
        1024: {
          slidesPerView: 3,
          slidesPerGroup:3,
        },
      },
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination-catalog',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-right',
        prevEl: '.swiper-button-left',
      },
    });
  });
  return <SwiperCatalog />;
}
