import WhatsAppBtn from "./UI/WhatsAppBtn.jsx";
import Btn from './UI/Btn'
import BreadCrumbs from './UI/BreadCrumbs';
import FormInput from './UI/FormInput';
import PhoneInput from './UI/PhoneInput';
import FormTextArea from './UI/FormTextArea';
import CheckBox from './UI/CheckBox';
export default function Hero() {


const MontageForm = ()=>{
return(
    <>
      <div className="mx-auto flex flex-col lg:flex-row justify-center items-center">
        <div className="container  py-12 text-black px-10 flex flex-col z-10 justify-center items-center lg:w-[520px]  bg-[#FDF7F2] rounded-[80px]">
          <p className="mb-8 text-xl text-center  lg:text-2xl">
            Нужен профессиональный <br /> монтаж или замер?
          </p>
          <FormInput
            className="w-[300px] lg:w-[420px] h-[65px] lg:h-[75px] mb-3"
            placeholder="Ваше имя"
          />
          <PhoneInput
            className="w-[300px] lg:w-[420px] h-[65px] lg:h-[75px] mb-3 placeholder:text-start"
            placeholder='Номер телефона'
          />
          <FormTextArea placeholder="Ваш вопрос" className='w-[300px] lg:w-[420px] h-[100px] lg:h-[120px] mb-6'/>
          <div className="flex flex-col-reverse lg:flex-col items-center gap-5">
            <Btn kind="btn-primary w-[300px] lg:w-[420px] h-[65px] lg:h-[85px] text-xl mb-4">
              Отправить
            </Btn>
          </div>
          <div className="flex items-start justify-center gap-3">
              <CheckBox className="w-5 h-5" />
              <p className="text-sm  text-[#4E5CD1] font-[Montserrat]">
                <span className="text-[#2F222266]">Согласен с</span> политикой конфиденциальности
                <br />и обработкой моих персональных данных
              </p>
            </div>
        </div>
      </div>
    </>
)
}

const ListItem = ({children}) => {
    return( 
        <div className='flex gap-4 items-center'>
            <img src='/assets/check.svg' className='w-4 h-4 lg:w-6 lg:h-6'/> 
             <p className="text-base lg:text-xl">{children}</p>
        </div> 
    )
}
  return (
    <div className="relative">
      
      <img
        src="/assets/MontageBg.png"
        className="absolute w-full object-cover overflow-hidden h-full"
        alt=""
      />
      <div className="
        lg:py-12
        mt-2
        relative lg:container mx-auto h-full flex flex-col 
        items-center  lg:items-start gap-4 lg:gap-8
        px-3
      ">
           <BreadCrumbs className='text-white pt-10' pages={[{name:'Главная', path:'/'}, {name:'каталог ДПК', path:'/catalog'},{name:'cтупени из ДПК', path:'/catalog/board'}]}/>
        <h3 className="
          font-days text-white font-semibold uppercase text-3xl
          lg:w-[70%] lg:text-5xl lg:whitespace-nowrap
          lg:mb-12
        ">
          Монтаж террасной доски
        </h3>
        <div className="flex flex-col md:flex-row justify-center gap-6 lg:gap-28 pb-6">
        <div className='font-[Montserrat] lg:pt-16'>
        <p className='text-2xl lg:text-3xl font-bold text-white mb-0 lg:mb-10 px-3'>Реализуем проект любой <br/> сложности и масштаба:</p>
        <div className="text-xl text-white list-inside flex flex-col align-center gap-2 lg:gap-5 px-3">
          <ListItem>Террасы и веранды</ListItem>
          <ListItem>Коммерческие объекты</ListItem>
          <ListItem>Беседки и подиумы</ListItem>
          <ListItem>Пирсы и причалы</ListItem>
          <ListItem>Заборы и ограждения</ListItem>
        </div>
        </div>
        <MontageForm/>
        </div>
      </div>
    </div>
  );
}
