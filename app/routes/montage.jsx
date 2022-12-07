import MontageHero from '../components/MontageHero';
import FormBlock from '../components/FormBlock';
import Subscribe from '../components/Subscribe';
import MainLayout from '../layouts/MainLayout';
import Section from '../components/UI/Section'

const MontageAdvantages = () => {
    const advantages = [
      {icon:'Calculator.svg', text:'Рассчитаем количество материалов и объем работ'},
      {icon:'Drill.svg', text:'Проведем замер с учетом всех нюансов и деталей'},
      {icon:'MeasureTape.svg', text:'Проведем замер с учетом всех нюансов и деталей'},
      {icon:'Location.svg', text:'Работаем во всех крупных городах РФ'},
    ]
  const AdvantageCard = ({icon, text}) => {
    return(
      <div className="w-[290px] py-5 px-2 rounded-[10px] montageCardShadow ">
        <div className="flex flex-col justify-center items-center gap-2 lg:gap-6 ">
            <img src={`/assets/${icon}`} className='scale-75 lg:scale-100'/>
            <p className='font-medium text-base lg:text-xl text-center text-black'>{text}</p>
        </div>
      </div>
    )
  }
return(
  <Section>
  <div className="mx-auto container">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-2 justify-center items-center">
          {advantages.map(advantage=><AdvantageCard icon={advantage.icon} text={advantage.text}/>)}
      </div>
  </div>
  </Section>
)
}

const MontagePriviliges = () => {
  const priviliges = [
    {icon:'PrivelegeWood.svg', text:'Надежное современное  покрытие, без дефектов'},
    {icon:'PrivelegeMechanism.svg', text:'Соблюдение правил и технологии монтажа'},
    {icon:'PrivelegeTape.svg', text:'Большой опыт работы с ДПК. Более 5 лет'},
    {icon:'PrivelegeWallet.svg', text:'Оптимизация расходов на материалы'},
  ]
  const PrivilegeCard = ({icon, text}) => {
    return(
      <div className="">
        <div className="flex flex-col justify-center items-center gap-5 lg:max-w-[270px]">
            <img src={`/assets/${icon}`} className='scale-75 lg:scale-100'/>
            <p className='font-medium text-base lg:text-xl text-center text-black'>{text}</p>
        </div>
      </div>
    )
  }
  return(
    <div className="mx-auto bg-[#FDF7F2] rounded-[60px] py-12 px-16 max-w-[320px] lg:max-w-[1310px] mb-[-50px] relative z-10">
       <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 justify-center items-center ">
          {priviliges.map(privilige=><PrivilegeCard icon={privilige.icon} text={privilige.text}/>)}
      </div> 
    </div>
  )
}
const MontageSliderCard = ({ image, title, city, size, className, onClick, path }) => {
  return (
    <>
      <div className={`flex flex-col w-[570px]  shadow-md rounded-[10px]  pb-8  ${className}`} onClick={onClick}>
          <img src={`/assets/${image}`}/>
        <div className="flex flex-col gap-2 px-2 text-sm lg:text-xl text-black">
          <p className="text-black">{title}</p>
          <div className="flex gap-10">
          <div className="flex text-[#286F2B] gap-2">
            <img src="/assets/place.svg" alt="" />
            <p>{city}м2</p>
          </div>
          <div className="flex text-[#286F2B] gap-2">
            <img src="/assets/expand.svg" alt="" />
            <p>{size}м2</p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
const MontagePriceBlock = () => {
  return (
    <div className="bg-footer pt-[150px] pb-[100px] px-2">
        <div className="mx-auto text-white flex flex-col items-center lg:items-start container">
        <h3 className="text-3xl lg:text-5xl font-[Days] mb-8">Стоимость монтажа <br/> террасной доски</h3>
          <div className='flex flex-col lg:flex-row items-center gap-3 mb-12'>
              <div className="lg:w-[590px] text-xl text-[#FFFFFFB2] flex flex-col gap-8">
              <p>Мы всегда даем честные и рыночные цены на услуги монтажа террасной доски и других изделий из ДПК. В большинстве случаем, стоимость рассчитывается за 1 м². Точная цена формируется после этапа замера.</p>
              <p>Наверняка у вас есть дополнительные вопросы, наш руководитель отдела монтажа предоставит нужную и актуальную информацию об оказываемых услугах и расценках. </p>
              <p>Отправьте заявку для связи прямо сейчас. Вам перезвонят и дадут консультацию. </p>
              </div>
            <img src='assets/MontagePriceBlock.png' className='lg:h-[300px] '/>
          </div>
          <div className='flex flex-col lg:flex-row gap-5 lg:gap-[185px] text-sm lg:text-lg  text-[#FDF7F2]'>
            <div className='flex items-center gap-4'>
              <img src='/assets/MontageWarranty.svg' className='w-8 h-8 lg:w-12 h-12'/>
              <p>Услуги бригад от компании «WOODGRAND» <br/> соответствуют всем стандартам</p>
            </div>
            <div className='flex items-center gap-4'>
              <img src='/assets/MontageIcon.svg' className='w-8 h-8 lg:w-12 h-12'/>
              <p>Мы готовы провести замер и рассчитать <br/> стоимость для объектов, любой площади</p>
            </div>
          </div>
        </div>
    </div>
  )
}
export default function Index() {
  return (
    <>
      <MainLayout>
        <MontageHero />
         <MontageAdvantages/>
         <MontagePriviliges/>
         <MontagePriceBlock/>
         <FormBlock/>
         <Subscribe/>
      </MainLayout>
    </>
  );
}
