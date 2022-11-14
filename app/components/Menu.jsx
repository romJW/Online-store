import { useState } from 'react';

const nav = [
  { logo: 'assets/noun-woodgrain.svg', title: 'Террасная доска', path: '/', id: '1' },
  { logo: 'assets/noun-stairs.svg', title: 'Ступени из ДПК', path: '/', id: '2' },
  { logo: 'assets/noun-ladder.svg', title: 'Ограждения из ДПК', path: '/', id: '3' },
  { logo: 'assets/wooden-board.svg', title: 'Заборная доска из ДПК', path: '/', id: '4' },
  { logo: 'assets/noun-screw.svg', title: 'Комплектующие', path: '/', id: '5' },
];

function MenuItem({ children, className }) {
  return (
    <>
      <div className={`${className} text-sm xl:text-base flex items-center lg:px-6 xl:px-12 2xl:px-14  hover:bg-[#8C1A1E]  whitespace-nowrap`}>
        {children}
      </div>
    </>
  );
}
function DropItem({ text }) {
  return (
    <div className={`flex bg-white text-black p-3 gap-2.5 border shadow-2xl text-sm`}>
      <a rel="nofollow" href="/">
        {text}
      </a>
    </div>
  );
}
const companyItems = ['Отзывы', 'Продукция', 'Сертификаты и лицензии', 'Партнерам'];

export default function Menu(props) {
  const [isCatalogHover, setCatalogHover] = useState(false);
  return (
    <>
      <div className="header mb-[-40px] relative z-20 w-screen mx-auto  flex justify-center bg-[#21212199] items-center mix-blend-normal backdrop-blur-sm hidden lg:flex">
        <div className="hidden container font-bold md:flex justify-center divide-x  mx-auto text-sm xl:text-base">
          <div
            className={` dropdown dropdown-hover  ${isCatalogHover ? 'bg-[#8C1A1E]' : ''}`}
            onMouseEnter={() => setCatalogHover(true)}
            onMouseLeave={() => setCatalogHover(false)}>
            <div tabIndex={0} className={`flex gap-2 items-center py-2 h-full pl-2 pr-6 `}>
              {isCatalogHover ? (
                <i className="fa-solid fa-xmark w-4"></i>
              ) : (
                <i className="fa-solid fa-bars-staggered w-4"></i>
              )}
              <p>Каталог</p>
            </div>
            <div tabIndex={0} className="dropdown-content shadow-2xl z-20 w-[230px]">
              {nav.map((option) => {
                return (
                  <>
                    <div
                      className={`flex bg-white text-black text-sm p-3 gap-2.5 border shadow-2xl}`}>
                      <img
                        src={option.logo}
                        dais
                        style={{
                          width: '13px',
                          height: '20px',
                        }}
                      />
                      <a key={option.id} rel="nofollow" href={option.path} onClick={props.onClose}>
                        {option.title}
                      </a>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <MenuItem>Инструкция</MenuItem>
          <MenuItem>Монтаж</MenuItem>
          <MenuItem className={`dropdown dropdown-hover`}>
            <div tabIndex={0} className={`pr-8 z-20`}>
              <p>Информация</p>
            </div>
            <div tabIndex={0} className="dropdown-content left-0 top-10 z-20 shadow w-[230px]">
              <DropItem text="Новости и статьи" />
              <DropItem text="Популярные вопросы" />
            </div>
          </MenuItem>
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
          <div className="items-center justify-center flex ">
            <MenuItem>Контакты</MenuItem>
            <MenuItem>
              <img src="assets/whiteBasket.svg" alt="" className="mx-3 flex" />
            </MenuItem>
            <MenuItem>Рассчитать стоимость</MenuItem>
          </div>
        </div>
      </div>
    </>
  );
}
