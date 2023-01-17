import MontageHero from '../components/MontageHero';
import FormBlock from '../components/FormBlock';
import Subscribe from '../components/Subscribe';
import MainLayout from '../layouts/MainLayout';
import Section from '../components/UI/Section';
import { useEffect } from 'react';
import SliderBtnLeft from '../components/UI/SliderBtnLeft';
import SliderBtnRight from '../components/UI/SliderBtnRight';
import SliderPagination from '../components/UI/SliderPagination';
import CatalogCard from '../components/UI/CatalogCard';

export default function Index() {
  const MontageAdvantages = () => {
    const advantages = [
      { icon: 'Calculator.svg', text: 'Рассчитаем количество материалов и объем работ' },
      { icon: 'Drill.svg', text: 'Проведем замер с учетом всех нюансов и деталей' },
      { icon: 'MeasureTape.svg', text: 'Проведем замер с учетом всех нюансов и деталей' },
      { icon: 'Location.svg', text: 'Работаем во всех крупных городах РФ' },
    ];
    const AdvantageCard = ({ icon, text }) => {
      return (
        <div className="w-[290px] relative z-10 self-stretch  py-5 px-2 rounded-[10px] montageCardShadow ">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-2 lg:gap-6">
            <img src={`/assets/${icon}`} className="h-[70px] w-[70px] scale-75 lg:scale-100" />
            <p className="font-medium text-base lg:text-xl text-center text-black">{text}</p>
            </div>
          </div>
        </div>
      );
    };
    return (
      <Section>
        <div className="mx-auto container relative z-10">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-2 justify-center items-center">
            {advantages.map((advantage) => (
              <AdvantageCard icon={advantage.icon} text={advantage.text} />
            ))}
          </div>
        </div>
      </Section>
    );
  };

  const MontagePriviliges = () => {
    const priviliges = [
      { icon: 'PrivelegeWood.svg', text: 'Надежное современное  покрытие, без дефектов' },
      { icon: 'PrivelegeMechanism.svg', text: 'Соблюдение правил и технологии монтажа' },
      { icon: 'PrivelegeTape.svg', text: 'Большой опыт работы с ДПК. Более 5 лет' },
      { icon: 'PrivelegeWallet.svg', text: 'Оптимизация расходов на материалы' },
    ];
    const PrivilegeCard = ({ icon, text }) => {
      return (
        <div className="relative z-10">
          <div className="flex flex-col justify-center items-center gap-5 lg:max-w-[270px]">
            <img src={`/assets/${icon}`} className="scale-75 lg:scale-100" />
            <p className="font-medium text-base lg:text-xl text-center text-black">{text}</p>
          </div>
        </div>
      );
    };
    return (
      <div className="mx-auto bg-[#FDF7F2] rounded-[60px] py-12 px-16 max-w-[320px] lg:max-w-[1310px] mb-[-50px] relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 justify-center items-center ">
          {priviliges.map((privilige) => (
            <PrivilegeCard icon={privilige.icon} text={privilige.text} />
          ))}
        </div>
      </div>
    );
  };
  const MontageSliderCard = ({ image, title, city, size, className, onClick, path, text }) => {
    return (
      <>
        <div
          className={`flex flex-col CatalogCardBg rounded-[10px] pb-4  text-black ${className}`}
          onClick={onClick}>
          <div className="flex flex-col justify-center mx-auto gap-2 text-sm lg:text-xl text-black">
            <img src={`/assets/${image}`} className="mb-3" />
            <div className="px-4">
              <p className="font-semibold text-lg lg:text-xl mb-3">{title}</p>
              <div className="flex gap-8 lg:gap-10 text-[#286F2B] text-sm lg:text-base mb-4">
                <div className="flex gap-2">
                  <img src="/assets/place.svg" alt="" />
                  <p>{city}</p>
                </div>
                <div className="flex gap-2">
                  <img src="/assets/expand.svg" alt="" />
                  <p>{size}м2</p>
                </div>
              </div>
              <p className="text-sm lg:text-lg mb-7">{text}</p>

              <a href={path} className="text-sm lg:text-lg underline">
                Cмотреть полностью
              </a>
            </div>
          </div>
        </div>
      </>
    );
  };
  const MontagePriceBlock = () => {
    return (
      <div className="bg-footer pt-[150px] pb-[100px] px-2">
        <div className="mx-auto text-white flex flex-col items-center lg:items-start container">
          <h3 className="text-3xl lg:text-5xl font-[Days] mb-8">
            Стоимость монтажа <br /> террасной доски
          </h3>
          <div className="flex flex-col lg:flex-row items-center gap-3 mb-12">
            <div className="lg:w-[590px] text-xl text-[#FFFFFFB2] flex flex-col gap-8">
              <p>
                Мы всегда даем честные и рыночные цены на услуги монтажа террасной доски и других
                изделий из ДПК. В большинстве случаем, стоимость рассчитывается за 1 м². Точная цена
                формируется после этапа замера.
              </p>
              <p>
                Наверняка у вас есть дополнительные вопросы, наш руководитель отдела монтажа
                предоставит нужную и актуальную информацию об оказываемых услугах и расценках.{' '}
              </p>
              <p>Отправьте заявку для связи прямо сейчас. Вам перезвонят и дадут консультацию. </p>
            </div>
            <img src="assets/MontagePriceBlock.png" className="lg:h-[300px] " />
          </div>
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-[185px] text-sm lg:text-lg  text-[#FDF7F2]">
            <div className="flex items-center gap-4">
              <img src="/assets/MontageWarranty.svg" className="w-8 h-8 lg:w-12 lg:h-12" />
              <p>
                Услуги бригад от компании «WOODGRAND» <br /> соответствуют всем стандартам
              </p>
            </div>
            <div className="flex items-center gap-4">
              <img src="/assets/MontageIcon.svg" className="w-8 h-8 lg:w-12 lg:h-12" />
              <p>
                Мы готовы провести замер и рассчитать <br /> стоимость для объектов, любой площади
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const MontageSlider = () => {
    const catalogCards = [
      {
        image: 'sliderPhoto1.png',
        title: 'Настил из доски для бассейна (Антрацит)',
        city: 'Алматы',
        size: '30',
        path: '/catalog',
        text: 'Реализовали эстетически слаженный проект, придомовая терраса из доски 150х22 мм и выставили по перимет...',
      },
      {
        image: 'SliderPhoto2.png',
        title: 'Настил из доски для бассейна (Антрацит)',
        city: 'Алматы',
        size: '30',
        path: '/catalog',
        text: 'Реализовали эстетически слаженный проект, придомовая терраса из доски 150х22 мм и выставили по перимет...',
      },
      {
        image: 'SliderPhoto3.png',
        title: 'Настил из доски для бассейна (Антрацит)',
        city: 'Алматы',
        size: '30',
        path: '/catalog',
        text: 'Реализовали эстетически слаженный проект, придомовая терраса из доски 150х22 мм и выставили по перимет...',
      },
    ];
    useEffect(() => {
      const swiper = new Swiper('.swiperMontage', {
        loop: true,
        slidesPerView: 1,
        speed: 1000,
        wrapperClass: 'swiper-wrapper-montage',
        breakpoints: {
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        },
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination-montage',
          clickable: true,
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
          <div className="mx-auto mt-20 text-black container">
            <h2 className="text-center text-3xl lg:text-5xl font-[Days] uppercase mb-10">
              Объекты наших клиентов
            </h2>
            <p className="text-center text-2xl lg:text-3xl mb-10">
              У нас вы можете заказать материал и последующий монтаж «под ключ»
            </p>
            <div className="swiper swiperMontage  mx-auto mb-10 relative ">
              <div className="swiper-wrapper swiper-wrapper-montage py-20  mx-auto relative">
                {catalogCards.map((card) => {
                  return (
                    <div
                      key={card.image}
                      className="swiper-slide  flex items-center justify-center lg:w-[370px]">
                      <MontageSliderCard
                        className="w-[280px] lg:w-[370px]"
                        image={card.image}
                        title={card.title}
                        city={card.city}
                        size={card.size}
                        path={card.path}
                        text={card.text}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <SliderPagination className="swiper-pagination-montage " />
            <div className="flex justify-center gap-6 mt-5 mb-5">
              <SliderBtnLeft className="relative xl:top-[-420px] xl:left-[-580px]  z-20" />
              <SliderBtnRight className="relative xl:top-[-420px] xl:right-[-580px] z-20" />
            </div>
            <div className="flex justify-center"></div>
          </div>
        </Section>
      </>
    );
  };

  return (
    <>
      <MainLayout>
        <MontageHero />
        <div className="relative">
          <MontageAdvantages />
          <img src="/assets/circles.svg" alt="" className="circles z-0 absolute right-[1px] top-[30px]" />
        </div>
        <MontageSlider />
        <MontagePriviliges />
        <MontagePriceBlock />
        <FormBlock />
        <Subscribe />
      </MainLayout>
    </>
  );
}
