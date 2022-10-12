import Btn from './UI/Btn';
import Input from './UI/Input';
import { MobileMenuContext } from '../contexts/MobileMenu.js';
const socials = [
  { logo: 'fa-brands fa-youtube fa-xl hover:scale-110', path: '/', id: '1', color: '#FF0000' },
  { logo: 'fa-brands fa-instagram fa-xl hover:scale-110', path: '/', id: '2', color: '#8a3ab9	' },
  { logo: 'fa-brands fa-vk fa-xl hover:scale-110', path: '/', id: '3', color: '#4C75A3' },
  {
    logo: 'fa-brands fa-whatsapp-square fa-xl hover:scale-110',
    path: '/',
    id: '4',
    color: '#25d366',
  },
  { logo: 'fa-brands fa-telegram fa-xl hover:scale-110', path: '/', id: '5', color: '#2AABEE' },
];

const mobileNav = [
  { logo: 'assets/noun-woodgrain.svg', title: 'Террасная доска', path: '/', id: '1' },
  { logo: 'assets/noun-stairs.svg', title: 'Ступени из ДПК', path: '/', id: '2' },
  { logo: 'assets/noun-ladder.svg', title: 'Ограждения из ДПК', path: '/', id: '3' },
  { logo: 'assets/wooden-board.svg', title: 'Заборная доска из ДПК', path: '/', id: '4' },
  { logo: 'assets/noun-screw.svg', title: 'Комплектующие', path: '/', id: '5' },
];

