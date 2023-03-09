import Subscribe from '../components/Subscribe';
import Section from '../components/UI/Section';
import QuestionConsult from '../components/QuestionConsult';
import MainLayout from '../layouts/MainLayout';
import BreadCrumbs from '../components/UI/BreadCrumbs';
import Map from '../components/Map';
const contacts = () => {
  
  return (
    <MainLayout>
      <div className="header-bg py-20 ">
        <div className="container mx-auto text-white">
          <BreadCrumbs
            className="text-white mb-6"
            pages={[
              { name: 'Главная', path: '/' },
              { name: 'Контакты', path: '/contacts' },
            ]}
          />
          <h2 className="text-3xl lg:text-5xl text-center lg:text-start font-days uppercase">
            Контакты
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
      <Map/>
      <Section/>
      <QuestionConsult />
      <Subscribe />
    </MainLayout>
  );
};

export default contacts;
