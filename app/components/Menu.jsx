import { useState } from 'react';
import { Link } from "@remix-run/react";
const nav = [
  { logo: '/assets/noun-woodgrain.svg', title: 'Террасная доска', path: '/catalog/board', id: '1' },
  { logo: '/assets/noun-stairs.svg', title: 'Ступени из ДПК', path: '/catalog/stairs', id: '2' },
  { logo: '/assets/noun-ladder.svg', title: 'Ограждения из ДПК', path: '/catalog', id: '3' },
  { logo: '/assets/wooden-board.svg', title: 'Заборная доска из ДПК', path: '/catalog', id: '4' },
  { logo: '/assets/noun-screw.svg', title: 'Комплектующие', path: '/catalog', id: '5' },
];

function MenuItem({ children, className }) {
  return (
    <>
      <div className={`font-bold cursor-pointer text-white text-sm xl:text-base flex items-center lg:px-6 xl:px-8 hover:bg-[#8C1A1E]  ${className}`}>
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

const companyItems = [
  {name:'Отзывы', path:'/reviews'}, {name:'Продукция',path:'/about/products'}, {name:'Сертификаты и лицензии',path:'/license'}, {name:'Партнерам',path:'/partners'}];

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
              <p className='text-white cursor-pointer'><Link to="/catalog">Каталог</Link></p>
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
          <MenuItem><Link to=''>Инструкция</Link></MenuItem>
          <Bar/>
          <MenuItem><Link to='/montage'>Монтаж</Link></MenuItem>
          <Bar/>
          <MenuItem className={`dropdown dropdown-hover`}>
            <div tabIndex={0} className={`z-20`}>
              <p>Информация</p>
            </div>
            <div tabIndex={0} className="dropdown-content left-0 top-10 z-20 shadow w-[230px]">
            <Link to='/articles'><DropItem text="Новости и статьи" /></Link>
            <Link to='/questions'><DropItem text="Популярные вопросы" /></Link>
            </div>
          </MenuItem>
          <Bar/>
          <MenuItem className={`dropdown dropdown-hover `}>
            <div tabIndex={0}>
              <p>Компания</p>
            </div>
            <div tabIndex={0} className="dropdown-content left-0 top-10 shadow w-[230px]">
              {companyItems.map((item) => (
                <Link to={item.path}><DropItem key={item.name} text={item.name} /></Link>
              ))}
            </div>
          </MenuItem>
          <Bar/>
          <div className="justify-center flex ">
            <MenuItem><Link to='/contacts'>Контакты</Link></MenuItem>
            <MenuItem className='xl:px-8  2xl:px-10 '>
              <img src="/assets/whiteBasket.svg" alt="" className=" " style={{maxWidth:'30px'}}/>
            </MenuItem>
            <MenuItem className="whitespace-nowrap  ">Рассчитать стоимость</MenuItem>
          </div>
        </div>
      </div>
    </>
  );
}
