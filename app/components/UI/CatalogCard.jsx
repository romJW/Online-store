import React from 'react';
import Btn from './Btn'
export const CatalogCard = ({ image, title, colors, size, price, fullPrice }) => {
  return (
    <>
      <div className="w-[320px] lg:w-[370px] py-6 px-4 text-black rounded-[10px] CatalogCardBg">
        <div className="card-content flex flex-col justify-center items-center gap-2 text-center">
          <img src={`/assets/${image}`} alt="" />
          <h3 className="font-bold text-lg lg:text-3xl">{title}</h3>
          <div className='text-sm'>
          <p className='mb-2'>Размер</p>
          <p><i class="fa-sharp fa-solid fa-up-right-and-down-left-from-center"></i> {size}</p>
          </div>
          {colors && (
            <>
              <div>
                <p className='text-sm'>Доступные цвета</p>
              </div>
            </>
          )}
          <div className="flex ">
          {colors && colors.map(color=><img src={`/assets/${color}`} alt='' className='w-10 h-10 duration-500 hover:scale-110'/>)}
          </div>
          <div className='text-xl'>
          <p className=''><span className="font-bold">{price} ₸</span> пог. метр</p>
          <p className=''><span className="font-bold">{fullPrice} ₸</span> м²</p>
          </div>
          <div className="flex flex-col w-full lg:flex-row gap-2">
          <Btn className='btn uppercase tracking-wider text-base font-semibold bg-transparent border-[3px] border-[#AC9B9C] text-[#AC9B9C] w-full lg:w-[160px] h-[60px] mt-4 hover:bg-[#AC9B9C] hover:text-white hover:shadow-2xl'>Подробнее</Btn>
          <Btn className='btn uppercase tracking-wider text-base font-semibold bg-transparent border-[3px] border-[#E41D24] text-[#E41D24] w-full lg:w-[160px] h-[60px] mt-4 hover:bg-[#E41D24] hover:text-white hover:shadow-2xl'>В корзину</Btn>
          </div>
          
        </div>
      </div>
    </>
  );
};
export default CatalogCard;
