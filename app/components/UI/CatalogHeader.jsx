import React from 'react';

const header = [
    {logo:'/assets/noun-production.svg', text:'Напрямую с завода производителя'},
    {logo:'/assets/noun-warranty.svg', text:'Срок службы до 15 лет'},
    {logo:'/assets/noun-delivery.svg', text:'Доставка до объекта по стране'},
]

const HeaderItem = ({logo, text})=>{
    return(
        <div className="flex gap-4 items-center">
                <img src = {logo} className="h-6 w-6 lg:w-12 lg:h-12"/>
                <p className="text-sm lg:text-lg">{text}</p>
            </div>
    )
}

const CatalogHeader = () => {
  return (
    <div className="wood-bg text-white pb-8 pt-8 lg:pt-16 relative z-10">
      <div className="mx-auto container flex flex-col lg:flex-row lg:gap-[106px] items-center gap-6">
            {header.map(h=><HeaderItem logo={h.logo} text={h.text}/> )}
      </div>
    </div>
  );
};

export default CatalogHeader;
