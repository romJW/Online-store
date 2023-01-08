import { useContext, useState, useEffect } from 'react';
import { ModalInstructionContext } from '../../contexts/context';
import PhoneInput from '../UI/PhoneInput';
import FormInput from '../UI/FormInput';
import Btn from '../UI/Btn';
import CheckBox from '../UI/CheckBox';
const Modal = () => {
  const { isInstructionModalOpen, setInstructionModalOpen } = useContext(ModalInstructionContext);
  return (
    <>
      <div className="fixed flex justify-center top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]  z-[100]">
        <div className="w-[320px] lg:w-[900px] xl:w-[1170px] h-[710px] text-black bg-white border-[#D5D5D5] rounded-[5px]  z-[100]  pb-4 ">
          <div className="flex items-center justify-center gap-24 px-16 py-8 lg:py-14 ">
            <div className='hidden xl:flex '>
            <img src="/assets/Instruction.png" className="w-[430px]" />
            </div>
            <div className="flex flex-col max-w-[500px]">
              <h3 className="font-days uppercase text-3xl lg:text-[35px] text-center lg:text-start mb-2">
                Получите бесплатно
              </h3>
              <p className="text-lg lg:text-2xl text-center lg:text-start mb-8">
                инструкцию по монтажу ступеней из ДПК «WOODGRAND». Оставьте ваши данные,
                <br />и мы отправим инструкцию
                <br />
                через пару минут
              </p>
              <FormInput
                className="w-[300px] lg:w-[420px] h-[75px] mb-2"
                placeholder="Введите ваше имя"
              />
              <PhoneInput
                className="w-[300px] lg:w-[420px] h-[75px] mb-8"
                placeholder="Номер телефона"
              />
              <div className="flex flex-col">
                <Btn className="btn-primary w-[300px] lg:w-[420px] h-[90px] text-base lg:text-xl mb-4">
                  Получить инструкцию
                </Btn>
                <div className="flex items-start  gap-3">
                  <CheckBox className="w-5 h-5" />
                  <p className="text-sm  text-[#4E5CD1] font-[Montserrat]">
                    <span className="text-[#2F222266]">Согласен с</span> политикой
                    конфиденциальности
                    <br />и обработкой моих персональных данных
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <i
          onClick={() => setInstructionModalOpen(false)}
          className="fa-sharp cursor-pointer fa-solid fa-xmark fa-3x absolute right-0 lg:right-[-40px] top-[-50px]"></i>
      </div>
    </>
  );
};
export default function ModalInstructionForm() {
  const { isInstructionModalOpen, setInstructionModalOpen } = useContext(ModalInstructionContext);
  return (
    <>
      {isInstructionModalOpen && (
        <>
          <div
            onClick={() => setInstructionModalOpen(false)}
            className="blurBG  bg-[rgba(0,0,0,0.75)] w-full h-screen top-2/4 left-2/4 fixed translate-x-[-50%] translate-y-[-50%] z-[90]"></div>
          <Modal />
        </>
      )}
    </>
  );
}
