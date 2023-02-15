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
    { image: '/assets/sliderPhoto1.png' },
    { image: '/assets/SliderPhoto2.png' },
    { image: '/assets/SliderPhoto3.png' },
    { image: '/assets/sliderPhoto1.png' },
    { image: '/assets/SliderPhoto2.png' },
  ];

  return (
    <>
      <div className="mx-auto w-full relative mt-12 text-black">
        <img src='/assets/circles.svg' className='circles absolute rotate-180 top-[-85px]'/>
        <h2 className="text-center uppercase font-[Days] text-3xl lg:text-5xl mb-8 lg:mb-10">Фотографии с мест установки</h2>
        <div className="swiper swiperClassic mx-auto mb-10 relative">
          <div className="swiper-wrapper mx-auto">
            {slides.map((slide) => {
              return (
                <div key={slide.image} className="swiper-slide swiper-opacity flex gap-12 items-center justify-center overflow-hidden">
                  <img src={slide.image} className="" alt=''/>
                </div>
              );
            })}
          </div>
        </div>
        <SliderPagination className="swiper-pagination-photo"/>
        <div className="flex justify-center gap-6 mt-5">
          <SliderBtn className='btn-left'>
          <i class="fa-solid fa-chevron-left text-white fa-2x"/>
          </SliderBtn>
          <SliderBtn className='btn-right'>
          <i class="fa-solid fa-chevron-right text-white fa-2x  "/>
          </SliderBtn>
        </div>
      </div>
    </>
  );
}
