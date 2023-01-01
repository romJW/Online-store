import Btn from './UI/Btn';
import { useContext } from 'react';
import { ModalFormContext } from '../contexts/context';
export default function Footer() {
  const socials = [
    {
      logo: 'fa-brands fa-youtube fa-2xl hover:scale-110',
      path: '/',
      id: '11',
      color: '#FF0000',
    },
    {
      logo: 'fa-brands fa-instagram fa-2xl hover:scale-110',
      path: '/',
      id: '12',
      color: '#8a3ab9	',
    },
    {
      logo: 'fa-brands fa-vk fa-2xl hover:scale-110',
      path: '/',
      id: '13',
      color: '#4C75A3',
    },
    {
      logo: 'fa-brands fa-whatsapp-square fa-2xl hover:scale-110',
      path: '/',
      id: '14',
      color: '#25d366',
    },
    {
      logo: 'fa-brands fa-telegram fa-2xl hover:scale-110',
      path: '/',
      id: '15',
      color: '#2AABEE',
    },
  ];
  const { isForm, setForm } = useContext(ModalFormContext);
  return (
    <>
      <footer>
        <div className="bg-footer text-white  flex flex-col justify-center xs:items-center py-4 lg:py-8  px-2">
          <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-4 xl:gap-20 2xl:ml-16">
            <div className="flex gap-8 justify-center items-center">
              <div className="flex flex-col items-center justify-center lg:gap-4 xl:gap-8 lg:flex-row mb-4">
                <img src="/assets/FooterLogo.png" alt="" />
                <p className="text-[10px] lg:text-sm ">
                  Производство террасной <br /> доски ДПК в России
                </p>
              </div>
              <Btn
                kind=""
                className="text-xs w-[150px] h-[40px] border-white text-white bg-transparent lg:hidden"
                onClick={() => setForm(true)}>
                Заказать звонок
              </Btn>
            </div>
            <div className="flex justify-between flex-col gap-2 lg:gap-4 xl:gap-16 lg:flex-row">
              <Btn kind="btn-secondary" className="w-[300px] lg:w-[270px] ">
                Калькулятор стоимости
              </Btn>
              <Btn kind="btn-primary" className="w-[300px] lg:w-[270px]">
                Оставить заявку
              </Btn>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-8 lg:gap-20 xl:gap-28 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-8">
            <div className="lg:col-span-2">
              <p className="font-bold">Каталог</p>
              <nav className="flex flex-col mt-4 gap-2 text-sm text-[#FFFFFFB2]">
                <a className="hover:opacity-75" href="/">
                  {' '}
                  Террасная доска{' '}
                </a>
                <a className="hover:opacity-75" href="/">
                  Ступени из ДПК
                </a>
                <a className="hover:opacity-75" href="/">
                  Ограждения из ДПК
                </a>
                <a className="hover:opacity-75" href="/">
                  Заборная доска из ДПК
                </a>
              </nav>
            </div>

            <div className="lg:col-span-2">
              <p className="font-bold">Полезно</p>
              <nav className="flex flex-col gap-2 mt-4 text-sm text-[#FFFFFFB2]">
                <a className="hover:opacity-75" href="">
                  Инструкции
                </a>
                <a className="hover:opacity-75" href="">
                  Новости и статьи
                </a>
                <a className="hover:opacity-75" href="/">
                  Популярные статьи
                </a>
                <div className="w-2/3"></div>
              </nav>
            </div>

            <div className="lg:col-span-2">
              <p className="font-bold">О компании</p>

              <nav className="flex flex-col mt-4  text-sm text-[#FFFFFFB2]">
                <div className="flex flex-col gap-2">
                  <a href="" className="hover:opacity-75">
                    Отзывы
                  </a>
                  <a href="" className="hover:opacity-75">
                    Сертификаты и лицензии
                  </a>
                  <a href="" className="hover:opacity-75">
                    Партнерам
                  </a>
                  <a href="" className="hover:opacity-75">
                    Контакты
                  </a>
                </div>
              </nav>
            </div>

            <div class="lg:col-span-2">
              <p class="font-bold">Контакты</p>

              <nav class="flex flex-col mt-4 text-sm text-[#FFFFFFB2]">
                <div class="flex flex-col gap-2">
                  <a href="tel:+7 (771) 741-18-22">+7 (771) 741-18-22</a>
                  <a href="mailto:info@abbex.kz">+7 (727) 395-80-82</a>
                  <a href="mailto:info@abbex.kz">info@abbex.kz</a>
                  <div className="flex flex-col lg:mr-4 xl:mr-0">
                    <Btn
                      kind=""
                      className="text-xs lg:w-[170px] xl:w-[190px] h-[40px] border-white text-white bg-transparent hidden lg:block mt-2 mb-2">
                      Заказать звонок
                    </Btn>
                    <div className="flex gap-4 justify-center flex-wrap w-[110px] sm:w-full">
                      {socials.map((social) => (
                        <a key={social.id} rel="nofollow" href={social.path}>
                          <div className="w-[19px] h-[19.5px] relative bg-white flex items-center justify-center">
                            <i
                              className={social.logo}
                              style={{
                                position: 'relative',
                                top: '1px',
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
                </div>
              </nav>
            </div>
          </div>
          <div className="flex flex-col mt-4 lg:mt-0 items-start lg:flex-row lg:justify-start gap-2 lg:gap-[60px] xl:gap-24 text-sm text-[#FFFFFFB2] lg:relative lg:top-[-20px] lg:left-[-160px] xl:left-[-180px]">
            <a href="">Политика конфиденциальности</a>
            <a href="">Пользовательское соглашение</a>
            <a href="">Разработка сайта ....</a>
          </div>
        </div>
      </footer>
    </>
  );
}
