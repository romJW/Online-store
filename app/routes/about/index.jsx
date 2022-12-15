import Subscribe from '../../components/Subscribe';
import Section from '../../components/UI/Section';
import QuestionConsult from '../../components/QuestionConsult';
import MainLayout from '../../layouts/MainLayout';
import BreadCrumbs from '../../components/UI/BreadCrumbs';
import SliderLicense from '../../components/SliderLicense';
import About from '../../components/About';
import NewsBlock from '../../components/NewsBlock';
const about = () => {
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
              <img src="/assets/ContainBoard.png" className="w-full h-[300px]" />
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

  return (
    <MainLayout>
      <div className="relative">
        <img
          src="/assets/circles.svg"
          alt=""
          className="circles z-0 absolute right-[1px] top-[30px]"
        />
      </div>
      <About className="lg:pt-10 lg:pb-[420px]">
        <BreadCrumbs
          className="text-white"
          pages={[
            { name: 'Главная', path: '/' },
            { name: 'О компании', path: '/about' },
          ]}
        />
      </About>
      <NewsBlock/>
      <QuestionConsult />
      <Subscribe />
    </MainLayout>
  );
};

export default about;
