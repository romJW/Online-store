import Subscribe from '../../components/Subscribe';
import Section from '../../components/UI/Section';
import QuestionConsult from '../../components/QuestionConsult';
import MainLayout from '../../layouts/MainLayout';
import BreadCrumbs from '../../components/UI/BreadCrumbs';
import SliderLicense from '../../components/SliderLicense';
import About from '../../components/About';
const products = () => {
  const BoardContainInstances = [
    {
      image: 'ContainInstance1.png',
      title: '56% древесная мука',
      text: 'Изготавливается путем перемалывания древесной стружки и опилок смешанных пород деревьев',
    },
    {
      image: 'ContainInstance2.png',
      title: '30% Первичный полимер',
      text: 'Используем гранулированный полимер высокой плотности (ПНД) для придания гибкости и дополнительной прочности',
    },
    {
      image: 'ContainInstance3.png',
      title: '14% Безопасные красители и стабилизаторы',
      text: 'Пигменты для противостояния воздействию ультрафиолета. Антиоксиданты для замедления старения',
    },
  ];
  const BoardContainCard = ({ title, text, image }) => {
    return (
      <div className="flex flex-col justify-center items-center gap-5 text-center ">
        <img src={`/assets/${image}`} />
        <div>
          <h3 className="text-lg lg:text-2xl font-bold">{title}</h3>
          <p className="text-sm lg:text-lg">{text}</p>
        </div>
      </div>
    );
  };
  const BoardContain = () => {
    return (
      <Section>
        <div className="container mx-auto ">
          <div className="flex flex-col text-black">
            <h3 className="font-days text-3xl lg:text-5xl uppercase mb-6 lg:mb-12 text-center">
              состав Террасной доски
            </h3>
            <div className="flex flex-col">
              <img src="/assets/ContainBoard.png" className='w-full h-[300px]'/>
              <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mt-[-70px]">
                {BoardContainInstances.map((instance) => (
                  <BoardContainCard
                    image={instance.image}
                    title={instance.title}
                    text={instance.text}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    );
  };
  const BoardInCut = () => {
    return (
      <div className="bg-[#FDF7F2] rounded-[60px] py-6 lg:py-12 px-5 lg:px-28 max-w-[1310px] relative z-10 mx-auto mb-[-50px] text-black">
        <div className="flex gap-5 lg:gap-12 flex-col-reverse items-center justify-center lg:flex-row text-center lg:text-start">
          <img src="/assets/BoardInCut.png" />
          <div>
            <h3 className="font-bold text-xl lg:text-3xl">Террасная доска в разрезе</h3>
            <p className="text-sm lg:text-lg font-medium">
              Не растрескивается и не деформируется, её не выкручивает <br /> под воздействием
              условий окружающей среды, солёной воды <br /> или слабых щелочей и кислот (хлорка)
            </p>
          </div>
        </div>
      </div>
    );
  };
  const BoardAdvantageItem = ({ image, text }) => {
    return (
      <div className="flex flex-row lg:flex-col  justify-center items-center gap-5 text-center">
        <img src={`/assets/${image}`} className="w-10 h-10" />
        <p className="text-sm lg:text-lg">{text}</p>
      </div>
    );
  };
  const BoardAdvantages = () => {
    const advantages = [
      {
        image: 'AdvantageLock.svg',
        text: (
          <>
            Срок эксплуатации <br className="hidden lg:block" /> до 20 лет
          </>
        ),
      },
      {
        image: 'AdvantageWood.svg',
        text: (
          <>
            Обрабатывается <br className="hidden lg:block" /> как дерево
          </>
        ),
      },
      {
        image: 'AdvantageBug.svg',
        text: (
          <>
            Не едят насекомые <br className="hidden lg:block" /> и грызуны
          </>
        ),
      },
      {
        image: 'AdvantageCard.svg',
        text: (
          <>
            По ощущениям <br className="hidden lg:block" /> как обычная доска
          </>
        ),
      },
      {
        image: 'AdvantageThermometer.svg',
        text: (
          <>
            диапазон температур <br className="hidden lg:block" /> от -450 до +750
          </>
        ),
      },
      {
        image: 'AdvantageCrack.svg',
        text: (
          <>
            Не деформируется <br className="hidden lg:block" /> и не трескается
          </>
        ),
      },
      {
        image: 'AdvantagePressure.svg',
        text: (
          <>
            Выдерживает до
            <br className="hidden lg:block" /> 1240 кг/м2
          </>
        ),
      },
      {
        image: 'AdvantageRain.svg',
        text: (
          <>
            Не боится воды
            <br className="hidden lg:block" /> и влаги
          </>
        ),
      },
      {
        image: 'AdvantagePaint.svg',
        text: (
          <>
            Не требует
            <br className="hidden lg:block" /> покраски
          </>
        ),
      },
      {
        image: 'AdvantagePlant.svg',
        text: (
          <>
            Экологически чистый
            <br className="hidden lg:block" /> и безопасный
          </>
        ),
      },
    ];
    return (
      <div className="max-w-[1100px] mx-auto text-white mb-20 lg:mb-28">
        <h3 className="font-days text-3xl lg:text-5xl uppercase text-center mb-6 lg:mb-10">
          Преимущества ДПК
        </h3>
        <div className="grid justify-items-start grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-8 px-4">
          {advantages.map((advantage) => (
            <BoardAdvantageItem image={advantage.image} text={advantage.text} />
          ))}
        </div>
      </div>
    );
  };
  return (
    <MainLayout>
      <div className="header-bg py-12 ">
        <div className="container mx-auto text-white">
          <BreadCrumbs
            className="text-white"
            pages={[
              { name: 'Главная', path: '/' },
              { name: 'О компании', path: '/about' },
              { name: 'Продукция', path: '/about/products' },
            ]}
          />
          <h2 className="text-3xl lg:text-5xl text-center lg:text-start font-days uppercase">
            ПРОДУКЦИЯ ДПК
          </h2>
        </div>
      </div>
      <div className="relative">
        <img
          src="/assets/circles.svg"
          alt=""
          className="circles z-0 absolute right-[1px] top-[30px]"
        />
      </div>
      <BoardContain />
      <BoardInCut />
      <About>
        <BoardAdvantages />
      </About>
      <SliderLicense className="text-black"/>
      <QuestionConsult />
      <Subscribe />
    </MainLayout>
  );
};

export default products;
