import AboutCard from './AboutCard';
import PlayBtn from './UI/PlayBtn';
export default function About({ children, className }) {
  const AboutCards = [
    {
      icon: '/assets/woods.svg',
      text: (
        <>
          Материал для производства <br /> закупаем на год вперед
        </>
      ),
    },
    { icon: '/assets/store.svg', text: '18.000м2 Продукции всегда в наличии' },
    { icon: '/assets/Machine.svg', text: 'Объекты по всему Казахстану' },
  ];
  return (
    <>
      <div className={`mx-auto  bg-no-repeat bg-cover w-full wood-bg py-24 lg:py-36 ${className}`}>
        <>{children}</>
        <div className="container mx-auto flex flex-col z-10 justify-center items-center px-3 lg:px-0">
          <div className="flex flex-col lg:flex-row mx-auto justify-center items-center gap-6  mb-5">
            <div className="text-white ">
              <h3 className="font-[Days] uppercase text-3xl lg:text-5xl mb-8">О компании</h3>
              <p className="text-[#FFFFFFB2] text-lg lg:text-xl mb-6">
                Компания ABBEX занимается монтажом и реализацией <br className="hidden sm:block" />{' '}
                продукции из ДПК с 2017г.
              </p>
              <div
                style={{ backgroundImage: 'url("/assets/aboutSmall.png")' }}
                className="flex justify-center items-center  bg-no-repeat  h-[200px] sm:h-[390px]  lg:hidden">
                <PlayBtn />
              </div>
              <p className=" text-[#FFFFFFB2] text-lg lg:text-xl">
                За 5 лет мы прошли путь от небольшого офиса до <br className="hidden sm:block" />{' '}
                автоматизированного склада с 20 дилерами по всему <br className="hidden sm:block" />{' '}
                Казахстану.
              </p>
            </div>
            <div
              style={{ backgroundImage: 'url("/assets/aboutSmall.png")' }}
              className="justify-center items-center lg:w-[500px] h-[332px] hidden lg:flex">
              <PlayBtn />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div
              style={{ backgroundImage: 'url("/assets/aboutBig.png")' }}
              className="flex justify-center items-center w-full sm:w-[516px] lg:w-[720px] h-[200px] sm:h-[390px] bg-no-repeat mb-6 lg:mb-0">
              <PlayBtn />{' '}
            </div>
            <div className="flex flex-col gap-2 lg:gap-4 lg:ml-[-50px]">
              {AboutCards.map((card) => (
                <AboutCard
                  icon={card.icon}
                  key={card.icon}
                  text={card.text}
                  className="w-full xl:w-[450px]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
