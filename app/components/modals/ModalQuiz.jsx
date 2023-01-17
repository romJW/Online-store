import { useState, useContext } from 'react';
import { ModalQuizContext, ModalDataSentContext } from '../../contexts/context';
import Btn from '../UI/Btn';
import CheckBox from '../UI/CheckBox';
import FormInput from '../UI/FormInput';
import PhoneInput from '../UI/PhoneInput';
import ImageUploader from '../UI/ImageUploader';
import UploadImageBtn from '../UI/UploadImageBtn';
const Modal = () => {
  const { isDataSent, setDataSent } = useContext(ModalDataSentContext);
  const { isQuizModal, setQuizModal } = useContext(ModalQuizContext);
  const [isStart, setStart] = useState(false);
  const [isSecond, setSecond] = useState(false);
  const [isThird, setThird] = useState(false);
  const [isFourth, setFourth] = useState(false);
  const [isFifth, setFifth] = useState(false);
  const [isSixth, setSixth] = useState(false);
  const QuizOption = ({ image, text, id }) => {
    return (
      <div className="flex flex-row lg:flex-col justfy-center items-center gap-4 lg:gap-2">
        <div className="flex flex-row-reverse lg:flex-col items-center lg:justify-center">
          <label for={id}>
            <img src={`/assets/${image}`} className="w-24 lg:w-[200px] h-20 lg:h-[110px]" />
          </label>
          <div className="mr-[-14px] lg:mr-0 lg:mt-[-14px] flex justify-center items-center bg-white relative z-10 checkboxShadow w-6 h-6 rounded-full">
            <input
              id={id}
              type="checkbox"
              className="checkbox relative z-10 border-white active:border-white checkbox-error checkbox-xs w-5 h-5 shadow-2xl bg-[#F0F0F0] checkboxShadow"
            />
          </div>
        </div>
        <p className="text-sm lg:text-lg font-medium">{text}</p>
      </div>
    );
  };
  const QuizProgress = ({ step, className, width }) => {
    return (
      <div
        className={`flex relative items-center w-[300px] lg:w-[510px] rounded-[60px] bg-[#2F22221A] h-3 lg:h-5 ${className}`}>
        <div className={`absolute bg-[#BF4347] rounded-[60px] h-4  ${width}`}></div>
        <p className="font-mont font-semibold text-[10px]  mx-auto relative z-10">
          Вопрос {step} из 6
        </p>
      </div>
    );
  };
  const QuizSide = ({ children, className }) => {
    const QuizSideListItem = ({ children }) => {
      return (
        <div className="flex items-center gap-2">
          <img src="/assets/QuizCheck.svg" className="scale-75 lg:scale-100" />
          <p className="text-sm lg:text-lg">{children}</p>
        </div>
      );
    };
    return (
      <div
        className={`flex flex-col gap-8 justify-center items-center rounded-md px-5 bg-no-repeat bg-cover ${className}`}
        style={{ backgroundImage: "url('/assets/QuizSide.png')" }}>
        <div className="py-6 px-5 flex flex-col justify-center items-center bg-[#FDF7F2E5] backdrop-blur rounded-[30px]">
          <div className="flex flex-col gap-2">
            <h3 className="font-days uppercase text-2xl ">
              Ответьте <br /> на 5 вопросов <br /> и получите:
            </h3>
            <QuizSideListItem>рассчет стоимости материалов</QuizSideListItem>
            <QuizSideListItem>сроки и стоимость доставки</QuizSideListItem>
            <QuizSideListItem>
              рекомендации по монтажу <br /> изделий из ДПК
            </QuizSideListItem>
          </div>
        </div>
        {children}
      </div>
    );
  };
  const QuizFirstStep = () => {
    return (
      <div className="flex pt-5 lg:pt-12 pb-12  px-2 lg:pl-12 lg:w-[640px]">
        <div className="flex flex-col justify-center">
          <QuizProgress width="w-20" step="1" className="text-[#2F222299] mb-8" />
          <h3 className="text-lg lg:text-2xl font-bold mb-5">
            Где вы планируете применять изделия из ДПК?
          </h3>
          <div className="lg:w-[420px] flex flex-col lg:justify-center  lg:flex-row flex-wrap gap-5 mb-10">
            <QuizOption id="111" image="QuizFloor.png" text="Для пола" />
            <QuizOption id="112" image="QuizStairs.png" text="Для ступеней" />
            <QuizOption id="113" image="QuizFloor.png" text="Для забора" />
            <QuizOption id="114" image="QuizFloor.png" text="Для ограждений" />
          </div>
          <Btn
            className="btn btn-secondary w-[145px] lg:w-[200px] h-16 lg:h-[90px] text-base lg:text-xl rounded-[20px]"
            onClick={() => setSecond(true)}>
            Далее
          </Btn>
        </div>
      </div>
    );
  };
  const QuizSecondStep = () => {
    return (
      <div className="flex px-2 lg:pl-12 pt-5 pb-12 lg:pt-12 lg:w-[640px]">
        <div className="flex flex-col items-center lg:items-start">
          <QuizProgress width="w-24 lg:w-[170px]" step="2" className="text-[#2F222299] mb-8" />
          <h3 className="text-lg lg:text-2xl font-bold mb-5">
            Укажите точную или примерную <br /> площадь вашего объекта
          </h3>
          <div className="flex flex-col items-center mb-[200px]">
            <FormInput
              className="w-[300px] lg:w-[420px] h-16 lg:h-[75px] mb-2"
              placeholder="↔ Длина"
            />
            <FormInput className="w-[300px] lg:w-[420px] h-16 lg:h-[75px]" placeholder="↕ Ширина" />
          </div>
          <div className="flex gap-2">
            <Btn
              className="btn btn-secondary w-[145px] lg:w-[200px] h-16 lg:h-[90px] text-base lg:text-xl rounded-[20px] bg-[#C0B9BA]"
              onClick={() => setSecond(false)}>
              Назад
            </Btn>
            <Btn
              className="btn btn-secondary w-[145px] lg:w-[200px] h-16 lg:h-[90px] text-base lg:text-xl rounded-[20px]"
              onClick={() => {
                setSecond(false);
                setThird(true);
              }}>
              Далее
            </Btn>
          </div>
        </div>
      </div>
    );
  };
  const QuizThirdStep = () => {
    return (
      <div className="flex px-2 lg:pl-12 pt-5 pb-12 lg:pt-12 lg:w-[640px]">
        <div className="flex flex-col items-center lg:items-start">
          <QuizProgress width="w-[150px] lg:w-[250px]" step="3" className="text-[#2F222299] mb-8" />
          <h3 className="text-lg lg:text-2xl font-bold mb-5">
            Есть ли у вас готовый проект <br /> или план?
          </h3>
          <ImageUploader className="mb-[200px] hidden lg:block" />
          <div className="block lg:hidden">
            <UploadImageBtn className="w-[300px] mb-5" />
            <div className="flex gap-2 mb-[250px]">
              <input
                id={name}
                type="checkbox"
                className="checkbox border-white active:border-white checkbox-error checkbox-xs w-6 h-6 shadow-2xl bg-[#F0F0F0]"
              />
              <label for={name} className="text-sm font-medium">
                У меня пока нет проекта
              </label>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Btn
              className="btn btn-secondary w-[145px] lg:w-[200px] h-16 lg:h-[90px] text-base lg:text-xl rounded-[20px] bg-[#C0B9BA]"
              onClick={() => {
                setThird(false);
                setSecond(true);
              }}>
              Назад
            </Btn>
            <Btn
              className="btn btn-secondary w-[145px] lg:w-[200px] h-16 lg:h-[90px] text-base lg:text-xl rounded-[20px]"
              onClick={() => {
                setThird(false);
                setFourth(true);
              }}>
              Далее
            </Btn>
          </div>
        </div>
      </div>
    );
  };
  const QuizFourthStep = () => {
    return (
      <div className="flex pt-5 lg:pt-12 pb-12  px-2 lg:pl-12 lg:w-[640px]">
        <div className="flex flex-col justify-center">
          <QuizProgress width="w-[200px] lg:w-[340px]" step="4" className="mb-8 text-white" />
          <h3 className="text-lg lg:text-2xl font-bold mb-5">
            Планируете закрывать торцы досок/ступеней?
          </h3>
          <div className="lg:w-[420px] flex flex-col lg:justify-center  lg:flex-row gap-5 mb-[210px]">
            <QuizOption id="115" image="QuizFloor.png" text="Да, конечно" />
            <QuizOption id="116" image="QuizStairs.png" text="Нет, оставлю торец открытый" />
          </div>
          <div className="flex items-center gap-2">
            <Btn
              className="btn btn-secondary w-[145px] lg:w-[200px] h-16 lg:h-[90px] text-base lg:text-xl rounded-[20px] bg-[#C0B9BA]"
              onClick={() => {
                setThird(true);
                setFourth(false);
              }}>
              Назад
            </Btn>
            <Btn
              className="btn btn-secondary w-[145px] lg:w-[200px] h-16 lg:h-[90px] text-base lg:text-xl rounded-[20px]"
              onClick={() => {
                setFourth(false);
                setFifth(true);
              }}>
              Далее
            </Btn>
          </div>
        </div>
      </div>
    );
  };
  const QuizFifthStep = () => {
    return (
      <div className="flex pt-5 lg:pt-12 pb-12  px-2 lg:pl-12 lg:w-[640px]">
        <div className="flex flex-col justify-center">
          <QuizProgress width="w-[250px] lg:w-[420px]" step="5" className="mb-8 text-white" />
          <h3 className="text-lg lg:text-2xl font-bold mb-5">
            Куда необходимо выполнить доставку?
          </h3>
          <FormInput
            className="w-[300px] lg:w-[420px] h-16 lg:h-[75px] mb-[280px]"
            placeholder="Введите ваш город"
          />
          <div className="flex items-center gap-2">
            <Btn
              className="btn btn-secondary w-[145px] lg:w-[200px] h-16 lg:h-[90px] text-base lg:text-xl rounded-[20px] bg-[#C0B9BA]"
              onClick={() => {
                setThird(true);
                setFourth(false);
              }}>
              Назад
            </Btn>
            <Btn
              className="btn btn-secondary w-[145px] lg:w-[200px] h-16 lg:h-[90px] text-base lg:text-xl rounded-[20px]"
              onClick={() => {
                setFifth(false);
                setSixth(true);
              }}>
              Далее
            </Btn>
          </div>
        </div>
      </div>
    );
  };
  const QuizSixthStep = () => {
    return (
      <div className="flex pt-5 lg:pt-12 pb-12  px-2 lg:pl-12 lg:w-[640px]">
        <div className="flex flex-col justify-center">
          <QuizProgress width="w-[300px] lg:w-[510px]" step="6" className="mb-8 text-white"  />
          <h3 className="text-lg lg:text-2xl font-bold mb-1">Оставьте ваши данные</h3>
          <p className="text-sm lg:text-lg mb-4">
            и мы свяжется с вами, чтобы проконсультировать по стоимости и срокам доставки
          </p>
          <div className="flex flex-col gap-2">
            <FormInput
              className="w-[300px] lg:w-[420px] h-16 lg:h-[75px]"
              placeholder="Введите ваш город"
            />
            <PhoneInput
              className="w-[300px] lg:w-[420px] h-16 lg:h-[75px]"
              placeholder="Номер телефона"
            />
            <FormInput
              className="w-[300px] lg:w-[420px] h-16 lg:h-[75px] mb-10 lg:mb-20"
              placeholder="Электронная почта"
            />
          </div>
          <div className='flex flex-col'>
          <Btn
            kind="btn-primary w-[300px] lg:w-[420px] h-[65px] lg:h-[85px] text-xl mb-4"
            onClick={() => {
              setQuizModal(false);
              setDataSent(true);
            }}>
            Отправить
          </Btn>
          <div className="flex items-start  gap-3">
            <CheckBox className="w-5 h-5" />
            <p className="text-sm  text-[#4E5CD1] font-[Montserrat]">
              <span className="text-[#2F222266]">Согласен с</span> политикой конфиденциальности
              <br />и обработкой моих персональных данных
            </p>
          </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="fixed flex justify-center top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]  z-[100]">
        <div className=" mx-auto  text-black bg-white border-[#D5D5D5] rounded-[5px]  z-[100] ">
          <div className="quizDesktop hidden lg:flex justify-between">
            {!isSecond && !isThird && !isFourth && !isFifth && !isSixth && <QuizFirstStep />}
            {isSecond && <QuizSecondStep />}
            {isThird && <QuizThirdStep />}
            {isFourth && <QuizFourthStep />}
            {isFifth && <QuizFifthStep />}
            {isSixth && <QuizSixthStep />}
            <QuizSide className="w-[400px]" />
          </div>
          <div className="block lg:hidden">
            {!isStart && !isSecond && !isThird && !isFourth && !isFifth && !isSixth && (
              <QuizSide className="w-[320px] h-[470px]">
                <Btn className="btn btn-primary w-[280px] h-16" onClick={() => setStart(true)}>
                  Приступить
                </Btn>
              </QuizSide>
            )}
            {isStart && !isSecond && !isThird && !isFourth && !isFifth && !isSixth && <QuizFirstStep />}
            {isSecond && <QuizSecondStep />}
            {isThird && <QuizThirdStep />}
            {isFourth && <QuizFourthStep />}
            {isFifth && <QuizFifthStep />}
            {isSixth && <QuizSixthStep />}
          </div>
        </div>
        <i
          onClick={() => setQuizModal(false)}
          className="fa-sharp cursor-pointer fa-solid fa-xmark fa-3x absolute right-0 lg:right-[-40px] top-[-50px]"></i>
      </div>
    </>
  );
};
export default function ModalQuiz() {
  const { isQuizModal, setQuizModal } = useContext(ModalQuizContext);
  return (
    <>
      {isQuizModal && (
        <>
          <div
            onClick={() => setQuizModal(false)}
            className="blurBG  bg-[rgba(0,0,0,0.75)] w-full h-screen top-2/4 left-2/4 fixed translate-x-[-50%] translate-y-[-50%] z-[90]"></div>
          <Modal />
        </>
      )}
    </>
  );
}
