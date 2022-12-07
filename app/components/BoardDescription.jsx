import Btn from '../components/UI/Btn';
import BorderlessCard from '../components/UI/BorderlessCard';
import Section from "./UI/Section"
const BorderlessCards = [
  { icon: '/assets/noun-sprout.svg', text: (<>Состав материала <br />экологически безопасен</>) },
  { icon: '/assets/noun-rain.svg', text: (<>Влагостойкость, не плесневеет <br /> под воздействием воды</>) },
  { icon: '/assets/noun-thermometer.svg', text: (<>Диапазон температур: <br /> от -60С° до +75С°</>)},
  { icon: '/assets/noun-chemistry.svg', text: (<>Не содержит вредные <br /> химические соединения</>) },
  {
    icon: '/assets/noun-diamond.svg',
    text:  (<>Не выцветает, не коробится <br /> и не трескается под солнцем</>),
  },
  { icon: '/assets/noun-bug.svg', text: (<>Материал не едят <br />  насекомые и грызуны</>)},
];
export default function BoardDescription() {
  return (
    <>
    <Section>
        <div className='relative'>
        <div className='absolute right-[1px] top-[330px]'>
          <img src='/assets/circles.svg' alt='' className=''/>
        </div>
      <div className="container relative mx-auto flex flex-col justify-center items-center text-[#2F2222] mt-10">
        <h3 className="font-[Days] uppercase text-3xl lg:text-5xl mb-10 text-center">
        ТЕРРАСНАЯ ДОСКА Напрямую от <br/> заводов <br/> СЛУЖИТ БОЛЕЕ 15 ЛЕТ
        </h3>
        <div className="flex gap-8 justify-center flex-col-reverse lg:flex-row mb-14">
          <img src="/assets/BigBoard.png" alt="" className="mx-auto max-w-full" />
          <div className="text-base flex flex-col justify-center items-start lg:text-2xl">
            <h4 className="font-bold ">
              Террасная доска WOODGRAND состоит <br /> из двух компонентов:
            </h4>
            <ul className="list-disc pl-10">
              <li>натуральная древесная мука</li>
              <li>пищевой полиэтилен низкого <br/> давления (ПНД).</li>
            </ul>
            <p className="text-start mt-4">
              Такой полиэтилен используют при изготовлении <br className='hidden sm:block'/> пластиковой посуды, труб, корпусов
              для лодок <br className='hidden sm:block'/> и даже в составе брони для бронежилетов.
            </p>
          </div>
        </div>
        <div className="container mx-auto mb-10 justify-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8  lg:px-20 gap-6">
          {BorderlessCards.map((Card) => (
            <BorderlessCard icon={Card.icon} text={Card.text} className='text-base lg:text-xl'/>
          ))}
        </div>
        <Btn
          kind="btn-primary"
          className="w-[310px] h-[84px] lg:w-[430px] lg:h-[110px] text-base lg:text-xl">
          Перейти в каталог{' '}
        </Btn>
      </div>
      </div>

      </Section>
    </>
  );
}
