import Btn from './UI/Btn';
import FormInput from './UI/FormInput';
import CheckBox from './UI/CheckBox';
import Section from '../components/UI/Section.jsx';
export default function Consult() {
  return (
    <>
    <Section>
      <div className="mx-auto ">
        <div className="container text-black px-2 mx-auto flex flex-col justify-center items-center bg-[#FDF7F2] bg-subscribe relative rounded-[80px] py-12 pb-[170px] lg:pb-12">
          <h3 className="font-[Days]  text-3xl lg:text-5xl mb-3 font-bold text-center">
            Подпишитесь на рассылку
          </h3>
          <p className="text-center text-xl lg:text-2xl mb-8 ">
            <span className="font-bold">и получите в подарок</span> подборку «ТОП-5 ошибок при
            монтаже террасной доски»
          </p>
          <div className="flex gap-5 mb-4 items-center flex-col lg:flex-row">
            <FormInput
              className="w-full lg:w-[380px] h-[75px] text-sm lg:text-lg"
              placeholder="Ваша электронная почта"
            />
            <Btn
              kind="btn-primary"
              className="w-[330px] lg:w-[330px] h-[75px] font-semibold text-lg lg:text-2xl">
              Подписаться
            </Btn>
          </div>
          <div className="flex gap-2">
            <CheckBox className="w-5 h-5" />
            <p className="text-sm text-[#2F222266]">
              Согласен с{' '}
              <a href="#" className="font-[Montserrat] text-[#4E5CD1]">
                политикой конфиденциальности и обработкой моих персональных данных
              </a>
            </p>
          </div>
          <div className="bg-[#852E137A]">
          </div>
        </div>
      </div>
      </Section>
    </>
  );
}
