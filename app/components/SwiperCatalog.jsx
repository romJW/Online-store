import SliderBtnLeft from './UI/SliderBtnLeft';
import SliderBtnRight from './UI/SliderBtnRight';
import SliderPagination from './UI/SliderPagination';
import ReviewSwipeCard from './UI/ReviewSwipeCard';
import Btn from './UI/Btn';
import PlayBtn from './UI/PlayBtn';
import Section from '../components/UI/Section.jsx';
import CatalogCard from '../components/UI/CatalogCard'
export default function Slider() {
    const catalogCards = [
        {image:'CatalogBoard.png', title:'Террасная доска', colors:['catalogColor.png','catalogColor2.png','catalogColor3.png','catalogColor4.png','catalogColor5.png','catalogColor6.png'], size:'300х30x30 мм', price:'359', fullPrice:'2564' },
        {image:'CatalogBoard.png', title:'Террасная доска', colors:['catalogColor.png','catalogColor2.png','catalogColor3.png','catalogColor4.png','catalogColor5.png','catalogColor6.png'], size:'300х30x30 мм', price:'359', fullPrice:'2564' },
        {image:'CatalogBoard.png', title:'Террасная доска', colors:['catalogColor.png','catalogColor2.png','catalogColor3.png','catalogColor4.png','catalogColor5.png','catalogColor6.png'], size:'300х30x30 мм', price:'359', fullPrice:'2564' },
        {image:'CatalogBoard.png', title:'Террасная доска', colors:['catalogColor.png','catalogColor2.png','catalogColor3.png','catalogColor4.png','catalogColor5.png','catalogColor6.png'], size:'300х30x30 мм', price:'359', fullPrice:'2564' },
        {image:'CatalogBoard.png', title:'Террасная доска', colors:['catalogColor.png','catalogColor2.png','catalogColor3.png','catalogColor4.png','catalogColor5.png','catalogColor6.png'], size:'300х30x30 мм', price:'359', fullPrice:'2564' },
        {image:'CatalogBoard.png', title:'Террасная доска', colors:['catalogColor.png','catalogColor2.png','catalogColor3.png','catalogColor4.png','catalogColor5.png','catalogColor6.png'], size:'300х30x30 мм', price:'359', fullPrice:'2564' },
        {image:'CatalogBoard.png', title:'Террасная доска', colors:['catalogColor.png','catalogColor2.png','catalogColor3.png','catalogColor4.png','catalogColor5.png','catalogColor6.png'], size:'300х30x30 мм', price:'359', fullPrice:'2564' },
        {image:'CatalogBoard.png', title:'Террасная доска', colors:['catalogColor.png','catalogColor2.png','catalogColor3.png','catalogColor4.png','catalogColor5.png','catalogColor6.png'], size:'300х30x30 мм', price:'359', fullPrice:'2564' },
        {image:'CatalogBoard.png', title:'Террасная доска', colors:['catalogColor.png','catalogColor2.png','catalogColor3.png','catalogColor4.png','catalogColor5.png','catalogColor6.png'], size:'300х30x30 мм', price:'359', fullPrice:'2564' },
      ]
  return (
    <>
    <Section>
      <div className="mx-auto mt-20 text-black ">
        <h2 className="text-center text-5xl font-[Days] uppercase mb-10">с этим товаром покупают</h2>
        <div className="swiper swiperCatalog  mx-auto mb-10 relative ">
          <div className="swiper-wrapper swiper-wrapper-catalog py-20 mx-auto relative">
            {catalogCards.map((card) => {
              return (
                <div key={card.price} className="swiper-slide  flex items-center justify-center">
                  <CatalogCard
                    key = {card.price}
                    image = {card.image}
                    title = {card.title}
                    colors = {card.colors}
                    size = {card.size}
                    price = {card.price}
                    fullPrice ={card.fullPrice}
                  />
                </div>
              );
            })}
             
          </div>
         
        </div>

        <SliderPagination className="swiper-pagination-catalog"/>
        <div className="flex justify-center gap-6 mt-5 mb-5">
          <SliderBtnLeft className="relative btn-board-left xl:top-[-400px] xl:left-[-570px] z-20" />
          <SliderBtnRight className="relative btn-board-right  xl:top-[-400px] xl:right-[-570px] z-20" />
        </div>
        <div className="flex justify-center">
        </div>
      </div>
      </Section>
    </>
  );
}
