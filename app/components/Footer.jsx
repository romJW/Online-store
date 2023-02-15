import Btn from './UI/Btn';
import { useContext } from 'react';
import { ModalFormContext } from '../contexts/context';
export default function Footer() {
  const socials = [
    {
      logo: 'youtube.svg',
      path: '/',
      id: '1',
      color: '#FF0000',
    },
    {
      logo: 'instagram.svg',
      path: '/',
      id: '2',
      color: '#8a3ab9	',
    },
    {
      logo: 'vk.svg',
      path: '/',
      id: '3',
      color: '#4C75A3',
    },
    {
      logo: 'whatsapp.svg',
      path: '/',
      id: '4',
      color: '#25d366',
    },
    {
      logo: 'telegram.svg',
      path: '/',
      id: '5',
      color: '#2AABEE',
    },
  ];
  const { isForm, setForm } = useContext(ModalFormContext);
  return (
    <>
      <footer>
        <div className="bg-footer text-white  flex flex-col justify-center xs:items-center py-4 lg:py-8  px-2">
          <div>
          <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-4 xl:gap-20 2xl:ml-16">
            <div className="flex gap-8 justify-center items-center">
              <div className="flex flex-col items-center justify-center lg:gap-4 xl:gap-[75px] lg:flex-row mb-4">
                <img src="/assets/FooterLogo.png" alt="" />
                <p className="text-[10px] lg:text-sm ">
                  Крупнейший поставщик <br /> террассной доски ДПК в Казахстане
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
                <a href="" className="hover:opacity-75 mt-6 hidden lg:block">
                  Политика конфиденциальности
                </a>
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
                  <a href="" className="hover:opacity-75 mt-6 hidden lg:block">
                    Пользовательское соглашение
                  </a>
                </div>
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
                <a href="" className="hover:opacity-75 opacity-0">
                  Пользовательское соглашение
                </a>
                <a href="" className="hover:opacity-75 mt-6 hidden lg:block">
                  Разработка сайта ....
                </a>
                <div className="w-2/3"></div>
              </nav>
            </div>

            <div class="lg:col-span-2">
              <p class="font-bold">Контакты</p>

              <nav class="flex flex-col mt-4 text-sm text-[#FFFFFFB2]">
                <div class="flex flex-col gap-2">
                  <a href="tel:+7 (701) 741-18-44">+7 (701) 741-18-44</a>
                  <a href="tel:+7 (701) 741-18-77">+7 (701) 741-18-77</a>
                  <a href="mailto:sales@abbex.kz">sales@abbex.kz</a>
                  <div className="flex flex-col lg:mr-4 xl:mr-0">
                    <Btn
                      kind=""
                      className="text-xs lg:w-[170px] xl:w-[190px] h-[40px] border-white text-white bg-transparent hidden lg:block mt-2 mb-2">
                      Заказать звонок
                    </Btn>
                    <div className="flex gap-4 justify-center flex-wrap w-[110px] sm:w-full">
                      {socials.map((social) => (
                        <a key={social.id} rel="nofollow" href={social.path}>
                          <img
                            className="hover:scale-110"
                            src={`/assets/${social.logo}`}
                            style={{
                              position: 'relative',
                              top: '1px',
                              color: `${social.color}`,
                              display: 'block',
                              justifySelf: 'center',
                              alignSelf: 'center',
                            }}
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          
        </div>
        <div className="text-sm text-[#FFFFFFB2] flex gap-8 items-center flex-row sm:flex-row lg:hidden">
          <div className='flex flex-col'>
            <a className="hover:opacity-75" href="/">
              Политика конфедициальности
            </a>
            <a className="hover:opacity-75" href="/">
              Пользовательское соглашение
            </a>
            <a className="hover:opacity-75" href="/">
              Разработка сайта...
            </a>
            </div>
            <div className='flex flex-col opacity-0'>
            <a className="hover:opacity-75" href="/">
              Политика конфедициальности
            </a>
            <a className="hover:opacity-75" href="/">
              Пользовательское соглашение
            </a>
            <a className="hover:opacity-75" href="/">
              Разработка сайта...
            </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
