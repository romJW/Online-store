export default function Map() {
    return (
      <div
        className="section text-black text-xl"
        style={{ fontFamily: 'inter, sans-serif', lineHeight: '1.4', color:"#393939" }}>
        <div className="relative  mx-auto ">
          <div className="card card-body flex flex-col gap-2 lg:gap-5 absolute z-10  rounded-[20px] bg-white justify-center top-4 lg:top-36 left-5 py-7 2xl:left-[250px]">
                  <h3 className='font-[Days] text-3xl lg:text-5xl'>КОНТАКТЫ</h3>            
            <div className='flex justify-between text-lg lg:text-xl'>
              <p>г. Алматы,</p>
              <p>ул.Ауэзова, 3/5 </p>
            </div>
            <div className="phone text-lg lg:text-xl">
              <p className="">+7 (777) 300-21-03</p>
              <div className="flex flex-col lg:flex-row justify-between">
              <p className="">+7 (727) 395-80-81</p>
              <p className="">395-80-82</p>
              </div>
            </div>
            <div className="flex gap-6  text-lg lg:text-xl 2xl:gap-10">
              <div className="flex flex-col grow">
                <p className="font-bold ">г. Караганда</p>
                <a rel="nofollow" href="tel:+7 (727) 328-80-81">+7 (727) 328-80-81</a>
              </div>
            </div>
            <div className="flex gap-6  text-lg lg:text-xl 2xl:gap-10 ">
              <div className="flex flex-col grow">
                <p className="font-bold">г. Караганда</p>
                <a className="mb-4 lg:mb-8" rel="nofollow" href="tel:+7 (727) 328-80-81">+7 (727) 328-80-81</a>
                <a className="text-[#4475BE] underline" rel="nofollow" href="tel:+7 (771) 741-18-77">
                Заказать обратный звонок
                </a>
              </div>
              
            </div>
          </div>
          <iframe
            title="map-contact"
            src="https://yandex.com/map-widget/v1/-/CCUbQVcplA"
            width="100%"
            height="744"
            frameBorder="0"
            allowFullScreen={true}
            style={{ position: 'relative',}}>
  
            </iframe>
        </div>
      </div>
    );
  }
  