import React from 'react';
import { CatalogFilter, CatalogMobileFilter } from './CatalogFilter';
import CatalogCard from './UI/CatalogCard';
import Section from './UI/Section';
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
    size: '300х30x30 мм',
    price: '359',
    fullPrice: '2564',
  },
  {
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
    size: '300х30x30 мм',
    price: '359',
    fullPrice: '2564',
  },
  {
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
    size: '300х30x30 мм',
    price: '359',
    fullPrice: '2564',
  },
  {
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
    size: '300х30x30 мм',
    price: '359',
    fullPrice: '2564',
  },
  {
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
    size: '300х30x30 мм',
    price: '359',
    fullPrice: '2564',
  },
  {
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
    size: '300х30x30 мм',
    price: '359',
    fullPrice: '2564',
  },
  {
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
    size: '300х30x30 мм',
    price: '359',
    fullPrice: '2564',
  },
];
const StairsFilteredItems = {
  FilteredItemColor: [
    { col: 'FilterColor1.png', id: 1 },
    { col: 'FilterColor2.png', id: 2 },
    { col: 'FilterColor3.png', id: 3 },
    { col: 'FilterColor4.png', id: 4 },
    { col: 'FilterColor5.png', id: 5 },
    { col: 'FilterColor6.png', id: 6 },
  ],
  FilteredtemAppointment: [
    'Ступени для крыльца',
    'Лестница',
    'Бассейн',
    'Терраса',
    'Веранда',
    'Улица',
  ],
  FilteredItemCover: ['Узкий вельвет'],
};

const CatalogBoard = () => {
  return (
    <>
      <div className="mx-auto container text-black px-6 xs:px-0 relative z-10">
        <h3 className="font-[Days] uppercase text-3xl lg:text-5xl mb-14">Ступени из ДПК</h3>
        <div className="">
          <CatalogFilter
            className="float-left mr-8"
            FilteredItemColor={StairsFilteredItems.FilteredItemColor}
            FilteredtemAppointment={StairsFilteredItems.FilteredtemAppointment}
            FilteredItemBoard={StairsFilteredItems.FilteredItemBoard}
            FilteredItemCover={StairsFilteredItems.FilteredItemCover}
          />
          <div className="flex flex-col lg:gap-14">
            <CatalogMobileFilter
              FilteredItemColor={StairsFilteredItems.FilteredItemColor}
              FilteredtemAppointment={StairsFilteredItems.FilteredtemAppointment}
              FilteredItemBoard={StairsFilteredItems.FilteredItemBoard}
              FilteredItemCover={StairsFilteredItems.FilteredItemCover}
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
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/circles.svg" className="circles absolute left-0 top-[18%] rotate-180 z-0" />
      <Section></Section>
    </>
  );
};

export default CatalogBoard;
