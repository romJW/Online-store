import { useEffect } from 'react';
import SliderBtn from './UI/SliderBtn';
import SliderPagination from './UI/SliderPagination';
import { useRef } from "react";
export default function Slider() {
  useEffect(() => {
    const swiper = new Swiper('.swiperClassic', {
      loop: true,
      slidesPerView: 1,
      slidesOffsetBefore:5,
      speed:600,
      breakpoints: {
        1024: {
          slidesPerView: 4,
        },
      },
      centeredSlides: true,
      spaceBetween: 50,
      pagination: {
        el: '.swiper-pagination-photo',
        clickable:true,

      },
      navigation: {
        nextEl: '.btn-right',
        prevEl: '.btn-left',
      },
    });
  });
  const slides = [
    { image: '/assets/Slider1.jpg' },
    { image: '/assets/Slider2.jpg' },
    { image: '/assets/Slider3.jpg' },
    { image: '/assets/Slider4.jpg' },

  ];

  return (
    <>
      <div className="mx-auto w-full relative lg:mt-12 text-black">

        <h2 className="text-center uppercase font-[Days] text-3xl lg:text-5xl mb-8 lg:mb-10">Фотографии с мест установки</h2>
        <div className="swiper swiperClassic mx-auto mb-10 relative">
          <div className="swiper-wrapper mx-auto">
            {slides.map((slide) => {
              return (
                <div key={slide.image} className="swiper-slide swiper-opacity flex gap-12 items-center justify-center overflow-hidden">
                  <img src={slide.image} className="h-[300px] rounded-[20px]" alt=''/>
                </div>
              );
            })}
          </div>
        </div>
        <SliderPagination className="swiper-pagination-photo"/>
        <div className="flex justify-center gap-6 mt-5">
          <SliderBtn className='btn-left'>
          <i className="fa-solid fa-chevron-left text-white text-lg lg:text-5xl"/>
          </SliderBtn>
          <SliderBtn className='btn-right'>
          <i className="fa-solid fa-chevron-right text-white text-lg lg:text-5xl  "/>
          </SliderBtn>
        </div>
      </div>
    </>
  );
}
