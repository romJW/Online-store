import Input from "./UI/Input";

export default function MobileMenu(props) {
  return (
    <div className="container mx-auto py-5 flex flex-col justify-center align-center gap-5 font-medium text-sm text-center bg-white inset-0 object-cover w-screen text-black">
      <div>
        <h3 className="font-semibold text-base">Каталог</h3>
        <div className="w-16 border border-black mx-auto"></div>
      </div>
      <div className="header-mobile__nav flex flex-col justify-start gap-2 align-start text-start">
        {props.nav.map((option) => {
          return (
            <>
              <div className="flex gap-2.5">
                <img
                  src={option.logo}
                  style={{
                    width: "13px",
                    height: "20px",
                  }}
                  alt=""
                />
                <a
                  key={option.id}
                  rel="nofollow"
                  href={option.path}
                  onClick={props.onClose}
                >
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
      <div className="header-mobile__nav flex flex-col gap-2 justify-start align-start text-base text-start">
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
      <div className="header-mobile__nav flex flex-col gap-2 justify-start align-start text-base text-start">
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
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-location-dot fa-sm text-gray-400"></i>
          <p className="top-header__region-label text-gray-400">Ваш регион:</p>
        </div>
        <select name="towns" className="text-black bg-transparent border-none">
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
      <button className="btn btn-secondary">Калькулятор стоимости</button>
      <Input className="max-w-xs" placeholder="Я ищу..." />
      <div className="mx-auto text-center">
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
        {props.socials.map((social) => (
          <a key={social.id} rel="nofollow" href={social.path}>
            <div className="border border-white rounded-full w-7 h-7 grid">
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
  );
}
