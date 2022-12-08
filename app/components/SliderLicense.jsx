import { useEffect } from 'react';
import SliderBtnLeft from './UI/SliderBtnLeft';
import SliderBtnRight from './UI/SliderBtnRight';
import SliderPagination from './UI/SliderPagination';

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
  const slides = [
    { image: '/assets/License1.png' },
    { image: '/assets/License2.png' },
    { image: '/assets/License3.png' },
    { image: '/assets/License4.png' },
    { image: '/assets/License1.png' },
    { image: '/assets/License2.png' },
  ];
  return (
    <>
    <div className="mx-auto mt-24 wood-bg pt-28">
      <div className="max-w-[1170px] mx-auto">
      <h2 className="uppercase text-center text-white font-[Days] text-[25px] lg:text-5xl mb-8 lg:mb-10">
        Вся продукция сертифицирована <br/> и лицензирована
      </h2>
      <div className="swiper swiperLicense mx-auto mb-10 relative">
        <div className="swiper-wrapper mx-auto ">
          {slides.map((slide) => {
            return (
              <div className="swiper-slide swiper-slide-license flex items-center justify-center overflow-hidden">
                <img src={slide.image} className="" />
              </div>
            );
          })}
        </div>
      </div>
      <SliderPagination className="swiper-pagination-license"/>
      <div className="flex justify-center gap-6 mt-5 pb-20">
        <SliderBtnLeft />
        <SliderBtnRight />
      </div>
      </div>
    </div>
  </>
  );
}
