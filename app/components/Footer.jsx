import Btn from './UI/Btn';
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

  return (
    <>
      <footer>
        <div class="bg-footer text-white  flex flex-col justify-center xs:items-center py-4 lg:py-16  px-2">
          <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-20">
            <div className="flex gap-8 justify-center items-center">
              <div className="flex flex-col items-center justify-center lg:gap-8 lg:flex-row mb-4">
                <img src="assets/FooterLogo.png" alt="" />
                <p className="text-[10px] lg:text-sm ">
                  Производство террасной <br /> доски ДПК в России
                </p>
              </div>
              <Btn
                kind=""
                className="text-xs w-[150px] h-[40px] border-white text-white bg-transparent lg:hidden">
                Заказать звонок
              </Btn>
            </div>
            <div className="flex justify-between flex-col gap-2 lg:gap-20 lg:flex-row">
              <Btn kind="btn-secondary" className="w-[300px] lg:w-[270px] ">
                Калькулятор стоимости
              </Btn>
              <Btn kind="btn-primary" className="w-[300px] lg:w-[270px]">
                Оставить заявку
              </Btn>
            </div>
          </div>

          <div class="mt-4 grid grid-cols-2 gap-8 lg:gap-28 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-8">
            <div class="lg:col-span-2">
              <p class="font-bold">Каталог</p>
              <nav class="flex flex-col mt-4 space-y-2 text-sm text-[#FFFFFFB2]">
                <a class="hover:opacity-75" to="/">
                  {' '}
                  Террасная доска{' '}
                </a>
                <a class="hover:opacity-75" to="/page/o_kompanii">
                  Ступени из ДПК
                </a>
                <a class="hover:opacity-75" to="/page/portfolio">
                  Ограждения из ДПК
                </a>
                <a class="hover:opacity-75" to="/page/faq">
                  Заборная доска из ДПК
                </a>
              </nav>
            </div>

            <div class="lg:col-span-2">
              <p class="font-bold">Полезно</p>
              <nav class="flex flex-col mt-4 space-y-2 text-sm text-[#FFFFFFB2]">
                <a class="hover:opacity-75" to="/#block-pellicle-pools">
                  Инструкции
                </a>
                <a class="hover:opacity-75" to="/#pavilions">
                  Новости и статьи
                </a>
                <a class="hover:opacity-75" to="/search">
                  Популярные статьи
                </a>
                <div class="w-2/3"></div>
              </nav>
            </div>

            <div class="lg:col-span-2">
              <p class="font-bold">О компании</p>

              <nav class="flex flex-col mt-2 space-y-2 text-sm text-[#FFFFFFB2]">
                <div class="flex flex-col gap-2">
                  <a href="">Отзывы</a>
                  <a href="">Сертификаты и лицензии</a>
                  <a href="">Партнерам</a>
                  <a href="">Контакты</a>
                </div>
              </nav>
            </div>

            <div class="lg:col-span-2">
              <p class="font-bold">Контакты</p>

              <nav class="flex flex-col mt-2 space-y-2 text-sm text-[#FFFFFFB2]">
                <div class="flex flex-col gap-2">
                  <a href="tel:+7 (771) 741-18-22">+7 (771) 741-18-22</a>
                  <a href="mailto:info@abbex.kz">+7 (727) 395-80-82</a>
                  <a href="mailto:info@abbex.kz">info@abbex.kz</a>
                  <div className='flex flex-col'>
                  <Btn
                    kind=""
                    className="text-xs w-[190px] h-[40px] border-white text-white bg-transparent hidden lg:block mb-2">
                    Заказать звонок
                  </Btn>
                  <div className="flex gap-4 justify-center flex-wrap w-[110px] sm:w-full">
                    {socials.map((social) => (
                      <a key={social.id} rel="nofollow" href={social.path}>
                        <div className="w-[19px] h-[19.5px] relative bg-white flex items-center justify-center">
                          <i
                            className={social.logo}
                            style={{
                              position:'relative',
                              top:'1px',
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
          </div >
          <div className='flex flex-col mt-4 lg:mt-0 items-start lg:flex-row lg:justify-center lg:gap-14 text-sm text-[#FFFFFFB2] lg:relative lg:top-[-20px]'>
            <p>Политика конфиденциальности</p>
            <p>Пользовательское соглашение</p>
            <p>Разработка сайта ....</p>
          </div>
        </div>
      </footer>
    </>
  );
}
