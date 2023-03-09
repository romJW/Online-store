import { useParams } from '@remix-run/react';
import { useEffect, useState, useRef } from 'react';
import CatalogLayout from '../../../layouts/CatalogLayout';
import SendProject from '../../../components/SendProject';
import MontageBlock from '../../../components/MontageBlock';
import Consult from '../../../components/Consult';
import Subscribe from '../../../components/Subscribe';
import BoardDescription from '../../../components/BoardDescription';
import CatalogProducts from '../../../components/CatalogProducts';
import CatalogBoard from '../../../components/CatalogBoard';
import BreadCrumbs from '../../../components/UI/BreadCrumbs';
import Slider from '../../../components/Slider';
import SliderReview from '../../../components/SliderReview';
import SliderCatalog from '../../../components/SliderCatalog';
import Btn from '../../../components/UI/Btn';
import PlayBtn from '../../../components/UI/PlayBtn';
import SliderBtn from '../../../components/UI/SliderBtn';
import SliderPagination from '../../../components/UI/SliderPagination';
import gsap from 'gsap';

export default function BoardType() {
  const params = useParams();
  const id = params.boardId;
  const BoardHeader = ({ title, size, className }) => {
    return (
      <h3 className={`font-[Days] uppercase text-3xl lg:text-5xl text-black ${className}`}>
        {title} {size}{' '}
      </h3>
    );
  };

  const BoardSize = ({ size, area, weight }) => {
    return (
      <div className="flex flex-col items-center lg:items-start">
        <p className="text-black font-medium text-sm lg:text-lg mb-2">Размер/Габариты:</p>
        <div className="flex flex-col lg:flex-row gap-2">
          <div className="rounded-[80px] flex justify-center items-center text-center bg-[#E4E4E4B2] text-[#6F6F6F] text-sm lg:text-lg px-2 h-12 duration-300 hover:bg-[#6F6F6F99]">
            {size}
          </div>
          <div className="rounded-[80px] flex justify-center items-center text-center bg-[#E4E4E4B2] text-[#6F6F6F] text-sm lg:text-lg px-2 h-12 duration-300 hover:bg-[#6F6F6F99]">
            {area}
          </div>
          <div className="rounded-[80px] flex justify-center items-center text-center bg-[#E4E4E4B2] text-[#6F6F6F] text-sm lg:text-lg px-2 h-12 duration-300 hover:bg-[#6F6F6F99]">
            {weight}
          </div>
        </div>
      </div>
    );
  };
  const BoardCounter = ({ title, state, minusEvent, plusEvent }) => {
    return (
      <div className="relative text-[#000000]">
        <p className="font-medium text-sm mb-2 font-[Montserrat]">{title}</p>
        <div className="w-[130px] h-[45px] font-[Montserrat] rounded-[40px] bg-white flex justify-center items-center text-center calcBtnShadow text-[#00000099]">
          {state} м
        </div>
        <span
          className="text-lg absolute top-[35px] left-[5px] font-bold cursor-pointer"
          onClick={minusEvent}>
          -
        </span>
        <span
          className="text-lg absolute  top-[35px] left-[110px] font-bold cursor-pointer"
          onClick={plusEvent}>
          +
        </span>
      </div>
    );
  };
  const BoardCalculator = () => {
    let [size, setSize] = useState(0);
    let [squareMeter, setSquareMeter] = useState(0);
    let numArr = size.toString().split('');
    console.log(numArr);
    const el = useRef();
    useEffect(() => {
      gsap.to(el.current, {
        innerText: `${(size * 395)} ₸`,
        duration: 0.5,
      });
    });
    return (
      <div className="w-[320px] xl:w-[370px] bg-[#FDF7F2] rounded-[20px] py-8">
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center gap-8">
            <BoardCounter
              title="Погонные метры"
              minusEvent={() => {
                if (size > 0) {
                  setSize(--size);
                  if (size % 7 == 6) setSquareMeter(--squareMeter);
                }
              }}
              plusEvent={() => {
                setSize(++size);
                if (size % 7 == 0) setSquareMeter(++squareMeter);
              }}
              state={size}
            />
            <BoardCounter
              title="Квадратные метры"
              minusEvent={() => {
                if (squareMeter > 0) {
                  setSquareMeter(--squareMeter);
                  setSize(size - 7);
                }
              }}
              plusEvent={() => {
                setSquareMeter(++squareMeter);
                setSize(size + 7);
              }}
              state={squareMeter}
            />
          </div>
          <div className="mx-auto border-2 border-white lg:w-[230px] mt-8 mb-4"></div>
          <p className="text-[#6F6F6F] text-base mb-1">1.00 пог. метр 359.00 ₸</p>
          <p className="text-black text-3xl font-bold uppercase mb-5" ref={el}>
            {(size * 395)} ₸
          </p>
          <Btn className="btn btn-primary w-[280px] lg:w-[230px] h-[65px]"> В корзину </Btn>
        </div>
      </div>
    );
  };
  const colors = [
    'FilterColor1.png',
    'FilterColor2.png',
    'FilterColor3.png',
    'FilterColor4.png',
    'FilterColor5.png',
  ];
  const AvailableColors = ({ colors }) => {
    return (
      <div className="">
        <p className="text-black font-medium text-sm lg:text-lg mb-2">Доступные цвета:</p>
        <div className="flex gap-2">
          {colors.map((color) => (
            <img
              src={`/assets/${color}`}
              className="w-12 h-12 duration-500 rounded hover:scale-110"
            />
          ))}
        </div>
      </div>
    );
  };

  const BoardText = () => {
    return (
      <div className="flex flex-col gap-4 text-base text-black w-[280px] xl:w-[370px]">
        <p>Облегченный вариант для частного применения: полы, террасы, веранды и др.</p>
        <p>Имеет две рабочие поверхности - «узкий вельвет» и «гладкая сторона».</p>
        <p>
          Брашируется только одна сторона - на усмотрение заказчика. (По умолчанию оборотная сторона
          остается гладкая, по желанию может быть дополнительно браширована - уточняйте у
          менеджеров).
        </p>
        <p>Способ укладки: шовный.</p>
        <p>Минимальный объем заказа - 1 п.м. Расстояние между лагами: 30 см.</p>
      </div>
    );
  };

  const BoardPdf = () => {
    return (
      <div className="flex flex-col justify-center text-black w-[360px] mx-auto">
        <div className="flex gap-2 items-center">
          <img src="/assets/PdfIcon.svg" />
          <p className="font-medium text-base lg:text-lg mb-2">Планируете делать монтаж сами?</p>
        </div>
        <p className="text-sm lg:text-base mb-5">
          Мы подготовили для Вас статью «5 ошибок монтажа террасной доски», которая поможет избежать
          частых ошибок и быть спокойным, что все нюансы учтены.
        </p>

        <Btn className="btn border-2 btn-neutral font-semibold text-base text-[#AC9B9C] border-[#AC9B9C] w-[330px] h-16">
          Скачать в формате Pdf (2,3 Мб)
        </Btn>
      </div>
    );
  };

  const BoardVid = ({ text }) => {
    return (
      <div className="flex flex-col w-[280px] xl:w-[370px] gap-5">
        <div className="BoardVidBg flex justify-center items-center w-[280px] rounded h-[196px] xl:w-[370px] lg:h-[230px]">
          <PlayBtn />
        </div>
        <p className="text-black font-mediun text-sm lg:text-lg font-semibold">{text}</p>
      </div>
    );
  };
  const BoardConditions = () => {
    const conditions = [
      { icon: '/assets/BoardWarranty.svg', text: 'Гарантия 3 года' },
      { icon: '/assets/BoardDelivery.svg', text: 'Доставка по всему Казахстану' },
      { icon: '/assets/BoardMoney.svg', text: 'Оплата при получении или на р/с' },
    ];
    const BoardItem = ({ icon, text }) => {
      return (
        <div className="flex gap-2">
          <img src={icon} className="w-8 h-8" />
          <p className="text-sm lg:text-lg">{text}</p>
        </div>
      );
    };
    return (
      <div>
        <div className="flex flex-col text-black gap-8">
          {conditions.map((condition) => (
            <BoardItem icon={condition.icon} text={condition.text} />
          ))}
        </div>
      </div>
    );
  };
  const BoardHelp = () => {
    return (
      <div className="bg-[#FDF7F2]  w-[320px] xl:w-[370px] py-4 lg:py-8 px-8 rounded-[20px]">
        <div className="flex flex-col justify-center items-center text-black gap-5 ">
          <div className="flex gap-2 lg:gap-4">
            <img src="/assets/BoardHelp.svg" />
            <p>
              <span className="font-bold text-base lg:text-lg">
                Получите помощь <br /> специалиста
              </span>{' '}
              расчетом стоимости вашего проекта
            </p>
          </div>
          <Btn className="btn border-2 font-semibold bg-transparent border-[#E41D24] text-[#E41D24] hover:bg-[#E41D24] hover:text-white hover:border-none w-[270px] h-16">
            Рассчитать проект
          </Btn>
        </div>
      </div>
    );
  };
  const BoardInstance = () => {
    return (
      <div className="bg-[#FDF7F2]  w-[320px] xl:w-[370px] pb-4 lg:pb-8 rounded-[20px] text-black">
        <div className="flex flex-col justify-center items-center gap-5 text-base lg:text-lg text-center">
          <img src="/assets/BoardInstance.png" />
          <p className="font-bold px-8">
            Хотите посмотреть <br />
            образцы вживую?
          </p>
          <p className="px-8">Оставьте запрос на получение комплектов в своем городе</p>
          <Btn className="btn border-2 font-semibold bg-transparent border-[#E41D24] text-[#E41D24] hover:bg-[#E41D24] hover:text-white hover:border-none w-[270px] h-16">
            Получить образец
          </Btn>
        </div>
      </div>
    );
  };

  const [sliderState, setSliderState] = useState();

  const BoardSliderTop = ({ className }) => {
    useEffect(() => {
      const swiper = new Swiper('.swiperBoardTop', {
        loop: true,
        slidesPerView: 1,
        slidesOffsetBefore: 5,
        speed: 600,
        allowTouchMove: false,
        breakpoints: {
          1024: {
            slidesPerView: 1,
          },
        },
        centeredSlides: true,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination-board',
          clickable: true,
        },
        navigation: {
          nextEl: '.btn-right',
          prevEl: '.btn-left',
        },
      });
      // swiper.slideToLoop(sliderState);
    });
    const slides = [
      { image: '/assets/Slider1.jpg' },
      { image: '/assets/Slider2.jpg' },
      { image: '/assets/Slider3.jpg' },
      { image: '/assets/Slider1.jpg' },
      { image: '/assets/Slider2.jpg' },
      { image: '/assets/Slider3.jpg' },
      { image: '/assets/Slider1.jpg' },
      { image: '/assets/Slider2.jpg' },
      { image: '/assets/Slider3.jpg' },
      { image: '/assets/Slider1.jpg' },
      { image: '/assets/Slider2.jpg' },
      { image: '/assets/Slider3.jpg' },
    ];
    return (
      <>
        <div className={`mx-auto relative text-black ${className}`}>
          <div className="swiper swiperBoardTop mx-auto relative">
            <div className="swiper-wrapper mx-auto">
              {slides.map((slide) => {
                return (
                  <div
                    key={slide.image}
                    className="swiper-slide swiper-opacity flex gap-12 items-center justify-center overflow-hidden">
                    <img src={slide.image} className="h-[300px] rounded-[20px]" alt="" />
                  </div>
                );
              })}
            </div>
          </div>
          <img
            src="/assets/chevron.svg"
            className="btn-left  absolute bottom-[-50px] left-0 rotate-180 scale-75 lg:scale-100"
          />
          <img
            src="/assets/chevron.svg"
            className="btn-right absolute bottom-[-50px] right-0 scale-75 lg:scale-100"
          />
        </div>
      </>
    );
  };
  const BoardSliderBottom = () => {
    useEffect(() => {
      const swiper = new Swiper('.swiperBoardBottom', {
        loop: true,
        slidesPerView: 3,
        slidesOffsetBefore: 5,
        speed: 600,
        allowTouchMove: false,
        centeredSlides: true,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination-board',
          clickable: true,
        },
        navigation: {
          nextEl: '.btn-right',
          prevEl: '.btn-left',
        },
      });
      // swiper.slideToLoop(sliderState);
    });
    const slides = [
      { image: '/assets/Slider1.jpg' },
      { image: '/assets/Slider2.jpg' },
      { image: '/assets/Slider3.jpg' },
      { image: '/assets/Slider1.jpg' },
      { image: '/assets/Slider2.jpg' },
      { image: '/assets/Slider3.jpg' },
      { image: '/assets/Slider1.jpg' },
      { image: '/assets/Slider2.jpg' },
      { image: '/assets/Slider3.jpg' },
      { image: '/assets/Slider1.jpg' },
      { image: '/assets/Slider2.jpg' },
      { image: '/assets/Slider3.jpg' },
    ];
    return (
      <>
        <div className="mx-auto relative text-black w-[230px] lg:w-[285px]">
          <div className="swiper swiperBoardBottom mx-auto relative ">
            <div className="swiper-wrapper mx-auto">
              {slides.map((slide, i) => {
                return (
                  <div
                    key={slide.image}
                    className="swiper-slide swiper-opacity flex gap-1 lg:gap-2 items-center justify-center overflow-hidden">
                    <div className="w-[90px] rounded-[5px] h-[70px] scale-75 lg:scale-100">
                      <img
                        src={slide.image}
                        className="rounded-[5px] w-[80px] h-[70px]"
                        alt=""
                        onClick={() => setSliderState(i)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <CatalogLayout>
        <img
          src="/assets/circles.svg"
          alt=""
          className="circles rotate-180 z-0 absolute left-[1px] top-[180px]"
        />
        <BreadCrumbs
          className="text-black pt-6 lg:pt-10 pb-6 lg:pb-2"
          pages={[
            { name: 'Главная', path: '/' },
            { name: 'каталог ДПК', path: '/catalog' },
            { name: 'террасная доска', path: '/catalog/board' },
            { name: id, path: `/catalog/board/${id}` },
          ]}
        />
        <div className="mx-auto container hidden lg:block">
          <BoardHeader title={id} size="11" className="mb-5" />
          <div className="flex gap-7">
            <div className="flex flex-col gap-12">
              <div>
                <BoardSliderTop className="w-[370px]" />
                <BoardSliderBottom />
              </div>
              <BoardVid text="Посмотрите краткий видеообзор доски 140*20 мм. Расскажем о назначении, цветах, рекомендациях" />
              <BoardVid text="Мы подготовили для Вас видео с рекомендациями по монтажу террасной доски" />
            </div>
            <div className="flex flex-col gap-12">
              <BoardSize size="2900 x 148 x 24 мм" area="0,45 м2" weight="7,8 кг / шт" />
              <AvailableColors colors={colors} />
              <BoardText />
              <BoardPdf />
            </div>
            <div className="flex flex-col gap-12">
              <BoardCalculator />
              <BoardConditions />
              <BoardHelp />
              <BoardInstance />
            </div>
          </div>
        </div>
        <div className="mx-auto container flex flex-col gap-8 items-center lg:hidden">
          <BoardHeader title={id} size="11" className="mb-5" />
          <div>
            <BoardSliderTop className="w-[280px]" />
            <BoardSliderBottom />
          </div>
          <div className="flex flex-col gap-12">
            <BoardCalculator />
            <BoardConditions />
            <BoardHelp />
            <BoardInstance />
          </div>
        </div>
        <SliderCatalog />
        <BoardDescription />
        <SliderReview />
        <MontageBlock />
        <SendProject />
        <Slider />
        <Consult
          title="Получите консультацию"
          text={
            <>
              <span className="font-bold">по вашему объекту уже сегодня. </span> Оставьте заявку и
              наш менеджер <br /> свяжется с вами чтобы проконсультировать и рассчитать стоимость{' '}
            </>
          }
        />
        <Subscribe />
      </CatalogLayout>
    </>
  );
}
