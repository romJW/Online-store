import { useEffect } from 'react';
import SwiperReviews from './SwiperReviews';

export default function Slider() {
  useEffect(() => {
    const swiper = new Swiper('.swiperReviews', {
      loop: true,
      slidesPerView: 1,
      speed: 600,
      breakpoints: {
        1024: {
          slidesPerView: 3,
        },
      },
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: '.swipe-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-right',
        prevEl: '.swiper-button-left',
      },
    });
  });
  return <SwiperReviews />;
}
