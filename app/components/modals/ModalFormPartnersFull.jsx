import { useContext, useState } from 'react';
import { ModalFormPartnersFullContext, ModalDataSentContext } from '../../contexts/context';
import PhoneInput from '../UI/PhoneInput';
import FormInput from '../UI/FormInput';
import Btn from '../UI/Btn';
import CheckBox from '../UI/CheckBox';

const BussinesInput = ({ children, className, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-between formInputShadow border text-[#2F222299] rounded-[10px] pl-8 pr-4 text-lg ${className}`}>
      <p>{children}</p>
      <i class="fa-solid fa-chevron-up"></i>
    </div>
  );
};
const BussinesDropList = ({ children, className }) => {
  return <div className={`bg-white formInputShadow absolute z-10 ${className}`}>{children}</div>;
};
const BussinesDropListItem = ({ children, onClick }) => {
  return (
    <div
      className={`flex items-center w-[300px] lg:w-[420px] h-16 text-lg pl-8 hover:bg-[#F3DFCE]`}
      onClick={onClick}>
      <p>{children}</p>
    </div>
  );
};
const Modal = () => {
  const { isFormPartnersFull, setFormPartnersFull } = useContext(ModalFormPartnersFullContext);
  const { isDataSent, setDataSent } = useContext(ModalDataSentContext);
  const [isListOpen, setListOpen] = useState(false);
  const [itemChosen, setItemChosen] = useState('Выберите сферу бизнеса ');
  return (
    <>
      <div className="fixed flex justify-center top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]  z-[100]">
        <div className="w-[320px] lg:w-[690px] mx-auto py-10 text-black bg-white border-[#D5D5D5] rounded-[5px]  z-[100] overflow-auto">
          <div className="flex flex-col justify-center items-center px-2">
            <h3 className="text-lg text-center lg:text-2xl font-bold mb-2">Оставьте ваши данные</h3>
            <p className="text-sm text-center  lg:text-lg mb-8">
              и мы свяжемся с вами, чтобы обсудить эксклюзивные условия сотрудничества
            </p>
            <FormInput
              className="w-[300px] lg:w-[420px] h-[65px] lg:h-[75px] mb-3"
              placeholder="Введите ваше имя"
            />
            <FormInput
              className="w-[300px] lg:w-[420px] h-[65px] lg:h-[75px] mb-3"
              placeholder="Название компании"
            />
            <div className="flex flex-col mb-3 relative">
              <BussinesInput
                className="w-[300px] lg:w-[420px] h-[65px] lg:h-[75px]"
                onClick={() => setListOpen(!isListOpen)}>
                {itemChosen}
              </BussinesInput>
              {isListOpen && (
                <BussinesDropList className="top-20">
                  <BussinesDropListItem
                    onClick={() => {
                      setItemChosen('Розничная торговля');
                      setListOpen(false);
                    }}>
                    Розничная торговля
                  </BussinesDropListItem>
                  <BussinesDropListItem  onClick={() => {
                      setItemChosen('Сторительство');
                      setListOpen(false);
                    }}>
                    Сторительство
                  </BussinesDropListItem>
                  <BussinesDropListItem  onClick={() => {
                      setItemChosen('Дизайн');
                      setListOpen(false);
                    }}>
                    Дизайн
                  </BussinesDropListItem>
                  <BussinesDropListItem  onClick={() => {
                      setItemChosen('Другое');
                      setListOpen(false);
                    }}>
                    Другое
                  </BussinesDropListItem>
                </BussinesDropList>
              )}
            </div>
            <FormInput
              className="w-[300px] lg:w-[420px] h-[65px] lg:h-[75px] mb-3"
              placeholder="Сайт / Instagram"
            />
            <PhoneInput
              className="w-[300px] lg:w-[420px] h-[65px] lg:h-[75px] mb-3 placeholder:text-start"
              placeholder="Ваш номер телефона"
            />
            <FormInput
              className="w-[300px] lg:w-[420px] h-[65px] lg:h-[75px] mb-8"
              placeholder="Электронная почта"
            />
            <div className="flex flex-col-reverse lg:flex-col items-center gap-4">
              <Btn
                kind="btn-primary w-[300px] lg:w-[420px] h-[65px] lg:h-[85px] text-xl mb-4"
                onClick={() => {
                  setFormPartnersFull(false);
                  setDataSent(true);
                }}>
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
          onClick={() => setFormPartnersFull(false)}
          className="fa-sharp cursor-pointer fa-solid fa-xmark fa-2x absolute right-0 lg:right-[-25px] top-[-35px]"></i>
      </div>
    </>
  );
};
export default function ModalFormPartnersFull() {
  const { isFormPartnersFull, setFormPartnersFull } = useContext(ModalFormPartnersFullContext);
  return (
    <>
      {isFormPartnersFull && (
        <>
          <div
            onClick={() => setFormPartnersFull(false)}
            className="blurBG overflow-hidden bg-[rgba(0,0,0,0.75)] w-full h-screen top-2/4 left-2/4 fixed translate-x-[-50%] translate-y-[-50%] z-[90]"></div>
          <Modal />
        </>
      )}
    </>
  );
}
