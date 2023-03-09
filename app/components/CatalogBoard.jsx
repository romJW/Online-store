import {useContext} from 'react';
import { CatalogFilter, CatalogMobileFilter } from './CatalogFilter';
import CatalogCard from './UI/CatalogCard';
import Section from './UI/Section';
import {BasketArrContext } from '../contexts/context';
const tags = [
  'Террасная доска пустотелая',
  'Террасная доска полнотелая',
  'Террасная доска пустотелая',
  'Террасная доска полнотелая',
  'Террасная доска пустотелая',
  'Террасная доска полнотелая',
];
const catalogCards = [
  {
    id: 1,
    amount:0,
    image: 'CatalogBoard.png',
    title: 'Террасная доска',
    colors: [
      'catalogColor.png',
      'catalogColor2.png',
      'catalogColor3.png',
      'catalogColor4.png',
      'catalogColor5.png',
      'catalogColor6.png',
    ],
    size: '301х31x31 мм',
    price: '359.00',
    fullPrice: '2560',
  },
  {
    id: 2,
    amount:0,
    image: 'CatalogBoard.png',
    title: 'Террасная доска',
    colors: [
      'catalogColor.png',
      'catalogColor2.png',
      'catalogColor3.png',
      'catalogColor4.png',
      'catalogColor5.png',
      'catalogColor6.png',
    ],
    size: '302х32x32 мм',
    price: '359.00',
    fullPrice: '2561',
  },
  {
    id: 3,
    amount:0,
    image: 'CatalogBoard.png',
    title: 'Террасная доска',
    colors: [
      'catalogColor.png',
      'catalogColor2.png',
      'catalogColor3.png',
      'catalogColor4.png',
      'catalogColor5.png',
      'catalogColor6.png',
    ],
    size: '303х33x33 мм',
    price: '359.00',
    fullPrice: '2562',
  },
  {
    id: 4,
    amount:0,
    image: 'CatalogBoard.png',
    title: 'Террасная доска',
    colors: [
      'catalogColor.png',
      'catalogColor2.png',
      'catalogColor3.png',
      'catalogColor4.png',
      'catalogColor5.png',
      'catalogColor6.png',
    ],
    size: '304х34x34 мм',
    price: '359.00',
    fullPrice: '2563',
  },
  {
    id: 5,
    amount:0,
    image: 'CatalogBoard.png',
    title: 'Террасная доска',
    colors: [
      'catalogColor.png',
      'catalogColor2.png',
      'catalogColor3.png',
      'catalogColor4.png',
      'catalogColor5.png',
      'catalogColor6.png',
    ],
    size: '305х35x35 мм',
    price: '359.00',
    fullPrice: '2564',
  },
  {
    id: 6,
    amount:0,
    image: 'CatalogBoard.png',
    title: 'Террасная доска',
    colors: [
      'catalogColor.png',
      'catalogColor2.png',
      'catalogColor3.png',
      'catalogColor4.png',
      'catalogColor5.png',
      'catalogColor6.png',
    ],
    size: '306х36x36 мм',
    price: '359.00',
    fullPrice: '2565',
  },
  {
    id: 7,
    amount:0,
    image: 'CatalogBoard.png',
    title: 'Террасная доска',
    colors: [
      'catalogColor.png',
      'catalogColor2.png',
      'catalogColor3.png',
      'catalogColor4.png',
      'catalogColor5.png',
      'catalogColor6.png',
    ],
    size: '307х37x37 мм',
    price: '359.00',
    fullPrice: '2566',
  },
];

const BoardFilteredItems = {
  FilteredItemColor: [
    { col: 'FilterColor1.png', id: 1 },
    { col: 'FilterColor2.png', id: 2 },
    { col: 'FilterColor3.png', id: 3 },
    { col: 'FilterColor4.png', id: 4 },
    { col: 'FilterColor5.png', id: 5 },
    { col: 'FilterColor6.png', id: 6 },
  ],
  FilteredtemAppointment: [
    'Терраса',
    'Веранда',
    'Беседка',
    'Дом и дача',
    'Пол',
    'Бассейн',
    'Улица',
    'Грядки',
    'Баня',
  ],
  FilteredItemBoard: ['Пустотелая', 'С тиснением', 'Полнотелая'],
  FilteredItemCover: ['Узкий вельвет', 'Широкий вельвет'],
};

const CatalogBoard = () => {
  const { BasketArr, SetBasketArr } = useContext(BasketArrContext);
  const addToBasket = (item) => {
    // localStorage.getItem('basketArr');
    if (BasketArr.some((cartItem) => cartItem.id === item.id)) {
      SetBasketArr((BasketArr) =>
      BasketArr.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
              }
            : cartItem
        )
      );
      return;
    }
    SetBasketArr((BasketArr) => [
      ...BasketArr,
      { ...item, amount:item.amount+1 }
    ]);
    //  localStorage.setItem('basketArr', JSON.stringify(BasketArr));

  };
  

  return (
    <>
      <div className="mx-auto container text-black px-6 xs:px-0 relative z-10">
        <h3 className="font-days uppercase text-3xl lg:text-5xl mb-14">Террасная доска</h3>
        <div className="">
          <CatalogFilter
            className="float-left mr-8"
            FilteredItemColor={BoardFilteredItems.FilteredItemColor}
            FilteredtemAppointment={BoardFilteredItems.FilteredtemAppointment}
            FilteredItemBoard={BoardFilteredItems.FilteredItemBoard}
            FilteredItemCover={BoardFilteredItems.FilteredItemCover}
            key={BoardFilteredItems.FilteredItemColor.id}
          />
          <div className="flex flex-col lg:gap-14">
            <div className="flex flex-col justify-center items-center max-w-[770px]">
              <img src="/assets/BoardGallery.png" alt="" className="rounded-[10px]" />
              <div className="text-sm lg:text-xl text-black mt-4">
                <p className="mb-6">
                  Террасная доска ДПК – это прогрессивный материал, который лучше-всего подходит для
                  обустройства веранд, террас, настилов, грядок, тротуаров, пирсов, бассейнов,
                  наружной обшивки строений, и даже балконов и лоджий.
                </p>
                <p>
                  Этот материал красив, надежен, долговечен, прост в монтаже и комфортен в
                  использовании. Он не требует финансовых вложений для поддержания внешнего вида и
                  технических характеристик. Наша террасная доска ДПК, купить которую можно онлайн,
                  оставив заявку на бесплатный расчет стоимости, отличается доступной ценой вкупе с
                  отменным качеством.
                </p>
              </div>
            </div>
            <CatalogMobileFilter
              FilteredItemColor={BoardFilteredItems.FilteredItemColor}
              FilteredtemAppointment={BoardFilteredItems.FilteredtemAppointment}
              FilteredItemBoard={BoardFilteredItems.FilteredItemBoard}
              FilteredItemCover={BoardFilteredItems.FilteredItemCover}
            />
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-4">
              {catalogCards.map((card) => (
                <CatalogCard
                  image={card.image}
                  title={card.title}
                  colors={card.colors}
                  size={card.size}
                  price={card.price}
                  fullPrice={card.fullPrice}
                  addToBasket={()=>{addToBasket(card)}}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/circles.svg" className="circles absolute left-0 top-1/4 rotate-180 z-0" />
      <img src="/assets/circles.svg" className="circles absolute right-0 top-[155%]  z-0" />
      <Section>
    </Section>
    </>
  );
};

export default CatalogBoard;
