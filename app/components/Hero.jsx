import WhatsAppBtn from './UI/WhatsAppBtn.jsx';
import Btn from './UI/Btn';
export default function Hero() {
  return (
    <div className="relative h-[80vh] bgHero">
      <img
        src="/assets/HeroPic.jpg"
        className="absolute w-full object-cover overflow-hidden h-full "
        alt=""
      />
      <div
        className="
        relative lg:container mx-auto h-full flex flex-col 
        items-center pt-[15vh] lg:pt-0 lg:justify-center lg:items-start gap-4 lg:gap-10
      ">
        <div
          className="
          font-days text-white text-center font-semibold uppercase text-4xl
          lg:text-start lg:w-[70%] lg:text-6xl
        ">
          Продукция из ДПК Для вашего дома
        </div>
        <ul className="list-disc list-inside flex flex-col align-center items-center lg:items-start">
          <li className="text-white text-xl lg:text-2xl">Натуральный внешний вид</li>
          <li className="text-white text-xl lg:text-2xl">Не нуждается в особом уходе</li>
          <li className="text-white text-xl lg:text-2xl">Стойкость к перепадам температур</li>
        </ul>
        <Btn
          kind="btn-primary"
          className="text-base lg:text-2xl w-[310px] h-[90px]  lg:w-[430px] lg:h-[110px]">
          Рассчитать Стоимость
        </Btn>
        <WhatsAppBtn />
      </div>
    </div>
  );
}
