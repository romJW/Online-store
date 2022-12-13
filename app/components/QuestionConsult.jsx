import PhoneInput from './UI/PhoneInput';
import FormInput from './UI/FormInput';
import FormTextArea from './UI/FormTextArea';
import Btn from './UI/Btn';
import CheckBox from './UI/CheckBox';
import Section from './UI/Section';
const QuestionConsult = () => {
  return (
    <Section>
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-5 text-black">
          <div>
            <h3 className="font-days text-center uppercase text-3xl lg:text-5xl">
              остались вопросы
              <br /> или нужна консультация
            </h3>
            <p className="text-2xl lg:text-3xl text-center">
              <span className="font-bold">по вашему объекту.</span> Оставьте заявку и наш менеджер{' '}
              <br /> свяжется с вами чтобы проконсультировать
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-5 justify-center">
            <FormInput className="w-[300px] lg:w-[380px] h-[75px]" placeholder="Введите ваше имя" />
            <PhoneInput
              className="w-[300px] lg:w-[380px] h-[75px]"
              placeholder="Ваш номер телефона"
            />
          </div>
          <FormTextArea className="w-[300px] lg:w-[780px] h-[122px]" placeholder="Ваш вопрос" />
          <Btn className="btn btn-primary w-[300px] lg:w-[420px] h-[85px] text-xl">Отправить</Btn>
          <div className="flex gap-2">
            <CheckBox className="w-5 h-5" />
            <p className="text-sm text-[#2F222266]">
              Согласен с{' '}
              <a href="#" className="font-mont text-[#4E5CD1]">
                политикой конфиденциальности <br /> и обработкой моих персональных данных
              </a>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default QuestionConsult;