function MobileMenu(props) {
  return (
    <div className="header-mobile container mx-auto py-5 flex flex-col justify-center align-center gap-5 font-medium text-sm text-center bg-white inset-0 object-cover w-screen text-black">
      <div>
        <h3 className="font-semibold text-base">Каталог</h3>
        <div className="w-16 border border-black mx-auto"></div>
      </div>
      <div className="header-mobile__nav flex flex-col justify-start gap-2 align-start text-start ml-3">
        {props.nav.map((option) => {
          return (
            <>
              <div className="flex gap-2.5">
                <img
                  src={option.logo}
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
      <div>
        <h3 className="font-semibold text-base">Информация</h3>
        <div className="w-16 border border-black mx-auto"></div>
      </div>
      <div className="header-mobile__nav flex flex-col gap-2 justify-start align-start text-base text-start ml-3">
        <a rel="nofollow" href="/">
          О компании
        </a>
        <a rel="nofollow" href="/">
          Отзывы
        </a>
        <a rel="nofollow" href="/">
          Продукция
        </a>
        <a rel="nofollow" href="/">
          Сертификаты и лицензии
        </a>
        <a rel="nofollow" href="/">
          Партнерам
        </a>
        <a rel="nofollow" href="/">
          Контакты
        </a>
      </div>
      <div>
        <h3 className="font-semibold text-base">Полезно</h3>
        <div className="w-16 border border-black mx-auto"></div>
      </div>
      <div className="header-mobile__nav flex flex-col gap-2 justify-start align-start text-base text-start ml-3">
        <a rel="nofollow" href="/">
          Инструкции
        </a>
        <a rel="nofollow" href="/">
          Монтаж
        </a>
        <a rel="nofollow" href="/">
          Новости и статьи
        </a>
        <a rel="nofollow" href="/">
          Популярные вопросы
        </a>
      </div>
      <div className="top-header__region flex gap-5 mx-auto text-sm">
        <div className="flex items-center gap-1">
          <i class="fa-solid fa-location-dot fa-sm text-gray-400"></i>
          <p className="top-header__region-label text-gray-400">Ваш регион:</p>
        </div>
        <select name="towns" className="text-black border-none">
          <option value="value1" disable>
            Выберите Город
          </option>
          <option value="value2">Алматы</option>
          <option value="value3">Астана</option>
          <option value="value3">Шымкент</option>
          <option value="value3">Тараз</option>
          <option value="value3">Талдыкорган</option>
          <option value="value3">Усть-Каменогорск</option>
        </select>
      </div>
      <Btn className="btn btn-secondary font-semibold rounded-full text-white text-sm w-30 py-3 px-8 mb-2 mx-3">
        Калькулятор стоимости{' '}
      </Btn>
      <Input className="right-8 top-6" icon="right-9 top-6"/>
      <div className="header-mobile__phone-section mx-auto text-center">
        <a rel="nofollow" href="tel:+7 (727) 328-80-81">
          <p className="text-lg font-bold">+7 (727) 328-80-81</p>
        </a>
        <a rel="nofollow" href="tel:+7 (771) 741-18-77">
          <p className="text-lg font-bold">+7 (771) 741-18-77</p>
        </a>
        <div className="w-16 border border-[#DEDEDE] mx-auto"></div>
      </div>
      <p className="header-mobile__site text-sm mx-auto">info@abbex.kz</p>
      <div className="header__socials flex mx-auto">
        {socials.map((social) => (
          <a key={social.id} rel="nofollow" href={social.path}>
            <div className="border border-white rounded-full w-7 h-7 grid">
              <i
                className={social.logo}
                style={{
                  color: `${social.color}`,
                  display: 'block',
                  justifySelf: 'center',
                  alignSelf: 'center',
                }}
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
export default function Header(props) {
  return (
    <MobileMenuContext.Consumer>
      {({ isOpen, toggle }) => (
        <div className="header w-screen flex flex-col justify-center">
          <div className="top-header hidden md:block w-screen bg-[#2E2E2E] justify-around py-4">
            <div className="hidden md:flex container mx-auto justify-between ">
              <div className="top-header__region flex items-center gap-5">
                <div className="flex items-center gap-1">
                  <i class="fa-solid fa-location-dot fa-sm text-gray-200"></i>
                  <p className="top-header__region-label text-gray-200">Ваш регион:</p>
                </div>
                <select name="select" className="text-white bg-[#2E2E2E] border-none">
                  <option value="value1" disable>
                    Выберите Город
                  </option>
                  <option value="value2">Алматы</option>
                  <option value="value3">Астана</option>
                  <option value="value3">Шымкент</option>
                  <option value="value3">Тараз</option>
                  <option value="value3">Талдыкорган</option>
                  <option value="value3">Усть-Каменогорск</option>
                </select>
              </div>
              <a href="mailto:info@abbex.kz">info@abbex.kz</a>
            </div>
          </div>
          <header className="shadow w-screen 2xl:w-full flex flex-col justify-center sticky top-[-1px] 2xl:sticky bg-white z-10">
            <div className="mx-auto container flex flex-row items-center justify-between px-5 py-4 w-full gap-10">
              <img className="w-28 lg:w-40" src="assets/logo.png" alt="logo" />

              <div className="hidden 2xl:block w-1/6 text-center">
                <span className="text-black">Производство террасной доски ДПК в России</span>
              </div>
              <Input className="hidden lg:block" icon="right-9 top-1"/>
              <div
                className="hidden lg:block text-black text-base font-bold"
                style={{
                  fontFamily: 'Days',
                }}>
                <a href="tel:+7 (771) 741-18-22">+7 (771) 741-18-22</a>
                <br />
                <a href="tel:+7 (771) 741-18-44">+7 (727) 395-80-82</a>
              </div>
              <div className="header__feedback hidden lg:block flex flex-col">
                <button className="border border-black rounded-full text-black font-semibold text-xs w-30 py-3 px-8 mb-2">
                  ЗАКАЗАТЬ ЗВОНОК
                </button>
                <div className="header__socials flex gap-2.5 justify-around ">
                  {socials.map((social) => (
                    <a key={social.id} rel="nofollow" href={social.path}>
                      <div className="border border-white rounded-full w-8 h-8 grid">
                        <i
                          className={social.logo}
                          style={{
                            color: `${social.color}`,
                            display: 'block',
                            justifySelf: 'center',
                            alignSelf: 'center',
                          }}
                        />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <div
                className="header__menu flex gap-5 items-center  lg:hidden text-black"
                onClick={toggle}>
                <img src="assets/phone.svg" />
                <img src="assets/basket.svg" />
                <div className="flex flex-col mt-2">
                  {isOpen ? (
                    <i className="fa-solid fa-xmark "></i>
                  ) : (
                    <i className="fa-solid fa-bars"></i>
                  )}
                  <p className="text-sm ">Меню</p>
                </div>
              </div>
            </div>
            {isOpen && <MobileMenu nav={mobileNav} onClose={toggle} />}
          </header>
        </div>
      )}
    </MobileMenuContext.Consumer>
  );
}
