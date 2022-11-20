import { useState } from 'react';
import { Link } from "@remix-run/react";
const nav = [
  { logo: '/assets/noun-woodgrain.svg', title: 'Террасная доска', path: '/catalog/board', id: '1' },
  { logo: '/assets/noun-stairs.svg', title: 'Ступени из ДПК', path: '/', id: '2' },
  { logo: '/assets/noun-ladder.svg', title: 'Ограждения из ДПК', path: '/', id: '3' },
  { logo: '/assets/wooden-board.svg', title: 'Заборная доска из ДПК', path: '/', id: '4' },
  { logo: '/assets/noun-screw.svg', title: 'Комплектующие', path: '/', id: '5' },
];

function MenuItem({ children, className }) {
  return (
    <>
      <div className={`font-bold cursor-pointer text-white text-sm xl:text-base flex items-center lg:px-6 xl:px-12 2xl:px-14 hover:bg-[#8C1A1E]  ${className}`}>
        {children}
      </div>
    </>
  );
}
function DropItem({ text }) {
  return (
    <div className={`flex bg-white text-black p-3 gap-2.5 dropItemShadow text-sm`}>
      <a rel="nofollow" href="/">
        {text}
      </a>
    </div>
  );
}

function Bar({  }) {
    return (
        <div className="mt-1 h-[30px] border bg-[#FFFFFF66] "></div>
    );
  }

const companyItems = ['Отзывы', 'Продукция', 'Сертификаты и лицензии', 'Партнерам'];

export default function Menu(props) {
  const [isCatalogHover, setCatalogHover] = useState(false);
  return (
    <>
      <div className="header w-full h-10 sticky mb-[-40px] top-[-1px] z-50  mx-auto  flex justify-center bg-[#21212199] items-center mix-blend-normal backdrop-blur-sm hidden lg:flex">
        <div className="hidden container font-bold md:flex justify-center mx-auto text-sm xl:text-base " >
          <div
            className={`cursor-pointer dropdown dropdown-hover  ${isCatalogHover ? 'bg-[#8C1A1E]' : ''}`}
            onMouseEnter={() => setCatalogHover(true)}
            onMouseLeave={() => setCatalogHover(false)}>
            <div tabIndex={0} className={`flex gap-2 items-center py-2 h-full pl-2 pr-8`}>
              {isCatalogHover ? (
                <i className="fa-solid text-white  fa-xmark w-4"></i>
              ) : (
                <i className="fa-solid text-white fa-bars-staggered w-4"></i>
              )}
              <p className='text-white cursor-pointer'>Каталог</p>
            </div>
            <div tabIndex={0} className="dropdown-content shadow-2xl z-20 w-[230px]">
              {nav.map((option) => {
                return (
                  <>
                    <div
                      className={`flex bg-white text-black text-sm p-3 gap-2.5 dropItemShadow`}>
                      <img
                        src={option.logo}
                        dais
                        style={{
                          width: '13px',
                          height: '20px',
                        }}
                      />
                      <Link  key={option.id} rel="nofollow" to={option.path} onClick={props.onClose}>
                        {option.title}
                      </Link>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
              <Bar/>
          <MenuItem>Инструкция</MenuItem>
          <Bar/>
          <MenuItem>Монтаж</MenuItem>
          <Bar/>
          <MenuItem className={`dropdown dropdown-hover`}>
            <div tabIndex={0} className={`z-20`}>
              <p>Информация</p>
            </div>
            <div tabIndex={0} className="dropdown-content left-0 top-10 z-20 shadow w-[230px]">
              <DropItem text="Новости и статьи" />
              <DropItem text="Популярные вопросы" />
            </div>
          </MenuItem>
          <Bar/>
          <MenuItem className={`dropdown dropdown-hover `}>
            <div tabIndex={0}>
              <p>Компания</p>
            </div>
            <div tabIndex={0} className="dropdown-content left-0 top-10 shadow w-[230px]">
              {companyItems.map((item) => (
                <DropItem key={item} text={item} />
              ))}
            </div>
          </MenuItem>
          <Bar/>
          <div className="justify-center flex ">
            <MenuItem>Контакты</MenuItem>
            <MenuItem className='xl:px-8  2xl:px-10 '>
              <img src="assets/whiteBasket.svg" alt="" className=" " style={{maxWidth:'30px'}}/>
            </MenuItem>
            <MenuItem className="whitespace-nowrap xl:whitespace-normal 2xl:whitespace-nowrap ">Рассчитать стоимость</MenuItem>
          </div>
        </div>
      </div>
    </>
  );
}
