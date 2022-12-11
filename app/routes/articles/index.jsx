import Subscribe from '../../components/Subscribe';
import Consult from '../../components/Consult';
import MainLayout from '../../layouts/MainLayout';
import Section from '../../components/UI/Section';
import BreadCrumbs from '../../components/UI/BreadCrumbs';
import { useEffect } from 'react';
import SliderBtnLeft from '../../components/UI/SliderBtnLeft';
import SliderBtnRight from '../../components/UI/SliderBtnRight';
import SliderPagination from '../../components/UI/SliderPagination';
import NewsCard from '../../components/NewsCard';

const NewsSlider = () => {
  const NewsArrs = [
    [
      { image: '/assets/News1.png', title: 'Новость 1', date: '06.09.2022' },
      {
        image: '/assets/News2.png',
        title: 'Здесь будет новость с названием в 2 строки',
        date: '06.09.2022',
      },
      {
        image: '/assets/News3.png',
        title: 'А теперь нужна новость с очень длинным названием, ...',
        date: '06.09.2022',
      },
      { image: '/assets/News1.png', title: 'Новость 1', date: '06.09.2022' },
      {
        image: '/assets/News2.png',
        title: 'Здесь будет новость с названием в 2 строки',
        date: '06.09.2022',
      },
      {
        image: '/assets/News3.png',
        title: 'А теперь нужна новость с очень длинным названием, ...',
        date: '06.09.2022',
      },
    ],
    [
      { image: '/assets/News1.png', title: 'Новость 1', date: '06.09.2022' },
      {
        image: '/assets/News2.png',
        title: 'Здесь будет новость с названием в 2 строки',
        date: '06.09.2022',
      },
      {
        image: '/assets/News3.png',
        title: 'А теперь нужна новость с очень длинным названием, ...',
        date: '06.09.2022',
      },
      { image: '/assets/News1.png', title: 'Новость 1', date: '06.09.2022' },
      {
        image: '/assets/News2.png',
        title: 'Здесь будет новость с названием в 2 строки',
        date: '06.09.2022',
      },
      {
        image: '/assets/News3.png',
        title: 'А теперь нужна новость с очень длинным названием, ...',
        date: '06.09.2022',
      },
    ],
    [
      { image: '/assets/News1.png', title: 'Новость 1', date: '06.09.2022' },
      {
        image: '/assets/News2.png',
        title: 'Здесь будет новость с названием в 2 строки',
        date: '06.09.2022',
      },
      {
        image: '/assets/News3.png',
        title: 'А теперь нужна новость с очень длинным названием, ...',
        date: '06.09.2022',
      },
      { image: '/assets/News1.png', title: 'Новость 1', date: '06.09.2022' },
      {
        image: '/assets/News2.png',
        title: 'Здесь будет новость с названием в 2 строки',
        date: '06.09.2022',
      },
      {
        image: '/assets/News3.png',
        title: 'А теперь нужна новость с очень длинным названием, ...',
        date: '06.09.2022',
      },
    ],
    [
      { image: '/assets/News1.png', title: 'Новость 1', date: '06.09.2022' },
      {
        image: '/assets/News2.png',
        title: 'Здесь будет новость с названием в 2 строки',
        date: '06.09.2022',
      },
      {
        image: '/assets/News3.png',
        title: 'А теперь нужна новость с очень длинным названием, ...',
        date: '06.09.2022',
      },
      { image: '/assets/News1.png', title: 'Новость 1', date: '06.09.2022' },
      {
        image: '/assets/News2.png',
        title: 'Здесь будет новость с названием в 2 строки',
        date: '06.09.2022',
      },
      {
        image: '/assets/News3.png',
        title: 'А теперь нужна новость с очень длинным названием, ...',
        date: '06.09.2022',
      },
    ],
    [
      { image: '/assets/News1.png', title: 'Новость 1', date: '06.09.2022' },
      {
        image: '/assets/News2.png',
        title: 'Здесь будет новость с названием в 2 строки',
        date: '06.09.2022',
      },
      {
        image: '/assets/News3.png',
        title: 'А теперь нужна новость с очень длинным названием, ...',
        date: '06.09.2022',
      },
      { image: '/assets/News1.png', title: 'Новость 1', date: '06.09.2022' },
      {
        image: '/assets/News2.png',
        title: 'Здесь будет новость с названием в 2 строки',
        date: '06.09.2022',
      },
      {
        image: '/assets/News3.png',
        title: 'А теперь нужна новость с очень длинным названием, ...',
        date: '06.09.2022',
      },
    ],
  ];
  useEffect(() => {
    const swiper = new Swiper('.swiperNews', {
      loop: true,
      slidesPerView: 1,
      speed: 1000,
      wrapperClass: 'swiper-wrapper-news',
      breakpoints: {
        1024: {
          slidesPerView: 1,
          slidesPerGroup: 1,
        },
      },
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination-news',
        clickable: true,
        renderBullet: function (index, className) {
          return (
            '<span class="' + className + '">' + (NewsArrs.indexOf(NewsArrs[index]) + 1) + '</span>'
          );
        },
        bulletClass: 'swiper-pagination-bullet-article',
        bulletActiveClass: 'swiper-pagination-bullet-active-article',
      },
      navigation: {
        nextEl: '.swiper-button-right',
        prevEl: '.swiper-button-left',
      },
    });
  });
  return (
    <>
      <Section>
        <div className="mx-auto text-black container">
          <div className="swiper swiperNews  mx-auto relative ">
            <div className="swiper-wrapper swiper-wrapper-news mx-auto relative">
              {NewsArrs.map((cards) => (
                <div className="swiper-slide flex flex-col justify-center mx-auto items-center gap-y-12 lg:flex-row flex-wrap">
                  {cards.map((card) => (
                    <NewsCard
                      className="w-[280px] lg:w-[370px] mx-auto self-stretch"
                      image={card.image}
                      title={card.title}
                      date={card.date}
                      key={card.image}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center gap-6 mt-5 mb-5">
            <SliderBtnLeft className="relative z-20" />
            <SliderPagination className="swiper-pagination-news mb-10" />
            <SliderBtnRight className="relative z-20" />
          </div>
          <div className="flex justify-center"></div>
        </div>
      </Section>
    </>
  );
};
const articles = () => {
  return (
    <MainLayout>
      <div className="header-bg py-12 ">
        <div className="container mx-auto text-white">
          <BreadCrumbs
            pages={[
              { name: 'Главная', path: '/' },
              { name: 'Полезная информация', path: '/articles' },
            ]}
          />
          <h2 className="text-3xl lg:text-5xl text-center lg:text-start font-days uppercase">
            НОВОСТИ И ПОЛЕЗНЫЕ СТАТЬИ
          </h2>
        </div>
      </div>
      <NewsSlider />
      <Consult
        title="Получите консультацию"
        text={
          <>
            <p>
              <span className="font-bold">по вашему объекту уже сегодня.</span> Оставьте заявку и
              наш менеджер <br /> свяжется с вами чтобы проконсультировать и рассчитать стоимость
            </p>
          </>
        }
      />
      <Subscribe />
    </MainLayout>
  );
};

export default articles;
