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
  const QualityBoard = () => {
    return (
      <Section>
        <div className="max-w-[1310px] xs:w-[320px] mt-[-100px] lg:mt-[-300px] sm:w-full mx-auto bg-[#FDF7F2] rounded-[60px] text-black pb-12 sm:py-18 lg:pb-0">
          <div className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-0 lg:pl-16">
            <div className="flex flex-col gap-4">
              <h3 className="font-days uppercase text-3xl lg:text-5xl lg:whitespace-nowrap pt-8 lg:pt-0">
                Следим за качеством
              </h3>
              <p className="font-mont font-bold text-xl lg:text-3xl lg:whitespace-nowrap">
                Отвечаем за каждый погонный сантиметр
              </p>
              <p className="font-mont text-sm lg:text-lg ">
                Мы подвергаем свою продукцию самым жестким испытаниям,<br/> чтобы на деле проверить
                свойства террасной доски.<br/> Благодаря этому мы находим уникальные пропорции
                компонентов,<br/> которые позволяют выпускать ДПК высокого качества.
              </p>
            </div>
            <img
              src="/assets/QualityBoard.png"
              className="w-full lg:w-1/3 rotate-90 lg:rotate-0 justify-self-stretch rounded-[60px]"
            />
          </div>
        </div>
      </Section>
    );
  };
  const RequisitesBlock = () => {
    return (
      <div className="container mx-auto">
        <div className="font-mont flex flex-col lg:flex-row gap-8 justify-center items-center lg:items-start text-black">
          <div className="flex flex-col px-5">
            <h3 className="font-days uppercase text-3xl lg:text-5xl mb-2 lg:mb-5">Реквизиты</h3>
            <p className="font-bold text text-xl lg:text-2xl mb-1 lg:mb-2">
              Мы работаем официально, поэтому <br /> вы можете оплатить картой при <br /> получении
              или на расчетный счет
            </p>
            <p className="font-medium text-sm lg:text-lg">
              Мы работаем официально, поэтому Вы можете оплатить <br /> картой при получении или на
              расчетный счет
            </p>
          </div>
          <div className="relative w-fit lg:w-[570px] bg-[#FDF7F2] rounded-[10px] px-5 py-5">
            <div className="flex gap-4 lg:gap-5">
              <div className="flex flex-col font-medium gap-2 text-sm lg:text-base">
                <p>
                  Наименование <br /> организации
                </p>
                <p>ИНН</p>
                <p>ОГРНИП</p>
                <p >Юр. адрес</p>
                <p className='pt-6 xl:pt-0'>
                  Банковские <br /> реквизиты
                </p>
              </div>
              <div className="flex flex-col gap-2  text-sm lg:text-base">
                <p className="mb-6">ИП Садеев Р.И. </p>
                <p>732812355986</p>
                <p>318732500031325</p>
                <p>432048, г.Ульяновск, ул.Кирова, д.37/2а, кв.21</p>
                <p>ПАО Сбербанк <br /> р/с 40802810969000006757 <br /> к/с 30101810000000000602 <br /> БИК 047308602</p>
              </div>
            </div>
            <img src='/assets/RequsitesBookmark.svg' className='absolute top-[-12px] right-[25px] scale-75 lg:scale-100'/>
          </div>
        </div>
      </div>
    );
  };

  return (
    <MainLayout>
      <About className="pt-4 lg:pt-10 lg:pb-[420px]">
        <BreadCrumbs
          className="text-white pl-0 lg:pl-8"
          pages={[
            { name: 'Главная', path: '/' },
            { name: 'О компании', path: '/about' },
          ]}
        />
      </About>
      <QualityBoard />
      <RequisitesBlock />
      <NewsBlock />
      <QuestionConsult />
      <Subscribe />
    </MainLayout>
  );
};

export default about;
