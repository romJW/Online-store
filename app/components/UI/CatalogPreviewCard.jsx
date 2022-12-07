import { Link } from "@remix-run/react";
import Btn from './Btn'
export const CatalogPreviewCard = ({ image, title, colors, path }) => {
  return (
    <>
      <div className="w-[270px] lg:w-[370px] flex self-stretch py-6 px-4 text-black rounded-[10px] CatalogCardBg ">
        <div className="card-content grow flex flex-col justify-between items-center gap-2 text-center">
          <div className='flex flex-col items-center'>
          <img src={`/assets/${image}`} alt="" className=''/>
          <h3 className="font-bold text-lg lg:text-3xl ">{title}</h3>
          </div>
          {colors && (
            <>
              <div>
                <p className='text-sm'>Доступные цвета</p>
              </div>
            </>
          )}
          <div className="flex">
          {colors && colors.map(color=><img src={`/assets/${color}`} alt='' className='w-10 h-10 hover:scale-110'/>)}
          </div>
          <Link to={path}><Btn className='btn uppercase tracking-wider text-base font-semibold bg-transparent border-[3px] border-[#AC9B9C] text-[#AC9B9C] w-full lg:w-[220px] h-[60px] mt-4 hover:bg-[#AC9B9C] hover:border-none hover:text-white hover:shadow-2xl'>Подробнее</Btn> </Link>
        </div>
      </div>
    </>
  );
};
export default CatalogPreviewCard;
