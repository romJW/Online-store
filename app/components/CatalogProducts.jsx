import CatalogPreviewCard from './UI/CatalogPreviewCard';
import Section from './UI/Section';
const cards = [
  {
    image: 'CatalogPreview.png',
    title: 'Террасная доска',
    colors: [
      'catalogColor.png',
      'catalogColor2.png',
      'catalogColor3.png',
      'catalogColor4.png',
      'catalogColor5.png',
      'catalogColor6.png',
    ],
    path:'/catalog/board'
  },
  {
    image: 'CatalogPreview2.png',
    title: 'Ступени из ДПК',
    colors: [
      'catalogColor.png',
      'catalogColor2.png',
      'catalogColor3.png',
      'catalogColor4.png',
      'catalogColor5.png',
      'catalogColor6.png',
    ],
    path:'/catalog/stairs'
  },
  {
    image: 'CatalogPreview3.png',
    title: 'Ограждения из ДПК',
    colors: [
      'catalogColor.png',
      'catalogColor2.png',
      'catalogColor3.png',
      'catalogColor4.png',
      'catalogColor5.png',
      'catalogColor6.png',
    ],
    path:'/catalog/hedge'
  },
  {
    image: 'CatalogPreview4.png',
    title: 'Заборная доска',
    colors: [
      'catalogColor.png',
      'catalogColor2.png',
      'catalogColor3.png',
      'catalogColor4.png',
      'catalogColor5.png',
      'catalogColor6.png',
    ],
    path:'/catalog/hedgeboard'
  },
  { image: 'CatalogPreview5.png', title: 'Комплектующие', colors: '', path:'/catalog/details' },
];
const CatalogProducts = () => {
  return (
    <>
      <Section>
        <div className="mx-auto container text-black flex flex-col items-center sm:items-start justify-center relative z-10">
          <h3 className="font-[Days] uppercase text-black text-3xl lg:text-5xl mb-12 ">
            Каталог ДПК
          </h3>
          <div className="flex flex-col">
            <div className="container grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 lg:gap-12">
              {cards.map((card) => (
                <CatalogPreviewCard path={card.path} image={card.image} title={card.title} colors={card.colors} />
              ))}
            </div>
          </div>
        </div>
        <img src='/assets/circles.svg' className='absolute left-0 top-1/4 rotate-180 z-0' />
      </Section>
    </>
  );
};

export default CatalogProducts;
