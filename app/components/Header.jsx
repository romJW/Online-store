import Input from './UI/Input';
import MetaHeader from './MetaHeader';
import MobileMenu from './MobileMenu';
import Menu from './Menu';
import ModalCities from './modals/ModalCities';
import { useContext } from 'react';
import { ModalCityContext, MobileMenuContext } from '../contexts/context';
import { Link } from '@remix-run/react';
const socials = [
  {
    logo: 'fa-brands fa-youtube fa-xl hover:scale-110',
    path: '/',
    id: '1',
    color: '#FF0000',
  },
  {
    logo: 'fa-brands fa-instagram fa-xl hover:scale-110',
    path: '/',
    id: '2',
    color: '#8a3ab9	',
  },
  {
    logo: 'fa-brands fa-vk fa-xl hover:scale-110',
    path: '/',
    id: '3',
    color: '#4C75A3',
  },
  {
    logo: 'fa-brands fa-whatsapp-square fa-xl hover:scale-110',
    path: '/',
    id: '4',
    color: '#25d366',
  },
  {
    logo: 'fa-brands fa-telegram fa-xl hover:scale-110',
    path: '/',
    id: '5',
    color: '#2AABEE',
  },
];

const mobileNav = [
  {
    logo: '/assets/noun-woodgrain.svg',
    title: 'Террасная доска',
    path: '/',
    id: '1',
  },
  {
    logo: '/assets/noun-stairs.svg',
    title: 'Ступени из ДПК',
    path: '/',
    id: '2',
  },
  {
    logo: '/assets/noun-ladder.svg',
    title: 'Ограждения из ДПК',
    path: '/',
    id: '3',
  },
  {
    logo: '/assets/wooden-board.svg',
    title: 'Заборная доска из ДПК',
    path: '/',
    id: '4',
  },
  { logo: '/assets/noun-screw.svg', title: 'Комплектующие', path: '/', id: '5' },
];

export default function Header() {
  const { isCityModalOpen, setCityModalOpen } = useContext(ModalCityContext);
  const { isMobileMenuOpen, SetMobileMenuOpen } = useContext(MobileMenuContext);
  return (
    <>
      <MetaHeader className="hidden md:flex" />
      <header className="shadow w-full flex flex-col justify-center sticky top-[-1px] bg-base-100 z-50">
        <div className="mx-auto container flex flex-row justify-center items-center justify-between py-4 w-full ">
          <div className="flex gap-8">
            <Link to="/">
              <img className="" src="/assets/logo.png" alt="logo" />
            </Link>
            <span className="text-black text-sm hidden xl:block">
              Продажа материалов <br /> из ДПК по всему Казахстану
            </span>
          </div>
          <Input className="max-w-xs hidden lg:flex" placeholder="Я ищу..." />
          <div className="hidden lg:block text-black text-base font-bold font-days">
            <a rel="nofollow" href="tel:+7 (771) 741-18-22">
              +7 (771) 741-18-22
            </a>
            <br />
            <a rel="nofollow" href="tel:+7 (771) 741-18-44">
              +7 (727) 395-80-82
            </a>
          </div>
          <div className="hidden lg:flex items-center flex-col gap-2">
            <button className="btn btn-outline border-[#212864] text-[#2F2222] btn-sm">
              Заказать звонок
            </button>
            <div className="flex gap-2 justify-around">
              {socials.map((social) => (
                <a key={social.id} rel="nofollow" href={social.path}>
                  <div className="w-8 h-8 grid">
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
          <div className="header__menu flex gap-5 items-center  lg:hidden text-black">
            <img src="/assets/phone.svg" alt="" />
            <img src="/assets/basket.svg" alt="" />
            <div className="flex flex-col justify-center items-center mt-2">
              {isMobileMenuOpen ? (
                <i className="fa-solid fa-xmark " onClick={() => SetMobileMenuOpen(false)}></i>
              ) : (
                <i className="fa-solid fa-bars" onClick={() => SetMobileMenuOpen(true)}></i>
              )}
              <p className="text-[10px]">Меню</p>
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <MobileMenu nav={mobileNav} socials={socials} onClose={() => SetMobileMenuOpen(false)} />
        )}
        <Menu />
        <ModalCities />
      </header>
    </>
  );
}
