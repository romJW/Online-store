import Btn from './UI/Btn';
import FormInput from './UI/FormInput';
import PhoneInput from './UI/PhoneInput';
import CheckBox from './UI/CheckBox';
export default function Consult() {
  return (
    <>
      <div className="mx-auto mt-[-50px] flex flex-col lg:flex-row justify-center items-center">
        <div className="container text-black px-10 flex flex-col z-10 justify-center items-center w-[745px]  bg-[#FDF7F2] rounded-[80px]">
          <h3 className="text-3xl text-center lg:text-5xl font-[Days] mb-3 mt-10 lg:mt-20">
            Заполните форму
          </h3>
          <p className="mb-8 text-lg text-center  lg:text-2xl">
            и мы свяжемся с вами для бесплатного <br /> расчета стоимости проекта и доставки
          </p>
          <FormInput
            className="w-[300px] lg:w-[420px] h-[65px] lg:h-[75px] mb-3"
            placeholder="Ваше имя"
          />
          <PhoneInput
            className="w-[300px] lg:w-[420px] h-[65px] lg:h-[75px] mb-3 text-center placeholder:text-start"
            placeholder="Ваш номер"
          />
          <Btn kind="btn-secondary rounded-[18px] w-[300px] lg:w-[420px] h-[65px] text-sm mb-3 lg:mb-6">
            Прикрепить файл
          </Btn>
          <div className="flex flex-col-reverse lg:flex-col items-center gap-5 lg:pb-12">
            <Btn kind="btn-primary w-[300px] lg:w-[420px] h-[65px] lg:h-[85px] text-xl mb-4">
              Отправить
            </Btn>
            <div className="flex items-start justify-center gap-3">
              <CheckBox className="w-5 h-5" />
              <p className="text-sm  text-[#4E5CD1] font-[Montserrat]">
                <span className="text-[#2F222266]">Согласен с</span> политикой конфиденциальности
                <br />и обработкой моих персональных данных
              </p>
            </div>
          </div>
          <img src="assets/Ipad.png " className="mr-20 lg:ml-[-270px] block lg:hidden" alt="" />
        </div>
        <img
          src="assets/Ipad.png "
          className="w-[900px] h-[700px] mr-20 realtive z-1 hidden lg:block lg:ml-[-400px] "
          alt=""
        />
      </div>
    </>
  );
}
