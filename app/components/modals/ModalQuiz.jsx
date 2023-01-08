import { useState, useContext } from 'react';
import { ModalQuizContext } from '../../contexts/context';
import Btn from '../UI/Btn';

const Modal = () => {
  const { isQuizModal, setQuizModal } = useContext(ModalQuizContext);
  const QuizOption = ({ image, text, id }) => {
    return (
      <div className="flex flex-col items-center justify-center">
        <label for={id}>
          <img src={`/assets/${image}`} className="w-[200px] h-[110px]" />
        </label>
        <div className="mt-[-14px] flex justify-center items-center bg-white relative z-10 checkboxShadow w-6 h-6 rounded-full">
          <input
            id={id}
            type="checkbox"
            className="checkbox relative z-10 border-white active:border-white checkbox-error checkbox-xs w-5 h-5 shadow-2xl bg-[#F0F0F0] checkboxShadow"
          />
        </div>
        <p className="text-lg font-medium">{text}</p>
      </div>
    );
  };
  const QuizProgress = ({ step, className, width }) => {
    return (
      <div className={`flex items-center w-[510px] rounded-[60px] bg-[#2F22221A] h-5 ${className}`}>
        <div className={` bg-[#BF4347] rounded-[60px] h-4  ${width}`}></div>
        <p className="font-mont text-[10px] text-[#2F222299] mx-auto">Вопрос {step} из 6</p>
      </div>
    );
  };
  const QuizSide = ({ children, className }) => {
    const QuizSideListItem = ({ children }) => {
      return (
        <div className="flex items-center gap-2">
          <img src="/assets/QuizCheck.svg" />
          <p className="text-lg">{children}</p>
        </div>
      );
    };
    return (
      <div
        className={`flex justify-center items-center px-5 ${className}`}
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
      <div className="flex pl-12 py-12 ">
        <div className="flex flex-col">
          <QuizProgress width="w-20" step="1" className="mb-8" />
          <h3 className="text-2xl font-bold mb-5">Где вы планируете применять изделия из ДПК?</h3>
          <div className="w-[420px] flex flex-wrap gap-5 mb-10">
            <QuizOption id="111" image="QuizFloor.png" text="Для пола" />
            <QuizOption id="112" image="QuizStairs.png" text="Для ступеней" />
            <QuizOption id="113" image="QuizFloor.png" text="Для забора" />
            <QuizOption id="114" image="QuizFloor.png" text="Для ограждений" />
          </div>
          <Btn className="btn btn-secondary w-[200px] h-[90px] text-xl rounded-[20px]">Далее</Btn>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="fixed flex justify-center top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]  z-[100]">
        <div className="flex justify-between w-[320px] lg:w-[1000px]  mx-auto  text-black bg-white border-[#D5D5D5] rounded-[5px]  z-[100] ">
          <div className='quizDesktop hidden lg:block'>
          <QuizFirstStep />
          <QuizSide />
          </div>
          <div className='block lg:hidden'>
          <QuizSide>
            <Btn className='w'>Приступить</Btn>
             </QuizSide >
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
