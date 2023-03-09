import Btn from './UI/Btn';

export default function MontageBlock() {
  return (
    <>
      <div className="max-w-[1272px] bg-[#FDF7F2] rounded-[80px] relative lg:mx-auto mt-20 mb-[-50px] z-1 mx-2">
        <div className="wrapper text-black lg:h-[635px] pb-12 pt-16 lg:pl-24 px-2 lg:mx-auto z-[100]">
          <h3 className="text-center lg:text-start text-3xl lg:text-5xl font-[Days] mb-3 uppercase">
            монтаж Террасной <br /> доски не сложен
          </h3>
          <div className="flex flex-col lg:gap-10 lg:w-[650px]">
            <p className="text-center lg:text-start text-lg xl:text-2xl lg:mb-0">
              Не требует особых навыков и специальной подготовки
            </p>
            <p className="text-center lg:text-start text-lg xl:text-xl lg:mb-0">
            Террасную доску крепят специальным, скрытым <br /> крепежом к лагам. 
            </p>
            <p className="text-center lg:text-start text-lg xl:text-xl lg:mb-0">
            Компания ABBEX предоставляет свою инструкцию <br /> компании прямо  по монтажу нашей продукции
            </p>
            <img
              src="/assets/BoardPiece.png"
              className="lg:hidden mx-auto pr-8 lg:pr-0 lg:mx-0 text-base font-bold lg:text-2xl lg:relative lg:top-[-300px] right-[50px]"
              alt=""
            />
           
          </div>

          <div className="flex text-center justify-center items-center lg:justify-between relative flex-col lg:flex-row">
            <Btn
              kind="btn-primary"
              className="mt-8 lg:relative lg:top-[-170px] h-[80px] lg:h-[110px] w-full lg:w-[430px] lg:text-2xl font-bold ">
              посмотреть инструкцию
            </Btn>
            <img
              src="/assets/BoardPiece.png"
              className="lg:w-[550px] xl:w-full scale-[.85] hidden lg:block mx-auto pr-8 lg:pr-0 lg:mx-0 text-base lg:text-xl lg:relative lg:top-[-350px] "
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
