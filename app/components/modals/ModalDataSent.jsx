import { useContext} from 'react';
import { ModalDataSentContext } from '../../contexts/context';

const Modal = () => {
  const { isDataSent, setDataSent } = useContext(ModalDataSentContext);

  return (
    <>
      <div className="fixed flex justify-center top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]  z-[100]">
        <div className="w-[320px] lg:w-[1040px] max-h-[230px] mx-auto py-10 lg:py-20  text-black bg-white border-[#D5D5D5] rounded-[5px]  z-[100] overflow-auto">
          <div class="flex flex-col items-center justify-center gap-2 text-center px-8 lg:px-0">
            <p className='font-bold text-lg lg:text-2xl '>Ваши данные успешно отправлены</p>
            <p className='text-sm lg:text-lg'>Наш менеджер свяжется с вами в ближайшее время</p>
          </div>
        </div>
        <i
          onClick={() => setDataSent(false)}
          className="fa-sharp cursor-pointer fa-solid fa-xmark fa-3x absolute right-0 lg:right-[-40px] top-[-50px]"></i>
      </div>
    </>
  );
};
export default function ModalDataSent() {
    const { isDataSent, setDataSent } = useContext(ModalDataSentContext);
  return (
    <>
      {isDataSent && (
        <>
          <div
            onClick={() => setDataSent(false)}
            className="blurBG  bg-[rgba(0,0,0,0.75)] w-full h-screen top-2/4 left-2/4 fixed translate-x-[-50%] translate-y-[-50%] z-[90]"></div>
          <Modal />
        </>
      )}
    </>
  );
}
