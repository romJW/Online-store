import Subscribe from '../components/Subscribe';
import Section from '../components/UI/Section';
import QuestionConsult from '../components/QuestionConsult';
import MainLayout from '../layouts/MainLayout';
import BreadCrumbs from '../components/UI/BreadCrumbs';
import SliderLicense from '../components/SliderLicense';
import About from '../components/About';
const license = () => {
  const LicenseCheked = () => {
    return (
      <div className="bg-[#FDF7F2] text-black rounded-[80px] lg:py-16 xl:py-0 pt-12 lg:pt-0 pl-0 lg:pl-24 max-w-[1370px] mx-auto relative z-10 mb-[-50px]">
        <div className="flex flex-col lg:flex-row items-center text-center lg:text-start">
          <div className='px-2'>
            <h3 className="uppercase font-days text-3xl lg:text-5xl mb-8">ПРОВЕРЕНО И СООТВЕТСТВУЕТ ВСЕМ ТРЕБОВАНИЯ СЕРТИФИКАЦИИ РФ</h3>
            <p className="text-base lg:text-xl">
              Изделия из ДПК компании «WOODGRAND» прошли добровольную сертификацию и соответствуют
              всем требованиям, предъявленным на территории России
            </p>
          </div>
          <img src='/assets/License.png' className='lg:w-[480px] xl:w-full'/>
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
              { name: 'Сертификаты и лицензии', path: '/license' },
            ]}
          />
          <h2 className="text-3xl lg:text-5xl text-center lg:text-start font-days uppercase">
            Сертификаты и лицензии
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
      <SliderLicense className="text-black" />
      <LicenseCheked/>
      <About/>
      <QuestionConsult />
      <Subscribe />
    </MainLayout>
  );
};

export default license;
