import MainSectionCard from '../components/UI/mainSectionCard.jsx';
import MainSectionPicCard from '../components/UI/mainSectionPicCard.jsx';
import Btn from '../components/UI/Btn.jsx';
import Section from '../components/UI/Section.jsx';
export default function mainSection() {
  const cardsInfo = [
    {
      icon: '/assets/DeliveryIcon.svg',
      title: <>Доставка по всей <br/> стране до 7 дней</>,
    },
    { icon: '/assets/DiamondIcon.svg', title: <>Устойчивость к <br/> внешним воздействиям</> },
    { icon: '/assets/RecycleIcon.svg', title: <>Экологичность <br/> материалов</> },
  ];
  const cardsPicInfo = [
    {
      image:`/assets/wooden-board.png` ,
      title: `Террасная доска`,
    },
    { image:`/assets/wooden-stairs.png` , title: 'Ступени из ДПК' },
    { image:`/assets/wooden-defense.png` , title: 'Ограждения из ДПК' },
    { image:`/assets/wooden-hedge.png` , title: 'Заборная доска из ДПК' },
  ];
  return (
    <>
      <div className="mainSection w-full relative mx-auto flex flex-col justify-center  text-black py-12">
      <div className='absolute right-[1px] top-[110px]'>
          <img src='assets/circles.svg' alt='' className=''/>
        </div>
        <div className="mainSection__container w-full  mx-auto flex flex-col justify-center items-center relative">
          <h3 className="font-[Days] text-center text-3xl lg:text-5xl uppercase relative top-[80px]">
            Террасная доска <br /> от производителя
          </h3>
          <div className="mainSection__cards container flex flex-col items-center lg:flex-row gap-7 justify-center relative z-2 top-[130px] mb-20">
            {cardsInfo.map((cardInfo) => (
              <MainSectionCard icon={cardInfo.icon} title={cardInfo.title} key={cardInfo.title} />
            ))}
          </div>
            <div className='wood-bg  bg-no-repeat bg-cover bg-center h-full flex flex-col justify-center items-center pt-[140px] pb-14'>
            <h3 className="font-[Days] text-3xl	text-center lg:text-5xl mb-10 text-white  uppercase ">В продаже</h3>
            <div className="flex flex-col xl:flex-row items-center justify-center container gap-5 mb-10">
                {
                    cardsPicInfo.map((cardPicInfo)=><MainSectionPicCard image={cardPicInfo.image} title={cardPicInfo.title} key={cardPicInfo.title}/>)
                }
            </div>
            <Btn kind='primary' children='Смотреть все товары' className='w-[310px] h-[84px] text-base lg:w-[429px] lg:h-[109px] lg:text-[22px]'/>
            </div>
          
        </div>
      </div>
    </>
  );
}
