import Input from "./UI/Input";
import { MobileMenuContext } from "../contexts/MobileMenu.js";
import MetaHeader from "./MetaHeader";
import MobileMenu from "./MobileMenu";
import Menu from "./Menu";
const socials = [
  {
    logo: "fa-brands fa-youtube fa-xl hover:scale-110",
    path: "/",
    id: "1",
    color: "#FF0000",
  },
  {
    logo: "fa-brands fa-instagram fa-xl hover:scale-110",
    path: "/",
    id: "2",
    color: "#8a3ab9	",
  },
  {
    logo: "fa-brands fa-vk fa-xl hover:scale-110",
    path: "/",
    id: "3",
    color: "#4C75A3",
  },
  {
    logo: "fa-brands fa-whatsapp-square fa-xl hover:scale-110",
    path: "/",
    id: "4",
    color: "#25d366",
  },
  {
    logo: "fa-brands fa-telegram fa-xl hover:scale-110",
    path: "/",
    id: "5",
    color: "#2AABEE",
  },
];

const mobileNav = [
  {
    logo: "assets/noun-woodgrain.svg",
    title: "Террасная доска",
    path: "/",
    id: "1",
  },
  {
    logo: "assets/noun-stairs.svg",
    title: "Ступени из ДПК",
    path: "/",
    id: "2",
  },
  {
    logo: "assets/noun-ladder.svg",
    title: "Ограждения из ДПК",
    path: "/",
    id: "3",
  },
  {
    logo: "assets/wooden-board.svg",
    title: "Заборная доска из ДПК",
    path: "/",
    id: "4",
  },
  { logo: "assets/noun-screw.svg", title: "Комплектующие", path: "/", id: "5" },
];

export default function Header(props) {
  return (
    <MobileMenuContext.Consumer>
      {({ isOpen, toggle }) => (
        <>
          <MetaHeader className="hidden md:flex" />
          <header className="shadow w-screen flex flex-col justify-center sticky top-[-1px] bg-base-100 z-50">
            <div className="mx-auto container flex flex-row items-center justify-between py-4 w-full gap-4">
              <img className="" src="assets/logo.png" alt="logo" />
              <div className="hidden 2xl:block w-1/6">
                <span className="text-black">
                  Производство террасной доски ДПК в России
                </span>
              </div>
              <Input
                className="max-w-xs hidden lg:flex"
                placeholder="Я ищу..."
              />
              <div className="hidden lg:block text-black text-base font-bold font-days">
                <a rel="nofollow" href="tel:+7 (771) 741-18-22">+7 (771) 741-18-22</a>
                <br />
                <a rel="nofollow" href="tel:+7 (771) 741-18-44">+7 (727) 395-80-82</a>
              </div>
              <div className="hidden lg:flex items-center flex-col">
                <button className="btn btn-outline btn-sm">Заказать звонок</button>
                <div className="flex gap-2 justify-around">
                  {socials.map((social) => (
                    <a key={social.id} rel="nofollow" href={social.path}>
                      <div className="w-8 h-8 grid">
                        <i
                          className={social.logo}
                          style={{
                            color: `${social.color}`,
                            display: "block",
                            justifySelf: "center",
                            alignSelf: "center",
                          }}
                        />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <div
                className="header__menu flex gap-5 items-center  lg:hidden text-black"
                onClick={toggle}
              >
                <img src="assets/phone.svg" alt="" />
                <img src="assets/basket.svg" alt="" />
                <div className="flex flex-col justify-center items-center mt-2">
                  {isOpen ? (
                    <i className="fa-solid fa-xmark"></i>
                  ) : (
                    <i className="fa-solid fa-bars"></i>
                  )}
                  <p className="text-[10px]">Меню</p>
                </div>
              </div>
            </div>
            {isOpen && <MobileMenu nav={mobileNav} socials={socials} onClose={toggle} />}
          </header>
          <Menu/>
        </>
      )}
    </MobileMenuContext.Consumer>
  );
}
