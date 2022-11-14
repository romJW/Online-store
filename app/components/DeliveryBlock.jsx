import Btn from './UI/Btn';

export default function DeliveryBlock() {
  return (
    <>
      <div className="max-w-[1272px] bg-[#FDF7F2] rounded-[80px] relative mx-auto mt-20 mb-[-150px] z-1">
        <div className="wrapper text-black lg:h-[500px] pt-20 pl-10 mx-auto z-[100]">
          <h3 className="text-center lg:text-start text-3xl lg:text-5xl font-[Days] mb-3">ДОСТАВЛЯЕМ ПО ВСЕЙ РОССИИ</h3>
          <p className="text-center lg:text-start text-lg xl:text-2xl mb-8 lg:mb-0">
            Отправка в день заказа со складов в Москве, Ульяновске, Санкт-Петербурге,<br/>
            Ростове-на-Дону, Казани, Самаре, Чебоксарах. Доставляем собственным <br/> транспортом или
            транспортными компаниями: ПЭК, Деловые линии и др.
          </p>
          <div className="flex text-center justify-center items-center lg:justify-between relative flex-col lg:flex-row">
            <Btn kind="btn-primary" className='lg:relative lg:top-[-100px] h-[110px] lg:text-2xl font-bold '>Рассчитать стоимость доставки</Btn>
            <img src="/assets/elevator.png" className="mx-auto pr-8 lg:pr-0 lg:mx-0 text-base font-bold lg:text-2xl lg:relative lg:top-[-200px]" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
