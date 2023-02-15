export default function Map() {
  return (
    <div
      className="section w-full text-black text-xl relative"
      style={{ fontFamily: 'inter, sans-serif', lineHeight: '1.4', color: '#393939' }}>
      <div className="relative  mx-auto ">
        <div className="card card-body flex flex-col gap-2 lg:gap-5 absolute z-10  rounded-[20px] bg-white justify-center top-4 lg:top-8 left-2 lg:left-[100px] py-7 2xl:left-[250px]">
          <h3 className="font-[Days] text-3xl lg:text-5xl">КОНТАКТЫ</h3>
          <div className="flex flex-col justify-between text-lg lg:text-xl">
            <p className="font-bold ">г. Астана</p>
            <p className='mb-2'>+7 (771) 741-18-88 </p>
            <p>ул.Сыганак 47 <br/> 17 этаж. каб. 1702 </p>
          </div>
          
          <div className="flex gap-6  text-lg lg:text-xl 2xl:gap-10">
            <div className="flex flex-col grow">
              <p className="font-bold ">г. Алматы</p>
              <a rel="nofollow" href="tel:+7 (771) 741-18-44">
              +7 (771) 741-18-44
              </a>
              <a className='mb-2' rel="nofollow" href="tel:+7 (771) 741-18-77">
              +7 (771) 741-18-77
              </a>
              <p>ул.Нурмакова 1А </p>
            </div>
          </div>
          <div className="flex gap-6  text-lg lg:text-xl 2xl:gap-10 ">
            <div className="flex flex-col grow">
              <p className="font-bold">График работы:</p>
              <p className="mb-2 lg:mb-8">
              Пн-Пт: 8:00-17:00
              </p>
              <p className="font-bold">Отгрузки:</p>
              <p className="mb-2 lg:mb-4">
              Пн-Пт: 8:00-16:30
              </p>
              <p className="font-bold">E-mail</p>
              <p className="mb-2 lg:mb-4">
              sales@abbex.kz
              </p>
              <a className="text-[#4475BE] underline" rel="nofollow" href="tel:+7 (771) 741-18-77">
                Заказать обратный звонок
              </a>
            </div>
          </div>
        </div>
        <iframe
          title="map-contact"
          src="https://yandex.com/map-widget/v1/-/CCUCNDSfdB"
          width="100%"
          height="744"
          frameBorder="0"
          allowFullScreen={true}
          style={{ position: 'relative', width: '100%'}}></iframe>
      </div>
    </div>
  );
}
