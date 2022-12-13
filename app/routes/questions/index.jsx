import Subscribe from '../../components/Subscribe';
import QuestionConsult from '../../components/QuestionConsult';
import MainLayout from '../../layouts/MainLayout';
import BreadCrumbs from '../../components/UI/BreadCrumbs';
const questions = () => {
  const questionCategory = [
    {
      image: 'CatalogPreview.png',
      title: 'Террасная доска',
    },
    {
      image: 'CatalogPreview2.png',
      title: 'Ступени из ДПК',
    },
    {
      image: 'CatalogPreview3.png',
      title: 'Ограждения из ДПК',
    },
    {
      image: 'CatalogPreview4.png',
      title: 'Заборная доска',
    },
    { image: 'CatalogPreview5.png', title: 'Комплектующие' },
    { image: 'CatalogPreview6.png', title: 'Монтаж' },
  ];
  const QuestionCard = ({ image, title, className }) => {
    return (
      <div className={`card CatalogCardBg self-stretch rounded-[10px] pb-8 ${className}`}>
        <div className="flex flex-col items-center justify-center gap-4">
          <img src={`/assets/${image}`} />
          <h3 className="font-bold text-lg lg:text-3xl">{title}</h3>
          <div className="flex gap-2 items-center">
            <p className="text-base lg:text-lg">Перейти к вопросам</p>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
    );
  };
  const QuestionBlock = () => {
    return (
      <div className="container mx-auto text-black">
        <div className="flex flex-col items-center">
          <div className="flex bg-[#FDF7F2] gap-4 rounded-[20px] py-5 lg:py-8 px-5 lg:px-8">
            <img src="/assets/QuestionMarkIcon.svg" />
            <p>
              Выберите интересующую тему, внутри вы найдете развернутые ответы на самые частые и
              сложные вопросы по продукции из ДПК и нюансам монтажа
            </p>
          </div>
          <div className="container h-20 bg-[#D9D9D9] hidden lg:block mt-[-30px]"></div>
          <div className="flex flex-wrap gap-6 justify-center items-center mt-8 lg:mt-0">
            {questionCategory.map((category) => (
              <QuestionCard
                key={category.image}
                image={category.image}
                title={category.title}
                className="w-[320px] lg:w-[370px]"
              />
            ))}
          </div>
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
              { name: 'Популярные вопросы', path: '/questions' },
            ]}
          />
          <h2 className="text-3xl lg:text-5xl text-center lg:text-start font-days uppercase">
            Популярные вопросы
          </h2>
        </div>
      </div>
      <QuestionBlock />
      <QuestionConsult />
      <Subscribe />
    </MainLayout>
  );
};

export default questions;
