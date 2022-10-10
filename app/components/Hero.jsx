import { useState } from 'react';

export default function Hero(props) {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="bg-heroBg bg-no-repeat bg-cover bg-center h-fit font-inter overflow-hidden pb-28 lg:pb-0">
      <div className="relative pt-40 lg:px-24 lg:pb-52 lg:pt-38 xl:pt-22 xl:pb-18 2xl:px-52 2xl:pb-56">
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
        <button
          className="
          tracking-wider
            bg-[#E41D24] text-white text-xl rounded-[80px] shadow-3xl block m-auto w-64 h-16 
            xs:w-80 xs:h-20 xs:text-lg
            lg:inline
            2xl:px-12 2xl:w-96 2xl:h-24 2xl:text-xl 2xl:tracking-widest
            transition duration-150
            hover:bg-[#B81C21] 
            ">
          Рассчитать стоимость
        </button>
      </div>
      <div
        className={`z-4 hidden lg:flex border border-[#25d366] rounded-3xl w-28 h-28 items-center justify-center absolute left-3/4 top-[550px] ${
          isHover ? 'hover:w-32 hover:h-32' : ''
        } `}>
        <div
          className={`z-4 border border-[#25d366] rounded-3xl w-20 h-20 flex items-center justify-center  ${
            isHover ? 'hover:w-24 hover:h-24' : ''
          }`}>
          <div className="bg-white w-10 h-10">
            <i
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              className="z-4 fa-brands fa-square-whatsapp fa-3x relative bottom-2 right-1"
              style={{
                color: '#25d366',
                display: 'block',
                justifySelf: 'center',
                alignSelf: 'center',
              }}></i>
          </div>
        </div>
      </div>
    </div>
  );
}
