import { useEffect } from 'react';
import SliderBtnLeft from './UI/SliderBtnLeft';
import SliderBtnRight from './UI/SliderBtnRight';
import SliderPagination from './UI/SliderPagination';
import ReviewSwipeCard from './UI/ReviewSwipeCard';
import Btn from './UI/Btn';
import Section from '../components/UI/Section.jsx';

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
        el: '.swiper-pagination-review',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-right',
        prevEl: '.swiper-button-left',
      },
    });
  });
  const reviews = [
    {
      image: '/assets/reviewPhoto.png',
      review: (
        <>
          Отправка в день заказа со складов в Москве, Ульяновске, Санкт-Петербурге, Ростове-на-Дону,
          Казани, Самаре, Чебоксарах. Доставляем собственным транспортом или транспортными
          компаниями: ПЭК, Деловые линии и др.
          <br />
          <br />
          Отправка в день заказа со складов в Москве, Ульяновске, Санкт-Петербурге, Ростове-на-Дону,
          Казани, Самаре, Чебоксарах. Доставляем собственным транспортом или транспортными
          компаниями: ПЭК, Деловые линии и др.
        </>
      ),
      author: 'Виктор Иванов',
      size: '30',
      path:``,
      key: 1,
    },
    {
      image: '/assets/reviewPhoto.png',
      review: (
        <>
          Отправка в день заказа со складов в Москве, Ульяновске, Санкт-Петербурге, Ростове-на-Дону,
          Казани, Самаре, Чебоксарах. Доставляем собственным транспортом или транспортными
          компаниями: ПЭК, Деловые линии и др.
          <br />
          <br />
          Отправка в день заказа со складов в Москве, Ульяновске, Санкт-Петербурге, Ростове-на-Дону,
          Казани, Самаре, Чебоксарах. Доставляем собственным транспортом или транспортными
          компаниями: ПЭК, Деловые линии и др.
        </>
      ),
      author: 'Виктор Иванов',
      size: '30',
      path:``,
      key: 2,
    },
    {
      image: '/assets/reviewPhoto.png',
      review: (
        <>
          Отправка в день заказа со складов в Москве, Ульяновске, Санкт-Петербурге, Ростове-на-Дону,
          Казани, Самаре, Чебоксарах. Доставляем собственным транспортом или транспортными
          компаниями: ПЭК, Деловые линии и др.
          <br />
          <br />
          Отправка в день заказа со складов в Москве, Ульяновске, Санкт-Петербурге, Ростове-на-Дону,
          Казани, Самаре, Чебоксарах. Доставляем собственным транспортом или транспортными
          компаниями: ПЭК, Деловые линии и др.
        </>
      ),
      author: 'Виктор Иванов',
      size: '30',
      path:``,
      key: 3,
    },
    {
      image: '/assets/reviewPhoto.png',
      review: (
        <>
          Отправка в день заказа со складов в Москве, Ульяновске, Санкт-Петербурге, Ростове-на-Дону,
          Казани, Самаре, Чебоксарах. Доставляем собственным транспортом или транспортными
          компаниями: ПЭК, Деловые линии и др.
          <br />
          <br />
          Отправка в день заказа со складов в Москве, Ульяновске, Санкт-Петербурге, Ростове-на-Дону,
          Казани, Самаре, Чебоксарах. Доставляем собственным транспортом или транспортными
          компаниями: ПЭК, Деловые линии и др.
        </>
      ),
      author: 'Виктор Иванов',
      size: '30',
      path:``,
      key: 4,
    },
    {
      image: '/assets/reviewPhoto.png',
      review: (
        <>
          Отправка в день заказа со складов в Москве, Ульяновске, Санкт-Петербурге, Ростове-на-Дону,
          Казани, Самаре, Чебоксарах. Доставляем собственным транспортом или транспортными
          компаниями: ПЭК, Деловые линии и др.
          <br />
          <br />
          Отправка в день заказа со складов в Москве, Ульяновске, Санкт-Петербурге, Ростове-на-Дону,
          Казани, Самаре, Чебоксарах. Доставляем собственным транспортом или транспортными
          компаниями: ПЭК, Деловые линии и др.
        </>
      ),
      author: 'Виктор Иванов',
      size: '30',
      path:``,
      key: 5,
    },
  ];
  return (
    <>
    <Section>
      <div className="mx-auto mt-20 text-black ">
        <h2 className="text-center text-5xl font-[Days] uppercase mb-10">отзывы наших клиентов</h2>
        <div className="swiper swiperReviews  mx-auto mb-10 relative ">
          <div className="swiper-wrapper  mx-auto relative">
            {reviews.map((review) => {
              return (
                <div key={review.key} className="swiper-slide  swiper-slide-review flex gap-12 items-center justify-center">
                  <ReviewSwipeCard
                    image={review.image}
                    review={review.review}
                    author={review.author}
                    size={review.size}
                    path={review.path}
                  />
                </div>
              );
            })}
             
          </div>
         
        </div>

        <SliderPagination className="swiper-pagination-review"/>
        <div className="flex justify-center gap-6 mt-5">
          <SliderBtnLeft className="relative lg:top-[-400px] lg:left-[-325px] z-20" />
          <SliderBtnRight className="relative lg:top-[-400px] lg:right-[-325px] z-20" />
        </div>
        <div className="flex justify-center">
          <Btn
            kind="secondary"
            className="mx-auto mt-5 lg:mt-0 w-[300px] lg:w-[436px] h-20 lg:h-[89px] text-base lg:text-xl">
            смотреть Все отзывы{' '}
          </Btn>
         
        </div>
      </div>
      </Section>
    </>
  );
}
