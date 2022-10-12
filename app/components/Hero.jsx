import Btn from './UI/Btn';
import WhatsAppBtn from './UI/WhatsAppBtn.jsx';
export default function Hero(props) {
  return (
    <div className="bg-no-repeat bg-cover bg-center h-fit font-inter overflow-hidden pb-28 lg:pb-0">
      <img
        src="/assets/hero.png"
        className="absolute w-screen object-cover overflow-hidden h-fit"
        alt=""
      />
      <div className="relative pt-40 lg:px-24 lg:pb-52 lg:pt-38 xl:pt-22 xl:pb-18 2xl:px-52 2xl:pb-56 flex lg:block flex-col items-center">
        <div
          className="
          text-white
            h-fit pb-3 text-center font-semibold leading-10 uppercase text-4xl	
            xs:text-4xl xs:leading-[54px] xs:tracking-wide
            md:text-5xl md:leading-[60px]
            lg:text-left
            xl:leading-[91px] xl:text-7xl
            2xl:font-bold 2xl:pb-0 2xl:mb-10"
          style={{
            fontFamily: 'Days',
          }}>
          Террасная доска <br /> и ограждения из ДПК
        </div>
        <ul
          className="list-disc 
        flex
        flex-col
        align-center
        items-center
        lg:items-start
        ml-6
        mb-8
        lg:mb-16">
          <li
            className="
            text-white
            text-lg	
            h-fit text-center font-light text-sm tracking-wider
            xs:text-base xs:mx-8
            md:text-xl
            lg:mx-0 lg:pb-0 lg:px-0 lg:text-3xl lg:font-xs lg:text-left
            lg:mr-20
            2xl:w-1/2">
            Натуральный внешний вид
          </li>
          <li
            className="
            text-white
            h-fit text-center font-light text-sm tracking-wider
            text-lg	
            xs:text-base xs:mx-8
            md:text-xl
            lg:mx-0 lg:pb-0 lg:px-0 lg:text-3xl lg:font-xs lg:text-left
            lg:mr-20
           2xl:w-1/2">
            Не нуждается в особом уходе
          </li>
          <li
            className="
            text-white
            text-lg	
            h-fit text-center font-light text-sm tracking-wider
            xs:text-base xs:mx-8
            md:text-xl
            lg:mx-0 lg:pb-0 lg:px-0 lg:text-3xl lg:font-xs lg:text-left
            lg:mr-20
            2xl:w-1/2">
            Стойкость к перепадам температур
          </li>
        </ul>
        <Btn className='btn btn-primary w-80  h-10 lg:h-[100px] text-base lg:text-xl'>Рассчитать Стоимость</Btn>

        <WhatsAppBtn />
      </div>
    </div>
  );
}
