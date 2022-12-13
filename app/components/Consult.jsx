import Btn from './UI/Btn';
import FormInput from './UI/FormInput';
import PhoneInput from './UI/PhoneInput';
import CheckBox from './UI/CheckBox';
import Section from '../components/UI/Section.jsx';
export default function Consult({title,text}) {
  return (
    <>
    <Section>
      <div className="mx-auto relative z-10">
        <div className="container z-10 text-black mx-auto flex flex-col justify-center items-center">
          <h3 className="font-[Days] uppercase text-3xl lg:text-5xl mb-3 text-center">{title}</h3>
          <div className="text-xl lg:text-3xl mb-8 text-center">
           {text}
          </div>
          <div className="flex gap-5 mb-4 items-center flex-col lg:flex-row">
            <FormInput className="w-full lg:w-[300px] xl:w-[380px] h-[75px] text-sm lg:text-lg" placeholder="Введите ваше имя"/>
            <PhoneInput className="w-full lg:w-[300px] xl:w-[380px] h-[75px] text-sm lg:text-lg placeholder:pl-0 placeholder:text-start" placeholder="Ваш номер телефона"/>
            <Btn kind='btn-primary' className="z-2 w-[300px] xl:w-[330px] h-[75px] font-semibold text-lg lg:text-2xl">Отправить</Btn>
          </div>
          <div className="flex gap-2">
            <CheckBox className='w-5 h-5'/>
            <p className="text-sm text-[#2F222266]">
              Согласен с{' '}
              <a href="#" className="font-mont text-[#4E5CD1]">
                политикой конфиденциальности и обработкой моих персональных данных
              </a>
            </p>
          </div>
        </div>
      </div>
      </Section>
    </>
  );
}
