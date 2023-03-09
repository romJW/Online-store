import Btn from './UI/Btn'
const socials = [
  {
    logo: 'youtube.svg',
    path: '/',
    id: '1',
    color: '#FF0000',
  },
  {
    logo: 'instagram.svg',
    path: '/',
    id: '2',
    color: '#8a3ab9	',
  },
  {
    logo: 'vk.svg',
    path: '/',
    id: '3',
    color: '#4C75A3',
  },
  {
    logo: 'whatsapp.svg',
    path: '/',
    id: '4',
    color: '#25d366',
  },
  {
    logo: 'telegram.svg',
    path: '/',
    id: '5',
    color: '#2AABEE',
  },
];
export default function Map() {
  return (
    <div
      className="section w-full text-black text-xl relative"
      style={{ fontFamily: 'inter, sans-serif', lineHeight: '1.4', color: '#393939' }}>
      <div className="relative  mx-auto ">
        <div className="card card-body flex flex-col gap-2 lg:gap-5 absolute z-10  rounded-[20px] bg-white justify-center top-32 lg:top-8 left-14 lg:left-[100px] py-7 2xl:left-[250px]">
          <h3 className="font-[Days] text-3xl lg:text-5xl">КОНТАКТЫ</h3>
          <div className="flex flex-col justify-between text-lg lg:text-xl">
            <p className="font-bold ">г. Астана</p>
            <p className='mb-2 hover:text-[#D3585C]'>+7 (771) 741-18-88 </p>
            <p>ул.Сыганак 47 <br/> 17 этаж. каб. 1702 </p>
          </div>
          
          <div className="flex gap-6  text-lg lg:text-xl 2xl:gap-10">
            <div className="flex flex-col grow">
              <p className="font-bold ">г. Алматы</p>
              <a rel="nofollow" href="tel:+7 (771) 741-18-44" className='hover:text-[#D3585C]'>
              +7 (771) 741-18-44
              </a>
              <a className='mb-2 hover:text-[#D3585C]' rel="nofollow" href="tel:+7 (771) 741-18-77">
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
              <p className="mb-2 lg:mb-4 hover:text-[#D3585C]">
              sales@abbex.kz
              </p>
              <Btn className='btn btn-neutral text-black hover:bg-white border-black hover:text-[#D3585C] hover:border-[#D3585C]'>
                Заказать звонок
              </Btn>
              <div className="flex justify-center gap-4 flex-wrap w-[130px] sm:w-full mt-4">
                      {socials.map((social) => (
                        <a key={social.id} rel="nofollow" href={social.path}>
                          <img
                            className="w-10 h-10 hover:scale-110"
                            src={`/assets/${social.logo}`}
                            style={{
                              position: 'relative',
                              top: '1px',
                              color: `${social.color}`,
                              display: 'block',
                              justifySelf: 'center',
                              alignSelf: 'center',
                            }}
                          />
                        </a>
                      ))}
                    </div>
            </div>
          </div>
        </div>
        <iframe
          title="map-contact"
          src="https://yandex.com/map-widget/v1/-/CCUCNDSfdB"
          width="100%"
          height="844"
          frameBorder="0"
          allowFullScreen={true}
          style={{ position: 'relative', width: '100%'}}></iframe>
      </div>
    </div>
  );
}
