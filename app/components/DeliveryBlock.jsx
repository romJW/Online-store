import Btn from './UI/Btn';

export default function DeliveryBlock() {
  return (
    <>
      <div className="max-w-[1272px] bg-[#FDF7F2] rounded-[80px] relative mx-auto mb-[-100px] lg:mb-[-150px] z-40">
        <div className="wrapper text-black lg:h-[500px] pt-20 px-6 lg:px-0 lg:pl-10 mx-auto ">
          <h3 className="text-center lg:text-start text-3xl lg:text-5xl font-[Days] mb-3">
            ДОСТАВЛЯЕМ ПО ВСЕМУ КАЗАХСТАНУ
          </h3>
          <p className="text-center lg:text-start text-lg xl:text-2xl mb-8 lg:mb-10">
            Отправка сразу после оплаты заказа со склада в г.Алматы. <br/> Доставляем собственным
            транспортом или <br/> транспортными компаниями: JetLogistic, Алем-тат и тд.
          </p>
          <div className="flex text-center justify-center items-center lg:justify-between relative flex-col lg:flex-row">
            <Btn
              kind="btn-primary"
              className="lg:relative lg:top-[-100px] h-[110px] text-base xl:text-2xl font-bold w-[300px] xl:w-[580px]">
              Рассчитать стоимость доставки
            </Btn>
            <img
              src="/assets/truck.png"
              className="mx-auto pr-8 lg:pr-0 lg:mx-0 text-base font-bold lg:text-2xl lg:relative lg:top-[-120px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
