import { useContext } from 'react';
import { ModalFormContext, ModalDataSentContext } from '../../contexts/context';
import PhoneInput from '../UI/PhoneInput';
import FormInput from '../UI/FormInput';
import Btn from '../UI/Btn';
import CheckBox from '../UI/CheckBox';
const Modal = () => {
  const { isForm, setForm } = useContext(ModalFormContext);
  const { isDataSent, setDataSent } = useContext(ModalDataSentContext);
  return (
    <>
      <div className="fixed flex justify-center top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]  z-[100]">
        <div className="w-[320px] lg:w-[700px] max-h-[600px] mx-auto py-10 lg:py-20  text-black bg-white border-[#D5D5D5] rounded-[5px]  z-[100] ">
          <div className="flex flex-col justify-center items-center px-2">
            <h3 className="text-lg text-center lg:text-2xl font-bold mb-2">Оставьте ваши данные</h3>
            <p className="text-sm text-center  lg:text-lg mb-8">
              и наш менеджер перезвонит вам в ближайшее время
            </p>
            <FormInput
              className="w-[300px] lg:w-[420px] h-[65px] lg:h-[75px] mb-3"
              placeholder="Ваше имя"
            />
            <PhoneInput
              className="w-[300px] lg:w-[420px] h-[65px] lg:h-[75px] mb-8 placeholder:text-start"
              placeholder="Номер телефона"
            />
            <div className="flex flex-col-reverse lg:flex-col items-center gap-5 lg:pb-12">
              <Btn
                kind="btn-primary w-[300px] lg:w-[420px] h-[65px] lg:h-[85px] text-xl mb-4"
                onClick={() => {
                setForm(false)
                setDataSent(true)
                
                }
            }>
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
          </div>
        </div>
        <i
          onClick={() => setForm(false)}
          className="fa-sharp cursor-pointer fa-solid fa-xmark fa-3x absolute right-0 lg:right-[-40px] top-[-50px]"></i>
      </div>
    </>
  );
};
export default function ModalForm() {
  const { isForm, setForm } = useContext(ModalFormContext);
  return (
    <>
      {isForm && (
        <>
          <div
            onClick={() => setForm(false)}
            className="blurBG  bg-[rgba(0,0,0,0.75)] w-full h-screen top-2/4 left-2/4 fixed translate-x-[-50%] translate-y-[-50%] z-[90]"></div>
          <Modal />
        </>
      )}
    </>
  );
}
