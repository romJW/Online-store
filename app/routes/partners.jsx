import MainLayout from '../layouts/MainLayout';
import BreadCrumbs from '../components/UI/BreadCrumbs';
import Btn from '../components/UI/Btn';
import Section from '../components/UI/Section';
import FormInput from '../components/UI/FormInput';
import {useState} from 'react'
const partners = () => {
  const PartnersHero = () => {
    return (
      <div className="mx-auto  bg-no-repeat bg-cover w-full wood-bg pt-5 pb-10 xl:pb-5">
        <div className="container mx-auto">
          <BreadCrumbs
            className="text-white pt-5 pb-5 lg:pt-10 lg:pb-8"
            pages={[
              { name: 'Главная', path: '/' },
              { name: 'Партнерам', path: '/partners' },
            ]}
          />
          <div className="flex flex-col lg:flex-row mb-6 lg:mb-24">
            <div className="flex flex-col px-4 lg:px-0">
              <h3 className="text-white font-days uppercase text-3xl lg:text-5xl">
                ЗАРАБАТЫВАЙТЕ ОТ 5%  С КАЖДОГО ЗАКАЗА
              </h3>
              <p className="text-[#FFFFFFB2] text-lg lg:text-2xl mb-5 lg:mb-16">
                предлагая террасную доску и другие изделия из ДПК
              </p>
              <p className="font-mont font-bold text-white text-lg lg:text-2xl mb-8 lg:mb-10">
                <span className="text-[#D3585C]">
                  Вам не нужно продавать - просто порекомендуйте нас,
                </span>
                <br />
                остальное мы сделаем сами и отправим вам %
              </p>
              <Btn className="btn-primary max-w-[670px] text-base lg:text-xl h-24 lg:h-20">
                Узнать условия работы и получить образцы
              </Btn>
            </div>
            <img src="/assets/PartnersBoard.png" />
          </div>
          <PartnersSteps />
        </div>
      </div>
    );
  };
  const PartnersSteps = () => {
    const stepCards = [
      {
        step: '01',
        text: (
          <>
            Выплаты сразу после <br /> оплаты клиента
          </>
        ),
      },
      {
        step: '02',
        text: (
          <>
            Нет минимального порога <br /> для заказа
          </>
        ),
      },
      {
        step: '03',
        text: (
          <>
            Чем больше клиентов, <br /> тем выше процент
          </>
        ),
      },
    ];
    const StepCard = ({ step, text }) => {
      return (
        <div className="flex flex-col items-center relative">
          <div className="bg-[#3F2F2A] relative z-10 w-20 h-20 scale-75 lg:scale-100 rounded-[50px] flex justify-center items-center mb-[-30px]">
            <div className="bg-[#FDF7F2] rounded-[50px] relative z-20 w-14 h-14 scale-75 lg:scale-100 font-days text-xl  lg:text-2xl flex justify-center items-center">
              {step}
            </div>
          </div>
          <div className="bg-[#FDF7F2] rounded-[50px] relative z-0 w-[280px] lg:w-[370px] h-[100px] lg:h-[150px] flex justify-center items-center">
            <p className="font-medium text-base lg:text-xl text-center">{text}</p>
          </div>
        </div>
      );
    };
    return (
      <div className="container mx-auto  xl:mb-[-100px]">
        <div className="flex flex-col xl:flex-row gap-4 lg:gap-8 text-black ">
          {stepCards.map((card) => (
            <StepCard step={card.step} text={card.text} />
          ))}
        </div>
      </div>
    );
  };
  const DealerCondition = () => {
    return (
      <div className="container mx-auto my-32">
        <div className="bg-[#FDF7F2] text-black max-w-[740px] h-[280px] mx-auto rounded-[20px] pt-6 lg:pt-0">
          <div className="flex flex-col-reverse lg:flex-row items-center">
            <img src="/assets/DealerList.png" className="lg:ml-[-130px]" />
            <div className="flex flex-col text-center lg:text-start font-mont font-medium text-sm lg:text-lg ">
              <p className="font-bold">Эксклюзивные условия для дилеров</p>
              <p className="mb-8">
                Оставьте запрос на получение
                <br />
                индивидуального предложения
              </p>
              <Btn className="w-[320px] lg:w-[390px] text-sm lg:teat-base lg:w-[btn-neutral text-[#E41D24] border-[#E41D24] hover:bg-[#E41D24] hover:text-white">
                Получить Условия для дилеров
              </Btn>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const DesignerCondition = () => {
    return (
      <Section>
        <div className="container mx-auto">
          <div className="flex flex-col text-black">
            <h3 className="uppercase font-days text-3xl lg:text-5xl text-center mb-6 lg:mt-0">
              УСЛОВИЯ ДЛЯ МОНТАЖНИКОВ,
              <br />
              ДИЗАЙНЕРОВ И ПРОЕКТИРОВЩИКОВ
            </h3>
            <div className="flex flex-col lg:flex-row justify-center items-center">
              <div className="flex flex-col  font-medium text-base lg:text-xl whitespace-nowrap">
                <div className="flex items-center gap-8 relative z-10 mb-4 lg:mb-8">
                  <img src="/assets/Pig.svg" />
                  <p>
                    Рекомендуйте нашу доску и <br />
                    получайте от 5% c каждого заказа
                  </p>
                </div>
                <div className="flex items-center gap-8 mb-14">
                  <img src="/assets/DesignerWood.svg" />
                  <p>
                    Вышлем образцы <br /> продукции бесплатно
                  </p>
                </div>
                <Btn className="btn-primary w-[300px] xl:w-[340px] h-16 xl:h-20 hidden lg:block">
                  Cтать партнером
                </Btn>
              </div>
              <img src="/assets/DesignerLaptop.png" className="lg:w-3/5 xl:w-3/4" />
              <Btn className="btn-primary w-[300px] xl:w-[340px] h-16 xl:h-20 block lg:hidden mt-1">
                Cтать партнером
              </Btn>
            </div>
          </div>
        </div>
      </Section>
    );
  };
  const DealerEarn = () => {
    const [volume, setVolume] = useState(0)
    const addSpaces = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return (
      <Section>
      <div className="container mx-auto">
        <div className="bg-[#FDF7F2] box-bg rounded-[60px]  py-8 lg:py-16 lg:pl-16">
          <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start text-black font-mont text-center lg:text-start mb-5">
            <h3 className="font-days uppercase text-3xl lg:text-5xl ">
              НАШ ДИЛЕР ЗАРАБАТЫВАЕТ
              <br />
              ОТ 150 000 Р В МЕСЯЦ
            </h3>
            <p className="font-bold text-xl lg:text-3xl">Узнайте, сколько вы можете заработать</p>
            <p className='font-medium text-sm lg:text-lg mb-5'>Введите объем продаж (м²)</p>
            <FormInput value={volume} className='w-[280px] lg:w-[460px] h-20 mb-8' onChange={e => setVolume(e.target.value)}/>
            <input type="range" min="0" max="10000" step='10' value={volume} onChange={e => setVolume(e.target.value)} className="w-[280px] lg:w-[460px] inputRange mb-12" />
            <div className="flex flex-col lg:flex-row gap-10 mb-10">
              <p className="font-medium text-sm lg:text-lg">Ваш доход:</p>
              <p className="font-bold text-xl lg:text-3xl">{addSpaces(volume * 700)} ₸</p>
            </div>
            <Btn className='btn-primary w-[300px] lg:w-[460px] h-16 lg:h-20  text-base lg:text-xl'>Получить условия работы</Btn>
          </div>
        </div>
      </div>
      </Section>
    );
  };
  return (
    <>
      <MainLayout>
        <PartnersHero />
        <DealerCondition />
        <DesignerCondition />
        <DealerEarn />
      </MainLayout>
    </>
  );
};

export default partners;
